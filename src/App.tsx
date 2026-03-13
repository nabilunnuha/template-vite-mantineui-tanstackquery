import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Chat from "./pages/Chat";
import Order from "./pages/Order";
import Setting from "./pages/Setting";
import AddAccount from "./pages/AddAccount";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/chat" />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/order" element={<Order />} />
        <Route path="/add-account" element={<AddAccount />} />
        <Route path="/setting" element={<Setting />} />
      </Route>
    </Routes>
  );
}
