<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWindowsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('windows', function (Blueprint $table) {
            $table->increments('id');
            $table->string('fun_code')->unique();
            $table->string('company');
            $table->string('sedra_name');
            $table->string('sedra_num');
            $table->string('rowds_winds');
            $table->string('des');
            $table->string('profel_makat');
            $table->string('profel_img');
            $table->string('profel_des');
            $table->string('profel_cuts');
            $table->string('profel_cuts_img');
            $table->string('profel_formela');
            $table->string('abzarem_num_in_srtot');
            $table->string('abzarem_makat');
            $table->string('abzarem_kamot');
            $table->string('door_abzarem_num_in_srtot');
            $table->string('door_abzarem_makat');
            $table->string('door_abzarem_kamot');
            $table->string('atmem_mbrashot_num_in_srtot');
            $table->string('atmem_mbrashot_makat');
            $table->string('zegog');
            $table->string('h_l');
            $table->string('window_img');
            $table->string('pdf');
            $table->text('json');
            $table->string('link_to_company_site');
            $table->string('zegog_shone');
            $table->string('profelem_shone');
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
        Schema::drop('windows');
    }
}
