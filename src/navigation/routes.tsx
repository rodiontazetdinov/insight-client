import type { ComponentType, JSX } from "react";

import { TONConnectPage } from "@/pages/TONConnectPage/TONConnectPage";
import { BetsPage } from "@/pages/BetsPage/BetsPage";
import { WelcomePage } from "@/pages/WelcomePage";
import { MainPage } from "@/pages/MainPage";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: "/", Component: WelcomePage, title: "Welcome to Insight" },
  { path: "/main", Component: MainPage, title: "Something More" },
];
