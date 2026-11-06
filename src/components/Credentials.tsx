import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { certifications, education } from "@/lib/constant";

export default function Credentials() {
  return (
    <section id="credentials" className="border-t border-border py-24 md:py-36">
      <div className="container-x">
        <SectionHeader
          index="05"
          label="Learning"
          title={
            <>
              Always <em className="text-accent">levelling up</em>
            </>
          }
          intro="A science degree taught me rigour. Continuous, structured learning keeps the craft sharp."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal className="card-surface h-fit p-8">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background text-accent">
              <GraduationCap size={20} strokeWidth={1.6} />
            </span>
            <p className="eyebrow mt-8">Education · {education.period}</p>
            <h3 className="mt-3 text-2xl font-medium tracking-tight">{education.school}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{education.degree}</p>
            <p className="mt-6 font-mono text-xs text-muted-foreground">{education.location}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="border-t border-border">
              {certifications.map((c) => (
                <li
                  key={c.title + c.issuer}
                  className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-border py-5 sm:grid-cols-[1.3fr_1fr_auto]"
                >
                  <span className="font-medium tracking-tight transition-colors group-hover:text-accent">
                    {c.title}
                  </span>
                  <span className="hidden text-sm text-muted-foreground sm:block">{c.issuer}</span>
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">{c.date}</span>
                  <span className="col-span-2 -mt-3 text-sm text-muted-foreground sm:hidden">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
