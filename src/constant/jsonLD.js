export default function jsonLDGenerator({ 
  title, 
  description, 
  url, 
  image,
  type = 'Organization', // Allow different types per page
  services = ["Website Development",
    "E-commerce Solutions",
    "Web Application Development",
    "SEO Optimization",
    "Website Maintenance",
    "Performance Optimization"], // Add services you offer
  socialProfiles = [] // Social media URLs
}) {
  
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": title,
    "description": description,
    "url": url,
    "logo": new URL(image.src, url).toString(),
    "image": new URL(image.src, url).toString(),
    "areaServed": "ZA",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ZA",
      // Add more address details if available
    }
  };

  // Add services if provided
  if (services.length > 0 && type === 'Organization') {
    baseSchema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        },
        "position": index + 1
      }))
    };
  }

  // Add social profiles
  if (socialProfiles.length > 0) {
    baseSchema.sameAs = socialProfiles;
  }

  // Add LocalBusiness properties if applicable
  if (type === 'LocalBusiness') {
    Object.assign(baseSchema, {
      "priceRange": "$$$",
      "openingHours": "Mo-Fr 09:00-17:00",
      "telephone": "+27-XXX-XXXX" // Add your phone
    });
  }

  return baseSchema;
}

// You can also add specific schema generators
export function generateWebSiteSchema({ url, searchUrl, name }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "url": url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${searchUrl}?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateServiceSchema({ 
  serviceName, 
  description, 
  url, 
  priceRange,
  provider 
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": provider,
    "areaServed": "ZA",
    "offers": {
      "@type": "Offer",
      "price": priceRange
    }
  };
}