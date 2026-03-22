---
title: Relationship Graph
layout: graph
permalink: /graph/
---

An interactive map of characters, places, and their connections in *Infinite Jest*. Based on the [original diagram (PDF)](/IJ_Diagram.pdf).

<div class="graph-legend" id="legend"></div>
<div class="graph-controls">
  <label>Filter:</label>
  <select id="groupFilter">
    <option value="all">All Groups</option>
    <option value="incandenza">Incandenza Family</option>
    <option value="eta-students">ETA Students</option>
    <option value="eta-staff">ETA Staff</option>
    <option value="ennet-residents">Ennet House Residents</option>
    <option value="ennet-staff">Ennet House Staff</option>
    <option value="afr">A.F.R. / Separatists</option>
    <option value="government">Government / O.U.S.</option>
    <option value="other">Other</option>
  </select>
  <label>Search:</label>
  <input type="text" id="searchInput" placeholder="Character name...">
</div>
<div class="graph-wrapper" id="graph">
  <div class="tooltip" id="tooltip" style="display:none"></div>
</div>
