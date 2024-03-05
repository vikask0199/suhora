import agri from "../assets/img/industries/agri.webp";
import defence from "../assets/img/industries/defense.webp";
import disaster from "../assets/img/industries/disaster.webp";
import energy from "../assets/img/industries/energy.webp";
import forest from "../assets/img/industries/forest.webp";
import infra from "../assets/img/industries/infra.webp";
import mining from "../assets/img/industries/mining.webp";

export const industryCarouselData = [
  {
    id: '1',
    name: 'Defence & Intelligence',
    currency: 'USD',
    price: 199,
    flag: '/defence-and-intelligence',
    imageUrl:
      defence,
    rating: 4,
    ratingCount: 1,
    description:
      'Unraveling technology, fostering innovation: Elevating defense with superior situational awareness and strategic readiness in an interconnected world.',
    point1: 'Advanced ISR for precision monitoring and analysis of diverse terrains.',
    point2: 'Comprehensive maritime surveillance for real-time tracking and threat detection.',
    point3: 'Innovative solutions meeting evolving defense and intelligence needs.',
    point4: 'Ecosystem of innovation delivering actionable intelligence for strategic planning.',
    point5: 'Amplifying insights and technology for tactical primacy in defense.',
  },
  {
    id: '2',
    name: 'Disaster & Insurance',
    currency: 'USD',
    price: 199,
    salePrice: 179.99,
    flag: '/disaster-and-insurance',
    imageUrl:
      disaster,
    rating: 4,
    ratingCount: 12,
    description:
      'Empowering resilience: Satellite technology and advanced analytics redefine disaster management and insurance, safeguarding communities with proactive strategies and comprehensive coverage.',
    point1: 'Real-time disaster monitoring aids swift emergency response strategies.',
    point2: 'Insurance tailored dashboards revolutionize risk assessment and claims processing.',
    point3: 'Dynamic environmental data enhances policy customization for comprehensive coverage.',
    point4: 'Advanced analytics tools empower communities and industries for resilience.',
    point5: 'Satellite technology ensures continuous observation for proactive disaster management.',
  },
  {
    id: '3',
    name: 'Renewable Energy',
    currency: 'USD',
    price: 199,
    flag: '/renewable-energy',
    imageUrl:
      energy,
    rating: 4,
    ratingCount: 12,
    description:
      'Empowering resilience: Satellite tech and analytics redefine disaster & insurance, ensuring proactive management and comprehensive coverage for all.',
    point1: 'Real-time disaster monitoring facilitates swift emergency response strategies.',
    point2: 'Tailored insurance dashboards revolutionize risk assessment and claims processing.',
    point3: 'Dynamic data enhances policy customization for comprehensive coverage.',
    point4: 'Advanced analytics empower resilience and proactive disaster management.',
    point5: 'Satellite technology ensures continuous observation for effective risk mitigation.',
  },
  {
    id: '4',
    name: 'Infrastructure',
    currency: 'GBP',
    price: 199,
    flag: '/infrastructure',
    imageUrl:
      infra,
    rating: 4,
    ratingCount: 1,
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    point1: 'Data Insight & Analytics As-a-Service through Platform & API',
    point2: 'Multi Mission Planning & Tasking & Visualization Platform',
    point3: 'Guaranteed collection, Fastest tasking, Secure downlink',
    point4: '24/7 all weather Surveillance using Optical and SAR Constellation',
    point5: 'Most Cost-Effective Solution available in Market',
  },
  {
    id: '5',
    name: 'Mining',
    currency: 'USD',
    price: 199,
    salePrice: 179.99,
    flag: 'mining',
    imageUrl:
      mining,
    rating: 4,
    ratingCount: 12,
    description:
      'Mining smarter, mining safer: Technology-driven solutions for sustainable resource extraction and operational excellence in a dynamic industry.',
    point1: 'Advanced monitoring enhances safety and efficiency in mining operations.',
    point2: 'Real-time data analytics optimize resource extraction and equipment maintenance.',
    point3: 'Smart sensors detect hazards and enable proactive risk mitigation measures.',
    point4: 'Sustainable mining practices promote environmental stewardship and community engagement.',
    point5: 'Technology-driven solutions ensure responsible resource management and operational excellence.',
  },
  {
    id: '6',
    name: 'Agriculture',
    currency: 'USD',
    price: 199,
    flag: '/agriculture',
    imageUrl:
      agri,
    rating: 4,
    ratingCount: 12,
    description:
      'Cultivating innovation, nurturing sustainability: Technology transforms agriculture for higher yields, healthier crops, and a greener future.',
    point1: 'Precision agriculture maximizes yield while minimizing resource usage.',
    point2: 'Smart sensors provide real-time data for optimal crop management.',
    point3: 'Data analytics enable informed decisions for pest control and irrigation.',
    point4: 'Sustainable practices promote soil health and environmental stewardship.',
    point5: 'Technology-driven solutions empower farmers for greater productivity and resilience.',
  },
  {
    id: '7',
    name: 'Forestry',
    currency: 'GBP',
    price: 199,
    flag: '/forestry',
    imageUrl:
      forest,
    rating: 5,
    ratingCount: 1,
    description:
      'Sustaining forests, enriching futures: Technology-driven solutions for resilient forestry management and biodiversity conservation in a changing world.',
    point1: 'Remote sensing enhances forest monitoring and management for conservation.',
    point2: 'AI-driven analytics optimize timber harvesting and biodiversity preservation.',
    point3: 'Smart sensors detect early signs of disease and wildfire risks.',
    point4: 'Sustainable forestry practices promote ecosystem health and carbon sequestration.',
    point5: 'Technology empowers forest managers for resilient and adaptive stewardship.',
  },
]
