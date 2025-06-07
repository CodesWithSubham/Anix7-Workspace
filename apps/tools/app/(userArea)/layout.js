// /app/(pages)/layout.js
import { IfLoggedIn } from "@shared/components/auth/LoggedInWraper";
import MobileMenu from "@shared/components/navigation/MobileMenu";

export default function PagesLayout({ children }) {
  return (
    <>
      {children}
      <IfLoggedIn>
        <MobileMenu />
      </IfLoggedIn>
    </>
  );
}
