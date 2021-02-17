<?php

use Illuminate\Database\Seeder;
use App\Song;
use Faker\Factory as Faker;

class SongsTableSeeder extends Seeder
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
            Song::create([
                'artist'     => $faker->name,
                'title'         => $faker->word,
                'lyrics'        => $faker->paragraph
            ]);
        }
    }
}
