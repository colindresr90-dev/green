import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-CbOCVXgw.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const siteName = "Parque Industrial Verde";
const siteDescription = "Parque Industrial Verde lidera la economía circular en El Salvador con infraestructura, trazabilidad y soluciones ambientales para empresas y comunidades.";
function buildMeta(title, description, path, ogType = "website") {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description }
    ],
    links: [{ rel: "canonical", href: path }]
  };
}
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: "/",
  email: "comunicaciones@parqueindustrialverde.com",
  telephone: "+50321211400",
  sameAs: [
    "https://www.facebook.com/parqueindustrialverde",
    "https://www.instagram.com/parqueindustrialverde.sv/",
    "https://www.tiktok.com/@parqueindustrialverde.sv",
    "https://www.linkedin.com/company/parque-industrial-verde/"
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "SV",
    addressRegion: "El Salvador"
  }
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué materiales reciben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plásticos, metales, papel, cartón y una amplia variedad de residuos electrónicos. Algunos materiales requieren disposición responsable por cobro según su condición."
      }
    },
    {
      "@type": "Question",
      name: "¿Realizan recolecciones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Diseñamos rutas para empresas, campañas y solicitudes específicas según volumen, ubicación y tipo de material."
      }
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona el certificado de destrucción?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Documentamos el proceso de destrucción y disposición con evidencia y trazabilidad para respaldar auditorías y cumplimiento interno."
      }
    }
  ]
};
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  areaServed: ["Soyapango", "Chalchuapa", "Costa del Sol", "El Salvador"],
  telephone: "+50321211400",
  email: "comunicaciones@parqueindustrialverde.com",
  url: "/contacto",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Soluciones ambientales",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gestión de residuos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trazabilidad digital" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Certificados de destrucción" } }
    ]
  }
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Página no encontrada" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "La ruta que buscas no existe o fue movida." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90",
        children: "Volver al inicio"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "Esta página no pudo cargarse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Ocurrió un problema inesperado. Puedes intentarlo de nuevo o volver al inicio." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90",
          children: "Intentar de nuevo"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-full border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Ir al inicio"
        }
      )
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: siteName },
      { name: "description", content: siteDescription },
      { property: "og:site_name", content: siteName },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "Circular Impact Hub is a premium corporate website for El Salvador's largest recycler, showcasing innovation and circular economy leadership." },
      { property: "og:description", content: "Circular Impact Hub is a premium corporate website for El Salvador's largest recycler, showcasing innovation and circular economy leadership." },
      { name: "twitter:description", content: "Circular Impact Hub is a premium corporate website for El Salvador's largest recycler, showcasing innovation and circular economy leadership." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d6a7a430-1dc7-462c-803f-24a4cff3b5e6/id-preview-621c88e4--af4f7c21-49f8-452d-ab5b-9fb669a988be.lovable.app-1781119634926.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d6a7a430-1dc7-462c-803f-24a4cff3b5e6/id-preview-621c88e4--af4f7c21-49f8-452d-ab5b-9fb669a988be.lovable.app-1781119634926.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Manrope:wght@400;500;600;700;800&display=swap"
      }
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(organizationSchema) }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "es", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$5 = () => import("./sobre-nosotros-ZZU_MceJ.mjs");
const Route$7 = createFileRoute("/sobre-nosotros")({
  head: () => buildMeta("Sobre Parque Industrial Verde — Historia, visión e infraestructura", "Más de 23 años construyendo liderazgo, trazabilidad e infraestructura para la economía circular en El Salvador.", "/sobre-nosotros"),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const BASE_URL = "";
const Route$6 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/sobre-nosotros", changefreq: "monthly", priority: "0.9" },
          { path: "/servicios", changefreq: "monthly", priority: "0.9" },
          { path: "/materiales", changefreq: "weekly", priority: "0.9" },
          { path: "/rse", changefreq: "monthly", priority: "0.8" },
          { path: "/contacto", changefreq: "monthly", priority: "0.8" }
        ];
        const urls = entries.map(
          (entry) => [
            "  <url>",
            `    <loc>${BASE_URL}${entry.path}</loc>`,
            entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : null,
            entry.priority ? `    <priority>${entry.priority}</priority>` : null,
            "  </url>"
          ].filter(Boolean).join("\n")
        );
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...urls,
          "</urlset>"
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$4 = () => import("./servicios-BR-BdHoS.mjs");
const Route$5 = createFileRoute("/servicios")({
  head: () => buildMeta("Servicios ambientales — Recolección, trazabilidad y destrucción certificada", "Gestión de residuos, recuperación de materiales, certificación y trazabilidad para empresas, industrias y corporaciones.", "/servicios"),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./rse-CI49e67Q.mjs");
const Route$4 = createFileRoute("/rse")({
  head: () => buildMeta("RSE y educación ambiental — Impacto social de Parque Industrial Verde", "Campañas, educación ambiental y trabajo con comunidades para ampliar el impacto de la economía circular en El Salvador.", "/rse"),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const Route$3 = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => new Response("User-agent: *\nAllow: /\n", {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=3600"
        }
      })
    }
  }
});
const $$splitComponentImporter$2 = () => import("./materiales-3frW-vWm.mjs");
const Route$2 = createFileRoute("/materiales")({
  head: () => buildMeta("Materiales reciclables y RAEE — Qué recibe Parque Industrial Verde", "Consulta materiales aceptados, categorías, preparación y opciones de disposición responsable por cobro.", "/materiales"),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./contacto-Lx8Nn6Ja.mjs");
const Route$1 = createFileRoute("/contacto")({
  head: () => ({
    ...buildMeta("Contacto Parque Industrial Verde — Solicita recolección y atención comercial", "Habla con Parque Industrial Verde, solicita recolección, consulta ubicaciones y agenda soluciones ambientales para tu operación.", "/contacto"),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(localBusinessSchema)
    }, {
      type: "application/ld+json",
      children: JSON.stringify(faqSchema)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BaOKAEjJ.mjs");
const Route = createFileRoute("/")({
  head: () => buildMeta("Parque Industrial Verde — Economía circular con escala industrial", "Infraestructura, trazabilidad y soluciones ambientales para empresas y comunidades en El Salvador.", "/"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SobreNosotrosRoute = Route$7.update({
  id: "/sobre-nosotros",
  path: "/sobre-nosotros",
  getParentRoute: () => Route$8
});
const SitemapDotxmlRoute = Route$6.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$8
});
const ServiciosRoute = Route$5.update({
  id: "/servicios",
  path: "/servicios",
  getParentRoute: () => Route$8
});
const RseRoute = Route$4.update({
  id: "/rse",
  path: "/rse",
  getParentRoute: () => Route$8
});
const RobotsDottxtRoute = Route$3.update({
  id: "/robots.txt",
  path: "/robots.txt",
  getParentRoute: () => Route$8
});
const MaterialesRoute = Route$2.update({
  id: "/materiales",
  path: "/materiales",
  getParentRoute: () => Route$8
});
const ContactoRoute = Route$1.update({
  id: "/contacto",
  path: "/contacto",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  ContactoRoute,
  MaterialesRoute,
  RobotsDottxtRoute,
  RseRoute,
  ServiciosRoute,
  SitemapDotxmlRoute,
  SobreNosotrosRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
