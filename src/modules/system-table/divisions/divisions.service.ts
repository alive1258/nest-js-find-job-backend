import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DivisionEntity } from './entities/divisions.entity';

@Injectable()
export class DivisionService implements OnModuleInit {
  constructor(
    @InjectRepository(DivisionEntity)
    private readonly divisionRepository: Repository<DivisionEntity>,
  ) {}

  /**
   * Seed static Bangladesh division data
   */
  async onModuleInit(): Promise<void> {
    const divisions = [
      { name: 'Dhaka' },
      { name: 'Chattogram' },
      { name: 'Rajshahi' },
      { name: 'Khulna' },
      { name: 'Barishal' },
      { name: 'Sylhet' },
      { name: 'Rangpur' },
      { name: 'Mymensingh' },
    ];

    for (const division of divisions) {
      const exists = await this.divisionRepository.findOne({
        where: { name: division.name },
      });

      if (!exists) {
        await this.divisionRepository.save(division);
      }
    }
  }

  /**
   * Get all divisions
   */
  async findAll(): Promise<DivisionEntity[]> {
    return this.divisionRepository.find({
      order: { name: 'ASC' },
    });
  }
}
