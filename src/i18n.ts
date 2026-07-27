import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Resources would typically be imported from JSON files
// For this setup, we'll define them here for simplicity and to ensure immediate availability
const resources = {
    en: {
        translation: {
            "hero": {
                "title": "Premium Argentine<br />Agri-Foods",
                "subtitle": "Direct from the source to the world.<br />Dried Fruits & Extra Virgin Olive Oil.",
                "explore": "Explore Products",
                "contact": "Contact Us"
            },
            "nav": {
                "home": "Home",
                "products": "Products",
                "about": "About Us",
                "contact": "Contact",
                "logistics": "Logistics",
                "markets": "Markets"
            },
            "home": {
                "hero": {
                                    "kicker": "Artisanal dedication",
                                    "title": "Premium quality fresh fruit, dried fruit, and olive oil",
                    "subtitle": "A rigorous import and export process that guarantees freshness and excellence at every stage."
                },
                "products": {
                    "title": "Featured Selection",
                                    "subtitle": "Three categories, one same commitment: quality from the source.",
                                    "cta": "Explore all products",
                                    "items": {
                                                            "freshFruit": {
                                                                                        "title": "Fresh Fruit",
                                                                                        "desc": "Carefully harvested and selected"
                                                            },
                                                            "driedFruit": {
                                                                                        "title": "Dried Fruit",
                                                                                        "desc": "Processed with care to preserve their natural properties"
                                                            },
                                                            "oliveOil": {
                                                                                        "title": "Olive Oil",
                                                                                        "desc": "Extracted from selected olives, cold-pressed"
                                                            }
                                    }
                },
                "videoGallery": {
                    "title": "PRODUCTS UP CLOSE",
                    "subtitle": "A quick look at texture and grading in real production lots."
                },
                "videoSpotlight": {
                    "aria": "Product processing video spotlight",
                    "kicker": "Quality in motion",
                    "title": "FROM PROCESSING TO EXPORT",
                    "text": "Real footage from Argentina—careful handling, traceability, and export-ready quality."
                },
                "values": {
                    "title": "Premium Argentine Products",
                    "subtitle": "Sourced directly from Argentina's finest producers",
                    "items": {
                        "fob": {
                            "title": "FOB & CIF Expertise",
                            "content": "We operate under FOB and CIF terms, with full control over documentation, quality checks, and shipping from Argentine ports to your destination."
                        },
                        "quality": {
                            "title": "Quality Assurance",
                            "content": "Rigorous quality control and international certifications. Complete traceability from producer to final destination."
                        },
                        "global": {
                            "title": "Global Reach",
                            "content": "Serving importers and distributors across Asia, China, the Middle East, and Europe with reliable logistics and regulatory knowledge."
                        },
                        "trusted": {
                            "title": "Your Trusted Export Partner",
                            "content": "Long-term partnerships, flexible operations, and professional support. We adapt to your needs and market requirements."
                        }
                    }
                },
                "flexibility": {
                                        "title": "Flexible Adaptation",
                                        "text": "Ability to adapt products, packaging, and documentation to meet the specific requirements of different markets and buyers."
                },
                        "excellence": {
                                                "title": "GLOBAL EXCELLENCE AND LOGISTICS IN ANDEAN PRODUCTS",
                                                "text": "We are dedicated to global trade, operating comprehensive, tailored import and export solutions. We guarantee traceability and freshness at every stage of the supply chain."
                        },
                        "markets": {
                                                "title": "International Presence",
                                                "subtitle": "We ship to the most demanding markets, and import from Chile, with logistics adapted to each destination.",
                                                "items": {
                                                                            "argentina": "Argentina",
                                                                            "chile": "Chile",
                                                                            "asia": "Asia",
                                                                            "china": "China",
                                                                            "middleEast": "Middle East",
                                                                            "europe": "Europe"
                                                },
                                                "cta": "View all markets"
                        },
                        "cta": {
                                                "title": "Boost your trade operations with us",
                                                "text": "Contact us to design a logistics and commercial solution tailored to your business.",
                                                "button": "Contact us"
                        }
                },
            "about": {
                "banner": {
                    "kicker": "Our story",
                    "title": "About Fruit Cascade",
                    "subtitle": "Decades of experience connecting Argentine producers with international markets."
                },
                "story": {
                    "kicker": "Origin and purpose",
                    "title": "Over a decade connecting Andean richness with the world",
                    "text": "Fruit Cascade was born with a clear conviction: to carry the purity of the Andean land beyond any border, respecting nature's own pace and honoring the trust of those who seek excellence.",
                    "cta": "Talk to us"
                },
                "legacy": {
                    "text": "Over the past 14 years we have established ourselves as custodians of quality. We know that behind every shipment of fresh fruit, dried fruit, and olive oil, there is a commitment to the health, flavor, and reputation of our clients around the world."
                },
                "craft": {
                    "title": "The art of selection and detail",
                    "items": {
                        "origin": {
                            "label": "At the origin",
                            "text": "We meticulously select each crop and batch, prioritizing careful processes that preserve the natural properties and unique character of the Andean region."
                        },
                        "process": {
                            "label": "In the process",
                            "text": "We take care of traceability and handling for every product with exacting standards, ensuring they retain their freshness and nutritional value from harvest to destination."
                        },
                        "delivery": {
                            "label": "In the delivery",
                            "text": "We understand the dynamics of the global market. That's why we design tailor-made import and export solutions, adapting flexibly to the operational needs of each trade partner."
                        }
                    }
                },
                "cta": {
                    "title": "Let's build your next trade operation together.",
                    "text": "Contact us and tell us what you're looking for.",
                    "button": "Contact us"
                }
            },
            "contact": {
                "banner": {
                    "title": "CONTACT US",
                    "subtitle": "Get in touch with our export team"
                },
                "intro": {
                    "kicker": "Let's discuss your import needs",
                    "title": "Let's discuss your import needs",
                    "text": "Whether you're an importer, distributor, or wholesaler looking for premium dried fruits and olive oil, our export team is ready to assist you. Contact us for product specifications, pricing, shipping terms, and any questions about our services."
                },
                "email": {
                    "title": "Send us an email",
                    "subtitle": "What to Include in Your Inquiry:",
                    "items": {
                        "1": "Products you're interested in",
                        "2": "Estimated quantities needed",
                        "3": "Any specific requirements or certifications",
                        "4": "Destination port or country"
                    }
                },
                "why": {
                    "title": "WHY CONTACT US"
                }
            },
            "products": {
                "banner": {
                    "title": "Quality selected foods",
                    "subtitle": "Fresh fruit, dried fruit, nuts, and olive oil, meticulously selected for import and export operations."
                },
                "intro": {
                    "text": "A process rooted in tradition, expert selection, and care, bringing the best of the land to any market."
                },
                "specs": {
                    "origin": "Origin",
                    "season": "Season",
                    "markets": "Markets",
                    "packaging": "Packaging"
                },
                "inquiry": "Send inquiry",
                "items": {
                    "cerezas": {
                        "category": "Fresh Fruit",
                        "name": "Cherries",
                        "desc": "Harvested at the ideal point for preservation, with size and firmness selected for fresh export.",
                        "specs": {
                            "origin": "Alto Valle de Río Negro and Neuquén",
                            "season": "November – January",
                            "markets": "Europe, Asia",
                            "packaging": "5 kg boxes · 250 g / 500 g clamshells"
                        }
                    },
                    "paltas": {
                        "category": "Fresh Fruit",
                        "name": "Avocados",
                        "desc": "Hass variety, harvested and sized to reach optimal ripeness at destination.",
                        "specs": {
                            "origin": "Chile",
                            "season": "August – January",
                            "markets": "Europe, Middle East",
                            "packaging": "Depending on destination: 10 kg plastic crate or 4 kg cardboard box"
                        }
                    },
                    "kiwis": {
                        "category": "Fresh Fruit",
                        "name": "Kiwis",
                        "desc": "Firm pulp and balanced sweetness, graded by size for the most demanding markets.",
                        "specs": {
                            "origin": "Chile",
                            "season": "March – October",
                            "markets": "Europe, Asia",
                            "packaging": "10 kg plastic crate"
                        }
                    },
                    "limones": {
                        "category": "Fresh Fruit",
                        "name": "Lemons",
                        "desc": "Thin peel and high juice yield, thanks to the NOA climate.",
                        "specs": {
                            "origin": "Tucumán (NOA)",
                            "season": "March – September",
                            "markets": "Europe, Middle East, Asia",
                            "packaging": "15 kg boxes · bulk"
                        }
                    },
                    "naranjas-pomelos": {
                        "category": "Fresh Fruit",
                        "name": "Oranges and Grapefruits",
                        "desc": "Juicy pulp citrus with intense color, selected by size and brix grade.",
                        "specs": {
                            "origin": "Entre Ríos and Corrientes",
                            "season": "May – October",
                            "markets": "Europe, Middle East",
                            "packaging": "18 kg boxes · bulk"
                        }
                    },
                    "manzana": {
                        "category": "Fresh Fruit",
                        "name": "Apples",
                        "desc": "Red Delicious, Gala and Granny Smith varieties, cold-stored for year-round supply.",
                        "specs": {
                            "origin": "Alto Valle de Río Negro",
                            "season": "February – July · year-round storage",
                            "markets": "Europe, Asia, Brazil",
                            "packaging": "18 kg boxes · 1 / 2 kg retail bags"
                        }
                    },
                    "peras": {
                        "category": "Fresh Fruit",
                        "name": "Pears",
                        "desc": "Williams and Packham's varieties, harvested and stored under controlled atmosphere.",
                        "specs": {
                            "origin": "Alto Valle de Río Negro",
                            "season": "January – May · year-round storage",
                            "markets": "Europe, Asia, Brazil",
                            "packaging": "18 kg boxes · 1 / 2 kg retail bags"
                        }
                    },
                    "durazno": {
                        "category": "Fresh Fruit",
                        "name": "Peaches",
                        "desc": "Stone fruit with firm texture and natural sweetness, harvested at peak summer season.",
                        "specs": {
                            "origin": "Mendoza",
                            "season": "December – March",
                            "markets": "Europe, Asia",
                            "packaging": "5 kg boxes · 500 g clamshell"
                        }
                    },
                    "ciruela-seca": {
                        "category": "Dried Fruit",
                        "name": "Dried Plums",
                        "desc": "Unpitted, natural condition, with controlled moisture and consistent sizing. We offer a full range of sizes tailored to customer demand, suitable for food processing, baking, and direct consumption.",
                        "specs": {
                            "origin": "Mendoza",
                            "season": "Available year-round",
                            "markets": "Asia, Europe, Middle East and Latin America",
                            "packaging": "Bulk or 25 kg bags"
                        }
                    },
                    "pasas-uva": {
                        "category": "Dried Fruit",
                        "name": "Raisins",
                        "desc": "Dark, golden and pink varieties, sun-dried or mechanically dried and classified by size and grade.",
                        "specs": {
                            "origin": "San Juan",
                            "season": "Available year-round",
                            "markets": "Asia, Middle East",
                            "packaging": "Bulk and packed in 10 kg boxes"
                        }
                    },
                    "nueces": {
                        "category": "Nuts",
                        "name": "Walnuts",
                        "desc": "Available shelled or in-shell, classified by color, meeting international quality standards.",
                        "specs": {
                            "origin": "Mendoza",
                            "season": "April – June",
                            "markets": "Europe, Asia",
                            "packaging": "Shelled walnuts: 10 kg box · in-shell walnuts: 25 kg bags or bulk"
                        }
                    },
                    "aceite-oliva": {
                        "category": "Olive Oil",
                        "name": "Extra Virgin Olive Oil",
                        "desc": "Cold-pressed, acidity below 0.5%, certified extra virgin grade. Available in bulk or bottled.",
                        "specs": {
                            "origin": "Mendoza",
                            "season": "Available year-round",
                            "markets": "Brazil, Asia",
                            "packaging": "Bulk · bottled in 500 ml and 1 L"
                        }
                    }
                },
                "cta": {
                    "title": "Need a tailor-made product?",
                    "text": "We work with custom formats and private label according to each client's needs.",
                    "button": "Talk to us"
                }
            },
            "logistics": {
                "banner": {
                    "title": "LOGISTICS & TRADE TERMS",
                    "subtitle": "Professional export operations and international shipping"
                },
                "intro": {
                    "title": "Our Services",
                    "text": "Fruit Cascade Exports provides comprehensive export services covering all aspects of international trade. From documentation to final delivery, we ensure smooth, compliant, and efficient operations for importers worldwide."
                },
                "fobCif": {
                    "title": "FOB / CIF",
                    "subtitle": "We invite you to contact our commercial team to agree on the Incoterms that best fit your business requirements. We regularly operate under CIF and FOB conditions, ensuring efficiency, transparency, and compliance in every international operation.",
                    "fob": {
                        "title": "FOB (Free on Board)",
                        "desc": "Under FOB terms, Fruit Cascade Exports handles all processes up to loading the goods onto the vessel at the Argentine port of origin. This includes product preparation, quality control, export documentation, and delivery to the port.",
                        "handlesTitle": "WHAT WE HANDLE",
                        "handles": [
                            "Product sourcing and quality inspection",
                            "Export packaging and labeling",
                            "Export documentation and customs clearance",
                            "Transportation to Argentine port",
                            "Loading onto vessel",
                            "Bill of lading and export certificates"
                        ],
                        "buyer": "Buyer Responsibility: International shipping, insurance, and import customs clearance at destination port."
                    },
                    "cif": {
                        "title": "CIF (Cost, Insurance & Freight)",
                        "desc": "Under CIF terms, Fruit Cascade Exports provides a complete door-to-port service, including international shipping and insurance coverage to the destination port. This option offers maximum convenience for buyers.",
                        "handlesTitle": "WHAT WE HANDLE",
                        "handles": [
                            "All FOB services listed above",
                            "International ocean freight to destination port",
                            "Marine cargo insurance coverage",
                            "Coordination with shipping lines",
                            "Shipping schedule management",
                            "Complete documentation package"
                        ],
                        "buyer": "Buyer Responsibility: Import customs clearance at destination port."
                    }
                },
                "process": {
                    "title": "OUR EXPORT PROCESS",
                    "subtitle": "Professional handling at every stage from inquiry to delivery",
                    "steps": {
                        "1": { "title": "INQUIRY & QUOTATION", "desc": "Submit your requirements. We provide detailed product specifications, pricing, and shipping terms within 24-48 hours." },
                        "2": { "title": "ORDER CONFIRMATION", "desc": "Upon agreement, we issue a proforma invoice. Advance payment secures your order and initiates production scheduling." },
                        "3": { "title": "QUALITY CONTROL", "desc": "Products undergo rigorous inspection, testing, and certification to meet your specifications and international standards." },
                        "4": { "title": "EXPORT DOCUMENTATION", "desc": "We prepare all required export documents including certificates of origin, phytosanitary certificates, and commercial invoices." },
                        "5": { "title": "SHIPPING COORDINATION", "desc": "We arrange transportation to port, customs clearance, and vessel loading (FOB) or complete ocean freight (CIF)." },
                        "6": { "title": "DELIVERY & SUPPORT", "desc": "Complete documentation sent upon shipment. We provide ongoing support until goods arrive and beyond." }
                    }
                },
                "docs": {
                    "title": "Export Documentation",
                    "subtitle": "All necessary documents prepared for your shipment",
                    "list": [
                        "Commercial Invoice",
                        "Packing List",
                        "Bill of Lading",
                        "Certificate of Origin",
                        "Phytosanitary Certificate",
                        "Quality Certificates"
                    ],
                    "note": ""
                },
                "port": {
                    "title": "Port of Origin",
                    "subtitle": "Strategic location for efficient international shipping",
                    "text": [
                        "Our primary export operations utilize major Argentine ports including Buenos Aires and Rosario, offering excellent connectivity to global shipping routes.",
                        "These facilities provide modern infrastructure, efficient cargo handling, and regular vessel schedules to all major international destinations.",
                        "We work with established shipping lines ensuring reliable service, competitive freight rates, and consistent transit times to Asia, Middle East, Europe, and other global markets."
                    ]
                },
                "compliance": {
                    "title": "Regulatory Compliance",
                    "subtitle": "Meeting international standards and importing country requirements",
                    "items": {
                        "food": { "title": "Food Safety Standards", "text": "Full compliance with international food safety regulations including HACCP, GMP, and destination-specific requirements." },
                        "import": { "title": "Import Regulations", "text": "Expert knowledge of customs procedures, tariff codes, and regulatory requirements for each destination market." },
                        "trace": { "title": "Full Traceability", "text": "Complete traceability from producer to final destination ensuring transparency and accountability throughout supply chain." }
                    }
                },
                "cta": {
                    "title": "REQUEST PRODUCT INFORMATION",
                    "text": "Contact us for detailed specifications, certifications, pricing, and minimum order quantities.",
                    "button": "CONTACT US"
                },
                "gallery": {
                    "title": "Our Logistics in Action",
                    "subtitle": "Argentine ports connecting to global markets"
                }
            },
            "markets": {
                "banner": {
                    "title": "GLOBAL MARKETS",
                    "subtitle": "Serving importers and distributors worldwide"
                },
                "intro": {
                    "title": "Our Global Presence",
                    "text": "Fruit Cascade Exports has established strong presence in major global markets, delivering premium Argentine dried fruits and olive oil to importers, distributors, and wholesalers across continents. Our experience in international trade enables us to adapt to diverse regulatory requirements and business practices."
                },
                "advantages": {
                    "title": "OUR GLOBAL MARKET ADVANTAGES",
                    "items": {
                        "multi-market": {
                            "title": "Multi-Market Experience",
                            "text": "Proven track record serving diverse markets with different regulatory frameworks, quality expectations, and business practices."
                        },
                        "regulatory": {
                            "title": "Regulatory Knowledge",
                            "text": "Deep understanding of import regulations, customs procedures, and certification requirements for each destination market."
                        },
                        "flexible": {
                            "title": "Flexible Adaptation",
                            "text": "Ability to adapt products, packaging, and documentation to meet specific requirements of different markets and buyers."
                        },
                        "logistics": {
                            "title": "Reliable Logistics",
                            "text": "Established relationships with international shipping lines ensuring consistent service and competitive rates to all markets."
                        },
                        "supply": {
                            "title": "Consistent Supply",
                            "text": "Direct producer relationships ensure stable supply capacity to meet ongoing demand from multiple international markets."
                        },
                        "support": {
                            "title": "Dedicated Support",
                            "text": "Professional export team providing market-specific guidance and support throughout the entire import process."
                        }
                    }
                },
                "regions": {
                    "title": "Regions we serve",
                    "expertiseLabel": "MARKET EXPERTISE",
                    "popularProductsLabel": "Popular Products:",
                    "items": {
                        "asia": {
                            "title": "Asia",
                            "desc": "Asia represents one of our most important export destinations, with strong demand for premium dried fruits and olive oil. We serve major importers and food processors throughout the region, providing products that meet strict Asian quality standards and regulatory requirements.",
                            "expertise": [
                                "Compliance with Asian food safety regulations",
                                "Understanding of regional quality preferences",
                                "Established shipping routes and logistics networks",
                                "Flexible packaging options for Asian markets",
                                "Experience with Asian import documentation"
                            ],
                            "products": "Raisins, walnuts, and dried plums for food processing, retail distribution, and wholesale markets."
                        },
                        "china": {
                            "title": "China",
                            "desc": "China's growing demand for premium imported food products makes it a strategic market for our operations. We supply major Chinese importers with high-quality dried fruits and olive oil, meeting the country's stringent import regulations and consumer quality expectations.",
                            "expertise": [
                                "Full compliance with Chinese customs and AQSIQ requirements",
                                "Understanding of Chinese quality standards and labeling",
                                "Efficient shipping to major Chinese ports",
                                "Product specifications tailored for Chinese market preferences",
                                "Experience with Chinese import licensing procedures"
                            ],
                            "products": "Premium raisins, dried plums, and extra virgin olive oil for growing health-conscious Chinese consumer market."
                        },
                        "middle-east": {
                            "title": "Middle East",
                            "desc": "The Middle East is a vital market for our premium dried fruits and olive oil. We serve importers and distributors across the region, providing products that meet Halal certification requirements and regional quality standards. Our experience ensures smooth operations in this important market.",
                            "expertise": [
                                "Understanding of Middle Eastern quality preferences",
                                "Reliable shipping to Gulf and regional ports",
                                "Compliance with GCC standards and regulations",
                                "Flexible payment and documentation terms"
                            ],
                            "products": "Raisins, walnuts, and dried plums for food processing, retail distribution, and wholesale markets."
                        },
                        "europe": {
                            "title": "Europe",
                            "desc": "Europe's sophisticated food market values premium quality and traceability, making it an ideal destination for our products. We supply European importers and distributors with certified products meeting the EU's stringent food safety and quality regulations.",
                            "expertise": [
                                "Full compliance with EU food safety regulations",
                                "Understanding of European quality standards and certifications",
                                "Efficient shipping to major European ports",
                                "Complete traceability documentation as required by EU",
                                "Organic certification coordination when applicable"
                            ],
                            "products": "Extra virgin olive oil, premium walnuts, and organic dried fruits for European retail and food service sectors."
                        }
                    }
                },
                "expanding": {
                    "title": "Expanding to New Markets",
                    "text": "While we maintain strong presence in our established markets, Fruit Cascade Exports continuously explores opportunities in new regions. Our flexible operations and export expertise enable us to quickly adapt to emerging market requirements and establish reliable supply chains to new destinations. If your market is not listed above, we welcome the opportunity to discuss how we can support your import needs with our premium Argentine products."
                },
                "cta": {
                    "title": "REQUEST PRODUCT INFORMATION",
                    "text": "Contact us for detailed specifications, certifications, pricing, and minimum order quantities.",
                    "button": "CONTACT US"
                }
            },
            "footer": {
                "tagline": "Premium Argentine dried fruits and olive oil exporter serving global markets with quality and reliability.",
                "copyright": "© 2026 Fruit Cascade Exports. All rights reserved."
            },
            "header": {
                "menu": {
                    "open": "Open menu",
                    "close": "Close menu"
                },
                "nav": {
                    "ariaLabel": "Main Navigation"
                }
            },
            "language": {
                "selectorAria": "Select language"
            },
            "a11y": {
                "images": {
                    "home": {
                        "hero": "Fresh plums close-up",
                        "operations": "Argentine export operations and containers"
                    },
                    "about": {
                        "intro": "Argentine walnuts and product quality"
                    },
                    "logistics": {
                        "port": "Argentine port operations"
                    },
                    "contact": {
                        "card": "Port operations and global shipping"
                    },
                    "markets": {
                        "asia": "Ship and skyline - Asian trade routes",
                        "china": "China market - premium products",
                        "middleEast": "Port at sunset - Gulf shipping routes",
                        "europe": "European canal and port"
                    }
                }
            },
            "contactInfo": {
                "locationLabel": "Location",
                "locationValue": "Argentina - Serving global markets from South America",
                "emailLabel": "Email",
                "languagesLabel": "Languages",
                "languagesValue": "English & Spanish"
            },
            "contactForm": {
                "subject": "Fruit Cascade Exports - Inquiry",
                "productsLabel": "Products you're interested in",
                "productsPlaceholder": "e.g. Raisins, Dried Plums, Walnuts, Olive Oil",
                "quantitiesLabel": "Estimated quantities needed",
                "quantitiesPlaceholder": "e.g. 20ft container, 5 tonnes",
                "destinationLabel": "Destination port or country",
                "destinationPlaceholder": "e.g. Shanghai, Rotterdam",
                "requirementsLabel": "Any specific requirements or certifications",
                "requirementsPlaceholder": "Tell us about your requirements…",
                "submit": "SEND US AN EMAIL",
                "body": {
                    "products": "Products of interest",
                    "quantities": "Estimated quantities",
                    "destination": "Destination port or country",
                    "requirements": "Requirements / certifications"
                }
            },
            "seo": {
                "home": {
                    "title": "Fruit Cascade Exports – Premium Argentine Dried Fruits & Olive Oil",
                    "description": "Premium Argentine dried fruits and olive oil exporter. FOB & CIF operations serving Asia, China, Middle East, and Europe. Direct sourcing, full traceability."
                },
                "about": {
                    "title": "About Us – Fruit Cascade Exports",
                    "description": "Argentine export company specialized in premium dried fruits and extra virgin olive oil. Direct sourcing, full traceability, and expert logistics for global buyers."
                },
                "products": {
                    "title": "Our Products – Fruit Cascade Exports",
                    "description": "Premium Argentine raisins, dried plums, walnuts, and extra virgin olive oil for bulk export. Flexible packaging, international certifications, FOB & CIF available."
                },
                "logistics": {
                    "title": "Logistics & Trade Terms – Fruit Cascade Exports",
                    "description": "FOB and CIF export operations from Argentine ports. Complete documentation: certificate of origin, phytosanitary, bill of lading. Reliable shipping to Asia, Middle East, Europe."
                },
                "markets": {
                    "title": "Global Markets – Fruit Cascade Exports",
                    "description": "Serving importers and distributors in Asia, China, Middle East, and Europe with premium Argentine dried fruits and olive oil. Regulatory compliance for every destination."
                },
                "contact": {
                    "title": "Contact Us – Fruit Cascade Exports",
                    "description": "Contact our export team for product specifications, pricing, minimum order quantities, and shipping terms. Email: contact@fruitcascade.com"
                }
            }
        }
    },
    es: {
        translation: {
            "hero": {
                "title": "Agroalimentos Argentinos<br />Premium",
                "subtitle": "Directo del origen al mundo.<br />Frutos Secos y Aceite de oliva virgen extra.",
                "explore": "Explorar Productos",
                "contact": "Contactanos"
            },
            "nav": {
                "home": "Inicio",
                "products": "Productos",
                "about": "Nosotros",
                "contact": "Contacto",
                "logistics": "Logística",
                "markets": "Mercados"
            },
            "home": {
                "hero": {
                    "kicker": "Dedicación artesanal",
                    "title": "Fruta fresca, fruta seca y aceite de oliva de calidad superior",
                    "subtitle": "Un proceso riguroso de importación y exportación que garantiza frescura y la excelencia en cada etapa."
                },
                "products": {
                    "title": "Selección Destacada",
                                    "subtitle": "Tres categorías, un mismo compromiso: calidad de origen.",
                                    "cta": "Explorar todos los productos",
                                    "items": {
                                                            "freshFruit": {
                                                                                        "title": "Fruta Fresca",
                                                                                        "desc": "Cosechada y seleccionada cuidadosamente"
                                                            },
                                                            "driedFruit": {
                                                                                        "title": "Fruta Seca",
                                                                                        "desc": "Procesados con dedicación para preservar sus propiedades naturales"
                                                            },
                                                            "oliveOil": {
                                                                                        "title": "Aceite de Oliva",
                                                                                        "desc": "Extraído de olivas seleccionadas, prensado en frío"
                                                            }
                                    }
                },
                "videoGallery": {
                    "title": "PRODUCTOS DE CERCA",
                    "subtitle": "Una mirada rápida a la textura y selección en lotes reales."
                },
                "videoSpotlight": {
                    "aria": "Sección destacada de video de proceso",
                    "kicker": "Calidad en movimiento",
                    "title": "DEL PROCESO A LA EXPORTACIÓN",
                    "text": "Imágenes reales de producción en Argentina: manejo cuidadoso, trazabilidad y calidad lista para exportar."
                },
                "values": {
                    "title": "Productos Argentinos Premium",
                    "subtitle": "Obtenidos directamente de los mejores productores de Argentina, desde el origen",
                    "items": {
                        "fob": {
                            "title": "Expertos en FOB & CIF",
                            "content": "Operamos bajo términos FOB y CIF, con control total sobre documentación, controles de calidad y envíos desde puertos argentinos a su destino."
                        },
                        "quality": {
                            "title": "Garantía de Calidad",
                            "content": "Riguroso control de calidad y certificaciones internacionales. Trazabilidad completa desde el productor hasta el destino final."
                        },
                        "global": {
                            "title": "Alcance Global",
                            "content": "Sirviendo a importadores y distribuidores en Asia, China, Medio Oriente y Europa con logística confiable y conocimiento regulatorio."
                        },
                        "trusted": {
                            "title": "Su Socio de Exportación de Confianza",
                            "content": "Asociaciones a largo plazo, operaciones flexibles y soporte profesional. Nos adaptamos a sus necesidades y requerimientos del mercado."
                        }
                    }
                },
                "flexibility": {
                                        "title": "Adaptación Flexible",
                                        "text": "Capacidad de adaptar productos, embalaje y documentación para cumplir requisitos específicos de distintos mercados y compradores."
                },
                                "excellence": {
                                                        "title": "EXCELENCIA Y LOGÍSTICA GLOBAL EN PRODUCTOS ANDINOS",
                                                        "text": "Nos dedicamos al comercio global, operando soluciones integrales de importación y exportación a medida. Garantizamos trazabilidad y frescura en cada etapa de la cadena de suministro."
                                },
                                "markets": {
                                                        "title": "Presencia Internacional",
                                                        "subtitle": "Despachamos hacia los mercados más exigentes, e importamos desde Chile, con logística adaptada a cada destino.",
                                                        "items": {
                                                                                    "argentina": "Argentina",
                                                                                    "chile": "Chile",
                                                                                    "asia": "Asia",
                                                                                    "china": "China",
                                                                                    "middleEast": "Medio Oriente",
                                                                                    "europe": "Europa"
                                                        },
                                                        "cta": "Ver todos los mercados"
                                },
                                "cta": {
                                                        "title": "Impulse sus operaciones comerciales con nosotros",
                                                        "text": "Contactános para diseñar una solución logística y comercial a medida de tu negocio.",
                                                        "button": "Contactános"
                                }
            },
            "about": {
                "banner": {
                    "kicker": "Nuestra historia",
                    "title": "Sobre Fruit Cascade",
                    "subtitle": "Décadas de experiencia conectando productores argentinos con mercados internacionales."
                },
                "story": {
                    "kicker": "Origen y propósito",
                    "title": "Más de una década conectando la riqueza andina con el mundo",
                    "text": "Fruit Cascade nació con una convicción clara: llevar la pureza de la tierra andina más allá de cualquier frontera, respetando los tiempos de la naturaleza y honrando la confianza de quienes buscan excelencia.",
                    "cta": "Hablá con nosotros"
                },
                "legacy": {
                    "text": "Durante los últimos 14 años nos hemos consolidado como custodios de calidad. Sabemos que detrás de cada envío de fruta fresca, fruta seca y aceite de oliva, hay un compromiso con la salud, el sabor y la reputación de nuestros clientes en todo el mundo."
                },
                "craft": {
                    "title": "El arte de la selección y el detalle",
                    "items": {
                        "origin": {
                            "label": "En el origen",
                            "text": "Seleccionamos meticulosamente cada cultivo y lote, priorizando procesos cuidadosos que preserven las propiedades naturales y el carácter único de la región andina."
                        },
                        "process": {
                            "label": "En el proceso",
                            "text": "Cuidamos la trazabilidad y la manipulación de cada producto con estándares exigentes, asegurando que mantengan su frescura y valor nutritivo desde la cosecha hasta su destino."
                        },
                        "delivery": {
                            "label": "En la entrega",
                            "text": "Entendemos la dinámica del mercado global. Por eso, diseñamos soluciones de importación y exportación a la medida, adaptándonos con flexibilidad a las necesidades operativas de cada socio comercial."
                        }
                    }
                },
                "cta": {
                    "title": "Construyamos juntos su próxima operación comercial.",
                    "text": "Contáctanos y contános qué estás buscando.",
                    "button": "Contactános"
                }
            },
            "contact": {
                "banner": {
                    "title": "CONTACTANOS",
                    "subtitle": "Póngase en contacto con nuestro equipo de exportación"
                },
                "intro": {
                    "kicker": "Hablemos de su importación",
                    "title": "Hablemos de su importación",
                    "text": "Ya sea importador, distribuidor o mayorista en busca de frutas deshidratadas y Aceite de oliva virgen extra premium, nuestro equipo está listo para ayudarle. Contáctenos para especificaciones, precios, términos de envío y cualquier consulta sobre nuestros servicios."
                },
                "email": {
                    "title": "Envíenos un email",
                    "subtitle": "Qué incluir en su consulta:",
                    "items": {
                        "1": "Productos de interés",
                        "2": "Cantidad estimada",
                        "3": "Requisitos específicos o certificaciones",
                        "4": "Destino (puerto o país)"
                    }
                },
                "why": {
                    "title": "POR QUE CONTACTARNOS"
                }
            },
            "logistics": {
                "banner": {
                    "title": "LOGISTICA Y TERMINOS COMERCIALES",
                    "subtitle": "Operaciones de exportación profesionales y envío internacional"
                },
                "intro": {
                    "title": "Nuestros servicios",
                    "text": "Fruit Cascade Exports brinda servicios integrales de exportación que cubren todos los aspectos del comercio internacional. Desde la documentación hasta la entrega final, aseguramos operaciones fluidas, conformes y eficientes para importadores de todo el mundo."
                },
                "fobCif": {
                    "title": "FOB / CIF",
                    "subtitle": "Le invitamos a ponerse en contacto con nuestro equipo comercial para acordar los Incoterms que mejor se adapten a los requerimientos de su empresa. Trabajamos habitualmente bajo condiciones CIF y FOB, garantizando eficiencia, transparencia y cumplimiento en cada operación internacional.",
                    "fob": {
                        "title": "FOB (Free on Board)",
                        "desc": "Bajo términos FOB, Fruit Cascade Exports gestiona todos los procesos hasta cargar la mercadería en el buque en el puerto argentino de origen. Esto incluye preparación del producto, control de calidad, documentación de exportación y entrega al puerto.",
                        "handlesTitle": "LO QUE GESTIONAMOS",
                        "handles": [
                            "Abastecimiento de producto e inspección de calidad",
                            "Embalaje y etiquetado de exportación",
                            "Documentación de exportación y despacho aduanero",
                            "Transporte al puerto argentino",
                            "Carga al buque",
                            "Conocimiento de embarque y certificados de exportación"
                        ],
                        "buyer": "Responsabilidad del comprador: flete internacional, seguro y despacho de importación en el puerto de destino."
                    },
                    "cif": {
                        "title": "CIF (Cost, Insurance & Freight)",
                        "desc": "Bajo términos CIF, Fruit Cascade Exports ofrece un servicio completo hasta el puerto de destino, incluyendo flete internacional y cobertura de seguro hasta el puerto de destino. Esta opción ofrece máxima conveniencia para los compradores.",
                        "handlesTitle": "LO QUE GESTIONAMOS",
                        "handles": [
                            "Todos los servicios FOB listados arriba",
                            "Flete marítimo internacional hasta el puerto de destino",
                            "Cobertura de seguro de carga marítima",
                            "Coordinación con navieras",
                            "Gestión del cronograma de embarque",
                            "Paquete completo de documentación"
                        ],
                        "buyer": "Responsabilidad del comprador: despacho de importación en el puerto de destino."
                    }
                },
                "process": {
                    "title": "NUESTRO PROCESO DE EXPORTACION",
                    "subtitle": "Gestión profesional en cada etapa desde la consulta hasta la entrega",
                    "steps": {
                        "1": { "title": "CONSULTA Y COTIZACION", "desc": "Envíe sus requerimientos. Brindamos especificaciones detalladas, precios y términos de envío dentro de las 24-48 horas." },
                        "2": { "title": "CONFIRMACION DE PEDIDO", "desc": "Una vez acordado, emitimos una factura proforma. El pago anticipado asegura su pedido e inicia la programación de producción." },
                        "3": { "title": "CONTROL DE CALIDAD", "desc": "Los productos pasan por inspección rigurosa, pruebas y certificación para cumplir sus especificaciones y normas internacionales." },
                        "4": { "title": "DOCUMENTACION DE EXPORTACION", "desc": "Preparamos todos los documentos requeridos, incluyendo certificados de origen, certificados fitosanitarios y facturas comerciales." },
                        "5": { "title": "COORDINACION DE EMBARQUE", "desc": "Organizamos el transporte al puerto, el despacho aduanero y la carga al buque (FOB) o el flete marítimo completo (CIF)." },
                        "6": { "title": "ENTREGA Y SOPORTE", "desc": "Documentación completa enviada al momento del embarque. Brindamos soporte continuo hasta la llegada de la carga y más allá." }
                    }
                },
                "docs": {
                    "title": "Documentación de Exportación",
                    "subtitle": "Todos los documentos necesarios preparados para su envío",
                    "list": [
                        "Factura Comercial",
                        "Lista de Empaque",
                        "Conocimiento de Embarque (Bill of Lading)",
                        "Certificado de Origen",
                        "Certificado Fitosanitario",
                        "Certificados de Calidad"
                    ],
                    "note": ""
                },
                "port": {
                    "title": "Puerto de Origen",
                    "subtitle": "Ubicación estratégica para envíos internacionales eficientes",
                    "text": [
                        "Nuestras operaciones de exportación se desarrollan a través de los principales puertos de Argentina y Chile, incluyendo Buenos Aires, Rosario, Valparaíso y San Antonio, con una sólida conectividad hacia las principales rutas marítimas internacionales.",
                        "Estas instalaciones ofrecen infraestructura moderna, manejo eficiente de carga y salidas regulares a todos los destinos internacionales.",
                        "Trabajamos con navieras establecidas, asegurando servicio confiable, tarifas competitivas y tiempos de tránsito consistentes hacia Asia, Medio Oriente, Europa y otros mercados globales."
                    ]
                },
                "compliance": {
                    "title": "Cumplimiento Regulatorio",
                    "subtitle": "Cumpliendo estándares internacionales y requisitos del país importador",
                    "items": {
                        "food": { "title": "Normas de Seguridad Alimentaria", "text": "Cumplimiento total con normativas internacionales de seguridad alimentaria incluyendo HACCP, GMP y requisitos específicos por destino." },
                        "import": { "title": "Regulaciones de Importación", "text": "Conocimiento experto de procedimientos aduaneros, códigos arancelarios y requisitos regulatorios para cada mercado de destino." },
                        "trace": { "title": "Trazabilidad Completa", "text": "Trazabilidad completa desde el productor al destino final garantizando transparencia y responsabilidad en toda la cadena de suministro." }
                    }
                },
                "cta": {
                    "title": "SOLICITAR INFORMACION DE PRODUCTOS",
                    "text": "Contáctenos para especificaciones detalladas, certificaciones, precios y cantidades mínimas de pedido.",
                    "button": "CONTACTANOS"
                },
                "gallery": {
                    "title": "Nuestra Logística en Acción",
                    "subtitle": "Puertos argentinos conectando con mercados globales"
                }
            },
            "markets": {
                "banner": {
                    "title": "MERCADOS GLOBALES",
                    "subtitle": "Atendiendo importadores y distribuidores en todo el mundo"
                },
                "intro": {
                    "title": "Nuestra presencia global",
                    "text": "Fruit Cascade Exports tiene una fuerte presencia en mercados globales, entregando frutas deshidratadas y aceite de oliva argentinos premium a importadores, distribuidores y mayoristas en distintos continentes. Nuestra experiencia en comercio internacional nos permite adaptarnos a diversos requisitos regulatorios y prácticas comerciales."
                },
                "advantages": {
                    "title": "NUESTRAS VENTAJAS EN MERCADOS GLOBALES",
                    "items": {
                        "multi-market": {
                            "title": "Experiencia Multimercado",
                            "text": "Historial comprobado atendiendo mercados diversos con marcos regulatorios, expectativas de calidad y prácticas comerciales diferentes."
                        },
                        "regulatory": {
                            "title": "Conocimiento Regulatorio",
                            "text": "Profundo entendimiento de regulaciones de importación, procedimientos aduaneros y requisitos de certificación para cada mercado de destino."
                        },
                        "flexible": {
                            "title": "Adaptación Flexible",
                            "text": "Capacidad de adaptar productos, embalaje y documentación para cumplir requisitos específicos de distintos mercados y compradores."
                        },
                        "logistics": {
                            "title": "Logística Confiable",
                            "text": "Relaciones establecidas con navieras internacionales, asegurando servicio consistente y tarifas competitivas hacia todos los mercados."
                        },
                        "supply": {
                            "title": "Suministro Consistente",
                            "text": "Relaciones directas con productores aseguran capacidad de suministro estable para atender demanda sostenida en múltiples mercados."
                        },
                        "support": {
                            "title": "Soporte Dedicado",
                            "text": "Equipo profesional brindando guía y soporte específicos por mercado durante todo el proceso de importación."
                        }
                    }
                },
                "regions": {
                    "title": "Regiones que servimos",
                    "expertiseLabel": "EXPERIENCIA DE MERCADO",
                    "popularProductsLabel": "Productos populares:",
                    "items": {
                        "asia": {
                            "title": "Asia",
                            "desc": "Asia es uno de nuestros destinos de exportación más importantes, con fuerte demanda de frutas deshidratadas y aceite de oliva premium. Atendemos importadores y procesadores de alimentos en toda la región, con productos que cumplen estándares de calidad y requisitos regulatorios.",
                            "expertise": [
                                "Cumplimiento de normativas de seguridad alimentaria en Asia",
                                "Conocimiento de preferencias regionales de calidad",
                                "Rutas de envío y redes logísticas establecidas",
                                "Opciones de empaque flexibles para mercados asiáticos",
                                "Experiencia con documentación de importación en Asia"
                            ],
                            "products": "Pasas, nueces y ciruelas secas para procesamiento, distribución minorista y mercados mayoristas."
                        },
                        "china": {
                            "title": "China",
                            "desc": "La creciente demanda de alimentos importados premium en China lo convierte en un mercado estratégico. Suministramos a importadores chinos frutas deshidratadas y aceite de oliva de alta calidad, cumpliendo regulaciones exigentes y expectativas del consumidor.",
                            "expertise": [
                                "Cumplimiento con aduanas chinas y requisitos AQSIQ",
                                "Conocimiento de estándares y etiquetado en China",
                                "Envíos eficientes a los principales puertos chinos",
                                "Especificaciones adaptadas a preferencias del mercado chino",
                                "Experiencia en procedimientos de licencias de importación"
                            ],
                            "products": "Pasas premium, ciruelas secas y Aceite de oliva virgen extra para el creciente mercado de consumidores enfocados en salud."
                        },
                        "middle-east": {
                            "title": "Medio Oriente",
                            "desc": "Medio Oriente es un mercado vital para nuestras frutas deshidratadas y aceite de oliva premium. Atendemos importadores y distribuidores en toda la región, con productos que cumplen requisitos Halal y estándares regionales. Nuestra experiencia asegura operaciones fluidas en este mercado.",
                            "expertise": [
                                "Conocimiento de preferencias de calidad en Medio Oriente",
                                "Envíos confiables a puertos del Golfo y regionales",
                                "Cumplimiento con normas y regulaciones GCC",
                                "Términos flexibles de pago y documentación"
                            ],
                            "products": "Pasas, nueces y ciruelas secas para procesamiento, distribución minorista y mercados mayoristas."
                        },
                        "europe": {
                            "title": "Europa",
                            "desc": "El mercado europeo valora la calidad premium y la trazabilidad, por lo que es un destino ideal para nuestros productos. Suministramos a importadores y distribuidores europeos productos certificados que cumplen estrictas regulaciones de seguridad alimentaria y calidad de la UE.",
                            "expertise": [
                                "Cumplimiento con regulaciones de seguridad alimentaria de la UE",
                                "Conocimiento de estándares y certificaciones europeas",
                                "Envíos eficientes a principales puertos europeos",
                                "Documentación completa de trazabilidad según UE",
                                "Coordinación de certificación orgánica cuando aplica"
                            ],
                            "products": "Aceite de oliva virgen extra, nueces premium y frutas deshidratadas orgánicas para retail y food service."
                        }
                    }
                },
                "expanding": {
                    "title": "Expansión a Nuevos Mercados",
                    "text": "Mientras mantenemos presencia sólida en nuestros mercados establecidos, Fruit Cascade Exports explora continuamente oportunidades en nuevas regiones. Nuestra operación flexible y experiencia exportadora nos permite adaptarnos rápidamente a requisitos emergentes y establecer cadenas de suministro confiables en nuevos destinos. Si su mercado no está listado, le damos la bienvenida para discutir cómo podemos apoyar sus necesidades de importación con nuestros productos argentinos premium."
                },
                "cta": {
                    "title": "SOLICITAR INFORMACION DE PRODUCTOS",
                    "text": "Contáctenos para especificaciones detalladas, certificaciones, precios y cantidades mínimas de pedido.",
                    "button": "CONTACTANOS"
                }
            },
            "footer": {
                "tagline": "Exportador argentino de frutas deshidratadas y aceite de oliva, sirviendo mercados globales con calidad y confiabilidad.",
                "copyright": "© 2026 Fruit Cascade Exports. Todos los derechos reservados."
            },
            "products": {
                "banner": {
                    "title": "Alimentos seleccionados de calidad",
                    "subtitle": "Fruta fresca, fruta deshidratada, frutos secos y aceite de oliva, seleccionados minuciosamente para operaciones de importación y exportación."
                },
                "intro": {
                    "text": "Un proceso basado en la tradición, la selección experta y cuidados para llevar lo mejor de la tierra a cualquier mercado."
                },
                "specs": {
                    "origin": "Origen",
                    "season": "Temporada",
                    "markets": "Mercados",
                    "packaging": "Presentaciones"
                },
                "inquiry": "Enviar consulta",
                "items": {
                    "cerezas": {
                        "category": "Fruta fresca",
                        "name": "Cerezas",
                        "desc": "Cosechadas en su punto justo de conservación, con calibre y firmeza seleccionados para exportación en fresco.",
                        "specs": {
                            "origin": "Alto Valle de Río Negro y Neuquén",
                            "season": "Noviembre – Enero",
                            "markets": "Europa, Asia",
                            "packaging": "Cajas 5 kg · clamshell 250 g / 500 g"
                        }
                    },
                    "paltas": {
                        "category": "Fruta fresca",
                        "name": "Paltas",
                        "desc": "Variedad Hass, cosechada y calibrada para alcanzar el punto de conservación óptimo en destino.",
                        "specs": {
                            "origin": "Chile",
                            "season": "Agosto – Enero",
                            "markets": "Europa, Medio Oriente",
                            "packaging": "Según destino: caja plástica de 10 kg o caja de cartón de 4 kg"
                        }
                    },
                    "kiwis": {
                        "category": "Fruta fresca",
                        "name": "Kiwis",
                        "desc": "Pulpa firme y dulzura equilibrada, clasificados por calibre para los mercados más exigentes.",
                        "specs": {
                            "origin": "Chile",
                            "season": "Marzo – Octubre",
                            "markets": "Europa, Asia",
                            "packaging": "Caja plástica de 10 kg"
                        }
                    },
                    "limones": {
                        "category": "Fruta fresca",
                        "name": "Limones",
                        "desc": "Cáscara fina y alto rendimiento de jugo, gracias al clima del NOA.",
                        "specs": {
                            "origin": "Tucumán (NOA)",
                            "season": "Marzo – Septiembre",
                            "markets": "Europa, Medio Oriente, Asia",
                            "packaging": "Cajas 15 kg · granel"
                        }
                    },
                    "naranjas-pomelos": {
                        "category": "Fruta fresca",
                        "name": "Naranjas y Pomelos",
                        "desc": "Cítricos de pulpa jugosa y color intenso, seleccionados por calibre y grado brix.",
                        "specs": {
                            "origin": "Entre Ríos y Corrientes",
                            "season": "Mayo – Octubre",
                            "markets": "Europa, Medio Oriente",
                            "packaging": "Cajas 18 kg · granel"
                        }
                    },
                    "manzana": {
                        "category": "Fruta fresca",
                        "name": "Manzana",
                        "desc": "Variedades Red Delicious, Gala y Granny Smith, con guarda en frío para abastecer todo el año.",
                        "specs": {
                            "origin": "Alto Valle de Río Negro",
                            "season": "Febrero – Julio · guarda todo el año",
                            "markets": "Europa, Asia, Brasil",
                            "packaging": "Cajas 18 kg · bolsas retail 1 / 2 kg"
                        }
                    },
                    "peras": {
                        "category": "Fruta fresca",
                        "name": "Peras",
                        "desc": "Variedades Williams y Packham's, cosechadas y almacenadas bajo atmósfera controlada.",
                        "specs": {
                            "origin": "Alto Valle de Río Negro",
                            "season": "Enero – Mayo · guarda todo el año",
                            "markets": "Europa, Asia, Brasil",
                            "packaging": "Cajas 18 kg · bolsas retail 1 / 2 kg"
                        }
                    },
                    "durazno": {
                        "category": "Fruta fresca",
                        "name": "Durazno",
                        "desc": "Fruta de carozo con textura firme y dulzor natural, cosechada en plena temporada estival.",
                        "specs": {
                            "origin": "Mendoza",
                            "season": "Diciembre – Marzo",
                            "markets": "Europa, Asia",
                            "packaging": "Cajas 5 kg · clamshell 500 g"
                        }
                    },
                    "ciruela-seca": {
                        "category": "Fruta deshidratada",
                        "name": "Ciruela Seca",
                        "desc": "En condición natural, con carozo, con humedad controlada y calibre consistente. Ofrecemos una gama completa de tamaños adaptados a la demanda del cliente, aptas para procesamiento de alimentos, panificación y consumo directo.",
                        "specs": {
                            "origin": "Mendoza",
                            "season": "Disponible todo el año",
                            "markets": "Asia, Europa, Medio Oriente y Latinoamérica",
                            "packaging": "A granel o sacos de 25 kg"
                        }
                    },
                    "pasas-uva": {
                        "category": "Fruta deshidratada",
                        "name": "Pasas de Uva",
                        "desc": "Variedades morenas, rubias y rosadas, secadas al sol o mecánicamente y clasificadas por tamaño y grado.",
                        "specs": {
                            "origin": "San Juan",
                            "season": "Disponible todo el año",
                            "markets": "Asia, Medio Oriente",
                            "packaging": "A granel y fraccionado en cajas de 10 kg"
                        }
                    },
                    "nueces": {
                        "category": "Frutos secos",
                        "name": "Nueces",
                        "desc": "Disponibles en pulpa o con cáscara, clasificadas por color, cumpliendo los estándares internacionales de calidad.",
                        "specs": {
                            "origin": "Mendoza",
                            "season": "Abril – Junio",
                            "markets": "Europa, Asia",
                            "packaging": "Nuez pulpa: caja de 10 kg · nuez con cáscara: sacos de 25 kg o a granel"
                        }
                    },
                    "aceite-oliva": {
                        "category": "Aceite de oliva",
                        "name": "Aceite de Oliva Extra Virgen",
                        "desc": "Prensado en frío, acidez menor a 0.5%, grado extra virgen certificado. Disponible a granel o embotellado.",
                        "specs": {
                            "origin": "Mendoza",
                            "season": "Disponible todo el año",
                            "markets": "Brasil, Asia",
                            "packaging": "Granel · embotellado de 500 ml y 1 L"
                        }
                    }
                },
                "cta": {
                    "title": "¿Necesitás un producto a medida?",
                    "text": "Trabajamos formatos y marca privada según las necesidades de cada cliente.",
                    "button": "Hablá con nosotros"
                }
            },
            "header": {
                "menu": {
                    "open": "Abrir menú",
                    "close": "Cerrar menú"
                },
                "nav": {
                    "ariaLabel": "Navegación principal"
                }
            },
            "language": {
                "selectorAria": "Seleccionar idioma"
            },
            "a11y": {
                "images": {
                    "home": {
                        "hero": "Primer plano de ciruelas frescas",
                        "operations": "Operaciones portuarias y contenedores de exportación"
                    },
                    "about": {
                        "intro": "Nueces argentinas y calidad del producto"
                    },
                    "logistics": {
                        "port": "Operaciones en puerto argentino"
                    },
                    "contact": {
                        "card": "Operaciones portuarias y envíos globales"
                    },
                    "markets": {
                        "asia": "Buque y skyline: rutas comerciales asiáticas",
                        "china": "Mercado chino: productos premium",
                        "middleEast": "Puerto al atardecer: rutas hacia el Golfo",
                        "europe": "Canal europeo y puerto"
                    }
                }
            },
            "contactInfo": {
                "locationLabel": "Ubicación",
                "locationValue": "Argentina - Atendiendo mercados globales desde Sudamérica",
                "emailLabel": "Email",
                "languagesLabel": "Idiomas",
                "languagesValue": "Inglés y español"
            },
            "contactForm": {
                "subject": "Fruit Cascade Exports - Consulta",
                "productsLabel": "Productos de interés",
                "productsPlaceholder": "Ej.: pasas, ciruelas secas, nueces, aceite de oliva",
                "quantitiesLabel": "Cantidades estimadas",
                "quantitiesPlaceholder": "Ej.: contenedor 20ft, 5 toneladas",
                "destinationLabel": "Puerto o país de destino",
                "destinationPlaceholder": "Ej.: Shanghai, Rotterdam",
                "requirementsLabel": "Requisitos específicos o certificaciones",
                "requirementsPlaceholder": "Cuéntenos sus requerimientos…",
                "submit": "ENVIENOS UN EMAIL",
                "body": {
                    "products": "Productos de interés",
                    "quantities": "Cantidades estimadas",
                    "destination": "Puerto o país de destino",
                    "requirements": "Requisitos / certificaciones"
                }
            },
            "seo": {
                "home": {
                    "title": "Fruit Cascade Exports – Frutas Deshidratadas y Aceite de Oliva Argentinos Premium",
                    "description": "Exportador argentino de frutas deshidratadas y Aceite de oliva virgen extra. Operaciones FOB y CIF hacia Asia, China, Medio Oriente y Europa. Abastecimiento directo y trazabilidad completa."
                },
                "about": {
                    "title": "Nosotros – Fruit Cascade Exports",
                    "description": "Empresa exportadora argentina especializada en frutas deshidratadas y Aceite de oliva virgen extra premium. Abastecimiento directo, trazabilidad completa y logística experta para compradores globales."
                },
                "products": {
                    "title": "Nuestros Productos – Fruit Cascade Exports",
                    "description": "Pasas, ciruelas secas, nueces y Aceite de oliva virgen extra argentinos premium para exportación a granel. Empaque flexible, certificaciones internacionales, FOB y CIF disponibles."
                },
                "logistics": {
                    "title": "Logística y Términos Comerciales – Fruit Cascade Exports",
                    "description": "Operaciones de exportación FOB y CIF desde puertos argentinos. Documentación completa: certificado de origen, fitosanitario, conocimiento de embarque. Envíos a Asia, Medio Oriente y Europa."
                },
                "markets": {
                    "title": "Mercados Globales – Fruit Cascade Exports",
                    "description": "Atendiendo importadores y distribuidores en Asia, China, Medio Oriente y Europa con frutas deshidratadas y aceite de oliva argentinos premium. Cumplimiento regulatorio en cada destino."
                },
                "contact": {
                    "title": "Contactanos – Fruit Cascade Exports",
                    "description": "Contáctenos para especificaciones de productos, precios, cantidades mínimas y términos de envío. Email: contact@fruitcascade.com"
                }
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es',
        supportedLngs: ['es', 'en'],
        nonExplicitSupportedLngs: true,
        load: 'languageOnly',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
