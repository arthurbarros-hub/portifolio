import { SiGithub, SiGit, SiIntellijidea, SiMysql, SiOpenjdk, SiSpringboot } from 'react-icons/si';

import { SectionContainer } from '@/components/ui/SectionContainer';

const focusItems = [
  { name: 'Java', icon: SiOpenjdk, color: '#4DA3D9' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'MySQL', icon: SiMysql, color: '#00758F' },
];

const complementaryItems = [
  { name: 'Programação Orientada a Objetos' },
  { name: 'SQL' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#EDEDED' },
  { name: 'IntelliJ IDEA', icon: SiIntellijidea, color: '#C77DFF' },
];

export const TechStackSection = () => {
  return (
    <SectionContainer id="tecnologias" as="section" className="relative overflow-hidden scroll-mt-24 py-12 sm:py-14 lg:py-16">
      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(17,24,39,0.9),rgba(10,14,24,0.92))] px-4 py-4 sm:px-5 sm:py-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
          />
          <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl" />

          <header className="text-center">
            <h2 className="text-xl font-semibold text-fg sm:text-2xl">Foco atual de estudos</h2>
            <p className="mt-1 text-sm text-muted sm:text-base">Construindo minha base em Back-End Java.</p>
          </header>

          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3" aria-label="Tecnologias principais">
            {focusItems.map((item) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.name}
                  className="group flex min-h-[80px] items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-2 transition-colors duration-300 hover:border-accent/40"
                >
                  <Icon size={36} color={item.color} aria-hidden="true" />
                  <span className="text-[0.9rem] font-medium text-fg">{item.name}</span>
                </li>
              );
            })}
          </ul>

          <div className="mt-3 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

          <ul className="mt-3 flex flex-wrap items-center justify-center gap-1.5" aria-label="Conhecimentos complementares">
            {complementaryItems.map((item) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface/70 px-2.5 py-1 text-[0.72rem] text-muted"
                >
                  {Icon ? <Icon size={13} color={item.color} aria-hidden="true" /> : null}
                  <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};
