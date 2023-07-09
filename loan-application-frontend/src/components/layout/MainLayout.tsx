import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="relative flex flex-col h-screen">
      <Header />
      <main className="container mx-auto max-w-full flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
