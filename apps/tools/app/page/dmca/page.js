export const metadata = {
  title: "DMCA Policy",
  description:
    "Learn about Anix7 Tools' DMCA policy and how to submit copyright infringement claims.",
};

export const addToSitemap = true; // Add this page to Sitemap

export default function DMCA() {
  const baseUrl = new URL(process.env.BASE_URL).hostname;
  return (
    <>
      <h1>DMCA Policy for {baseUrl}</h1>
      <p className=" my-1 ml-1">
        <strong>Effective Date:</strong> [Insert Date]
      </p>

      <p className=" my-1 ml-1">
        {baseUrl} respects the intellectual property rights of others and
        complies with the Digital Millennium Copyright Act (&quot;DMCA&quot;).
        This DMCA policy outlines our process for handling copyright
        infringement claims.
      </p>
      <p className=" my-1 ml-1">
        If you believe that content on our site infringes your copyright, please
        follow the procedures outlined below to notify us, so we can address the
        matter promptly.
      </p>
      <h2>1. Filing a DMCA Notice</h2>
      <p className=" my-1 ml-1">
        If you believe that material on {baseUrl} infringes your copyright,
        please send us a written DMCA Notice with the following information:
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
        <a rel="noopener" href="mailto:contact.tools@anix7.in">
          contact.tools@anix7.in
        </a>
        <br />
        <strong>Subject Line:</strong> DMCA Takedown Request
      </p>

      <p className=" my-1 ml-1">
        Upon receiving your complete and valid DMCA Notice, we will review it
        and, if appropriate, take action, which may include removing or
        disabling access to the infringing material.
      </p>

      <h2>2. Counter-Notification Process</h2>
      <p className=" my-1 ml-1">
        If your content has been removed due to a DMCA Notice and you believe it
        was taken down in error, you may file a counter-notification. Your
        counter-notification must include:
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
        <a rel="noopener" href="mailto:contact.tools@anix7.in">
          contact.tools@anix7.in
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

      <h2>3. Repeat Infringers</h2>
      <p className=" my-1 ml-1">
        In accordance with the DMCA and other applicable laws, we maintain a
        policy that provides for the termination of user accounts or access for
        repeat infringers in appropriate circumstances.
      </p>

      <h2>4. Misrepresentations</h2>
      <p className=" my-1 ml-1">
        Please note that the DMCA allows claims of copyright infringement to be
        made under penalty of perjury. Any misrepresentations in a DMCA Notice
        or Counter-Notification could result in legal action, including costs
        and damages.
      </p>

      <h2>5. Contact</h2>
      <p className=" my-1 ml-1">
        If you have any questions about our DMCA policy, please contact us at:
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
