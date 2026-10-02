
document.querySelectorAll("[data-filter-items]").forEach(root=>{
 const search=root.querySelector("[data-search]"),sort=root.querySelector("[data-sort]"),box=root.querySelector(".items");
 if(!box)return;
 function apply(){
  const q=(search?.value||"").toLowerCase();
  const cards=[...box.querySelectorAll(".item")];
  cards.forEach(c=>{c.hidden=q&&!c.innerText.toLowerCase().includes(q)});
  const mode=sort?.value||"margin";
  cards.sort((a,b)=>{
   const av=parseFloat(a.dataset[mode]||0),bv=parseFloat(b.dataset[mode]||0);
   return mode==="distance"?av-bv:bv-av;
  }).forEach(c=>box.appendChild(c));
 }
 search?.addEventListener("input",apply);sort?.addEventListener("change",apply);apply();
});
