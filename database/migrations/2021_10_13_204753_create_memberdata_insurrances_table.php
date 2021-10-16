<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemberdataInsurrancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('memberdata_insurrances', function (Blueprint $table) {
            $table->id();
            $table->float('cost');
            $table->date('join_date');
            $table->boolean('status')->nullable();
            $table->foreignId('memberdata_id');
            $table->foreign('memberdata_id')->references('id')->on('memberdata');
            $table->foreignId('beneficiary_id');
            $table->foreign('beneficiary_id')->references('id')->on('beneficiaries');
            $table->foreignId('reason_id')->nullable();
            $table->foreign('reason_id')->references('id')->on('reasons');
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
        Schema::dropIfExists('memberdata_insurrances');
    }
}
