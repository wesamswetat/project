<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('profel', function (Blueprint $table) {
            $table->increments('id');
            $table->string('makat')->unique();
            $table->integer('meshkal');
            $table->integer('hekef');
            $table->string('des');
            $table->string('company');
            $table->string('serial');
            $table->string('serial_name');
            $table->timestamp('created_at');
            $table->timestamp('updated_at');
            $table->string('pic');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::drop('profel');
    }
}
