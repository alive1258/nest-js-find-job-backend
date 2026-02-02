import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DistrictEntity } from './entities/districts.entity';

@Injectable()
export class DistrictService implements OnModuleInit {
  constructor(
    @InjectRepository(DistrictEntity)
    private readonly districtRepository: Repository<DistrictEntity>,
  ) {}

  /**
   * Seed static Bangladesh district data
   */
  async onModuleInit(): Promise<void> {
    const districts = [
      // Dhaka Division
      { name: 'Dhaka' },
      { name: 'Gazipur' },
      { name: 'Narayanganj' },
      { name: 'Narsingdi' },
      { name: 'Manikganj' },
      { name: 'Munshiganj' },
      { name: 'Tangail' },
      { name: 'Kishoreganj' },
      { name: 'Faridpur' },
      { name: 'Gopalganj' },
      { name: 'Madaripur' },
      { name: 'Rajbari' },
      { name: 'Shariatpur' },

      // Chattogram Division
      { name: 'Chattogram' },
      { name: 'Cox’s Bazar' },
      { name: 'Cumilla' },
      { name: 'Noakhali' },
      { name: 'Feni' },
      { name: 'Lakshmipur' },
      { name: 'Brahmanbaria' },
      { name: 'Chandpur' },
      { name: 'Khagrachari' },
      { name: 'Rangamati' },
      { name: 'Bandarban' },

      // Rajshahi Division
      { name: 'Rajshahi' },
      { name: 'Natore' },
      { name: 'Naogaon' },
      { name: 'Chapainawabganj' },
      { name: 'Bogura' },
      { name: 'Joypurhat' },
      { name: 'Sirajganj' },
      { name: 'Pabna' },

      // Khulna Division
      { name: 'Khulna' },
      { name: 'Jessore' },
      { name: 'Satkhira' },
      { name: 'Bagerhat' },
      { name: 'Jhenaidah' },
      { name: 'Narail' },
      { name: 'Magura' },
      { name: 'Kushtia' },
      { name: 'Chuadanga' },
      { name: 'Meherpur' },

      // Barishal Division
      { name: 'Barishal' },
      { name: 'Bhola' },
      { name: 'Patuakhali' },
      { name: 'Pirojpur' },
      { name: 'Jhalokathi' },
      { name: 'Barguna' },

      // Sylhet Division
      { name: 'Sylhet' },
      { name: 'Moulvibazar' },
      { name: 'Habiganj' },
      { name: 'Sunamganj' },

      // Rangpur Division
      { name: 'Rangpur' },
      { name: 'Dinajpur' },
      { name: 'Thakurgaon' },
      { name: 'Panchagarh' },
      { name: 'Nilphamari' },
      { name: 'Lalmonirhat' },
      { name: 'Kurigram' },
      { name: 'Gaibandha' },

      // Mymensingh Division
      { name: 'Mymensingh' },
      { name: 'Jamalpur' },
      { name: 'Sherpur' },
      { name: 'Netrokona' },
    ];

    for (const district of districts) {
      const exists = await this.districtRepository.findOne({
        where: { name: district.name },
      });

      if (!exists) {
        await this.districtRepository.save(district);
      }
    }
  }

  /**
   * Get all districts
   */
  async findAll(): Promise<DistrictEntity[]> {
    return this.districtRepository.find({
      order: { name: 'ASC' },
    });
  }
}
