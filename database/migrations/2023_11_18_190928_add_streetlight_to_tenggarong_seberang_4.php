<?php
use App\Models\DesaKelurahan;
use App\Models\StreetLight;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    protected $telukDalamCoordinates = [
    ['latitude' => -0.43673191086254, 'longitude' => 117.04671798553721],
    ['latitude' => -0.43676837384196926, 'longitude' => 117.04613456091953],
    ['latitude' => -0.43651313298223676, 'longitude' => 117.04578815255277],
    ['latitude' => -0.4365313644725048, 'longitude' => 117.0453505840895],
    ['latitude' => -0.4354977006666844, 'longitude' => 117.04247584522182],
    ['latitude' => -0.4356451279155143, 'longitude' => 117.04227681268576],
    ['latitude' => -0.43556404292901724, 'longitude' => 117.04195246336775],
    ['latitude' => -0.4357999265236719, 'longitude' => 117.0419303486415],
    ['latitude' => -0.43591786831823215, 'longitude' => 117.0415396551448],
    ['latitude' => -0.438928338460707, 'longitude' => 117.03711988834652],
    ['latitude' => -0.4391702207018685, 'longitude' => 117.0366503384483],
    ['latitude' => -0.4388785391747812, 'longitude' => 117.03628750443602],
    ['latitude' => -0.43907062213293035, 'longitude' => 117.0360029287401],
    ['latitude' => -0.4390421653987045, 'longitude' => 117.03527014632313],
    ['latitude' => -0.43729572221649204, 'longitude' => 117.03116947733477],
    ['latitude' => -0.4387392013530919, 'longitude' => 117.03311400646685],
    ['latitude' => -0.43854773869553254, 'longitude' => 117.03293765411522],
    ['latitude' => -0.43871400889843076, 'longitude' => 117.032821765427],
    ['latitude' => -0.4387089704074782, 'longitude' => 117.03281168814976],
    ['latitude' => -0.43848727680265126, 'longitude' => 117.03268068354569],
    ['latitude' => -0.4385930851148691, 'longitude' => 117.03255975621886],
    ['latitude' => -0.43478038884320985, 'longitude' => 117.03025548015374],
    ['latitude' => -0.4345390974022302, 'longitude' => 117.03022219761816],
    ['latitude' => -0.4346139809537051, 'longitude' => 117.02994761669952],
    ['latitude' => -0.4343477283228616, 'longitude' => 117.02988105162837],
    ['latitude' => -0.43448917503416884, 'longitude' => 117.02971463895038],
    ['latitude' => -0.43426452437380275, 'longitude' => 117.02961479134359],
    ['latitude' => -0.434556374163848, 'longitude' => 117.02832842301271],
    ['latitude' => -0.4343965159190236, 'longitude' => 117.02827923444652],
    ['latitude' => -0.43447029664781806, 'longitude' => 117.02805788589863],
    ['latitude' => -0.43427354803608376, 'longitude' => 117.02794721162469],
    ['latitude' => -0.4343965159190236, 'longitude' => 117.0277504573599],
    ['latitude' => -0.43417517372830194, 'longitude' => 117.0277012687937],
    ['latitude' => -0.43427354803608376, 'longitude' => 117.02739384025499],
    ['latitude' => -0.43258701002129074, 'longitude' => 117.02477405179418],
    ['latitude' => -0.43260769414095973, 'longitude' => 117.02452583528478],
    ['latitude' => -0.43233880058098795, 'longitude' => 117.0244017270301],
    ['latitude' => -0.4323698267614774, 'longitude' => 117.02412248345703],
    ['latitude' => -0.43204922289038056, 'longitude' => 117.02412248345703],
    ['latitude' => -0.43205956495094655, 'longitude' => 117.02378118575665],
    ['latitude' => -0.4317809294672869, 'longitude' => 117.02179764944266],
    ['latitude' => -0.43223154470209096, 'longitude' => 117.02177847378131],
    ['latitude' => -0.4320685562159831, 'longitude' => 117.02156754150664],
    ['latitude' => -0.43244247097302413, 'longitude' => 117.0214620753693],
    ['latitude' => -0.4322794824914581, 'longitude' => 117.02132784573995],
    ['latitude' => -0.43266298479545434, 'longitude' => 117.02124155526394],
    ['latitude' => -0.43286409037104684, 'longitude' => 117.01820275465077],
    ['latitude' => -0.4330890520633767, 'longitude' => 117.01811904558492],
    ['latitude' => -0.4330262720568788, 'longitude' => 117.01788884565376],
    ['latitude' => -0.4332669287456043, 'longitude' => 117.01787838202053],
    ['latitude' => -0.43319368540636943, 'longitude' => 117.01758540028997],
    ['latitude' => -0.4333924887540837, 'longitude' => 117.0175016912241],
    ['latitude' => -0.43341864708891586, 'longitude' => 117.01749122759087],
    ['latitude' => -0.4332460020773187, 'longitude' => 117.01730288219262],
    ['latitude' => -0.43348142709215687, 'longitude' => 117.01717208677722],
    ['latitude' => -0.4335455648391417, 'longitude' => 117.01389579849385],
    ['latitude' => -0.4331763348485422, 'longitude' => 117.01366331370305],
    ['latitude' => -0.43331308669901436, 'longitude' => 117.01348553121595],
    ['latitude' => -0.4333404370688086, 'longitude' => 117.01347185564003],
    ['latitude' => -0.4329438566970794, 'longitude' => 117.01336245103258],
    ['latitude' => -0.43305325818101426, 'longitude' => 117.01311629066585],
    ['latitude' => -0.4327250537244897, 'longitude' => 117.01296585933062],
    ['latitude' => -0.43276607928232974, 'longitude' => 117.01265132108422],
    ['latitude' => -0.4330403377311773, 'longitude' => 117.00929250053444],
    ['latitude' => -0.4334508536030685, 'longitude' => 117.00931034956079],
    ['latitude' => -0.4333437625082007, 'longitude' => 117.00891767098126],
    ['latitude' => -0.43368288430343754, 'longitude' => 117.00900691611297],
    ['latitude' => -0.4337542783636549, 'longitude' => 117.00852499240173],
    ['latitude' => -0.4340041575691231, 'longitude' => 117.00856069045442],
    ['latitude' => -0.43486088621086855, 'longitude' => 117.00681148587284],
    ['latitude' => -0.4351464624031899, 'longitude' => 117.00695427808357],
    ['latitude' => -0.4351464624031899, 'longitude' => 117.00645450534596],
    ['latitude' => -0.4347002495979424, 'longitude' => 117.00634741118792],
    ];

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $desa = DesaKelurahan::where('name', 'Teluk Dalam')->firstOrFail();

        foreach ($this->telukDalamCoordinates as $coordinate)
        {
            StreetLight::create([
                'address' => 'Jalan Teluk Dalam',
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
        Schema::table('tenggarong_seberang_4', function (Blueprint $table)
        {
            //
        });
    }
};
