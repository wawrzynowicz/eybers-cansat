import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

const descriptionEN = `We would like to sincerely thank our team supervisor, Dr. Eng. Dariusz Janiszewski, as well as Poznań University of Technology, which he represents, for all the support provided throughout the project. Without his help, our achievements would have been much more difficult to accomplish, and the entire development process would have been significantly more challenging.

Dr. Janiszewski enabled us to secure funding for components through the university, provided access to facilities and specialized equipment, and devoted a considerable amount of his private time to offer invaluable substantive support. He assisted us both with practical tasks, such as soldering components, and with solving the many technical problems we encountered along the way.

We could always count on his support, and his extensive knowledge and experience played a crucial role during the key moments of the project. We are deeply grateful not only for his dedication but also for the opportunities provided by Poznań University of Technology — access to infrastructure, resources, and an inspiring environment for growth.

We are very thankful for the opportunity to collaborate over the past months and hope to continue this cooperation—especially if we qualify for the finals, which we are optimistic about. We look forward to more shared projects and experiences in the future.`;

const descriptionPL = `Serdecznie dziękujemy naszemu opiekunowi drużyny, dr. inż. Dariuszowi Janiszewskiemu, a także Politechnice Poznańskiej, której jest przedstawicielem, za wszelką pomoc udzieloną w trakcie realizacji projektu. Bez jego wsparcia nasze sukcesy byłyby znacznie trudniejsze do osiągnięcia, a sam proces tworzenia projektu o wiele bardziej skomplikowany.

Pan Doktor umożliwił nam uzyskanie finansowania komponentów przez Politechnikę, zapewnił dostęp do pomieszczeń oraz specjalistycznego sprzętu, a także poświęcił nam wiele swojego prywatnego czasu, oferując nieocenioną pomoc merytoryczną. Wspierał nas zarówno w praktycznych zadaniach, takich jak lutowanie komponentów, jak i w rozwiązywaniu licznych problemów technicznych, z którymi się mierzyliśmy.

Zawsze mogliśmy liczyć na jego pomoc, a jego ogromna wiedza i doświadczenie odegrały kluczową rolę w przełomowych momentach projektu. Jesteśmy niezwykle wdzięczni nie tylko za jego zaangażowanie, ale również za możliwości, jakie dała nam Politechnika Poznańska — dostęp do zaplecza, zasobów oraz inspirującego środowiska do rozwoju.

Dziękujemy za możliwość współpracy w minionych miesiącach i mamy nadzieję, że będziemy mogli ją kontynuować — szczególnie jeśli uda nam się zakwalifikować do finału, na co liczymy z dużą nadzieją. Z niecierpliwością czekamy na kolejne wspólne projekty i doświadczenia w przyszłości.`;

export default function TeamSupervisorCard({ supervisor }) {
  const { language } = useLanguage();

  const description = language === 'pl' ? descriptionPL : descriptionEN;
  const thankYouTitle = language === 'pl' ? 'Wielkie podziękowania' : 'A huge thank you';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-24"
    >
      {/* Section label */}
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 uppercase tracking-[0.3em] text-xs mb-10 font-bold text-center">
        Team Supervisor
      </p>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left: photo */}
        <div className="w-full md:w-72 flex-shrink-0 mx-auto md:mx-0">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
            {supervisor.image_url_1 ? (
              <img
                src={supervisor.image_url_1}
                alt={supervisor.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-white/[0.02] flex items-center justify-center">
                <User className="w-12 h-12 text-white/10" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* PUT logo — bottom right */}
            <div className="absolute bottom-3 right-3 w-14 h-14 rounded-full overflow-hidden shadow-lg">
              <img
                src="https://media.base44.com/images/public/6931f02077d600a24db95382/9dc772ebd_putlogozw_Nero_AI_Background_Remover_transparent.png"
                alt="Politechnika Poznańska"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Name below photo */}
          <p className="text-white text-center mt-3 font-medium">dr inż. Dariusz Janiszewski</p>
        </div>

        {/* Right: text */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {thankYouTitle}
          </h3>
          <div className="space-y-4">
            {description.split('\n\n').map((para, i) => (
              <p key={i} className="text-white/70 text-sm leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px bg-white/10 w-full mt-16" />
    </motion.div>
  );
}