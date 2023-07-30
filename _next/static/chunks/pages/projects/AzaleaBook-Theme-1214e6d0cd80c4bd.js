(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{1675:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/AzaleaBook-Theme",function(){return s(9099)}])},4101:function(e,r,s){"use strict";var t=s(5893),a=s(9008),n=s.n(a),l=s(1664),d=s.n(l),o=s(1163),i=s(9690),c=s(2551);r.Z=function(e){var r=e.children,s=(0,o.useRouter)().pathname,a=c.find((function(e){return e.slug===s}));return"undefined"===typeof a?(0,t.jsx)("div",{children:"404"}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n(),{children:[(0,t.jsx)("title",{children:a.title}),(0,t.jsx)("meta",{name:"description",content:a.description})]}),(0,t.jsx)(i.JL,{}),(0,t.jsx)(i.pE,{}),(0,t.jsx)("main",{className:"bg-slate-100 dark:bg-slate-700",children:(0,t.jsxs)(i.W2,{paddingX:"px-0",className:"flex min-h-last-content flex-col md:min-h-last-content-md md:py-8 lg:flex-row",children:[(0,t.jsxs)("article",{className:"prose w-full max-w-none overflow-x-auto border-b border-slate-300 bg-white p-4 prose-headings:my-2 prose-h1:text-3xl prose-p:my-0 prose-code:rounded prose-code:bg-slate-200 prose-code:p-1 prose-code:font-normal prose-pre:my-4 prose-img:rounded-lg dark:prose-invert dark:border-slate-600 dark:bg-slate-800 dark:text-inherit dark:prose-code:bg-slate-700 dark:prose-pre:bg-slate-700 md:rounded-lg md:border md:p-8",children:[(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("h1",{className:"flex-grow",children:(0,t.jsx)(d(),{href:a.slug,children:(0,t.jsx)("a",{className:"no-underline",children:a.title})})}),"undefined"!==typeof a.repository_url&&(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",className:"flex h-8 w-14 items-center justify-center rounded-md border-2 border-slate-300 text-sm text-slate-900 no-underline hover:bg-slate-200 focus:outline-none dark:border-slate-400 dark:text-slate-50 dark:hover:bg-slate-500 md:h-10 md:w-16 md:pb-1 md:text-base",href:a.repository_url,children:"< / >"})]}),(0,t.jsx)(i.$G,{variant:"box",data:a.tags}),(0,t.jsx)("span",{children:a.description}),(0,t.jsx)("hr",{className:"my-4 border-slate-300 dark:border-slate-400"}),r]}),(0,t.jsx)("div",{className:"my-4 mx-4"}),(0,t.jsxs)("aside",{className:"sticky h-auto w-full divide-y divide-slate-300 self-baseline border-y border-slate-300 bg-white dark:divide-slate-700 dark:border-slate-600 dark:bg-slate-800 md:rounded-lg md:border lg:top-28 lg:w-[32rem]",children:[(0,t.jsxs)("div",{className:"block cursor-default p-4 font-semibold",children:[(0,t.jsx)("span",{className:"text-xl text-slate-600 dark:text-slate-300",children:"Other Projects"}),(0,t.jsx)(d(),{href:"/projects",children:(0,t.jsx)("a",{className:"float-right leading-8 text-purple-500 hover:text-purple-600 dark:text-purple-300 dark:hover:text-purple-400",children:"See all"})})]}),c.map((function(e,r){if(e.slug!==s)return(0,t.jsx)(d(),{href:e.slug,children:(0,t.jsxs)("a",{className:"group block p-4 py-2 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900",children:[(0,t.jsx)("span",{className:"text-lg font-semibold text-slate-600 group-hover:text-slate-700 dark:text-slate-200 dark:group-hover:text-slate-400",children:e.title}),(0,t.jsx)(i.$G,{variant:"text",data:e.tags})]})},r)}))]})]})}),(0,t.jsx)(i.$_,{})]})}},9099:function(e,r,s){"use strict";s.r(r);var t=s(5893),a=s(4101),n=function(e){var r=e.children;return(0,t.jsx)(a.Z,{children:r})};r.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=function(){var r=Object.assign({h2:"h2",p:"p",img:"img",ul:"ul",li:"li",code:"code",pre:"pre"},e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{children:"Preview"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.img,{src:"https://raw.githubusercontent.com/IrvanAhmadP/azaleabook-theme/main/preview/AzaleaBook-Theme-1.webp",alt:"Azaleabook Light"}),"\n",(0,t.jsx)(r.img,{src:"https://raw.githubusercontent.com/IrvanAhmadP/azaleabook-theme/main/preview/AzaleaBook-Theme-2.webp",alt:"Azaleabook Dark"})]}),"\n",(0,t.jsx)(r.h2,{children:"Usage"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Create a book with the command ",(0,t.jsx)(r.code,{children:"mdbook init"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-vim",children:"mdbook init <directory>\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Add azaleabook theme"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-vim",children:"cd <directory>\ngit submodule add https://github.com/IrvanAhmadP/azaleabook-theme.git azaleabook-theme\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Config ",(0,t.jsx)(r.code,{children:"book.toml"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-toml",children:'[output.html]\ntheme = "azaleabook-theme"\ndefault-theme = "azaleabook-light"\npreferred-dark-theme = "azaleabook-dark"\n'})}),"\n"]}),"\n"]})]})};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,{})})):r()}},1163:function(e,r,s){e.exports=s(880)}},function(e){e.O(0,[863,875,774,888,179],(function(){return r=1675,e(e.s=r);var r}));var r=e.O();_N_E=r}]);