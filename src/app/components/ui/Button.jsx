"use client";
import { m } from 'framer-motion';

export default function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  icon = null,
  ...props
}) {
  const baseStyles = "group relative inline-flex items-center justify-center px-5 py-3 md:px-10 md:py-5 font-bold rounded-xl md:rounded-2xl transition-all";

  const variants = {
    primary: "bg-primary text-background hover:bg-primary-light shadow-lg shadow-primary/30 hover:shadow-primary-light/40",
    secondary: "bg-white/10 backdrop-blur-md border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-background"
  };

  return (
    <m.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center text-sm md:text-lg">
        {icon && <span className="mr-2 md:mr-3">{icon}</span>}
        {children}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </m.button>
  );
}
