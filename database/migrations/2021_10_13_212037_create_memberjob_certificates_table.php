<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemberjobCertificatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('memberjob_certificates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('certificate_id');
            $table->foreign('certificate_id')->references('id')->on('certificates');
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
        Schema::dropIfExists('memberjob_certificates');
    }
}
