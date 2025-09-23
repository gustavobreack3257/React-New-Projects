import { Route, Routes } from "react-router";
import PageComponents from "./pages/page-components";
import Home from "./pages/home";
import LayoutMain from "./pages/layout-main";

export default function RoutesApp() {
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route index element={<Home />} />
        <Route path="/componentes" element={<PageComponents />} />
      </Route>
    </Routes>
  );
}
