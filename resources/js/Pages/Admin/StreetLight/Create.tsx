import React from 'react';
import route from 'ziggy-js';

import Form from './Form';
import AdminFormLayout from '@/Layouts/Admin/AdminFormLayout';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import Api from '@/Utils/Api';
import { StreetLightModel } from '@/Models/StreetLight';
import { DesaKelurahanModel, KecamatanModel } from '@/Models/Kecamatan';


interface Props {
	kecamatan: KecamatanModel[];
}

export default function Create(props: Props) {
	let form = useForm<StreetLightModel>({
		defaultValues: {
			description: '',
		},
	});

	async function onSubmit(value: any) {
		await Api.postAsync({ route: route('street-light.store'), value, form });
	}

	return (
		<AdminFormLayout
			title="Tambah Kategori Quest"
			backRoute={route('street-light.index')}
			backRouteTitle="Kembali"
		>
			<form
				className="flex-col gap-5 py-5"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<Form
					form={form}
					className="my-5 mx-2"
					kecamatan={props.kecamatan}
				/>
				<div className="flex justify-end">
					<Button
						type="submit"
						variant="contained"
						color="primary"
						size="large"
						disabled={form.formState.isSubmitting}
					>
						Submit
					</Button>
				</div>
			</form>
		</AdminFormLayout>
	);
}
