var g0vRegistry,x$;g0vRegistry={loadInto:function(e,t,r){var n;return null==t&&(t="zh"),null==r&&(r=function(e){return e}),n=function(e){return e+""+("en"===t?"":"_"+t)},this.loadAsJson(function(t){function o(e){return e}function i(e){return c.appendChild(e)}var l,u,a,s,c,d,p,m,g,h,f,v,b,y=[];for(t=t.filter(r),e.setAttribute("class",((e.getAttribute("class")||"")+" g0v-projects").trim()),l=0,u=t.length;u>l;++l)a=t[l],s=[null,null,null,null,null,null],c=s[0],d=s[1],p=s[2],m=s[3],g=s[4],h=s[5],c=document.createElement("div"),c.setAttribute("class","g0v-project"),d=document.createElement("div"),d.setAttribute("class","name"),d.appendChild(document.createTextNode(a[n("name")]||a.name)),p=document.createElement("div"),p.setAttribute("class","thumbnail"),a.thumbnail&&(p.style.backgroundImage="url("+a.thumbnail+")"),m=document.createElement("div"),m.setAttribute("class","description"),m.appendChild(document.createTextNode(a[n("description")]||a.description)),a.homepage&&(g=document.createElement("div"),g.setAttribute("class","project-url"),f=document.createElement("a"),f.setAttribute("href",a.homepage),f.appendChild(document.createTextNode(a.homepage)),g.appendChild(f)),a.repository&&(v=typeof a.repository==typeof{}?a.repository.url:a.repository,h=document.createElement("div"),h.setAttribute("class","repo-url"),b=document.createElement("a"),b.setAttribute("href",v),b.appendChild(document.createTextNode(v)),h.appendChild(b)),[d,p,m,g,h].filter(o).map(i),y.push(e.appendChild(c));return y})},loadAsJson:function(e){var t,r;return t=r=new XMLHttpRequest,t.onload=function(){var t,r;try{t=JSON.parse(this.responseText)}catch(n){r=n,console.log("parsing registry json failed: ",r.toString())}return e(t)},t.open("get","https://raw.githubusercontent.com/g0v-data/registry/gh-pages/registry.json"),t.send(),t}},x$=angular.module("g0vRegistry",[]),x$.directive("g0vprojects",function(){return{require:[],restrict:"A",scope:{filter:"=ngFilter",locale:"=ngLocale"},link:function(e,t){return g0vRegistry.loadInto(t[0],e.locale||"zh",e.filter||function(e){return e})}}});