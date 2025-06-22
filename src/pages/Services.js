import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../components/AnimatedSection';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'session30',
      image: '/servicio-30min.jpg',
      title: t('services.session30.title'),
      description: t('services.session30.description'),
      price: t('services.session30.price')
    },
    {
      id: 'session60',
      image: '/servicio-60min.jpg',
      title: t('services.session60.title'),
      description: t('services.session60.description'),
      price: t('services.session60.price')
    },
    {
      id: 'chakra',
      image: '/chakras.jpg',
      title: t('services.chakra.title'),
      description: t('services.chakra.description'),
      price: t('services.chakra.price')
    },
    {
      id: 'pets',
      image: '/reiki-mascotas.jpg',
      title: t('services.pets.title'),
      description: t('services.pets.description'),
      price: t('services.pets.price')
    },
    {
      id: 'package',
      image: '/paquete-sesiones.jpg',
      title: t('services.package.title'),
      description: t('services.package.description'),
      price: t('services.package.price')
    }
  ];

  return (
    <div className="bg-secondary text-gray-800 min-h-screen">
      <AnimatedSection className="py-20 px-4 text-center bg-gradient-to-b from-secondary-accent to-white">
        <h1 className="text-5xl font-bold mb-4 text-primary-dark">{t('services.title')}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('services.subtitle')}</p>
      </AnimatedSection>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-semibold">
                  {service.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary-dark">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors font-semibold">
                  {t('common.bookNow')}
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 