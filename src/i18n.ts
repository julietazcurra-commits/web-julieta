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
                    "title": "Strategic Location and Global Flexibility",
                    "subtitle": "Fruit Cascade's competitive edge"
                },
                "intro": {
                    "text": "We design logistics solutions tailored to each client, optimizing delivery times and adapting to the demands of international trade."
                },
                "hub": {
                    "title": "A privileged logistics hub: the trans-Andean connection",
                    "text1": "Our operational headquarters is strategically centered in the province of Mendoza. This location places us at a key crossroads for international trade, thanks to our immediate proximity to the Andes mountain range and the main border crossings into Chile.",
                    "text2": "Unlike traditional routes that depend on the port of Buenos Aires, our proximity to Pacific ports allows us to channel shipments through Chile. This route significantly reduces maritime transit times to major global markets, giving our clients a decisive competitive advantage in preserving freshness and agility in the delivery of fresh fruit, dried fruit, and olive oil."
                },
                "incoterms": {
                    "title": "Comprehensive Incoterms solutions: flexibility tailored to you",
                    "subtitle": "We understand that every market and every client operates under particular financial and logistical frameworks. Over our 14 years of experience, we have built solid expertise managing operations under a wide range of Incoterms:",
                    "items": {
                        "terms": {
                            "title": "FOB, CIF, CFR, EXW, DDP operations and more:",
                            "text": "We adapt without restriction to whatever contracting scheme your company requires."
                        },
                        "docs": {
                            "title": "Comprehensive documentation and customs handling:",
                            "text": "We guarantee strict compliance with regulations and full traceability in every shipping mode."
                        },
                        "formats": {
                            "title": "Adaptable formats:",
                            "text": "We handle bulk, bottled, or private-label shipments with the same operational efficiency."
                        }
                    }
                },
                "global": {
                    "title": "Global reach without borders",
                    "text1": "No matter where in the world your company or commercial destination is located, our logistics network is structured to adapt with total flexibility to the routes, modes of transport, and specific conditions your market requires.",
                    "text2": "At Fruit Cascade, we turn the challenges of distance into fast, safe, and reliable connections."
                },
                "coordination": {
                    "title": "Direct port coordination",
                    "text1": "We work with trusted shipping lines and customs brokers to ensure every container departs on time.",
                    "text2": "Our team oversees every shipment to minimize delays and guarantee cargo integrity."
                },
                "cta": {
                    "title": "Need an optimized logistics scheme for your next order?",
                    "text": "We analyze your requirements and design the best supply route for your business.",
                    "button": "Get in touch"
                }
            },
            "markets": {
                "banner": {
                    "title": "Global Presence and Strategic Reach",
                    "subtitle": "We connect the best growing regions with the most competitive international markets, responding with agility and adaptability to the demands of every destination."
                },
                "intro": {
                    "text": "Our more than 14 years of experience and privileged logistics location allow us to efficiently supply clients in the world's leading trade hubs:"
                },
                "regions": {
                    "asia": {
                        "title": "Asia and China",
                        "text": "We serve highly demanding markets that value freshness, traceability, and premium quality in fresh and dried fruit. Our direct outlet through Pacific ports gives us a key competitive advantage in transit times to this region."
                    },
                    "middleEast": {
                        "title": "Middle East",
                        "text": "We provide carefully selected products adapted to the preservation and presentation standards required by local distributors and importers."
                    },
                    "europe": {
                        "title": "Europe",
                        "text": "We supply a highly regulated market, guaranteeing rigorous controls at every stage of the process and tailored commercialization formats."
                    },
                    "americas": {
                        "title": "Americas",
                        "text": "We maintain a solid distribution network across the region, offering continuous, agile, and flexible supply solutions for our commercial partners in North and South America."
                    }
                },
                "domestic": {
                    "title": "Domestic Market",
                    "text": "Beyond our international reach, we have a well-established operation in the domestic market, serving distributors, industries, and chains that seek a reliable, consistent, and high-quality supply with personalized attention."
                },
                "adaptation": {
                    "title": "Adapting to Local Regulations and Requirements",
                    "text": "Every market has its own dynamics, customs requirements, and consumption preferences. At Fruit Cascade, we adapt to:",
                    "items": [
                        "Various packaging and labeling formats (private label or bulk).",
                        "Flexible international logistics schemes (FOB, CIF, CFR, DDP, among others).",
                        "Specific quality, traceability, and cold-chain handling requirements according to the destination country."
                    ]
                },
                "cta": {
                    "title": "Want to bring our products to your region?",
                    "text": "We evaluate the best logistics and supply options for your market.",
                    "button": "Contact us"
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
                    "title": "Ubicación estratégica y flexibilidad global",
                    "subtitle": "La ventaja competitiva de Fruit Cascade"
                },
                "intro": {
                    "text": "Diseñamos soluciones logísticas a la medida de cada cliente, optimizando tiempos de entrega y adaptándonos a las exigencias del comercio internacional."
                },
                "hub": {
                    "title": "Un hub logístico privilegiado: la conexión trasandina",
                    "text1": "Nuestra sede operativa se encuentra estratégicamente centralizada en la provincia de Mendoza. Esta localización nos sitúa en un punto neurálgico clave para el comercio internacional, gracias a nuestra inmediata cercanía con la Cordillera de los Andes y los principales pasos fronterizos hacia Chile.",
                    "text2": "A diferencia de las rutas tradicionales que dependen del puerto de Buenos Aires, nuestra proximidad a los puertos del Pacífico nos permite canalizar los embarques a través de Chile. Esta ruta reduce significativamente los tiempos de tránsito marítimo hacia los principales mercados globales, otorgándole a nuestros clientes una ventaja competitiva determinante en la preservación de la frescura y la agilidad en la entrega de fruta fresca, fruta seca y aceite de oliva."
                },
                "incoterms": {
                    "title": "Soluciones integrales en Incoterms: flexibilidad a la medida",
                    "subtitle": "Entendemos que cada mercado y cada cliente opera bajo esquemas financieros y logísticos particulares. A lo largo de nuestros 14 años de trayectoria, hemos desarrollado una sólida experiencia gestionando operaciones bajo una amplia variedad de Incoterms:",
                    "items": {
                        "terms": {
                            "title": "Operaciones FOB, CIF, CFR, EXW, DDP y más:",
                            "text": "Nos adaptamos sin restricciones al esquema de contratación que su empresa requiera."
                        },
                        "docs": {
                            "title": "Manejo documental y aduanero integral:",
                            "text": "Garantizamos el cumplimiento riguroso de normativas y la trazabilidad completa en cada modalidad de envío."
                        },
                        "formats": {
                            "title": "Formatos adaptables:",
                            "text": "Realizamos despachos a granel, embotellado o marca privada con la misma eficiencia operativa."
                        }
                    }
                },
                "global": {
                    "title": "Alcance global sin fronteras",
                    "text1": "No importa en qué lugar del mundo se encuentre su empresa o destino comercial. Nuestra red logística está estructurada para adaptarse con total flexibilidad a las rutas, medios de transporte y condiciones específicas que exija su mercado.",
                    "text2": "En Fruit Cascade, transformamos los desafíos de la distancia en conexiones rápidas, seguras y confiables."
                },
                "coordination": {
                    "title": "Coordinación directa en puerto",
                    "text1": "Trabajamos con navieras y despachantes de confianza para asegurar que cada contenedor salga a tiempo.",
                    "text2": "Nuestro equipo supervisa cada despacho para minimizar demoras y garantizar la integridad de la carga."
                },
                "cta": {
                    "title": "¿Necesita un esquema logístico optimizado para su próximo pedido?",
                    "text": "Analizamos sus requerimientos y diseñamos la mejor ruta de suministro para su negocio.",
                    "button": "Consultar"
                }
            },
            "markets": {
                "banner": {
                    "title": "Presencia global y alcance estratégico",
                    "subtitle": "Conectamos las mejores regiones productivas con los mercados internacionales más competitivos, respondiendo con agilidad y adaptabilidad a las exigencias de cada destino."
                },
                "intro": {
                    "text": "Nuestra experiencia de más de 14 años y nuestra ubicación logística privilegiada nos permiten abastecer de manera eficiente a clientes en los principales hubs comerciales del mundo:"
                },
                "regions": {
                    "asia": {
                        "title": "Asia y China",
                        "text": "Atendemos mercados de alta exigencia que valoran la frescura, la trazabilidad y la calidad premium en fruta fresca y seca. Nuestra salida directa por los puertos del Pacífico nos otorga una ventaja competitiva clave en tiempos de tránsito hacia esta región."
                    },
                    "middleEast": {
                        "title": "Medio Oriente",
                        "text": "Proveemos productos cuidadosamente seleccionados y adaptados a los estándares de conservación y presentación requeridos por distribuidores e importadores locales."
                    },
                    "europe": {
                        "title": "Europa",
                        "text": "Abastecemos a un mercado altamente regulado, garantizando controles rigurosos en cada etapa del proceso y formatos de comercialización a la medida."
                    },
                    "americas": {
                        "title": "América",
                        "text": "Mantenemos una sólida red de distribución en la región, ofreciendo soluciones de abastecimiento continuas, ágiles y flexibles para nuestros socios comerciales de Norte y Sudamérica."
                    }
                },
                "domestic": {
                    "title": "Mercado Interno",
                    "text": "Además de nuestro alcance internacional, contamos con una operación consolidada en el mercado interno, atendiendo a distribuidores, industrias y cadenas que buscan un suministro confiable, constante y de alta calidad con atención personalizada."
                },
                "adaptation": {
                    "title": "Adaptación a Normativas y Requerimientos Locales",
                    "text": "Cada mercado tiene sus propias dinámicas, requisitos aduaneros y preferencias de consumo. En Fruit Cascade nos adaptamos a:",
                    "items": [
                        "Diversas modalidades de empaque y etiquetado (marca propia o a granel).",
                        "Esquemas de logística internacionales flexibles (FOB, CIF, CFR, DDP, entre otros).",
                        "Exigencias específicas de calidad, trazabilidad y manejo de la cadena de frío según el país de destino."
                    ]
                },
                "cta": {
                    "title": "¿Desea llevar nuestros productos a su región?",
                    "text": "Evaluamos las mejores opciones de logística y suministro para su mercado.",
                    "button": "Contáctanos"
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
