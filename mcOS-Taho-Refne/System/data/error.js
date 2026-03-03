function kernelPanic(msg){
 document.body.innerHTML=`
 <div style="
 position:fixed;
 inset:0;
 background:black;
 color:white;
 font-family:monospace;
 padding:40px;">
 <h1>💥 KERNEL PANIC</h1>
 <p>${msg}</p>
 <p>System halted</p>
 </div>`;
}

/* esempio trigger */
document.addEventListener("finderDeleted",()=>{
 kernelPanic("Finder process removed");
});