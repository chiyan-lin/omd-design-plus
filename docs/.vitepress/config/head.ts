import fs from 'fs'
import path from 'path'
import { vpRoot } from '@omd-design-plus/build-utils'
import { languages } from '../utils/lang'

import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      href: '/images/omd-design-plus-logo-small.svg',
      type: 'image/svg+xm',
    },
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
  [
    'link',
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
  ],
  [
    'meta',
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
  [
    'meta',
    {
      name: 'msapplication-TileColor',
      content: '#409eff',
    },
  ],
  [
    'meta',
    {
      name: 'msapplication-config',
      content: '/browserconfig.xml',
    },
  ],
  [
    'script',
    {},
    `;(() => {
      // if (window.location.href.indexOf('/docs/') === -1) {
      //   window.location.href = window.location.origin + '/omd-design-plus/docs/'
      // }
    })()`,
  ],
  // ['script', {}, fs.readFileSync(path.resolve(vpRoot, 'lang.js'), 'utf-8')],
  [
    'script',
    {},
    `if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(function(registration) {
          console.log(registration);
        })
        .catch(function(err) {
          console.log(err);
        });
    }`,
  ],
  [
    'script',
    {
      async: 'true',
    },
    `
  var resource = document.createElement('link');
  resource.setAttribute("rel", "stylesheet");
  resource.setAttribute("href","//fonts.loli.net/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap");
  resource.setAttribute("type","text/css");
  var head = document.querySelector('head');
  head.appendChild(resource);
    `,
  ],
]

head.push([
  'script',
  {},
  fs.readFileSync(path.resolve(vpRoot, 'dark-mode.js'), 'utf-8'),
])
