<?php

namespace Database\Seeders;

use App\Models\Kecamatan;
use App\Models\DesaKelurahan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KecamatanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            'Muara Wis' => [
                'Enggelam',
                'Lebak Cilong',
                'Lebak Mantan',
                'Melintang',
                'Muara Enggelam',
                'Muara Wis',
                'Sebemban'
            ],
            'Marang Kayu' => [
                'Bunga Putih',
                'Kersik',
                'Makarti',
                'Perangat Baru',
                'Perangat Selatan',
                'Sambera Baru',
                'Santan Ilir',
                'Santan Tengah',
                'Santan Ulu',
                'Sebuntal',
                'Semangko'
            ],
            'Tenggarong Seberang' => [
                'Bangun Rejo',
                'Bhuana Jaya',
                'Bukit Pariaman',
                'Bukit Raya',
                'Embalut',
                'Karang Tunggal',
                'Kerta Buana',
                'Loa Lepu',
                'Loa Pari',
                'Loa Raya',
                'Loa Ulung',
                'Manunggal Jaya',
                'Mulawarman',
                'Perjiwa',
                'Separi',
                'Sukamaju',
                'Tanjung Batu',
                'Teluk Dalam'
            ],
            'Sanga-Sanga' => [
                'Jawa',
                'Pendingin',
                'Sanga-Sanga Dalam',
                'Sanga-Sanga Muara',
                'Sarijaya'
            ],
            'Muara Jawa' => [
                'Dondang',
                'Muara Jawa Pesisir',
                'Muara Jawa Ilir',
                'Muara Jawa Tengah',
                'Muara Jawa Ulu',
                'Muara Kembang',
                'Tama Pole',
                'Teluk Dalam'
            ],
            'Samboja' => [
                'Beringin Agung',
                'Bukit Raya',
                'Karya Jaya',
                'Tani Bhakti',
                'Amborawang Darat',
                'Amborawang Laut',
                'Argosari',
                'Bukit Merdeka',
                'Handil Baru',
                'Handil Baru Darat',
                'Kampung Lama',
                'Karya Merdeka',
                'Kuala Samboja',
                'Margomulyo',
                'Muara Sembilang',
                'Salok Api Darat',
                'Salok Api Laut'
            ],
            'Tabang' => [
                'Bila Talang',
                'Buluk Sen',
                'Gunung Sari',
                'Kampung Baru',
                'Long Lalang',
                'Muara Belinau',
                'Muara Kebaq',
                'Muara Pedohon',
                'Muara Ritan',
                'Muara Salung',
                'Muara Tiq',
                'Muara Tuboq',
                'Ritan Baru',
                'Sidomulyo',
                'Tabang Lama',
                'Tukung Ritan',
                'Umaq Bekuai',
                'Umaq Dian',
                'Umaq Tukung'
            ],
            'Muara Kaman' => [
                'Benua Puhun',
                'Bukit Jering',
                'Bunga Jadi',
                'Cipari Makmur',
                'Kupang Baru',
                'Lebaho Ulaq',
                'Liang Buaya',
                'Menamang Kanan',
                'Menamang Kiri',
                'Muara Kaman Ilir',
                'Muara Kaman Ulu',
                'Muara Siran',
                'Panca Jaya',
                'Puan Cepak',
                'Rantau Hempang',
                'Sabintulung',
                'Sedulang',
                'Sidomukti',
                'Teratak',
                'Tunjungan'
            ],
            'Kembang Janggut' => [
                'Bukit Layang',
                'Genting Tanah',
                'Hambau',
                'Kelekat',
                'Kembang Janggut',
                'Loa Sakoh',
                'Long Beleh Haloq',
                'Long Beleh Modang',
                'Muai',
                'Perdana',
                'Pulau Pinang'
            ],
            'Kenohan' =>
                [
                    'Kahala',
                    'Kahala Ilir',
                    'Lamin Pulut',
                    'Lamin Telihan',
                    'Semayang',
                    'Teluk Bingkai',
                    'Teluk Muda',
                    'Tuana Tuha',
                    'Tubuhan'
                ],
            'Kota Bangun' => [
                'Benua Baru',
                'Kedang Ipil',
                'Kedang Murung',
                'Kota Bangun I',
                'Kota Bangun II',
                'Kota Bangun III',
                'Kota Bangun Ilir',
                'Kota Bangun Seberang',
                'Kota Bangun Ulu',
                'Liang',
                'Liang Ulu',
                'Loleng',
                'Muhuran',
                'Pela',
                'Sangkuliman',
                'Sari Nadi',
                'Sebelimbingan',
                'Sedulang',
                'Sukabumi',
                'Sumber Sari',
                'Wonosari'
            ],
            'Sebulu' => [
                'Beloro',
                'Giri Agung',
                'Lekaq Kidau',
                'Manunggal Daya',
                'Mekar Jaya',
                'Sanggulan',
                'Sebulu Ilir',
                'Sebulu Modern',
                'Sebulu Ulu',
                'Segihan',
                'Selerong',
                'Senoni',
                'Sumber Sari',
                'Tanjung Harapan'
            ],
            'Tenggarong' => [
                'Bendang Raya',
                'Rapak Lambur',
                'Baru',
                'Bukit Biru',
                'Jahab',
                'Loa Ipuh',
                'Loa Ipuh Darat',
                'Loa Tebu',
                'Maluhu',
                'Mangkurawang',
                'Melayu',
                'Panji',
                'Sukarame',
                'Timbau'
            ],
            'Muara Badak' => [
                'Badak Baru',
                'Badak Mekar',
                'Batu-Batu',
                'Gas Alam Badak I',
                'Muara Badak Ilir',
                'Muara Badak Ulu',
                'Saliki',
                'Salo Cella',
                'Salo Palai',
                'Suka Damai',
                'Sungai Bawang',
                'Tanah Datar',
                'Tanjung Limau'
            ],
            'Anggana' => [
                'Anggana',
                'Handil Terusan',
                'Kutai Lama',
                'Muara Pantuan',
                'Sepatin',
                'Sidomulyo',
                'Sungai Mariam',
                'Tani Baru'
            ],
            'Loa Janan' => [
                'Bakungan',
                'Batuah',
                'Loa Duri Ilir',
                'Loa Duri Ulu',
                'Loa Janan Ulu',
                'Purwajaya',
                'Tani Bhakti',
                'Tani Harapan'
            ],
            'Loa Kulu' => [
                'Jembayan',
                'Jembayan Dalam',
                'Jembayan Tengah',
                'Jonggon Desa',
                'Jonggon Jaya',
                'Jongkang',
                'Loa Kulu Kota',
                'Loh Sumber',
                'Lung Anai',
                'Margahayu',
                'Ponoragan',
                'Rempanga',
                'Sepakat',
                'Sumber Sari',
                'Sungai Payang'
            ],
            'Muara Muntai' => [
                'Batuq',
                'Jantur',
                'Jantur Baru',
                'Jantur Selatan',
                'Kayu Batu',
                'Muara Aloh',
                'Muara Leka',
                'Muara Muntai Ilir',
                'Muara Muntai Ulu',
                'Perian',
                'Pulau Harapan',
                'Rebaq Rinding',
                'Tanjung Batuq Harapan'
            ],
        ];

        foreach ($data as $kecamatan => $kelurahan) {
            $kecamatan = Kecamatan::updateOrCreate([
                'name' => $kecamatan
            ]);

            foreach ($kelurahan as $nama) {
                DesaKelurahan::updateOrCreate([
                    'name' => $nama,
                ], [
                    'kecamatan_id' => $kecamatan->id
                ]);
            }
        }
    }
}