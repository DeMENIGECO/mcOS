let z=1;
let openApps={};
let desktops=[[]];
let currentDesktop=0;

const apps={
 finder:"📁",
 safari:"🌐",
 shortcuts:"⚡",
 system:"🖥️",
 notes:"📝",
 music:"🎵",
 videos:"🎬",
 settings:"⚙️",
 terminal:"⬛",
 photos:"🖼️"
};

function drawDock(){
 const dock=document.getElementById("dock");
 dock.innerHTML="";
 for(let a in apps){
  let d=document.createElement("div");
  d.className="dockicon";
  d.innerHTML=apps[a];
  d.onclick=()=>openApp(a+".html");
  if(openApps[a]){
   let dot=document.createElement("div");
   dot.className="dot";
   d.appendChild(dot);
  }
  dock.appendChild(d);
 }
}
drawDock();

function injectStyle(iframe){
 const style=document.createElement("style");
 style.textContent=`
 body { font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background:transparent; color:white; margin:0; padding:10px; }
 input,textarea,button{font-family:-apple-system;padding:10px 15px;border-radius:12px;border:none;outline:none;margin-top:10px;background:rgba(255,255,255,0.15);color:white;box-shadow:0 5px 15px rgba(0,0,0,0.3);transition:0.2s;}
 input:focus,textarea:focus,button:hover{background:rgba(255,255,255,0.25);box-shadow:0 8px 20px rgba(0,0,0,0.4);}
 table{width:100%;border-collapse:collapse;margin-top:10px;}
 td,th{padding:8px;border-bottom:1px solid rgba(255,255,255,0.2);}
 th{font-weight:bold;text-align:left;}
 ::-webkit-scrollbar{width:10px;}
 ::-webkit-scrollbar-track{background:rgba(255,255,255,0.05);border-radius:10px;}
 ::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.3);border-radius:10px;}
 ::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,0.5);}
 `;
 iframe.contentDocument.head.appendChild(style);
}

function openApp(file){
 let name=file.replace(".html","");
 if(openApps[name]){
   openApps[name].style.display="block";
   focus(openApps[name],name);
   return;
 }

 let win=document.createElement("div");
 win.className="window";
 win.style.top="120px";
 win.style.left="120px";
 win.style.zIndex=z++;

 win.innerHTML=`
 <div class="titlebar">
  <div class="btn red"></div>
  <div class="btn yellow"></div>
  <div class="btn green"></div>
  <span style="margin-left:10px">${name}</span>
 </div>
 <iframe src="System/Apps/${file}"></iframe>
 `;

 document.body.appendChild(win);
 desktops[currentDesktop].push(win);
 openApps[name]=win;

 win.querySelector(".red").onclick=()=>{
   win.remove();
   delete openApps[name];
   drawDock();
 };
 win.querySelector(".yellow").onclick=()=>win.style.display="none";
 win.querySelector(".green").onclick=()=>{
   win.style.width="100vw";
   win.style.height="calc(100vh - 28px)";
   win.style.top="28px";
   win.style.left="0";
 };
 win.onmousedown=()=>focus(win,name);

 const iframe=win.querySelector("iframe");
 iframe.onload=()=>injectStyle(iframe);

 drag(win);
 focus(win,name);
 drawDock();
}

function focus(win,name){
 document.querySelectorAll(".window").forEach(w=>w.style.zIndex=1);
 win.style.zIndex=z++;
 const appName=document.getElementById("appName");
 if(appName) appName.textContent=name;
}

function drag(el){
 let bar=el.querySelector(".titlebar");
 let x=0,y=0;
 bar.onmousedown=e=>{
  x=e.clientX;
  y=e.clientY;
  document.onmousemove=e2=>{
   el.style.top=(el.offsetTop+(e2.clientY-y))+"px";
   el.style.left=(el.offsetLeft+(e2.clientX-x))+"px";
   x=e2.clientX;
   y=e2.clientY;
  };
  document.onmouseup=()=>document.onmousemove=null;
 }
}

document.addEventListener("keydown",e=>{
 if(e.ctrlKey && e.key==="ArrowRight") switchDesktop(1);
 if(e.ctrlKey && e.key==="ArrowLeft") switchDesktop(-1);
});

function switchDesktop(dir){
 desktops[currentDesktop].forEach(w=>w.style.display="none");
 currentDesktop+=dir;
 if(!desktops[currentDesktop]) desktops[currentDesktop]=[];
 desktops[currentDesktop].forEach(w=>w.style.display="block");
}