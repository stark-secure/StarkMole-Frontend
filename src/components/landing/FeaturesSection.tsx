import React from "react";
import { FaGamepad, FaCoins, FaTrophy, FaShieldAlt, FaUsers, FaWallet } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    title: "Daily Challenges",
    icon: <FaGamepad className="text-purple-400" size={28} />,
    iconBg: "bg-purple-900",
    description:
      "Engage in daily Whack-a-Mole challenges that test your reflexes and strategic thinking. Each day brings new challenges with varying difficulty levels.",
  },
  {
    title: "On-Chain Rewards",
    icon: <FaCoins className="text-blue-400" size={28} />,
    iconBg: "bg-blue-900",
    description:
      "Earn rewards for your performance in the form of digital assets and tokens. All rewards are recorded on the blockchain, ensuring transparency.",
  },
  {
    title: "Decentralized Leaderboards",
    icon: <FaTrophy className="text-green-400" size={28} />,
    iconBg: "bg-green-900",
    description:
      "Compete with players from around the world on decentralized leaderboards. Track your progress and see how you stack up against others in real-time.",
  },
  {
    title: "Blockchain Security",
    icon: <FaShieldAlt className="text-orange-400" size={28} />,
    iconBg: "bg-orange-900",
    description:
      "Enjoy the security and transparency of blockchain technology. All game data, scores, and rewards are secured on the StarkNet blockchain.",
  },
  {
    title: "Community Features",
    icon: <FaUsers className="text-red-400" size={28} />,
    iconBg: "bg-red-900",
    description:
      "Connect with other players through in-game social features. Share your achievements and compete for top spots on the global leaderboards.",
  },
  {
    title: "StarkNet Integration",
    icon: <FaWallet className="text-indigo-400" size={28} />,
    iconBg: "bg-indigo-900",
    description:
      "Seamlessly connect your StarkNet wallet to play, earn, and track your rewards. Experience the future of gaming with blockchain technology.",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40, scale: 0.95 },
  onscreen: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, bounce: 0.25, duration: 0.7 } },
};

const iconVariants = {
  initial: { rotate: -10, scale: 0.8 },
  animate: { rotate: 0, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 15 } },
  hover: { scale: 1.15, rotate: 8, transition: { type: "spring" as const, stiffness: 300 } },
};

const FeaturesSection: React.FC = () => (
  <section id="features" className="w-full bg-[#151821] py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.h2
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2"
        >
          Key Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg"
        >
          Discover what makes StarkMole a unique StarkNet gaming experience.
        </motion.p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="relative bg-[#23293a] rounded-2xl p-6 pt-8 shadow-lg border-b-4 border-yellow-400 flex flex-col min-h-[260px] transition-transform"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(255, 221, 51, 0.10)" }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.7, delay: idx * 0.12 }}
          >
            <motion.div
              className={`absolute -top-5 left-5 rounded-full p-2 ${feature.iconBg} shadow-md`}
              variants={iconVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              {feature.icon}
            </motion.div>
            <h3 className="mt-6 mb-2 text-xl font-bold text-white">{feature.title}</h3>
            <p className="text-gray-300 text-base">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;