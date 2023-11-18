import { getUniqueKey } from "@/Models/Helper";
import L, { LatLngExpression, LatLngLiteral } from "leaflet";
import React, { useEffect, useState } from "react";
import { Circle, MapContainer, Marker, Polygon, Popup, TileLayer, Tooltip } from "react-leaflet";
import Select from 'react-select';
import { Location } from '@/Models/SharedModel';
import MapMarkerSVG from "./MapMarkerSVG";
import { DesaKelurahanModel, KecamatanModel } from "@/Models/Kecamatan";
import useRoute from "@/Hooks/useRoute";
import { User } from "@/types";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import useTypedPage from "@/Hooks/useTypedPage";
import LeafletSearchControl from "./LeafletSearchControl";
import { useQuery } from "@tanstack/react-query";
import { Button, InputLabel, TextField } from "@mui/material";
import { StreetLightModel } from "@/Models/StreetLight";
import { Link } from "@inertiajs/react";

interface Props {
    user?: User;
    mapHeight: string;
    kecamatan: Array<KecamatanModel>
}

export default function MarketsMap(props: Props) {
    const route = useRoute();

    const page = useTypedPage<{ location: Location }>()

    const [streetLights, setStreetLights] = useState<{
        data: StreetLightModel[]
        isLoading: boolean
        error?: any
    }>({
        data: [],
        isLoading: true,
    });


    // let loc_max = page.props.location.max;
    // let loc_min = page.props.location.min;
    // let toStringViewBox = (loc: LatLngLiteral) => `${loc.lng},${loc.lat}`;
    // let viewbox = `${toStringViewBox(loc_min)},${toStringViewBox(loc_max)}`;
    // let provider = new OpenStreetMapProvider({
    //     params: {
    //         city: props.location.city,
    //         email: page.props.user?.email ?? "lppm@itk.ac.id",
    //         viewbox,
    //         // bounded: 1
    //     },
    // });

    const [selectedKecamatan, setSelectedKecamatan] = useState<KecamatanModel | null>(null);


    const [streetLightFilterState, setStreetLightFilterState] = useState<{
        address: string,
        kecamatan: KecamatanModel | null,
        kecamatan_id: number | null,
        desa_kelurahan: DesaKelurahanModel | null,
        desa_kelurahan_id: number | null

    }>({
        address: '',
        kecamatan: null,
        kecamatan_id: null,
        desa_kelurahan: null,
        desa_kelurahan_id: null,
    });

    useEffect(() => {
        if (selectedKecamatan) {
            setStreetLightFilterState({
                ...streetLightFilterState,
                kecamatan: selectedKecamatan,
                kecamatan_id: selectedKecamatan?.id,
                desa_kelurahan: null,
                desa_kelurahan_id: null,

            });
        }
    }, [selectedKecamatan])

    useEffect(() => {
        const fetchFilter = async () => {
            const url = new URL(route('api.street-light'));

            Object.keys(streetLightFilterState).forEach((element) => {
                // @ts-ignore
                if (streetLightFilterState[element] != null && streetLightFilterState != '') {
                    // @ts-ignore
                    url.searchParams.set(element, streetLightFilterState[element])
                }
            });
            setStreetLights({
                data: [],
                isLoading: true,
            });

            await fetch(url.toString()).then(res => res.json()).then(res => {
                setStreetLights({
                    data: res.data,
                    isLoading: false,
                });
            });
        }

        fetchFilter();

    }, [streetLightFilterState, selectedKecamatan]);


    return (
        <div className="flex flex-col gap-4 p-5 m-3 md:m-10">
            <div className="text-md lg:text-3xl font-bold">
                Peta Persebaran Sarana Perdagangan
            </div>
            <div className="flex flex-col gap-2">
                <div className="">
                    <InputLabel>
                        Alamat Usaha Perdagangan
                    </InputLabel>
                    <TextField
                        className="w-full"
                        type="text"
                        value={streetLightFilterState.address}
                        onChange={e => {
                            let newFilter = { ...streetLightFilterState, address: e.target.value };
                            setStreetLightFilterState(newFilter);
                        }}
                    />
                </div>
                <div className="">
                    <InputLabel>
                        Kecamatan
                    </InputLabel>
                    <Select
                        options={[
                            {
                                // @ts-ignore
                                id: '',
                                name: ''

                            },
                            ...props.kecamatan
                        ]}
                        className="z-30 w-full"
                        getOptionValue={item => item.id.toString()}
                        getOptionLabel={item => item.name}
                        value={selectedKecamatan}
                        onChange={value => {
                            setSelectedKecamatan(value);
                        }}
                    />
                </div>
                <div className="">
                    <InputLabel>
                        Kelurahan
                    </InputLabel>
                    <Select
                        options={[
                            {
                                // @ts-ignore
                                id: '',
                                name: ''

                            },
                            ...selectedKecamatan?.desa_kelurahan ?? []
                        ]}
                        className="z-20 w-full"
                        getOptionValue={item => item.id.toString()}
                        getOptionLabel={item => item.name}
                        value={streetLightFilterState.desa_kelurahan}
                        onChange={
                            e => {
                                if (e) {
                                    setStreetLightFilterState(
                                        {
                                            ...streetLightFilterState,
                                            desa_kelurahan: e,
                                            desa_kelurahan_id: e.id
                                        }
                                    )
                                }
                            }
                        }
                    />
                </div>

                {streetLights.isLoading ? (
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                    </div>
                ) : (
                    <div>
                        <div className="flex justify-between py-5">
                            <div className="text-sm lg:text-lg contents-center">
                                Ditemukan Sebanyak{' '}
                                <strong>{streetLights.data.length}</strong> Lampu Jalan
                            </div>
                        </div>

                        <MapContainer
                            center={page.props.location.center}
                            attributionControl={false}
                            zoom={13}
                            style={{
                                height: props.mapHeight,
                                zIndex: 1,
                            }}
                        >
                            {/* <LeafletSearchControl provider={provider} /> */}
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                maxZoom={25}
                                maxNativeZoom={19}
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {streetLights.data.map(it =>
                            (
                                <Marker
                                    key={it.id}
                                    position={[it.latitude, it.longitude]}
                                    icon={
                                        L.divIcon({
                                            className: "leaflet-data-marker",
                                            html: L.Util.template(
                                                '<svg version="1" xmlns="http://www.w3.org/2000/svg" width="100" height="50" viewBox="0 0 450 350"><path fill="{mapIconColor}" stroke="#FFF" stroke-width="6" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/><circle id="circle-bg" fill="#FFF" cx="74" cy="75" r="{pinInnerCircleRadius}"/></svg>',
                                                {
                                                    mapIconColor: "#79d1ff",
                                                    pinInnerCircleRadius: 35
                                                }
                                            ),
                                            iconAnchor: [30, 20],
                                            iconSize: [25, 30],
                                            popupAnchor: [1, -34],
                                        })
                                    }
                                >
                                    <Tooltip>{`${it.address} - ${it.id}`}</Tooltip>
                                    <Circle
                                        center={[it.latitude, it.longitude]}
                                        fillColor="#79d1ff"
                                        color="#79d1ff"
                                        radius={it.radius} />
                                    <Popup>
                                        <Link
                                            href={route('street-light.show', it.id)}
                                        >
                                            <Button
                                                color="primary"
                                            >
                                                Lihat Lampu
                                            </Button>
                                        </Link>
                                    </Popup>
                                </Marker>
                            )
                            )}
                        </MapContainer>
                    </div>
                )}
            </div>
        </div>
    )
}
