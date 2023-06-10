import { NavigateFunction } from "react-router-dom";

export interface PagesHeader {
  title: string,
  url: string,
}

export interface ScreenProps {
  pages: PagesHeader[];
  navigate: NavigateFunction;
}
