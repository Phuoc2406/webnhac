<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('album', function (Blueprint $table) {
            $table->integer('danhmuc_id')->unsigned();

            $table->foreign('danhmuc_id')->references('id')
                                      ->on('danhmuc')
                                      ->onDetele('cascade') ;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('album', function (Blueprint $table) {
            $table->dropForeign('album_danhmuc_id_foreign');
            $table->dropColumn('danhmuc_id');
        });
    }
};
