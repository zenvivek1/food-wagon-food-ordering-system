import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="absolute right-0 bottom-1/2 translate-y-1/2 hidden lg:flex flex-col items-center gap-2 text-white"
    >
      <span className="text-4xl tracking-widest rotate-90">
        SCROLL
      </span>

      <motion.div
        animate={{ y: [20, 60, 20] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="w-[3px] h-28 bg-white rounded-full"
      />
    </motion.div>
  );
};

export default ScrollIndicator;
