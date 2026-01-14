// components/ServicesSection.js
import React from 'react';

export default function ServicesSection() {
  return (
    <section className="py-16  sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
      
        <div className="text-center mb-22 sm:mb-26">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
              {/* Red Star Icon */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z"
                  fill="#EF4444"
                  className="drop-shadow-lg"
                />
              </svg>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Services
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Vad gör ParkPro?
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8  sm:space-y-10 lg:space-y-12 max-w-6xl mx-auto">
          {/* Service 1 */}
          <div className="grid md:grid-cols-12 gap-4 sm:gap-6 items-start">
            <div className="md:col-span-5">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black flex items-center">
               Varför ParkPro?
                <span className="ml-16 text-3xl sm:text-4xl font-light text-gray-800">-</span>
              </h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
               Mindre administration och snabbare åtgärder Transparent hantering som minskar konflikter Anpassad för svenska parkeringsregler och arbetssätt Utvecklad för faktiska behov i vardagen. ParkPro ersätter manuella processer med ett digitalt flöde som faktiskt fungerar.
              </p>
            </div>
          </div>

          {/* Divider */}
          {/* <div className="border-t border-gray-200"></div> */}

          {/* Service 2 */}
          <div className="grid md:grid-cols-12 gap-4 sm:gap-6 items-start">
            <div className="md:col-span-5">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black flex items-center">
                <span className="leading-tight">Nyckelfunktioner</span>
                <span className="ml-40 text-3xl sm:text-4xl font-light text-gray-800">-</span>
              </h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
               Snabb och enkel rapportering
Anmäl ett parkeringsproblem på under en minut direkt i appen. Inga telefonköer, inga krångliga formulär.
Spårbara ärenden i realtid
Följ hela processen i appen från rapportering till åtgärd. Du får uppdateringar och tydlig status längs vägen.
Direkt till rätt aktör
Rapporten skickas automatiskt till rätt mottagare, såsom kommun, parkeringsbolag .
Det sparar tid, minskar missförstånd och ger snabbare resultat.
              </p>
            </div>
          </div>

          {/* Divider */}
          {/* <div className="border-t border-gray-200"></div> */}

          {/* Service 3 */}
          <div className="grid md:grid-cols-12 gap-4 sm:gap-6 items-start">
            <div className="md:col-span-5">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black flex items-center">
                <span className="leading-tight">
GDPR & integritet</span>
                <span className="ml-32 text-3xl sm:text-4xl font-light text-gray-800">-</span>
              </h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              ParkPro har ett högt dataskydd och följer dataskyddsförordningen (GDPR).
Endast nödvändiga personuppgifter behandlas och används enbart för tjänstens syfte.
All information hanteras säkert och skyddas genom tekniska och organisatoriska säkerhetsåtgärder.
Användare kan när som helst begära information om, eller radering av, sina uppgifter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}