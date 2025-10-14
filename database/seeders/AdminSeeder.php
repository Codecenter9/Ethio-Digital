<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User; // make sure to import the User model

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Ebisa Asmera',
            'slug' => 'ebisa-asmera',
            'email' => 'ebisaasmera6@gmail.com',
            'password' => bcrypt('1234'),
            'role' => "manager",
            'position' => "Chief Executive Officer (CEO)",
        ]);
    }
}
