"use client";

import {
  AdsterraBanner320x50,
  AdsterraBanner468x60,
  AdsterraBanner728x90,
} from "@shared/components/ads";
import { useClientWidth } from "@shared/utils/ClientInfo";

export default function Ads() {
  const width = useClientWidth();
  // console.log(width)

  // console.log(useClientWidth())

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        reprehenderit quidem est, pariatur ad unde explicabo blanditiis quos
        corporis, voluptatum perspiciatis illo nam placeat quae incidunt
        eveniet. Accusantium, ratione hic?
      </p>
      <AdsterraBanner320x50 />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        reprehenderit quidem est, pariatur ad unde explicabo blanditiis quos
        corporis, voluptatum perspiciatis illo nam placeat quae incidunt
        eveniet. Accusantium, ratione hic?
      </p>
      <AdsterraBanner468x60 />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        reprehenderit quidem est, pariatur ad unde explicabo blanditiis quos
        corporis, voluptatum perspiciatis illo nam placeat quae incidunt
        eveniet. Accusantium, ratione hic?
      </p>
      <AdsterraBanner728x90 />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        reprehenderit quidem est, pariatur ad unde explicabo blanditiis quos
        corporis, voluptatum perspiciatis illo nam placeat quae incidunt
        eveniet. Accusantium, ratione hic?
      </p>
    </>
  );
}
