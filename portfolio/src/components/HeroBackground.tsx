import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  twinkle: boolean;
  twinkleOffset: number;
  twinkleSpeed: number;
}

interface Glow {
x:number;
y:number;
radius:number;
life:number;
maxLife:number;
}

interface ShootingStar{
x:number;
y:number;
vx:number;
vy:number;
length:number;
life:number;
maxLife:number;
}

let shooting: ShootingStar | null = null;
let nextShootingStar = performance.now() + 600;

const glows:Glow[]=[];
let nextGlow = performance.now() + 500;

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use non-nullable local references so TypeScript knows these
    // won't be null inside nested functions/closures.
    const canvasEl = canvas as HTMLCanvasElement;
    const context = ctx as CanvasRenderingContext2D;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvasEl.width = width;
    canvasEl.height = height;

    const STAR_COUNT = width < 768 ? 25 : 50;
    const CONNECTION_DISTANCE = 140;

    const stars: Star[] = [];

    function createStars() {
      stars.length = 0;

      for (let i = 0; i < STAR_COUNT; i++) {

        let x = 0;
        let y = 0;

        const safeZoneWidth = width * 0.42;
        const safeZoneHeight = height * 0.48;

        do {
            x = Math.random() * width;
            y = Math.random() * height;
        } while (
            x > width / 2 - safeZoneWidth / 2 &&
            x < width / 2 + safeZoneWidth / 2 &&
            y > height / 2 - safeZoneHeight / 2 &&
            y < height / 2 + safeZoneHeight / 2
        );

        stars.push({
            x,
            y,

            vx: (Math.random() - 0.5) * 0.03,
            vy: (Math.random() - 0.5) * 0.03,

            radius: Math.random() * 1.5 + 1,

            color:
            Math.random() < 0.18
                ? "rgba(34,197,94,0.85)"
                : "rgba(255,255,255,0.82)",

        twinkle: Math.random() < 0.15,
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.5 + Math.random() * 1.2
        });

        }
    }

    createStars();

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;

      canvasEl.width = width;
      canvasEl.height = height;

      createStars();
    }

    window.addEventListener("resize", resize);

    let animationFrame: number;

    function animate() {
      context.clearRect(0, 0, width, height);

      const now = performance.now();

      if (!shooting && now > nextShootingStar) {

    shooting = {

        x: Math.random() * width * 0.6,

        y: Math.random() * height * 0.35,

        vx: 9,

        vy: 5,

        length: 120,

        life: 0,

        maxLife: 45,

    };

    nextShootingStar = now + 6000 + Math.random() * 4000;

}

        if (now > nextGlow && glows.length < 2) {

            const glowCount = Math.random() < 0.35 ? 2 : 1;

            for (let i = 0; i < glowCount && glows.length < 2; i++) {
                let x = 0;
                let y = 0;
                let validPosition = false;

                while (!validPosition) {
                    x = Math.random() * width;
                    y = Math.random() * height;
                    validPosition = true;
                    for (const existing of glows) {

                        const dx = x - existing.x;
                        const dy = y - existing.y;
                        if (Math.sqrt(dx * dx + dy * dy) < 350) {
                            validPosition = false;
                            break;
                        }
                    }
                }
                glows.push({
                    x,
                    y,
                    radius: 0,
                    life: 0,
                    maxLife: 360,
                });
            }
            nextGlow = now + 7000 + Math.random() * 4000;
        }

      for (const glow of glows) {
        glow.life++;
        const progress = glow.life / glow.maxLife;
        const eased = 1 - Math.pow(1 - progress, 3);
        glow.radius = 100 + eased * 200;
        const opacity = Math.pow(Math.sin(progress * Math.PI), 1.8) * 0.09;
        const gradient = context.createRadialGradient(
            glow.x,
            glow.y,
            0,
            glow.x,
            glow.y,
            glow.radius
        );

        gradient.addColorStop(
            0,
            `rgba(34,197,94,${opacity})`
        );

        gradient.addColorStop(
            0.2,
            `rgba(34,197,94,${opacity * 0.6})`
        );

        gradient.addColorStop(
            0.5,
            `rgba(34,197,94,${opacity * 0.15})`
        );

        gradient.addColorStop(
            1,
            "rgba(34,197,94,0)"
        );

        context.fillStyle = gradient;

        context.fillRect(
            0,
            0,
            width,
            height
        );

    }

      //--------------------------
      // Stars
      //--------------------------

      for (const star of stars) {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > width) star.vx *= -1;
        if (star.y < 0 || star.y > height) star.vy *= -1;

        const brightness = star.twinkle
            ? 0.65 + 0.35 * Math.sin(performance.now() * 0.001 * star.twinkleSpeed + star.twinkleOffset)
            : 1;

        context.globalAlpha = brightness;

        context.beginPath();

        context.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI * 2
        );

        context.fillStyle = star.color;

        context.fill();

        context.globalAlpha = 1;
      }

      if (shooting) {

    shooting.life++;

    shooting.x += shooting.vx;

    shooting.y += shooting.vy;

    const alpha = 1 - shooting.life / shooting.maxLife;

    context.strokeStyle = `rgba(255,255,255,${alpha})`;

    context.lineWidth = 2;

    context.beginPath();

    context.moveTo(shooting.x, shooting.y);

    context.lineTo(

        shooting.x - shooting.length,

        shooting.y - shooting.length * 0.55

    );

    context.stroke();

    if (shooting.life >= shooting.maxLife) {

        shooting = null;

    }

}

      //--------------------------
      // Connections
      //--------------------------

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const opacity =
              (1 - dist / CONNECTION_DISTANCE) * 0.11;

            context.beginPath();

            context.moveTo(
              stars[i].x,
              stars[i].y
            );

            context.lineTo(
              stars[j].x,
              stars[j].y
            );
            context.strokeStyle = `rgba(255,255,255,${opacity})`;

            context.lineWidth = 0.4;

            context.stroke();
          }
        }
      }
      for (let i = glows.length - 1; i >= 0; i--) {
        if (glows[i].life >= glows[i].maxLife) {
            glows.splice(i,1);
            }
        }
      animationFrame = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 350, 1);

      canvas.style.opacity = `${1 - progress}`;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        absolute
        inset-0
        w-full
        h-full
        pointer-events-none
        transition-opacity
        duration-300
      "
    />
  );
};

export default HeroBackground;