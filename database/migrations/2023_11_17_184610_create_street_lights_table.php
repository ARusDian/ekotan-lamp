<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('street_lights', function (Blueprint $table) {
            $table->id();
            $table->string("address");
            $table->string("description");
            $table->double("latitude");
            $table->double("longitude");
            $table->string("radius");
            $table->enum("status", ["BRIGHT", "DIM", "OFF"]);
            $table->foreignId('desa_kelurahan_id')
                ->constrained('desa_kelurahan')
                ->restrictOnDelete()
                ->restrictOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('street_lights');
    }
};