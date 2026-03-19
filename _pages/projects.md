---
title: "Projects"
permalink: /projects/
---

## Projects

This page collects interactive constructions, dynamic visualizations, and exploratory computational models. Projects serve as mathematical laboratories — supporting intuition, testing structural conjectures, and providing visual companions to formal derivations in the [Mathematics](/mathematics/) section.

---

## 🧮 Triangle Centers

### Experimental Geometry: Kimberling Triangle Centers

Explore the fascinating world of triangle centers ($X_1$ - $X_n$) with interactive tools and dynamic visualizations.

- **Notebook (GitHub)**:  
  [![View Notebook](https://img.shields.io/badge/GitHub-Notebook-blue?logo=github)](https://github.com/MMathster/MMathster.github.io/blob/main/assets/experimental_center.ipynb)

- **Interactive Dashboard (Voila)**:  
  [![Launch Dashboard](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/MMathster/MMathster.github.io/HEAD?filepath=assets/experimental_center.ipynb&urlpath=voila/render/assets/experimental_center.ipynb)

<a href="https://www.geogebra.org/classic/nknes2ra" target="_blank" style="text-decoration: none;">
  <div style="
    width: 800px;
    max-width: 100%;
    height: 200px;
    border-radius: 12px;
    background: linear-gradient(135deg, #4CAF50, #2E7D32);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-family: Arial, sans-serif;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: transform 0.2s, box-shadow 0.2s;
  "
  onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 6px 16px rgba(0,0,0,0.3)'"
  onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.2)'"
  >
    🚀 Open Interactive GeoGebra Demo
  </div>
</a>

**Highlights:**
- Compute and visualize multiple triangle centers including centroid ($X_1$), incenter ($X_2$), circumcenter ($X_3$), and more.  
- Explore dynamic loci: see how changing vertex positions affects center locations.  
- Built using Jupyter Notebook, ipywidgets, and Voila for interactive exploration.  
- Fully reproducible — all code and dependencies are included in the repository.

### Kimberling Triangle Center Loci Compilation (In Progress)

Inspired by my previous dual-role work at AiCure as fulfillment associate and programmer analyst, I displayed interest to extract coordinates and symbolically analyze the locus for each triangle center $X_n$.

- **ETC Center Table Repository (Github)**:  
  [![Visit Repository](https://img.shields.io/badge/GitHub-View_Project-181717?style=for-the-badge&logo=github)](https://github.com/MMathster/ETC-Center-Table)

**Highlights:**
- Extract barycentric coordinates from Evansville's *Encyclopedia of Triangle Center* sites.
- Using the discoveries from the formal derivation, convert barycentric coordinates into parametric curves in the form of $(x(t),y(t))$, where $t = \tan\left(\frac{\theta}{p}\right)$ is the Weierstrass tangent substitution with $p$ denoted as the shallowest denominator angle.

*Formal derivation in progress: see [Mathematics](/mathematics/).*

---

*Interactive constructions and notebooks are added as analytical work progresses.  
Projects cross-reference formal derivations in the Mathematics section wherever applicable.*
