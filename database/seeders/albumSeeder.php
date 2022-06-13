<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class albumSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
   
    {
        $limit = 6; 

        for($i = 0; $i < $limit; $i++) {
             DB::table('album')->insert([
                 'anh' => 'Image/wp4325136.jpg',
                 'tenalbum' => 'Chưa đặt tên',
                
                 'gia' => 100000,
                 'danhmuc_id' => 1,
             ]);
        }
    }

}
