<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemberJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('member_jobs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('position_id')->nullable();
            $table->foreign('position_id')->references('id')->on('positions');
            $table->foreignId('status_id')->nullable();
            $table->foreign('status_id')->references('id')->on('status');
            $table->foreignId('station_id')->nullable();
            $table->foreign('station_id')->references('id')->on('stations');
            $table->foreignId('base_hour_id')->nullable();
            $table->foreign('base_hour_id')->references('id')->on('base_hours');
            $table->foreignId('memberdata_id');
            $table->foreign('memberdata_id')->references('id')->on('memberdata');
            $table->string('badgenumber')->nullable();
            $table->date('employ_date')->nullable();
            $table->date('promo_date')->nullable();
            $table->date('salary_review_date')->nullable();
            $table->date('benefit_date')->nullable();
            $table->date('termination_date')->nullable();
            $table->string('batallion_number')->nullable();
            $table->string('shift')->nullable();
            $table->string('budget_position')->nullable();
            $table->string('grade')->nullable();
            $table->string('class')->nullable();
            $table->float('hourly_rate')->nullable();
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
        Schema::dropIfExists('member_jobs');
    }
}
