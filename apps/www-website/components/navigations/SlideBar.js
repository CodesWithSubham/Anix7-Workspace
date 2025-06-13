"use client";

import SlideBarLayout from "@shared/components/navigation/SlideBarLayout";
import { HomeSvg } from "@shared/components/svg/HomeSvg";
import { ImageRoundedSvg } from "@shared/components/svg/ImageSvg";
import { PowerButtonSvg } from "@shared/components/svg/PowerButtonSvg";
import { QrSvg } from "@shared/components/svg/QrSvg";
import { SettingSvg } from "@shared/components/svg/SettingSvg";
import { UrlSvg } from "@shared/components/svg/UrlSvg";
import { signOut } from "next-auth/react";

const menuItem = [
  {
    label: "Home",
    icon: <HomeSvg />,
    url: "/",
    hr: true,
  },
  {
    label: "Anix7 Tools",
    icon: <SettingSvg />,
    subMenu: [
      {
        label: "Url Shortner",
        icon: <UrlSvg />,
        url: "https://tools.anix7.in/url-shortner",
      },
      {
        label: "QR Code Generator",
        icon: <QrSvg />,
        url: "https://tools.anix7.in/qr-code-generator",
      },
      {
        label: "Images",
        icon: <ImageRoundedSvg />,
        url: "https://tools.anix7.in/image-uploading",
      },
    ],
    hr: true,
  },

  {
    label: "AniPic",
    icon: <ImageRoundedSvg />,
    url: "https://anipic.anix7.in",
    hr: true,
  },
  // {
  //   label: "Contact Us",
  //   icon: <LetterRoundedSvg />,
  //   url: "/page/contact-us",
  //   hr: true,
  // },
  // {
  //   label: "Disclaimer",
  //   icon: <DisclaimerSvg />,
  //   url: "/page/disclaimer",
  // },
  // {
  //   label: "Terms of Use",
  //   icon: <DocumentSecureSvg />,
  //   url: "/page/terms",
  // },
  // {
  //   label: "FAQs",
  //   icon: <InformationQuestionMarkSvg />,
  //   url: "/page/faqs",
  //   hr: true,
  // },
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
