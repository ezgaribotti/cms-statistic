<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Preference;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $preferences = Preference::all();

        foreach ($preferences as $preference) {
            Order::create([
                'status_id' => fake()->numberBetween(1, 3),
                'order_number' => fake()->randomLetter() . fake()->numberBetween(100, 600) . time(),
                'customer_id' => fake()->numberBetween(1, 12),
                'description' => fake()->text(),
                'preference_id' => $preference->id,
            ]);
        }
    }
}
