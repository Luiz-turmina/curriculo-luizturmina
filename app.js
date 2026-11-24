/* app.js — monta o currículo a partir de data.js e liga o movimento */
(function () {
  "use strict";
  var C = window.CV;
  var REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var HAS = !!window.gsap && !!window.ScrollTrigger && !REDUCE;
  if (HAS) gsap.registerPlugin(ScrollTrigger);

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* ===================== montagem ===================== */
  var partes = C.nome.split(" "), l1 = partes.slice(0, 2).join(" "), l2 = partes.slice(2).join(" ");
  $("#hero-img").src = C.hero;
  $("#role").textContent = "Piloto de automobilismo  ·  " + C.origem;
  $("#plate span").textContent = C.numero;
  $("#h-name").innerHTML = '<span class="l"><span>' + esc(l1) + '</span></span><span class="l"><span>' + esc(l2) + "</span></span>";

  var faixa = C.faixa.map(function (f) { return "<span>" + esc(f) + "</span>"; }).join("");
  $("#mq").innerHTML = faixa + faixa + faixa + faixa;

  $("#p-retrato").src = C.retrato;
  $("#p-capacete").src = C.capacete;
  $("#p-lede").textContent = C.perfil;
  $("#kpis").innerHTML = C.kpis.map(function (k) {
    return "<li><b" + (k.n != null ? ' data-n="' + k.n + '">0' : ">" + esc(k.v)) + "</b><strong>" + esc(k.t) + "</strong><span>" + esc(k.s) + "</span></li>";
  }).join("");
  $("#dados").innerHTML = C.dados.map(function (d) { return "<div><dt>" + esc(d[0]) + "</dt><dd>" + esc(d[1]) + "</dd></div>"; }).join("");
  var ct = [];
  if (C.contato.email) ct.push('<li><a href="mailto:' + esc(C.contato.email) + '">' + esc(C.contato.email) + "</a></li>");
  if (C.contato.telefone) ct.push('<li><a href="tel:+55' + esc(C.contato.telefone.replace(/\D/g, "")) + '">' + esc(C.contato.telefone) + "</a></li>");
  if (C.contato.instagram) ct.push('<li><a href="https://instagram.com/' + esc(C.contato.instagram.replace("@", "")) + '" target="_blank" rel="noopener">' + esc(C.contato.instagram) + "</a></li>");
  $("#contacts").innerHTML = ct.join("");
  $("#end-contacts").innerHTML = ct.join("");

  function ph(src, cap, alt) {
    return '<div class="ph" data-lb><img src="' + esc(src) + '" alt="' + esc(alt || cap || "") + '" loading="lazy" />' + (cap ? '<span class="cap">' + esc(cap) + "</span>" : "") + "</div>";
  }
  function ev(itens) {
    return '<ul class="ev">' + itens.map(function (i) {
      return '<li><span class="q">' + esc(i.q) + '</span><span class="t">' + esc(i.t) + (i.badge ? '<span class="badge">' + esc(i.badge) + "</span>" : "") + "</span></li>";
    }).join("") + "</ul>";
  }
  function head(c) { return '<header class="ch-head"><p class="kicker">' + esc(c.ano) + "</p><h2>" + esc(c.titulo) + "</h2><p>" + esc(c.sub) + "</p></header>"; }

  $("#capitulos").innerHTML = C.capitulos.map(function (c) {
    var open = '<section class="ch ' + c.layout + '" id="' + c.id + '" data-label="' + esc(c.label) + '">';
    var yr = c.layout === "band" ? "" : '<div class="ch-year" aria-hidden="true">' + esc(c.ano) + "</div>";
    if (c.layout === "band") {
      return open + '<div class="band-bg" aria-hidden="true"><img src="' + esc(c.fundo) + '" alt="" loading="lazy" /></div><div class="wrap ch-in">' + head(c) +
        '<ul class="stats">' + c.stats.map(function (s) { return '<li><b data-n="' + s.n + '">0</b><span>' + esc(s.t) + "</span></li>"; }).join("") + "</ul>" +
        (c.itens ? ev(c.itens) : "") +
        '<div class="stops">' + c.paradas.map(function (p) {
          return '<article class="stop">' + (p.badge ? '<span class="badge">' + esc(p.badge) + "</span>" : "") + ph(p.foto, "", p.local) +
            '<div class="stop-b"><h3>' + esc(p.local) + "</h3><small>" + esc(p.pais) + "</small><p>" + esc(p.t) + "</p></div></article>";
        }).join("") + "</div></div></section>";
    }
    var media;
    if (c.layout === "video") {
      media = '<div class="vid-wrap">' + ph(c.fotos[0].src, c.fotos[0].cap) +
        '<div class="vid"><video src="' + esc(c.video.src) + '" poster="' + esc(c.video.poster) + '" muted loop playsinline preload="metadata"></video></div>' +
        ph(c.fotos[1].src, c.fotos[1].cap) + "</div>";
    } else {
      media = '<div class="media">' + c.fotos.map(function (f) { return ph(f.src, f.cap); }).join("") + "</div>";
    }
    return open + yr + '<div class="wrap ch-in">' + head(c) + '<div class="ch-grid"><div class="ch-text">' + ev(c.itens) + '</div><div class="ch-media">' + media + "</div></div></div></section>";
  }).join("");

  $("#board").innerHTML = C.resultados.map(function (r) {
    var chip = r.pos === "win" ? "1º" : r.pos === "pod" ? "P" : "";
    return '<div class="row" role="row"><div class="d">' + esc(r.data) + '</div><div class="p"><b>' + esc(r.prova) + "</b><span>" + esc(r.pista) + '</span></div><div class="r">' + esc(r.res) + "</div>" +
      (chip ? '<div class="chip ' + r.pos + '" title="' + (r.pos === "win" ? "Vitória" : "Pódio") + '">' + chip + "</div>" : "<div></div>") + "</div>";
  }).join("");
  $("#circuits").innerHTML = C.circuitos.map(function (c, i) { return (i ? "<i></i>" : "") + "<span>" + esc(c) + "</span>"; }).join(" ");

  $("#mosaic").innerHTML = C.galeria.map(function (g) {
    return '<figure data-lb><img src="' + esc(g.src) + '" alt="' + esc(g.cap) + '" loading="lazy" /><figcaption>' + esc(g.cap) + "</figcaption></figure>";
  }).join("");

  $("#end27").textContent = C.numero;
  $("#end-meta").textContent = C.origem + "  ·  Currículo esportivo";
  $("#end-name").innerHTML = esc(l1) + "<em>" + esc(l2) + "</em>";

  /* navegação */
  var secs = $$("[data-label]");
  $("#nav").innerHTML = secs.map(function (s) { return '<a href="#' + s.id + '" data-t="' + s.id + '">' + esc(s.getAttribute("data-label")) + "</a>"; }).join("");
  var spy = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) $$("#nav a").forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-t") === e.target.id); }); });
  }, { rootMargin: "-45% 0px -50% 0px" });
  secs.forEach(function (s) { spy.observe(s); });

  var bar = $("#progress"), tk = false;
  function prog() { var h = document.documentElement.scrollHeight - innerHeight; bar.style.transform = "scaleX(" + (h > 0 ? scrollY / h : 0) + ")"; tk = false; }
  addEventListener("scroll", function () { if (!tk) { tk = true; requestAnimationFrame(prog); } }, { passive: true }); prog();

  $("#pdf").addEventListener("click", function () { window.print(); });

  /* vídeo só toca quando aparece */
  var vids = $$("video");
  var vio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { var p = e.target.play(); if (p && p.catch) p.catch(function () {}); } else e.target.pause(); }); }, { threshold: 0.35 });
  vids.forEach(function (v) { if (!REDUCE) vio.observe(v); });

  /* contadores */
  function count(el) {
    var to = +el.getAttribute("data-n"), t0 = null;
    if (REDUCE) { el.textContent = to; return; }
    function f(ts) { if (t0 === null) t0 = ts; var p = Math.min((ts - t0) / 1500, 1), e = 1 - Math.pow(1 - p, 4); el.textContent = Math.round(to * e); if (p < 1) requestAnimationFrame(f); else el.textContent = to; }
    requestAnimationFrame(f);
  }
  var cio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { count(e.target); cio.unobserve(e.target); } }); }, { threshold: 0.6 });
  $$("[data-n]").forEach(function (n) { cio.observe(n); });

  /* lightbox */
  var lb = $("#lb"), lbImg = $("#lb-img"), lbCap = $("#lb-cap"), items = $$("[data-lb]"), cur = 0;
  function show(i) {
    cur = (i + items.length) % items.length;
    var it = items[cur], im = $("img", it), cp = $(".cap, figcaption", it);
    lbImg.src = im.getAttribute("src"); lbImg.alt = im.alt; lbCap.textContent = cp ? cp.textContent : im.alt;
  }
  function open(i) { show(i); lb.hidden = false; document.body.style.overflow = "hidden"; if (HAS) gsap.from("#lb figure", { scale: 0.94, opacity: 0, duration: 0.45, ease: "power3.out" }); }
  function close() { lb.hidden = true; document.body.style.overflow = ""; }
  items.forEach(function (it, i) { it.addEventListener("click", function () { open(i); }); it.style.cursor = "zoom-in"; });
  $("#lb-x").addEventListener("click", close);
  $("#lb-p").addEventListener("click", function () { show(cur - 1); });
  $("#lb-n").addEventListener("click", function () { show(cur + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
  addEventListener("keydown", function (e) { if (lb.hidden) return; if (e.key === "Escape") close(); if (e.key === "ArrowLeft") show(cur - 1); if (e.key === "ArrowRight") show(cur + 1); });

  /* PDF: leva tudo ao estado final antes de imprimir */
  addEventListener("beforeprint", function () {
    if (window.ScrollTrigger) ScrollTrigger.getAll().forEach(function (t) { if (t.animation) t.animation.progress(1); });
    $$("[data-n]").forEach(function (n) { n.textContent = n.getAttribute("data-n"); });
  });

  if (!HAS) return;

  /* ===================== movimento ===================== */
  function splitWords(root) {
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (c) {
        if (c.nodeType === 3) {
          var frag = document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(" ")); return; }
            var w = document.createElement("span"); w.className = "w";
            var i = document.createElement("span"); i.textContent = p; w.appendChild(i); frag.appendChild(w);
          });
          node.replaceChild(frag, c);
        } else if (c.nodeType === 1) walk(c);
      });
    })(root);
  }
  $$(".ch-head h2, .h2").forEach(function (h) {
    splitWords(h);
    gsap.from($$(".w > span", h), { yPercent: 115, duration: 1.05, ease: "power4.out", stagger: 0.06, scrollTrigger: { trigger: h, start: "top 88%", once: true } });
  });

  /* capa */
  var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.fromTo(".hero-bg img", { scale: 1.2 }, { scale: 1.04, duration: 2.8, ease: "power2.out" }, 0)
    .from(".hero-top", { opacity: 0, y: -16, duration: 0.8 }, 0.3)
    .from(".speed i", { xPercent: 260, duration: 1.1, stagger: 0.08, ease: "power4.out" }, 0.2)
    .from(".plate", { scale: 0.5, rotate: -8, opacity: 0, duration: 0.9, ease: "back.out(2.2)" }, 0.5)
    .from(".name .l > span", { yPercent: 115, duration: 1.1, stagger: 0.14, ease: "power4.out" }, 0.65)
    .from(".role", { opacity: 0, y: 14, duration: 0.8 }, 1.3)
    .from(".cue", { opacity: 0, duration: 0.8 }, 1.8);
  gsap.to(".hero-bg img", { yPercent: 7, ease: "none", scrollTrigger: { trigger: "#capa", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".hero-main", { yPercent: -14, opacity: 0.2, ease: "none", scrollTrigger: { trigger: "#capa", start: "35% top", end: "bottom top", scrub: true } });

  /* faixa zebra: acelera com a rolagem */
  var track = $("#mq"), pos = 0, speed = 60, last = performance.now(), boost = 0, lastY = scrollY;
  gsap.ticker.add(function () {
    var now = performance.now(), dt = Math.min(0.05, (now - last) / 1000); last = now;
    var v = Math.abs(scrollY - lastY) / Math.max(dt, 0.001); lastY = scrollY;
    boost += (Math.min(v / 40, 14) - boost) * 0.12;
    pos -= dt * (speed + boost * 40);
    var w = track.scrollWidth / 4; if (-pos >= w) pos += w;
    track.style.transform = "translate3d(" + pos + "px,0,0)";
  });

  /* fotos: revelam com cortina + paralaxe */
  $$(".ph").forEach(function (p) {
    var img = $("img", p);
    gsap.from(p, { clipPath: "inset(0 0 100% 0)", duration: 1.25, ease: "power4.out", scrollTrigger: { trigger: p, start: "top 90%", once: true } });
    gsap.from(img, { scale: 1.3, duration: 1.6, ease: "power3.out", scrollTrigger: { trigger: p, start: "top 90%", once: true } });
    gsap.fromTo(img, { yPercent: -5 }, { yPercent: 5, ease: "none", scrollTrigger: { trigger: p, start: "top bottom", end: "bottom top", scrub: true } });
  });
  $$(".band-bg img").forEach(function (im) {
    gsap.fromTo(im, { yPercent: -6 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: im.parentNode, start: "top bottom", end: "bottom top", scrub: true } });
  });
  $$(".ch-year").forEach(function (y) {
    gsap.fromTo(y, { xPercent: 8 }, { xPercent: -10, ease: "none", scrollTrigger: { trigger: y.parentNode, start: "top bottom", end: "bottom top", scrub: true } });
  });

  /* textos e listas */
  $$(".ev").forEach(function (u) {
    gsap.from($$("li", u), { opacity: 0, x: -26, duration: 0.8, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: u, start: "top 85%", once: true } });
  });
  $$(".ch-head .kicker, .ch-head p:last-child, .lede, .kicker, .stats li, .kpis li, .dados div").forEach(function (n) {
    gsap.from(n, { opacity: 0, y: 26, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: n, start: "top 92%", once: true } });
  });
  gsap.from(".stop", { y: 60, opacity: 0, duration: 0.9, stagger: 0.14, ease: "power3.out", scrollTrigger: { trigger: ".stops", start: "top 82%", once: true } });
  gsap.from(".badge", { scale: 0, rotate: -12, duration: 0.6, ease: "back.out(3)", stagger: 0.1, scrollTrigger: { trigger: "#kart", start: "top 60%", once: true } });

  /* resultados */
  gsap.from(".row", { opacity: 0, x: -40, duration: 0.75, stagger: 0.09, ease: "power3.out", scrollTrigger: { trigger: "#board", start: "top 82%", once: true } });
  gsap.from(".chip", { scale: 0, rotate: -20, duration: 0.55, stagger: 0.09, delay: 0.3, ease: "back.out(3)", scrollTrigger: { trigger: "#board", start: "top 82%", once: true } });
  gsap.from(".circ-line span, .circ-line i", { opacity: 0, y: 24, duration: 0.6, stagger: 0.05, scrollTrigger: { trigger: ".circ-line", start: "top 90%", once: true } });

  /* galeria e rodapé */
  ScrollTrigger.batch(".mosaic figure", { start: "top 92%", once: true, onEnter: function (b) { gsap.from(b, { opacity: 0, y: 60, scale: 0.96, duration: 0.9, stagger: 0.1, ease: "power3.out", overwrite: true }); } });
  gsap.fromTo(".end-27", { yPercent: 20, xPercent: 6 }, { yPercent: -12, xPercent: -4, ease: "none", scrollTrigger: { trigger: "#fim", start: "top bottom", end: "bottom bottom", scrub: true } });
  gsap.from(".end-name", { opacity: 0, y: 50, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: "#fim", start: "top 70%", once: true } });
})();
