import React from 'react';
import AppLayout from '@/Layouts/Admin/DashboardAdminLayout';
import { User } from '@/types';
import useTypedPage from '@/Hooks/useTypedPage';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import StreetLightMap from '@/Components/StreetLightMap';
import { KecamatanModel } from '@/Models/Kecamatan';


interface Props {
  streetLightReported: number,
  streetLightValid: number,
  streetLightOnProcess: number,
  streetLightFine: number,
  streetLightByKecamatan: {
    "": string,
  }
  kecamatan: KecamatanModel[]
}

function mulberry32(a: number) {
  var t = (a += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}



export default function Dashboard(props: Props) {

  const generateRandomColor = (length: number) => {
    const result = [];
    for (let i = 0; i < length; i++) {
      result.push(
        `rgb(${Math.floor(
          mulberry32(i * 10) * 255,
        )}, ${Math.floor(
          mulberry32(i * 1) * 255,
        )}, ${Math.floor(mulberry32(i * 100) * 255)})`,
      );
    }
    return result;
  };

  const page = useTypedPage<Props>();
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ['dilaporkan', 'diproses', 'normal'],
    datasets: [
      {
        label: 'Status lampu',
        data: [props.streetLightReported, props.streetLightOnProcess, props.streetLightFine],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const lampuKecamatan = {
    labels: Object.keys(props.streetLightByKecamatan),
    datasets: [
      {
        label: 'lampu jalan tiap kecamatan',
        data: [...Object.values(props.streetLightByKecamatan)],
        backgroundColor: generateRandomColor(Object.keys(props.streetLightByKecamatan).length),
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };



  return (
    <AppLayout title="Dashboard">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="my-4 flex flex-col gap-5 ">
          <div className="grid grid-cols-2 font-bold gap-5">
            <div className="flex flex-col w-full gap-5">
              <div className="flex  flex-col justify-between items-center gap-3 p-7 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 py-auto h-full">
                <p className="my-auto">
                  <span className="text-xl text-black m-auto">Data Status Lampu Jalan</span>
                </p>
                <p className="m-auto ">
                  <Pie data={data} />;
                </p>
              </div>

            </div>
            <div className="flex flex-col w-full gap-5">
              <div className="flex flex-col justify-between items-center gap-3 p-7 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 py-auto h-full">
                <p className="my-auto">
                  <span className="text-xl text-black m-auto">Data Lampu Jalan Tiap Kecamantan</span>
                </p>
                <p className="m-auto ">
                  <Pie data={lampuKecamatan} />;
                </p>
              </div>

            </div>
          </div>
          <div className=" gap-3 p-7 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50 py-auto h-full">

            <StreetLightMap
              mapHeight={'70vh'}
              kecamatan={props.kecamatan}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
