import { User } from "@/types";
import { StreetLightModel } from "./StreetLight";

export interface ReportModel {
    id: number,
    description: string,
    type: "DIM" | "OFF",
    is_solved: boolean,
    user_id: number,
    user: User
    street_light_id: number,
    street_light: StreetLightModel   
    created_at: string,
}
