<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Artist;

class ArtistsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        foreach (range(1, 10) as $index) {
            Artist::create([
                'name' => $faker->name
            ]);
            
        }
    }
}
