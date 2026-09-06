import project1 from '../assets/project1.jpeg'
import project2 from '../assets/project2.jpeg'
import project3 from '../assets/project3.jpeg'
import project4 from '../assets/project4.jpeg'
import project5 from '../assets/project5.jpeg'
import project6 from '../assets/project6.webp'

export const projects = [
  {
    id: 'lead-nurturing',
    num: '01',
    featured: true,
    image: project1,
    alt: 'Lead nurturing and response automation workflow',
    category: 'Automation',
    title: 'Lead Nurturing & Response Automation',
    shortCategory: 'AUTOMATION',
    description:
      'A three-stage CRM automation covering instant response tagging, a new-lead nurture pipeline, and a long-term cold-lead re-engagement sequence. Built so no inquiry goes unanswered.',
    highlights: [
      'Smart-delay response tagging that routes hot leads to priority follow-up',
      'Multi-touch nurture sequence with confirmation, intro, and value emails',
      'Long-term re-engagement flow for leads that go quiet',
    ],
    tags: ['CRM', 'Lead Nurturing', 'Email Sequencing'],
    link: null,
    problem:
      'Inbound inquiries needed to be answered and nurtured quickly, but the response and follow-up were handled manually. Hot leads could wait, and colder leads were never followed up.',
    approach:
      'Automate the entire lead response and nurture experience inside the CRM, with instant tagging, a structured nurture sequence, and a long-term re-engagement flow.',
    systemNotes:
      'New leads are tagged and routed immediately, a multi-touch nurture sequence keeps them warm, and a separate workflow re-engages leads that go quiet. All of it runs from one pipeline.',
    flow: ['CAPTURE', 'TAG', 'NURTURE', 'FOLLOW-UP', 'RE-ENGAGE'],
    tools: ['GoHighLevel', 'CRM', 'Lead Nurturing', 'Email Sequencing', 'Automation'],
    prototype: false,
    result:
      'A structured, repeatable response system built so every inquiry is acknowledged, nurtured, and followed up automatically instead of landing in an inbox.',
  },
  {
    id: 'surface',
    num: '02',
    featured: false,
    image: project2,
    alt: 'Surface website case study screens',
    category: 'Web Design',
    title: 'Surface · Website Creation',
    shortCategory: 'WEB DESIGN',
    description:
      'A clean, modern marketing site with a bold editorial hero, built to communicate brand and impact at a glance. From landing page through to a frictionless project-intake form.',
    highlights: [
      'Component-driven build: Header, Hero, Services, Process, Philosophy, CTA',
      'Editorial hero with a layered visual motif and clear call to action',
      'Streamlined "Start a Project" form with a polished thank-you flow',
    ],
    tags: ['React', 'UI/UX', 'Vibe Coding'],
    link: { text: 'View project', href: '#work' },
    problem:
      'The brand needed a website that communicated who they are at a glance, with a clear path for visitors to start a project.',
    approach:
      'Build a component-driven marketing site with an editorial hero and a streamlined project-intake form.',
    systemNotes:
      'A bold editorial hero establishes brand and intent, services and process build trust, and a frictionless project form turns interest into a warm inquiry.',
    flow: ['HERO', 'SERVICES', 'PROCESS', 'BRAND', 'CTA', 'FORM'],
    tools: ['React', 'UI/UX', 'Vite', 'Web Design'],
    prototype: false,
    result:
      'A modern, component-based website designed to communicate impact quickly and convert visitors into project inquiries.',
  },
  {
    id: 'lead-auto',
    num: '03',
    featured: false,
    image: project3,
    category: 'Automation',
    title: 'Lead Automation System',
    shortCategory: 'AUTOMATION',
    description:
      'An end-to-end lead automation build: capture forms feed a CRM pipeline, every contact lands in a centralized database, and automated workflows handle response tagging, nurturing, and long-term follow-up without manual work.',
    highlights: [
      'Lead capture and form integration connected straight into the pipeline',
      'CRM and pipeline management so no opportunity gets lost',
      'Automated workflows for response tagging, nurturing, and cold-lead follow-up',
    ],
    tags: ['CRM', 'Workflow Design', 'Lead Segmentation'],
    link: null,
    problem:
      'Leads arrived in several places and were processed manually, so opportunities could be lost and follow-up was inconsistent.',
    approach:
      'Connect every capture point to a single CRM pipeline and automate response tagging, nurturing, and long-term follow-up.',
    systemNotes:
      'Capture feeds a centralized pipeline, every contact lands in a managed database, and workflows tag, nurture, and re-engage without manual effort.',
    flow: ['CAPTURE', 'CRM', 'DATABASE', 'TAG', 'NURTURE', 'FOLLOW-UP'],
    tools: ['GoHighLevel', 'CRM', 'Lead Segmentation', 'Workflow Design', 'Automation'],
    prototype: false,
    result:
      'A single, connected lead system where every inquiry is captured, organized, and followed up automatically.',
  },
  {
    id: 'booking',
    num: '04',
    featured: true,
    image: project4,
    category: 'Booking System',
    title: 'Appointment Booking & Reminder System',
    shortCategory: 'BOOKING',
    description:
      'A full booking flow with service selection, a live calendar, and client details on one page. Paired with automation that sends confirmations, reminders, and post-visit review requests without anyone lifting a finger.',
    highlights: [
      'Real-time calendar with per-service availability, no double-booking',
      'Instant confirmation email/SMS the moment a slot is booked',
      'Automated reminder 24 hours out to cut no-shows, plus a review request after the visit',
    ],
    tags: ['Booking Flow', 'Calendar Sync', 'Reminder Automation'],
    link: null,
    problem:
      'Booking was manual, no-shows were common, and clients received no confirmation or follow-up after their visit.',
    approach:
      'Build a self-serve booking flow connected to a live calendar, with automated confirmation, reminder, and review requests.',
    systemNotes:
      'Clients pick a service and slot on one page, booking is confirmed instantly, a reminder goes out 24 hours ahead, and a review request follows the visit.',
    flow: ['SERVICE', 'CALENDAR', 'CONFIRM', 'REMIND', 'REVIEW'],
    tools: ['GoHighLevel', 'Booking Flow', 'Calendar Sync', 'Reminder Automation'],
    prototype: false,
    result:
      'A booking experience that runs itself. Instant confirmation, fewer no-shows, and a built-in request for feedback after each visit.',
  },
  {
    id: 'ecommerce',
    num: '05',
    featured: false,
    image: project5,
    category: 'E-Commerce',
    title: 'E-Commerce Website with Payment Integration',
    shortCategory: 'E-COMMERCE',
    description:
      'A full storefront with browsing, product detail, and checkout, plus card, PayPal, and GPay built in. A visitor can go from landing page to paid order without ever leaving the site.',
    highlights: [
      'Product listing, search, and detail pages with clear pricing and reviews',
      'One-page checkout with order summary and multiple payment methods',
      'Responsive layout built for both desktop browsing and mobile checkout',
    ],
    tags: ['Checkout Flow', 'Payment Integration', 'Responsive Design'],
    link: null,
    problem:
      'Visitors had to leave the site to buy, creating friction, abandoned carts, and a broken experience on mobile.',
    approach:
      'Build a complete storefront with clear product pages and a one-page checkout with built-in payment options.',
    systemNotes:
      'Browsing and search lead into focused product pages, then a one-page checkout collects the order and takes payment in place. Card, PayPal, and GPay are all included.',
    flow: ['STORE', 'PRODUCT', 'CHECKOUT', 'PAYMENT', 'CONFIRM'],
    tools: ['GoHighLevel', 'E-Commerce', 'Checkout Flow', 'Payment Integration', 'Responsive Design'],
    prototype: false,
    result:
      'A complete journey from landing page to paid order inside one responsive storefront, with an eye toward abandoned-cart automation and post-purchase upsell.',
  },
  {
    id: 'email-campaign',
    num: '06',
    featured: false,
    image: project6,
    category: 'Marketing',
    title: 'Email Campaign & Marketing System',
    shortCategory: 'EMAIL',
    description:
      'An email campaign system built to turn newcomers into customers. Capture forms collect leads, automated flows welcome and educate first-time subscribers, and targeted discount campaigns nudge warm leads toward their first purchase.',
    highlights: [
      'Lead capture forms that feed new signups straight into segmented email lists',
      'Automated newcomer welcome flow that introduces the brand and builds trust early',
      'Discount and promo campaigns triggered by signup, inactivity, or cart intent to win first-time buyers',
    ],
    tags: ['Email Automation', 'Lead Capture', 'Promo Campaigns'],
    link: null,
    problem:
      'New subscribers joined but received nothing coordinated, so first-time visitors rarely became repeat customers.',
    approach:
      'Set up segmented lists, an automated welcome flow, and targeted discount campaigns triggered by behavior.',
    systemNotes:
      'Capture forms feed segmented lists, a welcome flow educates newcomers, and discount campaigns fire on signup, inactivity, or cart intent to win the first purchase.',
    flow: ['CAPTURE', 'SEGMENT', 'WELCOME', 'CAMPAIGN', 'CONVERT'],
    tools: ['GoHighLevel', 'Email Automation', 'Lead Capture', 'Segmentation', 'Promo Campaigns'],
    prototype: false,
    result:
      'A coordinated email system that turns newcomers into customers through education and well-timed offers.',
  },
]
