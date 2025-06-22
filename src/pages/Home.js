import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../components/AnimatedSection';
// import MusicPlayer from '../components/MusicPlayer';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* <MusicPlayer /> */}
      <main>
        {/* Hero Section */}
        <AnimatedSection className="py-32 px-4 text-center bg-gradient-to-b from-secondary to-white">
          <h1 className="text-6xl font-bold mb-6 text-primary-dark">{t('home.title')}</h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">{t('home.subtitle')}</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold text-lg">
              {t('common.bookNow')}
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold text-lg">
              {t('common.learnMore')}
            </button>
          </div>
        </AnimatedSection>

        {/* What is Reiki Section */}
        <AnimatedSection className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-center text-primary-dark">{t('home.intro.title')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {t('home.intro.description')}
            </p>
          </div>
        </AnimatedSection>

        {/* How Remote Reiki Works */}
        <AnimatedSection className="py-20 px-4 bg-secondary">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-center text-primary-dark">{t('home.how.title')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {t('home.how.description')}
            </p>
          </div>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary-dark">{t('home.benefits.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t('home.benefits.list', { returnObjects: true }).map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection className="py-20 px-4 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-6">{t('home.cta.title') || '¿Listo para comenzar tu viaje de sanación?'}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('home.cta.description') || 'Experimenta el poder transformador del Reiki remoto desde la comodidad de tu espacio.'}
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-semibold text-lg">
              {t('common.bookNow')}
            </button>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
};

export default Home; 