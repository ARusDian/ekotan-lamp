import { Button, FormControlLabel, InputLabel, Modal, Switch, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Controller, UseFormReturn } from 'react-hook-form';
import React, { ChangeEvent, useEffect, useState } from "react";
import MapAreaSelect from '@/Components/MapAreaSelect';
import InputError from "@/Components/Jetstream/InputError";
import { LatLngExpression } from 'leaflet';
import { Location } from '@/Models/SharedModel';
import useTypedPage from "@/Hooks/useTypedPage";
import { MapContainer, TileLayer } from 'react-leaflet';
import Select from "react-select";
import { StreetLightModel } from "@/Models/StreetLight";
import { DesaKelurahanModel, KecamatanModel } from "@/Models/Kecamatan";

interface Props extends React.HTMLAttributes<HTMLElement> {
	className?: string;
	form: UseFormReturn<StreetLightModel>;
	kecamatan: KecamatanModel[];
}

export default function Form(props: Props) {
	const { form } = props;
	const page = useTypedPage<{ location: Location }>()

	const [selectedKecamatan, setSelectedKecamatan] = useState<KecamatanModel | null>(null);

	const centerPosition = (): LatLngExpression => {
		const lat = form.getValues('latitude');
		const lng = form.getValues('longitude');

		if (lat && lng) {
			return [lat, lng];
		} else {
			return page.props.location.center
		}
	};

	const [currentLocation, setCurrentLocation] = React.useState<LatLngExpression>(
		centerPosition
	);

	const [map, setMap] = React.useState(null);

	React.useEffect(() => {
		if (!map) return;

	}, [map]);

	function formatPositionValue(value: number) {
		if (!isNaN(value) && value != null) {
			return value;
		} else {
			return 0;
		}
	}


	return (
		<div className={`flex-col gap-5 {props.className}`}>
			<div className="form-control w-full mt-4">
				<TextField
					{...form.register('address')}
					label="Alamat"
					type="text"
					id="address"
					name="address"
					autoComplete="address"
					style={{ width: '100%' }}
					autoFocus
					defaultValue={form.formState.defaultValues?.address}
					error={form.formState.errors?.address != null}
					helperText={form.formState.errors.address?.message}
				/>
			</div>
			<div className="form-control w-full mt-4">
				<InputLabel htmlFor="description">Deskripsi</InputLabel>
				<Controller
					name="description"
					control={form.control}
					render={({ field }) => (
						<>
							<textarea
								{...field}
								id="description"
								name="description"
								className="mt-1 block w-full"
							/>
							<InputError
								message={form.formState.errors.description?.message}
								className="mt-2"
							/>
						</>
					)}
				/>
			</div>
			<div className="form-control w-full mt-4">
				<TextField
					{...form.register('radius')}
					label="Radius"
					type="number"
					id="radius"
					name="radius"
					autoComplete="radius"
					style={{ width: '100%' }}
					autoFocus
					defaultValue={form.formState.defaultValues?.radius}
					error={form.formState.errors?.radius != null}
					helperText={form.formState.errors.radius?.message}
				/>
			</div>
			<div className="form-control w-full mt-4 z-50">
				<InputLabel htmlFor="kecamatan">Kecamatan</InputLabel>
				<Select
					className="z-50"
					options={props.kecamatan}
					getOptionValue={it => it.id!.toString()}
					getOptionLabel={it => it.name}
					value={selectedKecamatan}
					onChange={value => {
						setSelectedKecamatan(value);
					}}
				/>
			</div>
			<div className="form-control w-full mt-4 z-40">
				<Controller
					control={form.control}
					name="desa_kelurahan"
					render={({ field }) => {
						return (
							<>
								<InputLabel htmlFor="desakelurahan">desa/Kelurahan</InputLabel>
								<Select
									ref={field.ref}
									className="z-40"
									options={selectedKecamatan?.desa_kelurahan ?? []}
									getOptionValue={it => it.id!.toString()}
									getOptionLabel={it => it.name}
									value={field.value}
									onChange={value => {
										field.onChange(value);
									}}
								/>
							</>
						);
					}}
				/>
			</div>
			<div className="form-control w-full mt-4 z-40">
				<Controller
					control={form.control}
					name="status"
					render={({ field }) => {
						return (
							<>
								<InputLabel htmlFor="roles">Status Lampu Jalan</InputLabel>
								<ToggleButtonGroup
									value={field.value}
									color="primary"
									exclusive
									onChange={(e, value) => {
										field.onChange(value);
									}}
									aria-label="text alignment"
								>
									<ToggleButton value="BRIGHT" aria-label="left aligned">
										Terang
									</ToggleButton>
									<ToggleButton value="DIM" aria-label="centered">
										Redup
									</ToggleButton>
									<ToggleButton value="OFF" aria-label="right aligned">
										Mati
									</ToggleButton>
								</ToggleButtonGroup>
							</>
						);
					}}
				/>
			</div>
			<div className="form-control w-full mt-4 z-0">
				<MapContainer
					center={currentLocation}
					attributionControl={false}
					zoom={13}
					// @ts-ignore
					whenCreated={setMap}
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

					<MapAreaSelect
						position={[form.watch('latitude') ?? 0, form.watch('longitude') ?? 0] || [0, 0]}
						radius={form.watch('radius') ?? 0}
						onChange={(it) => {
							form.setValue('latitude', formatPositionValue(it.lat));
							form.setValue('longitude', formatPositionValue(it.lng));
						}}
					/>
				</MapContainer>
				<div className="flex justify-around gap-3 my-5">
					<Controller
						control={form.control}
						name="latitude"
						render={({ field }) => {
							return (
								<div className="flex flex-col w-full">
									<InputLabel htmlFor="description">Koordinat Bujur</InputLabel>
									<input
										{...field}
										type="number"
										step={0.0000000}
										className="form-control w-full"
										placeholder="Latitude"
										value={field.value ?? 0}
										onChange={(e) => {
											form.setValue('latitude', formatPositionValue(parseFloat(e.target.value)));
										}}
									/>
								</div>
							);
						}}
					/>
					<Controller
						control={form.control}
						name="longitude"
						render={({ field }) => {
							return (
								<div className="flex flex-col w-full">
									<InputLabel htmlFor="description">Koordinat Lintang</InputLabel>
									<input
										{...field}
										type="number"
										step={0.0000000}
										className="form-control w-full "
										placeholder="Longitude"
										value={field.value ?? 0}
										onChange={(e) => {
											form.setValue('longitude', formatPositionValue(parseFloat(e.target.value)));
										}}
									/>
								</div>
							);
						}}
					/>
				</div>
			</div>
		</div >
	)
}
