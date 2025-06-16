import React from "react";
import { motion, useAnimation } from "framer-motion";

const tokens = [
  { id: 1, color: "#FFD600" },
  { id: 2, color: "#FF6F00" },
  { id: 3, color: "#00E676" },
];

const FeatureDemo: React.FC = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start(i => ({
      x: [0, 80, 0],
      y: [0, -40, 0],
      transition: { repeat: Infinity, duration: 2, delay: i * 0.3 }
    }));
  }, [controls]);

  return (
    <div style={{
      width: "100%",
      height: 180,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 32,
      background: "#23293a",
      borderRadius: 16,
      margin: "24px 0"
    }}>
      {tokens.map((token, i) => (
        <motion.div
          key={token.id}
          custom={i}
          animate={controls}
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: token.color,
            boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
            border: "3px solid #fff"
          }}
        />
      ))}
      <span style={{ color: "#fff", marginLeft: 24, fontWeight: 600 }}>
        Token Mechanics in Action!
      </span>
    </div>
  );
};

export default FeatureDemo;