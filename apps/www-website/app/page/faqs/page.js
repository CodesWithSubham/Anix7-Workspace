import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions (FAQs)",
  description:
    "Get quick answers to the most common questions about Anix7. Learn more about features, support, usage policies, and user tools.",
  keywords: [
    "Anix7 FAQ",
    "Anix7 questions",
    "Help center",
    "Anix7 support",
    "Common issues",
    "Tools usage",
    "User guide",
    "Account support",
    "Anix7 help",
    "Frequently asked questions",
  ],
  alternates: { canonical: "/page/faqs" },
};

export const addToSitemap = true; // Add this page to Sitemap

export default function Faqs() {
  return (
    <>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <p className="my-1 ml-1">
        Welcome to the FAQ page for www.anix7.in! Below are answers to some
        common questions about our services and platforms. If you have any
        additional questions, feel free to contact us at{" "}
        <strong>
          <a href="mailto:contact@anix7.in">contact@anix7.in</a>
        </strong>
        .
      </p>

      <hr className="my-5" />

      <h2>
        1. <strong>What is Anix7?</strong>
      </h2>
      <p className="my-1 ml-1">
        Anix7 is a digital ecosystem of mini-platforms offering tools, games,
        anime content, app markets, wallpapers, AI utilities, and more—designed
        to enhance productivity and entertainment for users around the world.
      </p>

      <h2>
        2. <strong>What services does Anix7 offer?</strong>
      </h2>
      <p className="my-1 ml-1">
        We host a growing collection of web-based apps including Anix7 Tools
        (URL shortener, image tools, QR generator), Anix7 Anime (reviews and
        updates), Anix7 Games (casual browser games), AniPic (HD anime
        wallpapers), Anix7 Photos (real-life photo collections), and more.
      </p>

      <h2>
        3. <strong>Is Anix7 free to use?</strong>
      </h2>
      <p className="my-1 ml-1">
        Yes! Most of our platforms and tools are free to use. We may offer
        optional Pro features to enhance your experience without ads or with
        extra capabilities.
      </p>

      <h2>
        4. <strong>Do I need an account to use Anix7?</strong>
      </h2>
      <p className="my-1 ml-1">
        No account is needed for most features. Some advanced tools or
        personalization options might require login in the future.
      </p>

      <h2>
        5. <strong>Can I use Anix7 on mobile devices?</strong>
      </h2>
      <p className="my-1 ml-1">
        Absolutely. All our websites and tools are mobile-friendly and
        responsive, making them easy to use on any device.
      </p>

      <h2>
        6. <strong>What is Anix7 Tools?</strong>
      </h2>
      <p className="my-1 ml-1">
        Anix7 Tools is a suite of utility tools such as URL shortener, QR code
        generator, bulk image resizer, image uploader, and more—designed for
        quick and privacy-friendly online usage.
      </p>

      <h2>
        7. <strong>What is AniPic?</strong>
      </h2>
      <p className="my-1 ml-1">
        AniPic is your hub for beautiful anime wallpapers in HD to 4K quality.
        You can view, download, and share anime-themed imagery curated for fans.
      </p>

      <h2>
        8. <strong>What kind of games are in Anix7 Games?</strong>
      </h2>
      <p className="my-1 ml-1">
        Anix7 Games offers a collection of lightweight, browser-based games
        including puzzles, logic games, and casual arcade titles you can play
        instantly.
      </p>

      <h2>
        9. <strong>What does Anix7 Anime offer?</strong>
      </h2>
      <p className="my-1 ml-1">
        Anix7 Anime provides anime reviews, latest news, seasonal release
        updates, episode summaries, and community recommendations to keep you
        informed.
      </p>

      <h2>
        10. <strong>What is the Anix7 Telegram App Market?</strong>
      </h2>
      <p className="my-1 ml-1">
        It&apos;s a curated platform where you can discover useful Telegram bots,
        channels, and apps—all organized by category and regularly updated.
      </p>

      <h2>
        11. <strong>Are the tools and games browser-based?</strong>
      </h2>
      <p className="my-1 ml-1">
        Yes, all tools and games offered through Anix7 are designed to work
        directly in your web browser without needing to download or install
        anything.
      </p>

      <h2>
        12. <strong>Can I contribute or suggest new features?</strong>
      </h2>
      <p className="my-1 ml-1">
        Definitely! We love user feedback. Please email your suggestions to{" "}
        <strong>
          <a rel="noopener" href="mailto:contact@anix7.in">
            contact@anix7.in
          </a>
        </strong>
        .
      </p>

      <h2>
        13. <strong>How do I report bugs or technical issues?</strong>
      </h2>
      <p className="my-1 ml-1">
        If you experience any bugs or glitches, report them via email at{" "}
        <strong>
          <a rel="noopener" href="mailto:support@anix7.in">
            support@anix7.in
          </a>
        </strong>
        . Our team will look into it promptly.
      </p>

      <h2>
        14. <strong>Is my data safe while using Anix7?</strong>
      </h2>
      <p className="my-1 ml-1">
        Yes. We prioritize browser-side processing and avoid collecting personal
        data unless necessary. See our{" "}
        <Link href="/page/privacy-policy">Privacy Policy</Link> for more
        information.
      </p>

      <h2>
        15. <strong>Do you have a dark mode?</strong>
      </h2>
      <p className="my-1 ml-1">
        Yes, all major platforms under Anix7 support both light and dark themes,
        automatically adjusting based on your system preferences.
      </p>

      <h2>
        16. <strong>Can I use Anix7 resources for commercial projects?</strong>
      </h2>
      <p className="my-1 ml-1">
        Most of our tools and images are for personal use. For commercial use,
        please refer to the license information provided or contact us directly.
      </p>

      <h2>
        17. <strong>Do you offer APIs or developer tools?</strong>
      </h2>
      <p className="my-1 ml-1">
        Currently, we do not provide public APIs, but we are exploring
        developer-friendly tools in the future. Stay tuned!
      </p>

      <h2>
        18. <strong>Will new services be added?</strong>
      </h2>
      <p className="my-1 ml-1">
        Yes, Anix7 is actively expanding. We’re always building new tools and
        services based on user demand and current tech trends.
      </p>

      <h2>
        19. <strong>Where is Anix7 based?</strong>
      </h2>
      <p className="my-1 ml-1">
        Anix7 is operated from India and serves a global audience. Our mission
        is to simplify digital life with useful, fast, and free tools.
      </p>

      <h2>
        20. <strong>How can I stay updated about new features?</strong>
      </h2>
      <p className="my-1 ml-1">
        Follow us on social media or check our homepage for announcements about
        new tools, updates, or blog posts.
      </p>
    </>
  );
}
