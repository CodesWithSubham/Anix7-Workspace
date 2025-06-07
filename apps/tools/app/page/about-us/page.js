export const metadata = {
  title: "About Us",
  description:
    "Learn more about Anix7 Tools, our mission, and the team behind your favorite online utilities.",
};

export const addToSitemap = true; // Add this page to Sitemap

export default function AboutUs() {
  const baseUrl = new URL(process.env.BASE_URL).hostname;
  return (
    <>
      <h1 className="mb-2">About Us</h1>
      <p className=" my-1 ml-1">
        <strong>Welcome to {baseUrl}!</strong>
      </p>
      <p className=" my-1 ml-1">
        {baseUrl} is your go-to platform for fast, simple, and secure online
        tools. We offer a streamlined URL shortener, a convenient image upload
        and many more searvices, making it easier than ever to manage and share
        your links and images.
      </p>

      <h2>Our Mission</h2>
      <p className=" my-1 ml-1">
        At {baseUrl}, our mission is to provide intuitive and efficient tools
        that enhance your online experience. We understand the importance of
        speed and simplicity in today&#8217;s digital world, and our goal is to
        make managing your links and images as effortless as possible.
      </p>

      <h2>What We Offer</h2>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>
          <strong>URL Shortening:</strong> Easily shorten long URLs into
          concise, shareable links that are perfect for social media, email, and
          more.
        </li>
        <li>
          <strong>Image Upload:</strong> Easily upload your favorite images
          &amp; share the generated url to wherever you want.
        </li>
      </ul>
      <p className=" my-1 ml-1">
        Our tools are designed with both casual and professional users in mind,
        making it easy for anyone to organize and share online content with
        confidence.
      </p>

      <h2>Why Choose {baseUrl}?</h2>
      <ul className="list-disc ml-5 pl-5 space-y-2">
        <li>
          <strong>User-Friendly Interface:</strong> Simple and accessible tools
          that anyone can use.
        </li>
        <li>
          <strong>Security and Privacy:</strong> We respect your privacy and
          protect your data by adhering to strong security standards.
        </li>
        <li>
          <strong>Reliable Support:</strong> Our team is here to help if you
          have any questions or need assistance. Reach out anytime!
        </li>
      </ul>
      <h2>Contact Us</h2>
      <p className=" my-1 ml-1">
        We&#8217;d love to hear from you! If you have questions, feedback, or
        suggestions, feel free to reach out.
      </p>
      <p className=" my-1 ml-1">
        <strong>Email:</strong>{" "}
        <a rel="noopener" href="mailto:contact.tools@anix7.in">
          contact.tools@anix7.in
        </a>
      </p>
      <p className=" my-1 ml-1">
        Thank you for choosing {baseUrl} &#45; where your online experience is
        simplified.
      </p>
    </>
  );
}
