"use client";

import SlideBarLayout from "@shared/components/navigation/SlideBarLayout";
import { ImageRoundedSvg } from "@shared/components/svg/ImageSvg";
import { InformationQuestionMarkSvg } from "@shared/components/svg/InformationSvg";
import { QrSvg } from "@shared/components/svg/QrSvg";
import { ResizeSvg } from "@shared/components/svg/ResizeSvg";
import { UrlSvg } from "@shared/components/svg/UrlSvg";

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
    label: "Bulk Image Resizer",
    icon: <ResizeSvg />,
    url: "/bulk-image-resizer",
  },
  {
    label: "Image Upload Tools",
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
    label: "Image Uploading",
    icon: <ImageRoundedSvg />,
    url: "/image-uploading",
    showOnLoggedOut: true,
    hr: true,
  },
  {
    label: "FAQs",
    icon: <InformationQuestionMarkSvg />,
    url: "/page/faqs",
  },
];

export default function SlideBar() {
  return <SlideBarLayout menuItem={menuItem} />;
}
