import Reveal from "./Reveal";

type Props = {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  aside?: React.ReactNode;
};

export default function SectionHeader({ index, label, title, intro, aside }: Props) {
  return (
    <div className="mb-12 md:mb-16 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
      <Reveal>
        <p className="eyebrow mb-5 flex items-center gap-3">
          <span className="text-accent">{index}</span>
          <span className="h-px w-8 bg-border" aria-hidden />
          {label}
        </p>
        <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.25rem)] leading-[1] tracking-[-0.01em] text-balance">
          {title}
        </h2>
        {intro && (
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground text-pretty">
            {intro}
          </p>
        )}
      </Reveal>
      {aside && <Reveal delay={0.1}>{aside}</Reveal>}
    </div>
  );
}
