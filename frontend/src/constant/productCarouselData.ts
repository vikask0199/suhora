import spademain from "../assets/img/products/spademain.png"
import sidmain from "../assets/img/products/sidmain.png"
import lancemain from "../assets/img/products/lancemain.png"

export const products = [
  {
    id: '1',
    name: 'SPADE',
    currency: 'USD',
    buttonRedirect: "/spade",
    flag: 'new',
    imageUrl:
      spademain,
    rating: 4,
    ratingCount: 1,
    description:
      'A seamless SaaS platform delivering comprehensive access to multi-sensor satellite data for a spectrum of commercial applications.',
    point1: 'Data Insight & Analytics As-a-Service through Platform & API',
    point2: 'Multi Mission Planning & Tasking & Visualization Platform',
    point3: 'Guaranteed collection, Fastest tasking, Secure downlink',
    point4: '24/7 all weather Surveillance using Optical and SAR Constellation',
    point5: 'Most Cost-Effective Solution available in Market',
  },
  {
    id: '2',
    name: 'LANCE',
    currency: 'USD',
    buttonRedirect: "/lance",
    flag: 'on-sale',
    imageUrl:
      lancemain,
    rating: 4,
    ratingCount: 12,
    description:
      'Powering defense with human-AI synergy for unparalleled situational awareness and strategic readiness in a rapidly evolving world.',
    point1: 'LANCE: Fusion of human expertise and AI in defense.',
    point2: 'Real-time insights enable proactive strategies for defense agencies.',
    point3: 'High-definition sensors and smart algorithms ensure actionable intelligence.',
    point4: 'Versatile LANCE offers unparalleled situational awareness in defense.',
    point5: 'Human-AI synergy sets a new benchmark in defense readiness.',
  },
  {
    id: '3',
    name: 'SID',
    currency: 'USD',
    buttonRedirect: "/sid",
    imageUrl:
      sidmain,
    rating: 4,
    ratingCount: 12,
    description:
      'Empowering resilience: SID harnesses satellite data for disaster management and insurance, shaping a safer, prepared world through technology.',
    point1: 'SID utilizes real-time satellite data for disaster management and insurance.',
    point2: 'Disaster Dashboard aids emergency response with real-time disaster data.',
    point3: 'Insurance Dashboard transforms risk assessment and claims processing.',
    point4: 'SID benefits insurance and banking sectors with dynamic environmental insights.',
    point5: 'Technology-driven SID promotes a safer, resilient global community.',
  },
]
