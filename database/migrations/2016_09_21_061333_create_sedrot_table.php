<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSedrotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('sedrot', function (Blueprint $table) {
            $table->increments('id');
            $table->string('company_name');
            $table->string('sedra_name');
            $table->integer('sedra_num')->unique();
            $table->string('fun_code_and_des');
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
        Schema::drop('sedrot');
    }
}
