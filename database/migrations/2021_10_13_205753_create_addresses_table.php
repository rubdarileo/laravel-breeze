<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->string('first_address')->nullable();
            $table->string('second_address')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->date('change_date')->nullable();
            $table->foreignId('memberdata_id');
            $table->foreign('memberdata_id')->references('id')->on('memberdata');
            $table->boolean('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
}
