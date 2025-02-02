import React from "react";
import SimpleHeader from "./SimpleHeader";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function SimpleLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <SimpleHeader />
      </header>
      <main className="flex-grow min-h-screen">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
