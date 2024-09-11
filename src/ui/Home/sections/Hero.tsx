import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { Button } from "primereact/button";
import { storage } from "@/config/firebase";

export function Hero() {
  const [videoUrl, setVideoUrl] = useState<string>("");

  useEffect(() => {
    async function fetchVideoInFirebase() {
      const videoRef = ref(storage, "Bg-Home.mp4");
      const url = await getDownloadURL(videoRef);
      setVideoUrl(url);
    }
    fetchVideoInFirebase();
  }, []);
  return (
    <section
      aria-label="hero"
      style={{ height: `calc(100vh - 8rem)` }}
      className="relative flex flex-col justify-between h-full w-full"
    >
      {videoUrl && (
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="relative z-10 flex flex-col gap-4 items-center justify-center h-full w-full">
        <p className="text-white max-w-[768px] font-semibold text-2xl md:text-5xl text-center">
          L&apos;elite des dirigeants, à portée de main. Rejoignez le réseau qui
          soutient votre succès.
        </p>
        <Button label="Saisir votre invitation privée" rounded outlined />
      </div>
      <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
    </section>
  );
}
