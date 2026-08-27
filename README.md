# Site institucional — Stop Vidros

Site em Next.js (App Router) + TypeScript + Tailwind CSS para a Stop Vidros, focado em gerar pedidos de orçamento pelo WhatsApp.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

```
src/
  app/            rotas (Home, /projetos, sitemap, robots)
  sections/       seções da Home (Hero, Serviços, Sobre, Contato, ...)
  components/     componentes reutilizáveis (Header, Footer, Lightbox, botão WhatsApp)
  config/site.ts  dados centralizados da empresa (nome, endereço, telefone, horário, redes)
  lib/            helpers (link do WhatsApp, catálogo de fotos dos projetos)
public/
  images/projetos/  fotos reais de projetos, organizadas por categoria
  images/logo-stop-vidros.png  logo oficial, fundo transparente, recortada
```

## Editar os dados da empresa

Tudo o que aparece no site (telefone, WhatsApp, endereço, horário, Instagram/Facebook) vem de um único
arquivo: [`src/config/site.ts`](src/config/site.ts). Para atualizar qualquer dado de contato, edite só
esse arquivo — o restante do site é montado a partir dele.

As mensagens que abrem no WhatsApp por seção ficam em [`src/lib/whatsapp.ts`](src/lib/whatsapp.ts).

## Fotos dos projetos

As fotos reais enviadas pelo cliente foram selecionadas, renomeadas por categoria e otimizadas via
`next/image` em `public/images/projetos/`. O catálogo (`src/lib/projects-data.ts`) é **gerado
automaticamente** a partir dos arquivos dessa pasta — não edite esse arquivo à mão. Para adicionar,
remover ou trocar fotos:

1. Adicione/substitua os arquivos em `public/images/projetos/`, seguindo o padrão de nome
   `categoria-NN.jpg` (categorias atuais: `esquadrias`, `portas`, `portas-madeira`, `portoes`,
   `fechamentos`, `box-banheiro`, `guarda-corpo`, `vidros-especiais`, `fachada`).
2. Rode `npm run gen:projects` — o script em `scripts/generate-projects-data.js` recria
   `src/lib/projects-data.ts` automaticamente. Uma categoria nova precisa ser adicionada em
   `categoryMeta`, dentro do próprio script, antes de rodá-lo.

## Pendências antes de publicar

- [x] Logo em PNG transparente — recebida e em uso em `public/images/logo-stop-vidros.png`
      (`src/components/Logo.tsx`).
- [ ] Confirmar Instagram/Facebook comercial e preencher `siteConfig.social` em `src/config/site.ts`.
- [ ] Confirmar CNPJ/razão social, se houver, para o rodapé e o Google Meu Negócio.
- [ ] Registrar o domínio definitivo e atualizar `siteConfig.url` em `src/config/site.ts`.

## Deploy na Vercel

1. Suba este repositório para o GitHub/GitLab.
2. Importe o projeto em [vercel.com/new](https://vercel.com/new).
3. A Vercel detecta Next.js automaticamente — não é preciso configuração extra.
4. Configure o domínio próprio nas configurações do projeto na Vercel.

## UI de terceiros (shadcn/ui)

A seção "Projetos que falam pela nossa qualidade" da Home usa um carrossel baseado em
[shadcn/ui](https://ui.shadcn.com) (`Carousel` + `Button`, via `embla-carousel-react`), adaptado em
`src/components/ui/gallery4.tsx` para usar fotos reais e links internos em vez do conteúdo de exemplo.
As variáveis de tema do shadcn (`--primary`, `--muted-foreground` etc.) ficam em `src/app/globals.css`,
mapeadas para a mesma paleta usada no resto do site — novos componentes shadcn adicionados no futuro já
herdam essas cores automaticamente.

A seção "Nossos Serviços" da Home usa um carrossel diferente, `src/components/ui/feature-carousel.tsx`
(animação com [motion](https://motion.dev) e ícones do [Hugeicons](https://hugeicons.com)), também
adaptado para os 6 serviços reais (`src/lib/services-data.ts`) e para a paleta do site em vez do azul e
dos ícones genéricos do componente original. Os ícones usados (`WindowsNewIcon`, `Door01Icon`,
`Layers01Icon`, `ShowerHeadIcon`, `Stairs01Icon`, `MirrorIcon`) foram conferidos em
`@hugeicons/core-free-icons` antes de usar — ao trocar um serviço por outro tipo de ícone, confirme que o
nome existe no pacote (`node_modules/@hugeicons/core-free-icons/dist/esm`) antes de importar.

## SEO

- Metadados, Open Graph, `sitemap.xml` e `robots.txt` são gerados automaticamente
  (`src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`).
- Marcação `LocalBusiness` (schema.org) em `src/components/LocalBusinessSchema.tsx`.
- Ajuste `siteConfig.url` para o domínio real antes de publicar — isso afeta o `sitemap.xml`,
  `robots.txt` e as tags Open Graph.
