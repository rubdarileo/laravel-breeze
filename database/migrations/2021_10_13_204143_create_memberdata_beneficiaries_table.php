<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemberdataBeneficiariesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('memberdata_beneficiaries', function (Blueprint $table) {
            $table->id();
            $table->date('change_date')->nullable();
            $table->foreignId('memberdata_id')->nullable();
            $table->foreign('memberdata_id')->references('id')->on('memberdata');
            $table->foreignId('beneficiary_id')->nullable();
            $table->foreign('beneficiary_id')->references('id')->on('beneficiaries');
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
        Schema::dropIfExists('memberdata_beneficiaries');
    }
}
