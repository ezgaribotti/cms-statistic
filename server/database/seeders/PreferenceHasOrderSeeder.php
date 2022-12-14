<?php

namespace Database\Seeders;

use App\Models\Preference;
use App\Models\PreferenceHasOrder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PreferenceHasOrderSeeder extends Seeder
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

            for ($i = 0; $i < 5; $i++) {

                $quantity = fake()->randomDigitNotZero();
                $fixedPrice = fake()->randomFloat(2, 800, 8000);

                PreferenceHasOrder::create([
                    'preference_id' => $preference->id,
                    'quantity' => $quantity,
                    'fixed_price' => $fixedPrice,
                    'partial_amount' => $quantity * $fixedPrice,
                    'product_id' => fake()->numberBetween(1, 4),
                ]);
            }
        }
    }
}
