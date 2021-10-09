import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./Footer"));
const Navbar = dynamic(() => import("./Navbar"));

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
}
