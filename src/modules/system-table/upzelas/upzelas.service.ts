import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpzelaEntity } from './entities/upzelas.entity';

@Injectable()
export class UpzelaService implements OnModuleInit {
  constructor(
    @InjectRepository(UpzelaEntity)
    private readonly upazilaRepository: Repository<UpzelaEntity>,
  ) {}

  /**
   * Seed static Bangladesh upazila data
   */
  async onModuleInit(): Promise<void> {
    const upazilas = [
      // Dhaka District (8)
      { name: 'Dhamrai', districtId: 1 },
      { name: 'Dohar', districtId: 1 },
      { name: 'Keraniganj', districtId: 1 },
      { name: 'Nawabganj', districtId: 1 },
      { name: 'Savar', districtId: 1 },

      // Faridpur District (9)
      { name: 'Alfadanga', districtId: 2 },
      { name: 'Bhanga', districtId: 2 },
      { name: 'Boalmari', districtId: 2 },
      { name: 'Charbhadrasan', districtId: 2 },
      { name: 'Faridpur Sadar', districtId: 2 },
      { name: 'Madhukhali', districtId: 2 },
      { name: 'Nagarkanda', districtId: 2 },
      { name: 'Sadarpur', districtId: 2 },
      { name: 'Saltha', districtId: 2 },

      // Gazipur District (5)
      { name: 'Gazipur Sadar', districtId: 3 },
      { name: 'Kaliakair', districtId: 3 },
      { name: 'Kaliganj', districtId: 3 },
      { name: 'Kapasia', districtId: 3 },
      { name: 'Sreepur', districtId: 3 },

      // Gopalganj District (5)
      { name: 'Gopalganj Sadar', districtId: 4 },
      { name: 'Kashiani', districtId: 4 },
      { name: 'Kotalipara', districtId: 4 },
      { name: 'Muksudpur', districtId: 4 },
      { name: 'Tungipara', districtId: 4 },

      // Kishoreganj District (13)
      { name: 'Austagram', districtId: 5 },
      { name: 'Bajitpur', districtId: 5 },
      { name: 'Bhairab', districtId: 5 },
      { name: 'Hossainpur', districtId: 5 },
      { name: 'Itna', districtId: 5 },
      { name: 'Karimganj', districtId: 5 },
      { name: 'Katiadi', districtId: 5 },
      { name: 'Kishoreganj Sadar', districtId: 5 },
      { name: 'Kuliarchar', districtId: 5 },
      { name: 'Mithamain', districtId: 5 },
      { name: 'Nikli', districtId: 5 },
      { name: 'Pakundia', districtId: 5 },
      { name: 'Tarail', districtId: 5 },

      // Madaripur District (4)
      { name: 'Kalkini', districtId: 6 },
      { name: 'Madaripur Sadar', districtId: 6 },
      { name: 'Rajoir', districtId: 6 },
      { name: 'Shibchar', districtId: 6 },

      // Manikganj District (7)
      { name: 'Daulatpur', districtId: 7 },
      { name: 'Ghior', districtId: 7 },
      { name: 'Harirampur', districtId: 7 },
      { name: 'Manikganj Sadar', districtId: 7 },
      { name: 'Saturia', districtId: 7 },
      { name: 'Shivalaya', districtId: 7 },
      { name: 'Singair', districtId: 7 },

      // Munshiganj District (6)
      { name: 'Gazaria', districtId: 8 },
      { name: 'Louhajang', districtId: 8 },
      { name: 'Munshiganj Sadar', districtId: 8 },
      { name: 'Sirajdikhan', districtId: 8 },
      { name: 'Sreenagar', districtId: 8 },
      { name: 'Tongibari', districtId: 8 },

      // Narayanganj District (5)
      { name: 'Araihazar', districtId: 9 },
      { name: 'Bandar', districtId: 9 },
      { name: 'Narayanganj Sadar', districtId: 9 },
      { name: 'Rupganj', districtId: 9 },
      { name: 'Sonargaon', districtId: 9 },

      // Narsingdi District (6)
      { name: 'Belabo', districtId: 10 },
      { name: 'Monohardi', districtId: 10 },
      { name: 'Narsingdi Sadar', districtId: 10 },
      { name: 'Palash', districtId: 10 },
      { name: 'Raipura', districtId: 10 },
      { name: 'Shibpur', districtId: 10 },

      // Rajbari District (5)
      { name: 'Baliakandi', districtId: 11 },
      { name: 'Goalandaghat', districtId: 11 },
      { name: 'Pangsha', districtId: 11 },
      { name: 'Rajbari Sadar', districtId: 11 },
      { name: 'Kalukhali', districtId: 11 },

      // Shariatpur District (7)
      { name: 'Bhedarganj', districtId: 12 },
      { name: 'Damudya', districtId: 12 },
      { name: 'Gosairhat', districtId: 12 },
      { name: 'Naria', districtId: 12 },
      { name: 'Shariatpur Sadar', districtId: 12 },
      { name: 'Zajira', districtId: 12 },
      { name: 'Shakhipur', districtId: 12 },

      // Tangail District (12)
      { name: 'Basail', districtId: 13 },
      { name: 'Bhuapur', districtId: 13 },
      { name: 'Delduar', districtId: 13 },
      { name: 'Dhanbari', districtId: 13 },
      { name: 'Ghatail', districtId: 13 },
      { name: 'Gopalpur', districtId: 13 },
      { name: 'Kalihati', districtId: 13 },
      { name: 'Madhupur', districtId: 13 },
      { name: 'Mirzapur', districtId: 13 },
      { name: 'Nagarpur', districtId: 13 },
      { name: 'Sakhipur', districtId: 13 },
      { name: 'Tangail Sadar', districtId: 13 },

      // Brahmanbaria District (9)
      { name: 'Akhaura', districtId: 14 },
      { name: 'Bancharampur', districtId: 14 },
      { name: 'Brahmanbaria Sadar', districtId: 14 },
      { name: 'Kasba', districtId: 14 },
      { name: 'Nabinagar', districtId: 14 },
      { name: 'Nasirnagar', districtId: 14 },
      { name: 'Sarail', districtId: 14 },
      { name: 'Ashuganj', districtId: 14 },
      { name: 'Bijoynagar', districtId: 14 },

      // Chandpur District (8)
      { name: 'Chandpur Sadar', districtId: 15 },
      { name: 'Faridganj', districtId: 15 },
      { name: 'Haimchar', districtId: 15 },
      { name: 'Haziganj', districtId: 15 },
      { name: 'Kachua', districtId: 15 },
      { name: 'Matlab Dakshin', districtId: 15 },
      { name: 'Matlab Uttar', districtId: 15 },
      { name: 'Shahrasti', districtId: 15 },

      // Chittagong District (14)
      { name: 'Anwara', districtId: 16 },
      { name: 'Banshkhali', districtId: 16 },
      { name: 'Boalkhali', districtId: 16 },
      { name: 'Chandanaish', districtId: 16 },
      { name: 'Fatikchhari', districtId: 16 },
      { name: 'Hathazari', districtId: 16 },
      { name: 'Lohagara', districtId: 16 },
      { name: 'Mirsharai', districtId: 16 },
      { name: 'Patiya', districtId: 16 },
      { name: 'Rangunia', districtId: 16 },
      { name: 'Raozan', districtId: 16 },
      { name: 'Sandwip', districtId: 16 },
      { name: 'Satkania', districtId: 16 },
      { name: 'Sitakunda', districtId: 16 },

      // Comilla District (16)
      { name: 'Barura', districtId: 17 },
      { name: 'Brahmanpara', districtId: 17 },
      { name: 'Burichang', districtId: 17 },
      { name: 'Chandina', districtId: 17 },
      { name: 'Chauddagram', districtId: 17 },
      { name: 'Daudkandi', districtId: 17 },
      { name: 'Debidwar', districtId: 17 },
      { name: 'Homna', districtId: 17 },
      { name: 'Comilla Sadar', districtId: 17 },
      { name: 'Laksam', districtId: 17 },
      { name: 'Manoharganj', districtId: 17 },
      { name: 'Meghna', districtId: 17 },
      { name: 'Muradnagar', districtId: 17 },
      { name: 'Nangalkot', districtId: 17 },
      { name: 'Titas', districtId: 17 },
      { name: 'Monohargonj', districtId: 17 },

      // Cox's Bazar District (8)
      { name: 'Chakaria', districtId: 18 },
      { name: "Cox's Bazar Sadar", districtId: 18 },
      { name: 'Kutubdia', districtId: 18 },
      { name: 'Maheshkhali', districtId: 18 },
      { name: 'Ramu', districtId: 18 },
      { name: 'Teknaf', districtId: 18 },
      { name: 'Ukhia', districtId: 18 },
      { name: 'Pekua', districtId: 18 },

      // Feni District (6)
      { name: 'Chhagalnaiya', districtId: 19 },
      { name: 'Daganbhuiyan', districtId: 19 },
      { name: 'Feni Sadar', districtId: 19 },
      { name: 'Parshuram', districtId: 19 },
      { name: 'Sonagazi', districtId: 19 },
      { name: 'Fulgazi', districtId: 19 },

      // Khagrachhari District (8)
      { name: 'Dighinala', districtId: 20 },
      { name: 'Khagrachhari Sadar', districtId: 20 },
      { name: 'Lakshmichhari', districtId: 20 },
      { name: 'Mahalchhari', districtId: 20 },
      { name: 'Manikchhari', districtId: 20 },
      { name: 'Matiranga', districtId: 20 },
      { name: 'Panchhari', districtId: 20 },
      { name: 'Ramgarh', districtId: 20 },

      // Lakshmipur District (5)
      { name: 'Kamalnagar', districtId: 21 },
      { name: 'Lakshmipur Sadar', districtId: 21 },
      { name: 'Raipur', districtId: 21 },
      { name: 'Ramganj', districtId: 21 },
      { name: 'Ramgati', districtId: 21 },

      // Noakhali District (9)
      { name: 'Begumganj', districtId: 22 },
      { name: 'Chatkhil', districtId: 22 },
      { name: 'Companiganj', districtId: 22 },
      { name: 'Hatiya', districtId: 22 },
      { name: 'Kabirhat', districtId: 22 },
      { name: 'Noakhali Sadar', districtId: 22 },
      { name: 'Senbagh', districtId: 22 },
      { name: 'Sonaimuri', districtId: 22 },
      { name: 'Subarnachar', districtId: 22 },

      // Rangamati District (10)
      { name: 'Bagaichhari', districtId: 23 },
      { name: 'Barkal', districtId: 23 },
      { name: 'Kawkhali', districtId: 23 },
      { name: 'Belaichhari', districtId: 23 },
      { name: 'Kaptai', districtId: 23 },
      { name: 'Juraichhari', districtId: 23 },
      { name: 'Langadu', districtId: 23 },
      { name: 'Naniyachar', districtId: 23 },
      { name: 'Rajasthali', districtId: 23 },
      { name: 'Rangamati Sadar', districtId: 23 },

      // Bandarban District (7)
      { name: 'Ali Kadam', districtId: 24 },
      { name: 'Bandarban Sadar', districtId: 24 },
      { name: 'Lama', districtId: 24 },
      { name: 'Naikhongchhari', districtId: 24 },
      { name: 'Rowangchhari', districtId: 24 },
      { name: 'Ruma', districtId: 24 },
      { name: 'Thanchi', districtId: 24 },

      // Bogra District (12)
      { name: 'Adamdighi', districtId: 25 },
      { name: 'Bogra Sadar', districtId: 25 },
      { name: 'Dhunat', districtId: 25 },
      { name: 'Dhupchanchia', districtId: 25 },
      { name: 'Gabtali', districtId: 25 },
      { name: 'Kahaloo', districtId: 25 },
      { name: 'Nandigram', districtId: 25 },
      { name: 'Sariakandi', districtId: 25 },
      { name: 'Shahjahanpur', districtId: 25 },
      { name: 'Sherpur', districtId: 25 },
      { name: 'Shibganj', districtId: 25 },
      { name: 'Sonatala', districtId: 25 },

      // Chapainawabganj District (5)
      { name: 'Bholahat', districtId: 26 },
      { name: 'Chapainawabganj Sadar', districtId: 26 },
      { name: 'Gomastapur', districtId: 26 },
      { name: 'Nachole', districtId: 26 },
      { name: 'Shibganj', districtId: 26 },

      // Joypurhat District (5)
      { name: 'Akkelpur', districtId: 27 },
      { name: 'Joypurhat Sadar', districtId: 27 },
      { name: 'Kalai', districtId: 27 },
      { name: 'Khetlal', districtId: 27 },
      { name: 'Panchbibi', districtId: 27 },

      // Naogaon District (11)
      { name: 'Atrai', districtId: 28 },
      { name: 'Badalgachhi', districtId: 28 },
      { name: 'Dhamoirhat', districtId: 28 },
      { name: 'Manda', districtId: 28 },
      { name: 'Mohadevpur', districtId: 28 },
      { name: 'Naogaon Sadar', districtId: 28 },
      { name: 'Niamatpur', districtId: 28 },
      { name: 'Patnitala', districtId: 28 },
      { name: 'Porsha', districtId: 28 },
      { name: 'Raninagar', districtId: 28 },
      { name: 'Sapahar', districtId: 28 },

      // Natore District (7)
      { name: 'Bagatipara', districtId: 29 },
      { name: 'Baraigram', districtId: 29 },
      { name: 'Gurudaspur', districtId: 29 },
      { name: 'Lalpur', districtId: 29 },
      { name: 'Natore Sadar', districtId: 29 },
      { name: 'Singra', districtId: 29 },
      { name: 'Naldanga', districtId: 29 },

      // Pabna District (9)
      { name: 'Atgharia', districtId: 30 },
      { name: 'Bera', districtId: 30 },
      { name: 'Bhangura', districtId: 30 },
      { name: 'Chatmohar', districtId: 30 },
      { name: 'Faridpur', districtId: 30 },
      { name: 'Ishwardi', districtId: 30 },
      { name: 'Pabna Sadar', districtId: 30 },
      { name: 'Santhia', districtId: 30 },
      { name: 'Sujanagar', districtId: 30 },

      // Rajshahi District (9)
      { name: 'Bagha', districtId: 31 },
      { name: 'Bagmara', districtId: 31 },
      { name: 'Charghat', districtId: 31 },
      { name: 'Durgapur', districtId: 31 },
      { name: 'Godagari', districtId: 31 },
      { name: 'Mohanpur', districtId: 31 },
      { name: 'Paba', districtId: 31 },
      { name: 'Puthia', districtId: 31 },
      { name: 'Tanore', districtId: 31 },

      // Sirajganj District (9)
      { name: 'Belkuchi', districtId: 32 },
      { name: 'Chauhali', districtId: 32 },
      { name: 'Kamarkhanda', districtId: 32 },
      { name: 'Kazipur', districtId: 32 },
      { name: 'Raiganj', districtId: 32 },
      { name: 'Shahjadpur', districtId: 32 },
      { name: 'Sirajganj Sadar', districtId: 32 },
      { name: 'Tarash', districtId: 32 },
      { name: 'Ullahpara', districtId: 32 },

      // Bagerhat District (9)
      { name: 'Bagerhat Sadar', districtId: 33 },
      { name: 'Chitalmari', districtId: 33 },
      { name: 'Fakirhat', districtId: 33 },
      { name: 'Kachua', districtId: 33 },
      { name: 'Mollahat', districtId: 33 },
      { name: 'Mongla', districtId: 33 },
      { name: 'Morrelganj', districtId: 33 },
      { name: 'Rampal', districtId: 33 },
      { name: 'Sarankhola', districtId: 33 },

      // Chuadanga District (4)
      { name: 'Alamdanga', districtId: 34 },
      { name: 'Chuadanga Sadar', districtId: 34 },
      { name: 'Damurhuda', districtId: 34 },
      { name: 'Jibannagar', districtId: 34 },

      // Jessore District (8)
      { name: 'Abhaynagar', districtId: 35 },
      { name: 'Bagherpara', districtId: 35 },
      { name: 'Chaugachha', districtId: 35 },
      { name: 'Jessore Sadar', districtId: 35 },
      { name: 'Jhikargachha', districtId: 35 },
      { name: 'Keshabpur', districtId: 35 },
      { name: 'Manirampur', districtId: 35 },
      { name: 'Sharsha', districtId: 35 },

      // Jhenaidah District (6)
      { name: 'Harinakunda', districtId: 36 },
      { name: 'Jhenaidah Sadar', districtId: 36 },
      { name: 'Kaliganj', districtId: 36 },
      { name: 'Kotchandpur', districtId: 36 },
      { name: 'Maheshpur', districtId: 36 },
      { name: 'Shailkupa', districtId: 36 },

      // Khulna District (9)
      { name: 'Batiaghata', districtId: 37 },
      { name: 'Dacope', districtId: 37 },
      { name: 'Dumuria', districtId: 37 },
      { name: 'Dighalia', districtId: 37 },
      { name: 'Koyra', districtId: 37 },
      { name: 'Paikgachha', districtId: 37 },
      { name: 'Phultala', districtId: 37 },
      { name: 'Rupsa', districtId: 37 },
      { name: 'Terokhada', districtId: 37 },

      // Kushtia District (6)
      { name: 'Bheramara', districtId: 38 },
      { name: 'Daulatpur', districtId: 38 },
      { name: 'Khoksa', districtId: 38 },
      { name: 'Kumarkhali', districtId: 38 },
      { name: 'Kushtia Sadar', districtId: 38 },
      { name: 'Mirpur', districtId: 38 },

      // Magura District (4)
      { name: 'Magura Sadar', districtId: 39 },
      { name: 'Mohammadpur', districtId: 39 },
      { name: 'Shalikha', districtId: 39 },
      { name: 'Sreepur', districtId: 39 },

      // Meherpur District (3)
      { name: 'Gangni', districtId: 40 },
      { name: 'Meherpur Sadar', districtId: 40 },
      { name: 'Mujibnagar', districtId: 40 },

      // Narail District (3)
      { name: 'Kalia', districtId: 41 },
      { name: 'Lohagara', districtId: 41 },
      { name: 'Narail Sadar', districtId: 41 },

      // Satkhira District (7)
      { name: 'Assasuni', districtId: 42 },
      { name: 'Debhata', districtId: 42 },
      { name: 'Kalaroa', districtId: 42 },
      { name: 'Kaliganj', districtId: 42 },
      { name: 'Satkhira Sadar', districtId: 42 },
      { name: 'Shyamnagar', districtId: 42 },
      { name: 'Tala', districtId: 42 },

      // Barguna District (6)
      { name: 'Amtali', districtId: 43 },
      { name: 'Bamna', districtId: 43 },
      { name: 'Barguna Sadar', districtId: 43 },
      { name: 'Betagi', districtId: 43 },
      { name: 'Patharghata', districtId: 43 },
      { name: 'Taltali', districtId: 43 },

      // Barishal District (10)
      { name: 'Agailjhara', districtId: 44 },
      { name: 'Babuganj', districtId: 44 },
      { name: 'Bakerganj', districtId: 44 },
      { name: 'Banaripara', districtId: 44 },
      { name: 'Gaurnadi', districtId: 44 },
      { name: 'Hizla', districtId: 44 },
      { name: 'Barishal Sadar', districtId: 44 },
      { name: 'Mehendiganj', districtId: 44 },
      { name: 'Muladi', districtId: 44 },
      { name: 'Wazirpur', districtId: 44 },

      // Bhola District (7)
      { name: 'Bhola Sadar', districtId: 45 },
      { name: 'Burhanuddin', districtId: 45 },
      { name: 'Char Fasson', districtId: 45 },
      { name: 'Daulatkhan', districtId: 45 },
      { name: 'Lalmohan', districtId: 45 },
      { name: 'Manpura', districtId: 45 },
      { name: 'Tazumuddin', districtId: 45 },

      // Jhalokati District (4)
      { name: 'Jhalokati Sadar', districtId: 46 },
      { name: 'Kathalia', districtId: 46 },
      { name: 'Nalchity', districtId: 46 },
      { name: 'Rajapur', districtId: 46 },

      // Patuakhali District (8)
      { name: 'Bauphal', districtId: 47 },
      { name: 'Dashmina', districtId: 47 },
      { name: 'Dumki', districtId: 47 },
      { name: 'Galachipa', districtId: 47 },
      { name: 'Kalapara', districtId: 47 },
      { name: 'Mirzaganj', districtId: 47 },
      { name: 'Patuakhali Sadar', districtId: 47 },
      { name: 'Rangabali', districtId: 47 },

      // Pirojpur District (7)
      { name: 'Bhandaria', districtId: 48 },
      { name: 'Kawkhali', districtId: 48 },
      { name: 'Mathbaria', districtId: 48 },
      { name: 'Nazirpur', districtId: 48 },
      { name: 'Pirojpur Sadar', districtId: 48 },
      { name: 'Nesarabad', districtId: 48 },
      { name: 'Zianagar', districtId: 48 },

      // Habiganj District (8)
      { name: 'Ajmiriganj', districtId: 49 },
      { name: 'Bahubal', districtId: 49 },
      { name: 'Baniyachong', districtId: 49 },
      { name: 'Chunarughat', districtId: 49 },
      { name: 'Habiganj Sadar', districtId: 49 },
      { name: 'Lakhai', districtId: 49 },
      { name: 'Madhabpur', districtId: 49 },
      { name: 'Nabiganj', districtId: 49 },

      // Moulvibazar District (7)
      { name: 'Barlekha', districtId: 50 },
      { name: 'Juri', districtId: 50 },
      { name: 'Kamalganj', districtId: 50 },
      { name: 'Kulaura', districtId: 50 },
      { name: 'Moulvibazar Sadar', districtId: 50 },
      { name: 'Rajnagar', districtId: 50 },
      { name: 'Sreemangal', districtId: 50 },

      // Sunamganj District (11)
      { name: 'Bishwamvarpur', districtId: 51 },
      { name: 'Chhatak', districtId: 51 },
      { name: 'Dakshin Sunamganj', districtId: 51 },
      { name: 'Derai', districtId: 51 },
      { name: 'Dharamapasha', districtId: 51 },
      { name: 'Dowarabazar', districtId: 51 },
      { name: 'Jagannathpur', districtId: 51 },
      { name: 'Jamalganj', districtId: 51 },
      { name: 'Sullah', districtId: 51 },
      { name: 'Sunamganj Sadar', districtId: 51 },
      { name: 'Tahirpur', districtId: 51 },

      // Sylhet District (13)
      { name: 'Balaganj', districtId: 52 },
      { name: 'Beanibazar', districtId: 52 },
      { name: 'Bishwanath', districtId: 52 },
      { name: 'Companiganj', districtId: 52 },
      { name: 'Dakshin Surma', districtId: 52 },
      { name: 'Fenchuganj', districtId: 52 },
      { name: 'Golapganj', districtId: 52 },
      { name: 'Gowainghat', districtId: 52 },
      { name: 'Jaintiapur', districtId: 52 },
      { name: 'Kanaighat', districtId: 52 },
      { name: 'Osmani Nagar', districtId: 52 },
      { name: 'Sylhet Sadar', districtId: 52 },
      { name: 'Zakiganj', districtId: 52 },

      // Dinajpur District (13)
      { name: 'Birampur', districtId: 53 },
      { name: 'Birganj', districtId: 53 },
      { name: 'Biral', districtId: 53 },
      { name: 'Bochaganj', districtId: 53 },
      { name: 'Chirirbandar', districtId: 53 },
      { name: 'Dinajpur Sadar', districtId: 53 },
      { name: 'Fulbari', districtId: 53 },
      { name: 'Ghoraghat', districtId: 53 },
      { name: 'Hakimpur', districtId: 53 },
      { name: 'Kaharole', districtId: 53 },
      { name: 'Khansama', districtId: 53 },
      { name: 'Nawabganj', districtId: 53 },
      { name: 'Parbatipur', districtId: 53 },

      // Gaibandha District (7)
      { name: 'Fulchhari', districtId: 54 },
      { name: 'Gaibandha Sadar', districtId: 54 },
      { name: 'Gobindaganj', districtId: 54 },
      { name: 'Palashbari', districtId: 54 },
      { name: 'Sadullapur', districtId: 54 },
      { name: 'Saghatta', districtId: 54 },
      { name: 'Sundarganj', districtId: 54 },

      // Kurigram District (9)
      { name: 'Bhurungamari', districtId: 55 },
      { name: 'Char Rajibpur', districtId: 55 },
      { name: 'Chilmari', districtId: 55 },
      { name: 'Phulbari', districtId: 55 },
      { name: 'Kurigram Sadar', districtId: 55 },
      { name: 'Nageshwari', districtId: 55 },
      { name: 'Rajarhat', districtId: 55 },
      { name: 'Raomari', districtId: 55 },
      { name: 'Ulipur', districtId: 55 },

      // Lalmonirhat District (5)
      { name: 'Aditmari', districtId: 56 },
      { name: 'Hatibandha', districtId: 56 },
      { name: 'Kaliganj', districtId: 56 },
      { name: 'Lalmonirhat Sadar', districtId: 56 },
      { name: 'Patgram', districtId: 56 },

      // Nilphamari District (6)
      { name: 'Dimla', districtId: 57 },
      { name: 'Domar', districtId: 57 },
      { name: 'Jaldhaka', districtId: 57 },
      { name: 'Kishoreganj', districtId: 57 },
      { name: 'Nilphamari Sadar', districtId: 57 },
      { name: 'Saidpur', districtId: 57 },

      // Panchagarh District (5)
      { name: 'Atwari', districtId: 58 },
      { name: 'Boda', districtId: 58 },
      { name: 'Debiganj', districtId: 58 },
      { name: 'Panchagarh Sadar', districtId: 58 },
      { name: 'Tetulia', districtId: 58 },

      // Rangpur District (8)
      { name: 'Badarganj', districtId: 59 },
      { name: 'Gangachhara', districtId: 59 },
      { name: 'Kaunia', districtId: 59 },
      { name: 'Rangpur Sadar', districtId: 59 },
      { name: 'Mithapukur', districtId: 59 },
      { name: 'Pirgachha', districtId: 59 },
      { name: 'Pirganj', districtId: 59 },
      { name: 'Taraganj', districtId: 59 },

      // Thakurgaon District (5)
      { name: 'Baliadangi', districtId: 60 },
      { name: 'Haripur', districtId: 60 },
      { name: 'Pirganj', districtId: 60 },
      { name: 'Ranisankail', districtId: 60 },
      { name: 'Thakurgaon Sadar', districtId: 60 },

      // Jamalpur District (7)
      { name: 'Baksiganj', districtId: 61 },
      { name: 'Dewanganj', districtId: 61 },
      { name: 'Islampur', districtId: 61 },
      { name: 'Jamalpur Sadar', districtId: 61 },
      { name: 'Madarganj', districtId: 61 },
      { name: 'Melandaha', districtId: 61 },
      { name: 'Sarishabari', districtId: 61 },

      // Mymensingh District (13)
      { name: 'Bhaluka', districtId: 62 },
      { name: 'Dhobaura', districtId: 62 },
      { name: 'Fulbaria', districtId: 62 },
      { name: 'Gaffargaon', districtId: 62 },
      { name: 'Gauripur', districtId: 62 },
      { name: 'Haluaghat', districtId: 62 },
      { name: 'Ishwarganj', districtId: 62 },
      { name: 'Mymensingh Sadar', districtId: 62 },
      { name: 'Muktagachha', districtId: 62 },
      { name: 'Nandail', districtId: 62 },
      { name: 'Phulpur', districtId: 62 },
      { name: 'Trishal', districtId: 62 },
      { name: 'Tarakanda', districtId: 62 },

      // Netrokona District (10)
      { name: 'Atpara', districtId: 63 },
      { name: 'Barhatta', districtId: 63 },
      { name: 'Durgapur', districtId: 63 },
      { name: 'Khaliajuri', districtId: 63 },
      { name: 'Kendua', districtId: 63 },
      { name: 'Madan', districtId: 63 },
      { name: 'Mohanganj', districtId: 63 },
      { name: 'Netrokona Sadar', districtId: 63 },
      { name: 'Purbadhala', districtId: 63 },

      // Sherpur District (5)
      { name: 'Jhenaigati', districtId: 64 },
      { name: 'Nakla', districtId: 64 },
      { name: 'Nalitabari', districtId: 64 },
      { name: 'Sherpur Sadar', districtId: 64 },
      { name: 'Sreebardi', districtId: 64 },
    ];

    // Total: 495 upazilas
    for (const upazila of upazilas) {
      const exists = await this.upazilaRepository.findOne({
        where: { name: upazila.name },
      });

      if (!exists) {
        await this.upazilaRepository.save(upazila);
      }
    }
  }

  /**
   * Get all upazilas
   */
  async findAll(): Promise<UpzelaEntity[]> {
    return this.upazilaRepository.find({
      order: { name: 'ASC' },
    });
  }
}
