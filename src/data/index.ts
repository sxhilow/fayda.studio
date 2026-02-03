import UIUXImage from "../assets/images/service-uiux.avif";
import WebDevImage from "../assets/images/service-webdev.avif";
import WebAppImage from "../assets/images/service-webapp.avif";
import Mail from "@icons/Mail.svg"
import Call from "@icons/Call.svg"



export const navItems = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/services",
    label: "Services"
  },
  {
    href: "/plans",
    label: "Plans"
  },
  {
    href: "/contact",
    label: "Contact"
  },
] as const;

type FooterSubItems = {
  href?: string,
  text?: string,
  icon?: any
}

type FooterItemsProps = {
  label: string,
  items: FooterSubItems[]
}

export const footerItems: FooterItemsProps[] = [
  {
    label: "Links",
    items: [
      { text: "Home", href: "/" },
      { text: "Services", href: "/services" },
      { text: "Plans", href: "/plans" },
      { text: "Contact", href: "/contact" },
    ]
  },
  {
    label: "Services",
    items: [
      { text: "Hero Revamps" },
      { text: "Landing page Revamps" },
      { text: "UI/UX Design" },
      { text: "Branding" },
      { text: "Web Development" },
      { text: "E-commerce and MVPs" },
    ]
  },
  {
    label: "Contact",
    items: [
      { text: "hello@fayda.studio", icon: Mail, href: "mailto:hello@fayda.studio" },
      { text: "Book a call", icon: Call, href: "/contact" }
    ]
  }
]

export const services = [
  {
    number: "01",
    title: "UI/UX Design",
    tags: ["Design", "Revision", "Analysis"],
    description: "Our UI/UX focuses on clarity: clean layouts, intuitive flows, and designs that help users take action without thinking. We remove unnecessary friction, structure information logically, and build interfaces that guide customers exactly where they need to go.",
    bg: "#D7F1FF"
  },
  {
    number: "02",
    title: "Web Development",
    tags: ["Dev", "Support", "Maintainence"],
    description: "Our web development turns those designs into fast, functional websites that actually perform. We focus on clean code, responsive layouts, and pages that load instantly. Every build emphasizes speed, accessibility, and reliability, giving your business a website that looks sharp and works flawlessly on every device.",
    bg: "#FFE7C2"
  },
  {
    number: "03",
    title: "Custom Web App",
    tags: ["Backend", "APIs", "Scalability"],
    description: "Our web app development is built for complexity: real business logic, secure authentication, dashboards, automation, and custom features that a basic website can’t handle. We architect systems that scale, integrate with APIs, and streamline operations — turning your idea into a full product, not just a webpage.",
    bg: "#E4D8FF"
  },
]

export const plans = [
  {
    tag: "Get online fast",
    title: "Launch Plan",
    description: "Ideal for Small businesses or solo founders who just need a clean, fast, professional site that gets them out there and looking legit.",
    features: [
      "A responsive website that looks great on any device",
      "Conversion-focused design that helps visitors reach out or book you",
      "Simple SEO setup so Google actually finds you",
      "Copywriting that sounds like you, not a bot",
      "You'll see your first draft in days, not weeks"
    ],
    tagColors: "bg-[#E8F5E9] border-[#A5D6A7] text-[#2E7D32]"
  },
  {
    tag: "Grow your reach",
    title: "Growth Plan",
    description: "Ideal for Businesses that already have traction and want to manage their content, grow visibility, and strengthen their brand identity.",
    features: [
      "A CMS (Content Management System) so you can update content easily",
      "Branded design system for consistent visuals and tone",
      "Blog, services, or case study pages — all connected and easy to manage",
      "Advanced SEO setup with analytics and site structure",
      "Support for updates and content improvements after launch"
    ],
    tagColors: "bg-[#E3F2FD] border-[#90CAF9] text-[#1565C0]"
  },
  {
    tag: "Sell without stress",
    title: "Scale Plan",
    description: "Ideal for Brands ready to expand into e-commerce, membership, or custom web app territory.",
    features: [
      "Full e-commerce or web app setup (Shopify, custom, or API-integrated)",
      "Email automation and sales tracking built right in",
      "Optimized checkout flow that turns browsers into buyers",
      "Analytics dashboard for clear performance insights",
      "Ongoing maintenance and scaling support"
    ],
    tagColors: "bg-[#FFF3E0] border-[#FFB74D] text-[#EF6C00]"
  }
]


export const faqs = [
  {
    question: "What does your web design process look like, from start to launch?",
    answer: "This is a key question, as a clear process reduces uncertainty and ensures alignment from day one. Our structured approach begins with a discovery call to understand your goals, followed by wireframing and design iterations, development with clean code for performance, rigorous testing, and a seamless launch—we've designed this to be efficient and collaborative, drawing on best practices in UI/UX and development. Let's discuss how this tailored journey fits your vision in our free strategy session."
  },
  {
    question: "How involved do we need to be during the project?",
    answer: "We get it—you're busy running your business, so involvement shouldn't feel like a second job. We handle the heavy lifting but keep you in the loop with weekly updates via our dedicated project management tool, where you can review progress and provide feedback at key milestones; this setup promotes transparency and efficiency. This collaborative approach ensures the final product feels truly yours, and we can adjust the level based on your preferences during our initial chat."
  },
  {
    question: "What if we don't like the initial design concepts?",
    answer: "It's completely normal to have strong opinions about your brand's look, and we welcome that feedback to get it right. We provide 2-3 initial concepts based on your brief, with up to two rounds of revisions included in every project—our UI/UX team focuses on iterative refinement to align with your vision. Rest assured, we'll refine until you're thrilled, and this is something we map out clearly in your project plan from the start."
  },
  {
    question: "What technologies do you use in your projects?",
    answer: "Choosing the right tech stack is crucial for long-term success, and we're glad you're thinking ahead. We leverage modern tools like React for responsive fronts, Node.js for scalable backends, and integrations with APIs for custom features, ensuring high performance and flexibility. We can dive into the best options for your needs during a consultation to build confidence in our technical expertise."
  },
  {
    question: "How much does a custom website typically cost?",
    answer: "Budget is often the elephant in the room, and we respect that transparency helps you plan effectively. Our pricing is fully customized based on your project's scope, features, and complexity—starting from the Launch Plan for simpler sites, up to the Scale Plan for advanced e-commerce or web apps; we focus on delivering value that supports your growth. We'll provide a detailed, no-obligation quote in our strategy session to align with your investment goals."
  },
  {
    question: "Do you offer ongoing support and maintenance after our site launches?",
    answer: "Post-launch reliability is a valid concern—no one wants a site that gathers digital dust. Yes, we include 30 days of free support in all plans, with optional monthly maintenance packages for updates, security, and optimizations; this ensures your site stays performant and secure over time. Our packages give you peace of mind, and we can customize one to fit your ongoing needs."
  },
  {
    question: "What's the difference between a custom website and using a template (e.g., Wix, Squarespace)?",
    answer: "It's smart to weigh options, especially when templates seem quick and cheap, but they often limit growth. Custom builds from us offer tailored functionality, scalability, and ownership without platform fees—unlike templates, our sites integrate seamless e-commerce or apps, with clean code that's optimized for speed and accessibility. This investment pays off in performance; let's explore if custom is the right path for your ambitions."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Timelines matter when you're eager to go live, and delays can be frustrating. Typically, our Launch Plan wraps in 4-6 weeks, Growth in 6-10 weeks, and Scale in 10-16 weeks, depending on complexity—we use agile sprints for efficiency to meet agreed deadlines. We commit to your timeline from the outset, and a strategy call will outline a realistic schedule for your project."
  },
  {
    question: "Do you handle website hosting and security?",
    answer: "Security and hosting are non-negotiables in today's digital landscape, and we're proactive about protecting your investment. We partner with reliable providers like AWS or Vercel for hosting, including SSL certificates, firewalls, and regular vulnerability scans in all plans. This setup ensures worry-free operation—reach out to discuss how we can secure your online presence."
  },
  {
    question: "Will our website be optimized for mobile devices and search engines (SEO)?",
    answer: "With most traffic coming from mobile and search, optimization is essential for visibility and user experience. Every site we build is fully responsive across devices and includes foundational SEO like meta tags, site structure, and speed enhancements—advanced in Growth and Scale plans with analytics integration. We'll align this with your goals in a complimentary session to maximize your site's impact."
  },
  {
    question: "What happens if we encounter a problem after the site is live?",
    answer: "Bugs or issues post-launch can feel alarming, especially if support feels out of reach. Our team is on call via email or our portal for quick resolutions within 24-48 hours under maintenance plans, with proactive monitoring to catch issues early. You can count on us as your long-term partner; let's talk about support options that keep you covered."
  },
  {
    question: "How do you ensure our website will actually help our business grow, not just look pretty?",
    answer: "Aesthetics alone don't drive results, and it's right to prioritize real business impact over superficial design. We focus on conversion-optimized UI/UX, data-driven decisions, and features like email automation in Scale Plans to turn visitors into customers—backed by analytics dashboards for ongoing insights. This growth-focused approach is core to our work; a strategy session will show how we can apply it to your objectives."
  },
  {
    question: "Can you work with our existing brand, or do you help develop that too?",
    answer: "Your brand identity is foundational, and evolving it shouldn't mean starting from scratch. We seamlessly integrate existing elements like logos and colors, or offer branding support through our UI/UX service to refine visuals and tone for consistency. We're flexible to your starting point; let's review yours in a call to build a cohesive online identity."
  },
  {
    question: "Why choose Fayda Studio over other agencies?",
    answer: "Standing out in a crowded field is a fair consideration when entrusting your digital presence. We specialize in high-performance web apps and e-commerce for growing businesses, with a fresh, focused expertise on scalable solutions that adapt as you expand—unlike generalists, we prioritize your goals with approachable collaboration and cutting-edge tech. Partnering with us means aligned values and dedicated support; schedule a chat to see if we're the right fit."
  }
];


export const detailedServices = [
  {
    id: 1,
    title: "UI/UX Design",
    idealFor: "Businesses and startups looking to create a seamless digital experience that engages users and drives conversions.",
    offer: [
      {
        title: "Wireframes & Prototypes: ",
        desc: "Clear, interactive layouts to visualize the user journey before development."
      },
      {
        title: "Mobile-First Design: ",
        desc: "Optimized for all devices to ensure users get a flawless experience everywhere."
      },
      {
        title: "User Research & Testing: ",
        desc: "Understanding your audience to create designs they’ll actually love."
      },
      {
        title: "Brand-Aligned Visuals: ",
        desc: "Design that reflects your brand identity, colors, and tone consistently."
      },
      {
        title: "Iterative Design Approach: ",
        desc: "Continuous refinement based on feedback to perfect usability."
      }
    ],
    whyItMatters: "A well-designed interface isn’t just about looking pretty—it reduces bounce rates, increases engagement, and makes your product intuitive. We design for humans, not just screens.",
    layout: "normal",
    visual: UIUXImage
  },
  {
    id: 2,
    title: "Web Development",
    idealFor: "Businesses that want a strong online presence with a fast, responsive, and functional website.",
    offer: [
      {
        title: "Responsive Websites: ",
        desc: "Your site will look perfect on mobile, tablet, and desktop."
      },
      {
        title: "SEO Basics: ",
        desc: "Optimized structure and metadata to help your site get discovered."
      },
      {
        title: "CMS Integration: ",
        desc: "Easy-to-manage content with WordPress, Webflow, or custom CMS solutions."
      },
      {
        title: "Cross-Browser Compatibility: ",
        desc: "Works smoothly on Chrome, Safari, Edge, and more."
      },
      {
        title: "Performance Optimization: ",
        desc: "Fast load times and smooth interactions for happier users."
      }
    ],
    whyItMatters: "A website is often the first impression your audience gets—slow, clunky, or broken websites drive users away. We build websites that perform beautifully and make you look professional.",
    layout:"reverse",
    visual: WebDevImage
  },
  {
    id: 3,
    title: "Web App Development",
    idealFor: "Entrepreneurs, startups, or businesses looking to automate processes, manage data, or offer custom digital solutions.",
    offer: [
      {
        title: "Full-Stack Development: ",
        desc: "From React frontend to Node.js backend, we handle everything."
      },
      {
        title: "API Integration: ",
        desc: "Connect with third-party services like payment gateways, analytics, or CRMs."
      },
      {
        title: "Authentication & User Management: ",
        desc: "Secure logins, roles, and dashboards tailored to your needs."
      },
      {
        title: "Scalable Architecture: ",
        desc: "Built to grow with your business and handle future expansion."
      },
      {
        title: "Custom Solutions: ",
        desc: "Tailored web apps built to solve real problems unique to your business."
      }
    ],
    whyItMatters: "Web apps are more than websites—they streamline operations, automate tasks, and create new revenue opportunities. We turn complex ideas into simple, usable software.",
    layout:"normal",
    visual:WebAppImage
  }
];


export const workProcess = [
  {
    number: "01",
    title: "Discovery",
    tagline: "We gather context, define the problem, and lock in the requirements.",
    steps: [
      "A clear understanding of scope",
      "Defined goals and success metrics",
      "Research and analysis"
    ]
  },
  {
    number: "02",
    title: "Design",
    tagline: "We turn raw ideas into structured, usable, and visually coherent interfaces.",
    steps: [
      "Wireframes and user flows",
      "High-fidelity UI designs",
      "Component layouts and interaction logic"
    ]
  },
  {
    number: "03",
    title: "Development",
    tagline: "We build the actual product using clean, modern, scalable code.",
    steps: [
      "Frontend development (UI, components, responsiveness)",
      "Backend development (APIs, database, logic)",
      "Integrations and feature implementation"
    ]
  },
  {
    number: "04",
    title: "Launch",
    tagline: "We deploy your product, run checks, and make sure it performs reliably.",
    steps: [
      "Performance and device testing",
      "Final optimizations",
      "Deployment to your chosen platform"
    ]
  }
]
