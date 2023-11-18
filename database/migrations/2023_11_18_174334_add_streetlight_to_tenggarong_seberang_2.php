<?php

use App\Models\DesaKelurahan;
use App\Models\StreetLight;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    protected $bukitRayaCoordinates = [
    ["latitude" => -0.43084123303032673, "longitude" => 117.06710216165253],
    ["latitude" => -0.4304764629157374, "longitude" => 117.06709143281674],
    ["latitude" => -0.43063397792875635, "longitude" => 117.06682607218931],
    ["latitude" => -0.4302939791939088, "longitude" => 117.06673659631332],
    ["latitude" => -0.43045503122808926, "longitude" => 117.06641448315975],
    ["latitude" => -0.4301329271563189, "longitude" => 117.06643237833495],
    ["latitude" => -0.4280837518618056, "longitude" => 117.06537700470975],
    ["latitude" => -0.42812408245047123, "longitude" => 117.06569965842374],
    ["latitude" => -0.42778127244005776, "longitude" => 117.06548791692393],
    ["latitude" => -0.4277308592019421, "longitude" => 117.06580048770937],
    ["latitude" => -0.4274989583023251, "longitude" => 117.06558874620956],
    ["latitude" => -0.42733763593324825, "longitude" => 117.06578032185223],
    ["latitude" => -0.4271561482639864, "longitude" => 117.06557866328099],
    ["latitude" => -0.42698474323908564, "longitude" => 117.06580048770937],
    ["latitude" => -0.4241434982637444, "longitude" => 117.06435627325396],
    ["latitude" => -0.4239005295198374, "longitude" => 117.06443103491434],
    ["latitude" => -0.42393167935922427, "longitude" => 117.06408837730433],
    ["latitude" => -0.42377593016103055, "longitude" => 117.06423167048668],
    ["latitude" => -0.42331751204428997, "longitude" => 117.06315885045728],
    ["latitude" => -0.42316312545019835, "longitude" => 117.06328322082838],
    ["latitude" => -0.42299158478649757, "longitude" => 117.06312025275594],
    ["latitude" => -0.4230687780856362, "longitude" => 117.06305163462015],
    ["latitude" => -0.42354796469772144, "longitude" => 117.06175420299121],
    ["latitude" => -0.42340237974823275, "longitude" => 117.06154067256757],
    ["latitude" => -0.42364502132919146, "longitude" => 117.06138537771405],
    ["latitude" => -0.42341208541161257, "longitude" => 117.06120096507547],
    ["latitude" => -0.423654726992266, "longitude" => 117.06103596429357],
    ["latitude" => -0.43182949412220134, "longitude" => 117.07002806809813],
    ["latitude" => -0.43172775355245535, "longitude" => 117.07020611914994],
    ["latitude" => -0.4314861196938746, "longitude" => 117.07011709362403],
    ["latitude" => -0.4314225318350751, "longitude" => 117.07038417020175],
    ["latitude" => -0.43114274525006496, "longitude" => 117.07038417020175],
    ["latitude" => -0.4312444858276224, "longitude" => 117.07068940057626],
    ["latitude" => -0.4308248059390961, "longitude" => 117.07192304000787],
    ["latitude" => -0.43073578292890685, "longitude" => 117.07219011658557],
    ["latitude" => -0.4304559963186685, "longitude" => 117.07206293726287],
    ["latitude" => -0.43027795028862115, "longitude" => 117.07233001384057],
    ["latitude" => -0.4300617515322715, "longitude" => 117.07208837312741],
    ["latitude" => -0.42756078830983574, "longitude" => 117.08079443182882],
    ["latitude" => -0.427737996370782, "longitude" => 117.08107588776384],
    ["latitude" => -0.42744612426822964, "longitude" => 117.08118013070273],
    ["latitude" => -0.4270226663156508, "longitude" => 117.08417803942285],
    ["latitude" => -0.4269283497860701, "longitude" => 117.08441383729286],
    ["latitude" => -0.426551083656132, "longitude" => 117.08442955715087],
    ["latitude" => -0.42657854841517323, "longitude" => 117.08483718665703],
    ["latitude" => -0.4262670648153623, "longitude" => 117.08500666272433],
    ["latitude" => -0.42645966236924426, "longitude" => 117.08522614311869],
    ["latitude" => -0.4255016492207327, "longitude" => 117.08675680316233],
    ["latitude" => -0.4255212380469593, "longitude" => 117.0870245245021],
    ["latitude" => -0.42522087603939024, "longitude" => 117.08709635217863],
    ["latitude" => -0.425299231346841, "longitude" => 117.08740325225104],
    ["latitude" => -0.4250380469855803, "longitude" => 117.0876775033796],
    ["latitude" => -0.4251359911220947, "longitude" => 117.08791257577549],
    ["latitude" => -0.4231312267776332, "longitude" => 117.08915606609281],
    ["latitude" => -0.42322249041041754, "longitude" => 117.08925515502476],
    ["latitude" => -0.42306082340303824, "longitude" => 117.0893881428019],
    ["latitude" => -0.42314426443952313, "longitude" => 117.0894741937165],
    ["latitude" => -0.42388228740927747, "longitude" => 117.092071793987],
    ["latitude" => -0.42410058816921686, "longitude" => 117.09189201196915],
    ["latitude" => -0.42396575534763176, "longitude" => 117.09233504622742],
    ["latitude" => -0.4241712148843462, "longitude" => 117.0922708383639],
    ["latitude" => -0.424017580052991, "longitude" => 117.0926253768497],
    ["latitude" => -0.42419996526580206, "longitude" => 117.09265354004367],
    ];
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $desa = DesaKelurahan::where('name', 'Bukit Raya')->firstOrFail();

        foreach ($this->bukitRayaCoordinates as $coordinate)
        {
            StreetLight::create([
                'address' => 'Jalan Samarinda Tenggarong',
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
        Schema::table('tenggarong_seberang_2', function (Blueprint $table)
        {
            //
        });
    }
};
