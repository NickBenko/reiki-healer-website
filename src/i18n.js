import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.biography': 'Biography',
      'nav.contact': 'Contact',
      'nav.language': 'Language',
      
      // Home page
      'home.title': 'Welcome to Spiritual Healing',
      'home.subtitle': 'Professional Remote Reiki Services',
      'home.intro.title': 'What is Reiki?',
      'home.intro.description': 'Reiki is a Japanese form of energy healing, a type of alternative medicine. Reiki practitioners use a technique called palm healing or hands-on healing through which a "universal energy" is said to be transferred through the palms of the practitioner to the patient in order to encourage emotional or physical healing.',
      'home.how.title': 'How Remote Reiki Works',
      'home.how.description': 'Remote Reiki works through the principle of quantum entanglement and the interconnectedness of all energy. Even at a distance, the practitioner can channel healing energy to you, creating the same benefits as an in-person session. The energy transcends physical boundaries and reaches you wherever you are.',
      'home.benefits.title': 'Benefits of Reiki',
      'home.benefits.list': [
        'Reduces stress and anxiety',
        'Promotes deep relaxation',
        'Accelerates natural healing',
        'Balances energy centers (chakras)',
        'Improves sleep quality',
        'Enhances emotional well-being'
      ],
      'home.cta.title': 'Ready to start your healing journey?',
      'home.cta.description': 'Let me guide you towards well-being. Book your remote Reiki session and experience a positive transformation in your life.',
      
      // Services page
      'services.title': 'Our Services',
      'services.subtitle': 'Professional Remote Reiki Healing Sessions',
      'services.session30.title': '30-Minute Remote Session',
      'services.session30.description': 'A quick and effective session to bring balance and peace to your day. Perfect for daily stress relief and energy maintenance.',
      'services.session30.price': '$45',
      'services.session60.title': '60-Minute Full Session',
      'services.session60.description': 'A comprehensive healing session that addresses multiple areas of concern. Ideal for deep healing and chakra balancing.',
      'services.session60.price': '$75',
      'services.chakra.title': 'Chakra Alignment',
      'services.chakra.description': 'A focused session to align your chakras and restore energy flow. Helps clear blockages and restore natural energy balance.',
      'services.chakra.price': '$85',
      'services.pets.title': 'Reiki for Pets',
      'services.pets.description': 'Gentle and safe energy healing for your beloved animal companions. Helps with anxiety, healing, and overall well-being.',
      'services.pets.price': '$35',
      'services.package.title': 'Healing Package (3 Sessions)',
      'services.package.description': 'A series of three sessions for ongoing healing and transformation. Best value for long-term wellness.',
      'services.package.price': '$180',
      
      // Biography page
      'biography.title': 'About the Practitioner',
      'biography.name': 'Claudia Beatriz Britos',
      'biography.subtitle': 'Certified Reiki Master & Energy Healer',
      'biography.story': 'Claudia Beatriz Britos is a Reiki Master with over 10 years of experience supporting healing and personal growth. Her calling was born from a deep desire to help others reconnect with their inner peace and vital energy.',
      'biography.training': 'Claudia has trained in traditional Usui Reiki, energy healing techniques, and spiritual development. She has participated in retreats, workshops, and courses with renowned teachers, integrating meditation, conscious breathing, and chakra harmonization tools.',
      'biography.philosophy': 'Her approach is loving, empathetic, and personalized. She firmly believes that everyone has the potential to heal and transform their life. Claudia supports her clients with respect, active listening, and a deep spiritual connection.',
      'biography.certifications': 'Certifications & Training',
      'biography.certifications.list': [
        'Reiki Master Level III (Usui Shiki Ryoho)',
        'Advanced Energy Healing Certification',
        'Chakra Balancing Specialist',
        'Animal Reiki Practitioner',
        'Crystal Healing Certification'
      ],
      'biography.storyTitle': 'My Story',
      
      // Contact page
      'contact.title': 'Get in Touch',
      'contact.subtitle': 'Ready to begin your healing journey?',
      'contact.description': 'I\'m here to support you on your path to wellness. Whether you have questions about Reiki, want to schedule a session, or simply need guidance, please don\'t hesitate to reach out.',
      'contact.form.name': 'Full Name',
      'contact.form.email': 'Email Address',
      'contact.form.phone': 'Phone Number (optional)',
      'contact.form.service': 'Service of Interest',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Send Message',
      'contact.info.title': 'Contact Information',
      'contact.info.email': 'Email',
      'contact.info.phone': 'Phone',
      'contact.info.hours': 'Available Hours',
      'contact.info.hours.detail': 'Monday - Friday: 9 AM - 7 PM\nSaturday: 10 AM - 5 PM\nSunday: By appointment only',
      'contact.info.response': 'I typically respond within 24 hours during business days.',
      'contact.form.title': 'Send me a message for inquiries or booking',
      
      // Common
      'common.bookNow': 'Book Now',
      'common.learnMore': 'Learn More',
      'common.backToTop': 'Back to Top',
      'common.footer.text': '© 2024 Spiritual Healing. All rights reserved.',
      'common.loading': 'Loading...'
    }
  },
  es: {
    translation: {
      // Navigation
      'nav.home': 'Inicio',
      'nav.services': 'Servicios',
      'nav.biography': 'Biografía',
      'nav.contact': 'Contacto',
      'nav.language': 'Idioma',
      
      // Home page
      'home.title': 'Bienvenido a Sanación Espiritual',
      'home.subtitle': 'Servicios Profesionales de Reiki Remoto',
      'home.intro.title': '¿Qué es el Reiki?',
      'home.intro.description': 'El Reiki es una forma japonesa de sanación energética, un tipo de medicina alternativa. Los practicantes de Reiki utilizan una técnica llamada sanación con las palmas o sanación manual a través de la cual se dice que se transfiere una "energía universal" desde las palmas del practicante al paciente para fomentar la sanación emocional o física.',
      'home.how.title': 'Cómo Funciona el Reiki Remoto',
      'home.how.description': 'El Reiki remoto funciona a través del principio del entrelazamiento cuántico y la interconexión de toda la energía. Incluso a distancia, el practicante puede canalizar energía sanadora hacia ti, creando los mismos beneficios que una sesión presencial. La energía trasciende los límites físicos y te alcanza dondequiera que estés.',
      'home.benefits.title': 'Beneficios del Reiki',
      'home.benefits.list': [
        'Reduce el estrés y la ansiedad',
        'Promueve la relajación profunda',
        'Acelera la sanación natural',
        'Equilibra los centros energéticos (chakras)',
        'Mejora la calidad del sueño',
        'Mejora el bienestar emocional'
      ],
      'home.cta.title': '¿Listo para comenzar tu proceso de sanación?',
      'home.cta.description': 'Permíteme acompañarte en tu camino hacia el bienestar. Agenda tu sesión de Reiki a distancia y experimenta una transformación positiva en tu vida.',
      
      // Services page
      'services.title': 'Nuestros Servicios',
      'services.subtitle': 'Sesiones Profesionales de Sanación Reiki Remoto',
      'services.session30.title': 'Sesión Remota de 30 Minutos',
      'services.session30.description': 'Una sesión rápida y efectiva para traer equilibrio y paz a tu día. Perfecta para el alivio del estrés diario y el mantenimiento energético.',
      'services.session30.price': '$45',
      'services.session60.title': 'Sesión Completa de 60 Minutos',
      'services.session60.description': 'Una sesión de sanación integral que aborda múltiples áreas de preocupación. Ideal para la sanación profunda y el equilibrio de chakras.',
      'services.session60.price': '$75',
      'services.chakra.title': 'Alineación de Chakras',
      'services.chakra.description': 'Una sesión enfocada para alinear tus chakras y restaurar el flujo energético. Ayuda a limpiar bloqueos y restaurar el equilibrio energético natural.',
      'services.chakra.price': '$85',
      'services.pets.title': 'Reiki para Mascotas',
      'services.pets.description': 'Sanación energética gentil y segura para tus queridos compañeros animales. Ayuda con la ansiedad, la sanación y el bienestar general.',
      'services.pets.price': '$35',
      'services.package.title': 'Paquete de Sanación (3 Sesiones)',
      'services.package.description': 'Una serie de tres sesiones para la sanación y transformación continua. Mejor valor para el bienestar a largo plazo.',
      'services.package.price': '$180',
      
      // Biography page
      'biography.title': 'Sobre la Practicante',
      'biography.name': 'Claudia Beatriz Britos',
      'biography.subtitle': 'Maestra de Reiki Certificada y Sanadora Energética',
      'biography.story': 'Claudia Beatriz Britos es Maestra de Reiki con más de 10 años de experiencia acompañando procesos de sanación y crecimiento personal. Su vocación nació del deseo profundo de ayudar a otros a reconectar con su paz interior y su energía vital.',
      'biography.training': 'Claudia se ha formado en Reiki Usui tradicional, técnicas de sanación energética y desarrollo espiritual. Ha participado en retiros, talleres y cursos con reconocidos maestros, integrando herramientas de meditación, respiración consciente y armonización de chakras.',
      'biography.philosophy': 'Su enfoque es amoroso, empático y personalizado. Cree firmemente que cada persona tiene el potencial de sanar y transformar su vida. Claudia acompaña a sus consultantes con respeto, escucha activa y una profunda conexión espiritual.',
      'biography.certifications': 'Certificaciones y Entrenamiento',
      'biography.certifications.list': [
        'Maestra de Reiki Nivel III (Usui Shiki Ryoho)',
        'Certificación en Sanación Energética Avanzada',
        'Especialista en Equilibrio de Chakras',
        'Practicante de Reiki para Animales',
        'Certificación en Sanación con Cristales'
      ],
      'biography.storyTitle': 'Mi historia',
      
      // Contact page
      'contact.title': 'Ponte en Contacto',
      'contact.subtitle': '¿Listo para comenzar tu viaje de sanación?',
      'contact.description': 'Estoy aquí para apoyarte en tu camino hacia el bienestar. Ya sea que tengas preguntas sobre Reiki, quieras programar una sesión, o simplemente necesites orientación, no dudes en contactarme.',
      'contact.form.name': 'Nombre Completo',
      'contact.form.email': 'Dirección de Email',
      'contact.form.phone': 'Número de Teléfono (opcional)',
      'contact.form.service': 'Servicio de Interés',
      'contact.form.message': 'Mensaje',
      'contact.form.submit': 'Enviar Mensaje',
      'contact.info.title': 'Información de Contacto',
      'contact.info.email': 'Email',
      'contact.info.phone': 'Teléfono',
      'contact.info.hours': 'Horarios Disponibles',
      'contact.info.hours.detail': 'Lunes - Viernes: 9 AM - 7 PM\nSábado: 10 AM - 5 PM\nDomingo: Solo con cita previa',
      'contact.info.response': 'Típicamente respondo dentro de 24 horas durante días laborables.',
      'contact.form.title': 'Envíame un mensaje de consulta o reserva',
      
      // Common
      'common.bookNow': 'Reservar Ahora',
      'common.learnMore': 'Saber Más',
      'common.backToTop': 'Volver Arriba',
      'common.footer.text': '© 2024 Sanación Espiritual. Todos los derechos reservados.',
      'common.loading': 'Cargando...'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n; 