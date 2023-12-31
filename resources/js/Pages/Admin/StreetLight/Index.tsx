import { Paginated, asset } from '@/Models/Helper';
import { MRT_ColumnDef, MRT_ColumnFiltersState, MRT_PaginationState, MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { useEffect, useMemo, useState } from 'react';
import { router } from '@inertiajs/react';
import route from 'ziggy-js';
import React from 'react';
import MuiInertiaLinkButton from '@/Components/MuiInertiaLinkButton';
import AdminTableLayout from '@/Layouts/Admin/AdminTableLayout';
import { StreetLightModel } from '@/Models/StreetLight';

interface Props {
  streetLights: Paginated<StreetLightModel>;
}

export default function Index(props: Props) {
  const { streetLights } = props;

  const [columnFilters, setColumnFilters] =
    useState<MRT_ColumnFiltersState>([]);

  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: streetLights.current_page - 1,
    pageSize: streetLights.per_page,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const url = new URL(route(route().current()!).toString());

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
      only: ['streetLightCategories'],
      onFinish: () => {
        setIsLoading(false);
      },
    });
  }, [pagination.pageIndex, pagination.pageSize, columnFilters]);

  const dataColumns = useMemo<MRT_ColumnDef<StreetLightModel>[]>(
    () => [
      {
        header: 'Alamat',
        accessorKey: 'address',
      },
      {
        header: 'Bujur',
        accessorKey: 'latitude',
      },
      {
        header: 'Lintang',
        accessorKey: 'latitude',
      },
      {
        header: 'Radius',
        accessorKey: 'radius',
      },
      {
        header: 'Kecamatan',
        accessorKey: 'desa_kelurahan.kecamatan.name',
      },
      {
        header: 'Desa/Kelurahan',
        accessorKey: 'desa_kelurahan.name',
      }
    ]
    , [JSON.stringify(streetLights.data)]);

  const data = useMemo<StreetLightModel[]>(() => streetLights.data, [
    JSON.stringify(streetLights.data),
  ]);

  const table = useMaterialReactTable({
    columns: dataColumns,
    data: data,
    rowCount: streetLights.total,
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
          href={route('street-light.show', row.original.id)}
        >
          Show
        </MuiInertiaLinkButton>

      </div>
    ),
  });

  return (
    <AdminTableLayout
      title="Lampu Jalan"
      addRoute={route('street-light.create')}
      addRouteTitle="Tambah Lampu Jalan"
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
