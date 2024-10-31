(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{38494:function(e,s,n){Promise.resolve().then(n.bind(n,52004))},52004:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return ChatBoxView}});var t=n(57437),l=n(31706),a=n(62572),r=n(17933),i=n(51809),o=n(55856),c=n(85290),d=n(10887),u=n(33316),m=n(67896),h=n(33116),x=n(2265),g=n(98809),p=n(43241),v=n(78583),b=n(21037);function MarkdownView(e){var s;let{data:n}=e;return(0,t.jsx)("div",{className:"   w-full chatbox prose dark:prose-invert text-primary rounded p-2 ",children:(0,t.jsx)(p.U,{remarkPlugins:[g.Z],components:{code(e){let{node:s,inline:n,className:l,children:a,...r}=e,i=/language-(\w+)/.exec(l||""),o=i?i[1]:"text";return!n&&i?(0,t.jsx)(b.Z,{...r,style:v.Z,language:o,className:"rounded",PreTag:"div",wrapLongLines:!0,children:String(a).replace(/\n$/,"")}):(0,t.jsx)("code",{...r,className:l,children:a})}},children:null==(s=(s=n).replace(/\n/g,"  \n"))?void 0:s.replace(/```markdown\s+([\s\S]*?)\s+```/g,(e,s)=>s)})})}function AgentMessagesView(e){let{messages:s}=e,n=(s||[]).map((e,s)=>{let n=s%2==0?"bg-primary":"bg-secondary";return(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"text-xs border rounded p-2 mb-2 ".concat(n),children:(0,t.jsx)(MarkdownView,{data:e.content})})},"messagerow"+s)});return(0,t.jsxs)("div",{className:" overflow-x-hidden overflow-y-auto h-full scroll",children:[" ",(0,t.jsxs)("div",{className:"mb-2 text-xs",children:["The agent workflow generated ",n.length," message",n.length>1?"s":""," "]}),(0,t.jsx)("div",{children:n})]})}var f=n(62601);function ChatBoxView(e){let{initMessages:s,viewHeight:n="100%"}=e,g=x.useRef(null),p=x.useRef(null),v=f.env.NEXT_PUBLIC_API_SERVER,[b,j]=x.useState(!1),[N,w]=x.useState(null),[k,y]=x.useState({status:!0,message:"All good"}),[C,Z]=x.useState([]);x.useEffect(()=>{Z(s)},[s]);let E=C.map((e,s)=>{var n,o,c,d;let h="user"===e.sender,x=!1;e.metadata&&(x=null!==e.metadata.code||(null===(o=e.metadata.images)||void 0===o?void 0:o.length)>0||(null===(c=e.metadata.files)||void 0===c?void 0:c.length)>0||(null===(d=e.metadata.scripts)||void 0===d?void 0:d.length)>0);let g=[];return h&&g.push({label:(0,t.jsx)("div",{onClick:()=>{console.log("retrying"),getCompletion(e.text)},children:(0,t.jsxs)("span",{className:"inline-block",children:[" ",(0,t.jsx)(l.Z,{role:"button",title:"Retry",className:"h-4 w-4 mr-1 inline-block"}),"Retry"]})}),key:"retrymessage"}),x&&g.push({label:(0,t.jsxs)("div",{onClick:()=>{},children:[(0,t.jsx)(a.Z,{title:"View Metadata",className:"h-4 w-4 mr-1 inline-block"}),"View Metadata"]}),key:"metadata"}),m.Z,(0,t.jsxs)("div",{className:"align-right ".concat(h?"text-right":" mb-2 border-b pb-2","  "),children:[" ",(0,t.jsxs)("div",{className:"  ".concat(h?"":" w-full "," inline-flex gap-2"),children:[(0,t.jsxs)("div",{className:"",children:[" ",!h&&(0,t.jsxs)("span",{className:"inline-block  text-accent  bg-primary pb-2 ml-1",children:[(0,t.jsx)(r.Z,{className:"inline-block h-6 "})," "]})]}),(0,t.jsxs)("div",{className:"inline-block ".concat(h?"":" w-full "," p-2 rounded  "),children:[" ",h&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"  ".concat(h?"bg-accent text-white  ":"bg-light"," p-2 rounded"),children:[e.text,(0,t.jsx)("div",{role:"button",onClick:()=>{console.log("retrying"),getCompletion(e.text)}})]}),(0,t.jsxs)("span",{role:"button",onClick:()=>{console.log("retrying"),getCompletion(e.text)},className:"mt-1 text-sm inline-block",children:[" ",(0,t.jsx)(l.Z,{title:"Retry",className:"h-4 w-4 mr-1 inline-block"}),"Retry"]})]}),!h&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(MarkdownView,{data:e.text}),(0,t.jsx)(u.Z,{size:"small",className:"text-xs mt-2",items:[{key:"1",label:(0,t.jsx)("div",{children:(0,t.jsxs)("span",{className:"pr-2",children:[" ","Agent Messages (".concat(null===(n=e.metadata)||void 0===n?void 0:n.messages.length,")")]})}),children:(0,t.jsx)("div",{children:(0,t.jsx)(AgentMessagesView,{messages:e.metadata.messages})})}],onChange:e=>{console.log("changed",e)}})]})]}),h&&(0,t.jsx)(i.Z,{className:"inline-block h-6 "})]})]},"message"+s)});x.useEffect(()=>{scrollChatBox()},[C]),x.useEffect(()=>{!1===b&&g.current&&g.current&&(null===k||k&&!1===k.status)&&(g.current.value="")},[b]),x.useEffect(()=>{},[]);let chatHistory=e=>{let s="";return e.forEach(e=>{s+="".concat(e.sender,": ").concat(e.text," \n")}),s},scrollChatBox=()=>{var e;null===(e=p.current)||void 0===e||e.scroll({top:p.current.scrollHeight,behavior:"smooth"})},getLastMessage=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;for(let n=e.length-1;n>=0;n--){let t=e[n].content;if(t.length>s)return t}return null},getCompletion=e=>{y(null);let s=Object.assign([],C),n=chatHistory(C);console.log("****history****",n),s.push({text:e,sender:"user"}),Z(s);let t={prompt:e,history:n};console.log("payload",t);let l="".concat(v,"/generate"),a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)};j(!0),fetch(l,a).then(e=>{j(!1),200===e.status?e.json().then(e=>{if(e&&e.status){console.log("******* response received ",e);let n=getLastMessage(e.data.messages),t={text:n,sender:"bot",metadata:e.data};w(t),s.push(t),Z(s=Object.assign([],s)),console.log(s)}else console.log("error",e),h.ZP.error(e.message)}):h.ZP.error("Connection error. Ensure server is up and running.")}).catch(e=>{j(!1),h.ZP.error("Connection error. Ensure server is up and running.")})};return(0,t.jsxs)("div",{style:{height:"calc(100% - 20px)"},className:"text-primary   overflow-auto bg-primary relative scroll   rounded flex-1 ",children:[(0,t.jsxs)("div",{style:{height:"calc(100% - 100px)"},ref:p,className:"flex overflow-auto  flex-col rounded  scroll pr-2   ",children:[(0,t.jsx)("div",{className:"flex-1  boder mt-4"}),(0,t.jsxs)("div",{className:"ml-2 ",children:[" ",E]}),(0,t.jsx)("div",{className:"ml-2 h-6   mb-4 mt-2   ",children:b&&(0,t.jsxs)("div",{className:"inline-flex gap-2",children:[(0,t.jsx)("span",{className:"  rounded-full bg-accent h-2 w-2  inline-block"}),(0,t.jsx)("span",{className:"animate-bounce rounded-full bg-accent h-3 w-3  inline-block"}),(0,t.jsx)("span",{className:" rounded-full bg-accent h-2 w-2  inline-block"})]})})]}),(0,t.jsxs)("div",{className:"mt-2 p-2   w-full",children:[(0,t.jsxs)("div",{className:"mt-2   rounded p-2 shadow-lg flex mb-1    ".concat(b?" opacity-50 pointer-events-none":""),children:[(0,t.jsx)("form",{className:"flex-1 ",onSubmit:e=>{e.preventDefault()},children:(0,t.jsx)("input",{id:"queryInput",name:"queryInput",onKeyDown:e=>{if("Enter"===e.key&&g.current&&!b){var s;getCompletion(null===(s=g.current)||void 0===s?void 0:s.value)}},ref:g,className:"w-full text-gray-600 rounded rounded-r-none border border-accent bg-white p-2   ropunded-sm"})}),(0,t.jsxs)("div",{role:"button",onClick:()=>{if(g.current&&!b){var e;getCompletion(null===(e=g.current)||void 0===e?void 0:e.value)}},className:"bg-accent   hover:brightness-75 transition duration-300 rounded pt-2 rounded-l-none px-5 ",children:[" ",!b&&(0,t.jsxs)("div",{className:"inline-block     ",children:[(0,t.jsx)(o.Z,{className:"h-6 text-white   inline-block"})," "]}),b&&(0,t.jsx)("div",{className:"inline-block   ",children:(0,t.jsx)(c.Z,{className:"relative -pb-2 text-white animate-spin  inline-flex rounded-full h-6 w-6"})})]})]})," ",k&&!k.status&&(0,t.jsxs)("div",{className:"p-2 border rounded mt-4 text-orange-500 text-sm",children:[" ",(0,t.jsx)(d.Z,{className:"h-5 text-orange-500 inline-block mr-2"})," ",k.message]})]})]})}}},function(e){e.O(0,[302,689,971,472,744],function(){return e(e.s=38494)}),_N_E=e.O()}]);