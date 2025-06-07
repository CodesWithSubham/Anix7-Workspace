export const metadata = {
  title: "Contact Us",
  description:
    "Have questions or feedback? Reach out to the Anix7 Tools team through our contact page.",
};

export const addToSitemap = true; // Add this page to Sitemap

export default function ContactUs() {
  const baseUrl = new URL(process.env.BASE_URL).hostname;

  return (
    <>
      <h1>Contact Us</h1>
      <p className=" my-1 ml-1">
        If you have any questions, please contact us at:
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
