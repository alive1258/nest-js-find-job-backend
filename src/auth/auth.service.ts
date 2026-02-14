import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { SignInProvider } from './providers/sign-in.provider';
import { RefreshTokensProvider } from './providers/refresh-tokens.provider';
import { VerifyOTPProvider } from './providers/veryfy-otp.provider';
import { UsersService } from 'src/modules/users/users.service';
import { MailService } from 'src/modules/mail/mail.service';
import { HashingProvider } from './providers/hashing.provider';
import { UserOTPDto } from './dto/user-otp.dto';
import { OtpResponse } from './response';
import { Request } from 'express';
import { ResetPasswordDto } from './dto/reset-password.dtos';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    /**
     * Inject SigInProvider
     */
    private readonly signInProvider: SignInProvider,
    /**
     * Inject RefreshTokensProvider
     */
    private readonly refreshTokensProvider: RefreshTokensProvider,
    /**
     * Inject verifyOTPProvider
     */
    private readonly verifyOTPProvider: VerifyOTPProvider,
    /**
     * Inject usersService
     */
    private readonly usersService: UsersService,
    /**
     * Inject otpService
     */

    private readonly mailService: MailService,

    // Inject hashingPassword
    private readonly hashingProvider: HashingProvider,
  ) {}
  public async signIn(signInDto: SignInDto) {
    return await this.signInProvider.signIn(signInDto);
  }

  public async refreshTokens(refreshToken: string) {
    return await this.refreshTokensProvider.refreshTokens(refreshToken);
  }

  public async verifyOTP(userOTPDto: UserOTPDto) {
    return await this.verifyOTPProvider.verifyOTP(userOTPDto);
  }

  public async resendOTP(
    email: string,
    expireTime: number = 2 * 60 * 1000,
  ): Promise<OtpResponse> {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) throw new BadRequestException('User not found.');

    await this.mailService.resendOtp(user, expireTime);

    return { message: 'OTP has been resent successfully.' };
  }

  public async getMe(req: Request): Promise<{ user: User }> {
    // get user id

    const user_id = req?.user?.sub;

    if (!user_id) {
      throw new BadRequestException('You have to Sign in.');
    }
    let result = {} as any;
    // Fetch user with valid relations
    const user = await this.usersService.findOneForResendOTP(user_id);

    result.user = user;

    return {
      user: result?.user,
    };
  }

  // reset password
  public async changePassword(
    userId: string,
    resetPasswordDto: ResetPasswordDto,
  ) {
    const { old_password, new_password, confirm_password } = resetPasswordDto;

    // 1. Find user WITH password
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      select: ['id', 'password'], // IMPORTANT
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // 2. Compare old password
    const isMatch = await this.hashingProvider.comparePassword(
      old_password,
      user.password,
    );

    if (!isMatch) {
      throw new UnauthorizedException('Old password is incorrect');
    }

    // 3. New password match check
    if (new_password !== confirm_password) {
      throw new BadRequestException(
        'New password and confirm password do not match',
      );
    }

    // 4. Prevent same password reuse (industry standard)
    const isSame = await this.hashingProvider.comparePassword(
      new_password,
      user.password,
    );

    if (isSame) {
      throw new BadRequestException(
        'New password cannot be the same as old password',
      );
    }

    // 5. Hash new password
    const hashedPassword =
      await this.hashingProvider.hashPassword(new_password);

    user.password = hashedPassword;

    await this.usersRepository.save(user);

    return {
      message: 'Password changed successfully',
    };
  }

  // forget password
  public async forgetPassword(
    email: string,
    expireTime: number = 5 * 60 * 1000,
  ): Promise<OtpResponse> {
    if (!email) {
      throw new BadRequestException('Email is required.');
    }

    // Find user
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new NotFoundException('User not found. Please check the email.');
    }

    // Resend OTP with expire time
    await this.mailService.resendOtp(user, expireTime);

    return {
      message: 'OTP has been sent to your email successfully.',
    };
  }

  public async resendForgetPasswordOtp(
    userId: string,
    email: string,
    expireTime: number = 5 * 60 * 1000, // default 5 minutes
  ): Promise<OtpResponse> {
    // Validate user
    const user = await this.usersService.findOneForResendOTP(userId);
    if (!user || user.email !== email) {
      throw new BadRequestException('User not found or email mismatch.');
    }

    // Send OTP via mail service
    await this.mailService.resendOtp(user, expireTime);

    return { message: 'OTP has been resent successfully.' };
  }

  /**
   * Clean up expired refresh tokens (call this from cron job)
   */
}
