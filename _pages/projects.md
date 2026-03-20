---
title: "Projects"
permalink: /projects/
---

## Projects

This page collects interactive constructions, dynamic visualizations, and exploratory computational models. Projects serve as mathematical laboratories — supporting intuition, testing structural conjectures, and providing visual companions to formal derivations in the [Mathematics](/mathematics/) section.

---

## 🧮 Triangle Centers

### Loci of Triangle Centers in Thales Configuration (In Progress)

Inspired by the former STEM community in the year 2021, I worked on discovering loci of triangle centers curated from Clark Kimberling's *Encyclopedia of Triangle Centers*. For this section, suppose that a unit circle inscribes a triangle $\triangle ABC$, where points $A = (1,0)$ and $B = (-1,0)$ are fixed. As point $C$ varies, where $\theta \in [0,2\pi)$ the triangle center $X_n$ generates a locus. By considering $C = \left(\cos\theta, \sin\theta\right)$, where $\theta \in [0, \pi)$, the side lengths are

- $a = \left|\overline{BC}\right| = 2\cos\frac{\theta}{2}$
- $b = \left|\overline{AC}\right| = 2\sin\frac{\theta}{2}$
- $c = \left|\overline{AB}\right| = 2,$

and the angles (in radians) are

- $\alpha = \angle A = \frac{1}{2}\left(\pi - \theta\right)$
- $\beta = \angle B = \frac{1}{2}\theta$
- $\gamma = \angle C = \frac{\pi}{2}$

In classical geometry, we learn that the altitudes of a triangle concur at a single point. But as we move beyond the basics, a mystery unfolds: there are over 60,000 documented triangle centers, each with its own unique "personality" and algebraic signature.

How do these points move? What curves do they trace as the right triangle $\triangle ABC$ itself deforms? This collection of geometry projects isn't just a collection of proofs—it is a computational laboratory designed to uncover the hidden logic of the plane.

#### Experimental Geometry: Kimberling Triangle Centers

The notebook covers the research article noted in [Mathematics](/mathematics/) section. Explore the fascinating world of triangle centers ($X_1$ - $X_n$) with interactive tools and dynamic visualizations.

- **Notebook (GitHub)**:  
  [![View Notebook](https://img.shields.io/badge/GitHub-Notebook-blue?logo=github)](https://github.com/MMathster/MMathster.github.io/blob/main/assets/experimental_center.ipynb)

- **Interactive Dashboard (Voila)**:  
  [![Launch Dashboard](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/MMathster/MMathster.github.io/HEAD?filepath=assets/experimental_center.ipynb&urlpath=voila/render/assets/experimental_center.ipynb)

This interactive Geogebra widget is a demo that supports the notebook widget for combined loci of triangle centers between $X_1$ and $X_6$, where:

- $X_1$ is the incenter $I$;
- $X_2$ is the centroid G$;
- $X_3$ is the circumcenter;
- $X_4$ is the orthocenter $H$;
- $X_5$ is the nine-point center $N$;
- $X_6$ is the symmedian point $K$;

In the Thales configuration, where a unit circle $x^2 + y^2 = 1$ inscribes a right triangle $\triangle ABC$ with fixed coordinates $A = (1,0)$ and $B = (-1,0)$, each of these triangle centers 

<div align="center">
  <a href="https://www.geogebra.org/classic/nknes2ra" target="_blank" class="glow-new-version">
     <img src="https://img.shields.io/badge/Open_Full_Screen-Geogebra-FFD700?style=for-the-badge&logo=geogebra&logoColor=black">
  </a>
</div>

<div class="geogebra-wrapper" style="margin-top: 15px;">
  <iframe 
    src="https://www.geogebra.org/classic/nknes2ra?embed&showMenuBar=false&showToolBar=false&showAlgebraInput=false&allowUpscale=true" 
    allowfullscreen>
  </iframe>
</div>

<div align="center" style="margin: 30px 0;">
  <a href="https://www.geogebra.org/classic/nknes2ra" target="_blank" class="glow-new-version">
    <div style="display: flex; align-items: center; gap: 10px; padding: 5px 15px;">
      <img src="https://img.shields.io/badge/Open_Full_Screen-Geogebra-6666FF?style=for-the-badge&logo=rocket&logoColor=black" alt="New Version Badge">
      <span style="font-family: sans-serif; font-weight: bold; color: #FFD700; text-transform: uppercase; letter-spacing: 1px;">
        Explore Interactive v2
      </span>
    </div>
  </a>
</div>

**Highlights:**
- Compute and visualize multiple triangle centers including centroid ($X_1$), incenter ($X_2$), circumcenter ($X_3$), and more.  
- Explore dynamic loci: see how changing vertex positions affects center locations.  
- Built using Jupyter Notebook, ipywidgets, and Voila for interactive exploration.  
- Fully reproducible — all code and dependencies are included in the repository.

#### Bow-tie Shaped Locus of the Feuerbach Point $X_{11}$

I would like to share a triangle center of interest, the Feuerbach point $X_{11}$. The barycentric coordinates of the Feuerbach point $X_{11}$ is

$$
1 - \cos\left(\beta - \gamma\right) : 1 - \cos\left(\gamma - \alpha\right) : 1 - \cos\left(\alpha - \eta\right)
$$

Unlike some triangle centers whose loci are ellipses or circles, the locus of $X_{11}$ is bow-tied shape whose representation of the curve in the upper half plane can be presented as

$$
(x^2 + y^2)^3 - (1 + 2y)(x^2 + y^2)^2 + 2y(x^2 + y^2) + y^2 = 0
$$

<div align="center" style="margin-bottom: 30px;">
  <p style="font-size: 0.9rem; color: #666;">Prefer a full-screen experience?</p>
  <a href="https://www.geogebra.org/classic/uhu2ap6q" target="_blank" class="glow-banner">
    <img src="https://img.shields.io/badge/Open_Full_Screen-GeoGebra-6666FF?style=for-the-badge&logo=geogebra" alt="Full Screen Widget">
  </a>
</div>

<hr style="border: 0; border-top: 1px solid #eee; margin: 40px 0;">

<div class="geogebra-container">
  <iframe 
    src="https://www.geogebra.org/classic/uhu2ap6q?embed&showMenuBar=false&showAlgebraInput=false&showResetIcon=true&allowUpscale=true" 
    allowfullscreen>
  </iframe>
</div>

#### Kimberling Triangle Center Loci Compilation (In Progress)

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
