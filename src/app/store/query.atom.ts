import { atom } from "recoil";

export const searchQueryAtom = atom<string>({
  key: "searchQuery",
  default: "",
});

export const filterAtom = atom<string>({
  key: "filter",
  default: "",
});
