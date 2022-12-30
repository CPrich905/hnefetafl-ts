import { Coordinates } from "../types/Coordinates"
import { TileState } from "./BoardSets" 
import { TilePosition } from "../types/TilePosition"
import classNames from "classnames"
import {
    corner,
    IS_CORNER,
    center,
    IS_CENTER
} from "./../constants"

// import { 
//     attacker,
//     ATTACKER
// } from "./BoardSets"

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
    let piece = state
    const tileClasses = classNames({
        "board-square": true,
        [IS_CORNER]: corner(position),
        [IS_CENTER]: center(position),
        [`${state}`]: true
    })

    return (
        <div
            id={`${coordinates.row}-${coordinates.column}`}
            className={tileClasses}
        />
    )
}

export default Tile;