import { useEffect, useRef } from "react";

export function AnimatedSection({ as: Component = "div", className = "", children }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Component ref={ref} className={`fade-up ${className}`}>
      {children}
    </Component>
  );
}
