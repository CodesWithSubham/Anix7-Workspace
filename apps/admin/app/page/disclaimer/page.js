import Hr from "@shared/components/ui/Hr";
import Link from "next/link";

export const metadata = {
  title: "Disclaimer",
  description:
    "Read the legal disclaimer for Anix7. Understand limitations of liability, user responsibilities, third-party links, and content usage policies.",
  keywords: [
    "Anix7 Disclaimer",
    "Legal Disclaimer",
    "Terms of Use",
    "Anix7 policies",
    "content responsibility",
    "third-party links",
    "user responsibility",
    "tools disclaimer",
    "apps disclaimer",
  ],
  alternates: { canonical: "/page/disclaimer" },

};

export const addToSitemap = true; // Add this page to Sitemap

export default function Disclaimer() {
  return (
    <>
      <h1>
        <strong>Disclaimer</strong>
      </h1>
      <p className="my-1 ml-1">
        <strong>Effective Date:</strong> 06 July 2025
      </p>
      <p className="my-1 ml-1">
        Welcome to <strong>Anix7</strong>. By accessing or using{" "}
        <Link href="/">www.anix7.in</Link> and any of its subdomains (including
        Anix7 Tools, Games, {/* AI services, */}Anime Reviews, App Market, and
        more), you agree to this disclaimer in full. If you do not agree, please
        do not use our website or services.
      </p>
      <Hr />
      <h2>
        <strong>1. General Information</strong>
      </h2>
      <p className="my-1 ml-1">
        All content, tools, and services provided on Anix7 and its subdomains
        are for{" "}
        <strong>
          informational, educational, or entertainment purposes only
        </strong>
        . While we aim to provide accurate and reliable resources,{" "}
        <strong>
          we do not guarantee the completeness, accuracy, or reliability
        </strong>{" "}
        of any content or functionality offered.
      </p>
      <Hr />
      <h2>
        <strong>2. No Professional Advice</strong>
      </h2>
      <p className="my-1 ml-1">
        Anix7 does{" "}
        <strong>
          not provide professional, legal, medical, or financial advice
        </strong>
        . The content, suggestions, and generated data (e.g., AI outputs, QR
        codes, URL shortening, image tools) should not be treated as substitutes
        for professional consultation.
      </p>
      <Hr />
      <h2>
        <strong>3. Use at Your Own Risk</strong>
      </h2>
      <p className="my-1 ml-1">
        You use all tools, downloads, and information provided by Anix7{" "}
        <strong>at your own risk</strong>. We do not take responsibility for:
      </p>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>Loss of data</li>
        <li>Corrupted files</li>
        <li>Misuse of QR codes or links</li>
        <li>Inaccurate AI or tool-generated output</li>
        <li>Compatibility issues</li>
      </ul>
      <Hr />
      <h2>
        <strong>4. External Links</strong>
      </h2>
      <p className="my-1 ml-1">
        Anix7 may include links to external websites, tools, or resources. We do{" "}
        <strong>not control or endorse</strong> external content and are{" "}
        <strong>not responsible for third-party websites</strong>, their terms,
        or privacy practices.
      </p>
      <Hr />
      <h2>
        <strong>5. Content Ownership</strong>
      </h2>
      <p className="my-1 ml-1">
        We do not claim ownership of user-uploaded content. However, you are
        solely responsible for the content you upload, create, or share using
        Anix7 services. You agree not to upload content that is illegal,
        infringing, or violates any third-party rights.
      </p>
      <Hr />
      <h2>
        <strong>6. Service Availability</strong>
      </h2>
      <p className="my-1 ml-1">
        We strive for continuous access to our services but{" "}
        <strong>do not guarantee uptime</strong> or uninterrupted availability.
        Features, pricing, or tools may change at any time without notice.
      </p>
      <Hr />
      <h2>
        <strong>7. Limitation of Liability</strong>
      </h2>
      <p className="my-1 ml-1">
        Under no circumstances shall Anix7, its owners, or affiliates be liable
        for any <strong>indirect, incidental, or consequential damages</strong>{" "}
        arising from your use (or inability to use) our services.
      </p>
      <Hr />
      <h2>
        <strong>8. Affiliate &amp; Ads Disclaimer</strong>
      </h2>
      <p className="my-1 ml-1">
        Some parts of Anix7 may display third-party ads or affiliate links. We
        may earn commissions if you click or purchase through those links, at no
        extra cost to you. We strive to promote trustworthy sources, but{" "}
        <strong>we do not endorse all advertisers.</strong>
      </p>
      <Hr />
      <h2>
        <strong>9. Changes to This Disclaimer</strong>
      </h2>
      <p className="my-1 ml-1">
        This Disclaimer may be updated at any time without prior notice. We
        encourage you to review this page periodically. Continued use of the
        platform implies acceptance of the updated disclaimer.
      </p>
      <Hr />
      <h2>
        <strong>10. Contact Us</strong>
      </h2>
      <p className="my-1 ml-1">
        If you have any questions or concerns regarding this Disclaimer, feel
        free to contact us:
      </p>
      <p className="my-1 ml-1">
        📧 <strong>Email:</strong>{" "}
        <a href="mailto:legal@anix7.in">legal@anix7.in</a>
      </p>
      <p className="my-1 ml-1">
        🌐 <strong>Website:</strong> <Link href="/">www.anix7.in</Link>
      </p>
    </>
  );
}
