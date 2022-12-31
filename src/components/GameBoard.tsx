import React, {useState} from 'react'
import { BoardSets } from "./BoardSets"
import { Coordinates } from '../types/Coordinates'
import Tile from './Tile'
import { CORNER, CENTER, EDGE, OTHER} from "../constants"
import { TilePosition } from '../types/TilePosition'

// TODO: Add more board types & UI to select board types
// Manually set board type to Copenhagen.
let boardType = BoardSets._COPENHAGEN

boardType = BoardSets._COPENHAGEN
function Gameboard() {
    const [chosenPiece, updatedChosenPiece] = useState("")
    const [destination, updateDestination] = useState("")


    const BuildBoard = (boardType: any[]) => {
        let width = boardType.length
        // the board is an array of rows which arrays of JSX.Elements
        const boardTiles: JSX.Element[][] = []
        for (let r = 0; r < width; r++){
            const row: JSX.Element[] = []
            for (let c = 0; c < width; c++){
                let coords: Coordinates = {row: r, column: c}
                let position: TilePosition
                if ((c === 0 && r === 0) || (c === 0 && r === width-1) || (r === 0 && c === width-1) || (r === width-1 && c === width-1)){
                    position = CORNER
                } else if (r === (width-1)/2 && c === (width-1)/2) {
                    position = CENTER
                } else if (r === 0 || r === width-1 || c === 0 || c === width-1) {
                    position = EDGE
                } else {
                    position = OTHER
                }
                
                row.push(
                    <Tile
                        key={`${r}${c}`}
                        coordinates={coords}
                        position={position}
                        tileState={boardType[r]?.[c]}
                        isChosenOne={chosenPiece === `${coords.row}-${coords.column}`}
                        isDestination={destination === `${coords.row}-${coords.column}`}
                        handleClickPiece={handleClickPiece}
                        handleClickTile={handleClickTile}
                    />
                )
            }
            boardTiles.push(row)
        }
        return <div className='gameboard'>{boardTiles}</div>
    }
    const handleClickTile = async (coordinates: Coordinates) => {
        if (!chosenPiece) {
            return
        }
        // get chosenPiece coordinates
        // const [currentRow, currentCol] = chosenPiece
        // check for:
            // is valid move (row/column match)
        chooseDestinationTile(coordinates)
    }
    
    const chooseDestinationTile = (coordinates: Coordinates) => {
        updateDestination(`${coordinates.row}-${coordinates.column}`)
    }


    const handleClickPiece = (coordinates: Coordinates) => {
        // check is player's turn
        // check for empty neighbours
        choosePiece(coordinates)
    }
    const choosePiece = (coordinates: Coordinates) => {
        const pieceChosen = `${coordinates.row}-${coordinates.column}`
        updatedChosenPiece(pieceChosen)
    }
   
    return (
        <div>
            <div>
                <h1>Gameboard</h1>
            </div>
            {BuildBoard(boardType)}
        </div>
    )
    
}

export default Gameboard