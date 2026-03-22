(function () {
  "use strict";

  // ---------------------------------------------------------------------------
  // Data
  // ---------------------------------------------------------------------------

  var groups = {
    incandenza:       { label: "Incandenza Family",  color: "#111" },
    "eta-students":   { label: "ETA Students",       color: "#444" },
    "eta-staff":      { label: "ETA Staff",          color: "#666" },
    "ennet-residents":{ label: "Ennet Residents",    color: "#888" },
    "ennet-staff":    { label: "Ennet Staff",        color: "#777" },
    afr:              { label: "A.F.R.",             color: "#333" },
    government:       { label: "Government",         color: "#555" },
    other:            { label: "Other",              color: "#aaa" },
    place:            { label: "Places",             color: "#bbb" }
  };

  var nodes = [
    // Incandenza Family
    { id: "hal",       label: "Hal Incandenza",                         group: "incandenza",       size: 18, link: "/characters/Hal/" },
    { id: "orin",      label: "Orin Incandenza",                        group: "incandenza",       size: 14, link: "/characters/Orin/" },
    { id: "mario",     label: "Mario Incandenza",                       group: "incandenza",       size: 12, link: "/characters/Mario/" },
    { id: "himself",   label: "James O. Incandenza (Himself)",          group: "incandenza",       size: 16, link: "/characters/Himself/" },
    { id: "avril",     label: "Avril Incandenza",                       group: "incandenza",       size: 14, link: "/characters/Avril/" },
    { id: "ct",        label: "Charles Tavis (C.T.)",                   group: "incandenza",       size: 12, link: "/characters/CT/" },

    // ETA Students
    { id: "pemulis",        label: "Michael Pemulis",               group: "eta-students", size: 14, link: "/characters/Pemulis/" },
    { id: "axford",         label: "Trevor Axford (Axhandle)",      group: "eta-students", size: 8,  link: "/characters/Axford/" },
    { id: "struck",         label: "Jim Struck",                    group: "eta-students", size: 7,  link: "/characters/Struck/" },
    { id: "ortho",          label: "Ortho Stice (The Darkness)",    group: "eta-students", size: 10, link: "/characters/Ortho/" },
    { id: "schacht",        label: "Ted Schacht",                   group: "eta-students", size: 8,  link: "/characters/Schacht/" },
    { id: "troeltsch",      label: "Jim Troeltsch",                 group: "eta-students", size: 7,  link: "/characters/Jim_Troeltsch/" },
    { id: "coyle",          label: "Kyle D. Coyle",                 group: "eta-students", size: 6,  link: "/characters/Coyle/" },
    { id: "lamont",         label: "LaMont Chu",                    group: "eta-students", size: 6 },
    { id: "idris",          label: "Idris Arslanian",               group: "eta-students", size: 5,  link: "/characters/Idris_Arslanian/" },
    { id: "kittenplan",     label: "Ann Kittenplan",                group: "eta-students", size: 5 },
    { id: "possalthwaite",  label: "Todd Possalthwaite",            group: "eta-students", size: 5 },
    { id: "wayne",          label: "John (N.R.) Wayne",             group: "eta-students", size: 10 },
    { id: "blott",          label: "Kent Blott",                    group: "eta-students", size: 4 },
    { id: "ingersoll",      label: "Evan Ingersoll",                group: "eta-students", size: 4 },
    { id: "lord",           label: "Otis P. Lord",                  group: "eta-students", size: 5 },
    { id: "peterson",       label: "Timmy Peterson (Sleepy T.P.)",  group: "eta-students", size: 4 },
    { id: "freer",          label: "Keith Freer (The Viking)",      group: "eta-students", size: 5 },

    // ETA Staff
    { id: "schtitt",        label: "Gerhardt Schtitt",        group: "eta-staff", size: 10 },
    { id: "delint",         label: "Aubrey deLint",           group: "eta-staff", size: 8 },
    { id: "lyle",           label: "Lyle",                    group: "eta-staff", size: 8,  link: "/characters/Lyle/" },
    { id: "thode",          label: "Mary Esther Thode",       group: "eta-staff", size: 6,  link: "/characters/Mary_Esther_Thode/" },
    { id: "rusk",           label: "Dolores Rusk",            group: "eta-staff", size: 6,  link: "/characters/Dolores_Rusk/" },
    { id: "lateralalice",   label: "Lateral Alice Moore",     group: "eta-staff", size: 5,  link: "/characters/Alice_Moore/" },
    { id: "thorpe",         label: "Corbett Thorpe",          group: "eta-staff", size: 5,  link: "/characters/Corbett_Thorpe/" },
    { id: "poutrincourt",   label: "Mlle. Poutrincourt",      group: "eta-staff", size: 5 },
    { id: "nwangi",         label: "Tony Nwangi",             group: "eta-staff", size: 4 },
    { id: "loach",          label: "Barry Loach",             group: "eta-staff", size: 5 },
    { id: "watson",         label: "Tex Watson",              group: "eta-staff", size: 4 },

    // Ennet House Residents
    { id: "gately",    label: "Don Gately",                                    group: "ennet-residents", size: 18, link: "/characters/Don_Gately/" },
    { id: "joelle",    label: "Joelle Van Dyne (PGOAT / Madame Psychosis)",    group: "ennet-residents", size: 14, link: "/characters/Joelle/" },
    { id: "lenz",      label: "Randy Lenz",                                    group: "ennet-residents", size: 10, link: "/characters/Randy_Lenz/" },
    { id: "green",     label: "Bruce Green",                                   group: "ennet-residents", size: 8,  link: "/characters/Bruce_Green/" },
    { id: "gompert",   label: "Kate Gompert",                                  group: "ennet-residents", size: 7,  link: "/characters/Kate_Gompert/" },
    { id: "day",       label: "Geoffrey Day",                                  group: "ennet-residents", size: 7,  link: "/characters/Geoffrey_Day/" },
    { id: "ewell",     label: "Tiny Ewell",                                    group: "ennet-residents", size: 7,  link: "/characters/Tiny_Ewell/" },
    { id: "erdedy",    label: "Ken Erdedy",                                    group: "ennet-residents", size: 7,  link: "/characters/Erdedy/" },
    { id: "poortony",  label: "Poor Tony Krause",                              group: "ennet-residents", size: 8,  link: "/characters/Poor_Tony/" },
    { id: "thrust",    label: "Calvin Thrust",                                 group: "ennet-residents", size: 6,  link: "/characters/Calvin_Thrust/" },
    { id: "genem",     label: "Gene M.",                                       group: "ennet-residents", size: 6,  link: "/characters/Gene_M/" },
    { id: "gunther",   label: "Nell Gunther",                                  group: "ennet-residents", size: 5,  link: "/characters/Nell_Gunther/" },
    { id: "clenette",  label: "Clenette Henderson",                            group: "ennet-residents", size: 4 },
    { id: "diehl",     label: "Gavin Diehl",                                   group: "ennet-residents", size: 4 },
    { id: "glynn",     label: "Doony Glynn",                                   group: "ennet-residents", size: 4 },
    { id: "hester",    label: "Hester Thrale",                                 group: "ennet-residents", size: 4 },
    { id: "tingley",   label: "Tingley",                                       group: "ennet-residents", size: 3 },
    { id: "yolanda",   label: "Yolanda Willis",                                group: "ennet-residents", size: 3 },

    // Ennet House Staff
    { id: "montesian", label: "Pat Montesian",   group: "ennet-staff", size: 8 },
    { id: "foltz",     label: "Johnette Foltz",  group: "ennet-staff", size: 6 },
    { id: "parrot",    label: "Annie Parrot",    group: "ennet-staff", size: 4 },

    // A.F.R. / Separatists
    { id: "marathe",   label: "Rémy Marathe",          group: "afr", size: 14, link: "/characters/Marathe/" },
    { id: "steeply",   label: "Hugh Steeply",          group: "afr", size: 12, link: "/characters/Steeply/" },
    { id: "fortier",   label: "M. Fortier",            group: "afr", size: 8 },
    { id: "duplessis", label: "Guillaume DuPlessis",    group: "afr", size: 6,  link: "/characters/DuPlessis/" },
    { id: "antitoi",   label: "Antitoi Brothers",       group: "afr", size: 7,  link: "/characters/Antitoi_Brothers/" },
    { id: "luria",     label: "Luria P.",               group: "afr", size: 4 },
    { id: "broullime", label: "Lucien Antitoi",         group: "afr", size: 4 },

    // Government / O.U.S.
    { id: "tine",     label: "Rod Tine Sr.",      group: "government", size: 7 },
    { id: "tinejr",   label: "R. Tine Jr.",       group: "government", size: 5 },
    { id: "gentle",   label: "Johnny Gentle",     group: "government", size: 8 },
    { id: "notkin",   label: "Molly Notkin",      group: "government", size: 6 },
    { id: "medical",  label: "Medical Attaché",   group: "government", size: 7 },

    // Other
    { id: "bain",       label: "Marlon Bain",        group: "other", size: 6, link: "/characters/Marlon_Bain/" },
    { id: "matty",      label: "Matty Pemulis",      group: "other", size: 6, link: "/characters/Matty_Pemulis/" },
    { id: "clipperton", label: "Eric Clipperton",    group: "other", size: 7, link: "/characters/Clipperton/" },
    { id: "francis",    label: "Ferocious Francis",  group: "other", size: 5 },
    { id: "kenkle",     label: "Kenkle",             group: "other", size: 3 },
    { id: "brandt",     label: "Brandt",             group: "other", size: 3 },

    // Places
    { id: "eta",        label: "Enfield Tennis Academy (E.T.A.)", group: "place", size: 22, link: "/places/ETA/" },
    { id: "ennethouse", label: "Ennet House",                     group: "place", size: 20, link: "/places/Ennet_House/" },
    { id: "concavity",  label: "Great Concavity",                 group: "place", size: 14, link: "/places/Great_Concavity/" },
    { id: "tucson",     label: "Tucson, AZ",                      group: "place", size: 8 }
  ];

  var links = [
    // Family
    { source: "himself", target: "avril",  type: "family" },
    { source: "himself", target: "hal",    type: "family" },
    { source: "himself", target: "orin",   type: "family" },
    { source: "himself", target: "mario",  type: "family" },
    { source: "avril",   target: "hal",    type: "family" },
    { source: "avril",   target: "orin",   type: "family" },
    { source: "avril",   target: "mario",  type: "family" },
    { source: "avril",   target: "ct",     type: "family" },
    { source: "ct",      target: "mario",  type: "family" },
    { source: "pemulis", target: "matty",  type: "family" },
    { source: "hal",     target: "orin",   type: "family" },
    { source: "hal",     target: "mario",  type: "family" },
    { source: "orin",    target: "mario",  type: "family" },

    // Romantic / intimate
    { source: "orin",    target: "joelle",  type: "romantic" },
    { source: "avril",   target: "wayne",   type: "romantic" },
    { source: "avril",   target: "ct",      type: "romantic" },
    { source: "gately",  target: "joelle",  type: "romantic" },
    { source: "marathe", target: "gompert", type: "romantic" },
    { source: "green",   target: "lenz",    type: "connection" },
    { source: "erdedy",  target: "gompert", type: "romantic" },

    // ETA affiliation
    { source: "hal",           target: "eta", type: "connection" },
    { source: "pemulis",       target: "eta", type: "connection" },
    { source: "axford",        target: "eta", type: "connection" },
    { source: "struck",        target: "eta", type: "connection" },
    { source: "ortho",         target: "eta", type: "connection" },
    { source: "schacht",       target: "eta", type: "connection" },
    { source: "troeltsch",     target: "eta", type: "connection" },
    { source: "coyle",         target: "eta", type: "connection" },
    { source: "lamont",        target: "eta", type: "connection" },
    { source: "idris",         target: "eta", type: "connection" },
    { source: "kittenplan",    target: "eta", type: "connection" },
    { source: "possalthwaite", target: "eta", type: "connection" },
    { source: "wayne",         target: "eta", type: "connection" },
    { source: "blott",         target: "eta", type: "connection" },
    { source: "ingersoll",     target: "eta", type: "connection" },
    { source: "lord",          target: "eta", type: "connection" },
    { source: "peterson",      target: "eta", type: "connection" },
    { source: "freer",         target: "eta", type: "connection" },
    { source: "schtitt",       target: "eta", type: "connection" },
    { source: "delint",        target: "eta", type: "connection" },
    { source: "lyle",          target: "eta", type: "connection" },
    { source: "thode",         target: "eta", type: "connection" },
    { source: "rusk",          target: "eta", type: "connection" },
    { source: "lateralalice",  target: "eta", type: "connection" },
    { source: "thorpe",        target: "eta", type: "connection" },
    { source: "poutrincourt",  target: "eta", type: "connection" },
    { source: "nwangi",        target: "eta", type: "connection" },
    { source: "loach",         target: "eta", type: "connection" },
    { source: "watson",        target: "eta", type: "connection" },
    { source: "ct",            target: "eta", type: "connection" },
    { source: "avril",         target: "eta", type: "connection" },
    { source: "himself",       target: "eta", type: "connection" },

    // Ennet House affiliation
    { source: "gately",    target: "ennethouse", type: "connection" },
    { source: "joelle",    target: "ennethouse", type: "connection" },
    { source: "lenz",      target: "ennethouse", type: "connection" },
    { source: "green",     target: "ennethouse", type: "connection" },
    { source: "gompert",   target: "ennethouse", type: "connection" },
    { source: "day",       target: "ennethouse", type: "connection" },
    { source: "ewell",     target: "ennethouse", type: "connection" },
    { source: "erdedy",    target: "ennethouse", type: "connection" },
    { source: "thrust",    target: "ennethouse", type: "connection" },
    { source: "genem",     target: "ennethouse", type: "connection" },
    { source: "gunther",   target: "ennethouse", type: "connection" },
    { source: "clenette",  target: "ennethouse", type: "connection" },
    { source: "diehl",     target: "ennethouse", type: "connection" },
    { source: "glynn",     target: "ennethouse", type: "connection" },
    { source: "hester",    target: "ennethouse", type: "connection" },
    { source: "tingley",   target: "ennethouse", type: "connection" },
    { source: "yolanda",   target: "ennethouse", type: "connection" },
    { source: "montesian", target: "ennethouse", type: "connection" },
    { source: "foltz",     target: "ennethouse", type: "connection" },
    { source: "parrot",    target: "ennethouse", type: "connection" },

    // Character-to-character
    { source: "hal",       target: "pemulis",  type: "connection" },
    { source: "hal",       target: "axford",   type: "connection" },
    { source: "hal",       target: "ortho",    type: "connection" },
    { source: "hal",       target: "lyle",     type: "connection" },
    { source: "hal",       target: "schtitt",  type: "connection" },
    { source: "hal",       target: "wayne",    type: "connection" },
    { source: "hal",       target: "delint",   type: "connection" },
    { source: "hal",       target: "rusk",     type: "connection" },
    { source: "pemulis",   target: "axford",   type: "connection" },
    { source: "pemulis",   target: "struck",   type: "connection" },
    { source: "pemulis",   target: "antitoi",  type: "connection" },
    { source: "troeltsch", target: "axford",   type: "connection" },
    { source: "troeltsch", target: "coyle",    type: "connection" },
    { source: "schacht",   target: "troeltsch",type: "connection" },
    { source: "ortho",     target: "hal",      type: "connection" },
    { source: "ortho",     target: "wayne",    type: "connection" },
    { source: "mario",     target: "lyle",     type: "connection" },
    { source: "mario",     target: "avril",    type: "connection" },
    { source: "lamont",    target: "mario",    type: "connection" },

    { source: "gately",  target: "ewell",     type: "connection" },
    { source: "gately",  target: "thrust",    type: "connection" },
    { source: "gately",  target: "day",       type: "connection" },
    { source: "gately",  target: "himself",   type: "connection" },
    { source: "gately",  target: "lenz",      type: "connection" },
    { source: "gately",  target: "green",     type: "connection" },
    { source: "gately",  target: "foltz",     type: "connection" },
    { source: "gately",  target: "montesian", type: "connection" },
    { source: "gately",  target: "hal",       type: "connection" },
    { source: "gately",  target: "wayne",     type: "connection" },

    { source: "joelle",  target: "himself",  type: "connection" },
    { source: "joelle",  target: "orin",     type: "romantic" },
    { source: "joelle",  target: "steeply",  type: "connection" },
    { source: "joelle",  target: "notkin",   type: "connection" },

    { source: "lenz",    target: "green",    type: "connection" },
    { source: "lenz",    target: "gunther",  type: "connection" },

    { source: "steeply", target: "marathe",  type: "adversarial" },
    { source: "steeply", target: "tine",     type: "connection" },
    { source: "steeply", target: "hal",      type: "connection" },
    { source: "steeply", target: "joelle",   type: "connection" },

    { source: "marathe",  target: "fortier",   type: "connection" },
    { source: "marathe",  target: "duplessis", type: "connection" },
    { source: "marathe",  target: "gompert",   type: "connection" },
    { source: "antitoi",  target: "duplessis", type: "connection" },
    { source: "antitoi",  target: "pemulis",   type: "connection" },
    { source: "antitoi",  target: "poortony",  type: "connection" },

    { source: "poortony", target: "gompert", type: "connection" },
    { source: "poortony", target: "green",   type: "connection" },

    { source: "clipperton", target: "himself", type: "connection" },
    { source: "clipperton", target: "mario",   type: "connection" },
    { source: "clipperton", target: "schtitt", type: "connection" },

    { source: "orin", target: "steeply", type: "connection" },
    { source: "orin", target: "bain",    type: "connection" },

    { source: "bain", target: "orin", type: "connection" },

    { source: "tinejr",  target: "notkin",    type: "connection" },
    { source: "tine",    target: "gentle",    type: "connection" },
    { source: "medical", target: "concavity", type: "connection" },

    { source: "himself", target: "concavity", type: "connection" },
    { source: "fortier", target: "concavity", type: "connection" },

    { source: "francis", target: "gately", type: "connection" }
  ];

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  function groupColor(g) {
    return groups[g] ? groups[g].color : "#ccc";
  }

  function nodeRadius(d) {
    return d.size * 1.1 + 2;
  }

  // Build adjacency index for fast neighbor lookup
  var adjacency = {};
  function buildAdjacency() {
    adjacency = {};
    links.forEach(function (l) {
      var sid = typeof l.source === "object" ? l.source.id : l.source;
      var tid = typeof l.target === "object" ? l.target.id : l.target;
      if (!adjacency[sid]) adjacency[sid] = {};
      if (!adjacency[tid]) adjacency[tid] = {};
      adjacency[sid][tid] = true;
      adjacency[tid][sid] = true;
    });
  }

  function isNeighbor(a, b) {
    return adjacency[a] && adjacency[a][b];
  }

  // ---------------------------------------------------------------------------
  // Legend
  // ---------------------------------------------------------------------------

  var legendEl = document.getElementById("legend");
  if (legendEl) {
    Object.keys(groups).forEach(function (key) {
      var g = groups[key];
      var span = document.createElement("span");
      var dot = document.createElement("span");
      dot.className = "legend-dot";
      dot.style.background = g.color;
      if (key === "place") {
        dot.style.borderRadius = "2px";
      }
      span.appendChild(dot);
      span.appendChild(document.createTextNode(g.label));
      legendEl.appendChild(span);
    });
  }

  // ---------------------------------------------------------------------------
  // SVG setup
  // ---------------------------------------------------------------------------

  var wrapper = document.getElementById("graph");
  if (!wrapper) return;

  var width = wrapper.clientWidth;
  var height = wrapper.clientHeight;

  var svg = d3.select("#graph")
    .append("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("preserveAspectRatio", "xMidYMid meet");

  var g = svg.append("g");

  // Zoom
  var zoom = d3.zoom()
    .scaleExtent([0.2, 5])
    .on("zoom", function (event) {
      g.attr("transform", event.transform);
    });
  svg.call(zoom);

  // Tooltip
  var tooltip = d3.select("#tooltip");

  // ---------------------------------------------------------------------------
  // Link styling helpers
  // ---------------------------------------------------------------------------

  function linkStroke(d) {
    switch (d.type) {
      case "family":      return "#555";
      case "romantic":    return "#888";
      case "adversarial": return "#888";
      default:            return "#ccc";
    }
  }

  function linkWidth(d) {
    switch (d.type) {
      case "family":   return 2;
      case "romantic": return 1.5;
      default:         return 0.7;
    }
  }

  function linkDasharray(d) {
    switch (d.type) {
      case "romantic":    return "6,3";
      case "adversarial": return "2,3";
      default:            return null;
    }
  }

  // ---------------------------------------------------------------------------
  // Simulation
  // ---------------------------------------------------------------------------

  // Deduplicate links — keep only the first occurrence of each source-target pair
  var seenLinks = {};
  var dedupedLinks = [];
  links.forEach(function (l) {
    var key1 = l.source + "|" + l.target;
    var key2 = l.target + "|" + l.source;
    if (!seenLinks[key1] && !seenLinks[key2]) {
      seenLinks[key1] = true;
      seenLinks[key2] = true;
      dedupedLinks.push(l);
    }
  });
  links = dedupedLinks;

  var simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(function (d) { return d.id; }).distance(function (d) {
      // Shorter distance for affiliation links to places
      if (d.target.group === "place" || d.source.group === "place") return 80;
      if (d.type === "family") return 50;
      return 100;
    }))
    .force("charge", d3.forceManyBody().strength(-200))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(function (d) { return nodeRadius(d) + 4; }))
    .force("x", d3.forceX(width / 2).strength(0.04))
    .force("y", d3.forceY(height / 2).strength(0.04));

  buildAdjacency();

  // ---------------------------------------------------------------------------
  // Draw links
  // ---------------------------------------------------------------------------

  var linkSelection = g.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke", linkStroke)
    .attr("stroke-width", linkWidth)
    .attr("stroke-dasharray", linkDasharray)
    .attr("stroke-opacity", 0.6);

  // ---------------------------------------------------------------------------
  // Draw nodes
  // ---------------------------------------------------------------------------

  var nodeSelection = g.append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(nodes)
    .join("g")
    .attr("cursor", function (d) { return d.link ? "pointer" : "default"; })
    .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

  // Places get rounded rects, characters get circles
  nodeSelection.each(function (d) {
    var el = d3.select(this);
    if (d.group === "place") {
      var s = nodeRadius(d) * 1.6;
      el.append("rect")
        .attr("width", s)
        .attr("height", s * 0.7)
        .attr("x", -s / 2)
        .attr("y", -s * 0.35)
        .attr("rx", 3)
        .attr("ry", 3)
        .attr("fill", groupColor(d.group))
        .attr("stroke", "#999")
        .attr("stroke-width", 1);
    } else {
      el.append("circle")
        .attr("r", nodeRadius)
        .attr("fill", groupColor(d.group))
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5);
    }
  });

  // Labels for larger nodes
  nodeSelection.filter(function (d) { return d.size >= 10; })
    .append("text")
    .text(function (d) {
      // Short label: first name or short version
      var parts = d.label.split(" ");
      if (d.group === "place") return d.label;
      return parts[0];
    })
    .attr("font-size", function (d) { return Math.max(8, d.size * 0.55) + "px"; })
    .attr("font-family", "'Helvetica Neue', Helvetica, Arial, sans-serif")
    .attr("fill", "#333")
    .attr("text-anchor", "middle")
    .attr("dy", function (d) { return nodeRadius(d) + 12; })
    .attr("pointer-events", "none");

  // ---------------------------------------------------------------------------
  // Interaction
  // ---------------------------------------------------------------------------

  nodeSelection
    .on("mouseover", function (event, d) {
      // Highlight this node and neighbors
      var id = d.id;
      nodeSelection.style("opacity", function (o) {
        return (o.id === id || isNeighbor(id, o.id)) ? 1 : 0.15;
      });
      linkSelection.style("opacity", function (l) {
        return (l.source.id === id || l.target.id === id) ? 1 : 0.05;
      });

      // Tooltip
      tooltip.style("display", "block")
        .html(
          '<div class="tt-name">' + d.label + '</div>' +
          '<div class="tt-group">' + (groups[d.group] ? groups[d.group].label : d.group) + '</div>'
        );
    })
    .on("mousemove", function (event) {
      var rect = wrapper.getBoundingClientRect();
      tooltip
        .style("left", (event.clientX - rect.left + 12) + "px")
        .style("top", (event.clientY - rect.top - 10) + "px");
    })
    .on("mouseout", function () {
      nodeSelection.style("opacity", 1);
      linkSelection.style("opacity", 0.6);
      tooltip.style("display", "none");
    })
    .on("click", function (event, d) {
      if (d.link) {
        window.location.href = d.link;
      }
    });

  // ---------------------------------------------------------------------------
  // Simulation tick
  // ---------------------------------------------------------------------------

  simulation.on("tick", function () {
    linkSelection
      .attr("x1", function (d) { return d.source.x; })
      .attr("y1", function (d) { return d.source.y; })
      .attr("x2", function (d) { return d.target.x; })
      .attr("y2", function (d) { return d.target.y; });

    nodeSelection.attr("transform", function (d) {
      return "translate(" + d.x + "," + d.y + ")";
    });
  });

  // ---------------------------------------------------------------------------
  // Drag
  // ---------------------------------------------------------------------------

  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  // ---------------------------------------------------------------------------
  // Controls: group filter
  // ---------------------------------------------------------------------------

  var groupFilter = document.getElementById("groupFilter");
  if (groupFilter) {
    groupFilter.addEventListener("change", function () {
      var val = this.value;
      if (val === "all") {
        nodeSelection.style("opacity", 1);
        linkSelection.style("opacity", 0.6);
      } else {
        nodeSelection.style("opacity", function (d) {
          return d.group === val ? 1 : 0.1;
        });
        linkSelection.style("opacity", function (l) {
          return (l.source.group === val || l.target.group === val) ? 0.6 : 0.03;
        });
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Controls: search
  // ---------------------------------------------------------------------------

  var searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      var q = this.value.toLowerCase().trim();
      if (!q) {
        nodeSelection.style("opacity", 1);
        linkSelection.style("opacity", 0.6);
        return;
      }
      var matchIds = {};
      nodes.forEach(function (n) {
        if (n.label.toLowerCase().indexOf(q) !== -1) {
          matchIds[n.id] = true;
        }
      });
      nodeSelection.style("opacity", function (d) {
        return matchIds[d.id] ? 1 : 0.1;
      });
      linkSelection.style("opacity", function (l) {
        return (matchIds[l.source.id] || matchIds[l.target.id]) ? 0.6 : 0.03;
      });
    });
  }

  // ---------------------------------------------------------------------------
  // Responsive resize
  // ---------------------------------------------------------------------------

  window.addEventListener("resize", function () {
    var w = wrapper.clientWidth;
    var h = wrapper.clientHeight;
    svg.attr("viewBox", [0, 0, w, h]);
    simulation.force("center", d3.forceCenter(w / 2, h / 2));
    simulation.force("x", d3.forceX(w / 2).strength(0.04));
    simulation.force("y", d3.forceY(h / 2).strength(0.04));
    simulation.alpha(0.3).restart();
  });

})();
