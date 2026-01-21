import { motion } from 'framer-motion';

const FoodLoader = ({ height = "medium" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${height === "screen" ? "h-[90vh]" : "min-h-[400px]"} w-full bg-white font-sans`}>
      <div className="relative w-24 h-24">

        {/* The Pan */}
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-16 h-4 bg-gray-800 rounded-b-full"
        >
          {/* Pan Handle */}
          <div className="absolute right-[-20px] top-0 w-10 h-2 bg-gray-800 rounded-full origin-left rotate-[-10deg]"></div>
        </motion.div>

        {/* The Food (Tossing) */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-6 left-4 w-8 h-3 bg-orange-500 rounded-full"
        />
      </div>

      {/* Loading Text
      <motion.h3 
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mt-8 text-xl font-bold text-gray-700"
      >
        Cooking something delicious...
      </motion.h3> */}

      <div className='mt-4 mr-4 '>
        <span className="text-xl text-red-500 font-extrabold">food</span>
        <span className="text-xl text-orange-400 font-extrabold">wagon</span>
      </div>
    </div>
  );
};

export default FoodLoader;