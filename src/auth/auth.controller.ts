import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { ApiDoc } from './decorators/swagger.decorator';
import {
  AuthResponse,
  OtpResponse,
  TokenResponse,
  VerifyOtpResponse,
} from './response';
import { Auth } from './decorators/auth.decorator';
import { AuthType } from './enums/auth-type.enum';
import { SignInDto } from './dto/signin.dto';
import { UserOTPDto } from './dto/user-otp.dto';
import type { Request } from 'express';
import { JwtOrApiKeyGuard } from './guards/jwt-or-api-key.guard';
import { ResendOtpDto } from './dto/resend-otp.dto';
// import { Throttle } from '@nestjs/throttler';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { Throttle } from '@nestjs/throttler';
import { ForgetPasswordOtpDto } from './dto/forget-password-otp.dto';
import { ResetPasswordDto } from './dto/reset-password.dtos';

@ApiTags('Authentication')
@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(
    /**
     * inject auth service
     */
    private readonly authService: AuthService,
  ) {}
  @ApiDoc({
    summary: 'User Sign-In',
    description:
      'Handles user sign-in with email and password. Sets refresh token as HTTP-only cookie.',
    response: AuthResponse,
    status: HttpStatus.OK,
  })
  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  @Auth(AuthType.None)
  public async SignIn(@Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto);
  }

  /**
   * Get me controller
   */
  @UseGuards(JwtOrApiKeyGuard)
  @Get('get-me')
  @ApiDoc({
    summary: 'User Logout',
    description: 'Signs out user by invalidating their refresh token.',
    status: HttpStatus.OK,
  })
  getMe(@Req() req: Request) {
    return this.authService.getMe(req);
  }

  /**
   * Resend OTP
   */
  @ApiDoc({
    summary: 'Resend OTP',
    description: 'Resends a one-time password to the specified email address.',
    response: OtpResponse,
    status: HttpStatus.OK,
  })
  @Post('resend-otp')
  // @Throttle({ default: { limit: 5, ttl: 60 * 60 } }) // 5 attempts per  hours
  @Auth(AuthType.None)
  public resendOTP(@Body() dto: ResendOtpDto) {
    return this.authService.resendOTP(dto.email);
  }

  /**
   * reset password or Change Password (Logged In User)
   */
  @ApiDoc({
    summary: 'Change Password',
    description: 'Allows logged-in user to change account password',
    status: HttpStatus.OK,
  })
  @Post('reset-password')
  @UseGuards(JwtOrApiKeyGuard)
  @HttpCode(HttpStatus.OK)
  @Auth(AuthType.Bearer)
  public async changePassword(
    @Req() req: Request & { user: { id: string } },
    @Body() resetPasswordDto: ResetPasswordDto,
  ) {
    return this.authService.changePassword(req.user.id, resetPasswordDto);
  }

  /**
   *forget password Resend OTP controller
   */
  @ApiDoc({
    summary: 'Resend OTP',
    description: 'Resends a one-time password to the specified email address.',
    response: OtpResponse,
    status: HttpStatus.OK,
  })
  @Throttle({ default: { limit: 3, ttl: 60 * 60 } }) // per 24 hours an user can try 3 times
  @Post('forget-password/resend-otp')
  public async resendOTPForForgetPassword(
    @Body() dto: ForgetPasswordOtpDto,
  ): Promise<OtpResponse> {
    const expireTime = 2 * 60 * 1000; // 5 minutes
    return this.authService.resendForgetPasswordOtp(
      dto.userId,
      dto.IsEmail,
      expireTime,
    );
  }

  /**
   * Forget Password controller
   */

  @Throttle({ default: { limit: 3, ttl: 60 * 60 } }) // per 24 hours an user can try 3 times
  @Post('/forget-password')
  public async forgetPassword(@Body() dto: ResendOtpDto): Promise<OtpResponse> {
    // expireTime can be passed optionally, defaults to 5 minutes
    return this.authService.forgetPassword(dto.email);
  }

  // refresh-token
  @ApiDoc({
    summary: 'Token Refresh',
    description:
      'Generates new access and refresh tokens using existing refresh token.',
    response: TokenResponse,
    status: HttpStatus.OK,
  })
  @Post('refresh-token')
  @UseGuards(RefreshTokenGuard)
  @HttpCode(HttpStatus.OK)
  @Auth(AuthType.None)
  public async refreshTokens(@Req() req: Request) {
    //get refresh token form cookies
    const refreshToken = req.cookies?.refreshToken as string;
    //sign in
    return await this.authService.refreshTokens(refreshToken);
  }

  /**
   * Verify OTP controller
   */
  @ApiDoc({
    summary: 'Verify OTP',
    description: 'Verifies the one-time password sent to the email address.',
    response: VerifyOtpResponse,
    status: HttpStatus.OK,
  })
  @Post('verify-otp')
  @Auth(AuthType.None)
  public verifyOTP(@Body() userOTPDto: UserOTPDto) {
    return this.authService.verifyOTP(userOTPDto);
  }

  @ApiDoc({
    summary: 'User Logout',
    description: 'Signs out user by invalidating their refresh token.',
    status: HttpStatus.OK,
  })
  @Post('sign-out')
  @UseGuards(JwtOrApiKeyGuard)
  @HttpCode(HttpStatus.OK)
  @Auth(AuthType.Bearer)
  public logOut() {
    // cookies are cleared in data interceptor. DataResponseInterceptor.
    return {
      message: 'Successfully signed out.',
    };
  }
}
