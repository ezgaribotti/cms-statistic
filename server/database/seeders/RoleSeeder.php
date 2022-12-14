<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $admin = Role::create(['name' => 'admin']);
        $manager = Role::create(['name' => 'manager']);
        $guest = Role::create(['name' => 'guest']);

        Permission::create(['name' => 'create'])->syncRoles([$admin, $manager]);
        Permission::create(['name' => 'show'])->syncRoles([$admin, $manager, $guest]);
        Permission::create(['name' => 'edit'])->syncRoles([$admin, $manager]);
        Permission::create(['name' => 'destroy'])->syncRoles([$admin]);
    }
}
