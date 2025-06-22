import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../components/AnimatedSection';

const Biography = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-secondary text-gray-800 min-h-screen">
      <AnimatedSection className="py-20 px-4 text-center bg-gradient-to-b from-secondary-accent to-white">
        <h1 className="text-5xl font-bold mb-4 text-primary-dark">{t('biography.title')}</h1>
      </AnimatedSection>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <img 
                src={process.env.PUBLIC_URL + '/claudia-britoss.jpg'} 
                alt={t('biography.name')} 
                className="w-64 h-64 rounded-full object-cover shadow-lg mb-6 md:mb-0 md:mr-8"
              />
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2 text-primary-dark">{t('biography.name')}</h2>
                <p className="text-xl text-gray-600">{t('biography.subtitle')}</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary-dark">{t('biography.storyTitle') || 'Mi Historia'}</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">{t('biography.story')}</p>
            <p className="text-gray-700 mb-4 leading-relaxed">{t('biography.training')}</p>
            <p className="text-gray-700 leading-relaxed">{t('biography.philosophy')}</p>
          </AnimatedSection>

          <AnimatedSection className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary-dark">{t('biography.certifications')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t('biography.certifications.list', { returnObjects: true }).map((cert, index) => (
                <div key={index} className="flex items-center p-3 bg-primary-light rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Biography; 