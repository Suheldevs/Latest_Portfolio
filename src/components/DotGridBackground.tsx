import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const DOT_SPACING = 18;
const DOT_RADIUS = 1;
const REPEL_RADIUS = 80;    // how close the cursor must be to move a dot
const REPEL_STRENGTH = 22;  // max distance a dot gets pushed
const EASE = 0.14;          // how quickly dots move toward / spring back

type Dot = { x: number; y: number; offX: number; offY: number };

const DotGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const isDarkRef = useRef(true);

  // Keep the render loop reading the current theme without restarting it
  useEffect(() => {
    isDarkRef.current = resolvedTheme !== "light";
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let dots: Dot[] = [];
    const mouse = { x: -9999, y: -9999 };

    const buildGrid = () => {
      dots = [];
      for (let x = DOT_SPACING / 2; x < width; x += DOT_SPACING) {
        for (let y = DOT_SPACING / 2; y < height; y += DOT_SPACING) {
          dots.push({ x, y, offX: 0, offY: 0 });
        }
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid();
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle dots matching the site's neutral palette
      ctx.fillStyle = isDarkRef.current
        ? "rgba(255, 255, 255, 0.22)"
        : "rgba(24, 24, 30, 0.25)";

      for (const dot of dots) {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Target displacement: push the dot radially away from the cursor
        let targetX = 0;
        let targetY = 0;
        if (dist < REPEL_RADIUS && dist > 0.001) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
          targetX = (dx / dist) * force;
          targetY = (dy / dist) * force;
        }

        // Ease toward the target (and spring back to rest when cursor leaves)
        dot.offX += (targetX - dot.offX) * EASE;
        dot.offY += (targetY - dot.offY) * EASE;

        ctx.beginPath();
        ctx.arc(dot.x + dot.offX, dot.y + dot.offY, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default DotGridBackground;
