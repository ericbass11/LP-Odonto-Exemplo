
import { Feature, Specialty, Testimonial, FAQItem } from './types';

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Scanner Intraoral 3D',
    description: 'Adeus às massas de moldagem. Precisão milimétrica em segundos através de mapeamento digital completo.',
    icon: 'scan'
  },
  {
    id: '2',
    title: 'Planejamento Digital',
    description: 'Visualize seu novo sorriso antes mesmo de iniciar o tratamento com nosso protocolo DSD (Digital Smile Design).',
    icon: 'computer'
  },
  {
    id: '3',
    title: 'Protocolo Sem Dor',
    description: 'Anestesia computadorizada e técnicas minimamente invasivas para garantir seu total conforto absoluto.',
    icon: 'shield_with_heart'
  }
];

export const SPECIALTIES: Specialty[] = [
  {
    id: 'lentes',
    title: 'Lentes de Contato',
    description: 'Transformação estética imediata com facetas de porcelana ultrafinas.',
    icon: 'clinical_notes'
  },
  {
    id: 'implantes',
    title: 'Implantes Dentários',
    description: 'Recupere sua mastigação e confiança com tecnologia guiada por computador.',
    icon: 'dentistry'
  },
  {
    id: 'harmonizacao',
    title: 'Harmonização Facial',
    description: 'Equilíbrio e beleza para os traços do seu rosto com naturalidade.',
    icon: 'face_retouching_natural'
  },
  {
    id: 'invisalign',
    title: 'Invisalign',
    description: 'Alinhadores invisíveis para corrigir seu sorriso com conforto e discrição.',
    icon: 'align_horizontal_center'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana S.',
    role: 'Empresária',
    rating: 5,
    content: 'O atendimento é impecável. Fiz minhas lentes de contato e o resultado superou todas as expectativas. O planejamento digital me deixou muito segura.'
  },
  {
    id: '2',
    name: 'Ricardo A.',
    role: 'Advogado',
    rating: 5,
    content: 'Nunca imaginei que um tratamento de canal ou implante pudesse ser tão tranquilo. A tecnologia deles realmente faz a diferença no conforto.'
  },
  {
    id: '3',
    name: 'Ana Luíza',
    role: 'Médica',
    rating: 5,
    content: 'A melhor clínica de Montes Claros. Localização privilegiada no Ibituruna e uma equipe extremamente atenciosa e qualificada.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Como funciona a primeira consulta?',
    answer: 'Nossa primeira consulta é uma experiência de diagnóstico completa. Realizamos o escaneamento intraoral 3D e fotografias profissionais para criar seu prontuário digital. Discutimos suas expectativas e apresentamos um plano de tratamento personalizado.'
  },
  {
    question: 'Quais tecnologias são utilizadas nos tratamentos?',
    answer: 'Utilizamos o que há de mais moderno na odontologia mundial: Scanners Intraorais, Planejamento Digital do Sorriso (DSD), Cirurgia Guiada por Computador e Anestesia Computadorizada.'
  },
  {
    question: 'A clínica realiza sedação para pacientes com medo?',
    answer: 'Sim, oferecemos protocolos de sedação consciente acompanhados por especialistas, garantindo que você realize seu tratamento de forma relaxada e segura.'
  },
  {
    question: 'Como chegar à clínica no Ibituruna?',
    answer: 'Estamos localizados no coração do bairro Ibituruna, a região mais nobre de Montes Claros. Dispomos de estacionamento privativo e fácil acesso pelas principais vias.'
  }
];

export const INSURANCES = [
  { name: 'Bradesco', type: 'Dental', color: '#1b4389' },
  { name: 'Amil', type: 'Dental', color: '#00a1e4' },
  { name: 'Uniodonto', type: '', color: '#00693e' },
  { name: 'SulAmérica', type: '', color: '#0054a6' },
  { name: 'Porto Seguro', type: '', color: '#e5202e' },
  { name: 'MetLife', type: '', color: '#003057' },
  { name: 'BB Dental', type: '', color: '#003399' },
  { name: 'OdontoPrev', type: '', color: '#3d85c6' },
  { name: 'Interodonto', type: '', color: '#0089d0' },
  { name: 'Cassi', type: '', color: '#00a859' }
];
