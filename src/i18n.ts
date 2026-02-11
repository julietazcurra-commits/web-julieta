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
                            "desc": "Unpitted in natural condition, internationally certified."
                        },
                        "oliveOil": {
                            "title": "Extra Virgin Olive Oil",
                            "desc": "Cold-pressed, acidity < 0.5%, certified extra virgin grade."
                        },
                        "raisins": {
                            "title": "Raisins",
                            "desc": "Natural sun-dried or mechanically dried, sorted by size and grade."
                        },
                        "walnuts": {
                            "title": "Walnuts",
                            "desc": "Light or amber kernels, meets international nut quality standards."
                        }
                    }
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
                    "kicker": "Your trusted export partner",
                    "title": "Exporting with quality and reliability",
                    "text": "Fruit Cascade Exports specializes in premium Argentine dried fruits and extra virgin olive oil. We connect producers with international buyers, ensuring compliance, traceability, and dependable logistics.",
                    "items": {
                        "expertise": {
                            "title": "Safe Expertise",
                            "text": "Comprehensive export documentation handling and professional coordination from inquiry to delivery."
                        },
                        "quality": {
                            "title": "Quality Assurance",
                            "text": "Rigorous quality control, international certifications, and full traceability from producer to final destination."
                        },
                        "reach": {
                            "title": "Global Reach",
                            "text": "Serving buyers across Asia, China, the Middle East, and Europe with reliable shipping routes and market knowledge."
                        }
                    }
                },
                "operations": {
                    "kicker": "Professional export operations",
                    "title": "From Argentina to your destination",
                    "text": "We manage export operations end-to-end—documentation, compliance, quality checks, and shipping—so you can import with confidence.",
                    "bullets": {
                        "1": "FOB & CIF terms available",
                        "2": "Complete export documentation handling",
                        "3": "International logistics coordination and container shipments"
                    },
                    "cta": "View logistics & terms"
                },
                "markets": {
                    "title": "Serving global markets",
                    "subtitle": "Our products reach key destinations through strong logistics networks and region-specific compliance expertise.",
                    "items": {
                        "asia": "Asia",
                        "china": "China",
                        "middleEast": "Middle East",
                        "europe": "Europe"
                    },
                    "cta": "Explore markets"
                },
                "cta": {
                    "title": "Ready to start importing?",
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
                    "kicker": "Your reliable Argentine export partner",
                    "title": "Built for international buyers",
                    "p1": "Fruit Cascade Exports connects international buyers with premium Argentine dried fruits and extra virgin olive oil.",
                    "p2": "We provide full support—documentation, quality control, and logistics—so your imports arrive smoothly and reliably.",
                    "cta": "Contact our team"
                },
                "commitment": {
                    "title": "Our commitment to excellence",
                    "subtitle": "Built on principles of quality, reliability, and professional service",
                    "items": {
                        "direct": {
                            "title": "Direct sourcing",
                            "text": "We work directly with Argentine producers, ensuring consistent quality and competitive export solutions."
                        },
                        "quality": {
                            "title": "Quality control",
                            "text": "Pre-shipment checks, certifications, and traceability that meet international buyer expectations."
                        },
                        "expertise": {
                            "title": "Export expertise",
                            "text": "FOB/CIF operations, documentation handling, and logistics coordination for every market we serve."
                        }
                    }
                },
                "why": {
                    "title": "Why international buyers choose us",
                    "subtitle": "Professional export operations designed to reduce risk and simplify procurement",
                    "items": {
                        "origin": { "title": "Argentine origin", "text": "Premium sourcing from established growing regions and trusted producers." },
                        "track": { "title": "Proven track record", "text": "Reliable exports to Asia, China, the Middle East, and Europe." },
                        "custom": { "title": "Flexible customization", "text": "Packaging, specs, and documentation adapted to your buyer requirements." },
                        "halal": { "title": "Regulatory readiness", "text": "Support for food-safety, traceability, and region-specific certifications." },
                        "trace": { "title": "Full traceability", "text": "From producer to destination, with quality documentation at every step." },
                        "support": { "title": "End-to-end support", "text": "From inquiry to delivery, with clear communication and dependable timelines." }
                    }
                },
                "partner": {
                    "kicker": "Partner with a trusted exporter",
                    "title": "Fruit Cascade Exports",
                    "text": "Discover how we can support your next import with premium Argentine products and reliable export operations.",
                    "cta": "Get in touch"
                }
            },
            "contact": {
                "banner": {
                    "title": "CONTACT US",
                    "subtitle": "Get in touch with our export team. Whether you're an importer, distributor, or wholesaler, we're here to help."
                },
                "intro": {
                    "kicker": "Let's discuss your import needs",
                    "title": "Let's discuss your import needs",
                    "text": "Whether you're an importer, distributor, or wholesaler looking for premium Argentine dried fruits and olive oil, our export team is ready to assist. Contact us for product specifications, pricing, and shipping terms."
                },
                "email": {
                    "title": "Send us an email",
                    "subtitle": "To help us prepare a quotation, include the following details in your inquiry:",
                    "items": {
                        "1": "Products you're interested in",
                        "2": "Estimated quantities needed",
                        "3": "FOB or CIF terms (or flexible)",
                        "4": "Destination port or country"
                    }
                },
                "why": {
                    "title": "Why contact us"
                }
            },
            "products": {
                "banner": {
                    "title": "OUR PRODUCTS",
                    "subtitle": "Premium Argentine dried fruits and extra virgin olive oil. Sourced directly from Argentina's finest agricultural regions."
                },
                "intro": "Fruit Cascade Exports offers a carefully selected portfolio of premium Argentine products. We source directly from trusted producers and support buyers with documentation, compliance, and reliable logistics.",
                "specs": {
                    "title": "Specifications",
                    "origin": "Origin",
                    "format": "Export Format",
                    "quality": "Quality"
                },
                "viewDetails": "View details",
                "requestInfo": "Request info",
                "items": {
                    "raisins": {
                        "name": "Raisins",
                        "shortDesc": "Natural sun-dried or mechanically dried, sorted by size and grade.",
                        "desc": "Natural sun-dried or mechanically dried, sorted by size and grade. Ideal for food processing, baking, and direct consumption. Sourced from Argentina's finest producers.",
                        "specs": {
                            "origin": "Argentina",
                            "format": "Bulk / Private label",
                            "quality": "Sun-dried, sorted by size and grade"
                        }
                    },
                    "dried-plums": {
                        "name": "Dried Plums",
                        "shortDesc": "Unpitted in natural condition, internationally certified.",
                        "desc": "Unpitted in natural condition, internationally certified. Moisture controlled, suitable for bulk and container exports. Premium Argentine dried plums.",
                        "specs": {
                            "origin": "Argentina",
                            "format": "Bulk / Containers",
                            "quality": "Unpitted, natural condition, certified"
                        }
                    },
                    "walnuts": {
                        "name": "Walnuts",
                        "shortDesc": "Light or amber kernels, meets international nut quality standards.",
                        "desc": "Light or amber kernels, meets international nut quality standards. Available in-shell or shelled, sorted by size. Premium Argentine walnuts.",
                        "specs": {
                            "origin": "Argentina",
                            "format": "In-shell or shelled",
                            "quality": "Sorted by size, international standards"
                        }
                    },
                    "olive-oil": {
                        "name": "Extra Virgin Olive Oil",
                        "shortDesc": "Cold-pressed, acidity < 0.5%, certified extra virgin grade.",
                        "desc": "Cold-pressed, acidity < 0.5%, certified extra virgin grade. Available in bulk or bottled. Sourced from Argentine olive groves.",
                        "specs": {
                            "origin": "Argentina",
                            "format": "Bulk / Bottled",
                            "quality": "Cold-pressed, acidity < 0.5%, extra virgin"
                        }
                    }
                }
            },
            "logistics": {
                "banner": {
                    "title": "Logistics & Trade Terms",
                    "subtitle": "FOB and CIF expertise. Buenos Aires and Rosario ports. Full documentation and compliance."
                },
                "fobCif": {
                    "title": "FOB vs CIF",
                    "subtitle": "We offer flexible trade terms to suit your business needs",
                    "fob": {
                        "title": "FOB (Free on Board)",
                        "desc": "We handle everything up to loading the cargo onto the vessel at the port of departure. You arrange and pay for international freight and insurance. Ideal when you have established shipping partners or prefer to control the main leg of transport."
                    },
                    "cif": {
                        "title": "CIF (Cost, Insurance & Freight)",
                        "desc": "We include international freight and marine insurance to your destination port. You receive the goods at the port and handle local customs and inland transport. Ideal for simplified procurement with a single point of contact."
                    }
                },
                "process": {
                    "title": "Export Process",
                    "subtitle": "From inquiry to delivery: our six-step export workflow",
                    "steps": {
                        "1": { "title": "Inquiry", "desc": "You send us your requirements: products, quantities, specifications, and preferred terms (FOB or CIF)." },
                        "2": { "title": "Order Confirmation", "desc": "We confirm availability, prices, and delivery terms. A formal quotation and proforma invoice are issued." },
                        "3": { "title": "Quality Control", "desc": "Pre-shipment quality checks and certifications. All products meet international standards before loading." },
                        "4": { "title": "Export Documentation", "desc": "We prepare all required documents: Commercial Invoice, Packing List, Bill of Lading, Certificates of Origin, and phytosanitary documentation." },
                        "5": { "title": "Shipping", "desc": "Cargo is loaded at Argentine ports (Buenos Aires or Rosario) and shipped to your destination." },
                        "6": { "title": "Delivery", "desc": "Goods arrive at your port. We support with customs clearance coordination when required." }
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
                    "note": "We comply with HACCP, GMP, and maintain full traceability from producer to final destination."
                },
                "gallery": {
                    "title": "Our Logistics in Action",
                    "subtitle": "Argentine ports connecting to global markets"
                }
            },
            "markets": {
                "banner": {
                    "title": "Global Markets",
                    "subtitle": "Asia, China, Middle East, Europe. We connect Argentine premium products with importers and distributors worldwide."
                },
                "intro": "We support buyers across key regions with compliance knowledge, reliable routes, and export coordination—adapting documentation and packaging to each destination.",
                "advantages": {
                    "title": "Why work with us in global markets",
                    "items": {
                        "multi-market": {
                            "title": "Multi-Market Experience",
                            "text": "We serve importers across Asia, China, Middle East, and Europe with tailored logistics and compliance support for each region."
                        },
                        "regulatory": {
                            "title": "Regulatory Knowledge",
                            "text": "Deep understanding of AQSIQ, EU food safety, Halal and GCC standards, and organic certification requirements in key markets."
                        },
                        "flexible": {
                            "title": "Flexible Adaptation",
                            "text": "Packaging, documentation, and shipping solutions adapted to your destination country and buyer specifications."
                        },
                        "logistics": {
                            "title": "Reliable Logistics",
                            "text": "Export coordination from Argentine ports with clear timelines, container planning, and on-time communication."
                        },
                        "docs": {
                            "title": "Documentation Support",
                            "text": "Commercial invoices, packing lists, certificates of origin and phytosanitary documentation prepared for your shipment."
                        },
                        "private-label": {
                            "title": "Private Label Options",
                            "text": "Flexible formats and labeling support to match buyer requirements and market preferences."
                        }
                    }
                },
                "regions": {
                    "title": "Regions we serve",
                    "items": {
                        "asia": {
                            "title": "Asia",
                            "desc": "Food safety compliance, reliable shipping routes, and packaging suited to regional requirements. Raisins, walnuts, and dried plums are among the most requested products.",
                            "products": "Raisins, walnuts, dried plums"
                        },
                        "china": {
                            "title": "China",
                            "desc": "AQSIQ registration and import licensing expertise. We work with major ports and distributors to ensure smooth clearance and delivery of premium Argentine products.",
                            "products": "Premium raisins, dried plums, extra virgin olive oil"
                        },
                        "middle-east": {
                            "title": "Middle East",
                            "desc": "Halal certification and GCC standards compliance. Strong connections to Gulf ports and distributors for dried fruits and olive oil.",
                            "products": "Dried plums, raisins, extra virgin olive oil"
                        },
                        "europe": {
                            "title": "Europe",
                            "desc": "EU food safety and traceability requirements. We coordinate organic certification when applicable and support importers across major European ports.",
                            "products": "Extra virgin olive oil, raisins, walnuts, dried plums"
                        }
                    }
                }
            }
        }
    },
    es: {
        translation: {
            "hero": {
                "title": "Agroalimentos Argentinos<br />Premium",
                "subtitle": "Directo del origen al mundo.<br />Frutos Secos y Aceite de Oliva Extra Virgen.",
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
                    "subtitle": "Premium Argentine Dried Fruits & Olive Oil Exporter"
                },
                "products": {
                    "title": "Productos Argentinos Premium",
                    "subtitle": "Obtenidos directamente de los mejores productores de Argentina",
                    "cta": "Explorar Todos los Productos",
                    "items": {
                        "plums": {
                            "title": "Ciruelas Secas",
                            "desc": "Sin carozo en condición natural, certificadas internacionalmente."
                        },
                        "oliveOil": {
                            "title": "Aceite de Oliva Extra Virgen",
                            "desc": "Prensado en frío, acidez < 0.5%, grado extra virgen certificado."
                        },
                        "raisins": {
                            "title": "Pasas de Uva",
                            "desc": "Secadas al sol o mecánicamente, clasificadas por tamaño y grado."
                        },
                        "walnuts": {
                            "title": "Nueces",
                            "desc": "Mariposa light o ámbar, cumple estándares internacionales de calidad."
                        }
                    }
                },
                "values": {
                    "title": "Productos Argentinos Premium",
                    "subtitle": "Obtenidos directamente de los mejores productores de Argentina",
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
                    "kicker": "Su socio exportador de confianza",
                    "title": "Exportación con calidad y confiabilidad",
                    "text": "Fruit Cascade Exports se especializa en frutos secos argentinos premium y aceite de oliva extra virgen. Conectamos productores con compradores internacionales, asegurando cumplimiento, trazabilidad y logística confiable.",
                    "items": {
                        "expertise": {
                            "title": "Experiencia Segura",
                            "text": "Gestión integral de documentación de exportación y coordinación profesional desde la consulta hasta la entrega."
                        },
                        "quality": {
                            "title": "Garantía de Calidad",
                            "text": "Control de calidad riguroso, certificaciones internacionales y trazabilidad completa desde el productor hasta el destino final."
                        },
                        "reach": {
                            "title": "Alcance Global",
                            "text": "Atendemos compradores en Asia, China, Medio Oriente y Europa con rutas de envío confiables y conocimiento del mercado."
                        }
                    }
                },
                "operations": {
                    "kicker": "Operaciones de exportación profesionales",
                    "title": "De Argentina a su destino",
                    "text": "Gestionamos la operación de exportación de punta a punta—documentación, cumplimiento, controles de calidad y envío—para que usted importe con confianza.",
                    "bullets": {
                        "1": "Términos FOB & CIF disponibles",
                        "2": "Gestión completa de documentación de exportación",
                        "3": "Coordinación logística internacional y envíos en contenedores"
                    },
                    "cta": "Ver logística y términos"
                },
                "markets": {
                    "title": "Mercados globales",
                    "subtitle": "Nuestros productos llegan a destinos clave con redes logísticas sólidas y cumplimiento específico por región.",
                    "items": {
                        "asia": "Asia",
                        "china": "China",
                        "middleEast": "Medio Oriente",
                        "europe": "Europa"
                    },
                    "cta": "Explorar mercados"
                },
                "cta": {
                    "title": "¿Listos para importar?",
                    "text": "Contacte a nuestro equipo de exportación para especificaciones, precios y términos de envío.",
                    "button": "Contactanos"
                }
            },
            "about": {
                "banner": {
                    "title": "NOSOTROS",
                    "subtitle": "Excelencia en exportaciones agroalimentarias argentinas"
                },
                "intro": "Fruit Cascade Exports conecta compradores internacionales con frutos secos y aceite de oliva extra virgen argentinos premium. Ofrecemos trazabilidad completa desde el productor hasta el destino final, asegurando calidad en cada paso. Nuestra experiencia en documentación de exportación, logística y cumplimiento regulatorio nos convierte en su socio de confianza en el comercio agroalimentario.",
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
                        "content": "Aceite de oliva extra virgen prensado en frío con acidez inferior al 0.5%, certificado para mercados internacionales. Nuestro compromiso con la excelencia se extiende a todas las líneas de productos, desde exportaciones a granel hasta soluciones de marca privada."
                    }
                },
                "reliable": {
                    "kicker": "Su exportador argentino confiable",
                    "title": "Pensado para compradores internacionales",
                    "p1": "Fruit Cascade Exports conecta compradores internacionales con frutos secos argentinos premium y aceite de oliva extra virgen.",
                    "p2": "Brindamos soporte completo—documentación, control de calidad y logística—para que sus importaciones lleguen de forma fluida y confiable.",
                    "cta": "Contactar al equipo"
                },
                "commitment": {
                    "title": "Nuestro compromiso con la excelencia",
                    "subtitle": "Basado en calidad, confiabilidad y servicio profesional",
                    "items": {
                        "direct": {
                            "title": "Abastecimiento directo",
                            "text": "Trabajamos directamente con productores argentinos para asegurar calidad consistente y soluciones competitivas."
                        },
                        "quality": {
                            "title": "Control de calidad",
                            "text": "Controles previos al embarque, certificaciones y trazabilidad que cumplen expectativas internacionales."
                        },
                        "expertise": {
                            "title": "Experiencia exportadora",
                            "text": "Operaciones FOB/CIF, gestión documental y coordinación logística para cada mercado."
                        }
                    }
                },
                "why": {
                    "title": "Por qué los compradores internacionales nos eligen",
                    "subtitle": "Operaciones de exportación profesionales para reducir riesgo y simplificar compras",
                    "items": {
                        "origin": { "title": "Origen argentino", "text": "Sourcing premium en regiones productivas y productores confiables." },
                        "track": { "title": "Historial comprobado", "text": "Exportaciones confiables a Asia, China, Medio Oriente y Europa." },
                        "custom": { "title": "Flexibilidad", "text": "Packaging, especificaciones y documentación adaptadas a sus requerimientos." },
                        "halal": { "title": "Cumplimiento", "text": "Soporte para seguridad alimentaria, trazabilidad y certificaciones por región." },
                        "trace": { "title": "Trazabilidad total", "text": "Del productor al destino, con documentación de calidad en cada paso." },
                        "support": { "title": "Soporte integral", "text": "Desde la consulta hasta la entrega, con comunicación clara y tiempos confiables." }
                    }
                },
                "partner": {
                    "kicker": "Asóciese con un exportador confiable",
                    "title": "Fruit Cascade Exports",
                    "text": "Descubra cómo podemos apoyar su próxima importación con productos argentinos premium y operaciones confiables.",
                    "cta": "Escribirnos"
                }
            },
            "contact": {
                "banner": {
                    "title": "CONTACTANOS",
                    "subtitle": "Póngase en contacto con nuestro equipo de exportación. Ya sea importador, distribuidor o mayorista, estamos aquí para ayudar."
                },
                "intro": {
                    "kicker": "Hablemos de su importación",
                    "title": "Hablemos de su importación",
                    "text": "Ya sea importador, distribuidor o mayorista buscando frutos secos y aceite de oliva extra virgen argentinos premium, nuestro equipo está listo para ayudar. Contáctenos para especificaciones, precios y términos de envío."
                },
                "email": {
                    "title": "Envíenos un email",
                    "subtitle": "Para preparar una cotización, incluya estos datos en su consulta:",
                    "items": {
                        "1": "Productos de interés",
                        "2": "Cantidad estimada",
                        "3": "Términos FOB o CIF (o flexible)",
                        "4": "Destino (puerto o país)"
                    }
                },
                "why": {
                    "title": "Por qué contactarnos"
                }
            },
            "logistics": {
                "banner": {
                    "title": "Logística y Términos Comerciales",
                    "subtitle": "Experiencia en FOB y CIF. Puertos de Buenos Aires y Rosario. Documentación completa y cumplimiento."
                },
                "fobCif": {
                    "title": "FOB vs CIF",
                    "subtitle": "Ofrecemos términos comerciales flexibles para satisfacer sus necesidades comerciales",
                    "fob": {
                        "title": "FOB (Free on Board)",
                        "desc": "Manejamos todo hasta cargar la carga en el buque en el puerto de salida. Usted organiza y paga el flete internacional y el seguro. Ideal cuando tiene socios de transporte establecidos o prefiere controlar el tramo principal del transporte."
                    },
                    "cif": {
                        "title": "CIF (Cost, Insurance & Freight)",
                        "desc": "Incluimos flete internacional y seguro marítimo hasta su puerto de destino. Usted recibe la mercancía en el puerto y gestiona la aduana local y el transporte interior. Ideal para adquisiciones simplificadas con un único punto de contacto."
                    }
                },
                "process": {
                    "title": "Proceso de Exportación",
                    "subtitle": "Desde la consulta hasta la entrega: nuestro flujo de trabajo de exportación de seis pasos",
                    "steps": {
                        "1": { "title": "Consulta", "desc": "Usted nos envía sus requerimientos: productos, cantidades, especificaciones y términos preferidos (FOB o CIF)." },
                        "2": { "title": "Confirmación de Pedido", "desc": "Confirmamos disponibilidad, precios y términos de entrega. Se emite una cotización formal y factura proforma." },
                        "3": { "title": "Control de Calidad", "desc": "Controles de calidad previos al embarque y certificaciones. Todos los productos cumplen normas internacionales antes de cargar." },
                        "4": { "title": "Documentación de Exportación", "desc": "Preparamos todos los documentos requeridos: Factura Comercial, Lista de Empaque, Conocimiento de Embarque, Certificados de Origen y documentación fitosanitaria." },
                        "5": { "title": "Envío", "desc": "La carga se carga en puertos argentinos (Buenos Aires o Rosario) y se envía a su destino." },
                        "6": { "title": "Entrega", "desc": "La mercancía llega a su puerto. Apoyamos con la coordinación del despacho de aduanas cuando es necesario." }
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
                    "note": "Cumplimos con HACCP, GMP y mantenemos trazabilidad completa desde el productor hasta el destino final."
                },
                "gallery": {
                    "title": "Nuestra Logística en Acción",
                    "subtitle": "Puertos argentinos conectando con mercados globales"
                }
            },
            "markets": {
                "banner": {
                    "title": "Mercados Globales",
                    "subtitle": "Asia, China, Medio Oriente, Europa. Conectamos productos premium argentinos con importadores y distribuidores en todo el mundo."
                },
                "intro": "Apoyamos compradores en regiones clave con conocimiento de cumplimiento, rutas confiables y coordinación exportadora—adaptando documentación y packaging a cada destino.",
                "advantages": {
                    "title": "Por qué trabajar con nosotros en mercados globales",
                    "items": {
                        "multi-market": {
                            "title": "Experiencia Multimercado",
                            "text": "Servimos a importadores en Asia, China, Medio Oriente y Europa con logística a medida y soporte de cumplimiento para cada región."
                        },
                        "regulatory": {
                            "title": "Conocimiento Regulatorio",
                            "text": "Profundo conocimiento de AQSIQ, seguridad alimentaria de la UE, normas Halal y GCC, y requisitos de certificación orgánica en mercados clave."
                        },
                        "flexible": {
                            "title": "Adaptación Flexible",
                            "text": "Soluciones de embalaje, documentación y envío adaptadas a su país de destino y especificaciones del comprador."
                        },
                        "logistics": {
                            "title": "Logística Confiable",
                            "text": "Coordinación desde puertos argentinos con tiempos claros, planificación de contenedores y comunicación constante."
                        },
                        "docs": {
                            "title": "Soporte Documental",
                            "text": "Factura comercial, lista de empaque, certificados de origen y documentación fitosanitaria preparados para su envío."
                        },
                        "private-label": {
                            "title": "Opciones de Marca Privada",
                            "text": "Formatos flexibles y soporte de etiquetado para ajustarse a su mercado y requerimientos."
                        }
                    }
                },
                "regions": {
                    "title": "Regiones que servimos",
                    "items": {
                        "asia": {
                            "title": "Asia",
                            "desc": "Cumplimiento de seguridad alimentaria, rutas de envío confiables y embalaje adecuado a los requisitos regionales. Pasas, nueces y ciruelas secas están entre los productos más solicitados.",
                            "products": "Pasas, nueces, ciruelas secas"
                        },
                        "china": {
                            "title": "China",
                            "desc": "Experiencia en registro AQSIQ y licencias de importación. Trabajamos con los principales puertos y distribuidores para asegurar un despacho fluido y entrega de productos argentinos premium.",
                            "products": "Pasas premium, ciruelas secas, aceite de oliva extra virgen"
                        },
                        "middle-east": {
                            "title": "Medio Oriente",
                            "desc": "Certificación Halal y cumplimiento de normas GCC. Fuertes conexiones con puertos del Golfo y distribuidores de frutos secos y aceite de oliva.",
                            "products": "Ciruelas secas, pasas, aceite de oliva extra virgen"
                        },
                        "europe": {
                            "title": "Europa",
                            "desc": "Requisitos de seguridad alimentaria y trazabilidad de la UE. Coordinamos certificación orgánica cuando corresponde y apoyamos a importadores en los principales puertos europeos.",
                            "products": "Aceite de oliva extra virgen, pasas, nueces, ciruelas secas"
                        }
                    }
                }
            },
            "products": {
                "banner": {
                    "title": "NUESTROS PRODUCTOS",
                    "subtitle": "Frutos secos y aceite de oliva extra virgen argentinos premium. Obtenidos directamente de las mejores regiones agrícolas de Argentina."
                },
                "intro": "Fruit Cascade Exports ofrece un portafolio cuidadosamente seleccionado de productos argentinos premium. Abastecemos directamente de productores confiables y apoyamos a compradores con documentación, cumplimiento y logística.",
                "specs": {
                    "title": "Especificaciones",
                    "origin": "Origen",
                    "format": "Formato de Exportación",
                    "quality": "Calidad"
                },
                "viewDetails": "Ver detalles",
                "requestInfo": "Pedir información",
                "items": {
                    "raisins": {
                        "name": "Pasas de Uva",
                        "shortDesc": "Secadas al sol o mecánicamente, clasificadas por tamaño y grado.",
                        "desc": "Secadas al sol o mecánicamente de forma natural, clasificadas por tamaño y grado. Ideal para procesamiento de alimentos, horneado y consumo directo. Obtenido de los mejores productores de Argentina.",
                        "specs": {
                            "origin": "Argentina",
                            "format": "Granel / Marca privada",
                            "quality": "Secadas al sol, clasificadas por tamaño y grado"
                        }
                    },
                    "dried-plums": {
                        "name": "Ciruelas Secas",
                        "shortDesc": "Sin carozo en condición natural, certificadas internacionalmente.",
                        "desc": "Sin carozo en condición natural, certificadas internacionalmente. Humedad controlada, aptas para exportación a granel y en contenedores. Ciruelas secas argentinas premium.",
                        "specs": {
                            "origin": "Argentina",
                            "format": "Granel / Contenedores",
                            "quality": "Sin carozo, condición natural, certificadas"
                        }
                    },
                    "walnuts": {
                        "name": "Nueces",
                        "shortDesc": "Mariposa light o ámbar, cumple estándares internacionales de calidad.",
                        "desc": "Mariposa light o ámbar, cumple estándares internacionales de calidad de nueces. Disponibles con o sin cáscara, clasificadas por tamaño. Nueces argentinas premium.",
                        "specs": {
                            "origin": "Argentina",
                            "format": "Con o sin cáscara",
                            "quality": "Clasificadas por tamaño, estándares internacionales"
                        }
                    },
                    "olive-oil": {
                        "name": "Aceite de Oliva Extra Virgen",
                        "shortDesc": "Prensado en frío, acidez < 0.5%, grado extra virgen certificado.",
                        "desc": "Prensado en frío, acidez < 0.5%, grado extra virgen certificado. Disponible a granel o embotellado. Obtenido de olivares argentinos.",
                        "specs": {
                            "origin": "Argentina",
                            "format": "Granel / Embotellado",
                            "quality": "Prensado en frío, acidez < 0.5%, extra virgen"
                        }
                    }
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
                            "title": "专业与安全",
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
                        "3": "国际物流协调与集装箱运输"
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
                "intro": "我们为关键地区的买家提供合规知识、可靠航线与出口协调，并根据目的地调整文件与包装方案。",
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
                }
            },
            "products": {
                "banner": {
                    "title": "我们的产品",
                    "subtitle": "优质阿根廷干果和特级初榨橄榄油。直接来源于阿根廷最好的农业区。"
                },
                "intro": "Fruit Cascade Exports 提供精心甄选的优质阿根廷产品组合。我们直接与可靠生产商合作，并为买家提供文件、合规与物流支持。",
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
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
