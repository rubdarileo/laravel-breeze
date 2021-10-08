<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin_role       = Role::create(['name' => 'super administrador']);
        $seller_role      = Role::create(['name' => 'administrator']);
        $seller_role      = Role::create(['name' => 'member']);
    }
}
