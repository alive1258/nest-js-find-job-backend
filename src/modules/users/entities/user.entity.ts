import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  /* =========================
     IDENTIFIERS
  ========================== */

  @PrimaryGeneratedColumn('uuid')
  id: string;

  /* =========================
     BASIC INFO
  ========================== */

  @Column({ type: 'varchar', length: 100, nullable: true })
  name?: string;

  @Column({ type: 'varchar', length: 15, nullable: false })
  mobile: string;

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  /* =========================
     PROFILE INFO
  ========================== */

  @Column({ type: 'varchar', length: 100, nullable: true })
  designation?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  bio?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  image?: string;

  @Column({ type: 'simple-array', nullable: true })
  social_links?: string[];

  @Column({ type: 'simple-array', nullable: true })
  skills?: string[]; // stores array as comma-separated values

  /* =========================
     ACCOUNT INFO
  ========================== */

  @Column({ type: 'varchar', length: 50, default: 'user' })
  role: string;

  @Column({ default: 0 })
  token_version: number;

  @Column({ type: 'boolean', default: false })
  has_refresh_token: boolean;

  @Column({ type: 'boolean', default: false })
  is_verified: boolean;

  /* =========================
     SECURITY
  ========================== */

  @Column({ type: 'varchar', nullable: false })
  @Exclude()
  password: string;

  @Column({ type: 'varchar', nullable: true })
  @Exclude()
  remember_token?: string;

  /* =========================
     LOCATION / ADDRESS
  ========================== */

  @Column({ type: 'varchar', length: 255, nullable: true })
  address?: string;

  /* =========================
     TIMESTAMPS
  ========================== */

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
