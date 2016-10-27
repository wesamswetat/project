<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHearUsAddWindowTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('hear_us_add_window', function (Blueprint $table) {
            $table->increments('id');
            $table->string('company', 15);
            $table->string('sedra_name', 15);
            $table->string('sedra_num', 15);
            $table->string('email', 50);
            $table->string('comments', 250);
            $table->boolean('is_readied')->default(false);
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
        Schema::drop('hear_us_add_window');
    }
}
