"use client";
import { motion } from "framer-motion";
import Button from "../shared/Button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 背景動画/画像 */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="object-cover w-full h-full"
          poster="/images/event-poster.jpg"
        >
          <source src="/videos/event-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* コンテンツ */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          イベント名
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          キャッチコピーがここに入ります
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button href="#register">今すぐ参加する</Button>
        </motion.div>
      </div>
    </section>
  );
}
