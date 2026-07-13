import Footer from "@/components/Footer";
import "./globals.css";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Estival",
  description: "Your vacation planner for your next trip",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <Hero />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
