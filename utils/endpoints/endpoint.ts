import { defaults } from "./defaults";

export const Gurbani = {
  AllBanis: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v2,
      uri: '/banis',
    },
  },
  singleBani: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v2,
      uri: '/banis/:id',
    },
  },
  hukamanama: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v2,
      uri: '/hukamnamas/today',
    },
  },
};
