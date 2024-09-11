import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface PartnershipLogosDataProps {
  imgSrc: string;
}

const PartnershipLogosData: PartnershipLogosDataProps[] = [
  { imgSrc: "/vercel.svg" },
  { imgSrc: "/next.svg" },
  { imgSrc: "/vercel.svg" },
  { imgSrc: "/next.svg" },
  { imgSrc: "/vercel.svg" },
  { imgSrc: "/next.svg" },
  { imgSrc: "/vercel.svg" },
  { imgSrc: "/next.svg" },
];

const animation = { duration: 20000, easing: (t: any) => t };

export function PartnershipLogos() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 6,
      spacing: 15,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="flex flex-col gap-4 w-full px-4">
      <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl text-center">
        Nos partenaires de prestige, unis par nos valeurs.
      </h2>
      <div ref={sliderRef} className="keen-slider w-full h-48 overflow-hidden">
        {PartnershipLogosData.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide flex items-center justify-center"
          >
            <Image
              src={item.imgSrc}
              alt={`Company ${index + 1}`}
              width={100}
              height={75}
              className="opacity-60"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
