import type { ComponentType, JSX } from "react";

import { TONConnectPage } from "@/pages/TONConnectPage/TONConnectPage";
import { BetsPage } from "@/pages/BetsPage/BetsPage";
import { WelcomePage } from "@/pages/WelcomePage";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: "/", Component: WelcomePage, title: "Welcome to Insight" },
];
