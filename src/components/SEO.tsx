import { Helmet } from 'react-helmet';

const SEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://codecrafters.agency/#organization",
        "name": "CodeCrafters Agency",
        "url": "https://codecrafters.agency",
        "logo": {
          "@type": "ImageObject",
          "url": "https://codecrafters.agency/logo.png"
        },
        "description": "Professional digital agency offering web development, branding, SEO, AI automation, and digital advertising services.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Karachi",
          "addressCountry": "PK"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+92-306-9044757",
          "contactType": "customer service",
          "email": "hello@codecrafters.agency"
        },
        "sameAs": [
          "https://www.linkedin.com/company/codecrafters",
          "https://github.com/codecrafters",
          "https://instagram.com/codecrafters"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://codecrafters.agency/#website",
        "url": "https://codecrafters.agency",
        "name": "CodeCrafters Agency",
        "description": "Building Digital Success for Modern Businesses",
        "publisher": {
          "@id": "https://codecrafters.agency/#organization"
        }
      },
      {
        "@type": "ProfessionalService",
        "name": "CodeCrafters Agency",
        "image": "https://codecrafters.agency/hero-image.jpg",
        "@id": "https://codecrafters.agency/#service",
        "url": "https://codecrafters.agency",
        "telephone": "+92-306-9044757",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Karachi",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 24.8607,
          "longitude": 67.0011
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "16:00"
          }
        ]
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Web Design & Development",
            "description": "Responsive, modern websites & apps",
            "provider": {
              "@id": "https://codecrafters.agency/#organization"
            }
          },
          {
            "@type": "Service",
            "name": "Branding & Logo Design",
            "description": "Strong, memorable brand identity",
            "provider": {
              "@id": "https://codecrafters.agency/#organization"
            }
          },
          {
            "@type": "Service",
            "name": "Digital Ads Management",
            "description": "Google, Meta, TikTok campaigns",
            "provider": {
              "@id": "https://codecrafters.agency/#organization"
            }
          },
          {
            "@type": "Service",
            "name": "AI Automation Setup",
            "description": "Chatbots, workflow automation, AI tools",
            "provider": {
              "@id": "https://codecrafters.agency/#organization"
            }
          },
          {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Boost rankings & organic traffic",
            "provider": {
              "@id": "https://codecrafters.agency/#organization"
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does CodeCrafters Agency offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer web design & development, branding & logo design, digital ads management, AI automation setup, SEO optimization, and ongoing maintenance services."
            }
          },
          {
            "@type": "Question",
            "name": "How much do your services cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our pricing ranges from $299 for starter packages to $999+ for enterprise solutions. We offer custom quotes based on your specific needs."
            }
          },
          {
            "@type": "Question",
            "name": "Where is CodeCrafters Agency located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are based in Karachi, Pakistan, and serve clients globally across 10+ countries."
            }
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <link rel="canonical" href="https://codecrafters.agency/" />
    </Helmet>
  );
};

export default SEO;
