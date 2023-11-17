import { DesaKelurahanModel } from "./Kecamatan";

export interface StreetLightModel {
  id: number;
  address: string;
  description: string;
  radius: number;
  latitude: number;
  longitude: number;
  status: "BRIGHT" | "DIM" | "OFF";
  desa_kelurahan_id: number;
  desaKelurahan: DesaKelurahanModel;
  created_at: string;
  updated_at: string;
}