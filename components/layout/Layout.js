import Footer from "./Footer";
import Navbar from "./Navbar";
export default function Layout({ children }) {
  return (
    <div
      className="min-h-screen flex flex-col
    dark:text-gray-200 text-gray-800 dark:bg-gray-900 bg-gray-300"
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
