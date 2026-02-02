import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'divisions' })
export class DivisionEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string;

  @Column({ type: 'varchar', nullable: true })
  name: string;
}
