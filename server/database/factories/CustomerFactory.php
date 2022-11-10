<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'email' => fake()->email(),
            'phone' => fake()->phoneNumber(),
            'gender_id' => fake()->numberBetween(1, 3),
            'province_id' => fake()->numberBetween(1, 22),
            'city' => fake()->city(),
            'street_address' => fake()->streetAddress(),
            'live_mode' => fake()->randomElement([0, 1]),
            'total_purchases' => fake()->numberBetween(10, 50),
        ];
    }
}
