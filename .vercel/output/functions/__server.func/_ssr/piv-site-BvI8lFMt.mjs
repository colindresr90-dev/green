import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { g as gsapWithCSS, S as ScrollTrigger } from "../_libs/gsap.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { S as ShieldCheck, A as ArrowUpRight, M as MoveRight, a as MapPinned, C as Clock3, P as Phone, X, b as Menu, c as MessageCircle, d as ChevronDown } from "../_libs/lucide-react.mjs";
const url$a = "https://valor-circular-lab.lovable.app/__l5e/assets-v1/8893a47e-cc48-4767-b64a-dc7633117efe/piv-hero-v3.png";
const heroAsset = {
  url: url$a
};
const url$9 = "https://valor-circular-lab.lovable.app/__l5e/assets-v1/a69eb1a0-7459-432c-9e47-e0f796168d50/piv-hero-v2.png";
const heroAboutAsset = {
  url: url$9
};
const url$8 = "https://valor-circular-lab.lovable.app/__l5e/assets-v1/4fc95861-1907-418e-b122-7fd9d21f0ecf/piv-logo.png";
const logoAsset = {
  url: url$8
};
const url$7 = "https://valor-circular-lab.lovable.app/__l5e/assets-v1/6bf01446-4a30-4ab5-941c-607cd498e549/piv-operations.jpg";
const operationsAsset = {
  url: url$7
};
const url$6 = "https://valor-circular-lab.lovable.app/__l5e/assets-v1/7d373f70-8319-4ddf-a47a-68a19efe52aa/piv-metals.jpg";
const metalsAsset = {
  url: url$6
};
const url$5 = "https://valor-circular-lab.lovable.app/__l5e/assets-v1/7ec51a95-175c-4362-9ca2-705dda075856/piv-beach.jpg";
const beachAsset = {
  url: url$5
};
const url$4 = "https://valor-circular-lab.lovable.app/__l5e/assets-v1/4919213c-9c25-45e9-a92a-1a395e63246d/piv-community.jpg";
const communityAsset = {
  url: url$4
};
const url$3 = "https://valor-circular-lab.lovable.app/__l5e/assets-v1/c7479f9e-9e76-4c63-aedf-d11840406fb3/piv-allies.jpg";
const alliesAsset = {
  url: url$3
};
const url$2 = "https://valor-circular-lab.lovable.app/__l5e/assets-v1/4c6eda05-840d-4be5-8508-763c9411c7e1/piv-kids.jpg";
const kidsAsset = {
  url: url$2
};
const url$1 = "https://valor-circular-lab.lovable.app/__l5e/assets-v1/1254cd11-0259-4258-bd82-7cf56ec50709/piv-impact-graphic.jpg";
const impactGraphicAsset = {
  url: url$1
};
const url = "https://valor-circular-lab.lovable.app/__l5e/assets-v1/c89790fd-0194-406a-8885-142f78ae2cdb/piv-team.png";
const teamAsset = {
  url
};
const pivStats = [
  { value: 23, prefix: "+", suffix: " años", label: "liderando la recuperación de materiales en El Salvador" },
  { value: 1e3, prefix: "+", suffix: " millones", label: "de libras recuperadas históricamente" },
  { value: 3, prefix: "", suffix: " sedes", label: "operando para empresas, comunidades y exportación" }
];
const trustPillars = [
  "Más de 23 años de experiencia operativa",
  "Procesos transparentes con trazabilidad",
  "Infraestructura industrial de escala nacional",
  "Liderazgo en recuperación y exportación"
];
const audience = [
  "Recolectores base",
  "Empresas",
  "Corporaciones",
  "Industrias",
  "Centros comerciales"
];
const featuredServices = [
  {
    title: "Recuperación de materiales",
    description: "Clasificamos, procesamos y valorizamos plásticos, metales, papel y RAEE para reincorporarlos a la cadena productiva."
  },
  {
    title: "Educación ambiental",
    description: "Programas, talleres y contenidos para escuelas, empresas y comunidades que activan hábitos sostenibles."
  },
  {
    title: "Gestión integral de residuos",
    description: "Diagnóstico, diseño de rutas, recolección, procesamiento y reportes para operaciones de cualquier escala."
  },
  {
    title: "Trazabilidad digital",
    description: "Reportes auditables y evidencia documental por cada flujo de materiales recuperados."
  },
  {
    title: "Apoyo en campañas",
    description: "Producción y operación de activaciones de marca, jornadas internas y campañas comunitarias de reciclaje."
  },
  {
    title: "Charlas ambientales",
    description: "Sesiones para colaboradores, clientes y aliados sobre economía circular y manejo responsable."
  },
  {
    title: "Recolección a domicilio",
    description: "Rutas programadas para empresas, condominios y comunidades según volumen y tipo de material."
  },
  {
    title: "Certificados de destrucción",
    description: "Destrucción controlada con evidencia documental para auditorías y cumplimiento interno."
  },
  {
    title: "Desalojo de bodegas",
    description: "Liberamos espacios industriales y comerciales con manejo responsable de cada material recuperado."
  },
  {
    title: "Destrucción de maquinaria",
    description: "Procesamos equipos y maquinaria fuera de uso, con disposición segura de sus componentes."
  }
];
const enterpriseServices = [
  "Gestión integral de materiales y residuos",
  "Diagnóstico participativo y diseño de rutas",
  "Certificados y evidencia documental",
  "Desalojo de bodegas y destrucción controlada",
  "Trazabilidad anual y reportes auditables",
  "Talleres y jornadas corporativas"
];
const enterpriseBenefits = [
  "Cumplimiento ambiental",
  "Mejora reputacional",
  "Reportes auditables",
  "Reducción del impacto"
];
const communityActions = [
  "Dónde reciclar",
  "Materiales aceptados",
  "Campañas activas",
  "Ubicaciones estratégicas"
];
const materialGroups = [
  {
    title: "Plásticos",
    items: ["PET", "HDPE", "PP"]
  },
  {
    title: "Metales",
    items: ["Aluminio", "UBC", "Hierro", "Bronce", "Cobre"]
  },
  {
    title: "Papel",
    items: ["Papel oficina", "Papel mezclado", "Cartón", "Litografía"]
  },
  {
    title: "RAEE",
    items: [
      "Tarjetas electrónicas",
      "Celulares",
      "CD",
      "Discos duros",
      "Laptops",
      "UPS",
      "CPU",
      "Módem",
      "Rack",
      "Servidores",
      "Microprocesadores",
      "Tablet"
    ]
  }
];
const disposalMaterials = [
  "Materiales contaminados o mezclados",
  "Equipos con componentes peligrosos",
  "Residuos electrónicos con disposición responsable por cobro"
];
const preparationSteps = ["Limpios", "Secos", "Separados"];
const activeCampaigns = ["Recicla y Gana", "Campañas Empresariales", "Campañas Educativas"];
const impactMetrics = [
  {
    value: 23,
    prefix: "+",
    suffix: " años",
    description: "Construyendo infraestructura y confianza para una economía circular real."
  },
  {
    value: 1e3,
    prefix: "+",
    suffix: " millones de lb",
    description: "Recuperación histórica junto a empresas aliadas y comunidades."
  },
  {
    value: 75,
    prefix: "+",
    suffix: " millones de lb en 2025",
    description: "Volumen recuperado este año mediante clasificación, procesamiento y valorización."
  }
];
const exportRegions = [
  "América del Norte",
  "Centroamérica",
  "Sudamérica",
  "Europa",
  "Asia"
];
const timeline = [
  {
    year: "2003",
    title: "INSEMA",
    description: "Empresa encargada del manejo y procesamiento de materiales ferrosos y no ferrosos."
  },
  {
    year: "2007",
    title: "ZARTEX",
    description: "Soluciones especializadas para residuos electrónicos y manejo responsable de tecnología."
  },
  {
    year: "2012",
    title: "Parque Industrial Verde",
    description: "La planta de reciclaje de materiales más grande del país y una plataforma nacional de economía circular."
  }
];
const faqs = [
  {
    question: "¿Qué materiales reciben?",
    answer: "Recibimos plásticos, metales, papel, cartón y una amplia variedad de residuos electrónicos. Algunos materiales requieren disposición responsable por cobro según su condición y manejo."
  },
  {
    question: "¿Realizan recolecciones?",
    answer: "Sí. Diseñamos rutas para empresas, campañas y solicitudes específicas según volumen, ubicación y tipo de material."
  },
  {
    question: "¿Cómo funciona el certificado de destrucción?",
    answer: "Documentamos el proceso de destrucción y disposición con evidencia y trazabilidad para respaldar auditorías y cumplimiento interno."
  },
  {
    question: "¿Qué materiales tienen costo de disposición?",
    answer: "Materiales contaminados, mezclados o ciertos RAEE pueden requerir cobro por su manejo responsable. El equipo comercial evalúa cada caso."
  },
  {
    question: "¿Trabajan con empresas?",
    answer: "Sí. Atendemos empresas, corporaciones, industrias y centros comerciales con soluciones integrales, reportes y acompañamiento operativo."
  },
  {
    question: "¿Dónde están ubicados?",
    answer: "Operamos en Soyapango, Chalchuapa y Costa del Sol, con cobertura para distintos perfiles de clientes y campañas."
  }
];
const locations = [
  {
    name: "Soyapango",
    description: "Nodo operativo principal para recepción, clasificación y gestión de materiales a escala industrial.",
    mapQuery: "Soyapango, El Salvador"
  },
  {
    name: "Chalchuapa",
    description: "Cobertura estratégica para occidente y puntos de recuperación vinculados a industria y comercio.",
    mapQuery: "Chalchuapa, El Salvador"
  },
  {
    name: "Costa del Sol",
    description: "Activaciones, campañas y gestión de materiales para zonas turísticas y comunidades costeras.",
    mapQuery: "Costa del Sol, El Salvador"
  }
];
const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/parqueindustrialverde" },
  { label: "Instagram", href: "https://www.instagram.com/parqueindustrialverde.sv/" },
  { label: "TikTok", href: "https://www.tiktok.com/@parqueindustrialverde.sv" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/parque-industrial-verde/" }
];
const phoneLinks = [
  { label: "2121-1400", href: "tel:+50321211400" },
  { label: "7948-4108", href: "tel:+50379484108" }
];
const emailLink = { label: "comunicaciones@parqueindustrialverde.com", href: "mailto:comunicaciones@parqueindustrialverde.com" };
const whatsappHref = "https://wa.me/50379484108";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:opacity-95",
        primary: "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:opacity-95",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:opacity-90",
        outline: "border border-border bg-background text-foreground hover:border-primary/50 hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        headerCta: "bg-panel text-foreground ring-1 ring-white/10 backdrop-blur-md hover:bg-panel-strong hover:-translate-y-0.5",
        hero: "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]",
        heroSecondary: "bg-white/6 text-white ring-1 ring-white/18 backdrop-blur-md hover:bg-white/12 hover:-translate-y-1"
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-11 px-6 text-sm",
        xl: "h-13 px-7 text-sm uppercase tracking-[0.12em]",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
gsapWithCSS.registerPlugin(ScrollTrigger);
const navigation = [
  { label: "Inicio", to: "/" },
  { label: "Sobre Nosotros", to: "/sobre-nosotros" },
  { label: "Servicios", to: "/servicios" },
  { label: "Materiales", to: "/materiales" },
  { label: "RSE", to: "/rse" },
  { label: "Contacto", to: "/contacto" }
];
function usePremiumMotion(scopeRef) {
  reactExports.useEffect(() => {
    const scope = scopeRef.current;
    if (!scope || typeof window === "undefined") return;
    const ctx = gsapWithCSS.context(() => {
      gsapWithCSS.from("[data-hero-kicker]", { y: 36, opacity: 0, duration: 0.9, ease: "power3.out" });
      gsapWithCSS.from("[data-hero-title]", { y: 48, opacity: 0, duration: 1.1, delay: 0.12, ease: "power3.out" });
      gsapWithCSS.from("[data-hero-copy]", { y: 32, opacity: 0, duration: 1, delay: 0.22, ease: "power2.out" });
      gsapWithCSS.from("[data-hero-actions]", { y: 28, opacity: 0, duration: 0.9, delay: 0.3, ease: "power2.out" });
      gsapWithCSS.from("[data-hero-stat]", {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        delay: 0.45,
        ease: "power2.out"
      });
      gsapWithCSS.utils.toArray("[data-reveal]").forEach((element) => {
        gsapWithCSS.from(element, {
          y: 52,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            once: true
          }
        });
      });
      gsapWithCSS.utils.toArray("[data-parallax]").forEach((element) => {
        gsapWithCSS.to(element, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            scrub: true
          }
        });
      });
    }, scope);
    return () => ctx.revert();
  }, [scopeRef]);
}
function useCountUp(target) {
  const [value, setValue] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;
    const state = { value: 0 };
    let tween;
    tween = gsapWithCSS.to(state, {
      value: target,
      duration: 1.8,
      ease: "power2.out",
      paused: true,
      onUpdate: () => setValue(Math.round(state.value)),
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        once: true,
        onEnter: () => tween && tween.play()
      }
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [target]);
  return { ref, value };
}
function formatMetric(value) {
  return new Intl.NumberFormat("es-SV").format(value);
}
function PageShell({ children }) {
  const pageRef = reactExports.useRef(null);
  usePremiumMotion(pageRef);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { ref: pageRef, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppBubble, {})
  ] });
}
function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto flex w-[min(1280px,calc(100%-2rem))] items-center justify-between gap-4 rounded-2xl px-3 py-2 md:px-5 md:py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "absolute inset-0 -z-10 rounded-2xl transition-all duration-500",
                scrolled ? "bg-white/80 backdrop-blur-xl shadow-[var(--shadow-elevated)] border border-white/40" : "bg-transparent"
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "shrink-0 -my-8 md:-my-10 lg:-my-12", "aria-label": "Parque Industrial Verde, ir al inicio", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: logoAsset.url,
              alt: "Parque Industrial Verde",
              className: cn(
                "h-28 w-auto object-contain transition-all duration-500 md:h-36 lg:h-44",
                scrolled ? "" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]"
              )
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 lg:flex", children: navigation.map((item) => {
            const isActive = pathname === item.to;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: item.to,
                className: cn(
                  "relative rounded-full px-3.5 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] transition-colors",
                  scrolled ? isActive ? "bg-[var(--brand-navy)] text-white" : "text-[var(--brand-navy)] hover:bg-[var(--brand-sky)]/50" : isActive ? "bg-[var(--brand-lime)] text-[var(--brand-ink)]" : "text-white hover:bg-white/15 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]"
                ),
                children: item.label
              },
              item.to
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: whatsappHref, target: "_blank", rel: "noreferrer", className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "sm", children: "Cotizar" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contacto", className: "hidden sm:block lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "sm", children: "Contacto" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setMenuOpen(!menuOpen),
                className: cn(
                  "p-2 rounded-full lg:hidden z-50 transition-colors focus-visible:outline-none",
                  scrolled ? "text-[var(--brand-navy)] hover:bg-[var(--brand-sky)]/50" : "text-white hover:bg-white/15 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]"
                ),
                "aria-label": "Toggle menu",
                children: menuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "fixed inset-0 z-40 bg-[var(--brand-navy)]/95 backdrop-blur-xl flex flex-col justify-center px-8 transition-all duration-300 ease-in-out lg:hidden",
              menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 opacity-30", style: { background: "radial-gradient(circle at 10% 10%, var(--brand-lime) 0%, transparent 45%), radial-gradient(circle at 90% 90%, var(--brand-sky) 0%, transparent 45%)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-6 text-center", children: [
                navigation.map((item) => {
                  const isActive = pathname === item.to;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: item.to,
                      onClick: () => setMenuOpen(false),
                      className: cn(
                        "text-2xl font-bold uppercase tracking-[0.16em] py-3 transition-colors",
                        isActive ? "text-[var(--brand-lime)]" : "text-white hover:text-[var(--brand-lime)]"
                      ),
                      children: item.label
                    },
                    item.to
                  );
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-col gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: whatsappHref,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "w-full",
                    onClick: () => setMenuOpen(false),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", className: "w-full justify-center text-lg", children: "Cotizar por WhatsApp" })
                  }
                ) })
              ] })
            ]
          }
        )
      ]
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/70 bg-ink py-14 text-ink-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-[min(1280px,calc(100%-2rem))] grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr] lg:items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoAsset.url, alt: "Parque Industrial Verde", className: "h-32 w-auto object-contain md:h-40 lg:h-44", loading: "lazy" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--brand-lime)]", children: "Navegación" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-6 gap-y-2 text-[0.78rem]", children: navigation.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.to, className: "story-link w-fit font-bold uppercase tracking-[0.14em] text-ink-foreground", children: item.label }, item.to)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--brand-lime)]", children: "Contacto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 text-sm text-ink-muted", children: [
        phoneLinks.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: item.href, className: "story-link w-fit", children: item.label }, item.href)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: emailLink.href, className: "story-link w-fit break-all", children: emailLink.label })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--brand-lime)]", children: "Redes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 text-[0.78rem]", children: socialLinks.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: item.href, target: "_blank", rel: "noreferrer", className: "story-link w-fit font-bold uppercase tracking-[0.14em] text-ink-foreground", children: item.label }, item.href)) })
    ] })
  ] }) });
}
function WhatsAppBubble() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: whatsappHref,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "Escribir a WhatsApp",
      className: "fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-primary/30 bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-1",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" })
    }
  );
}
function Section({ eyebrow, title, description, children, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: cn("py-20 md:py-28", className), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-[min(1280px,calc(100%-2rem))]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "max-w-3xl space-y-5", children: [
      eyebrow ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: eyebrow }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl", children: title }),
      description ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-lg leading-8 text-muted-foreground", children: description }) : null
    ] }),
    children
  ] }) });
}
function MetricCard({ value, prefix, suffix, description }) {
  const { ref, value: liveValue } = useCountUp(value);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { ref, "data-reveal": true, className: "metric-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-4xl font-semibold leading-none tracking-tight text-foreground md:text-5xl", children: [
        prefix,
        formatMetric(liveValue)
      ] }),
      suffix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-medium leading-tight tracking-tight text-foreground/80 md:text-lg", children: suffix.trim() })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-sm leading-7 text-muted-foreground", children: description })
  ] });
}
function AudienceStrip() {
  const palette = [
    { bg: "var(--brand-teal)", fg: "#FFFFFF" },
    { bg: "var(--brand-lime)", fg: "var(--brand-ink)" },
    { bg: "var(--brand-navy)", fg: "#FFFFFF" },
    { bg: "var(--brand-sky)", fg: "var(--brand-navy)" },
    { bg: "var(--brand-ink)", fg: "var(--brand-lime)" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-3 md:grid-cols-5", children: audience.map((item, i) => {
    const c = palette[i % palette.length];
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-reveal": true,
        className: "rounded-full px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.1em] shadow-[var(--shadow-elevated)] transition-transform duration-300 hover:-translate-y-1",
        style: { background: c.bg, color: c.fg },
        children: item
      },
      item
    );
  }) });
}
function ServicesGrid() {
  const palette = [
    "bg-gradient-to-br from-[var(--brand-teal)] to-[var(--brand-navy)] text-white",
    "bg-[var(--brand-lime)] text-[var(--brand-ink)]",
    "bg-[var(--brand-sky)] text-[var(--brand-navy)]",
    "bg-white text-[var(--brand-ink)] border border-[var(--brand-navy)]/15"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5", children: featuredServices.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      "data-reveal": true,
      className: cn(
        "group flex flex-col justify-between gap-6 rounded-3xl p-6 shadow-[var(--shadow-elevated)] transition-transform duration-300 hover:-translate-y-1",
        palette[i % palette.length]
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold tracking-tight md:text-xl", children: service.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-6 opacity-85", children: service.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MoveRight, { className: "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" })
      ]
    },
    service.title
  )) });
}
function EnterpriseCommunity() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/70 bg-panel-subtle py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-8 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { "data-reveal": true, className: "editorial-panel editorial-panel--teal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Empresas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-4xl font-semibold tracking-tight md:text-5xl", children: "Soluciones ambientales para empresas." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-3", children: enterpriseServices.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-line", children: item }, item)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: enterpriseBenefits.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-[var(--brand-lime)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-ink)]", children: item }, item)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { "data-reveal": true, className: "editorial-panel editorial-panel--accent", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Comunidad" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-3xl font-semibold tracking-tight md:text-4xl", style: { color: "var(--brand-navy)" }, children: "Reciclar también transforma vidas." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-7 text-[var(--brand-navy)]/80", children: "Activamos campañas, espacios y rutas para que comunidades, familias y empresas participen en una economía circular real." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-2 sm:grid-cols-2", children: communityActions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-line", children: item }, item)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: activeCampaigns.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-[var(--brand-navy)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white", children: c }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 gap-3 border-t border-[var(--brand-navy)]/15 pt-6", children: ["+50", "100%", "23"].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-[var(--brand-navy)] md:text-3xl", children: v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-navy)]/70", children: ["campañas activas", "trazabilidad", "años"][i] })
      ] }, i)) })
    ] })
  ] }) });
}
function TimelineRail() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "overflow-hidden py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-[min(1280px,calc(100%-2rem))]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "max-w-3xl space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Evolución" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-4xl font-semibold tracking-tight md:text-6xl", children: "Una plataforma industrial construida por etapas, visión y escala." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 lg:grid-cols-3", children: timeline.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { "data-reveal": true, className: "timeline-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.18em] text-primary", children: item.year }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-3xl font-semibold tracking-tight", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-7 text-muted-foreground", children: item.description })
    ] }, item.year)) })
  ] }) });
}
function FAQSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      eyebrow: "FAQ",
      title: "La claridad operativa también construye confianza.",
      description: "Respuestas rápidas para empresas, campañas y personas que buscan una gestión responsable de sus materiales.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-7 text-muted-foreground", children: "Si necesitas una ruta de recolección, certificación o validación de materiales, el equipo de PIV puede estructurar una propuesta según tu operación." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: whatsappHref, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "lg", children: "Hablar por WhatsApp" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-reveal": true, className: "surface-panel", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, children: faqs.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `item-${index}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-base font-medium text-foreground hover:no-underline", children: item.question }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-sm leading-7 text-muted-foreground", children: item.answer })
        ] }, item.question)) }) })
      ] })
    }
  );
}
function ContactFormCard() {
  const [form, setForm] = reactExports.useState({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    servicio: "",
    mensaje: ""
  });
  const whatsappMessage = reactExports.useMemo(() => {
    const lines = [
      "Hola Parque Industrial Verde, quiero solicitar información.",
      `Nombre: ${form.nombre || "-"}`,
      `Empresa: ${form.empresa || "-"}`,
      `Correo: ${form.correo || "-"}`,
      `Teléfono: ${form.telefono || "-"}`,
      `Servicio requerido: ${form.servicio || "-"}`,
      `Mensaje: ${form.mensaje || "-"}`
    ];
    return `https://wa.me/50379484108?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [form]);
  const updateField = (key, value) => setForm((current) => ({ ...current, [key]: value }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "surface-panel space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Contacto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-4xl font-semibold tracking-tight md:text-5xl", children: "Comencemos a generar impacto juntos." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Nombre", value: form.nombre, onChange: (event) => updateField("nombre", event.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Empresa", value: form.empresa, onChange: (event) => updateField("empresa", event.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", placeholder: "Correo", value: form.correo, onChange: (event) => updateField("correo", event.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Teléfono", value: form.telefono, onChange: (event) => updateField("telefono", event.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "md:col-span-2", placeholder: "Servicio requerido", value: form.servicio, onChange: (event) => updateField("servicio", event.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { className: "min-h-36 md:col-span-2", placeholder: "Mensaje", value: form.mensaje, onChange: (event) => updateField("mensaje", event.target.value) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: whatsappMessage, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "lg", children: "Enviar por WhatsApp" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: emailLink.href, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "lg", children: "Escribir por correo" }) })
    ] })
  ] });
}
function LocationsPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-panel grid gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPinned, { className: "mt-1 h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Tres ubicaciones estratégicas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-7 text-muted-foreground", children: "Soyapango, Chalchuapa y Costa del Sol." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "mt-1 h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Horario de atención" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-7 text-muted-foreground", children: "Lunes a viernes, 8:00 a.m. a 5:00 p.m." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mt-1 h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 text-sm leading-7 text-muted-foreground", children: phoneLinks.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: item.href, className: "story-link", children: item.label }, item.href)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: locations.map((location) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "surface-panel", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold tracking-tight", children: location.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-7 text-muted-foreground", children: location.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPinned, { className: "h-5 w-5 text-primary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          title: `Mapa de ${location.name}`,
          src: `https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`,
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade",
          className: "h-56 w-full rounded-[1.25rem] border border-border/70"
        }
      )
    ] }, location.name)) })
  ] });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: heroAsset.url,
            alt: "Operación real de Parque Industrial Verde dentro de una planta de reciclaje",
            className: "h-full w-full object-cover object-[70%_40%] md:object-[center_40%]",
            loading: "eager"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-overlay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-x-0 top-0 h-44 md:h-56",
            style: { background: "linear-gradient(to bottom, rgba(13,13,13,0.75) 0%, rgba(13,13,13,0.35) 55%, transparent 100%)" }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto flex min-h-screen w-[min(1280px,calc(100%-2rem))] items-end pb-12 pt-32 md:pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid w-full gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { "data-hero-kicker": true, className: "eyebrow eyebrow--light", children: "Economía circular con escala industrial" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { "data-hero-title": true, className: "max-w-4xl text-balance text-4xl sm:text-5xl font-semibold tracking-tight text-white md:text-7xl lg:text-[5.2rem]", children: "Transformamos residuos en oportunidades." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-hero-actions": true, className: "flex flex-wrap gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: whatsappHref, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", children: "Cotizar" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/materiales", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "heroSecondary", size: "xl", children: "Quiero reciclar" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex overflow-x-auto gap-4 pb-4 scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:grid sm:grid-cols-3 lg:self-end lg:mx-0 lg:px-0 lg:pb-0", children: pivStats.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-hero-stat": true, className: "snap-center shrink-0 w-[260px] sm:w-auto rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-4xl font-bold tracking-tight text-[var(--brand-lime)] md:text-5xl", children: [
            item.prefix,
            formatMetric(item.value)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/85", children: item.suffix }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs leading-5 text-white/75", children: item.label })
        ] }, item.label)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        eyebrow: "Qué hacemos",
        title: "La recuperación de materiales puede ser precisa, rentable y medible.",
        description: "Transformamos residuos en oportunidades. Gestionamos materiales reciclables para darles un nuevo valor, reduciendo el impacto ambiental y generando beneficios económicos.",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { "data-reveal": true, className: "surface-panel space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl leading-9 text-foreground", children: "PIV integra infraestructura, clasificación, procesamiento y exportación para reincorporar materiales a la cadena productiva con una lógica industrial y trazable." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-3", children: pivStats.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-border pl-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-semibold tracking-tight text-foreground", children: [
                item.prefix,
                formatMetric(item.value),
                item.suffix
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-6 text-muted-foreground", children: item.label })
            ] }, item.label)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "grid gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: operationsAsset.url, alt: "Trabajador clasificando plásticos dentro de una línea de proceso industrial", className: "image-tile image-tile--tall", loading: "lazy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: metalsAsset.url, alt: "Línea industrial de clasificación de aluminio y metales en Parque Industrial Verde", className: "image-tile image-tile--short md:mt-12", loading: "lazy" })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Section,
      {
        eyebrow: "Para quién",
        title: "Trabajamos junto a quienes necesitan gestionar residuos con criterio operativo y responsabilidad real.",
        description: "Recolectores base, empresas, corporaciones, industrias y centros comerciales encuentran en PIV una red con capacidad para acompañar desde la recolección hasta la valorización final.",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AudienceStrip, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-reveal": true, className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: communityAsset.url, alt: "Familia y comunidad junto a materiales recuperados", className: "image-tile h-auto max-h-[640px] w-full object-contain bg-[var(--brand-ink)]", loading: "lazy" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        eyebrow: "Servicios destacados",
        title: "Soluciones ambientales diseñadas para generar impacto.",
        description: "Desde recuperación de materiales hasta destrucción certificada y trazabilidad digital, cada servicio está pensado para integrarse a operaciones reales.",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesGrid, {})
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[420px] w-full overflow-hidden md:h-[520px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: beachAsset.url, alt: "Jornada de recuperación de materiales en zona costera de El Salvador", className: "h-full w-full object-cover object-[center_65%]", loading: "lazy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: { background: "linear-gradient(110deg, color-mix(in oklab, var(--brand-navy) 80%, transparent) 0%, color-mix(in oklab, var(--brand-navy) 20%, transparent) 60%, transparent 100%)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 mx-auto flex w-[min(1280px,calc(100%-2rem))] flex-col justify-end pb-12 md:pb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow eyebrow--light", children: "Territorio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl", children: "Operamos desde la ciudad hasta la costa." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        eyebrow: "Alcance",
        title: "Recuperamos materiales que vuelven a la economía con escala internacional.",
        description: "Clasificamos, procesamos y exportamos materiales a cinco regiones del mundo.",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5", children: exportRegions.map((region, i) => {
          const tones = [
            "bg-[var(--brand-teal)] text-white",
            "bg-[var(--brand-lime)] text-[var(--brand-ink)]",
            "bg-[var(--brand-navy)] text-white",
            "bg-[var(--brand-sky)] text-[var(--brand-navy)]",
            "bg-[var(--brand-ink)] text-[var(--brand-lime)]"
          ];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: cn("flex items-center justify-between gap-3 rounded-2xl p-5 shadow-[var(--shadow-elevated)] transition-transform duration-300 hover:-translate-y-1", tones[i % tones.length]), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold uppercase tracking-[0.12em]", children: region }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5" })
          ] }, region);
        }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineRail, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[380px] w-full overflow-hidden md:h-[460px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: teamAsset.url, alt: "Equipo de Parque Industrial Verde en planta", className: "h-full w-full object-cover object-[center_top]", loading: "lazy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: { background: "linear-gradient(265deg, color-mix(in oklab, var(--brand-teal) 80%, transparent) 0%, color-mix(in oklab, var(--brand-ink) 40%, transparent) 70%, transparent 100%)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 mx-auto flex w-[min(1280px,calc(100%-2rem))] items-end justify-end pb-12 md:pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow eyebrow--light justify-end", children: "Aliados" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl", children: "Una red que convierte voluntad en infraestructura." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-20 md:py-28", style: { background: "var(--gradient-accent)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30", style: { background: "radial-gradient(circle at 20% 20%, var(--brand-lime) 0%, transparent 45%), radial-gradient(circle at 80% 80%, var(--brand-sky) 0%, transparent 50%)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-[min(1280px,calc(100%-2rem))] text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "mx-auto max-w-3xl space-y-6 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow eyebrow--light justify-center", children: "Hablemos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-4xl font-semibold tracking-tight md:text-6xl", children: "Diseñemos la ruta circular de tu operación." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: whatsappHref, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", children: "Cotizar por WhatsApp" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contacto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "heroSecondary", size: "xl", children: "Ir a contacto" }) })
        ] })
      ] }) })
    ] })
  ] });
}
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pt-36 md:pt-44", style: { background: "var(--gradient-accent)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30", style: { background: "radial-gradient(circle at 15% 25%, var(--brand-lime) 0%, transparent 45%), radial-gradient(circle at 85% 75%, var(--brand-sky) 0%, transparent 50%)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-[min(1280px,calc(100%-2rem))] pb-16 md:pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "max-w-4xl space-y-6 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow eyebrow--light", children: "Sobre nosotros" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-balance text-5xl font-semibold tracking-tight md:text-7xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--brand-lime)]", children: "+23 años" }),
          " transformando residuos en oportunidades."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-lg leading-8 text-white/85", children: "Desde INSEMA y ZARTEX hasta Parque Industrial Verde, hemos construido la red de reciclaje más grande de El Salvador: economía circular con respaldo industrial." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-3 pt-4 max-w-2xl", children: pivStats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-[var(--brand-lime)]", children: [
            s.prefix,
            formatMetric(s.value)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/85", children: s.suffix })
        ] }, s.label)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-reveal": true, className: "mx-auto -mt-10 w-[min(1280px,calc(100%-2rem))] md:-mt-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroAboutAsset.url, alt: "Operación real de Parque Industrial Verde, vista panorámica de planta", className: "image-tile h-[260px] w-full object-cover object-[center_30%] md:h-[420px]", loading: "eager" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineRail, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        eyebrow: "Propósito",
        title: "Operar con escala industrial y convicción ambiental no son caminos separados.",
        description: "PIV articula tecnología, experiencia y una red de recuperación para convertir desechos en valor verificable.",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-6 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { "data-reveal": true, className: "editorial-panel editorial-panel--teal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Misión" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xl leading-9", children: "Ser una empresa líder en el mercado nacional del reciclaje de materiales, haciendo de los desechos una fuente de protección ambiental e incentivando prácticas responsables." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { "data-reveal": true, className: "editorial-panel editorial-panel--lime", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Visión" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xl leading-9", children: "Ser reconocidos como la empresa de reciclaje más grande y confiable de El Salvador." })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        eyebrow: "Escala",
        title: "Recuperación con impacto medible.",
        description: "En 2025 superamos los 75 millones de libras recuperadas, equivalentes a múltiples campos de fútbol llenos de material reincorporado a la economía.",
        className: "bg-panel-subtle",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-3", children: impactMetrics.map((metric) => /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { ...metric }, metric.description)) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-panel-subtle pb-20 md:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-reveal": true, className: "mx-auto w-[min(1280px,calc(100%-2rem))]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-elevated)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: impactGraphicAsset.url,
        alt: "Visual de impacto con equivalencias de material recuperado en 2025",
        className: "block h-auto w-full object-contain",
        loading: "lazy"
      }
    ) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        eyebrow: "Confianza",
        title: "El liderazgo se construye con capacidad real de respuesta.",
        description: "Procesos transparentes, cobertura nacional e infraestructura hacen posible una ejecución constante.",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4", children: trustPillars.map((item, i) => {
          const tones = ["bg-[var(--brand-teal)] text-white", "bg-[var(--brand-lime)] text-[var(--brand-ink)]", "bg-[var(--brand-navy)] text-white", "bg-[var(--brand-sky)] text-[var(--brand-navy)]"];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { "data-reveal": true, className: cn("rounded-3xl p-6 shadow-[var(--shadow-elevated)]", tones[i % tones.length]), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base font-semibold leading-7", children: item })
          ] }, item);
        }) })
      }
    )
  ] });
}
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-36 md:pt-44", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-10 lg:grid-cols-[0.95fr_1.05fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Servicios" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-balance text-5xl font-semibold tracking-tight md:text-7xl", children: "Soluciones ambientales diseñadas para generar impacto." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-lg leading-8 text-muted-foreground", children: "Diseñamos operaciones para recuperar valor, asegurar trazabilidad y facilitar decisiones ambientales con respaldo documental y capacidad industrial." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: whatsappHref, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "lg", children: "Cotizar" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contacto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "lg", children: "Hablar con un asesor" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { "data-reveal": true, src: operationsAsset.url, alt: "Operación industrial de clasificación de plásticos y materiales recuperables", className: "image-tile h-[520px]", loading: "eager" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        eyebrow: "Capacidades",
        title: "Cada servicio se integra a una operación que busca orden, evidencia y resultados.",
        description: "Trabajamos con empresas, corporaciones e industrias que necesitan una solución ambiental alineada con cumplimiento, reputación e impacto medible.",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesGrid, {})
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EnterpriseCommunity, {})
  ] });
}
function MaterialsPage() {
  const groupTones = [
    { card: "bg-gradient-to-br from-[var(--brand-teal)] to-[var(--brand-navy)] text-white", pill: "bg-white/15 text-white border border-white/20" },
    { card: "bg-[var(--brand-lime)] text-[var(--brand-ink)]", pill: "bg-[var(--brand-ink)] text-[var(--brand-lime)]" },
    { card: "bg-[var(--brand-sky)] text-[var(--brand-navy)]", pill: "bg-[var(--brand-navy)] text-white" },
    { card: "bg-[var(--brand-ink)] text-white", pill: "bg-[var(--brand-lime)] text-[var(--brand-ink)]" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pt-36 md:pt-44", style: { background: "var(--gradient-accent)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30", style: { background: "radial-gradient(circle at 80% 20%, var(--brand-lime) 0%, transparent 45%), radial-gradient(circle at 20% 80%, var(--brand-sky) 0%, transparent 50%)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-10 pb-16 md:pb-24 lg:grid-cols-[1fr_1fr] lg:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "space-y-6 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow eyebrow--light", children: "Materiales" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-balance text-5xl font-semibold tracking-tight md:text-7xl", children: [
            "Cada material recuperado ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--brand-lime)]", children: "vuelve a la economía." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xl text-base leading-7 text-white/85", children: "Clasificamos materiales según tipología, condición y ruta de valorización. Cuando corresponde, gestionamos disposición responsable por cobro." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: whatsappHref, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", children: "Cotizar" }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { "data-reveal": true, src: metalsAsset.url, alt: "Clasificación de latas y materiales metálicos", className: "image-tile h-[460px] md:h-[520px]", loading: "eager" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        eyebrow: "Categorías",
        title: "Una estructura clara para preparar, separar y valorizar mejor.",
        description: "Agrupamos materiales para facilitar su recolección, clasificación y reincorporación a la cadena productiva.",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4", children: materialGroups.map((group, i) => {
          const t = groupTones[i % groupTones.length];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { "data-reveal": true, className: cn("rounded-3xl p-7 shadow-[var(--shadow-elevated)] transition-transform duration-300 hover:-translate-y-1", t.card), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold tracking-tight", children: group.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: group.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em]", t.pill), children: item }, item)) })
          ] }, group.title);
        }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Section,
      {
        eyebrow: "Cómo preparar los materiales",
        title: "La eficiencia del proceso empieza antes de la recolección.",
        description: "Preparar correctamente los materiales mejora la clasificación, reduce rechazos y acelera el aprovechamiento.",
        className: "bg-panel-subtle",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-3", children: preparationSteps.map((step, i) => {
            const tones = ["bg-[var(--brand-teal)] text-white", "bg-[var(--brand-lime)] text-[var(--brand-ink)]", "bg-[var(--brand-navy)] text-white"];
            const details = [
              {
                desc: "Enjuaga envases, latas y empaques para retirar restos de alimentos, bebidas o residuos orgánicos.",
                tips: ["Sin residuos líquidos", "Sin restos de comida", "Sin grasa ni aceites"]
              },
              {
                desc: "Deja escurrir y secar los materiales antes de almacenarlos para evitar contaminación y malos olores.",
                tips: ["Bien escurridos", "Libres de humedad", "Listos para almacenar"]
              },
              {
                desc: "Clasifica por tipo de material: plásticos, metales, papel y RAEE en bolsas o cajas independientes.",
                tips: ["Por categoría", "Sin mezclar tipos", "Identificados"]
              }
            ];
            const d = details[i];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { "data-reveal": true, className: cn("flex flex-col gap-4 rounded-3xl p-8 shadow-[var(--shadow-elevated)]", tones[i % tones.length]), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold uppercase tracking-[0.18em] opacity-75", children: [
                "Paso ",
                i + 1
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl font-bold tracking-tight", children: step }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-6 opacity-90", children: d.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1.5 text-sm font-medium", children: d.tips.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-current opacity-80" }),
                t
              ] }, t)) })
            ] }, step);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 rounded-3xl bg-[var(--brand-ink)] p-8 text-white shadow-[var(--shadow-elevated)]", "data-reveal": true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--brand-lime)]", children: "Disposición responsable por cobro" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-3 md:grid-cols-3", children: disposalMaterials.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-white/5 p-4 text-sm leading-6 text-white/90", children: item }, item)) })
          ] })
        ]
      }
    )
  ] });
}
function RsePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-36 md:pt-44", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "space-y-6 pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "RSE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-balance text-5xl font-semibold tracking-tight md:text-7xl", children: "El reciclaje también transforma comunidades." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-lg leading-8 text-muted-foreground", children: "Educación ambiental, campañas, activaciones comunitarias y acompañamiento empresarial forman parte de una estrategia de impacto que va más allá de la recuperación de materiales." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { "data-reveal": true, src: communityAsset.url, alt: "Programa comunitario de reciclaje y recuperación de materiales", className: "image-tile h-[520px]", loading: "eager" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Section,
      {
        eyebrow: "Campañas",
        title: "Activaciones que conectan marca, territorio y cultura ambiental.",
        description: "Desde jornadas educativas hasta campañas empresariales, cada acción busca convertir la sostenibilidad en participación y resultados medibles.",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-4 md:grid-cols-3", children: activeCampaigns.map((campaign) => /* @__PURE__ */ jsxRuntimeExports.jsx("article", { "data-reveal": true, className: "editorial-panel editorial-panel--accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-semibold tracking-tight", children: campaign }) }, campaign)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: kidsAsset.url, alt: "Niños y comunidad participando en un programa educativo de reciclaje", className: "image-tile h-[360px]", loading: "lazy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: beachAsset.url, alt: "Jornada de limpieza y recuperación de residuos en la playa", className: "image-tile h-[360px]", loading: "lazy" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section,
      {
        eyebrow: "Impacto social",
        title: "La economía circular también se construye desde la calle, la escuela y la costa.",
        description: "PIV trabaja con comunidades, empresas y territorios para activar hábitos, infraestructura y alianzas que multipliquen el efecto del reciclaje.",
        className: "bg-panel-subtle",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-6 lg:grid-cols-[1fr_0.9fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { "data-reveal": true, src: alliesAsset.url, alt: "Personas colaboradoras y aliadas participando en una iniciativa de Parque Industrial Verde", className: "image-tile h-[460px]", loading: "lazy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: communityActions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("article", { "data-reveal": true, className: "surface-panel", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium text-foreground", children: item }) }, item)) })
        ] })
      }
    )
  ] });
}
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pt-36 md:pt-44", style: { background: "var(--gradient-accent)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30", style: { background: "radial-gradient(circle at 20% 20%, var(--brand-lime) 0%, transparent 45%), radial-gradient(circle at 80% 80%, var(--brand-sky) 0%, transparent 50%)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-[min(1280px,calc(100%-2rem))] pb-12 md:pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "max-w-3xl space-y-5 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow eyebrow--light", children: "Contacto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-balance text-5xl font-semibold tracking-tight md:text-7xl", children: [
          "Hablemos de tu ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--brand-lime)]", children: "próxima ruta circular." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-lg leading-8 text-white/85", children: "Cotizaciones, recolecciones, campañas y alianzas. Te respondemos con una propuesta clara y operativa." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: whatsappHref, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", children: "WhatsApp" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: emailLink.href, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "heroSecondary", size: "xl", children: "Escribir correo" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden py-16 md:py-24", style: { background: "linear-gradient(180deg, var(--brand-sky) 0%, color-mix(in oklab, var(--brand-sky) 35%, white) 60%, white 100%)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-8 lg:grid-cols-[0.95fr_1.05fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactFormCard, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LocationsPanel, {})
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQSection, {})
  ] });
}
export {
  AboutPage as A,
  ContactPage as C,
  HomePage as H,
  MaterialsPage as M,
  RsePage as R,
  ServicesPage as S
};
