import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'upzelas' })
export class UpzelaEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string;

  @Column({ type: 'varchar', nullable: true })
  name: string;
}
