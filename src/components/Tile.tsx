import { Coordinates } from "../types/Coordinates"
import { TileState } from "./BoardSets" 
import { TilePosition } from "../types/TilePosition"
import classNames from "classnames"

interface TileType {
    coordinates: Coordinates,
    position: TilePosition,
    state: TileState.A | TileState.D | TileState.K | TileState._,
    isPicked: boolean
}

const Tile = ({
    coordinates,
    position,
    state,
    isPicked
}: TileType) => {

    // TODO: tile classes should include
    // board-square (always) position (always) isPicked (if isPicked)
    const tileClasses = classNames({
        "board-square": true
    })

    // TODO: Piece classes should include
    // if not TileState._ add a class for the piece (A, D, K)
    return (
        <div
            id={`${coordinates.row}-${coordinates.column}`}
            className={`board-square ${position}`}
        >
            <div className={`${state}`}></div>
            
        </div>
    )
}

export default Tile;