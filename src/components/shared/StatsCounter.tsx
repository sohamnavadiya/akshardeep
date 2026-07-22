"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

interface StatsCounterProps {
  stats: StatItem[];
  light?: boolean;
  dark?: boolean;
}

function AnimatedNumber({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 50;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsCounter({ stats, light = false, dark = false }: StatsCounterProps) {
  const onDark = light || dark;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums ${onDark ? "text-white" : "text-accent"}`}>
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </div>
          <div className={`mt-1.5 text-xs font-semibold uppercase tracking-wider ${onDark ? "text-text-on-dark-muted" : "text-text-secondary"}`}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
