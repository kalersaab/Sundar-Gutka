export interface Ang {
    pageno: number;
    source: Source;
    count: number;
    page?: PageEntity[];
    error: boolean;
}
export interface Source {
    sourceid: number;
    gurmukhi: string;
    unicode: string;
    english: string;
    length: number;
    pageNo: number;
}

export interface PageEntity {
    verse: Verse;
    translation: Translation;
};
export interface Verse {
    ID?:number;
    gurmukhi: string;
    unicode: string;
    gurmukhiUni:string;
}
export interface Translation {
    pu: SS;
    en: English;
}
export interface SS {
    ss: Verse

}
export interface English {
    bdb: Verse;
}
export interface Transliteration {
    english: EnglishOrDevanagari;
    devanagari: EnglishOrDevanagari;
}
export interface EnglishOrDevanagari {
    text: string;
    larivaar: string;
}
export interface Writer {
    id: number;
    akhar: string;
    unicode: string;
    english: string;
}
export interface Raag {
    id: number;
    akhar: string;
    unicode: string;
    english: string;
    startang: number;
    endang: number;
    raagwithpage: string;
}
export interface VisraamItem {
  p: number;
  t: string; 
}