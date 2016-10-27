<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('contact', function (Blueprint $table) {
            $table->increments('id');
            $table->string('full_name', 50);
            $table->string('subject', 50);
            $table->string('email', 50);
            $table->string('phone', 12);
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
        Schema::drop('contact');
    }
}
