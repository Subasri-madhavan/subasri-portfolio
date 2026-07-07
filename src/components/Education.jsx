import { education, achievementsList, additionalKnowledge } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Education
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Academic Background
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            My current degree, achievements, and practical interests from my resume.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-8">
          <div data-aos="fade-up" data-aos-delay="100" className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-500">
            <span className="text-red-400 text-xs font-black tracking-widest uppercase">Current Program</span>
            <h3 className="text-white text-3xl md:text-4xl font-black mt-4 mb-3 tracking-tight">
              {education.degree}
            </h3>
            <p className="text-white/70 text-base md:text-lg font-semibold mb-4">
              {education.institution}
            </p>
            <p className="text-white/45 text-sm font-mono font-bold tracking-wider uppercase">
              {education.duration}
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="bg-[#ff2a2a] rounded-3xl p-8 md:p-10 text-white shadow-[0_20px_50px_rgba(255,42,42,0.2)]">
            <span className="text-black/60 text-xs font-black tracking-widest uppercase">Achievements</span>
            <div className="mt-5 flex flex-col gap-4">
              {achievementsList.map((achievement) => (
                <div key={achievement.title} className="border-b border-white/20 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="bg-black/20 text-white text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full">
                      {achievement.badge}
                    </span>
                    <h3 className="text-white text-lg font-black tracking-tight">{achievement.title}</h3>
                  </div>
                  <p className="text-red-50 text-sm font-semibold leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
            <h3 className="text-white text-xl font-black uppercase tracking-tight mb-5">Additional Knowledge</h3>
            <div className="flex flex-wrap gap-2">
              {additionalKnowledge.knowledge.map((item) => (
                <span key={item} className="px-3 py-1 text-xs font-bold text-white/70 bg-white/5 rounded-full border border-white/10">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
            <h3 className="text-white text-xl font-black uppercase tracking-tight mb-5">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {additionalKnowledge.interests.map((item) => (
                <span key={item} className="px-3 py-1 text-xs font-bold text-white/70 bg-white/5 rounded-full border border-white/10">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
