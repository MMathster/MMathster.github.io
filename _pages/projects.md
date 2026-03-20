---
title: "Projects"
permalink: /projects/
---

# Projects

This page collects interactive constructions, dynamic visualizations, and exploratory computational models. Projects serve as mathematical laboratories — supporting intuition, testing structural conjectures, and providing visual companions to formal derivations in the [Mathematics](/mathematics/) section.

---

# 🧮 Triangle Centers

## Loci of Triangle Centers in Thales Configuration (In Progress)

Inspired by the former STEM community in the year 2021, I worked on discovering loci of triangle centers curated from Clark Kimberling's *Encyclopedia of Triangle Centers*. For this section, suppose that a unit circle inscribes a triangle $\triangle ABC$, where points $A = (1,0)$ and $B = (-1,0)$ are fixed. As point $C$ varies, where $\theta \in [0,2\pi)$ the triangle center $X_n$ generates a locus. By considering $C = \left(\cos\theta, \sin\theta\right)$, where $\theta \in [0, \pi)$, the side lengths are

- $a = \left| \overline{BC} \right| = 2\cos\frac{\theta}{2}$
- $b = \left| \overline{AC} \right| = 2\sin\frac{\theta}{2}$
- $c = \left| \overline{AB} \right| = 2,$

and the angles (in radians) are

- $\alpha = \angle A = \frac{1}{2}\left(\pi - \theta\right)$
- $\beta = \angle B = \frac{1}{2}\theta$
- $\gamma = \angle C = \frac{\pi}{2}$

In classical geometry, we learn that the altitudes of a triangle concur at a single point. But as we move beyond the basics, a mystery unfolds: there are over 60,000 documented triangle centers, each with its own unique "personality" and algebraic signature.

How do these points move? What curves do they trace as the right triangle $\triangle ABC$ itself deforms? This collection of geometry projects isn't just a collection of proofs—it is a computational laboratory designed to uncover the hidden logic of the plane.

### Experimental Geometry: Kimberling Triangle Centers

The notebook covers the research article noted in [Mathematics](/mathematics/) section. Explore the fascinating world of triangle centers ($X_1$ - $X_n$) with interactive tools and dynamic visualizations.

- **Notebook (GitHub)**:  
  [![View Notebook](https://img.shields.io/badge/GitHub-Notebook-blue?logo=github)](https://github.com/MMathster/MMathster.github.io/blob/main/assets/experimental_center.ipynb)

- **Interactive Dashboard (Voila)**:  
  [![Launch Dashboard](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/MMathster/MMathster.github.io/HEAD?filepath=assets/experimental_center.ipynb&urlpath=voila/render/assets/experimental_center.ipynb)

Each of these triangle centers between $X_1$ and $X_6$ generates a distinct locus, where

- $X_1$ is the incenter $I$;
- $X_2$ is the centroid $G$;
- $X_3$ is the circumcenter;
- $X_4$ is the orthocenter $H$;
- $X_5$ is the nine-point center $N$;
- $X_6$ is the symmedian point $K$;

See below for interactive widgets that support notebooks attached:

- **Geogebra**:  
  <a href="https://www.geogebra.org/classic/nknes2ra" target="_blank" class="glow-new-version">
     <img src="https://img.shields.io/badge/Open_Full_Screen-Geogebra-6557D2?style=for-the-badge&logo=geogebra&logoColor=black">
  </a>

**Highlights:**
- Compute and visualize multiple triangle centers including centroid ($X_1$), incenter ($X_2$), circumcenter ($X_3$), and more.  
- Explore dynamic loci: see how changing vertex positions affects center locations.  
- Built using Jupyter Notebook, ipywidgets, and Voila for interactive exploration.  
- Fully reproducible — all code and dependencies are included in the repository.

### Loci of Incenter $X_1$, Centroid $X_2$ and Gergonne Point $X_8$

This interactive snippet supports the example at the end of my research article. The barycentric coordinates for each of three centers are:

- **Incenter $X_1$**: $(1 : 1 : 1)$
- **Centroid $X_2$**: $(a : b : c)$
- **Gergonne Point $X_8$**: $\left(\frac{b + c - a}{a} : \frac{a + c - b}{b} : \frac{a + b - c}{c}\right)$

Known for lying on the Nagel line, these points are governed by these properties $X_8 + 2X_1 = 3X_2$ and $\left| \overline{X_2 X_8} \right| = 2 \left| \overline{X_2 X_1} \right|$. While points $X_1$ and $X_2$ both rotate counterclockwise, point $X_8$ rotates clockwise!

Check out the widget to visualize how these three special points interact with the parameter $\theta$.

- **Geogebra**:  
  <a href="https://www.geogebra.org/classic/jqnrskqw" target="_blank" class="glow-new-version">
     <img src="https://img.shields.io/badge/Open_Full_Screen-Geogebra-6557D2?style=for-the-badge&logo=geogebra&logoColor=black">
  </a>

### Bow-tie Shaped Locus of the Feuerbach Point $X_{11}$

Another special mention of mine is the Feuerbach point $X_{11}$. The barycentric coordinates of the Feuerbach point $X_{11}$ is

$$
1 - \cos\left(\beta - \gamma\right) : 1 - \cos\left(\gamma - \alpha\right) : 1 - \cos\left(\alpha - \eta\right)
$$

Unlike some triangle centers whose loci are ellipses or circles, the locus of $X_{11}$ is bow-tied shape whose representation of the curve in the upper half plane can be presented as

$$
(x^2 + y^2)^3 - (1 + 2y)(x^2 + y^2)^2 + 2y(x^2 + y^2) + y^2 = 0
$$

With $t = \tan\frac{\theta}{4}$, where $t \in [0, \pi)$, we have

$$
  X_11(t) = \left( \dfrac{1 - 4t + 3t^2 + 8t^3 - 13t^4 - 4t^5 + t^6}{(1 + t^2)^2(1 - 4t + 5t^2)}, \dfrac{2t(1 - t)(1 - 2t - t^2)^2}{(1 + t^2)^2(1 - 4t + 5t^2)} \right)
$$

View widgets below to see how the point $X_{11}$ interacts with $\theta \in [0, 2\pi)$:

- **Geogebra**:  
  <a href="https://www.geogebra.org/classic/uhu2ap6q" target="_blank" class="glow-new-version">
     <img src="https://img.shields.io/badge/Open_Full_Screen-Geogebra-6557D2?style=for-the-badge&logo=geogebra&logoColor=black">
  </a>

### Kimberling Triangle Center Loci Compilation (In Progress)

Inspired by my previous dual-role work at AiCure, I displayed interest to extract coordinates and symbolically analyze the locus for each triangle center $X_n$. The half-angle substitution, also known as the Weierstrass substitution, is $t = \tan\left\frac{\theta}{2}$, where

$$
\left(\cos\theta, \sin\theta\right) \mapsto \left(\dfrac{1 - t^2}{1 + t^2}, \dfrac{2t}{1 + t^2}\right)
$$

which transforms equations, containing $\sin\theta$ and $\cos\theta$, into rational expressions. Since triangle side lengths are of the form $\sin\frac{\theta}{2}$ and $\cos\frac{\theta}{2}$, we can apply that idea for greater powers of $2$'s i.e. $\sin\frac{\theta}{4}$ and $\cos\frac{\theta}{8}$. For instance, if the "deepest" angle factor detected in the expression $\sin\frac{\theta}{2}\cos\frac{\theta}{4}$ is $4$, then the substitution $t = \tan\frac{\theta}{4 \cdot 2} = \tan\frac{\theta}{8}$. Extending this to mixed angle denominators, we can deduce that for the general $t = \tan\left(\frac{\theta}{p}\right)$ where $p$ is an integer,

- For angle powers of $2$'s only, $p = 2^{\mathrm{max} + 1}$, where $\max$ checks denominators. For instance, for expressions, like $\tan\frac{\theta}{4}\cos\frac{\theta}{2}$, we set $t = \tan\frac{\theta}{4 \cdot 2} = \tan\frac{\theta}{8}$.
- Otherwise, for angle powers of different prime factors, $p$ takes the least common demoninator of angle denominators. For instance, for expressions, like $\tan\frac{\theta}{3}\cos\frac{\theta}{2}$, we set $t = \tan\frac{\theta}{6}$.

- **ETC Center Table Repository (Github)**:  
  [![Visit Repository](https://img.shields.io/badge/GitHub-View_Project-181717?style=for-the-badge&logo=github)](https://github.com/MMathster/ETC-Center-Table)

**Highlights:**
- Extract barycentric coordinates from 36 pages of Evansville's *Encyclopedia of Triangle Center* site.
- Using the discoveries from the formal derivation, convert barycentric coordinates into parametric curves in the form of $(x(t),y(t))$, where $t = \tan\left(\frac{\theta}{p}\right)$ is the Weierstrass tangent substitution with $p$ denoted as the shallowest denominator angle.

*Formal derivation in progress: see [Mathematics](/mathematics/).*

---

*Interactive constructions and notebooks are added as analytical work progresses.  
Projects cross-reference formal derivations in the Mathematics section wherever applicable.*
