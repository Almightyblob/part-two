import QCProvider from "../components/QCProvider";
import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QCProvider>
      <html lang="en" className="bg-slate-300">
        <body>{children}</body>
      </html>
    </QCProvider>
  );
};

export default RootLayout;
