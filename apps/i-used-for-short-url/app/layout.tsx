import "./globals.css";

export const metadata = {
  title: "Redirecting... | Anix7 URL Shortener",
  description:
    "You are being redirected to your destination via Anix7 — a fast, secure, and reliable URL shortener.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
