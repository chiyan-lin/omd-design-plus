import navLocale from './pages/sidebar.json'
import { doscPath } from './features'
// Mapping the first sub link to the nav link to avoid 404 error.

function getNav() {
  return navLocale.map((item) => {
    return {
      ...item,
      link: `/${doscPath}${item.link}`,
    }
  })
}

export const nav = getNav()
