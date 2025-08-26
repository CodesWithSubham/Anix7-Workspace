export const metadata = {
  title: "Contact Us",
  description:
    "Need help, support, or have suggestions? Reach out to the Anix7 team via email or social media. We're here to assist you!",
  alternates: { canonical: "/page/contact-us" },
  addToSitemap: true,
};
export default function ContactUs() {
  return (
    <>
      <h1>Contact Us</h1>
      <p className="my-1 ml-1">
        If you have any questions, suggestions, or need support, feel free to get in touch with us.
        We typically respond within 7 - 14 days.
      </p>

      <hr className="my-4" />

      <h3 className="mt-2 mb-1">📧 General Inquiries</h3>
      <p className="ml-1">
        <strong>Email:</strong>{" "}
        <a rel="noopener" href="mailto:contact@anix7.in">
          contact@anix7.in
        </a>
      </p>

      <h3 className="mt-4 mb-1">🛠️ Support</h3>
      <p className="ml-1">
        For help with tools or account-related issues:
        <br />
        <strong>Email:</strong>{" "}
        <a rel="noopener" href="mailto:support@anix7.in">
          support@anix7.in
        </a>
      </p>

      <h3 className="mt-4 mb-1">🤝 Collaborations & Partnerships</h3>
      <p className="ml-1">
        Interested in working with Anix7? Email us with your proposal at:{" "}
        <a rel="noopener" href="mailto:contact@anix7.in">
          contact@anix7.in
        </a>
      </p>

      {/* <h3 className="mt-4 mb-1">🌐 Social Media</h3>
      <p className="ml-1">
        Stay connected and follow us for updates:
        <br />
        <strong>Instagram:</strong>{" "}
        <a href="https://instagram.com/anix7.in" target="_blank" rel="noopener">
          @anix7.in
        </a>
        <br />
        <strong>YouTube:</strong>{" "}
        <a href="https://youtube.com/@anix7" target="_blank" rel="noopener">
          @anix7
        </a>
      </p> */}
    </>
  );
}
