import React, { ReactElement, ReactNode } from 'react'
import { BoardSets } from "./BoardSets"

interface Coordinates {
    readonly row: number,
    readonly column: number
}

interface TileType {
    index: number,
    coordinates?: Coordinates[],
    center: boolean,
    corner: boolean,
    isEmpty: boolean,
    hasPiece: string
}

// interface MoveType {
//     from: Coordinates,
//     to: Coordinates
// }

// let moveHistory: {} []
// assign a board type from the BoardSets library (currently only Copenhagen)
// interface BoardType { 
//     children?: TileType[]
//  }

let boardType = BoardSets._COPENHAGEN

let move: Coordinates[] = [] 
function tileClick(tile: TileType) {
    let fromCoords: []
    let toCoords: []
    // let row: keyof tile.coordinates;
    // let column: keyof typeof tile.coordinates;
    // let toCoords: Number[] = []
    if (move.length === 1) {
        
        let toCoords = tile.coordinates
        console.log('tile row', tile.coordinates, 'tile column')
        // move.push(toCoords)
        console.log('type', typeof toCoords, toCoords)
        console.log('second click', move)
    } 
    
    if (move.length === 0 && tile.coordinates != null){
        console.log('first click')
        
        console.log('tile row', tile.coordinates, 'tile column')
        

        let fromCoords = tile.coordinates
        // move.push(fromCoords)
        console.log('type', typeof fromCoords, fromCoords)
        console.log('second click', move)

    }
    // moveHistory.push(move)
    
    return move
}

class GameBoard extends React.Component {
    count = 0
    tiles: TileType[] = []
    
    buildBoard(board: any[]){
        // TODO: why does this fire twice?
        console.log('buildBoard fires', this.count)
        let i = 0
        for (let row in board){
            for (let column in board[row]) {
                // get the coordinates of each tile from the board type
                let r = Number(row)
                let c = Number(column)
                let coords: Coordinates = {row:r, column:c }
                // set whether the tile is corner or center
                let corner = false
                let centre = false
                if ((c === 0 && r === 0) || (c === 0 && r === board.length-1) || (r === 0 && c === board.length-1) || (r === board.length-1 && c === board.length-1)){
                    corner = true
                } else if (r === (board.length-1)/2 && c === (board.length-1)/2) {
                    centre = true
                }

                // set what piece the tile has or if empty
                let hasPiece: string = ''
                let isEmpty: boolean = true
                if (board[r][c] === 'A' ){
                    hasPiece = 'A'
                    isEmpty = false
                } else if (board[r][c] === 'D'){
                    hasPiece = 'D'
                    isEmpty = false
                } else if (board[r][c] === 'K'){
                    hasPiece = 'K'
                    isEmpty = false
                }
                // builds tile object
                const tile: TileType = {
                    index: i,
                    coordinates: [coords],
                    corner: corner,
                    center: centre,
                    isEmpty: isEmpty,
                    hasPiece: hasPiece
                }

                i++
                this.tiles.push(tile)
            }
        }
        this.count++
        return this.tiles
    }

    render(){
        let board = boardType
        this.buildBoard(board)
        return (
            <div>
                <div>
                    <h1>Game Board:</h1>
                </div>
                <div className='gameboard'>
                {this.tiles.map(tile =>
                    <div 
                        key={tile.index}
                        className={`board-square`}
                        onClick={() => tileClick(tile)}
                    >{tile.hasPiece}
                    </div>)
                }
                </div>
            </div>

        )
    }
}

export default GameBoard
