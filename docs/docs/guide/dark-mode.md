---
title: Dark Mode

---

# Dark Mode<VersionTag version="2.2.0" />

After a long time, OMD Design Plus supports dark mode!

We extracted and unified all necessary variables to make it possible to implement based on CSS Vars.

## How to enable it?

First you can create a switch to toggle `dark` class of html.

> If you only need dark mode, just add `dark` class for html.

```html
<html class="dark">
  <head></head>
  <body></body>
</html>
```

> If you want to toggle it, i recommend [useDark | VueUse](https://vueuse.org/core/useDark/).

Then, you can quickly enable it with just one line of code to import CSS in your entry.

```ts
// main.ts
// if you just want to import css
import 'omd-design-plus/style/dark/css-vars.css'
```

> If you want an example, you can refer to [omd-design-plus-vite-starter](https://github.com/omd-design-plus/omd-design-plus-vite-starter).

## Custom variables

### By CSS

Just override it by CSS Vars.

For example, new file `styles/dark/css-vars.css`:

```css
html.dark {
  /* custom dark bg color */
  --el-bg-color: #626aef;
}
```

Import it after styles of OMD Design Plus:

```ts
// main.ts
import 'omd-design-plus/style/dark/css-vars.css'
import './styles/dark/css-vars.css'
```

### By SCSS

If you use scss, you can also import scss file to compile.

> You can refer [Theming](./theming.md) to get more info.

```scss
// styles/element/index.scss
/*just override what you need*/
@forward 'omd-design-plus/style/src/dark/var.scss' with (
  $bg-color: (
    'page': #0a0a0a,
    '': #626aef,
    'overlay': #1d1e1f,
  )
);
```

```ts
// main.ts
import './styles/element/index.scss'

// or just want to import scss?
// import 'omd-design-plus/style/src/dark/css-vars.scss'
```
