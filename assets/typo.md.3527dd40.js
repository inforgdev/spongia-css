import{_ as s,c as a,o as n,a as l}from"./app.c43e0ef1.js";const d=JSON.parse('{"title":"Typography elements","description":"","frontmatter":{},"headers":[{"level":2,"title":"b, strong","slug":"b-strong","link":"#b-strong","children":[]},{"level":2,"title":"dfn","slug":"dfn","link":"#dfn","children":[]},{"level":2,"title":"small","slug":"small","link":"#small","children":[]},{"level":2,"title":"sup, sub","slug":"sup-sub","link":"#sup-sub","children":[]},{"level":2,"title":"abbr[title]","slug":"abbr-title","link":"#abbr-title","children":[]},{"level":2,"title":"Headings and Paragraph","slug":"headings-and-paragraph","link":"#headings-and-paragraph","children":[]}],"relativePath":"typo.md"}'),e={name:"typo.md"},p=l(`<h1 id="typography-elements" tabindex="-1">Typography elements <a class="header-anchor" href="#typography-elements" aria-hidden="true">#</a></h1><h2 id="b-strong" tabindex="-1"><em>b</em>, <em>strong</em> <a class="header-anchor" href="#b-strong" aria-hidden="true">#</a></h2><p>Set style to <code>bolder</code>.</p><ul><li><strong>Type:</strong> normalization</li><li><strong>Target:</strong> Firefox 4+, Safari 5, Chrome</li></ul><div class="language-scss"><button class="copy"></button><span class="lang">scss</span><pre><code><span class="line"><span style="color:#FFCB6B;">b</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">strong</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> bold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="dfn" tabindex="-1"><em>dfn</em> <a class="header-anchor" href="#dfn" aria-hidden="true">#</a></h2><p>Set style not present.</p><ul><li><strong>Type:</strong> normalization</li><li><strong>Target:</strong> Safari 5, Chrome</li></ul><div class="language-scss"><button class="copy"></button><span class="lang">scss</span><pre><code><span class="line"><span style="color:#FFCB6B;">dfn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">font-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> italic</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="small" tabindex="-1"><em>small</em> <a class="header-anchor" href="#small" aria-hidden="true">#</a></h2><p>Correct <em>font-size</em>.</p><ul><li><strong>Type:</strong> normalization</li><li><strong>Target:</strong> all</li></ul><div class="language-scss"><button class="copy"></button><span class="lang">scss</span><pre><code><span class="line"><span style="color:#FFCB6B;">small</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="sup-sub" tabindex="-1"><em>sup</em>, <em>sub</em> <a class="header-anchor" href="#sup-sub" aria-hidden="true">#</a></h2><p>Prevent <code>sub</code> and <code>sup</code> elements from affecting the line height.</p><ul><li><strong>Type:</strong> normalization</li><li><strong>Target:</strong> all</li></ul><div class="language-scss"><button class="copy"></button><span class="lang">scss</span><pre><code><span class="line"><span style="color:#FFCB6B;">sub</span><span style="color:#A6ACCD;">, </span><span style="color:#FFCB6B;">sup</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">75%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">vertical-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> baseline</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">sub</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-0.25em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">sup</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-0.5em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="abbr-title" tabindex="-1"><em>abbr[title]</em> <a class="header-anchor" href="#abbr-title" aria-hidden="true">#</a></h2><p>Reset the <em>text-decoration</em>.</p><ul><li><strong>Type:</strong> normalization</li><li><strong>Target:</strong> Chrome, Edge, Safari</li></ul><div class="language-scss"><button class="copy"></button><span class="lang">scss</span><pre><code><span class="line"><span style="color:#FFCB6B;">abbr</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">text-decoration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> underline dotted</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="headings-and-paragraph" tabindex="-1">Headings and Paragraph <a class="header-anchor" href="#headings-and-paragraph" aria-hidden="true">#</a></h2><p>Set <em>margin</em> of typography elements to <em>0</em> in all browsers.</p><ul><li><strong>Type:</strong> reset</li><li><strong>Target:</strong> all</li></ul><div class="language-scss"><button class="copy"></button><span class="lang">scss</span><pre><code><span class="line"><span style="color:#FFCB6B;">h1</span><span style="color:#A6ACCD;">, </span><span style="color:#FFCB6B;">h2</span><span style="color:#A6ACCD;">, </span><span style="color:#FFCB6B;">h3</span><span style="color:#A6ACCD;">, </span><span style="color:#FFCB6B;">h4</span><span style="color:#A6ACCD;">, </span><span style="color:#FFCB6B;">h5</span><span style="color:#A6ACCD;">, </span><span style="color:#FFCB6B;">h6</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,25),o=[p];function t(r,c,i,y,C,D){return n(),a("div",null,o)}const g=s(e,[["render",t]]);export{d as __pageData,g as default};
