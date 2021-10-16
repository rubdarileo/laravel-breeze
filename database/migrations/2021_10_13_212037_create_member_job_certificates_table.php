<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemberJobCertificatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('member_job_certificates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('certificate_id');
            $table->foreign('certificate_id')->references('id')->on('certificates');
            $table->foreignId('member_job_id');
            $table->foreign('member_job_id')->references('id')->on('member_jobs');
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
        Schema::dropIfExists('member_job_certificates');
    }
}
