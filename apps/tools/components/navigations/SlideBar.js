"use client";

import SlideBarLayout from "@shared/components/navigation/SlideBarLayout";
import { DisclaimerSvg } from "@shared/components/svg/DisclaimerSvg";
import { DocumentSecureSvg } from "@shared/components/svg/DocumentSvg";
import { ImageRoundedSvg } from "@shared/components/svg/ImageSvg";
import { InformationQuestionMarkSvg } from "@shared/components/svg/InformationSvg";
import { LetterRoundedSvg } from "@shared/components/svg/LetterSvg";
import { PowerButtonSvg } from "@shared/components/svg/PowerButtonSvg";
import { ProfileGroupSvg } from "@shared/components/svg/ProfileSvg";
import { QrSvg } from "@shared/components/svg/QrSvg";
import { UrlSvg } from "@shared/components/svg/UrlSvg";
import { signOut } from "next-auth/react";

const menuItem = [
  {
    label: "Url Shortner",
    icon: <UrlSvg />,
    url: "/url-shortner",
  },
  {
    label: "QR Code Generator",
    icon: <QrSvg />,
    url: "/qr-code-generator",
  },
  {
    label: "Images Tools",
    icon: <ImageRoundedSvg />,
    subMenu: [
      {
        label: "Upload Image",
        url: "/image-uploading",
      },
      {
        label: "My Uploads",
        url: "/image-uploading/my-uploads",
      },
    ],
    showOnLoggedIn: true,
    hr: true,
  },
  {
    label: "Images",
    icon: <ImageRoundedSvg />,
    url: "/image-uploading",
    showOnLoggedOut: true,
    hr: true,
  },
  {
    label: "About Us",
    icon: <ProfileGroupSvg />,
    url: "/page/about-us",
  },
  {
    label: "Contact Us",
    icon: <LetterRoundedSvg />,
    url: "/page/contact-us",
    hr: true,
  },
  {
    label: "Disclaimer",
    icon: <DisclaimerSvg />,
    url: "/page/disclaimer",
  },
  {
    label: "Terms of Use",
    icon: <DocumentSecureSvg />,
    url: "/page/terms",
  },
  {
    label: "FAQs",
    icon: <InformationQuestionMarkSvg />,
    url: "/page/faqs",
    hr: true,
  },
  {
    label: "Logout",
    icon: <PowerButtonSvg />,
    onClick: () => signOut(),
    hr: true,
    showOnLoggedIn: true,
  },
];

const quickURLs = [
  { url: "/sitemap.xml", label: "Sitemap" },
  { url: "/page/dmca", label: "DMCA" },
  { url: "/page/privacy-policy", label: "Privacy Policy" },
];

export default function SlideBar() {
  return <SlideBarLayout menuItem={menuItem} quickURLs={quickURLs} />;
}
