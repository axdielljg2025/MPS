import{d as o,b as s,o as m,$ as u}from"./DFh_hCGa.js";import{u as r}from"./CcO-7Lmg.js";const i=o({__name:"PmRun",props:{inStack:{type:Boolean,default:!1},script:{},sync:{default:"_pm"},noSync:{type:Boolean}},setup(n){const t=`
::code-group{${n.inStack?"in-stack":""} ${n.noSync?"":`sync="${n.sync}"`}}
${r().packageManagers.value.map(e=>{const a=`${e.command}${e.run}${n.script}`;return`\`\`\`bash [${e.name}]
${a}
\`\`\`
`}).join(`
`)}
::
`;return(e,a)=>{const c=u;return m(),s(c,{value:t,class:"[&:not(:first-child)]:mt-5"})}}}),p=Object.assign(i,{__name:"PmRun"});export{p as default};
