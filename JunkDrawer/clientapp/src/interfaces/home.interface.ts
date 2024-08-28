﻿import {ITrustedNeighbor} from "./trustedNeighbor.interface.ts";

export interface IHome {
    homeId: number;
    homeName: string;
    homePhoto: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    purchaseDate: Date;
    purchasePrice: number;
    notes: string;
    trustedNeighbors: ITrustedNeighbor[];    
}