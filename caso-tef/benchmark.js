/* Benchmark TEF: reconstrucción editorial con datos sintéticos.
   Las marcas identifican columnas de ejemplo; no se atribuyen hallazgos reales. */
(() => {
  "use strict";
  const old = document.querySelector(".figure-pair");
  if (!old) return;
  const banks = [
    ["Santander","Santander.png"],
    ["Banco de Chile","Banco de chile.jpg"],
    ["BancoEstado","banco estado.jpg"],
    ["BCI","BCI.jpg"],
    ["Itaú","itau.png"],
    ["Scotiabank","Scotiabank.jpg"]
  ];
  const stages = [
    ["Inicio","home"],["Destinatario","contact"],
    ["Datos","form"],["Comprobante","receipt"]
  ];
  // Los siguientes valores son ficticios: no describen productos de los bancos.
  const features = [
    ["Transferencia a contacto guardado","yes","yes","yes","yes","yes","yes"],
    ["Transferencia a destinatario nuevo","yes","yes","yes","yes","yes","yes"],
    ["Buscador de contactos","yes","part","yes","yes","part","yes"],
    ["Acceso al historial","yes","yes","part","yes","yes","yes"],
    ["Destinatarios favoritos","part","yes","no","part","yes","yes"],
    ["Transferencias programadas","part","yes","part","no","yes","no"],
    ["Compartir comprobante","yes","part","yes","yes","part","yes"]
  ];
  const labels = {yes:["✓","Sí"],part:["◐","Parcial"],no:["×","No"]};
  const logo = (b,size) => '<img src="./media/brands/'+b[1]+'" width="'+size+'" height="'+size+'" alt="" loading="lazy">';
  const screen = type => {
    const top = '<span class="screen-top"><i></i><i></i><i></i></span>';
    const heading = '<div class="skeleton-heading"></div>';
    if(type === "home") return top+heading+'<div class="skeleton-line"></div><div class="skeleton-list"><span></span><span></span><span></span></div>';
    if(type === "contact") return top+'<div class="skeleton-heading short"></div><div class="skeleton-search"></div><div class="skeleton-list"><span></span><span></span></div>';
    if(type === "form") return top+heading+'<div class="skeleton-amount"></div><div class="skeleton-fields"><span></span><span></span></div><div class="skeleton-cta"></div>';
    return top+'<div class="skeleton-success">✓</div><div class="skeleton-heading short"></div><div class="skeleton-lines"><i></i><i></i><i></i></div><div class="skeleton-cta"></div>';
  };
  const journeyRows = banks.map(bank =>
    '<li class="bench-journey-row"><div class="bench-bank">'+logo(bank,48)+'<strong>'+bank[0]+'</strong></div>'+
    '<ol class="bench-stage-list" aria-label="Secuencia ilustrativa de cuatro pantallas">'+
    stages.map(step =>
      '<li class="bench-stage"><div class="bench-phone screen-'+step[1]+'" aria-hidden="true">'+screen(step[1])+'</div><span class="bench-step-name">'+step[0]+'</span></li>'
    ).join("")+'</ol></li>'
  ).join("");
  const heads = banks.map(bank => '<th scope="col"><span class="bench-col-bank">'+logo(bank,35)+'<span>'+bank[0]+'</span></span></th>').join("");
  const rows = features.map(feature =>
    '<tr><th scope="row">'+feature[0]+'</th>'+feature.slice(1).map(code =>
      '<td><span class="bench-status is-'+code+'" aria-label="'+labels[code][1]+' (sintético)">'+labels[code][0]+'</span></td>'
    ).join("")+'</tr>'
  ).join("");
  old.outerHTML =
    '<div class="benchmark" id="benchmark-demostrativo" aria-label="Reconstrucción ilustrativa del benchmark">'+
    '<div class="benchmark-heading"><div><span class="eyebrow">Recurso reconstruido / Modelo de trabajo</span><h3>Un benchmark, dos perspectivas.</h3></div>'+
    '<p><strong>Datos sintéticos.</strong> Reconstrucción editorial para mostrar exclusivamente el formato de análisis. Pantallas y estados son ficticios; no reflejan resultados originales ni capacidades verificadas de estos bancos.</p></div>'+
    '<div class="benchmark-tabs" role="tablist" aria-label="Tipo de benchmark">'+
    '<button type="button" role="tab" id="bench-tab-journeys" aria-controls="bench-journeys" aria-selected="true" tabindex="0">01 &nbsp; Recorridos</button>'+
    '<button type="button" role="tab" id="bench-tab-features" aria-controls="bench-features" aria-selected="false" tabindex="-1">02 &nbsp; Funcionalidades</button></div>'+
    '<section id="bench-journeys" class="benchmark-panel" role="tabpanel" aria-labelledby="bench-tab-journeys" tabindex="0">'+
    '<div class="bench-panel-intro"><p>Secuencia ilustrativa de una transferencia por institución, para comparar la organización del recorrido.</p><small>Desplaza horizontalmente en móvil.</small></div>'+
    '<div class="bench-scroll"><ol class="bench-journey-list">'+journeyRows+'</ol></div>'+
    '<p class="bench-subcaption">Los teléfonos son placeholders editables en HTML y CSS. No reproducen aplicaciones reales.</p></section>'+
    '<section id="bench-features" class="benchmark-panel" role="tabpanel" aria-labelledby="bench-tab-features" tabindex="0" hidden>'+
    '<div class="bench-panel-intro"><p>Ejemplo de matriz de registro de funcionalidades entre instituciones.</p><small>Desplaza horizontalmente en móvil.</small></div>'+
    '<div class="bench-scroll"><table class="bench-matrix"><caption class="sr-only">Matriz demostrativa: todos los estados son sintéticos.</caption><thead><tr><th scope="col">Funcionalidad</th>'+heads+'</tr></thead><tbody>'+rows+'</tbody></table></div>'+
    '<div class="bench-legend"><span><b class="bench-status is-yes">✓</b>Sí</span><span><b class="bench-status is-part">◐</b>Parcial</span><span><b class="bench-status is-no">×</b>No</span><span>Todos los valores son ficticios</span></div></section>'+
    '<div class="bench-disclaimer"><span>DEMO / SIN DATOS REALES</span><p>Las marcas solo identifican columnas. Las secuencias, las categorías y los estados se crearon como ejemplo sintético del formato, no como hallazgos de un estudio competitivo.</p></div></div>';
  const tabs = Array.from(document.querySelectorAll('.benchmark-tabs [role="tab"]'));
  const choose = (selected, focus) => {
    for(const tab of tabs){
      const active=tab===selected;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex=active?0:-1;
      document.getElementById(tab.getAttribute("aria-controls")).hidden=!active;
    }
    if(focus) selected.focus();
  };
  tabs.forEach((tab,index)=>{
    tab.addEventListener("click",()=>choose(tab,false));
    tab.addEventListener("keydown",event=>{
      let next=null;
      if(event.key==="ArrowRight")next=tabs[(index+1)%tabs.length];
      if(event.key==="ArrowLeft")next=tabs[(index-1+tabs.length)%tabs.length];
      if(event.key==="Home")next=tabs[0];
      if(event.key==="End")next=tabs[tabs.length-1];
      if(next){event.preventDefault();choose(next,true);}
    });
  });
})();