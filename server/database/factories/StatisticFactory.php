<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Statistic>
 */
class StatisticFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'total_customers' => fake()->numberBetween(10, 100),
            'total_orders' => fake()->numberBetween(10, 100),
            'total_canceled_orders' => fake()->numberBetween(10, 100),
            'total_feedbacks' => fake()->numberBetween(10, 100),
        ];
    }
}
