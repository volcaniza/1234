import{l as c,s as d}from"./chunk-e4f7c63a.js";import{c as i}from"./chunk-a456ce36.js";c.extensionInitialize();var n;const a=parseInt(((n=navigator.userAgent.toLowerCase().match(/chrome\/(\d+)/))==null?void 0:n[1])||"0",10),m=Object.values(i).map(o=>o.url+"*");chrome.runtime.onInstalled.addListener(()=>{d("clientId",self.crypto.randomUUID())});chrome.action.onClicked.addListener(()=>{chrome.tabs.create({url:chrome.runtime.getURL("chatHub.html")})});function l(){const o=[],r=e=>{const t={action:{type:"modifyHeaders",requestHeaders:[{header:"Sec-Fetch-Dest",operation:"set",value:"document"},{header:"Sec-Fetch-Site",operation:"set",value:"same-origin"}],responseHeaders:[{header:"X-Frame-Options",operation:"remove"},{header:"Content-Security-Policy",operation:"remove"}]},condition:{initiatorDomains:["dpfkgaedamhcmkkgeiajeggihmfjhhlj","plaobjkecadfmaglmhdaolohmckjgnom",...e],resourceTypes:["sub_frame"]}};return a!==0&&a<101&&(t.condition.domains=t.condition.initiatorDomains,delete t.condition.initiatorDomains),t};return o.push(r(i.map(e=>new URL(e.url).hostname))),i.forEach(e=>{var t;(t=e.networkRules)==null||t.forEach(s=>{o.push(s)})}),o.map((e,t)=>({...e,id:t+1,priority:1}))}(async function(){const r=(await chrome.declarativeNetRequest.getDynamicRules()).map(e=>e.id);await chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds:r,addRules:l()})})();(async function(){const r=(await chrome.scripting.getRegisteredContentScripts()).map(e=>e.id);await chrome.scripting.unregisterContentScripts({ids:r}),await chrome.scripting.registerContentScripts([{id:"priority-script",matches:m,js:["assets/priority.js"],allFrames:!0,runAt:"document_start",world:"MAIN"}])})();
