// Regenerates src/lib/projects-data.ts from the files in public/images/projetos/.
// Run with: node scripts/generate-projects-data.js
const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "..", "public", "images", "projetos");
const OUT = path.join(__dirname, "..", "src", "lib", "projects-data.ts");

// Add a category here whenever a new filename prefix is introduced in public/images/projetos.
const categoryMeta = {
  esquadrias: {
    label: "Esquadrias de Alumínio",
    slug: "esquadrias",
    alts: [
      "Esquadria de alumínio sob medida instalada em residência",
      "Janela ampla em esquadria de alumínio com vidro temperado",
      "Fechamento em vidro e alumínio com vista externa",
      "Esquadria de alumínio em fachada residencial",
    ],
  },
  portas: {
    label: "Portas e Janelas",
    slug: "portas",
    alts: [
      "Porta pivotante em alumínio com acabamento preto",
      "Porta de alumínio com textura amadeirada",
      "Porta de entrada em alumínio de alto padrão",
      "Porta em alumínio instalada em residência",
    ],
  },
  "portas-madeira": {
    label: "Portas e Janelas",
    slug: "portas",
    alts: [
      "Porta pivotante em alumínio com textura amadeirada",
      "Porta de entrada premium em alumínio ripado",
      "Detalhe de fechadura e puxador em porta de alumínio",
    ],
  },
  portoes: {
    label: "Portas e Janelas",
    slug: "portas",
    alts: ["Portão em alumínio instalado em residência"],
  },
  fechamentos: {
    label: "Vidros e Fechamentos",
    slug: "fechamentos",
    alts: [
      "Fechamento de área gourmet em vidro e alumínio",
      "Porta de vidro de correr para varanda",
      "Fechamento de vidro com vista para o jardim",
      "Fechamento em vidro para sacada",
    ],
  },
  "box-banheiro": {
    label: "Box para Banheiro",
    slug: "box-banheiro",
    alts: [
      "Box de vidro temperado para banheiro em suíte de alto padrão",
      "Box de vidro incolor com perfil em alumínio preto",
    ],
  },
  "guarda-corpo": {
    label: "Guarda-Corpos",
    slug: "guarda-corpo",
    alts: [
      "Guarda-corpo de vidro em sacada com vista panorâmica",
      "Guarda-corpo de vidro com corrimão em alumínio preto",
    ],
  },
  "vidros-especiais": {
    label: "Espelhos e Projetos Especiais",
    slug: "especiais",
    alts: [
      "Vidro jateado para ambiente de banheiro",
      "Esquadria de alumínio com vidro especial",
      "Projeto especial em vidro sob medida",
    ],
  },
  fachada: {
    label: "Projetos Comerciais",
    slug: "comercial",
    alts: ["Fachada comercial em vidro e alumínio"],
  },
};

const files = fs
  .readdirSync(DIR)
  .filter((f) => /\.jpg$/i.test(f))
  .sort();

function toIdentifier(filename) {
  const base = filename.replace(/\.jpg$/i, "");
  const camel = base.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
  return "img" + camel.charAt(0).toUpperCase() + camel.slice(1);
}

const counters = {};
const importLines = [];
const entries = [];

for (const file of files) {
  const prefix = file.replace(/-\d+\.jpg$/i, "");
  const meta = categoryMeta[prefix];
  if (!meta) {
    console.error("No category meta for prefix:", prefix, "(file:", file + ")");
    console.error("Add it to categoryMeta in this script and re-run.");
    process.exit(1);
  }
  const ident = toIdentifier(file);
  importLines.push(`import ${ident} from "../../public/images/projetos/${file}";`);

  counters[prefix] = (counters[prefix] || 0) + 1;
  const altPool = meta.alts;
  const alt = altPool[(counters[prefix] - 1) % altPool.length];

  entries.push({ ident, category: meta.slug, categoryLabel: meta.label, alt, file });
}

const body = `${importLines.join("\n")}
import type { StaticImageData } from "next/image";

export type ProjectCategory =
  | ${Array.from(new Set(entries.map((e) => `"${e.category}"`))).join("\n  | ")};

export type ProjectImage = {
  src: StaticImageData;
  alt: string;
  category: ProjectCategory;
  categoryLabel: string;
};

export const projectCategoryLabels: Record<ProjectCategory, string> = {
${Array.from(new Set(entries.map((e) => `  "${e.category}": "${e.categoryLabel}",`))).join("\n")}
};

export const projectImages: ProjectImage[] = [
${entries
  .map(
    (e) =>
      `  { src: ${e.ident}, alt: "${e.alt}", category: "${e.category}", categoryLabel: "${e.categoryLabel}" },`
  )
  .join("\n")}
];

export const projectImagesByFilename: Record<string, ProjectImage> = {
${entries
  .map(
    (e) =>
      `  "${e.file}": { src: ${e.ident}, alt: "${e.alt}", category: "${e.category}", categoryLabel: "${e.categoryLabel}" },`
  )
  .join("\n")}
};
`;

fs.writeFileSync(OUT, body, "utf8");
console.log("Wrote", OUT, "with", entries.length, "entries");
