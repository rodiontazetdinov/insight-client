import type { ComponentType, JSX } from "react";

import { TONConnectPage } from "@/pages/TONConnectPage/TONConnectPage";
import { WelcomePage } from "@/pages/WelcomePage";
import { MainPage } from "@/pages/MainPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { GameMenuPage } from "@/pages/GameMenuPage";
import { ImageLink } from "@/components/ImageLink";
import { TasksPage } from "@/pages/TasksPage";
import { CommunityPage } from "@/pages/CommunityPage";
import { GameworldPage } from "@/pages/GameworldPage";
import { EventsPage } from "@/pages/EventsPage";
import StoriesPage from "@/pages/StoriesPage";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
  children?: Route[];
}

export const routes: Route[] = [
  { path: "/", Component: StoriesPage, title: "Welcome to Insight" },
  // {
  //   path: '/',
  //   element: <StoriesPage />,
  // },
  { path: "/main", Component: MainPage, title: "Something More" },
  {
    path: "/menu",
    Component: GameMenuPage,
    title: "Game menu",
    children: [
      {
        path: "/menu/tasks",
        Component: ImageLink,
        title: "Tasks link",
      },
      {
        path: "/menu/community",
        Component: ImageLink,
        title: "Community link",
      },
      {
        path: "/menu/gameworld",
        Component: ImageLink,
        title: "Gameworld link",
      },
      {
        path: "/menu/events",
        Component: ImageLink,
        title: "Events link",
      },
      // Add more child routes as needed
    ],
  },
  { path: "/profile", Component: ProfilePage, title: "Profile" },
  {
    path: "/tasks",
    Component: TasksPage,
    title: "Tasks",
  },
  {
    path: "/community",
    Component: CommunityPage,
    title: "Community",
  },
  {
    path: "/gameworld",
    Component: GameworldPage,
    title: "Game world",
  },
  {
    path: "/events",
    Component: EventsPage,
    title: "Events",
  },
];
