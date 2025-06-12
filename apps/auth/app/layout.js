import "./globals.css";

export const metadata = {
  title: "Anix7 Auth",
  description: "Authentication system for Anix7 applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
