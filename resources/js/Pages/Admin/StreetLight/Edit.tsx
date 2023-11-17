import React from 'react';
import route from 'ziggy-js';

import Form from './Form';
import AdminFormLayout from '@/Layouts/Admin/AdminFormLayout';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import Api from '@/Utils/Api';
import { KecamatanModel } from '@/Models/Kecamatan';
import { StreetLightModel } from '@/Models/StreetLight';


interface Props {
    streetLight: StreetLightModel;
    kecamatan: KecamatanModel[];
}

export default function Edit(props: Props) {
    let streetLight = props.streetLight;
    let form = useForm<StreetLightModel>({
        defaultValues: streetLight,
    });

    async function onSubmit(value: any) {
        await Api.postAsync({
            route: route('street-light.update', streetLight.id),
            value: {
                ...value,
                _method: 'PUT',
            },
            form,
        });
    }

    return (
        <AdminFormLayout
            title="Edit User"
            backRoute={route('street-light.show', [streetLight.id])}
            backRouteTitle="Kembali"
        >
            <form
                className="flex-col gap-5 py-5"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <Form
                    form={form}
                    kecamatan={props.kecamatan}
                    className="my-5 mx-2"
                />
                <div className="flex justify-end">
                    <Button
                        type="submit"
                        variant="contained"
                        color="warning"
                        size="large"
                        disabled={form.formState.isSubmitting}
                    >
                        Update
                    </Button>
                </div>
            </form>
        </AdminFormLayout>
    );
}
