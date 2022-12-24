import{o,c as p,e as s,f as n,a as t,g as e,h as c}from"./app.cbf03a3a.js";const l=s("h1",{id:"custom-theme",tabindex:"-1"},[n("Custom theme "),s("a",{class:"header-anchor vp-link",href:"#custom-theme","aria-hidden":"true"},"#")],-1),i=s("p",null,"OMD Design Plus uses BEM-styled CSS so that you can override styles easily. But if you need to replace styles at a large scale, e.g. change the theme color from blue to orange or green, maybe overriding them one by one is not a good idea.",-1),u=s("p",null,"We provide four ways to change the style variables.",-1),r=s("h2",{id:"change-theme-color",tabindex:"-1"},[n("Change theme color "),s("a",{class:"header-anchor vp-link",href:"#change-theme-color","aria-hidden":"true"},"#")],-1),k=s("p",null,"These are examples about custom theme.",-1),d={href:"https://github.com/omd-design-plus/omd-design-plus-vite-starter",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/omd-design-plus/unplugin-omd-design-plus",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},g=s("h3",{id:"by-scss-variables",tabindex:"-1"},[n("By SCSS variables "),s("a",{class:"header-anchor vp-link",href:"#by-scss-variables","aria-hidden":"true"},"#")],-1),h=s("code",null,"style",-1),v={href:"https://github.com/omd-design-plus/omd-design-plus/blob/dev/packages/style/src/common/var.scss",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},_=s("code",null,"packages/style/src/common/var.scss",-1),f={class:"warning custom-block"},y=s("p",{class:"custom-block-title"},"WARNING",-1),b={href:"https://sass-lang.com/documentation/values/maps",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},w=s("code",null,"@use",-1),S=s("code",null,"@use",-1),C=s("code",null,"@import",-1),x={href:"https://css-tricks.com/introducing-sass-modules/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},I=s("p",null,[n("For example, We use "),s("code",null,"$colors"),n(" as a map to preserve different types of colors.")],-1),T=s("p",null,[s("code",null,"$notification"),n(" is a map where all variables of the "),s("code",null,"notification"),n(" component at.")],-1),P={href:"https://github.com/omd-design-plus/omd-design-plus/blob/dev/packages/style/src/common/var.scss",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},D=e(`<div class="language-scss"><pre><code><span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> map.<span class="token function">deep-merge</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>
    <span class="token string">&#39;white&#39;</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">,</span>
    <span class="token string">&#39;black&#39;</span><span class="token punctuation">:</span> #000000<span class="token punctuation">,</span>
    <span class="token string">&#39;primary&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #409eff<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;success&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #67c23a<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;warning&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #e6a23c<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;danger&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #f56c6c<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #f56c6c<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;info&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #909399<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token variable">$colors</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="how-to-override-it" tabindex="-1">How to override it? <a class="header-anchor vp-link" href="#how-to-override-it" aria-hidden="true">#</a></h3><p>If your project also uses SCSS, you can directly change OMD Design Plus style variables. Create a new style file, e.g. <code>styles/element/index.scss</code>:</p>`,3),q={class:"warning custom-block"},A=s("p",{class:"custom-block-title"},"WARNING",-1),V=s("p",null,[n("You should use "),s("code",null,"@use 'xxx.scss' as *;"),n(" instead of "),s("code",null,"@import 'xxx.scss';"),n(".")],-1),N=s("p",null,[n("Because the sass team said they will remove "),s("code",null,"@import"),n(" eventually.")],-1),O={href:"https://sass-lang.com/documentation/at-rules/use",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},B={href:"https://sass-lang.com/documentation/at-rules/import",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},E=e(`<div class="language-scss"><pre><code><span class="token comment">// styles/element/index.scss</span>
<span class="token comment">/* just override what you need */</span>
<span class="token keyword">@forward</span> <span class="token string">&#39;omd-design-plus/style/src/common/var.scss&#39;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">&#39;primary&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> green<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// If you just import on demand, you can ignore the following content.</span>
<span class="token comment">// if you want to import all styles:</span>
<span class="token comment">// @use &quot;omd-design-plus/style/src/index.scss&quot; as *;</span>
</code></pre></div><p>Then in the entry file of your project, import this style file instead of Element&#39;s built CSS:</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Import <code>element/index.scss</code> before scss of omd-design-plus to avoid the problem of sass mixed variables, because we need generate light-x by your custom variables.</p></div><p>Create a <code>element/index.scss</code> to combine your variables and variables of omd-design-plus. (If you import them in ts, they will not be combined.)</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In addition, you should distinguish your scss from the element variable scss. If they are mixed together, each hot update of <code>omd-design-plus</code> needs to compile a large number of scss files, resulting in slow speed.</p></div><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./styles/element/index.scss&#39;</span>
<span class="token keyword">import</span> OmdDesignPlus <span class="token keyword">from</span> <span class="token string">&#39;omd-design-plus&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>OmdDesignPlus<span class="token punctuation">)</span>
</code></pre></div><p>If you are using vite, and you want to custom theme when importing on demand.</p><p>Use <code>scss.additionalData</code> to compile variables with scss of every component.</p><div class="language-ts"><pre><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token comment">// You can also use unplugin-vue-components</span>
<span class="token comment">// import Components from &#39;unplugin-vue-components/vite&#39;</span>
<span class="token comment">// import { OmdDesignPlusResolver } from &#39;unplugin-vue-components/resolvers&#39;</span>

<span class="token comment">// or use unplugin-omd-design-plus</span>
<span class="token keyword">import</span> OmdDesignPlus <span class="token keyword">from</span> <span class="token string">&#39;unplugin-omd-design-plus/vite&#39;</span>

<span class="token comment">// vite.config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;~/&#39;</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@use &quot;~/styles/element/index.scss&quot; as *;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// use unplugin-vue-components</span>
    <span class="token comment">// Components({</span>
    <span class="token comment">//   resolvers: [</span>
    <span class="token comment">//     OmdDesignPlusResolver({</span>
    <span class="token comment">//       importStyle: &quot;sass&quot;,</span>
    <span class="token comment">//       // directives: true,</span>
    <span class="token comment">//       // version: &quot;2.1.5&quot;,</span>
    <span class="token comment">//     }),</span>
    <span class="token comment">//   ],</span>
    <span class="token comment">// }),</span>
    <span class="token comment">// or use unplugin-omd-design-plus</span>
    <span class="token function">OmdDesignPlus</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      useSource<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>If you are using webpack, and you want to custom theme when importing on demand.</p><div class="language-ts"><pre><code><span class="token comment">// webpack.config.ts</span>
<span class="token comment">// use unplugin-omd-design-plus</span>

<span class="token keyword">import</span> OmdDesignPlus <span class="token keyword">from</span> <span class="token string">&#39;unplugin-omd-design-plus/webpack&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    loaderOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@use &quot;~/styles/element/index.scss&quot; as *;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">OmdDesignPlus</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      useSource<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="by-css-variable" tabindex="-1">By CSS Variable <a class="header-anchor vp-link" href="#by-css-variable" aria-hidden="true">#</a></h3><p>CSS Variables is a very useful feature, already supported by almost all browsers. (IE: Wait?)</p>`,13),W={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},j=e(`<p>We have used css variables to reconstruct the style system of almost all components.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>It is compatible with the SCSS variable system. We use the function of SCSS to automatically generate css variables for use.</p></div><p>This means you can dynamically change individual variables inside the component to better customize it without having to modify scss and recompile it.</p><blockquote><p>In the future, the css variable names and role documentation for each component will be written to each component.</p></blockquote><p>Like this:</p><div class="language-css"><pre><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--el-color-primary</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If you just want to customize a particular component, just add inline styles for certain components individually.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--el-tag-bg-color</span><span class="token punctuation">:</span> red</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>For performance reasons, it is more recommended to custom css variables under a class rather than the global <code>:root</code>.</p><div class="language-css"><pre><code><span class="token selector">.custom-class</span> <span class="token punctuation">{</span>
  <span class="token property">--el-tag-bg-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If you want to control css var by script, try this:</p><div class="language-ts"><pre><code><span class="token comment">// document.documentElement is global</span>
<span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement
<span class="token comment">// const el = document.getElementById(&#39;xxx&#39;)</span>

<span class="token comment">// get css var</span>
<span class="token function">getComputedStyle</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">--el-color-primary</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

<span class="token comment">// set css var</span>
el<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">&#39;--el-color-primary&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
</code></pre></div>`,12),R={href:"https://vueuse.org/core/usecssvar/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},F='{"title":"Theming","description":"","frontmatter":{"title":"Theming","lang":"zh-CN"},"headers":[{"level":2,"title":"Change theme color","slug":"change-theme-color"},{"level":3,"title":"By SCSS variables","slug":"by-scss-variables"},{"level":3,"title":"How to override it?","slug":"how-to-override-it"},{"level":3,"title":"By CSS Variable","slug":"by-css-variable"}],"relativePath":"docs/guide/theming.md","lastUpdated":1671899920000}',$={},G=Object.assign($,{__name:"theming",setup(z){return(M,U)=>{const a=c;return o(),p("div",null,[l,i,u,r,k,s("ul",null,[s("li",null,[n("Full import: "),s("a",d,[n("omd-design-plus-vite-starter"),t(a,{class:"link-icon"})])]),s("li",null,[n("On demand: "),s("a",m,[n("unplugin-omd-design-plus/examples/vite"),t(a,{class:"link-icon"})])])]),g,s("p",null,[h,n(" is written in SCSS. You can find SCSS variables in "),s("a",v,[_,t(a,{class:"link-icon"})]),n(".")]),s("div",f,[y,s("p",null,[n("We use sass modules ("),s("a",b,[n("sass:map"),t(a,{class:"link-icon"})]),n("...) and "),w,n(" to refactor all SCSS variables. And by using "),S,n(" to all SCSS variables, it solves the duplicate output problem caused by "),C,n(".")]),s("blockquote",null,[s("p",null,[s("a",x,[n("Introducing Sass Modules | CSS-TRICKS"),t(a,{class:"link-icon"})])])]),I,T,s("p",null,[n("In the future, we will write documentation for variables that can be customized for each component. You can also directly checkout the source "),s("a",P,[n("var.scss"),t(a,{class:"link-icon"})]),n(".")])]),D,s("div",q,[A,V,N,s("blockquote",null,[s("p",null,[s("a",O,[n("Sass: @use"),t(a,{class:"link-icon"})]),n(" vs "),s("a",B,[n("Sass: @import"),t(a,{class:"link-icon"})])])])]),E,s("blockquote",null,[s("p",null,[n("Learn more from "),s("a",W,[n("Using CSS custom properties (variables) | MDN"),t(a,{class:"link-icon"})])])]),j,s("p",null,[n("If you want a more elegant way, check this out. "),s("a",R,[n("useCssVar | VueUse"),t(a,{class:"link-icon"})])])])}}});export{F as __pageData,G as default};
