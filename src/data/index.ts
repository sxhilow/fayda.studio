import Mail from "@icons/Mail.svg"
import Call from "@icons/Call.svg"

export const navItems = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/case-studies/",
    label: "Case Studies"
  },
  {
    href: "/services/",
    label: "Services"
  },
  {
    href: "/plans/",
    label: "Plans"
  },
  {
    href: "/contact/",
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
      { text: "Our Work", href: "/case-studies" },
      { text: "Services", href: "/services" },
      { text: "Plans", href: "/plans" },
      { text: "FAQs", href: "/plans#faqs" },
      { text: "Contact", href: "/contact" },
      { text: "Why us", href: "/#whyus" },
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