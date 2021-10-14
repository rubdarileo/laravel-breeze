<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInsurranceCancellationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('insurrance_cancellations', function (Blueprint $table) {
            $table->id();
            $table->date('cancellation_date');
            $table->string('description');
            $table->foreignId('memberdata_insurrance_id')->nullable();
            $table->foreign('memberdata_insurrance_id')->references('id')->on('memberdata_insurrances');
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
        Schema::dropIfExists('insurrance_cancellations');
    }
}
