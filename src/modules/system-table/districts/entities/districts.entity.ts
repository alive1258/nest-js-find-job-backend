import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'districts' })
export class DistrictEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string;

  @Column({ type: 'varchar', nullable: true })
  name: string;
}
