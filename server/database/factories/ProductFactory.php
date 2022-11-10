<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->word(),
            'unit_price' => fake()->randomFloat(2, 800, 8000),
            'active' => fake()->randomElement([0, 1]),
            'description' => fake()->text(),
            'image' => fake()->numberBetween(100, 1000) . time() . chr(46) . chr(106) . chr(112) . chr(103),
            'category_id' => fake()->numberBetween(1, 6),
            'total_sales' => fake()->numberBetween(10, 100),
        ];
    }
}
