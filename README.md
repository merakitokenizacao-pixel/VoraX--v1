# Plataforma Institucional VoraX

Site oficial desenvolvido em Next.js 14, focado em alta conversão e design premium para produtos de Inteligência Artificial.

## Tecnologias Usadas
- Next.js 14 (App Router)
- React 18
- Tailwind CSS v4 (inline theming customizado)
- Framer Motion (micro-interações e animations)
- Lucide React (Ícones de UI)

## Como Rodar Localmente

1. Tenha o `node` instalado.
2. Rode `npm install` (ou `npm i`) para garantir que todas as dependencias (como o framer-motion) estão linkadas.
3. Inicie o servidor:
   ```bash
   npm run dev
   ```
4. Navegue até `http://localhost:3000`

---

## 📌 ATENÇÃO: Placeholders a serem Substituídos

Para o go-live deste projeto, procure nos comentários do código por `// TODO:` e altere os seguintes dados fictícios:

*   **TrustMarquee.tsx** (`src/components/sections/TrustMarquee.tsx`): 
    *   Substituir a lista de nomes `placeholders1` e `placeholders2` por imagens/SVGs reais das Logos dos clientes.
*   **Testimonials.tsx** (`src/components/sections/Testimonials.tsx`):
    *   Substituir a const `testimonials` por avaliações validadas dos clientes e inserir os avatares (ao invés das iniciais e background sólido atual).
*   **Contatos (Footer.tsx, FinalCTA.tsx, Navbar.tsx)**:
    *   Coloque os links adequados de WhatsApp, LinkedIn, Instagram e e-mail.
*   **ArchitectureBreak (page.tsx)**:
    *   Se desejar, troque as URLs de fallback do Unsplash por Renders 3D e fotografias próprias.

## Identidade Visual
Implementação de cor e design disponíveis em `src/app/globals.css`. A base inteira usa propriedades dark-first e os utilitários de `glow` foram encapsulados em helpers globais CSS para uso junto ao Tailwind.
