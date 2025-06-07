export const metadata = {
  title: "Disclaimer",
  description:
    "Read the legal disclaimer for using Anix7 Tools and understand the limitations of our services.",
};

export const addToSitemap = true; // Add this page to Sitemap

export default function Disclaimer() {
  const baseUrl = new URL(process.env.BASE_URL).hostname;
  return (
    <>
      <h1>Disclaimer for {baseUrl}</h1>
      <p className=" my-1 ml-1">
        <strong>Effective Date:</strong> 01 Mar 2025
      </p>
      <p className=" my-1 ml-1">
        Welcome to {baseUrl}. By using this website, you agree to the terms
        outlined in this Disclaimer. If you disagree with any part of this
        Disclaimer, please refrain from using our site and services.
      </p>

      <h2>1. General Information</h2>
      <p className=" my-1 ml-1">
        The content on {baseUrl} is provided for general informational purposes
        only. While we strive to keep our information up-to-date and accurate,
        we make no representations or warranties of any kind, express or
        implied, about the completeness, accuracy, reliability, suitability, or
        availability of the information and services on this website.
      </p>

      <h2>2. No Professional Advice</h2>
      <p className=" my-1 ml-1">
        The information and services provided by {baseUrl} are not a substitute
        for professional advice. We recommend consulting a qualified
        professional before making any decisions based on the information
        available on our site. Any reliance you place on such information is
        strictly at your own risk.
      </p>

      <h2>3. Our Various Tools Services</h2>
      <p className=" my-1 ml-1">
        While we provide various tools, {baseUrl} is not liable for any misuse,
        unauthorized access, or damages resulting from your use of these
        services. We are not responsible for any content that is linked,
        uploaded, or shared through our platform.
      </p>

      <h2>4. Third-Party Services and Content</h2>
      <p className=" my-1 ml-1">
        {baseUrl} may contain links to third-party websites or use third-party
        integrations, such as Google Login. We have no control over the content,
        privacy policies, or practices of third-party sites or services, and we
        do not endorse or assume responsibility for them. Any interactions with
        third-party content are at your own risk.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p className=" my-1 ml-1">
        In no event shall {baseUrl}, its owners, or affiliates be liable for any
        direct, indirect, incidental, or consequential damages arising from your
        use or inability to use the website or its services, even if we have
        been advised of the possibility of such damages.
      </p>

      <h2>6. Changes to This Disclaimer</h2>
      <p className=" my-1 ml-1">
        We may update this Disclaimer periodically. When we make changes, we
        will post the updated version on this page and update the effective
        date. Your continued use of our website after any changes to this
        Disclaimer will constitute your acceptance of such changes.
      </p>

      <h2>7. Contact Us</h2>
      <p className=" my-1 ml-1">
        If you have any questions or concerns about this Disclaimer, please
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
