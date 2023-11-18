import React from 'react';
import route from 'ziggy-js';
import { router } from '@inertiajs/react';
import AdminShowLayout from '@/Layouts/Admin/AdminShowLayout';
import { Circle, MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import { STATUS_COLOR, StreetLightModel, SubmissionStatusColor } from '@/Models/StreetLight';
import L from 'leaflet';

interface Props {
    streetLight: StreetLightModel;
}

export default function Show(props: Props) {
    const streetLight = props.streetLight;
    console.log(`text-[${SubmissionStatusColor(streetLight.status)}]`)
    return (
        <AdminShowLayout
            title={`Lampu Jalan ${streetLight.address}`}
            headerTitle={'Lampu Jalan'}
            backRoute={route('street-light.index')}
            backRouteTitle="Kembali"
            editRoute={route('street-light.edit', [streetLight.id])}
            editRouteTitle="Edit"
            onDelete={() => {
                router.delete(route('street-light.destroy', [streetLight.id]));
            }}
            deleteTitle={"Hapus"}
            onDeleteMessage={
                `Ini akan menghapus Lampu Jalan ${streetLight.id}`
            }
        >
            <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/5 flex flex-col gap-5">
                <table className="w-full">
                    <thead>
                        <tr className="border-b py-3 border-black">
                            <th className="">Properti</th>
                            <th className="">Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center">Alamat</td>
                            <td className="py-3 text-center">{streetLight.address}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center">Kecamatan</td>
                            <td className="py-3 text-center">{streetLight.desa_kelurahan.name}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center">Point</td>
                            <td className="py-3 text-center">{streetLight.desa_kelurahan.kecamatan.name}</td>
                        </tr>
                        <tr className={`border-b py-3 border-black`} style={{
                            color: SubmissionStatusColor(streetLight.status)
                        }}>
                            <td className="py-3 text-center">Status</td>
                            <td className="py-3 text-center">{streetLight.status}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center">Radius</td>
                            <td className="py-3 text-center">{streetLight.radius}</td>
                        </tr>
                        <tr className="border-b py-3 border-black">
                            <td className="py-3 text-center">Deskripsi</td>
                            <td className="py-3 text-center">{streetLight.description}</td>
                        </tr>

                        {streetLight.latitude && streetLight.longitude && (
                            <>
                                <tr className="border-b py-3 border-black font-bold">
                                    <td className="py-3 text-center">Koordinat Bujur</td>
                                    <td className="py-3 text-center">Koordinat Lintang</td>
                                </tr>
                                <tr className="border-b py-3 border-black">
                                    <td className="py-3 text-center">{streetLight.longitude ?? "-"}</td>
                                    <td className="py-3 text-center">{streetLight.latitude ?? "-"}</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
                {streetLight.latitude && streetLight.longitude && (
                    <>
                        <p className='text-lg font-bold'>Peta Event</p>
                        <MapContainer
                            center={[streetLight.latitude, streetLight.longitude]}
                            attributionControl={false}
                            zoom={13}
                            // @ts-ignore
                            style={{
                                height: '70vh',
                                zIndex: 1,
                            }}
                        >

                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                maxZoom={25}
                                maxNativeZoom={19}
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <Marker
                                key={streetLight.id}
                                position={[streetLight.latitude, streetLight.longitude]}
                                icon={
                                    L.divIcon({
                                        className: "leaflet-data-marker",
                                        html: L.Util.template(
                                            '<svg version="1" xmlns="http://www.w3.org/2000/svg" width="100" height="50" viewBox="0 0 450 350"><path fill="{mapIconColor}" stroke="#FFF" stroke-width="6" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/><circle id="circle-bg" fill="#FFF" cx="74" cy="75" r="{pinInnerCircleRadius}"/></svg>',
                                            {
                                                mapIconColor: SubmissionStatusColor(streetLight.status),
                                                pinInnerCircleRadius: 35
                                            }
                                        ),
                                        iconAnchor: [30, 20],
                                        iconSize: [25, 30],
                                        popupAnchor: [1, -34],
                                    })
                                }                                
                            >
                                <Circle
                                    center={[streetLight.latitude, streetLight.longitude]}
                                    fillColor={SubmissionStatusColor(streetLight.status)}
                                    radius={streetLight.radius} />
                                <Tooltip>{streetLight.address}-{streetLight.id}</Tooltip>
                            </Marker>
                        </MapContainer>
                    </>
                )}
            </div>
        </AdminShowLayout>
    );
}
