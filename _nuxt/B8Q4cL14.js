import{d as s,b as c,o as l,$ as m}from"./D0ppSK5G.js";import{u}from"./Lucegmq-.js";const i=s({__name:"PmInstall",props:{inStack:{type:Boolean,default:!1},name:{},sync:{default:"_pm"},saveDev:{type:Boolean,default:!1},noSync:{type:Boolean}},setup(a){const t=`
::code-group{${a.inStack?"in-stack":""} ${a.noSync?"":`sync="${a.sync}"`}}
${u().packageManagers.value.map(n=>{const e=a.name?`${n.command}${n.install}${a.saveDev?n.saveDev:""}${a.name}`:`${n.command}${n.installEmpty}`;return`\`\`\`bash [${n.name}]
${e}
\`\`\`
`}).join(`
`)}
::
`;return(n,e)=>{const o=m;return l(),c(o,{value:t,class:"[&:not(:first-child)]:mt-5"})}}}),f=Object.assign(i,{__name:"PmInstall"});export{f as default};
