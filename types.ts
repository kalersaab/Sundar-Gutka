export interface Bani {
    ID: number,
    gurmukhiUni: string
}
export interface Jaap {
    verse: string,
    baniID: number,
    gurmukhi: string,
    unicode: string,
    english: string,
    en: string,
    hi: string,
    ur: string,
}
export interface verses {
    verses: {
        verse: string,
        gurmukhi: string,
        unicode: string
    },
    larivaar: {
        gurmukhi: string,
        unicode: string
    }
}