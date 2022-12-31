export const CORNER = "corner"
export const CENTER = "center"
export const EDGE = "edge"
export const OTHER = "other"

export const corner = (value: string) => value === CORNER
export const center = (value: string) => value === CENTER

export const IS_CORNER = "corner"
export const IS_CENTER = "center"

export enum TileState {
    EMPTY = "empty",
    A = "attacker",
    D = "defender",
    K = "king"
}

export const _ = TileState.EMPTY
export const A = TileState.A
export const D = TileState.D
export const K = TileState.K

export const isAttacker = (value: TileState) => value === A
export const isDefender = (value: TileState ) => value === D || value === K 