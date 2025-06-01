import React from 'react';
import { View, Text } from "../components/themed";
import { StyleSheet } from 'react-native';
interface VisraamLine {
  igurbani?: Array<{ p: number; t: string }>;
  sttm?: Array<{ p: number; t: string }>;
  sttm2?: Array<{ p: number; t: string }>;
}

interface Verse {
  verse?: {
    verse?: {
      gurmukhi?: string;
    };
  };
}

interface VisraamItem {
  p: number; // position index
  t: string; // type ('v', 'y', etc)
}

interface VisraamLine {
  igurbani?: VisraamItem[];
  sttm?: VisraamItem[];
  sttm2?: VisraamItem[];
}

export const parseVisraam = (
  visraam: VisraamLine[] | undefined | null
): Record<number, string>[] => {
  if (!visraam) return [];
  
  return visraam
    .filter(line => line !== null && typeof line === 'object')
    .map(line => {
      const positionMap: Record<number, string> = {};
      if (line.igurbani && Array.isArray(line.igurbani)) {
        line.igurbani.forEach(item => {
          if (item && typeof item.p === 'number' && typeof item.t === 'string') {
            positionMap[item.p] = item.t;
          }
        });
      }
      
      return positionMap;
    });
};