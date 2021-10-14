<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemberjobUnionStatusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('memberjob_union_status', function (Blueprint $table) {
            $table->id();
            $table->date('change_date')->nullable();
            $table->boolean('active')->nullable();
            $table->integer('changed')->nullable();
            $table->integer('last_union_membership_status_id')->nullable();
            $table->foreignId('union_membership_status_id');
            $table->foreign('union_membership_status_id')->references('id')->on('union_membership_status');
            $table->foreignId('memberjob_id');
            $table->foreign('memberjob_id')->references('id')->on('memberjobs');
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
        Schema::dropIfExists('memberjob_union_status');
    }
}
