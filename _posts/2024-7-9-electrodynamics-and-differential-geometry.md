---
layout: post
title:  "Electrodynamics and Differential Geometry"
---

Electrodynamics is concerned with describing the interaction between charges and currents, and electric $\bvec{E}$ and magnetic fields $\bvec{B}$. The electric and magnetic fields are related to the charge density $\rho$ (''the amount of charge per volume'') and the current density $\bvec{J}$ (''the amount of charge flowing per unit time through a small area, pointing in the direction the charge is flowing''), via the Maxwell equations:

$$
\begin{aligned}
    \div{\bvec{B}} &= 0&&\text{(Gauß's magnetic law)},& \div{\bvec{E}} &= \frac{\rho}{\epsilon_0} &&\text{(Gauß's law)},\\
    \curl{\bvec{E}} &= -\pdv{\bvec{B}}{t} &&\text{(Faraday's law)}, & \curl{\bvec{B}} &= \mu_0\bvec{J} + \epsilon_0 \mu_0\pdv{\bvec{E}}{t} &&\text{(Maxwell-Ampère law)}.
\end{aligned}
$$

Here $\epsilon_0$ and $\mu_0$ are physical constants, called the permittivity of the vacuum and the permeability of the vacuum, respectively. We do not want to worry about them, so we choose units such that $\mu_0 = 1$ and $\epsilon_0 = 1$. There is a lot of hidden differential geometry going on, which is not yet visible. This I want to illustrate in this post.

## Electrostatics
We start of easy with electrostatics. Here we only consider stationary charges, and no magnetic fields. Then the only relevant equations are 

$$
\begin{aligned}
    \div{\bvec{E}} &= \rho, &&
    \curl{\bvec{E}} &= 0.
\end{aligned}
$$

Note that generally, we consider $\bvec{E}$, $\bvec{B}$ and $\bvec{J}$ as smooth vector fields, and $\rho$ a smooth function, depending on space and time. Since in this regime, $\bvec{E}$ and $\rho$ are time-independent, we can consider $\bvec{E}$ and $\rho$ as a smooth vector field $\bvec{E} \in \frX(M)$ and a smooth function $\rho \in \scC^\infty(M)$, for a three dimensional oriented Riemannian manifold $M$. We mostly consider $M = \R^3$, with the Euclidean metric. The metric is needed to define the divergence and curl. They are neatly given by means of exterior derivatives in the following commutative diagram:

$$
\begin{CD}
\scC^\infty(M)  @>\tgrad>> \frX(M) @>\tcurl>>     \frX(M) @>\tdiv >>              \scC^\infty(M)\\
@V\sim V\id V               @V\sim V\flat V         @V\sim V\hodgedual{}\circ\flat V @V\sim V\hodgedual{}V\\
\Omega^0(M)     @>\d{}>>    \Omega^1(M) @>\d{}>>    \Omega^2(M) @>\d{}>>            \Omega^3(M)

\end{CD}
$$