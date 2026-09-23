// @ts-check
import { defineConfig } from 'astro/config';

// Old Wix URLs → new routes, so existing links keep working after the domain moves.
const legacy = {
  'projects-c3pcid': 'c3pcid',
  'copy-of-prokedex': 'c3pcid',
  'projects-prokedex': 'prokedex',
  'tic-tac-toe-online': 'tic-tac-toe-online',
  'xabreguices-claw-machine': 'claw-machine',
  'projects-foxstale': 'foxs-tale',
  'projects-correcorre': 'corre-corre',
  'tetris-x-puyo-puyo': 'tetris-x-puyo-puyo',
};

// Old pages of projects no longer shown → home page
const removed = ['innapropriate-prankers', 'projects-pretzelvsdonuts', 'projects-milkway', 'projects-minigames'];

// https://astro.build/config
export default defineConfig({
  site: 'https://www.viniciusportfolio.com',
  redirects: {
    ...Object.fromEntries(Object.entries(legacy).map(([from, to]) => [`/${from}`, `/projects/${to}`])),
    ...Object.fromEntries(removed.map((from) => [`/${from}`, '/'])),
  },
});
