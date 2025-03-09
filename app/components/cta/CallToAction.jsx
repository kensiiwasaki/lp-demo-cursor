"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../shared/Button";

export default function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
      id="register"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            今すぐイベントに参加しよう！
          </h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto">
            限定席数のため、お早めにお申し込みください。特別な体験があなたを待っています。
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              href="https://example.com/register"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              参加登録する
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
