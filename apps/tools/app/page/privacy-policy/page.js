export const metadata = {
  title: "Privacy Policy",
  description:
    "Understand how Anix7 Tools collects, uses, and protects your personal information.",
};

export const addToSitemap = true; // Add this page to Sitemap

export default function PrivacyPolicy() {
  const baseUrl = new URL(process.env.BASE_URL).hostname;
  return (
    <>
      <h1>Privacy Policy for {baseUrl}</h1>
      <p className=" my-1 ml-1">
        <strong>Effective Date:</strong> 01 Mar 2025
      </p>
      <p className=" my-1 ml-1">
        At {baseUrl}, we are committed to protecting your privacy and ensuring
        the security of your personal information. This Privacy Policy explains
        how we collect, use, and protect your data when you access our website
        and services. By using {baseUrl}, you agree to the terms of this Privacy
        Policy.
      </p>

      <h2>1. Information We Collect</h2>
      <p className=" my-1 ml-1">
        We collect the following types of information:
      </p>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>
          <strong>Personal Information:</strong> When you sign up for the Pro
          Version or contact us, we may collect your name, email address, and
          payment details.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about how you interact with
          our website, including IP addresses, browser types, device
          information, and pages visited.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p className=" my-1 ml-1">
        We use the information we collect for the following purposes:
      </p>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>
          To provide and improve our services, including URL shortening and
          image upload.
        </li>
        <li>To process payments and manage Pro Version subscriptions.</li>
        <li>To display personalized ads on the free version of the site.</li>
        <li>
          To communicate with you regarding updates, promotions, or support
          inquiries.
        </li>
        <li>To ensure the security and functionality of our website.</li>
      </ul>

      <h2>3. Google Login Integration</h2>
      <p className=" my-1 ml-1">
        When you use the login feature via Google, we:
      </p>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>
          Request to access name, email address and profile picture for the
          purpose of authentication.
        </li>
        <li>
          Allow you to revoke access at any time through your Google account
          settings.
        </li>
      </ul>
      <p className=" my-1 ml-1">
        We comply with Google’s API Services User Data Policy and ensure that
        your data is handled securely.
      </p>

      <h2>4. Cookies and Tracking Technologies</h2>
      <p className=" my-1 ml-1">
        We use cookies and similar technologies to enhance your experience and
        analyze website traffic. These include:
      </p>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>
          <strong>Essential Cookies:</strong> Required for the proper
          functioning of the website.
        </li>
        <li>
          <strong>Analytics Cookies:</strong> Help us understand how users
          interact with our site.
        </li>
        <li>
          <strong>Advertising Cookies:</strong> Used to display personalized ads
          on the free version of the site.
        </li>
      </ul>
      <p className=" my-1 ml-1">
        You can manage your cookie preferences through your browser settings.
      </p>

      <h2>5. Sharing Your Information</h2>
      <p className=" my-1 ml-1">
        We do not sell, rent, or share your personal information with third
        parties, except in the following cases:
      </p>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>
          With service providers who assist us in operating the website (e.g.,
          payment processors, analytics tools).
        </li>
        <li>When required by law or to comply with legal obligations.</li>
        <li>To protect our rights, users, or the security of our services.</li>
      </ul>

      <h2>6. Data Security</h2>
      <p className=" my-1 ml-1">
        We implement industry-standard measures to protect your information,
        including encryption and secure server storage. However, no method of
        transmission over the internet or electronic storage is completely
        secure, and we cannot guarantee absolute security.
      </p>

      <h2>7. Your Rights</h2>
      <p className=" my-1 ml-1">
        You have the following rights regarding your personal data:
      </p>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>
          <strong>Access:</strong> Request a copy of the personal data we hold
          about you.
        </li>
        <li>
          <strong>Correction:</strong> Request corrections to inaccurate or
          incomplete information.
        </li>
        <li>
          <strong>Deletion:</strong> Request the deletion of your personal data,
          subject to legal and contractual obligations.
        </li>
        <li>
          <strong>Revocation:</strong> Revoke Google login access at any time
          through your Google account settings.
        </li>
        <li>
          <strong>Opt-Out:</strong> Opt-out of personalized ads by managing your
          cookie preferences.
        </li>
      </ul>
      <p className=" my-1 ml-1">
        To exercise your rights, contact us at{" "}
        <a rel="noopener" href="mailto:contact.tools@anix7.in">
          contact.tools@anix7.in
        </a>
      </p>

      <h2>8. Third-Party Links</h2>
      <p className=" my-1 ml-1">
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices of these external sites, and we
        encourage you to review their privacy policies.
      </p>

      <h2>9. Children’s Privacy</h2>
      <p className=" my-1 ml-1">
        {baseUrl} is not intended for children under the age of 13. We do not
        knowingly collect personal information from children. If we become aware
        that we have collected data from a child under 13, we will delete it
        promptly.
      </p>

      <h2>10. Changes to This Privacy Policy</h2>
      <p className=" my-1 ml-1">
        We may update this Privacy Policy from time to time. When we do, we will
        post the updated policy on this page and update the effective date. We
        encourage you to review this Privacy Policy periodically.
      </p>

      <h2>11. Contact Us</h2>
      <p className=" my-1 ml-1">
        If you have any questions or concerns about this Privacy Policy, please
        contact us at:
      </p>
      <p className=" my-1 ml-1">
        <strong>Email:</strong>{" "}
        <a rel="noopener" href="mailto:contact.tools@anix7.in">
          contact.tools@anix7.in
        </a>
      </p>
    </>
  );
}
