(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{2982:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/Indonesian-Region-API",function(){return s(3769)}])},7608:function(e,n,s){"use strict";var r=s(567),a=s(9797),l=s(8117),i=s.n(l),d=s(7040),t=s(3784),c=s(2551);n.Z=function(e){var n=e.children,s=(0,d.useRouter)().pathname,l=c.find((function(e){return e.slug===s}));return"undefined"===typeof l?(0,r.jsx)("div",{children:"404"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:l.title})}),(0,r.jsx)(t.JL,{}),(0,r.jsx)(t.pE,{}),(0,r.jsxs)("div",{className:"flex min-h-last-content flex-col justify-between gap-8 bg-slate-100 pb-8 dark:bg-slate-700 md:min-h-last-content-md md:py-8 md:px-16 lg:flex-row xl:px-32",children:[(0,r.jsxs)("article",{className:"prose w-full max-w-none overflow-x-auto border-b border-slate-300 bg-white p-4 prose-headings:my-2 prose-h1:text-3xl prose-p:my-0 prose-code:rounded prose-code:bg-slate-200 prose-code:p-1 prose-code:font-normal prose-pre:my-4 prose-img:rounded-lg dark:prose-invert dark:border-slate-600 dark:bg-slate-800 dark:text-inherit dark:prose-code:bg-slate-700 dark:prose-pre:bg-slate-700 md:rounded-lg md:border md:p-8",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("h1",{className:"flex-grow",children:(0,r.jsx)(i(),{href:l.slug,children:(0,r.jsx)("a",{className:"no-underline",children:l.title})})}),"undefined"!==typeof l.repository_url&&(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",className:"flex h-8 w-12 items-center justify-center rounded-md border-2 border-slate-300 text-sm text-slate-900 no-underline hover:bg-slate-200 focus:outline-none dark:border-slate-400 dark:text-slate-50 dark:hover:bg-slate-500 md:h-10 md:w-16 md:pb-1 md:text-base",href:l.repository_url,children:"< / >"})]}),(0,r.jsx)(t.$G,{variant:"box",data:l.tags}),(0,r.jsx)("span",{children:l.description}),(0,r.jsx)("hr",{className:"my-4 border-slate-300 dark:border-slate-400"}),n]}),(0,r.jsxs)("div",{className:"sticky h-auto w-full divide-y divide-slate-300 self-baseline border-y border-slate-300 bg-white dark:divide-slate-700 dark:border-slate-600 dark:bg-slate-800 md:rounded-lg md:border lg:top-28 lg:w-[32rem]",children:[(0,r.jsxs)("div",{className:"block cursor-default p-4 font-semibold",children:[(0,r.jsx)("span",{className:"text-xl text-slate-600 dark:text-slate-300",children:"Other Projects"}),(0,r.jsx)(i(),{href:"/projects",children:(0,r.jsx)("a",{className:"float-right leading-8 text-purple-500 hover:text-purple-600 dark:text-purple-300 dark:hover:text-purple-400",children:"See all"})})]}),c.map((function(e,n){if(e.slug!==s)return(0,r.jsx)(i(),{href:e.slug,children:(0,r.jsxs)("a",{className:"group block p-4 py-2 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900",children:[(0,r.jsx)("span",{className:"text-lg font-semibold text-slate-600 group-hover:text-slate-700 dark:text-slate-200 dark:group-hover:text-slate-400",children:e.title}),(0,r.jsx)(t.$G,{variant:"text",data:e.tags})]})},n)}))]})]}),(0,r.jsx)(t.$_,{})]})}},3769:function(e,n,s){"use strict";s.r(n);var r=s(567),a=s(7608),l=function(e){var n=e.children;return(0,r.jsx)(a.Z,{children:n})};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=function(){var n=Object.assign({h2:"h2",ol:"ol",li:"li",ul:"ul",pre:"pre",code:"code",p:"p",h3:"h3"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:"Getting Started"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Cloning this project.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Use HTTP:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"git clone https://github.com/IrvanAhmadP/GoApiWilayahIndonesia.git\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Use SSH:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"git clone git@github.com:IrvanAhmadP/GoApiWilayahIndonesia.git\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Import the database from ",(0,r.jsx)(n.code,{children:"db_example"})," folder."]}),"\n",(0,r.jsxs)(n.li,{children:["Setting username, password, database server in ",(0,r.jsx)(n.code,{children:"helper/database.go"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"Running REST API"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"go run main.go\n"})}),"\n",(0,r.jsx)(n.h2,{children:"Build REST API"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"go build main.go\n"})}),"\n",(0,r.jsx)(n.h2,{children:"API Specification"}),"\n",(0,r.jsx)(n.p,{children:"Sample request and response."}),"\n",(0,r.jsx)(n.h3,{children:"Province List"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /provinsi/"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "result": 200,\n  "status": "success",\n  "pesan": "",\n  "data": [\n    {\n      "id": 11,\n      "nama": "ACEH"\n    }\n  ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{children:"County List"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /kabupaten/?provinsi_id=<provinsi_id>"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "result": 200,\n  "status": "success",\n  "pesan": "",\n  "data": [\n    {\n      "id": 1101,\n      "provinsi_id": 11,\n      "nama": "KABUPATEN SIMEULUE"\n    }\n  ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{children:"District List"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /kecamatan/?kabupaten_id=<kabupaten_id>"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "result": 200,\n  "status": "success",\n  "pesan": "",\n  "data": [\n    {\n      "id": 1101010,\n      "kabupaten_id": 1101,\n      "nama": "TEUPAH SELATAN"\n    }\n  ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{children:"Village List"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /kelurahan/?kecamatan_id=<kecamatan_id>"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "result": 200,\n  "status": "success",\n  "pesan": "",\n  "data": [\n    {\n      "id": 1101010001,\n      "kecamatan_id": 1101010,\n      "nama": "LATIUNG"\n    }\n  ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{children:"Region Data By ID and Category"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /data-wilayah/?kategori=<kategori_wilayah>&id=<wilayah_id>"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "result": 200,\n  "status": "success",\n  "pesan": "",\n  "data": {\n    "id": 1101010001,\n    "kategori": "kelurahan",\n    "nama": "LATIUNG",\n    "rincian": {\n      "provinsi_id": 11,\n      "provinsi_nama": "ACEH",\n      "kabupaten_id": 1101,\n      "kabupaten_nama": "KABUPATEN SIMEULUE",\n      "kecamatan_id": 1101010,\n      "kecamatan_nama": "TEUPAH SELATAN",\n      "kelurahan_id": 1101010001,\n      "kelurahan_nama": "LATIUNG"\n    }\n  }\n}\n'})}),"\n"]}),"\n"]})]})};return l?(0,r.jsx)(l,Object.assign({},e,{children:(0,r.jsx)(n,{})})):n()}},7040:function(e,n,s){e.exports=s(5196)}},function(e){e.O(0,[972,23,774,888,179],(function(){return n=2982,e(e.s=n);var n}));var n=e.O();_N_E=n}]);