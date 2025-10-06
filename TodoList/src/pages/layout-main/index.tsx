import { Outlet } from "react-router";

import HeaderCore from "../../core-components/header";
import MainContent from "../../core-components/main-content";
import Footer from "../../core-components/footer";
export default function LayoutMain() {
  return (
    <div>
      <HeaderCore />

      <MainContent>
        <Outlet />
      </MainContent>

      <Footer />
    </div>
  );
}
