<?php
use App\Models\DesaKelurahan;
use App\Models\StreetLight;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    protected $karangTunggalCoordinates = [
    ['latitude' => -0.41732119424375563, 'longitude' => 117.095613414695],
    ['latitude' => -0.4174269531673917, 'longitude' => 117.09608934247602],
    ['latitude' => -0.41716255585562995, 'longitude' => 117.09624798506971],
    ['latitude' => -0.4172683147814033, 'longitude' => 117.09651238939252],
    ['latitude' => -0.4168805320466255, 'longitude' => 117.09665340503135],
    ['latitude' => -0.4169686644880184, 'longitude' => 117.0970411980381],
    ['latitude' => -0.41668664067208033, 'longitude' => 117.09711170585753],
    ['latitude' => -0.415158596371395, 'longitude' => 117.0985235865651],
    ['latitude' => -0.415273264247058, 'longitude' => 117.0985945733041],
    ['latitude' => -0.41518043787164366, 'longitude' => 117.09870378367181],
    ['latitude' => -0.41510399262049347, 'longitude' => 117.09863279693279],
    ['latitude' => -0.4149784039919963, 'longitude' => 117.0995337824663],
    ['latitude' => -0.41502208699344784, 'longitude' => 117.0996812164627],
    ['latitude' => -0.4134407871523883, 'longitude' => 117.1010201033397],
    ['latitude' => -0.413414252350845, 'longitude' => 117.10121911953104],
    ['latitude' => -0.4131621717318329, 'longitude' => 117.1011527808006],
    ['latitude' => -0.41108497857568455, 'longitude' => 117.1031665044889],
    ['latitude' => -0.41109712701129025, 'longitude' => 117.10331836384181],
    ['latitude' => -0.4108723809496903, 'longitude' => 117.10330621509358],
    ['latitude' => -0.4107751934616259, 'longitude' => 117.10320902510772],
    ['latitude' => -0.40909125104992733, 'longitude' => 117.10279033154094],
    ['latitude' => -0.4090695062691379, 'longitude' => 117.10268160486635],
    ['latitude' => -0.4089499099736957, 'longitude' => 117.10271422286874],
    ['latitude' => -0.40885205845792333, 'longitude' => 117.10278489520722],
    ['latitude' => -0.40614475504784947, 'longitude' => 117.10297990643878],
    ['latitude' => -0.4060819582859351, 'longitude' => 117.10307168862659],
    ['latitude' => -0.40603365308413264, 'longitude' => 117.10295575323146],
    ['latitude' => -0.4059322121594176, 'longitude' => 117.10300405964608],
    ['latitude' => -0.4055843806634724, 'longitude' => 117.10292733106087],
    ['latitude' => -0.40552686866142196, 'longitude' => 117.10275648230524],
    ['latitude' => -0.40536279030037914, 'longitude' => 117.1028850417649],
    ['latitude' => -0.4038628703956364, 'longitude' => 117.10478592321563],
    ['latitude' => -0.4036945972424986, 'longitude' => 117.10508882241109],
    ['latitude' => -0.40355156505957973, 'longitude' => 117.10498785601263],
    ['latitude' => -0.40345060116423914, 'longitude' => 117.10520661654269],
    ['latitude' => -0.4031477094707241, 'longitude' => 117.1051897888096],
    ['latitude' => -0.40308040020395774, 'longitude' => 117.10542537707275],
    ['latitude' => -0.4005581787071041, 'longitude' => 117.1065608586902],
    ['latitude' => -0.40054577202456715, 'longitude' => 117.10665184325167],
    ['latitude' => -0.400388620710724, 'longitude' => 117.1067056068562],
    ['latitude' => -0.40034726510131774, 'longitude' => 117.10659394398527],
    ['latitude' => -0.3977216344027716, 'longitude' => 117.10670444835878],
    ['latitude' => -0.3976312500139734, 'longitude' => 117.10682813523779],
    ['latitude' => -0.39748853781911675, 'longitude' => 117.10673774867237],
    ['latitude' => -0.3974742665995, 'longitude' => 117.10687570711433],
    ['latitude' => -0.39736485391491105, 'longitude' => 117.10678056336126],
    ['latitude' => -0.39648442879168644, 'longitude' => 117.10712699189835],
    ['latitude' => -0.3964490050756616, 'longitude' => 117.10733068314073],
    ['latitude' => -0.3962098949886201, 'longitude' => 117.10733068314073],
    ['latitude' => -0.3962187509178871, 'longitude' => 117.1075166621012],
    ['latitude' => -0.3960947679072075, 'longitude' => 117.10750780596022],
    ['latitude' => -0.39605934418952876, 'longitude' => 117.10770264106165],
    ['latitude' => -0.39384918893422693, 'longitude' => 117.10887854484069],
    ['latitude' => -0.39369024683375153, 'longitude' => 117.1088020153558],
    ['latitude' => -0.3935725119425555, 'longitude' => 117.10887265795726],
    ['latitude' => -0.39349009751773734, 'longitude' => 117.1090021693932],
    ['latitude' => -0.38948165520871414, 'longitude' => 117.11012379469697],
    ['latitude' => -0.3893376038670077, 'longitude' => 117.11026784936493],
    ['latitude' => -0.3890625967532714, 'longitude' => 117.1101630823337],
    ['latitude' => -0.388866163095112, 'longitude' => 117.11039880815399],
    ['latitude' => -0.3885649648104079, 'longitude' => 117.11029404112276],
    ];

    public function up(): void
    {
        $desa = DesaKelurahan::where('name', 'Karang Tunggal')->firstOrFail();

        foreach ($this->karangTunggalCoordinates as $coordinate)
        {
            StreetLight::create([
                'address' => 'Jalan Karang Tunggal',
                'description' => 'Buat Uji Coba Klastering',
                'latitude' => $coordinate['latitude'],
                'longitude' => $coordinate['longitude'],
                'radius' => 15,
                'desa_kelurahan_id' => $desa->id,
            ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tenggarong_seberang_3', function (Blueprint $table)
        {
            //
        });
    }
};
