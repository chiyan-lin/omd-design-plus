import{r as e,o as c,c as l,e as s,f as n,a,w as u,g as t,h as i}from"./app.4892cde5.js";const k=t(`<h1 id="\u5FEB\u901F\u4F7F\u7528" tabindex="-1">\u5FEB\u901F\u4F7F\u7528 <a class="header-anchor vp-link" href="#\u5FEB\u901F\u4F7F\u7528" aria-hidden="true">#</a></h1><p>\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528</p><h2 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5 <a class="header-anchor vp-link" href="#\u7528\u6CD5" aria-hidden="true">#</a></h2><h3 id="\u5B8C\u6574\u5F15\u5165" tabindex="-1">\u5B8C\u6574\u5F15\u5165 <a class="header-anchor vp-link" href="#\u5B8C\u6574\u5F15\u5165" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F60\u5BF9\u6253\u5305\u540E\u7684\u6587\u4EF6\u5927\u5C0F\u4E0D\u662F\u5F88\u5728\u4E4E\uFF0C\u90A3\u4E48\u4F7F\u7528\u5B8C\u6574\u5BFC\u5165\u4F1A\u66F4\u65B9\u4FBF\u3002</p><div class="language-typescript"><pre><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> OmdDesignPlus <span class="token keyword">from</span> <span class="token string">&#39;omd-design-plus&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;omd-design-plus/dist/index.css&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>OmdDesignPlus<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="volar-\u652F\u6301" tabindex="-1">Volar \u652F\u6301 <a class="header-anchor vp-link" href="#volar-\u652F\u6301" aria-hidden="true">#</a></h4><p>\u5982\u679C\u60A8\u4F7F\u7528 Volar, \u8BF7\u628A <code>compilerOptions.types</code> \u52A0\u5230\u5168\u5C40\u7EC4\u4EF6\u7C7B\u578B <code>tsconfig.json</code>.</p><div class="language-json"><pre><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;omd-design-plus/global&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6309\u9700\u5BFC\u5165" tabindex="-1">\u6309\u9700\u5BFC\u5165 <a class="header-anchor vp-link" href="#\u6309\u9700\u5BFC\u5165" aria-hidden="true">#</a></h3><p>\u60A8\u9700\u8981\u4F7F\u7528\u989D\u5916\u7684\u63D2\u4EF6\u6765\u5BFC\u5165\u8981\u4F7F\u7528\u7684\u7EC4\u4EF6\u3002</p>`,11),r={id:"\u81EA\u52A8\u5BFC\u5165-\u8350",tabindex:"-1"},d=s("a",{class:"header-anchor vp-link",href:"#\u81EA\u52A8\u5BFC\u5165-\u8350","aria-hidden":"true"},"#",-1),g=t(`<p>\u5B89\u88C5 <code>unplugin-vue-components</code> \u548C <code>unplugin-auto-import</code>.</p><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> unplugin-vue-components unplugin-auto-import
</code></pre></div><p>Then add the code below into your <code>Vite</code> or <code>Webpack</code> config file.</p><h5 id="vite" tabindex="-1">Vite <a class="header-anchor vp-link" href="#vite" aria-hidden="true">#</a></h5><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OmdDesignPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">OmdDesignPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">OmdDesignPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h5 id="webpack" tabindex="-1">Webpack <a class="header-anchor vp-link" href="#webpack" aria-hidden="true">#</a></h5><div class="language-js"><pre><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> AutoImport <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-auto-import/webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Components <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-vue-components/webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> OmdDesignPlusResolver <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">OmdDesignPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">OmdDesignPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7),m={href:"https://rollupjs.org/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},f={href:"https://cli.vuejs.org/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/antfu/unplugin-vue-components#installation",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/antfu/unplugin-auto-import#install",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},_=s("h3",{id:"\u624B\u52A8\u5BFC\u5165",tabindex:"-1"},[n("\u624B\u52A8\u5BFC\u5165 "),s("a",{class:"header-anchor vp-link",href:"#\u624B\u52A8\u5BFC\u5165","aria-hidden":"true"},"#")],-1),y={href:"https://webpack.js.org/guides/tree-shaking/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/omd-design-plus/unplugin-omd-design-plus",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},b=t(`<blockquote><p>App.vue</p></blockquote><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span><span class="token punctuation">&gt;</span></span>I am ElButton<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;omd-design-plus&#39;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> OmdDesignPlus <span class="token keyword">from</span> <span class="token string">&#39;unplugin-omd-design-plus/vite&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">OmdDesignPlus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u5982\u679C\u60A8\u4F7F\u7528 <code>unplugin-element-plus</code> \u5E76\u4E14\u53EA\u4F7F\u7528\u7EC4\u4EF6 API\uFF0C\u60A8\u9700\u8981\u624B\u52A8\u5BFC\u5165\u6837\u5F0F\u3002</p><p>\u6817\u5B50:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;omd-design-plus/es/components/message/style/css&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;omd-design-plus&#39;</span>
</code></pre></div></div><h2 id="\u5168\u5C40\u914D\u7F6E" tabindex="-1">\u5168\u5C40\u914D\u7F6E <a class="header-anchor vp-link" href="#\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u5728\u5F15\u5165 OMD Design Plus \u65F6\uFF0C\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u5305\u542B size \u548C zIndex \u5C5E\u6027\u7684\u5168\u5C40\u914D\u7F6E\u5BF9\u8C61\u3002 size \u7528\u4E8E\u8BBE\u7F6E\u8868\u5355\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u5C3A\u5BF8\uFF0CzIndex \u7528\u4E8E\u8BBE\u7F6E\u5F39\u51FA\u7EC4\u4EF6\u7684\u5C42\u7EA7\uFF0CzIndex \u7684\u9ED8\u8BA4\u503C\u4E3A 2000\u3002</p><p>\u5B8C\u6574\u5F15\u5165:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> OmdDesignPlus <span class="token keyword">from</span> <span class="token string">&#39;omd-design-plus&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>OmdDesignPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span> size<span class="token operator">:</span> <span class="token string">&#39;small&#39;</span><span class="token punctuation">,</span> zIndex<span class="token operator">:</span> <span class="token number">3000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6309\u9700\u5F15\u5165:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-config-provider</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>size<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:z-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zIndex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;omd-design-plus&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ElConfigProvider<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
      <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">&#39;small&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,10),T='{"title":"\u5FEB\u901F\u4F7F\u7528","description":"","frontmatter":{"title":"\u5FEB\u901F\u4F7F\u7528","lang":"zh-CN"},"headers":[{"level":2,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5"},{"level":3,"title":"\u5B8C\u6574\u5F15\u5165","slug":"\u5B8C\u6574\u5F15\u5165"},{"level":3,"title":"\u6309\u9700\u5BFC\u5165","slug":"\u6309\u9700\u5BFC\u5165"},{"level":3,"title":"\u624B\u52A8\u5BFC\u5165","slug":"\u624B\u52A8\u5BFC\u5165"},{"level":2,"title":"\u5168\u5C40\u914D\u7F6E","slug":"\u5168\u5C40\u914D\u7F6E"}],"relativePath":"docs/guide/quickstart.md","lastUpdated":1671899089000}',x={},I=Object.assign(x,{__name:"quickstart",setup(A){return(P,C)=>{const o=e("el-tag"),p=i;return c(),l("div",null,[k,s("h4",r,[n("\u81EA\u52A8\u5BFC\u5165 "),a(o,{type:"primary",style:{"vertical-align":"middle"},effect:"dark",size:"small"},{default:u(()=>[n("\u8350")]),_:1}),n(),d]),g,s("p",null,[n("\u60F3\u4E86\u89E3\u66F4\u591A\u6253\u5305 ("),s("a",m,[n("Rollup"),a(p,{class:"link-icon"})]),n(", "),s("a",f,[n("Vue CLI"),a(p,{class:"link-icon"})]),n(") \u548C\u914D\u7F6E\u5DE5\u5177\uFF0C\u8BF7\u53C2\u8003 "),s("a",h,[n("unplugin-vue-components"),a(p,{class:"link-icon"})]),n(" \u548C "),s("a",v,[n("unplugin-auto-import"),a(p,{class:"link-icon"})]),n(".")]),_,s("p",null,[n("OMD Design Plus \u63D0\u4F9B\u4E86\u57FA\u4E8E ES Module \u5F00\u7BB1\u5373\u7528\u7684 "),s("a",y,[n("Tree Shaking"),a(p,{class:"link-icon"})]),n("\u3002")]),s("p",null,[n("\u4F46\u662F\u4F60\u9700\u8981\u5B89\u88C5 "),s("a",w,[n("unplugin-omd-design-plus"),a(p,{class:"link-icon"})]),n(" \u6765\u5BFC\u5165\u6837\u5F0F")]),b])}}});export{T as __pageData,I as default};
