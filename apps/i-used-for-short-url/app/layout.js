import "./globals.css";

export const metadata = {
  title: "Anix7 URL Shortener Redirector",
  description:
    "A simple URL shortener redirector that uses JWT for secure redirection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
