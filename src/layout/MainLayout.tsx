import { AppShell, Burger, Group, NavLink } from "@mantine/core";
import {
  IconMessage,
  IconShoppingCart,
  IconSettings,
  IconUserPlus,
} from "@tabler/icons-react";
import { NavLink as RouterLink, Outlet, useLocation } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

import ThemeToggle from "../components/ThemeToggle";

const MenuItem = () => {
  const location = useLocation();
  return (
    <>
      <NavLink
        component={RouterLink}
        to="/chat"
        label="Chat"
        leftSection={<IconMessage size={18} />}
        active={location.pathname === "/chat"}
      />

      <NavLink
        component={RouterLink}
        to="/order"
        label="Order"
        leftSection={<IconShoppingCart size={18} />}
        active={location.pathname === "/order"}
      />

      <NavLink
        component={RouterLink}
        to="/add-account"
        label="Add Account"
        leftSection={<IconUserPlus size={18} />}
        active={location.pathname === "/add-account"}
      />
      <NavLink
        component={RouterLink}
        to="/setting"
        label="Setting"
        leftSection={<IconSettings size={18} />}
        active={location.pathname === "/setting"}
      />
    </>
  );
};

export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 220, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      {/* HEADER */}
      <AppShell.Header>
        <Group px="md" h="100%" justify="space-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

          <ThemeToggle />
        </Group>
      </AppShell.Header>

      {/* SIDEBAR */}
      <AppShell.Navbar p="md" className="scrollbar-sm overflow-y-auto">
        <MenuItem />
      </AppShell.Navbar>

      {/* PAGE CONTENT */}
      <AppShell.Main className="scrollbar-sm overflow-y-auto h-[calc(100vh-60px)]">
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
