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
        Schema::create('desa_kelurahan', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('kecamatan_id')
                  ->constrained('kecamatan')
                  ->restrictOnDelete()
                  ->restrictOnUpdate();
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
        Schema::dropIfExists('desa_kelurahan');
    }
};