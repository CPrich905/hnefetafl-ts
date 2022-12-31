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

interface TileType {
    coordinates: Coordinates,
    position: TilePosition,
    tileState: TileState.A | TileState.D | TileState.K | TileState.EMPTY,
    isChosenOne: boolean,
    isDestination: boolean,
    handleClickPiece: (coordinates: Coordinates) => void,
    handleClickTile: (coordinates: Coordinates) => void,
}

const Tile = ({
    coordinates,
    position,
    tileState,
    isChosenOne,
    isDestination,
    handleClickPiece,
    handleClickTile,
}: TileType) => {

    // TODO: tile classes should include
    //  isTarget (if isTarget)
    const tileClasses = classNames({
        "board-square": true,
        [IS_CORNER]: corner(position),
        [IS_CENTER]: center(position),
        destination: isDestination,
    })
    
    // add checks for attacker/defender/king (constants/boardsets) and add class accordingly
    const pieceClasses = classNames({
        "board-square": true,
        [`${tileState}`]: true,
        chosen: isChosenOne,
    })

    return (
        <div
            id={`${coordinates.row}-${coordinates.column}`}
            className={tileClasses}
            onClick={() => handleClickTile(coordinates)}
            >
            {tileState !==  TileState.EMPTY && (
                <div 
                id={`${coordinates.row}-${coordinates.column}`}
                className={pieceClasses}
                    onClick={() => handleClickPiece(coordinates)}
                />
            )}
        </div>
    )
}

export default Tile;