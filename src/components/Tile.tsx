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
    state: TileState.A | TileState.D | TileState.K | TileState.EMPTY,
    isChosenOne: boolean,
    handleClick: (coordinates: Coordinates) => void,
}

const Tile = ({
    coordinates,
    position,
    state,
    isChosenOne,
    handleClick,
}: TileType) => {

    // TODO: tile classes should include
    //  isPicked (if isPicked)
    const tileClasses = classNames({
        "board-square": true,
        [IS_CORNER]: corner(position),
        [IS_CENTER]: center(position),
    })
    
    // add checks for attacker/defender/king (constants/boardsets) and add class accordingly
    const pieceClasses = classNames({
        "board-square": true,
        [`${state}`]: true,
        chosen: isChosenOne,
    })

    return (
        <div
            id={`${coordinates.row}-${coordinates.column}`}
            className={tileClasses}
            onClick={() => handleClick(coordinates)}
        >
            {state !==  TileState.EMPTY && (
                <div 
                    id={`${coordinates.row}-${coordinates.column}`}
                    className={pieceClasses}
                />
            )}
        </div>
    )
}

export default Tile;