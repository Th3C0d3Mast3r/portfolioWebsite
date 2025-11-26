document.querySelectorAll('.card').forEach(card=>{
  card.setAttribute('tabindex','0');

  card.addEventListener('keydown',e=>{
    if(e.key === "Enter"){
      let link = card.querySelector('.see-more');
      if(link) window.open(link.href, "_blank", "noopener");
    }
  });
});
