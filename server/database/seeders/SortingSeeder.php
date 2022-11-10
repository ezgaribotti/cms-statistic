<?php

namespace Database\Seeders;

use App\Models\Sorting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SortingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sortings = ['very_bad' => 'Muy mala', 'bad' => 'Mala', 'regular' => 'Regular', 'good' => 'Buena', 'very_good' => 'Muy buena'];

        foreach ($sortings as $key => $sorting) {
            Sorting::create([
                'name' => $sorting,
                'guard_name' => $key
            ]);
        }
    }
}
