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
                    "title": "Fruit Cascade Exports",
                    "subtitle": "Premium Argentine Dried Fruits & Olive Oil Exporter"
                },
                "products": {
                    "title": "Premium Argentine Products",
                    "subtitle": "Sourced directly from Argentina's finest producers",
                    "cta": "Explore All Products",
                    "items": {
                        "plums": {
                            "title": "Dried Plums",
                            "desc": "Superior quality plums for global markets"
                        },
                        "oliveOil": {
                            "title": "Extra Virgin Olive Oil",
                            "desc": "Certified quality from Argentine groves."
                        },
                        "raisins": {
                            "title": "Raisins",
                            "desc": "Premium dried grapes for bulk export."
                        },
                        "walnuts": {
                            "title": "Walnuts",
                            "desc": "Premium quality nuts for international buyers."
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
                "trusted": {
                    "kicker": "",
                    "title": "YOUR TRUSTED EXPORT PARTNER",
                    "text": "Fruit Cascade Exports specializes in FOB and CIF operations, delivering premium Argentine products to global markets with complete traceability and compliance. Direct sourcing, reliable logistics, and quality assurance for global importers and distributors.",
                    "items": {
                        "expertise": {
                            "title": "FOB & CIF Expertise",
                            "text": "Comprehensive export services including documentation, logistics coordination, and compliance with international trade regulations."
                        },
                        "quality": {
                            "title": "Quality Assurance",
                            "text": "Direct sourcing from Argentine producers with rigorous quality control, full traceability, and adherence to international standards."
                        },
                        "reach": {
                            "title": "Global Reach",
                            "text": "Established export channels to Asia, China, Middle East, and Europe with reliable shipping and timely delivery."
                        }
                    }
                },
                "operations": {
                    "kicker": "",
                    "title": "PROFESSIONAL EXPORT OPERATIONS",
                    "text": "We handle all aspects of international trade, from documentation to final delivery, ensuring smooth transactions for importers and distributors worldwide.",
                    "bullets": {
                        "1": "FOB and CIF terms available",
                        "2": "Complete export documentation handling",
                        "3": "International logistics coordination",
                        "4": "Compliance with importing country requirements"
                    },
                    "cta": "View logistics & terms"
                },
                "markets": {
                    "title": "SERVING GLOBAL MARKETS",
                    "subtitle": "Our products reach major markets across continents, backed by proven logistics networks and compliance expertise.",
                    "items": {
                        "asia": "Asia",
                        "china": "China",
                        "middleEast": "Middle East",
                        "europe": "Europe"
                    },
                    "cta": "Explore markets"
                },
                "cta": {
                    "title": "READY TO START IMPORTING?",
                    "text": "Contact our export team for product specifications, pricing, and shipping terms.",
                    "button": "Contact us"
                }
            },
            "about": {
                "banner": {
                    "title": "ABOUT US",
                    "subtitle": "Excellence in Argentine agri-food exports"
                },
                "intro": "Fruit Cascade Exports connects international buyers with premium Argentine dried fruits and extra virgin olive oil. We offer complete traceability from producer to final destination, ensuring quality at every step. Our expertise in export documentation, logistics, and regulatory compliance makes us your trusted partner in agri-food trade.",
                "blocks": {
                    "terroir": {
                        "title": "Argentine Terroir",
                        "content": "Our products come from Argentina's finest growing regions—olive groves, vineyards, and orchards that benefit from exceptional climate and soil. The olive groves and fruit orchards of Mendoza and San Juan produce world-class quality year after year."
                    },
                    "source": {
                        "title": "Quality at the Source",
                        "content": "We work directly with producers to ensure consistent quality. Our dried plums, raisins, walnuts, and olive oil meet international standards and certifications. Every shipment is backed by quality documentation and full traceability."
                    },
                    "trusted": {
                        "title": "Trusted Quality",
                        "content": "Extra virgin olive oil cold-pressed with acidity below 0.5%, certified for international markets. Our commitment to excellence extends across all product lines, from bulk exports to private label solutions."
                    }
                },
                "reliable": {
                    "kicker": "",
                    "title": "YOUR RELIABLE ARGENTINE EXPORT PARTNER",
                    "p1": "Fruit Cascade Exports is an Argentine export company specialized in the international commercialization of premium dried fruits and extra virgin olive oil.",
                    "p2": "We operate under FOB and CIF terms, serving global markets including Asia, China, Middle East, and Europe. Our expertise lies in connecting international buyers with Argentina's finest agricultural producers.",
                    "p3": "Through direct sourcing relationships and rigorous quality control protocols, we ensure that every shipment meets international standards and buyer specifications.",
                    "cta": "Contact our team"
                },
                "commitment": {
                    "title": "Our commitment to excellence",
                    "subtitle": "Built on principles of quality, reliability, and professional service",
                    "items": {
                        "direct": {
                            "title": "Direct sourcing",
                            "text": "We work directly with Argentine producers, establishing strong partnerships that ensure consistent quality and supply reliability for our international clients."
                        },
                        "quality": {
                            "title": "Quality control",
                            "text": "Complete traceability from farm to port, with rigorous quality inspections and compliance with international food safety standards at every stage."
                        },
                        "expertise": {
                            "title": "Export expertise",
                            "text": "Comprehensive knowledge of international trade regulations, customs procedures, and logistics management ensuring smooth operations for every shipment."
                        }
                    }
                },
                "why": {
                    "title": "Why international buyers choose us",
                    "subtitle": "",
                    "items": {
                        "origin": { "title": "Argentine Origin", "text": "Direct access to Argentina's premium agricultural regions, known globally for exceptional dried fruits and olive oil production." },
                        "partnerships": { "title": "Long-Term Partnerships", "text": "Committed to building lasting relationships with importers, distributors, and wholesalers through consistent quality and reliable service." },
                        "track": { "title": "Proven Track Record", "text": "Established export operations with successful shipments to major markets across Asia, Middle East, and Europe." },
                        "flexible": { "title": "Flexible Operations", "text": "Adaptable to different market requirements, packaging specifications, and regulatory standards across various importing countries." },
                        "trace": { "title": "Full Traceability", "text": "Complete documentation and tracking from producer to final destination, meeting all regulatory and compliance requirements." },
                        "support": { "title": "Professional Support", "text": "Dedicated export team providing comprehensive assistance from initial inquiry through delivery and beyond." }
                    }
                },
                "partner": {
                    "kicker": "",
                    "title": "REQUEST PRODUCT INFORMATION",
                    "text": "Contact us for detailed specifications, certifications, pricing, and minimum order quantities.",
                    "cta": "CONTACT US"
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
                    "title": "OUR PRODUCTS",
                    "subtitle": "Premium Argentine dried fruits and extra virgin olive oil"
                },
                "intro": {
                    "title": "Our Selection",
                    "text": "Fruit Cascade Exports offers a carefully selected range of premium products sourced directly from Argentina's finest agricultural regions. Each product meets international quality standards and is available for bulk export with flexible packaging options."
                },
                "specs": {
                    "title": "Specifications",
                    "origin": "Origin",
                    "format": "Export Format",
                    "quality": "Quality Standards"
                },
                "viewDetails": "View details",
                "requestInfo": "Request info",
                "items": {
                    "raisins": {
                        "name": "Raisins",
                        "shortDesc": "Natural sun-dried or mechanically dried, sorted by size and grade.",
                        "desc": "Our raisins are produced from premium Argentine grapes, carefully dried and processed to maintain natural sweetness and nutritional value. Suitable for food processing, baking, and direct consumption markets.",
                        "specs": {
                            "origin": "Argentina",
                            "format": "Bulk packaging or private label options available",
                            "quality": "Natural sun-dried or mechanically dried, sorted by size and grade"
                        }
                    },
                    "dried-plums": {
                        "name": "Dried Plums",
                        "shortDesc": "Unpitted in natural condition, internationally certified.",
                        "desc": "Premium Argentine dried plums (prunes) processed to international standards with controlled moisture content and consistent sizing. We offer a full range of plum sizes tailored to customer demand, suitable for food processing, baking, and direct consumption markets.",
                        "specs": {
                            "origin": "Argentina",
                            "format": "Bulk containers or custom private label packaging",
                            "quality": "Unpitted in natural condition, moisture controlled, internationally certified"
                        }
                    },
                    "walnuts": {
                        "name": "Walnuts",
                        "shortDesc": "Light or amber kernels, meets international nut quality standards.",
                        "desc": "Argentine walnuts are recognized globally for their superior quality and flavor profile. Our walnuts are carefully harvested, processed, and graded to meet strict international standards. Available in-shell or as shelled kernels in various sizes and grades for global food industry and retail markets.",
                        "specs": {
                            "origin": "Argentina",
                            "format": "In-shell or shelled kernels, bulk packaging",
                            "quality": "Sorted by size, light or amber kernels, meets international nut quality standards"
                        }
                    },
                    "olive-oil": {
                        "name": "Extra Virgin Olive Oil",
                        "shortDesc": "Cold-pressed, acidity < 0.5%, certified extra virgin grade.",
                        "desc": "Premium extra virgin olive oil from Argentina's finest olive groves, cold-pressed to preserve natural flavor, aroma, and health benefits. Our olive oil meets strict international quality standards including low acidity levels and certified extra virgin classification, suitable for wholesale, retail, and food service markets worldwide.",
                        "specs": {
                            "origin": "Argentina",
                            "format": "Bulk containers or bottled under private label",
                            "quality": "Cold-pressed, acidity < 0.5%, certified extra virgin grade"
                        }
                    }
                },
                "cta": {
                    "title": "REQUEST PRODUCT INFORMATION",
                    "text": "Contact us for detailed specifications, certifications, pricing, and minimum order quantities.",
                    "button": "CONTACT US"
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
                    "title": "Fruit Cascade Exports",
                    "subtitle": "Exportador argentino premium de frutas deshidratadas y aceite de oliva"
                },
                "products": {
                    "title": "Productos Argentinos Premium",
                    "subtitle": "Obtenidos directamente de los mejores productores de Argentina, desde el origen",
                    "cta": "Explorar Todos los Productos",
                    "items": {
                        "plums": {
                            "title": "Ciruelas Secas",
                            "desc": "Ciruelas de calidad superior para mercados globales."
                        },
                        "oliveOil": {
                            "title": "Aceite de oliva virgen extra",
                            "desc": "Calidad certificada de olivares argentinos."
                        },
                        "raisins": {
                            "title": "Pasas de Uva",
                            "desc": "Pasas de uva premium para exportación a granel."
                        },
                        "walnuts": {
                            "title": "Nueces",
                            "desc": "Nueces premium para compradores internacionales."
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
                "trusted": {
                    "kicker": "",
                    "title": "SU SOCIO EXPORTADOR DE CONFIANZA",
                    "text": "Fruit Cascade Exports se especializa en operaciones FOB y CIF, entregando productos argentinos premium a mercados globales con trazabilidad y cumplimiento completos. Abastecimiento directo, logística confiable y aseguramiento de calidad para importadores y distribuidores globales.",
                    "items": {
                        "expertise": {
                            "title": "Adaptación Flexible",
                            "text": "Capacidad de adaptar productos, embalaje y documentación para cumplir requisitos específicos de distintos mercados y compradores."
                        },
                        "quality": {
                            "title": "Garantía de Calidad",
                            "text": "Abastecimiento directo de productores argentinos con control de calidad riguroso, trazabilidad completa y adhesión a estándares internacionales."
                        },
                        "reach": {
                            "title": "Alcance Global",
                            "text": "Canales de exportación establecidos en Asia, China, Medio Oriente y Europa con envíos confiables y entregas a tiempo."
                        }
                    }
                },
                "operations": {
                    "kicker": "",
                    "title": "OPERACIONES DE EXPORTACION PROFESIONALES",
                    "text": "Nos encargamos de todos los aspectos del comercio internacional, desde la documentación hasta la entrega final, asegurando transacciones fluidas para importadores y distribuidores de todo el mundo.",
                    "bullets": {
                        "1": "Términos FOB y CIF disponibles",
                        "2": "Gestión completa de documentación de exportación",
                        "3": "Coordinación logística internacional",
                        "4": "Cumplimiento con requisitos del país importador"
                    },
                    "cta": "Ver logística y términos"
                },
                "markets": {
                    "title": "SIRVIENDO MERCADOS GLOBALES",
                    "subtitle": "Nuestros productos llegan a los principales mercados a través de redes logísticas probadas y experiencia en cumplimiento.",
                    "items": {
                        "asia": "Asia",
                        "china": "China",
                        "middleEast": "Medio Oriente",
                        "europe": "Europa"
                    },
                    "cta": "Explorar mercados"
                },
                "cta": {
                    "title": "LISTO PARA COMENZAR A IMPORTAR?",
                    "text": "Contacte a nuestro equipo de exportación para especificaciones, precios y términos de envío.",
                    "button": "Contactanos"
                }
            },
            "about": {
                "banner": {
                    "title": "NOSOTROS",
                    "subtitle": "Excelencia en exportaciones agroalimentarias argentinas"
                },
                "intro": "Fruit Cascade Exports conecta compradores internacionales con frutos secos y Aceite de oliva virgen extra argentinos premium. Ofrecemos trazabilidad completa desde el productor hasta el destino final, asegurando calidad en cada paso. Nuestra experiencia en documentación de exportación, logística y cumplimiento regulatorio nos convierte en su socio de confianza en el comercio agroalimentario.",
                "blocks": {
                    "terroir": {
                        "title": "Terroir y Origen Argentino",
                        "content": "Nuestros productos provienen de las mejores regiones productivas de Argentina—olivares, viñedos y huertos que se benefician de un clima y suelo excepcionales. Los olivares y huertos de Mendoza y San Juan producen calidad de clase mundial año tras año."
                    },
                    "source": {
                        "title": "Calidad en el Origen",
                        "content": "Trabajamos directamente con productores para asegurar una calidad consistente. Nuestras ciruelas secas, pasas, nueces y aceite de oliva cumplen con estándares y certificaciones internacionales. Cada envío está respaldado por documentación de calidad y trazabilidad completa."
                    },
                    "trusted": {
                        "title": "Calidad Confiable",
                        "content": "Aceite de oliva virgen extra prensado en frío con acidez inferior al 0.5%, certificado para mercados internacionales. Nuestro compromiso con la excelencia se extiende a todas las líneas de productos, desde exportaciones a granel hasta soluciones de marca privada."
                    }
                },
                "reliable": {
                    "kicker": "",
                    "title": "SU SOCIO EXPORTADOR ARGENTINO CONFIABLE",
                    "p1": "Fruit Cascade Exports es una empresa exportadora argentina especializada en la comercialización internacional de frutas deshidratadas premium y Aceite de oliva virgen extra.",
                    "p2": "Operamos bajo términos FOB y CIF, atendiendo mercados globales incluyendo Asia, China, Medio Oriente y Europa. Nuestra experiencia radica en conectar compradores internacionales con los mejores productores agrícolas de Argentina.",
                    "p3": "A través de relaciones de abastecimiento directo y protocolos rigurosos de control de calidad, aseguramos que cada envío cumpla con estándares internacionales y especificaciones del comprador.",
                    "cta": "Contactar al equipo"
                },
                "commitment": {
                    "title": "Nuestro compromiso con la excelencia",
                    "subtitle": "Basado en calidad, confiabilidad y servicio profesional",
                    "items": {
                        "direct": {
                            "title": "Abastecimiento directo",
                            "text": "Trabajamos directamente con productores argentinos, estableciendo alianzas sólidas que aseguran calidad consistente y confiabilidad de suministro para nuestros clientes internacionales."
                        },
                        "quality": {
                            "title": "Control de calidad",
                            "text": "Trazabilidad completa desde el campo hasta el puerto, con inspecciones rigurosas y cumplimiento con normas internacionales de seguridad alimentaria en cada etapa."
                        },
                        "expertise": {
                            "title": "Experiencia exportadora",
                            "text": "Conocimiento integral de regulaciones de comercio internacional, procedimientos aduaneros y gestión logística, asegurando operaciones fluidas en cada embarque."
                        }
                    }
                },
                "why": {
                    "title": "Por qué los compradores internacionales nos eligen",
                    "subtitle": "",
                    "items": {
                        "origin": { "title": "Origen Argentino", "text": "Acceso directo a regiones agrícolas premium de Argentina, reconocidas globalmente por su producción de frutas deshidratadas y aceite de oliva." },
                        "partnerships": { "title": "Relaciones a Largo Plazo", "text": "Comprometidos a construir vínculos duraderos con importadores, distribuidores y mayoristas mediante calidad constante y servicio confiable." },
                        "track": { "title": "Historial Comprobado", "text": "Operaciones de exportación establecidas con envíos exitosos a mercados clave en Asia, Medio Oriente y Europa." },
                        "flexible": { "title": "Operaciones Flexibles", "text": "Adaptables a requisitos de mercado, especificaciones de empaque y estándares regulatorios de distintos países importadores." },
                        "trace": { "title": "Trazabilidad Total", "text": "Documentación completa y seguimiento desde el productor hasta el destino final, cumpliendo requisitos regulatorios y de compliance." },
                        "support": { "title": "Soporte Profesional", "text": "Equipo de exportación dedicado brindando asistencia integral desde la consulta inicial hasta la entrega y más allá." }
                    }
                },
                "partner": {
                    "kicker": "",
                    "title": "SOLICITAR INFORMACION DE PRODUCTOS",
                    "text": "Contáctenos para especificaciones detalladas, certificaciones, precios y cantidades mínimas de pedido.",
                    "cta": "CONTACTANOS"
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
                "cta": {
                    "title": "SOLICITAR INFORMACION DE PRODUCTOS",
                    "text": "Contáctenos para especificaciones detalladas, certificaciones, precios y cantidades mínimas de pedido.",
                    "button": "CONTACTANOS"
                },
                "banner": {
                    "title": "NUESTROS PRODUCTOS",
                    "subtitle": "Frutas deshidratadas y Aceite de oliva virgen extra argentinos premium"
                },
                "intro": {
                    "title": "Nuestra selección",
                    "text": "Fruit Cascade Exports ofrece una selección cuidadosamente elegida de productos premium, obtenidos directamente de las mejores regiones agrícolas de Argentina. Cada producto cumple estándares internacionales de calidad y está disponible para exportación a granel con opciones de empaque flexibles."
                },
                "specs": {
                    "title": "Especificaciones",
                    "origin": "Origen",
                    "format": "Formato de Exportación",
                    "quality": "Estándares de calidad"
                },
                "viewDetails": "Ver detalles",
                "requestInfo": "Pedir información",
                "items": {
                    "raisins": {
                        "name": "Pasas de Uva",
                        "shortDesc": "Secadas al sol o mecánicamente, clasificadas por tamaño y grado.",
                        "desc": "Nuestras pasas se producen a partir de uvas argentinas premium, cuidadosamente deshidratadas y procesadas para mantener su dulzura natural y valor nutricional. Aptas para procesamiento de alimentos, panificación y consumo directo.",
                        "specs": {
                            "origin": "Argentina",
                            "format": "Empaque a granel u opciones de marca privada",
                            "quality": "Secadas al sol o mecánicamente, clasificadas por tamaño y grado"
                        }
                    },
                    "dried-plums": {
                        "name": "Ciruelas Secas",
                        "shortDesc": "Sin carozo en condición natural, certificadas internacionalmente.",
                        "desc": "Ciruelas secas argentinas premium (prunes) procesadas con estándares internacionales, con humedad controlada y calibre consistente. Ofrecemos una gama completa de tamaños adaptados a la demanda del cliente, aptas para procesamiento de alimentos, panificación y consumo directo.",
                        "specs": {
                            "origin": "Argentina",
                            "format": "Contenedores a granel o empaque a medida con marca privada",
                            "quality": "Sin carozo en condición natural, humedad controlada, certificadas internacionalmente"
                        }
                    },
                    "walnuts": {
                        "name": "Nueces",
                        "shortDesc": "Mariposa light o ámbar, cumple estándares internacionales de calidad.",
                        "desc": "Las nueces argentinas son reconocidas globalmente por su calidad superior y perfil de sabor. Se cosechan, procesan y clasifican cuidadosamente para cumplir estándares internacionales. Disponibles con cáscara o como mariposa en distintos tamaños y calidades para industria y retail.",
                        "specs": {
                            "origin": "Argentina",
                            "format": "Con cáscara o mariposa, empaque a granel",
                            "quality": "Clasificadas por tamaño, mariposa light o ámbar, cumple estándares internacionales"
                        }
                    },
                    "olive-oil": {
                        "name": "Aceite de oliva virgen extra",
                        "shortDesc": "Prensado en frío, acidez < 0.5%, grado extra virgen certificado.",
                        "desc": "Aceite de oliva virgen extra premium de los mejores olivares argentinos, prensado en frío para preservar sabor, aroma y beneficios para la salud. Cumple estrictos estándares internacionales, incluyendo baja acidez y certificación extra virgen, apto para mayoristas, retail y food service.",
                        "specs": {
                            "origin": "Argentina",
                            "format": "Contenedores a granel o embotellado con marca privada",
                            "quality": "Prensado en frío, acidez < 0.5%, grado extra virgen certificado"
                        }
                    }
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
    },
    zh: {
        translation: {
            "hero": {
                "title": "优质阿根廷<br />农产品",
                "subtitle": "从源头直接走向世界。<br />干果与特级初榨橄榄油。",
                "explore": "探索产品",
                "contact": "联系我们"
            },
            "nav": {
                "home": "首页",
                "products": "产品",
                "about": "关于我们",
                "contact": "联系",
                "logistics": "物流",
                "markets": "市场"
            },
            "home": {
                "hero": {
                    "title": "Fruit Cascade Exports",
                    "subtitle": "优质阿根廷干果与橄榄油出口商"
                },
                "products": {
                    "title": "优质阿根廷产品",
                    "subtitle": "直接来源于阿根廷最好的生产商",
                    "cta": "探索所有产品",
                    "items": {
                        "plums": {
                            "title": "西梅干",
                            "desc": "天然去核，通过国际认证。"
                        },
                        "oliveOil": {
                            "title": "特级初榨橄榄油",
                            "desc": "冷榨，酸度 < 0.5%，认证特级初榨等级。"
                        },
                        "raisins": {
                            "title": "葡萄干",
                            "desc": "天然日晒或机械干燥，按大小和等级分级。"
                        },
                        "walnuts": {
                            "title": "核桃",
                            "desc": "浅色或琥珀色果仁，符合国际坚果质量标准。"
                        }
                    }
                },
                "values": {
                    "title": "优质阿根廷产品",
                    "subtitle": "直接来源于阿根廷最好的生产商",
                    "items": {
                        "fob": {
                            "title": "FOB & CIF 专业知识",
                            "content": "我们按照 FOB 和 CIF 条款运营，完全控制文件、质量检查以及从阿根廷港口到您目的地的运输。"
                        },
                        "quality": {
                            "title": "质量保证",
                            "content": "严格的质量控制和国际认证。从生产商到最终目的地的完整可追溯性。"
                        },
                        "global": {
                            "title": "全球覆盖",
                            "content": "凭借可靠的物流和法规知识，服务于亚洲、中国、中东和欧洲的进口商和分销商。"
                        },
                        "trusted": {
                            "title": "您值得信赖的出口合作伙伴",
                            "content": "长期合作伙伴关系，灵活的运营和专业支持。我们会适应您的需求和市场要求。"
                        }
                    }
                },
                "trusted": {
                    "kicker": "您值得信赖的出口伙伴",
                    "title": "以质量与可靠性出口",
                    "text": "Fruit Cascade Exports 专注于优质阿根廷干果与特级初榨橄榄油。我们连接生产商与国际买家，确保合规、可追溯与可靠物流。",
                    "items": {
                        "expertise": {
                            "title": "FOB & CIF 专业知识",
                            "text": "完整出口文件管理与专业协调，从询盘到交付全流程支持。"
                        },
                        "quality": {
                            "title": "质量保证",
                            "text": "严格质控、国际认证，以及从生产商到目的地的全程可追溯。"
                        },
                        "reach": {
                            "title": "全球覆盖",
                            "text": "服务亚洲、中国、中东与欧洲市场，拥有可靠航线与市场经验。"
                        }
                    }
                },
                "operations": {
                    "kicker": "专业出口运营",
                    "title": "从阿根廷到您的目的地",
                    "text": "我们端到端管理出口运营——文件、合规、质检与运输——让您更安心地进口。",
                    "bullets": {
                        "1": "提供 FOB 与 CIF 条款",
                        "2": "完整出口文件管理",
                        "3": "国际物流协调",
                        "4": "符合进口国要求"
                    },
                    "cta": "查看物流与条款"
                },
                "markets": {
                    "title": "服务全球市场",
                    "subtitle": "通过强大的物流网络与区域合规经验，我们的产品抵达关键目的地。",
                    "items": {
                        "asia": "亚洲",
                        "china": "中国",
                        "middleEast": "中东",
                        "europe": "欧洲"
                    },
                    "cta": "探索市场"
                },
                "cta": {
                    "title": "准备开始进口？",
                    "text": "联系出口团队获取规格、报价与运输条款。",
                    "button": "联系我们"
                }
            },
            "about": {
                "banner": {
                    "title": "关于我们",
                    "subtitle": "卓越的阿根廷农产品出口"
                },
                "intro": "Fruit Cascade Exports 将国际买家与优质阿根廷干果和特级初榨橄榄油联系起来。我们提供从生产商到最终目的地的完整可追溯性，确保每一步的质量。我们在出口文件、物流和法规合规方面的专业知识使我们成为您值得信赖的农产品贸易合作伙伴。",
                "blocks": {
                    "terroir": {
                        "title": "阿根廷风土",
                        "content": "我们的产品来自阿根廷最好的种植区——受益于特殊气候和土壤的橄榄园、葡萄园和果园。门多萨和圣胡安的橄榄园和果园年复一年地生产出世界级的质量。"
                    },
                    "source": {
                        "title": "源头质量",
                        "content": "我们直接与生产商合作以确保始终如一的质量。我们的西梅干、葡萄干、核桃和橄榄油符合国际标准和认证。每批货物都有质量文件和完整的可追溯性支持。"
                    },
                    "trusted": {
                        "title": "值得信赖的质量",
                        "content": "冷榨特级初榨橄榄油，酸度低于 0.5%，经认证可用于国际市场。我们要卓越的承诺延伸到所有产品线，从散装出口到自有品牌解决方案。"
                    }
                },
                "reliable": {
                    "kicker": "可靠的阿根廷出口伙伴",
                    "title": "为国际买家而打造",
                    "p1": "Fruit Cascade Exports 将国际买家与优质阿根廷干果和特级初榨橄榄油连接起来。",
                    "p2": "我们提供全流程支持——文件、质量控制与物流——让您的进口更顺畅、更可靠。",
                    "cta": "联系团队"
                },
                "commitment": {
                    "title": "我们对卓越的承诺",
                    "subtitle": "以质量、可靠性与专业服务为基础",
                    "items": {
                        "direct": {
                            "title": "直接采购",
                            "text": "与阿根廷生产商直接合作，确保稳定品质与具有竞争力的出口方案。"
                        },
                        "quality": {
                            "title": "质量控制",
                            "text": "装运前检查、认证与可追溯体系，符合国际采购标准。"
                        },
                        "expertise": {
                            "title": "出口经验",
                            "text": "FOB/CIF 条款、文件管理与物流协调，覆盖我们服务的各大市场。"
                        }
                    }
                },
                "why": {
                    "title": "国际买家为何选择我们",
                    "subtitle": "专业出口运营，降低风险并简化采购流程",
                    "items": {
                        "origin": { "title": "阿根廷产地", "text": "来自成熟产区与可信赖生产商的优质货源。" },
                        "track": { "title": "可靠履约", "text": "面向亚洲、中国、中东与欧洲的稳定出口经验。" },
                        "custom": { "title": "灵活定制", "text": "包装、规格与文件按买家要求调整。" },
                        "halal": { "title": "合规支持", "text": "食品安全、可追溯与地区认证的支持与协调。" },
                        "trace": { "title": "全程追溯", "text": "从生产商到目的地，每一步都有质量文件。" },
                        "support": { "title": "全流程服务", "text": "从询盘到交付，沟通清晰、时间可靠。" }
                    }
                },
                "partner": {
                    "kicker": "与可信赖的出口商合作",
                    "title": "Fruit Cascade Exports",
                    "text": "了解我们如何用优质阿根廷产品与可靠运营支持您的下一次进口。",
                    "cta": "立即联系"
                }
            },
            "contact": {
                "banner": {
                    "title": "联系我们",
                    "subtitle": "请与我们的出口团队联系。无论您是进口商、分销商还是批发商，我们都在这里为您提供帮助。"
                },
                "intro": {
                    "kicker": "讨论您的进口需求",
                    "title": "讨论您的进口需求",
                    "text": "无论您是进口商、分销商还是批发商，正在寻找优质阿根廷干果与橄榄油，我们的出口团队都愿意协助。欢迎咨询规格、报价与运输条款。"
                },
                "email": {
                    "title": "发送邮件咨询",
                    "subtitle": "为了便于我们准备报价，请在询盘中包含以下信息：",
                    "items": {
                        "1": "感兴趣的产品",
                        "2": "预计需求数量",
                        "3": "FOB 或 CIF 条款（或灵活）",
                        "4": "目的港或国家"
                    }
                },
                "why": {
                    "title": "为什么联系我们"
                }
            },
            "logistics": {
                "banner": {
                    "title": "物流与贸易条款",
                    "subtitle": "FOB 和 CIF 专业知识。布宜诺斯艾利斯和罗萨里奥港口。完整的文档和合规性。"
                },
                "intro": {
                    "title": "我们的服务",
                    "text": "Fruit Cascade Exports 提供涵盖国际贸易各个环节的全面出口服务。从文件到最终交付，我们确保为全球进口商提供顺畅、合规和高效的运营。"
                },
                "fobCif": {
                    "title": "FOB 与 CIF",
                    "subtitle": "我们提供灵活的贸易条款以满足您的业务需求",
                    "fob": {
                        "title": "FOB (船上交货)",
                        "desc": "我们处理直到在启运港将货物装上船的所有事宜。您安排并支付国际运费和保险。当您有既定的运输合作伙伴或更愿意控制主要运输航程时，这是理想的选择。"
                    },
                    "cif": {
                        "title": "CIF (成本、保险费和运费)",
                        "desc": "我们包括到您目的港的国际运费和海运保险。您在港口接收货物并处理当地海关和内陆运输。这是简化采购的理想选择，只需一个联系点。"
                    }
                },
                "process": {
                    "title": "出口流程",
                    "subtitle": "从询价到交付：我们的六步出口工作流程",
                    "steps": {
                        "1": { "title": "询价", "desc": "您将您的要求发送给我们：产品、数量、规格和首选条款（FOB 或 CIF）。" },
                        "2": { "title": "订单确认", "desc": "我们确认可行性、价格和交货条款。签发正式报价单和形式发票。" },
                        "3": { "title": "质量控制", "desc": "装运前质量检查和认证。所有产品在装载前均符合国际标准。" },
                        "4": { "title": "出口文件", "desc": "我们准备所有所需文件：商业发票、装箱单、提单、原产地证书和植物检疫文件。" },
                        "5": { "title": "运输", "desc": "货物在阿根廷港口（布宜诺斯艾利斯或罗萨里奥）装载并运往您的目的地。" },
                        "6": { "title": "交付", "desc": "货物到达您的港口。我们在需要时协助协调清关。" }
                    }
                },
                "docs": {
                    "title": "出口文件",
                    "subtitle": "为您的货物准备的所有必要文件",
                    "list": [
                        "商业发票",
                        "装箱单",
                        "提单 (Bill of Lading)",
                        "原产地证书",
                        "植物检疫证书",
                        "质量证书"
                    ],
                    "note": "我们遵守 HACCP、GMP，并保持从生产商到最终目的地的完整可追溯性。"
                },
                "port": {
                    "title": "原产地港口",
                    "subtitle": "高效国际运输的战略位置",
                    "text": [
                        "我们的主要出口业务通过布宜诺斯艾利斯和罗萨里奥等主要阿根廷港口进行，与全球航运路线具有出色的连通性。",
                        "这些设施提供现代化基础设施、高效货物处理以及定期前往所有主要国际目的地的船班。",
                        "我们与知名船运公司合作，确保可靠的服务、有竞争力的运费以及前往亚洲、中东、欧洲和其他全球市场的一致转运时间。"
                    ]
                },
                "compliance": {
                    "title": "合规性",
                    "subtitle": "满足国际标准和进口国要求",
                    "items": {
                        "food": { "title": "食品安全标准", "text": "完全符合国际食品安全法规，包括 HACCP、GMP 及目的地特定要求。" },
                        "import": { "title": "进口法规", "text": "对每个目的地市场的海关程序、关税代码和监管要求有专业知识。" },
                        "trace": { "title": "全程可追溯", "text": "从生产商到最终目的地的完整可追溯性，确保整个供应链的透明度与责任制。" }
                    }
                },
                "cta": {
                    "title": "需要物流支持？",
                    "text": "我们的出口团队随时准备讨论您的具体要求并提供定制运输解决方案。",
                    "button": "联系我们团队"
                },
                "gallery": {
                    "title": "我们的物流运作",
                    "subtitle": "阿根廷港口连接全球市场"
                }
            },
            "markets": {
                "banner": {
                    "title": "全球市场",
                    "subtitle": "亚洲、中国、中东、欧洲。我们将阿根廷优质产品与世界各地的进口商和分销商联系起来。"
                },
                "intro": {
                    "title": "我们的全球布局",
                    "text": "我们为关键地区的买家提供合规知识、可靠航线与出口协调，并根据目的地调整文件与包装方案。"
                },
                "advantages": {
                    "title": "为何在全球市场与我们合作",
                    "items": {
                        "multi-market": {
                            "title": "多市场经验",
                            "text": "我们为亚洲、中国、中东和欧洲的进口商提供针对每个地区的定制物流和合规支持。"
                        },
                        "regulatory": {
                            "title": "监管知识",
                            "text": "深入了解 AQSIQ、欧盟食品安全、清真和海湾合作委员会标准，以及主要市场的有机认证要求。"
                        },
                        "flexible": {
                            "title": "灵活适应",
                            "text": "适应您的目的地国家和买家规格的包装、文件和运输解决方案。"
                        },
                        "logistics": {
                            "title": "可靠物流",
                            "text": "从阿根廷港口进行出口协调，时间清晰、集装箱规划完善、沟通及时。"
                        },
                        "docs": {
                            "title": "文件支持",
                            "text": "为您的货物准备商业发票、装箱单、原产地证书与植物检疫等文件。"
                        },
                        "private-label": {
                            "title": "自有品牌方案",
                            "text": "灵活的形式与标签支持，满足买家与市场偏好。"
                        }
                    }
                },
                "regions": {
                    "title": "我们服务的地区",
                    "items": {
                        "asia": {
                            "title": "亚洲",
                            "desc": "符合食品安全、可靠的运输路线和适合区域要求的包装。葡萄干、核桃和西梅干是最受欢迎的产品之一。",
                            "products": "葡萄干, 核桃, 西梅干"
                        },
                        "china": {
                            "title": "中国",
                            "desc": "AQSIQ 注册和进口许可方面的专业知识。我们与主要港口和分销商合作，确保优质阿根廷产品的顺利清关和交付。",
                            "products": "优质葡萄干, 西梅干, 特级初榨橄榄油"
                        },
                        "middle-east": {
                            "title": "中东",
                            "desc": "清真认证和符合海湾合作委员会标准。与海湾港口和干果及橄榄油分销商有紧密联系。",
                            "products": "西梅干, 葡萄干, 特级初榨橄榄油"
                        },
                        "europe": {
                            "title": "欧洲",
                            "desc": "欧盟食品安全和可追溯性要求。我们在适用的情况下协调有机认证，并支持主要欧洲港口的进口商。",
                            "products": "特级初榨橄榄油, 葡萄干, 核桃, 西梅干"
                        }
                    }
                },
                "expanding": {
                    "title": "拓展新市场",
                    "text": "在巩固现有市场的同时，Fruit Cascade Exports 持续探索新地区的机遇。我们灵活的运营和出口经验使我们能够迅速适应新兴市场需求，为新目的地建立可靠的供应链。如果您的市场未在上方列出，我们欢迎就如何以优质阿根廷产品支持您的进口需求进行讨论。"
                },
                "cta": {
                    "title": "在您的市场与我们合作",
                    "text": "请联系我们讨论市场特定要求、法规以及我们如何支持您的进口业务。",
                    "button": "联系我们团队"
                }
            },
            "products": {
                "cta": {
                    "title": "申请产品信息",
                    "text": "请联系我们获取详细规格、认证、价格和最小订购量。",
                    "button": "联系我们"
                },
                "banner": {
                    "title": "我们的产品",
                    "subtitle": "优质阿根廷干果和特级初榨橄榄油。直接来源于阿根廷最好的农业区。"
                },
                "intro": {
                    "title": "精选产品",
                    "text": "Fruit Cascade Exports 提供精心甄选的优质阿根廷产品组合。我们直接与可靠生产商合作，并为买家提供文件、合规与物流支持。"
                },
                "specs": {
                    "title": "规格",
                    "origin": "产地",
                    "format": "出口格式",
                    "quality": "质量"
                },
                "viewDetails": "查看详情",
                "requestInfo": "咨询信息",
                "items": {
                    "raisins": {
                        "name": "葡萄干",
                        "shortDesc": "天然日晒或机械干燥，按大小和等级分级。",
                        "desc": "天然日晒或机械干燥，按大小和等级分级。非常适合食品加工、烘焙和直接食用。源自阿根廷最好的生产商。",
                        "specs": {
                            "origin": "阿根廷",
                            "format": "散装 / 自有品牌",
                            "quality": "日晒，按大小和等级分级"
                        }
                    },
                    "dried-plums": {
                        "name": "西梅干",
                        "shortDesc": "天然去核，通过国际认证。",
                        "desc": "天然去核，通过国际认证。水分控制，适合散装和集装箱出口。优质阿根廷西梅干。",
                        "specs": {
                            "origin": "阿根廷",
                            "format": "散装 / 集装箱",
                            "quality": "去核，天然状况，认证"
                        }
                    },
                    "walnuts": {
                        "name": "核桃",
                        "shortDesc": "浅色或琥珀色果仁，符合国际坚果质量标准。",
                        "desc": "浅色或琥珀色果仁，符合国际坚果质量标准。带壳或去壳，按大小分级。优质阿根廷核桃。",
                        "specs": {
                            "origin": "阿根廷",
                            "format": "带壳或去壳",
                            "quality": "按大小分级，国际标准"
                        }
                    },
                    "olive-oil": {
                        "name": "特级初榨橄榄油",
                        "shortDesc": "冷榨，酸度 < 0.5%，认证特级初榨等级。",
                        "desc": "冷榨，酸度 < 0.5%，认证特级初榨等级。散装或瓶装。源自阿根廷橄榄园。",
                        "specs": {
                            "origin": "阿根廷",
                            "format": "散装 / 瓶装",
                            "quality": "冷榨，酸度 < 0.5%，特级初榨"
                        }
                    }
                }
            },
            "footer": {
                "tagline": "优质阿根廷干果和橄榄油出口商，以质量和可靠性服务全球市场。"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es', // Default to Spanish as requested/implied context
        supportedLngs: ['es', 'en'],
        nonExplicitSupportedLngs: true,
        load: 'languageOnly',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
