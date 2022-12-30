<script lang="ts" setup>
import { computed } from 'vue'
import { useLang } from '../../composables/lang'

defineProps<{
  isHome?: boolean
}>()
</script>

<template>
  <footer class="footer" :class="{ 'is-home': isHome }">
    <div class="footer-main">
      <h4>链接</h4>
      <a
        href="https://github.com/chiyan-lin/omd-design-plus/"
        class="footer-main-link"
        target="_blank"
      >
        GitHub
      </a>
      <!-- <a
        href="https://github.com/omd-design-plus/omd-design-plus/releases"
        class="footer-main-link"
        target="_blank"
      >
        Changelog
      </a> -->
      <a
        href="https://chiyan-lin.github.io/omd-design-plus/docs/"
        class="footer-main-link"
        target="_blank"
      >
        Docs
      </a>
    </div>

    <div class="footer-main">
      <h4>交流</h4>
      <a
        href="https://github.com/chiyan-lin/omd-design-plus/issues"
        class="footer-main-link"
        target="_blank"
      >
        反馈
      </a>
      <a
        href="https://github.com/chiyan-lin/omd-design-plus/CONTRIBUTE.md"
        class="footer-main-link"
        target="_blank"
      >
        贡献
      </a>
      <a
        href="https://github.com/chiyan-lin/Blog/issues/29"
        class="footer-main-link"
        target="_blank"
      >
        过程
      </a>
    </div>
  </footer>
</template>

<style lang="scss">
.dark .footer {
  background-color: var(--docs-fill-color-lighter);
}
.footer {
  background-color: #f5f7fa;
  box-sizing: border-box;
  padding: 42px 64px 64px;
  // height: 340px;

  &.is-home {
    background-color: var(--bg-color);
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 19px;
  }

  .container {
    box-sizing: border-box;
    width: auto;
  }

  .footer-main {
    font-size: 0;
    display: inline-block;
    vertical-align: top;
    margin-right: 130px;

    h4 {
      font-size: 18px;
      line-height: 1;
      margin: 0 0 15px 0;
      font-weight: 400;
      color: var(--docs-text-color-primary);
    }

    .footer-main-link {
      display: block;
      margin: 0;
      line-height: 2;
      font-size: 14px;
      color: var(--text-color-light);

      &:hover {
        color: var(--text-color);
      }
    }
  }

  .footer-social {
    float: right;
    text-align: right;

    .footer-social-title {
      color: var(--text-color-light);
      font-size: 18px;
      line-height: 1;
      margin: 0 0 20px 0;
      padding: 0;
      font-weight: bold;
    }

    .ep-icon-github {
      transition: 0.3s;
      display: inline-block;
      line-height: 32px;
      text-align: center;
      color: #c8d6e8;
      background-color: transparent;
      font-size: 32px;
      vertical-align: middle;
      margin-right: 20px;
      &:hover {
        transform: scale(1.2);
        color: #8d99ab;
      }
    }

    .doc-icon-gitter {
      margin-right: 0;
    }
  }
}

@media (max-width: 1140px) {
  .footer {
    height: auto;
  }
}

@media (max-width: 1000px) {
  .footer-social {
    display: none;
  }
}

@media (max-width: 768px) {
  .footer {
    .footer-main {
      margin-bottom: 30px;
    }
  }
}
</style>
