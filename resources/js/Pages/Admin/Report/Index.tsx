import { Paginated, asset } from '@/Models/Helper';
import { MRT_ColumnDef, MRT_ColumnFiltersState, MRT_PaginationState, MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { useEffect, useMemo, useState } from 'react';
import { router } from '@inertiajs/react';
import route from 'ziggy-js';
import React from 'react';
import MuiInertiaLinkButton from '@/Components/MuiInertiaLinkButton';
import AdminTableLayout from '@/Layouts/Admin/AdminTableLayout';
import { ReportModel } from '@/Models/Report';

interface Props {
    reports: Paginated<ReportModel>;
}

export default function Index(props: Props) {
    const { reports } = props;

    const [columnFilters, setColumnFilters] =
        useState<MRT_ColumnFiltersState>([]);

    const [pagination, setPagination] = useState<MRT_PaginationState>({
        pageIndex: reports.current_page - 1,
        pageSize: reports.per_page,
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const url = new URL(route(route().current()!).toString());

        console.log(columnFilters);

        url.searchParams.set('columnFilters', JSON.stringify(columnFilters ?? []));
        url.searchParams.set('page', (pagination.pageIndex + 1).toString());
        url.searchParams.set('perPage', pagination.pageSize.toString());
        // url.searchParams.set('globalFilter', globalFilter ?? '');

        if (window.location.href == url.toString()) {
            return;
        }

        setIsLoading(true);
        router.reload({
            // preserveState: true,
            // preserveScroll: true,
            data: {
                page: pagination.pageIndex + 1,
                perPage: pagination.pageSize,
                columnFilters: JSON.stringify(columnFilters),
                // globalFilter: globalFilter,
            },
            only: ['reports'],
            onFinish: () => {
                setIsLoading(false);
            },
        });
    }, [pagination.pageIndex, pagination.pageSize, columnFilters]);

    console.log(reports.data);

    const dataColumns = useMemo<MRT_ColumnDef<ReportModel>[]>(
        () => [
            {
                header: 'Nama Pelapor',
                accessorKey: 'user.name',
            },
            {
                header: 'Alamat',
                accessorKey: 'street_light.address',
            },
            {
                header: 'Id Lampu',
                accessorKey: 'street_light.id'
            },
            {
                id: "type",
                header: 'Keadaan Lampu',
                accessorFn(originalRow) {
                    return originalRow.type === "DIM" ? "Redup" : "Mati"
                },
            },
            {
                header: 'Kecamatan',
                accessorKey: 'street_light.desa_kelurahan.kecamatan.name',
            },
            {
                header: 'Desa/Kelurahan',
                accessorKey: 'street_light.desa_kelurahan.name',
            },
            {
                header: 'Tanggal Laporan',
                accessorFn(originalRow) {
                    return new Date(originalRow.created_at).toLocaleString('id')
                },
            },
        ]
        , [JSON.stringify(reports.data)]);

    const data = useMemo<ReportModel[]>(() => reports.data, [
        JSON.stringify(reports.data),
    ]);

    const table = useMaterialReactTable({
        columns: dataColumns,
        data: data,
        rowCount: reports.total,
        enableGlobalFilter: false,
        enableColumnActions: true,
        enableColumnFilters: true,
        enablePagination: true,
        enableSorting: true,
        enableBottomToolbar: true,
        enableTopToolbar: true,
        enableRowActions: true,
        enableRowNumbers: true,
        enableExpanding: true,
        enableExpandAll: true,
        layoutMode: 'semantic',
        positionActionsColumn: 'last',
        muiTableBodyRowProps: { hover: false },
        state: {
            pagination,
            isLoading,
            columnFilters,
        },
        getRowId: it => it.id?.toString(),
        manualPagination: true,
        onPaginationChange: setPagination,
        onColumnFiltersChange: setColumnFilters,
        muiTableHeadCellProps: {
            sx: {
                fontWeight: 'bold',
                fontSize: '16px',
            },
        },
        renderDetailPanel: ({ row }) => (
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <div className="font-bold">Deskripsi :</div>
                    <div>{row.original.description}</div>
                </div>
            </div>
        ),
        renderRowActions: ({ row }) => (
            <div className="flex items-center justify-center gap-2">
                <MuiInertiaLinkButton
                    color="primary"
                    href={route('street-light.show', row.original.street_light_id)}
                >
                    Lihat Lampu
                </MuiInertiaLinkButton>

            </div>
        ),
    });

    return (
        <AdminTableLayout
            title="Laporan Lampu Jalan"
        >
            <div className="mt-6 p-7 text-gray-500 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 flex flex-col gap-3">
                <div className='flex justify-end'>
                    <MuiInertiaLinkButton
                        color="primary"
                        href={route('street-light.map')}
                    >
                        Peta Sebaran Lampu Jalanan
                    </MuiInertiaLinkButton>
                </div>
                <MaterialReactTable table={table} />
            </div>
        </AdminTableLayout>
    )
}
