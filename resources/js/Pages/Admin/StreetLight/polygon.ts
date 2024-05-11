import { LatLngExpression } from "leaflet";

export interface Geometry {
    type: string;
    properties: {
        "fill": string
        "stroke": string
        "stroke-width": number
        "stroke-opacity": number
        "fill-opacity": number
    };
    geometry: {
        type: string;
        coordinates: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][];
    }
}

export interface PolygonCluster {
    type: string;
    features: Geometry[];
}

const polygonCluster: PolygonCluster = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.44121592145624,
                            116.99953168631
                        ],
                        [
                            -0.4414950351018,
                            116.99973553419
                        ],
                        [
                            -0.44197170097606,
                            117.00007081032
                        ],
                        [
                            -0.44209320408357,
                            117.0001539588
                        ],
                        [
                            -0.44223702593123,
                            117.00023442507
                        ],
                        [
                            -0.44236351514466,
                            117.00029879808
                        ],
                        [
                            -0.4426868194703,
                            117.00044631958
                        ],
                        [
                            -0.44293291524732,
                            117.00039803982
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.3580279048788,
                            117.10967183708
                        ],
                        [
                            -0.35810193919095,
                            117.10981250502
                        ],
                        [
                            -0.35831663869282,
                            117.10990134793
                        ],
                        [
                            -0.35936792122379,
                            117.11027006979
                        ],
                        [
                            -0.35948467461366,
                            117.11030721933
                        ],
                        [
                            -0.36145514822295,
                            117.11092699347
                        ],
                        [
                            -0.36149581903958,
                            117.11083494716
                        ],
                        [
                            -0.36137808772778,
                            117.1107878537
                        ],
                        [
                            -0.35839067300265,
                            117.10979029429
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.35512355828908,
                            117.10930072579
                        ],
                        [
                            -0.35438561224782,
                            117.10944831783
                        ],
                        [
                            -0.35421440876161,
                            117.1094896436
                        ],
                        [
                            -0.35427344444687,
                            117.10961952459
                        ],
                        [
                            -0.3567767248969,
                            117.10939790478
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.35309172509546,
                            117.11017818903
                        ],
                        [
                            -0.35288944705639,
                            117.11021933111
                        ],
                        [
                            -0.3527865938145,
                            117.11031875779
                        ],
                        [
                            -0.3530437269171,
                            117.11027761572
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.35138051059536,
                            117.10972875061
                        ],
                        [
                            -0.34965469628008,
                            117.10985343452
                        ],
                        [
                            -0.34988982038717,
                            117.11008856301
                        ],
                        [
                            -0.35169743091611,
                            117.11045650726
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.34730345482435,
                            117.10885413844
                        ],
                        [
                            -0.34713690853669,
                            117.10897170269
                        ],
                        [
                            -0.34730345482435,
                            117.10906967289
                        ],
                        [
                            -0.34747000110905,
                            117.1089325146
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.34601151206574,
                            117.10825242251
                        ],
                        [
                            -0.34495019433349,
                            117.10890665744
                        ],
                        [
                            -0.34502510232378,
                            117.10899919252
                        ],
                        [
                            -0.34608525252696,
                            117.10845152539
                        ],
                        [
                            -0.34617374107968,
                            117.1083704094
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.34391591014025,
                            117.10942275365
                        ],
                        [
                            -0.34333552021066,
                            117.10961322652
                        ],
                        [
                            -0.34323132537382,
                            117.10973179519
                        ],
                        [
                            -0.34385150025783,
                            117.10961598677
                        ],
                        [
                            -0.34398952143393,
                            117.10954237415
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.34136636388774,
                            117.10972508662
                        ],
                        [
                            -0.34140221320714,
                            117.10986336502
                        ],
                        [
                            -0.34156097447712,
                            117.10986336502
                        ],
                        [
                            -0.34152000382706,
                            117.10973532946
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.33927914272332,
                            117.10895633716
                        ],
                        [
                            -0.33893757534453,
                            117.10911289162
                        ],
                        [
                            -0.33929337469719,
                            117.10926944608
                        ],
                        [
                            -0.33963494206341,
                            117.10936907164
                        ],
                        [
                            -0.33989111758016,
                            117.10934060719
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.33688982794542,
                            117.10880054407
                        ],
                        [
                            -0.3361296854626,
                            117.108966219
                        ],
                        [
                            -0.33593477712413,
                            117.10920011303
                        ],
                        [
                            -0.33678262836811,
                            117.10898571017
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.43045503122809,
                            117.06641448316
                        ],
                        [
                            -0.43013292715632,
                            117.06643237833
                        ],
                        [
                            -0.43047646291574,
                            117.06709143282
                        ],
                        [
                            -0.43084123303033,
                            117.06710216165
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.42808375186181,
                            117.06537700471
                        ],
                        [
                            -0.42715614826399,
                            117.06557866328
                        ],
                        [
                            -0.42698474323909,
                            117.06580048771
                        ],
                        [
                            -0.42773085920194,
                            117.06580048771
                        ],
                        [
                            -0.42812408245047,
                            117.06569965842
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.42393167935922,
                            117.0640883773
                        ],
                        [
                            -0.42377593016103,
                            117.06423167049
                        ],
                        [
                            -0.42390052951984,
                            117.06443103491
                        ],
                        [
                            -0.42414349826374,
                            117.06435627325
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.42306877808564,
                            117.06305163462
                        ],
                        [
                            -0.4229915847865,
                            117.06312025276
                        ],
                        [
                            -0.4231631254502,
                            117.06328322083
                        ],
                        [
                            -0.42331751204429,
                            117.06315885046
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.42365472699227,
                            117.06103596429
                        ],
                        [
                            -0.42341208541161,
                            117.06120096508
                        ],
                        [
                            -0.42340237974823,
                            117.06154067257
                        ],
                        [
                            -0.42354796469772,
                            117.06175420299
                        ],
                        [
                            -0.42364502132919,
                            117.06138537771
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.4318294941222,
                            117.0700280681
                        ],
                        [
                            -0.43148611969387,
                            117.07011709362
                        ],
                        [
                            -0.43114274525006,
                            117.0703841702
                        ],
                        [
                            -0.43124448582762,
                            117.07068940058
                        ],
                        [
                            -0.43172775355246,
                            117.07020611915
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.4308248059391,
                            117.07192304001
                        ],
                        [
                            -0.43006175153227,
                            117.07208837313
                        ],
                        [
                            -0.43027795028862,
                            117.07233001384
                        ],
                        [
                            -0.43073578292891,
                            117.07219011659
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.42702266631565,
                            117.08417803942
                        ],
                        [
                            -0.42655108365613,
                            117.08442955715
                        ],
                        [
                            -0.42626706481536,
                            117.08500666272
                        ],
                        [
                            -0.42645966236924,
                            117.08522614312
                        ],
                        [
                            -0.42692834978607,
                            117.08441383729
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.42550164922073,
                            117.08675680316
                        ],
                        [
                            -0.42522087603939,
                            117.08709635218
                        ],
                        [
                            -0.42503804698558,
                            117.08767750338
                        ],
                        [
                            -0.42513599112209,
                            117.08791257578
                        ],
                        [
                            -0.42552123804696,
                            117.0870245245
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.42313122677763,
                            117.08915606609
                        ],
                        [
                            -0.42306082340304,
                            117.0893881428
                        ],
                        [
                            -0.42314426443952,
                            117.08947419372
                        ],
                        [
                            -0.42322249041042,
                            117.08925515502
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.42410058816922,
                            117.09189201197
                        ],
                        [
                            -0.42388228740928,
                            117.09207179399
                        ],
                        [
                            -0.42401758005299,
                            117.09262537685
                        ],
                        [
                            -0.4241999652658,
                            117.09265354004
                        ],
                        [
                            -0.42417121488435,
                            117.09227083836
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.41732119424376,
                            117.09561341469
                        ],
                        [
                            -0.41688053204663,
                            117.09665340503
                        ],
                        [
                            -0.41668664067208,
                            117.09711170586
                        ],
                        [
                            -0.41696866448802,
                            117.09704119804
                        ],
                        [
                            -0.4172683147814,
                            117.09651238939
                        ],
                        [
                            -0.41742695316739,
                            117.09608934248
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.4151585963714,
                            117.09852358657
                        ],
                        [
                            -0.41510399262049,
                            117.09863279693
                        ],
                        [
                            -0.414978403992,
                            117.09953378247
                        ],
                        [
                            -0.41527326424706,
                            117.0985945733
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.41108497857568,
                            117.10316650449
                        ],
                        [
                            -0.41077519346163,
                            117.10320902511
                        ],
                        [
                            -0.41087238094969,
                            117.10330621509
                        ],
                        [
                            -0.41109712701129,
                            117.10331836384
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.40906950626914,
                            117.10268160487
                        ],
                        [
                            -0.4089499099737,
                            117.10271422287
                        ],
                        [
                            -0.40885205845792,
                            117.10278489521
                        ],
                        [
                            -0.40909125104993,
                            117.10279033154
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.40552686866142,
                            117.10275648231
                        ],
                        [
                            -0.40536279030038,
                            117.10288504176
                        ],
                        [
                            -0.40608195828594,
                            117.10307168863
                        ],
                        [
                            -0.40614475504785,
                            117.10297990644
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.40386287039564,
                            117.10478592322
                        ],
                        [
                            -0.40314770947072,
                            117.10518978881
                        ],
                        [
                            -0.40308040020396,
                            117.10542537707
                        ],
                        [
                            -0.4036945972425,
                            117.10508882241
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.4005581787071,
                            117.10656085869
                        ],
                        [
                            -0.40034726510132,
                            117.10659394399
                        ],
                        [
                            -0.40038862071072,
                            117.10670560686
                        ],
                        [
                            -0.40054577202457,
                            117.10665184325
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.39772163440277,
                            117.10670444836
                        ],
                        [
                            -0.39748853781912,
                            117.10673774867
                        ],
                        [
                            -0.39736485391491,
                            117.10678056336
                        ],
                        [
                            -0.39648442879169,
                            117.1071269919
                        ],
                        [
                            -0.39620989498862,
                            117.10733068314
                        ],
                        [
                            -0.39609476790721,
                            117.10750780596
                        ],
                        [
                            -0.39605934418953,
                            117.10770264106
                        ],
                        [
                            -0.39763125001397,
                            117.10682813524
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.39369024683375,
                            117.10880201536
                        ],
                        [
                            -0.39357251194256,
                            117.10887265796
                        ],
                        [
                            -0.39349009751774,
                            117.10900216939
                        ],
                        [
                            -0.39384918893423,
                            117.10887854484
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.38948165520871,
                            117.1101237947
                        ],
                        [
                            -0.38906259675327,
                            117.11016308233
                        ],
                        [
                            -0.38856496481041,
                            117.11029404112
                        ],
                        [
                            -0.38886616309511,
                            117.11039880815
                        ],
                        [
                            -0.38933760386701,
                            117.11026784936
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.43651313298224,
                            117.04578815255
                        ],
                        [
                            -0.43676837384197,
                            117.04613456092
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.43591786831823,
                            117.04153965514
                        ],
                        [
                            -0.43556404292902,
                            117.04195246337
                        ],
                        [
                            -0.43549770066668,
                            117.04247584522
                        ],
                        [
                            -0.43564512791551,
                            117.04227681269
                        ],
                        [
                            -0.43579992652367,
                            117.04193034864
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.43907062213293,
                            117.03600292874
                        ],
                        [
                            -0.43887853917478,
                            117.03628750444
                        ],
                        [
                            -0.43917022070187,
                            117.03665033845
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.43859308511487,
                            117.03255975622
                        ],
                        [
                            -0.43848727680265,
                            117.03268068355
                        ],
                        [
                            -0.43854773869553,
                            117.03293765412
                        ],
                        [
                            -0.43873920135309,
                            117.03311400647
                        ],
                        [
                            -0.43871400889843,
                            117.03282176543
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.4342645243738,
                            117.02961479134
                        ],
                        [
                            -0.43434772832286,
                            117.02988105163
                        ],
                        [
                            -0.43453909740223,
                            117.03022219762
                        ],
                        [
                            -0.43478038884321,
                            117.03025548015
                        ],
                        [
                            -0.43448917503417,
                            117.02971463895
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.43427354803608,
                            117.02739384025
                        ],
                        [
                            -0.4341751737283,
                            117.02770126879
                        ],
                        [
                            -0.43439651591902,
                            117.02827923445
                        ],
                        [
                            -0.43455637416385,
                            117.02832842301
                        ],
                        [
                            -0.43439651591902,
                            117.02775045736
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.43205956495095,
                            117.02378118576
                        ],
                        [
                            -0.43204922289038,
                            117.02412248346
                        ],
                        [
                            -0.43258701002129,
                            117.02477405179
                        ],
                        [
                            -0.43260769414096,
                            117.02452583528
                        ],
                        [
                            -0.43236982676148,
                            117.02412248346
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.43266298479545,
                            117.02124155526
                        ],
                        [
                            -0.43227948249146,
                            117.02132784574
                        ],
                        [
                            -0.43178092946729,
                            117.02179764944
                        ],
                        [
                            -0.43223154470209,
                            117.02177847378
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.43348142709216,
                            117.01717208678
                        ],
                        [
                            -0.43324600207732,
                            117.01730288219
                        ],
                        [
                            -0.43286409037105,
                            117.01820275465
                        ],
                        [
                            -0.43308905206338,
                            117.01811904558
                        ],
                        [
                            -0.4332669287456,
                            117.01787838202
                        ],
                        [
                            -0.43341864708892,
                            117.01749122759
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.43276607928233,
                            117.01265132108
                        ],
                        [
                            -0.43272505372449,
                            117.01296585933
                        ],
                        [
                            -0.43294385669708,
                            117.01336245103
                        ],
                        [
                            -0.43317633484854,
                            117.0136633137
                        ],
                        [
                            -0.43354556483914,
                            117.01389579849
                        ],
                        [
                            -0.43334043706881,
                            117.01347185564
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.43375427836365,
                            117.0085249924
                        ],
                        [
                            -0.4333437625082,
                            117.00891767098
                        ],
                        [
                            -0.43304033773118,
                            117.00929250053
                        ],
                        [
                            -0.43345085360307,
                            117.00931034956
                        ],
                        [
                            -0.43368288430344,
                            117.00900691611
                        ],
                        [
                            -0.43400415756912,
                            117.00856069045
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#75ffef",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#75ffef",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -0.43470024959794,
                            117.00634741119
                        ],
                        [
                            -0.43486088621087,
                            117.00681148587
                        ],
                        [
                            -0.43514646240319,
                            117.00695427808
                        ],
                        [
                            -0.43514646240319,
                            117.00645450535
                        ]
                    ]
                ]
            }
        }
    ]
}
export {
    polygonCluster
}
