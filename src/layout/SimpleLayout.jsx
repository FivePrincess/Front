import React from "react";
import SimpleHeader from "./SimpleHeader";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function SimpleLayout() {
  return (
    <div>
      <SimpleHeader />

      <Outlet />

      <Footer />
    </div>
  );
}
