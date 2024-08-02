import type { ComponentType, JSX } from "react";

import { MainPage } from "@/pages/MainPage/MainPage";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: "/", Component: MainPage, title: "Insight" }
];