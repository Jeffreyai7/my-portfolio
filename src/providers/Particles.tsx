"use client";

import { useEffect, useMemo, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";
import {
  MoveDirection,
  OutMode,
  type ISourceOptions,
} from "@tsparticles/engine";

type Props = {
  children: React.ReactNode;
};

export const ParticlesBackground = ({ children }: Props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "hsl(var(--background))" }, // dynamic theme
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "hsl(var(--primary))" },
        links: {
          color: "hsl(var(--primary))",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          speed: 3,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 80,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="relative h-full w-full">
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          style={{
            position: "absolute",
            zIndex: 0,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
