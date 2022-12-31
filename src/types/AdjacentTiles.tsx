import { Coordinates } from "./Coordinates"; 
import { TileState } from "./TileState";

export interface AdjacentTiles {
    north?: AdjacentTile;
    east?: AdjacentTile;
    south?: AdjacentTile;
    west?: AdjacentTile;
}

interface AdjacentTile {
    tileState: TileState;
    coordinates: Coordinates;
}