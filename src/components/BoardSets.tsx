// TileState feels like the wrong description... TileContains? TileIs?
export enum TileState {
    _ = "empty",
    A = "attacker",
    D = "defender",
    K = "king"
}

export const _ = TileState._
export const A = TileState.A
export const D = TileState.D
export const K = TileState.K

// export const attacker = (value: string) => value === "king" || value === "attacker"
// export const defender = (value: string) => value === "king" || value === "attacker"

// export const ATTACKER = "attacker"

// TODO: add other board types
export class BoardSets {
    static readonly _COPENHAGEN = [
        [_, _, _, A, A, A, A, A, _, _, _],
        [_, _, _, _, _, A, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _],
        [A, _, _, _, _, D, _, _, _, _, A],
        [A, _, _, _, D, D, D, _, _, _, A],
        [A, A, _, D, D, K, D, D, _, A, A],
        [A, _, _, _, D, D, D, _, _, _, A],
        [A, _, _, _, _, D, _, _, _, _, A],
        [_, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, A, _, _, _, _, _],
        [_, _, _, A, A, A, A, A, _, _, _],
    ]
}