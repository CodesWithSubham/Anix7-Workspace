import Hr from "@shared/components/ui/Hr";
import Link from "next/link";

export const metadata = {
  title: "Terms of Use",
  description:
    "Read the terms and conditions for using Anix7 and its services. Your access and use of our platform is governed by these terms.",
  keywords: [
    "Anix7 terms of use",
    "user agreement",
    "website terms",
    "acceptable use",
    "user responsibilities",
    "legal terms",
    "usage policy",
    "restrictions",
    "account rules",
    "Anix7 conditions",
  ],
  alternates: { canonical: "/page/terms" },
  addToSitemap: true,
};

export default function Terms() {
  return (
    <>
      <h1>
        <strong>Terms of Use</strong>
      </h1>
      <p className="my-1 ml-1">
        <strong>Effective Date:</strong> 06 July 2025
      </p>
      <p className="my-1 ml-1">
        Welcome to <strong>Anix7</strong>! These Terms of Use (&quot;Terms&quot;) govern your access
        to and use of our primary platform located at{" "}
        <strong>
          <Link href="/">www.anix7.in</Link>
        </strong>{" "}
        and all affiliated websites, services, and products offered under the Anix7 network
        (including but not limited to <strong>Anix7 Tools</strong>, <strong>Anix7 Games</strong>,
        {/* <strong>Anix7 AI</strong>, */} <strong>Anix7 Photos</strong>, <strong>AniPic</strong>,{" "}
        <strong>Anix7 Anime</strong>, and <strong>Anix7 App Market</strong>).
      </p>
      <p className="my-1 ml-1">
        By accessing or using any part of the Anix7 network, you agree to be bound by these Terms.
        If you do not agree with them, please refrain from using our services.
      </p>
      <Hr />
      <h2>
        <strong>1. Acceptance of Terms</strong>
      </h2>
      <p className="my-1 ml-1">By using our websites or services, you acknowledge that:</p>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>You are at least 13 years old.</li>
        <li>
          You agree to comply with these Terms on your behalf or on behalf of your organization.
        </li>
        <li>You have the authority to bind any organization you represent to these Terms.</li>
      </ul>
      <Hr />
      <h2>
        <strong>2. Scope of Services</strong>
      </h2>
      <p className="my-1 ml-1">
        Anix7 provides a wide variety of free and subscription-based digital services, including but
        not limited to:
      </p>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>
          <strong>Anix7 Tools</strong>: Utilities such as URL shorteners, image resizers, QR code
          generators, etc.
        </li>
        <li>
          <strong>Anix7 Games</strong>: Browser-based mini-games and interactive experiences.
        </li>
        {/* <li>
          <strong>Anix7 AI Tools</strong>: Creative AI tools (e.g., image
          generation, voice effects, assistants).
        </li> */}
        <li>
          <strong>Anix7 Photos &amp; AniPic</strong>: Real-life and anime-themed wallpapers and
          high-resolution images.
        </li>
        <li>
          <strong>Anix7 Anime</strong>: Reviews, guides, and updates on anime series.
        </li>
        <li>
          <strong>Anix7 App Market</strong>: A curated list of Telegram-based apps, bots, and
          services.
        </li>
      </ul>
      <p className="my-1 ml-1">
        We reserve the right to change, modify, suspend, or discontinue any service without prior
        notice.
      </p>
      <Hr />
      <h2>
        <strong>3. User Responsibilities</strong>
      </h2>
      <p className="my-1 ml-1">As a user, you agree to:</p>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>Use our platforms lawfully and ethically.</li>
        <li>
          Not share or upload content that is harmful, infringing, illegal, or violates the rights
          of others.
        </li>
        <li>
          Not attempt to exploit or disrupt our platforms, including security mechanisms or service
          limitations.
        </li>
        <li>Maintain the confidentiality of your account credentials.</li>
        <li>Be responsible for all actions taken under your account.</li>
      </ul>
      <Hr />
      <h2>
        <strong>4. Pro / Premium Features</strong>
      </h2>
      <p className="my-1 ml-1">
        Some parts of Anix7 (e.g., ad-free experience, advanced features in tools or apps) are
        available through subscriptions or one-time purchases. By purchasing, you agree that:
      </p>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>Payments are non-refundable unless clearly specified.</li>
        <li>Access to premium features may depend on browser/device compatibility.</li>
        <li>We may modify or discontinue premium features at our discretion.</li>
      </ul>
      <Hr />
      <h2>
        <strong>5. Privacy</strong>
      </h2>
      <p className="my-1 ml-1">
        We value your privacy. Please review our{" "}
        <Link href="/page/privacy-policy">Privacy Policy</Link> to understand how we handle your
        data. By using Anix7, you consent to the collection and use of information as outlined in
        that policy.
      </p>
      <Hr />
      <h2>
        <strong>6. Intellectual Property</strong>
      </h2>
      <p className="my-1 ml-1">
        All content (including logos, branding, design, text, media, and software) on Anix7 and its
        subdomains is owned by Anix7 or its licensors and protected by international intellectual
        property laws.
      </p>
      <p className="my-1 ml-1">
        You may not reproduce, copy, or distribute any part of our content without written
        permission.
      </p>
      <Hr />
      <h2>
        <strong>7. Disclaimer of Warranties</strong>
      </h2>
      <p className="my-1 ml-1">
        All services are provided “<strong>as is</strong>” and “<strong>as available</strong>.” We
        do not guarantee:
      </p>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>That services will be error-free, secure, or continuously available.</li>
        <li>
          That any content or features will always be accurate, reliable, or suitable for your
          specific needs.
        </li>
      </ul>
      <p className="my-1 ml-1">Use of our services is at your own risk.</p>
      <Hr />
      <h2>
        <strong>8. Limitation of Liability</strong>
      </h2>
      <p className="my-1 ml-1">
        To the maximum extent permitted by law, Anix7, its team, affiliates, or partners are{" "}
        <strong>not liable</strong> for any direct, indirect, incidental, or consequential damages,
        including but not limited to:
      </p>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>Data loss</li>
        <li>Service interruptions</li>
        <li>Third-party misuse</li>
        <li>Lost profits or business interruption</li>
      </ul>
      <Hr />
      <h2>
        <strong>9. Third-Party Links and Services</strong>
      </h2>
      <p className="my-1 ml-1">
        Anix7 may include links or embedded tools that lead to third-party services (e.g., Telegram
        bots, Google tools, AI APIs). We are not responsible for the content, privacy practices, or
        functionality of these external services.
      </p>
      <Hr />
      <h2>
        <strong>10. Termination of Use</strong>
      </h2>
      <p className="my-1 ml-1">
        We reserve the right to suspend or terminate your access to Anix7 services at any time, for
        any reason, including violation of these Terms.
      </p>
      <Hr />
      <h2>
        <strong>11. Changes to Terms</strong>
      </h2>
      <p className="my-1 ml-1">
        We may update these Terms from time to time. Updated versions will be posted on this page
        with a revised effective date. Continued use of Anix7 after changes constitutes acceptance.
      </p>
      <Hr />
      <h2>
        <strong>12. Governing Law</strong>
      </h2>
      <p className="my-1 ml-1">
        These Terms are governed by the laws of <strong>West Bengal, India</strong>. Any disputes
        shall be exclusively handled in courts located in WB, India.
      </p>
      <Hr />
      <h2>
        <strong>13. Contact Us</strong>
      </h2>
      <p className="my-1 ml-1">
        If you have any questions, concerns, or feedback regarding these Terms, feel free to contact
        us:
      </p>
      <p className="my-1 ml-1">
        📧 <strong>Email</strong>: <a href="mailto:support@anix7.in">support@anix7.in</a>
      </p>
      <p className="my-1 ml-1">
        🌐 <strong>Website</strong>: <Link href="/">www.anix7.in</Link>
      </p>
    </>
  );
}
