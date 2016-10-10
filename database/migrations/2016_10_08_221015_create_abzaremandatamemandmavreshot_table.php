<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAbzaremandatamemandmavreshotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('abzarem_atamem_mavreshot', function (Blueprint $table) {
            $table->increments('id');
            $table->string('makat')->unique();
            $table->string('des');
            $table->string('company');
            $table->string('sedra_nname');
            $table->string('sedra_num');
            $table->integer('is_abzarem');
            $table->integer('is_atamem_or_mavreshot');
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
        Schema::drop('abzarem_atamem_mavreshot');
    }
}
