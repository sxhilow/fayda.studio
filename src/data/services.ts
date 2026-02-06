import Service1 from "@images/services/service1.webp";
import Service2 from "@images/services/service2.webp";
import Service3 from "@images/services/service3.webp";
import Service4 from "@images/services/service4.webp";

type ServicesProps = {
    title: string,
    subtitle: string,
    description: string,
    deliverables: Array<string>,
    image: ImageMetadata,
    alt: string
}

export const services: ServicesProps[] = [
    {
        title: "Website Revamps",
        subtitle: "Owners who need a facelift without a full rebuild",
        description: "Is your bounce rate high? Sometimes you don’t need a new website, you just need a better first impression. We redesign your Hero section or Landing page to convert better.",
        deliverables: [
            "UI Redesign in Figma",
            "Responsive implementation",
            "Copy optimization"
        ],
        image: Service1,
        alt: "From old and boring to Modern Websites"
    },
    {
        title: "UI/UX Design (Figma)",
        subtitle: "Teams who have developers but need a design system",
        description: "We turn raw ideas into structured, beautiful interfaces. You get developer-ready Figma files, wireframes, and prototypes.",
        deliverables: [
            "User flow & Wireframes",
            "High-fidelity Dashboards or Landing Pages",
            "Design System (Fonts, Colors, Components)"
        ],
        image: Service2,
        alt: "Professional UI/UX design mockups in Figma"
    },
    {
        title: "Custom Web Development",
        subtitle: "Businesses requiring speed, scalability, and custom functionality",
        description: "We've moved past the 'drag-and-drop' era. By using modern frameworks like Astro and Next.js, we build sites that aren't just pretty, they're high-performance machines. Clean, custom code means zero bloat, faster load times for your users, and a platform that Google loves to rank.",
        deliverables: [
            "Blazing-fast Frontend (Next.js, Astro, or React)",
            "Custom Backend & API Integrations",
            "SEO-Optimized Code Structure"
        ],
        image: Service3,
        alt: "Performance metrics showing high scores and custom code snippets"
    },
    {
        title: "MVPs & E-Commerce",
        subtitle: "Businesses ready to launch a new product or start selling online",
        description: "Whether it's a highly customized Shopify store or a from-scratch SaaS MVP, we build the functional 'engine' of your business. We focus on getting you to market fast with a product that handles real users, processes payments securely, and proves your concept from day one.",
        deliverables: [
            "Functional Minimum Viable Product (MVP)",
            "Custom Shopify Store Development",
            "Secure Payment & Database Integration"
        ],
        image: Service4,
        alt: "Dashboard interface for an E-commerce and SaaS platform"
    }
];