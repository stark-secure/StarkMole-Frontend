import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <motion.div
    className="feature-card"
    whileHover={{ scale: 1.05, rotateY: 8 }}
    whileTap={{ scale: 0.97 }}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    style={{
      background: "#181c24",
      borderRadius: 16,
      padding: 24,
      boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
      cursor: "pointer",
      perspective: 1000,
      minWidth: 260,
      minHeight: 180,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: 12,
    }}
  >
    <div style={{ fontSize: 40, marginBottom: 16 }}>{icon}</div>
    <h3 style={{ margin: 0, color: "#fff" }}>{title}</h3>
    <p style={{ color: "#b0b8c1", marginTop: 8, textAlign: "center" }}>{description}</p>
  </motion.div>
);

export default FeatureCard;