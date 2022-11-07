import type { commonModel } from "./index";

interface Author {
  name: String;
  account: String;
  image: String;
}
interface MusicItem {
  _id: String;
  name: String;
  author: Author;
  intro: String;
  mp3: String;
  image: String;
}
export interface MusicDataSortList extends commonModel {
  page: Number;
  hasNext: boolean;
  songs: MusicItem[];
}
