"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function EventDetails() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gray-50" id="details">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          イベント詳細
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* 日程 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-3">開催日時</h3>
            <p>2023年12月10日（日）</p>
            <p>13:00〜18:00（開場12:30）</p>
          </motion.div>

          {/* 場所 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-3">開催場所</h3>
            <p>イベントホールA</p>
            <p>東京都渋谷区〇〇町1-2-3</p>
          </motion.div>

          {/* 料金 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-3">参加費</h3>
            <p>一般: 5,000円</p>
            <p>学生: 3,000円</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
