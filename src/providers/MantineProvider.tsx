import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MantineAppProvider({ children }: Props) {
  return (
    <MantineProvider
      defaultColorScheme="auto"
      theme={{
        primaryColor: "blue",
        defaultRadius: "md",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Notifications position="top-right" />
      {children}
    </MantineProvider>
  );
}
