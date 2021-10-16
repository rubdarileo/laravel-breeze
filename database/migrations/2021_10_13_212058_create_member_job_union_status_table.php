<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemberJobUnionStatusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('member_job_union_status', function (Blueprint $table) {
            $table->id();
            $table->date('change_date')->nullable();
            $table->boolean('active')->nullable();
            $table->integer('changed')->nullable();
            $table->integer('last_union_membership_status_id')->nullable();
            $table->foreignId('union_membership_status_id');
            $table->foreign('union_membership_status_id')->references('id')->on('union_membership_status');
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
        Schema::dropIfExists('member_job_union_status');
    }
}
