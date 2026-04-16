import Link from "next/link";
import { LogoVorax } from "@/components/ui/svgs";

const footerLinks = [
  {
    title: "Produto",
    links: [
      { name: "Agentes IA", href: "#agentes" },
      { name: "Automação", href: "#automacao" },
      { name: "BI", href: "#bi" },
      { name: "Integrações", href: "#integracoes" },
    ]
  },
  {
    title: "Soluções",
    links: [
      { name: "Imobiliárias", href: "#solucoes" },
      { name: "Clínicas", href: "#solucoes" },
      { name: "E-commerce", href: "#solucoes" },
      { name: "B2B", href: "#solucoes" },
      { name: "Logística", href: "#solucoes" },
    ]
  },
  {
    title: "Empresa",
    links: [
      { name: "Sobre", href: "#sobre" },
      { name: "Casos", href: "#casos" },
      { name: "Blog", href: "#blog" },
      { name: "Carreiras", href: "#carreiras" },
    ]
  },
  {
    title: "Contato",
    links: [
      { name: "E-mail", href: "mailto:contato@vorax.ia" },
      { name: "WhatsApp", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "Instagram", href: "#" },
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0B] border-t border-border-subtle pt-20 pb-10">
      <div className="container mx-auto px-6 border-b border-white/5 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          
          {/* Logo & Tagline (takes 2 columns) */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <LogoVorax />
            </Link>
            <p className="text-text-secondary w-full max-w-xs mt-2">
              IA que devora gargalos.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="font-mono text-sm uppercase tracking-widest text-white mb-6 font-bold">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      href={link.href}
                      className="text-text-secondary hover:text-accent-glow transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between mt-8 text-sm text-text-muted">
        <p>© 2026 VoraX. Todos os direitos reservados.</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
          <Link href="#" className="hover:text-white transition-colors">Termos de Serviço</Link>
        </div>
      </div>
    </footer>
  );
};
