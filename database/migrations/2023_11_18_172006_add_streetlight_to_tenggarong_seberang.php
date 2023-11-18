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

    protected $bangunRejoCoordinates = [
    ['latitude' => -0.3614958190395831, 'longitude' => 117.11083494715723],
    ['latitude' => -0.3614551482229502, 'longitude' => 117.11092699346827],
    ['latitude' => -0.3613780877277833, 'longitude' => 117.11078785369575],
    ['latitude' => -0.3613395574799581, 'longitude' => 117.1108820406187],
    ['latitude' => -0.36077957574326225, 'longitude' => 117.11059380146592],
    ['latitude' => -0.3606840502561331, 'longitude' => 117.11067340761582],
    ['latitude' => -0.3606522084268738, 'longitude' => 117.11055134485267],
    ['latitude' => -0.3605354550519645, 'longitude' => 117.11062033684924],
    ['latitude' => -0.3604983062505343, 'longitude' => 117.11050358116272],
    ['latitude' => -0.3595748931411761, 'longitude' => 117.11021169194551],
    ['latitude' => -0.35948467461366096, 'longitude' => 117.11030721932539],
    ['latitude' => -0.3594316048911891, 'longitude' => 117.11014800702561],
    ['latitude' => -0.35936792122379035, 'longitude' => 117.11027006978877],
    ['latitude' => -0.35853133818966015, 'longitude' => 117.10984952289998],
    ['latitude' => -0.35839067300264627, 'longitude' => 117.10979029429404],
    ['latitude' => -0.35831663869281977, 'longitude' => 117.10990134793023],
    ['latitude' => -0.35820558722697315, 'longitude' => 117.10974587283954],
    ['latitude' => -0.35810193919095407, 'longitude' => 117.10981250502127],
    ['latitude' => -0.3580279048787994, 'longitude' => 117.10967183708209],
    ['latitude' => -0.3569247935407881, 'longitude' => 117.10957559059328],
    ['latitude' => -0.35677672489689927, 'longitude' => 117.10939790477536],
    ['latitude' => -0.3560241964861255, 'longitude' => 117.10935441447735],
    ['latitude' => -0.35588831572623664, 'longitude' => 117.1094417680797],
    ['latitude' => -0.3558142757151641, 'longitude' => 117.10933024419862],
    ['latitude' => -0.35567259009351493, 'longitude' => 117.10948373991319],
    ['latitude' => -0.3555663258758564, 'longitude' => 117.109300725792],
    ['latitude' => -0.35533608673337874, 'longitude' => 117.10940699205591],
    ['latitude' => -0.3551235582890797, 'longitude' => 117.109300725792],
    ['latitude' => -0.35438561224782134, 'longitude' => 117.10944831783027],
    ['latitude' => -0.35446826220556304, 'longitude' => 117.10953687305022],
    ['latitude' => -0.3542144087616051, 'longitude' => 117.10948964359959],
    ['latitude' => -0.3542734444468731, 'longitude' => 117.10961952458882],
    ['latitude' => -0.3530917250954641, 'longitude' => 117.11017818903113],
    ['latitude' => -0.35304372691709607, 'longitude' => 117.11027761571633],
    ['latitude' => -0.3528894470563892, 'longitude' => 117.11021933110777],
    ['latitude' => -0.35278659381449734, 'longitude' => 117.11031875779297],
    ['latitude' => -0.3516974309161115, 'longitude' => 117.11045650726278],
    ['latitude' => -0.35159179081039044, 'longitude' => 117.11063257742063],
    ['latitude' => -0.3514744129137355, 'longitude' => 117.10952920443137],
    ['latitude' => -0.3513805105953607, 'longitude' => 117.10972875061024],
    ['latitude' => -0.3505658021622242, 'longitude' => 117.11014734513014],
    ['latitude' => -0.35031108439764624, 'longitude' => 117.11014734513014],
    ['latitude' => -0.34988982038717026, 'longitude' => 117.11005917194753],
    ['latitude' => -0.35014453816319824, 'longitude' => 117.10993181068372],
    ['latitude' => -0.34988982038717026, 'longitude' => 117.11008856300839],
    ['latitude' => -0.3496546962800814, 'longitude' => 117.1098534345214],
    ['latitude' => -0.3474700011090464, 'longitude' => 117.1089325146044],
    ['latitude' => -0.34730345482434566, 'longitude' => 117.10906967288848],
    ['latitude' => -0.3471369085366934, 'longitude' => 117.10897170268557],
    ['latitude' => -0.34730345482434566, 'longitude' => 117.10885413844207],
    ['latitude' => -0.3461737410796841, 'longitude' => 117.10837040940206],
    ['latitude' => -0.34608525252696476, 'longitude' => 117.10845152538839],
    ['latitude' => -0.3460115120657355, 'longitude' => 117.10825242251282],
    ['latitude' => -0.34596726778872056, 'longitude' => 117.10835566104089],
    ['latitude' => -0.3450515404378435, 'longitude' => 117.1088449673891],
    ['latitude' => -0.3451440738365269, 'longitude' => 117.10890665744017],
    ['latitude' => -0.34502510232377576, 'longitude' => 117.10899919251682],
    ['latitude' => -0.34495019433349117, 'longitude' => 117.10890665744017],
    ['latitude' => -0.3439159101402518, 'longitude' => 117.1094227536451],
    ['latitude' => -0.34398952143392664, 'longitude' => 117.10954237415201],
    ['latitude' => -0.3437594861393306, 'longitude' => 117.10947796310982],
    ['latitude' => -0.3438515002578331, 'longitude' => 117.10961598677164],
    ['latitude' => -0.34333552021065655, 'longitude' => 117.10961322651964],
    ['latitude' => -0.34323132537381656, 'longitude' => 117.10973179518557],
    ['latitude' => -0.34152000382705644, 'longitude' => 117.10973532946109],
    ['latitude' => -0.3415609744771236, 'longitude' => 117.10986336501657],
    ['latitude' => -0.34140221320713543, 'longitude' => 117.10986336501657],
    ['latitude' => -0.34136636388774305, 'longitude' => 117.10972508661663],
    ['latitude' => -0.3398911175801635, 'longitude' => 117.10934060719207],
    ['latitude' => -0.339634942063409, 'longitude' => 117.10936907163868],
    ['latitude' => -0.33959224614329897, 'longitude' => 117.10916982051239],
    ['latitude' => -0.3392933746971854, 'longitude' => 117.10926944607552],
    ['latitude' => -0.33927914272332343, 'longitude' => 117.10895633716281],
    ['latitude' => -0.3389375753445303, 'longitude' => 117.10911289161916],
    ['latitude' => -0.3368898279454234, 'longitude' => 117.10880054406734],
    ['latitude' => -0.33678262836810746, 'longitude' => 117.10898571017236],
    ['latitude' => -0.3365000112949582, 'longitude' => 117.1088979999121],
    ['latitude' => -0.3363830662967819, 'longitude' => 117.10907342043264],
    ['latitude' => -0.3361296854626014, 'longitude' => 117.10896621900343],
    ['latitude' => -0.33593477712413133, 'longitude' => 117.10920011303078]
    ];

    public function up(): void
    {
        $desa = DesaKelurahan::where('name', 'Bangun Rejo')->firstOrFail();

        foreach ($this->bangunRejoCoordinates as $coordinate)
        {
            StreetLight::create([
                'address' => 'Jalan Samarinda Muara Kaman',
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
        Schema::table('tenggarong_seberang', function (Blueprint $table)
        {
            //
        });
    }
};
