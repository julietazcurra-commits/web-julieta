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
