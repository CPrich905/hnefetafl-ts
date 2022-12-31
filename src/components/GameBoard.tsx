import React, {useState} from 'react'
import { BoardSets } from "./BoardSets"
import { Coordinates } from '../types/Coordinates'
import Tile from './Tile'
import { CORNER, CENTER, EDGE, OTHER, _} from "../constants"
import { TilePosition } from '../types/TilePosition'
import { AdjacentTiles } from '../types/AdjacentTiles'

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
        if (hasEmptyAdjacentTiles(coordinates)) {
            console.log('empty neighbours')
        } else {
            console.log('blocked')
        }

        choosePiece(coordinates)
    }

    const choosePiece = (coordinates: Coordinates) => {
        const pieceChosen = `${coordinates.row}-${coordinates.column}`
        updatedChosenPiece(pieceChosen)
    }

    const hasEmptyAdjacentTiles = (coordinates: Coordinates) => {
        const adjacentTiles = getAdjacentTiles(coordinates)
        for (let tile in adjacentTiles){
            if (adjacentTiles[tile as keyof AdjacentTiles]?.tileState === _){
                return true
            }
        }
        return false
    }

    const getAdjacentTiles = (coordinates: Coordinates): AdjacentTiles => {
        const adjacentTiles: AdjacentTiles = {}
        const row = coordinates.row
        const column = coordinates.column

        if (coordinatesInBoard(row-1, column)){
            adjacentTiles.north = {
                tileState: boardType[row-1]?.[column],
                coordinates: {row: row-1, column: column}
            }
        }
        if (coordinatesInBoard(row, column+1)){
            adjacentTiles.east = {
                tileState: boardType[row]?.[column+1],
                coordinates: {row: row, column: column+1}
            }
        }
        if (coordinatesInBoard(row+1, column)){
            adjacentTiles.south = {
                tileState: boardType[row+1]?.[column],
                coordinates: {row: row+1, column: column}
            }
        }
        if (coordinatesInBoard(row, column-1)){
            adjacentTiles.west = {
                tileState: boardType[row]?.[column-1],
                coordinates: {row: row, column: column-1}
            }
        }
        return adjacentTiles
    }

    const coordinatesInBoard = (row: Number, column: Number): Boolean => {
        if (row >= boardType.length || row < 0 || column >= boardType.length || column < 0) {
            return false
        }
        return true
    }

    return (
        <div>
            <div>
                <h1>Gameboard</h1>
                <h3>Player turn: </h3>
            </div>
            {BuildBoard(boardType)}
        </div>
    )
    
}

export default Gameboard