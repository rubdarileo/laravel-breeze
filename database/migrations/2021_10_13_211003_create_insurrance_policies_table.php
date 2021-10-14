<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInsurrancePoliciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('insurrance_policies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->float('amount');
            $table->foreignId('insurrance_company_id')->nullable();
            $table->foreign('insurrance_company_id')->references('id')->on('insurrance_companies');
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
        Schema::dropIfExists('insurrance_policies');
    }
}
