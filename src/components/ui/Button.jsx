"use client";
import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  icon = null,
  ...props 
}) {
  const baseStyles = "group relative inline-flex items-center justify-center px-10 py-5 font-bold rounded-2xl transition-all";
  
  const variants = {
    primary: "bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20",
    secondary: "bg-white text-black hover:bg-gray-100 border-2 border-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: variant === 'primary' ? "rgba(255, 255, 255, 0.2)" : "#f3f4f6" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center text-lg">
        {icon && <span className="mr-3">{icon}</span>}
        {children}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </motion.button>
  );
}
