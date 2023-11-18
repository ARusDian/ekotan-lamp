import { DesaKelurahanModel } from "./Kecamatan";

export interface StreetLightModel {
  id: number;
  address: string;
  description: string;
  radius: number;
  latitude: number;
  longitude: number;
  desa_kelurahan_id: number;
  desa_kelurahan: DesaKelurahanModel;
  created_at: string;
  updated_at: string;
}
