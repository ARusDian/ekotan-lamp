export interface KecamatanModel {
  id: number;
  name: string;
  desa_kelurahan: DesaKelurahanModel[];
}

export interface DesaKelurahanModel {
  id: number;
  name: string;
  kecamatan: KecamatanModel;
}