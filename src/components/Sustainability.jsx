
import { motion } from "framer-motion";

export default function Sustainability() {
  return (
    <div className="relative max-w-full mx-auto h-[700px] flex items-center justify-center p-4">
      <div className="relative w-[700px] h-[700px]">
        {/* Central image with subtle floating animation */}
        <motion.div
          className="absolute left-0 top-0 w-[280px] h-[700px]"
          initial={{ y: 0 }}
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/2f82/c8ff/6aedb0f7fd91444306aedde679c72011?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ka0Mb4qaf7vW~w6P3ZXzpYvhrgxxC8ZhRQPTt9LLKX2lUd31TmS4Px-Ej7upl0zvh0z4cz8h0~XyoH5lS3lQUXetO~j7ojTNGCAwGI2hG6-CrXg6OaYWdPSxFS1zigwr57WNlu16holwW1urWuGookg~pOlnokuTlMOGLy1jQukuxDas9nNLxKBhfjHqnm0nvb6JAKBFj9e6O0AYbf5wyz7cVoySsr10qgF2aHqObNgPp0PqxVcJ4cLFcFpQCQryPMMivOyzaAGVtiD4gP3EfgbAP7vV0t~kMm9TtGx4WH-3qWpRRP89AZs6fR7-c~P-JzeHMxzFfMLO4nRLHHkdWA__"
            alt="Earth in glass dome above factory smokestacks"
            width={320}
            height={700}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* 37% Card - Bottom, with fade-in and slight rise animation */}
        <motion.div
          className="absolute left-[210px] top-[460px] bg-white p-4 rounded-md w-[260px] z-[1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6, // Reduced duration for smoother feel
            delay: 0.2, // Slightly reduced delay
            ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier easing
          }}
          viewport={{ once: false, amount: 0.5 }}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <h2 className="text-4xl font-bold text-[#23B30E]">37%</h2>
          <p className="text-sm mt-1 text-[#23B30E]">
            Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track
          </p>
        </motion.div>

        {/* 98% Card - Ensure it overlaps the 18% card */}
        <motion.div
          className="absolute left-[250px] top-[250px] bg-[#3A3A3A] text-white p-4 rounded-md w-[280px] z-[4]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6, // Reduced duration for smoother feel
            delay: 0.4, // Slightly reduced delay
            ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier easing
          }}
          viewport={{ once: false, amount: 0.5 }}
          whileHover={{
            x: -5,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <h2 className="text-4xl font-bold">98%</h2>
          <p className="text-sm mt-1">
            Of CEOs Agree Sustainability Is <br />
            Their Responsibility
          </p>
        </motion.div>

        {/* 18% Card - Ensure it is under the 98% card */}
        <motion.div
          className="absolute right-[40px] top-[350px] bg-[#3A3A3A] text-white p-4 rounded-md w-[270px] z-[3]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6, // Reduced duration for smoother feel
            delay: 0.6, // Slightly reduced delay
            ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier easing
          }}
          viewport={{ once: false, amount: 0.5 }}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <h2 className="text-4xl font-bold text-right">18%</h2>
          <p className="text-sm mt-1 text-right">
            Of Companies Are Cutting <br /> Emissions Fast Enough To <br /> Reach Net Zero By 2050
          </p>
        </motion.div>

        {/* 3X Card - Top Right */}
        <motion.div
          className="absolute right-[20px] top-[100px] bg-[#23B30E] text-black p-4 rounded-md w-[240px] z-[5]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6, // Reduced duration for smoother feel
            delay: 0.8, // Slightly reduced delay
            ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier easing
          }}
          viewport={{ once: false, amount: 0.5 }}
          whileHover={{
            y: 5,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <h2 className="text-7xl font-bold">3X</h2>
          <p className="text-sm mt-1">
            ESG High Performers Deliver <br />A Higher Total Shareholder Return
          </p>
        </motion.div>
      </div>
    </div>
  );
}