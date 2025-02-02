import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
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
