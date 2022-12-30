import navLocale from './pages/sidebar.json'
import { doscPath } from './features'

function getNav() {
  return navLocale.map((item) => {
    return {
      ...item,
      link: `/${doscPath}${item.link}`,
    }
  })
}

export const nav = getNav()
