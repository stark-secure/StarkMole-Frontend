import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import FeatureDemo from "./FeatureDemo";
import { FaRocket, FaCoins, FaGamepad } from "react-icons/fa";

const features = [
  {
    title: "On-Chain Gameplay",
    description: "Experience real-time, verifiable actions powered by blockchain.",
    icon: <FaGamepad />,
  },
  {
    title: "Token Integration",
    description: "Earn, trade, and use tokens seamlessly within the game.",
    icon: <FaCoins />,
  },
  {
    title: "Dynamic Challenges",
    description: "Face evolving gameplay and compete for top rewards.",
    icon: <FaRocket />,
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const FeaturesSection: React.FC = () => (
  <section style={{ padding: "48px 0", background: "#151821" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ color: "#fff", fontSize: 36, marginBottom: 16 }}
      >
        Features
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ color: "#b0b8c1", fontSize: 18, marginBottom: 32 }}
      >
        Discover what makes StarkMole unique. Explore gameplay, token mechanics, and more.
      </motion.p>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 24,
        }}
      >
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </motion.div>
      <FeatureDemo />
    </div>
    {/* Responsive styles */}
    <style>
      {`
        @media (max-width: 700px) {
          .feature-card {
            min-width: 90vw !important;
            margin: 12px 0 !important;
          }
        }
      `}
    </style>
  </section>
);

export default FeaturesSection;