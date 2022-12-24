import guideLocale from './pages/guide.json'
import componentLocale from './pages/component.json'
import { doscPath } from './features'

function getGuideSidebar() {
  return Object.values(guideLocale).map((item) => mapPrefix(item, '/guide'))
}

function getComponentsSideBar() {
  return Object.values(componentLocale).map((item) =>
    mapPrefix(item, '/component')
  )
}

// return sidebar with language configs.
// this might create duplicated data but the overhead is ignorable
const getSidebars = () => {
  return {
    '/guide/': getGuideSidebar(),
    '/component/': getComponentsSideBar(),
  }
}

type Item = {
  text: string
  children?: Item[]
  link?: string
}

function mapPrefix(item: Item, prefix = '') {
  if (item.children && item.children.length > 0) {
    return {
      ...item,
      children: item.children.map((child) => mapPrefix(child, prefix)),
    }
  }
  return {
    ...item,
    link: `/${doscPath}${item.link}`,
  }
}

export const sidebars = getSidebars()
