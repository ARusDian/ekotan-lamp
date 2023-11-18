import React from 'react';
import route from 'ziggy-js';
import { router } from '@inertiajs/react';
import AdminShowLayout from '@/Layouts/Admin/AdminShowLayout';
import { asset } from '@/Models/Helper';
import { Button } from '@mui/material';
import { useConfirm } from 'material-ui-confirm';
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import { StreetLightModel } from '@/Models/StreetLight';

interface Props {
    streetLight: StreetLightModel;
}

export default function Show(props: Props) {
    const streetLight = props.streetLight;

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
                                position={[streetLight.latitude, streetLight.longitude]}
                            >
                                <Tooltip>{streetLight.address}-{streetLight.id}</Tooltip>
                            </Marker>
                        </MapContainer>
                    </>
                )}
            </div>
        </AdminShowLayout>
    );
}
