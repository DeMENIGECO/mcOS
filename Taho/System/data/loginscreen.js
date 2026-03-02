lockscreen.innerHTML=`
<div class="loginbox">
<h1>mcOS Taho</h1>
<button onclick="unlock()">Login</button>
</div>
`;

function unlock(){
 lockscreen.remove();
 document.querySelectorAll(".hidden")
 .forEach(e=>e.classList.remove("hidden"));
}