(function () {
  var c = window.ISOBOX || {};
  document.querySelectorAll("[data-testflight]").forEach(function (a) {
    if (c.testflight) { a.href = c.testflight; } else { a.removeAttribute("href"); a.classList.add("soon"); a.textContent = "Beta link coming soon"; }
  });
  document.querySelectorAll("[data-email]").forEach(function (a) { a.href = "mailto:" + c.email; a.textContent = c.email; });
  document.querySelectorAll("[data-privacy]").forEach(function (a) { a.href = c.privacy; });
  var list = document.getElementById("tracks");
  if (list && c.tracks) {
    c.tracks.forEach(function (t) {
      var d = document.createElement("div"); d.className = "track";
      var h = document.createElement("h3"); h.textContent = t.title; d.appendChild(h);
      if (t.note) { var p = document.createElement("p"); p.textContent = t.note; d.appendChild(p); }
      var a = document.createElement("audio"); a.controls = true; a.preload = "none"; a.src = t.file; d.appendChild(a);
      var l = document.createElement("a"); l.href = t.file; l.setAttribute("download", ""); l.className = "btn small"; l.textContent = "Download"; d.appendChild(l);
      list.appendChild(d);
    });
  }
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
})();
