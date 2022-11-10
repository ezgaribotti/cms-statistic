<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $status = ['pending' => 'Pendiente', 'finished' => 'Completado', 'cancelled' => 'Cancelado'];

        foreach ($status as $key => $value) {
            Status::create([
                'name' => $value,
                'guard_name' => $key
            ]);
        }
    }
}
