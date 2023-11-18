import React from 'react';
import route from 'ziggy-js';
import AdminShowLayout from '@/Layouts/Admin/AdminShowLayout';
import StreetLightMap from '@/Components/StreetLightMap';
import { KecamatanModel } from '@/Models/Kecamatan';

interface Props {
    kecamatan: KecamatanModel[];
}

export default function Map(props: Props) {

    return (
        <AdminShowLayout
            title={`Sebaran Lampu Jalan`}
            headerTitle={'Sebaran Lampu Jalan'}
            backRoute={route('street-light.index')}
            backRouteTitle="Kembali"
        >
            <div className="m-8 mb-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/5 flex flex-col gap-5">
                <StreetLightMap
                    mapHeight={'70vh'}
                    kecamatan={props.kecamatan}
                />
            </div>
        </AdminShowLayout>
    );
}
