"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = [
  { src: "/images/gallery/image1.jpg", alt: "イベント写真1" },
  { src: "/images/gallery/image2.jpg", alt: "イベント写真2" },
  { src: "/images/gallery/image3.jpg", alt: "イベント写真3" },
  { src: "/images/gallery/image4.jpg", alt: "イベント写真4" },
  { src: "/images/gallery/image5.jpg", alt: "イベント写真5" },
  { src: "/images/gallery/image6.jpg", alt: "イベント写真6" },
];

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gray-900 text-white" id="gallery">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          ギャラリー
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            aria-label="前の画像"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            aria-label="次の画像"
          >
            →
          </button>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-white" : "bg-gray-500"
              }`}
              aria-label={`画像${index + 1}に移動`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
