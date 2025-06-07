import {
  AdsterraBannerStrip,
  AdsterraNativeBanner,
  MonetagInterstitial01,
  MonetagMultiTag01,
  MonetagVignetteBanner01,
} from "@shared/components/ads";
import connectToDatabase from "@shared/lib/db";
import ImageIndex from "@shared/models/ImageIndex";
import Image from "next/image";

export default async function ViewImage({ params }) {
  const { alias } = await params;
  await connectToDatabase();
  const imageData = await ImageIndex.findOne({ alias }).lean();

  if (!imageData) {
    return (
      <>
        <Ads ad={1} />
        <div className="w-full h-20 grid place-content-center">
          <p className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
            Image Not Found!
          </p>
        </div>
        <AdsterraNativeBanner />
      </>
    );
  }

  const { extension } = imageData;

  const resize = extension === "jpg" || extension === "jpeg" ? "l" : "";

  const imageUrl = `${process.env.IMGUR_IMAGE_URL}/${imageData.alias}${resize}.${extension}`;
  const adsLabel = imageData.adsLabel ?? 1;

  return (
    <>
      <Ads ad={adsLabel} />
      <AdsterraBannerStrip />
      <div className="relative w-full h-[70vh] overflow-hidden select-none">
        <Image
          src={imageUrl}
          alt="Image"
          fill
          draggable={false}
          className="object-contain pointer-events-none select-none"
          priority
          unoptimized
        />
      </div>
      <AdsterraNativeBanner />
    </>
  );
}

function Ads({ ad }) {
  switch (ad) {
    case 1:
      return <MonetagVignetteBanner01 />;
    case 2:
      return (
        <>
          <MonetagVignetteBanner01 />
          <MonetagInterstitial01 />
        </>
      );
    case 3:
      return <MonetagMultiTag01 />;
    default:
      return null;
  }
}
