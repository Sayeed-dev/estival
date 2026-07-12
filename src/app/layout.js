import "./globals.css";
import Nav from "@/components/Nav";

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
        <Nav/>
        {children}
      </body>
    </html>
  );
}
