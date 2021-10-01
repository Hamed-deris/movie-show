import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./Footer"));
const Navbar = dynamic(() => import("./Navbar"));

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
