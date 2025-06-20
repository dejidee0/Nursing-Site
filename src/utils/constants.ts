export const COLORS = {
  primary: '#10B981',
  primaryDark: '#059669',
  secondary: '#34D399',
  accent: '#6EE7B7',
  white: '#FFFFFF',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    600: '#4B5563',
    700: '#374151',
    900: '#111827'
  }
};

export const STATS = [
  {
    number: '300,000+',
    label: 'Certified Professionals',
    description: 'Trusted nationwide'
  },
  {
    number: '98%',
    label: 'Exam Pass Rate',
    description: 'In 2024'
  },
  {
    number: '50,000+',
    label: 'New Registrations',
    description: 'This year'
  }
];

export const NEWS_EVENTS = [
  {
    id: '1',
    title: 'Advanced Midwifery Certification',
    description: 'Enhance your skills with our comprehensive certification program',
    deadline: 'July 10, 2025',
    type: 'certification' as const,
    isNew: true,
    registrationUrl: '/register'
  },
  {
    id: '2',
    title: 'Digital Nursing Skills Workshop',
    description: 'Interactive live webinar covering latest digital healthcare tools',
    deadline: 'June 30, 2025',
    type: 'workshop' as const,
    isNew: true,
    registrationUrl: '/register'
  },
  {
    id: '3',
    title: 'Community Nursing Examination',
    description: 'Register for the upcoming community nursing certification exam',
    deadline: 'July 15, 2025',
    type: 'exam' as const,
    isNew: false,
    registrationUrl: '/register'
  }
];