<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [1 => 'admin', 2 => 'manager', 3 => 'guest'];

        foreach ($users as $key => $user) {
            User::create([
                'full_name' => fake()->name(),
                'username' => $user,
                'password' => Hash::make('password'),
                'role_id' => $key,
            ])->assignRole($key);
        }
    }
}
