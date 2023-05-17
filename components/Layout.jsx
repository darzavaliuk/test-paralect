import { ReactNode, useState } from "react";
import { AppShell } from "@mantine/core";
import HeaderNavigation from "./HeaderNavigation.jsx";

export default function Layout({ children }) {
  return (
    <AppShell header={<HeaderNavigation />} padding={0}>
      {children}
    </AppShell>
  );
}
