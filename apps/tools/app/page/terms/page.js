import Link from "next/link";

export const metadata = {
  title: "Terms of Use",
  description:
    "Review the terms and conditions that govern your use of Anix7 Tools and its services.",
};

export const addToSitemap = true; // Add this page to Sitemap

export default function Terms() {
  const baseUrl = new URL(process.env.BASE_URL).hostname;
  return (
    <>
      <h1>Terms of Use for {baseUrl}</h1>
      <p className=" my-1 ml-1">
        <strong>Effective Date:</strong> 01 Mar 2025
      </p>
      <p className=" my-1 ml-1">
        Welcome to {baseUrl}! By accessing or using our website and services,
        you agree to comply with and be bound by the following Terms of Use
        (&quot;Terms&quot;). Please read them carefully. If you do not agree to
        these Terms, please refrain from using our site.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p className=" my-1 ml-1">
        By accessing {baseUrl}, you confirm that you are at least 13 years old
        and that you agree to these Terms. If you are using the website on
        behalf of a company or organization, you agree to these Terms on their
        behalf and affirm that you have the authority to do so.
      </p>

      <h2>2. Services</h2>
      <p className=" my-1 ml-1">{baseUrl} provides the following services:</p>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>
          <strong>Free Services:</strong>
          <ul>
            <li>
              URL Shortening: Allows you to shorten URLs into concise, shareable
              links.
            </li>
            <li>
              Image Upload: Allows you to upload images and give you a shareable
              links.
            </li>
          </ul>
        </li>
        <li>
          <strong>Pro Version:</strong>
          <ul>
            <li>Removes advertisements for a better user experience.</li>
            <li>Includes additional features (if applicable).</li>
          </ul>
        </li>
      </ul>
      <p className=" my-1 ml-1">
        We reserve the right to modify, suspend, or discontinue our services at
        any time, without notice or liability.
      </p>

      <h2>3. User Responsibilities</h2>
      <p className=" my-1 ml-1">
        When using {baseUrl}, you agree that you will:
      </p>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>Use the services only for lawful purposes.</li>
        <li>
          Not upload, post, or share any content that is unlawful, harmful, or
          in violation of third-party rights.
        </li>
        <li>
          Not attempt to interfere with or compromise the website’s
          functionality or security.
        </li>
      </ul>
      <p className=" my-1 ml-1">
        You are responsible for maintaining the security of your account and any
        actions taken under it.
      </p>

      <h2>4. Pro Version Terms</h2>
      <p className=" my-1 ml-1">
        The Pro Version removes advertisements and may include additional
        features. By purchasing the Pro Version, you agree to the following:
      </p>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>
          All payments are non-refundable unless explicitly stated otherwise.
        </li>
        <li>
          Pro features are provided on an &quot;as-is&quot; basis, and we do not
          guarantee uninterrupted service.
        </li>
      </ul>

      <h2>5. Privacy</h2>
      <p className=" my-1 ml-1">
        We take your privacy seriously. Our{" "}
        <Link href="/page/privacy-policy">Privacy Policy</Link> describes how we
        collect, use, and protect your information. By using {baseUrl}, you
        agree to our <Link href="/page/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>6. Intellectual Property</h2>
      <p className=" my-1 ml-1">
        All content, trademarks, and logos on {baseUrl} are the property of{" "}
        {baseUrl} or its content suppliers and are protected by intellectual
        property laws. You agree not to reproduce, distribute, or create
        derivative works from any part of our site without permission.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p className=" my-1 ml-1">
        To the fullest extent permitted by law, {baseUrl}, its owners, and
        affiliates shall not be liable for any indirect, incidental, or
        consequential damages arising from your use of or inability to use the
        site and its services.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p className=" my-1 ml-1">
        {baseUrl} and its services are provided &quot;as is&quot; and &quot;as
        available.&quot; We do not warrant that our services will be
        uninterrupted, error-free, or free of harmful components. We disclaim
        all warranties, express or implied, to the fullest extent permitted by
        law.
      </p>

      <h2>9. Termination</h2>
      <p className=" my-1 ml-1">
        We reserve the right to terminate or suspend your access to {baseUrl} at
        our discretion, without notice, for any conduct that we believe violates
        these Terms or is harmful to our users or us.
      </p>

      <h2>10. Modifications to Terms</h2>
      <p className=" my-1 ml-1">
        We may modify these Terms at any time. When we do, we will post the
        updated Terms on this page and update the effective date. We encourage
        you to review these Terms periodically. Your continued use of {baseUrl}{" "}
        after changes signifies acceptance of the revised Terms.
      </p>

      <h2>11. Governing Law</h2>
      <p className=" my-1 ml-1">
        These Terms shall be governed by and construed in accordance with the
        laws of WB, India, without regard to its conflict of law principles. Any
        disputes arising from these Terms or your use of {baseUrl} shall be
        resolved exclusively in the courts of WB, India.
      </p>

      <h2>12. Contact Us</h2>
      <p className=" my-1 ml-1">
        If you have any questions or concerns regarding these Terms, please
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
