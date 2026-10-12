// Point d'entrée du prérendu (scripts/prerender.js). Génère le HTML statique
// des pages publiques pour que Google ET les robots IA (GPTBot, ClaudeBot,
// PerplexityBot… qui n'exécutent pas le JavaScript) lisent le vrai contenu.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Realisation from "./Pages/Realisation";
import Cgv from "./Pages/Cgv";

export { businessSchema } from "./lib/business";

export const routes = {
  "/": Home,
  "/services": Services,
  "/realisations": Realisation,
  "/contact": Contact,
  "/mentions-legales": Cgv,
};

export function render(url) {
  const Page = routes[url];
  return renderToString(
    <StaticRouter location={url}>
      <Page />
    </StaticRouter>
  );
}
