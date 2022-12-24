import { computed } from 'vue'
import { useData } from 'vitepress'
import { useLocale } from '../composables/locale'
import { defaultLang } from '../constant'
import { createGitHubUrl } from '../utils'

export function useEditLink() {
  const { page, theme, frontmatter } = useData()
  const url = computed(() => {
    const {
      repo,
      docsDir = '',
      docsBranch = 'dev',
      docsRepo = repo,
      editLinks,
    } = theme.value
    const showEditLink =
      frontmatter.value.editLink != null
        ? frontmatter.value.editLink
        : editLinks
    const { relativePath } = page.value
    if (!showEditLink || !relativePath || !repo) {
      return null
    }
    return createGitHubUrl(docsRepo, docsDir, docsBranch, relativePath, '', '')
  })
  const text = computed(() => {
    return '编辑'
  })

  return {
    url,
    text,
  }
}
