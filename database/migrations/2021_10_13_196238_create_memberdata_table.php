<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemberdataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('memberdata', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('middleinitial')->nullable();
            $table->string('ssnumber');
            $table->string('hris')->nullable();
            $table->string('home_phone')->nullable();
            $table->string('cell_phone')->nullable();
            $table->date('birth_date')->nullable();
            $table->string('email')->nullable();
            $table->string('iaffmembernumber')->nullable();
            $table->boolean('web_active')->default(true);
            $table->string('suffix')->nullable();
            $table->string('iaff')->nullable();
            $table->string('uniaff')->nullable();
            $table->date('retire_date')->nullable();
            $table->date('erased')->nullable();
            $table->date('join_date')->nullable();
            $table->string('rdray')->nullable();
            $table->string('department')->nullable();
            $table->string('unit')->nullable();
            $table->foreignId('title_id')->nullable();
            $table->foreign('title_id')->references('id')->on('titles');
            $table->foreignId('gender_id')->nullable();
            $table->foreign('gender_id')->references('id')->on('genders');
            $table->foreignId('sick_plan_id')->nullable();
            $table->foreign('sick_plan_id')->references('id')->on('sick_plans');
            $table->foreignId('ethnicity_id')->nullable();
            $table->foreign('ethnicity_id')->references('id')->on('ethnicities');
            $table->timestamps();
        });
        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('memberdata_id')->nullable();
            $table->foreign('memberdata_id')->references('id')->on('memberdata');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('users_memberdata_id_foreign');
        });
        Schema::dropIfExists('memberdata');
    }
}
