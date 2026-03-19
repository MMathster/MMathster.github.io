---
title: "Projects"
permalink: /projects/
---

## Projects

This page collects interactive constructions, dynamic visualizations, and exploratory computational models. Projects serve as mathematical laboratories — supporting intuition, testing structural conjectures, and providing visual companions to formal derivations in the [Mathematics](/mathematics/) section.

---

## 🧮 Triangle Centers

### Experimental Geometry: Kimberling Triangle Centers

The notebook covers the research article noted in [Mathematics](/mathematics/) section. Explore the fascinating world of triangle centers ($X_1$ - $X_n$) with interactive tools and dynamic visualizations.

- **Notebook (GitHub)**:  
  [![View Notebook](https://img.shields.io/badge/GitHub-Notebook-blue?logo=github)](https://github.com/MMathster/MMathster.github.io/blob/main/assets/experimental_center.ipynb)

- **Interactive Dashboard (Voila)**:  
  [![Launch Dashboard](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/MMathster/MMathster.github.io/HEAD?filepath=assets/experimental_center.ipynb&urlpath=voila/render/assets/experimental_center.ipynb)

### Loci of Triangle Center from $X_1$ (Incenter) to $X_6$ (Symmedian Point)

This interactive widget is a demo, showing loci of six triangle centers between $X_1$ and $X_6$.

<div align="center" style="margin-bottom: 30px;">
  <p style="font-size: 0.9rem; color: #666;">Prefer a full-screen experience?</p>
  <a href="https://www.geogebra.org/classic/nknes2ra" target="_blank" class="glow-banner">
    <img src="https://img.shields.io/badge/Open_Full_Screen-GeoGebra-6666FF?style=for-the-badge&logo=geogebra" alt="Full Screen Widget">
  </a>
</div>

<hr style="border: 0; border-top: 1px solid #eee; margin: 40px 0;">

<div class="geogebra-container">
  <iframe 
    src="https://www.geogebra.org/classic/nknes2ra?embed&showMenuBar=false&showAlgebraInput=false&showResetIcon=true&allowUpscale=true" 
    allowfullscreen>
  </iframe>
</div>

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
