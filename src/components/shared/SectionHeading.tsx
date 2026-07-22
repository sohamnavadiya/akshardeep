"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className={cn(
        align === "center" && "text-center",
        "mb-14",
        className
      )}
    >
      {label && (
        <span className={cn(
          "inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-3",
          dark ? "text-accent" : "text-accent"
        )}>
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight",
          dark ? "text-white" : "text-text-dark"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            dark ? "text-text-light-muted" : "text-text-body"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-5 h-[3px] w-12",
          align === "center" && "mx-auto",
          "bg-accent"
        )}
      />
    </motion.div>
  );
}
