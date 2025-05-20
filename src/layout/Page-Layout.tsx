import React from "react";
import Header from "../components/ui/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer";

function Page_Layout() {
  return (
    <>
      <section className="flex flex-col items-center justify-center size-full overflow-x-hidden  ">
        <Header />
        <Outlet />
        <Footer />
      </section>
    </>
  );
}

export default Page_Layout;
