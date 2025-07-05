import Hr from "@shared/components/ui/Hr";
import Link from "next/link";

export const metadata = {
  title: "DMCA",
  description:
    "Review Anix7's DMCA Policy for handling copyright infringement claims. Learn how to submit a DMCA takedown request and our response procedures.",
  keywords: [
    "Anix7 DMCA",
    "DMCA Policy",
    "Copyright infringement",
    "DMCA takedown",
    "Submit DMCA request",
    "Intellectual property",
    "Copyright removal",
    "Anix7 legal policy",
  ],
  alternates: { canonical: "/page/dmca" },
};

export const addToSitemap = true; // Add this page to Sitemap

export default function DMCA() {
  return (
    <>
      <h1>
        <strong>DMCA Notice and Takedown Policy</strong>
      </h1>
      <p className="my-1 ml-1">
        <strong>Effective Date:</strong> Jun 6, 2025
      </p>
      <p className="my-1 ml-1">
        At <strong>Anix7</strong>, we respect the intellectual property rights
        of others and expect our users to do the same. This DMCA Policy outlines
        the procedures we follow to respond to claims of copyright infringement
        under the <strong>Digital Millennium Copyright Act</strong> (DMCA), 17
        U.S.C. § 512.
      </p>
      <Hr />
      <h2>
        📩 <strong>Submitting a DMCA Takedown Notice</strong>
      </h2>
      <p className="my-1 ml-1">
        If you believe that content available on{" "}
        <strong>
          <Link href="/">www.anix7.in</Link>
        </strong>{" "}
        or any of its subdomains (such as tools.anix7.in, anime.anix7.in,
        pic.anix7.in, etc.) infringes your copyright, you may submit a takedown
        request to us.
      </p>
      <p className="my-1 ml-1">
        To be effective, your written DMCA notice <strong>must include</strong>:
      </p>
      <ol className="list-decimal ml-5 pl-5 *:my-4">
        <li>
          <p className=" my-1 ml-1">
            <strong>Identification of the copyrighted work:</strong> Describe
            the copyrighted work or provide a URL link or other details that
            help us locate it.
          </p>
        </li>
        <li>
          <p className=" my-1 ml-1">
            <strong>Identification of the infringing material:</strong> Specify
            the location of the material on our site that you believe infringes
            your copyright. Provide URLs or other specific information to help
            us locate the allegedly infringing content.
          </p>
        </li>
        <li>
          <p className=" my-1 ml-1">
            <strong>Your contact information:</strong> Include your full name,
            mailing address, phone number, and email address.
          </p>
        </li>
        <li>
          <p className=" my-1 ml-1">
            <strong>A statement of good faith belief:</strong> Include a
            statement that you have a good faith belief that the use of the
            copyrighted material is not authorized by the copyright owner, its
            agent, or the law.
          </p>
        </li>
        <li>
          <p className=" my-1 ml-1">
            <strong>A statement of accuracy and authority:</strong> Include a
            statement confirming that the information in your DMCA Notice is
            accurate and, under penalty of perjury, that you are the copyright
            owner or are authorized to act on the copyright owner’s behalf.
          </p>
        </li>
        <li>
          <p className=" my-1 ml-1">
            <strong>Your physical or electronic signature:</strong> Sign the
            notice either electronically or physically.
          </p>
        </li>
      </ol>
      <p className=" my-1 ml-1">
        Send the DMCA Notice to our designated agent at the following address:
      </p>
      <p className=" my-1 ml-1">
        <strong>Email:</strong>{" "}
        <a rel="noopener" href="mailto:dmca@anix7.in">
          dmca@anix7.in
        </a>
        <br />
        <strong>Subject Line:</strong> DMCA Takedown Request
      </p>

      <p className=" my-1 ml-1">
        Upon receiving your complete and valid DMCA Notice, we will review it
        and, if appropriate, take action, which may include removing or
        disabling access to the infringing material.
      </p>
      <Hr />
      <h2>
        🔄 <strong>Counter-Notification</strong>
      </h2>
      <p className="my-1 ml-1">
        If content you posted has been removed due to a DMCA takedown notice,
        and you believe it was removed in error or is lawful (e.g., fair use),
        you may submit a counter-notification. Your counter-notification must
        include:
      </p>
      <ol className="list-decimal ml-5 pl-5 *:my-4">
        <li>
          <p className=" my-1 ml-1">
            <strong>Identification of the removed material:</strong> Specify the
            material that was removed and its location before removal.
          </p>
        </li>
        <li>
          <p className=" my-1 ml-1">
            <strong>A statement under penalty of perjury:</strong> Confirm that
            you have a good faith belief that the material was removed or
            disabled as a result of mistake or misidentification.
          </p>
        </li>
        <li>
          <p className=" my-1 ml-1">
            <strong>Your contact information:</strong> Include your full name,
            mailing address, phone number, and email address, and a statement
            that you consent to the jurisdiction of the federal court in your
            district (or your location, if outside the United States).
          </p>
        </li>
        <li>
          <p className=" my-1 ml-1">
            <strong>Your physical or electronic signature:</strong> Sign the
            notice either electronically or physically.
          </p>
        </li>
      </ol>
      <p className=" my-1 ml-1">
        <strong>Send your Counter-Notice to:</strong>
      </p>
      <p className=" my-1 ml-1">
        <strong>Email:</strong>{" "}
        <a rel="noopener" href="mailto:dmca@anix7.in">
          dmca@anix7.in
        </a>
        <br />
        <strong>Subject Line:</strong> DMCA Counter-Notification
      </p>
      <p className=" my-1 ml-1">
        Upon receiving a valid counter-notification, we may reinstate the
        removed material in compliance with the DMCA, unless the original
        claimant files a lawsuit seeking a court order to prevent the user from
        engaging in infringing activity.
      </p>
      <Hr />
      <h2>
        ⚖️ <strong>Repeat Infringer Policy</strong>
      </h2>
      <p className="my-1 ml-1">
        Users who are found to repeatedly post infringing material may have
        their access terminated permanently, at our discretion.
      </p>
      <Hr />
      <h2>
        📝 <strong>Good Faith</strong>
      </h2>
      <p className="my-1 ml-1">
        Please be aware that submitting false or misleading information in a
        DMCA notice or counter-notice may result in legal liability. Always
        ensure that your claim is accurate and submitted in good faith.
      </p>
      <Hr />
      <h2>
        📬 <strong>Contact Us</strong>
      </h2>
      <p className="my-1 ml-1">
        For questions or concerns related to this DMCA Policy:
      </p>
      <p className="my-1 ml-1">
        📧 <strong>Email:</strong>{" "}
        <a href="mailto:dmca@anix7.in">dmca@anix7.in</a>{" "}
      </p>
      <p className="my-1 ml-1">
        🌐 <strong>Website:</strong>{" "}
        <a href="https://www.anix7.in">www.anix7.in</a>
      </p>
    </>
  );
}
