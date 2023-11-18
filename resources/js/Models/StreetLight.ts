import { DesaKelurahanModel } from "./Kecamatan";

export interface StreetLightModel {
  id: number;
  address: string;
  description: string;
  radius: number;
  latitude: number;
  longitude: number;
  status: "REPORTED" | "VALID" | "ONPROCESS" | "FINE";
  desa_kelurahan_id: number;
  desa_kelurahan: DesaKelurahanModel;
  created_at: string;
  updated_at: string;
}

const STATUS_COLOR = {
  REPORTED: "#c0c0c0",
  VALID: "#c4412d",
  ONPROCESS: "#a8ad0c",
  FINE: "#0c57ad",
}

export {
  STATUS_COLOR
};

export const SubmissionStatusColor = (status: "REPORTED" | "VALID" | "ONPROCESS" | "FINE") => STATUS_COLOR[status];
