---
layout: post
title:  "Electrodynamics and Differential Geometry"
---

Electrodynamics is concerned with describing the interaction between charges and currents, and electric $\bvec{E}$ and magnetic fields $\bvec{B}$. The electric and magnetic fields are related to the charge density $\rho$ (''the amount of charge per volume'') and the current density $\bvec{J}$ (''the amount of charge flowing per unit time through a small area, pointing in the direction the charge is flowing''), via the Maxwell equations:

$$
\begin{align*}
    \div{\bvec{B}} &= 0&&\text{(Gauß's magnetic law)},& \div{\bvec{E}} &= \frac{\rho}{\epsilon_0} &&\text{(Gauß's law)},\\
    \curl{\bvec{E}} &= -\pdv{\bvec{B}}{t} &&\text{(Faraday's law)}, & \curl{\bvec{B}} &= \mu_0\bvec{J} + \epsilon_0 \mu_0\pdv{\bvec{E}}{t} &&\text{(Maxwell-Ampère law)}.
\end{align*}
$$

