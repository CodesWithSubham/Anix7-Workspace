
import Link from "next/link";

export const metadata = {
  title: "FAQs",
  description:
    "Find answers to frequently asked questions about using Anix7 Tools and our various services.",
};

export const addToSitemap = true; // Add this page to Sitemap

export default function Faqs() {
  const baseUrl = new URL(process.env.BASE_URL).hostname;
  return (
    <main>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <p className=" my-1 ml-1">
        Welcome to the FAQ page for {baseUrl}! Below are answers to some common
        questions about our services. If you have any additional questions, feel
        free to contact us at{" "}
        <strong>
          <a rel="noopener" href="mailto:contact.tools@anix7.in">
            contact.tools@anix7.in
          </a>
        </strong>
        .
      </p>

      <hr className="my-5" />

      <h3>
        1. <strong>What is {baseUrl}?</strong>
      </h3>
      <p className=" my-1 ml-1">
        {baseUrl} is an online platform that offers you various tools and
        services. Our mission is to provide you with the best possible tools and
        services in one place, making it easy for you to access and use them.
      </p>

      <h3>
        2. <strong>How do I shorten a URL on {baseUrl}?</strong>
      </h3>
      <p className=" my-1 ml-1">
        To shorten a URL, simply paste your long URL into the URL shortener tool
        on our homepage, click &quot;Shorten,&quot; and your new, shortened link
        will be ready to use and share.
      </p>

      <h3>
        3.{" "}
        <strong>Is there a limit on the number of URLs I can shorten?</strong>
      </h3>
      <p className=" my-1 ml-1">
        Currently, there is no limit on the number of links you can shorten.
        However, we may introduce limits for ragular(non-pro) users to ensure
        fair usage.
      </p>

      <h3>
        4. <strong>How does the image upload work?</strong>
      </h3>
      <p className=" my-1 ml-1">
        When you upload images directly to to our website. This makes it easy to
        store and share image url without needing to manage files locally.
      </p>

      <h3>
        5. <strong>Can I delete a link or image after uploading?</strong>
      </h3>
      <p className=" my-1 ml-1">
        Yes, you can delete any link or image that you’ve uploaded.
      </p>

      <h3>
        6. <strong>What types of images can I upload?</strong>
      </h3>
      <p className=" my-1 ml-1">
        Currently, our platform supports standard image formats like JPG, JPEG,
        PNG, GIF, APNG, TIFF. Ensure that the images meet size and file type
        requirements to upload them successfully.
      </p>

      <h3>
        7. <strong>How do I contact support if I have an issue?</strong>
      </h3>
      <p className=" my-1 ml-1">
        For any questions or technical issues, please email us at{" "}
        <strong>
          <a rel="noopener" href="mailto:contact.tools@anix7.in">
            contact.tools@anix7.in
          </a>
        </strong>
        . We strive to respond within 24-48 hours.
      </p>

      <h3>
        8. <strong>Is {baseUrl} free to use?</strong>
      </h3>
      <p className=" my-1 ml-1">
        Yes, our basic services are free to use. In the future, we may introduce
        premium features that come with additional benefits.
      </p>

      <h3>
        9. <strong>How do you handle my data?</strong>
      </h3>
      <p className=" my-1 ml-1">
        We take your privacy seriously. Please refer to our{" "}
        <Link href="/page/privacy-policy">Privacy Policy</Link> for details on
        how we collect, use, and protect your information.
      </p>

      <h3>
        10. <strong>Can I suggest a new feature for {baseUrl}?</strong>
      </h3>
      <p className=" my-1 ml-1">
        Absolutely! We value user feedback. If you have a suggestion for a new
        feature, please send it to{" "}
        <strong>
          <a rel="noopener" href="mailto:contact.tools@anix7.in">
            contact.tools@anix7.in
          </a>
        </strong>
        . We are always looking for ways to improve our services.
      </p>
    </main>
  );
}
