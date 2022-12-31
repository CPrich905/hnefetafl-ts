import { A, D, K, _ } from "../constants"

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