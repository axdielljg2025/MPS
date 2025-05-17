import{d as t,b as s,o as m,$ as r}from"./CSu5iOuj.js";import{u}from"./BNsAJmlK.js";const l=t({__name:"PmX",props:{inStack:{type:Boolean,default:!1},command:{},sync:{default:"_pm"},noSync:{type:Boolean}},setup(n){const o=`
::code-group{${n.inStack?"in-stack":""} ${n.noSync?"":`sync="${n.sync}"`}}
${u().packageManagers.value.map(a=>{const e=`${a.x}${n.command}`;return`\`\`\`bash [${a.name}]
${e}
\`\`\`
`}).join(`
`)}
::
`;return(a,e)=>{const c=r;return m(),s(c,{value:o,class:"[&:not(:first-child)]:mt-5"})}}}),f=Object.assign(l,{__name:"PmX"});export{f as default};
