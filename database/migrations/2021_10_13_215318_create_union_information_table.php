<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUnionInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('union_information', function (Blueprint $table) {
            $table->id();
            $table->string('iaff_local')->nullable();
            $table->string('iaff_affiliate_name')->nullable();
            $table->string('first_address_line')->nullable();
            $table->string('second_address_line')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zip')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('stmt_id')->nullable();
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
        Schema::dropIfExists('union_information');
    }
}
