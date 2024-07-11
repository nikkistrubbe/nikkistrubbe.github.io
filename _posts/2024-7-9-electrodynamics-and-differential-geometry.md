---
layout: post
title:  "Electrodynamics and Differential Geometry"
---

Electrodynamics is concerned with describing the interaction between charges and currents, and electric $\bvec{E}$ and magnetic fields $\bvec{B}$. The electric and magnetic fields are related to the charge density $\rho$ (''the amount of charge per volume'') and the current density $\bvec{j}$ (''the amount of charge flowing per unit time through a small area, pointing in the direction the charge is flowing''), via the Maxwell equations:

$$
\begin{aligned}
    \div{\bvec{B}} &= 0&&\text{(Gauß's magnetic law)},& \div{\bvec{E}} &= \frac{\rho}{\epsilon_0} &&\text{(Gauß's law)},\\
    \curl{\bvec{E}} &= -\pdv{\bvec{B}}{t} &&\text{(Faraday's law)}, & \curl{\bvec{B}} &= \mu_0\bvec{j} + \epsilon_0 \mu_0\pdv{\bvec{E}}{t} &&\text{(Maxwell-Ampère law)}.
\end{aligned}
$$

Here $\epsilon_0$ and $\mu_0$ are physical constants, called the permittivity of the vacuum and the permeability of the vacuum, respectively. We do not want to worry about them, so we choose units such that $\mu_0 = 1$ and $\epsilon_0 = 1$. There is a lot of hidden differential geometry going on, which is not yet visible. This I want to illustrate in this post.

## Electrostatics
We start of easy with electrostatics. Here we only consider stationary charges, and no magnetic fields. Then the only relevant equations are 

$$
\begin{aligned}
    \curl{\bvec{E}} &= 0,&
    \div{\bvec{E}} &= \rho.
\end{aligned}
$$

Note that generally, we consider $\bvec{E}$, $\bvec{B}$ and $\bvec{j}$ as smooth vector fields, and $\rho$ a smooth function, depending on space and time. Since in this regime, $\bvec{E}$ and $\rho$ are time-independent, we can consider $\bvec{E}$ and $\rho$ as a smooth vector field $\bvec{E} \in \frX(M)$ and a smooth function $\rho \in \scC^\infty(M)$, for a three dimensional oriented Riemannian manifold $M$. We mostly consider $M = \R^3$, with the Euclidean metric. The metric is needed to define the divergence and curl. They are neatly given by means of exterior derivatives in the following commutative diagram:

$$
\begin{CD}
\scC^\infty(M)  @>\tgrad>> \frX(M) @>\tcurl>>     \frX(M) @>\tdiv >>              \scC^\infty(M)\\
@V\sim V\id V               @V\sim V\flat V         @V\sim V\hodgedual{}\circ\flat V @V\sim V\hodgedual{}V\\
\Omega^0(M)     @>\d{}>>    \Omega^1(M) @>\d{}>>    \Omega^2(M) @>\d{}>>            \Omega^3(M)

\end{CD}
$$

Here $\hodgedual{} : \Omega^k(M) \lito \Omega^{n-k}(M)$, for $n = \dim M$ is the Hodge star operator. It is a natural isomorphism, induced by the metric tensor. In our case $n = 3$. $\flat : \frX(M) \lito \Omega^1(M)$ is the musical isomorphism, which interprets a smooth vector field as a smooth $1$-form by lowering indices. Its inverse is $\sharp : \Omega^1(M) \lito \frX(M)$, which is raising indices.

We assume $M = \R^3$, and we will consider $\bvec{E}$ as a $1$-form $E = E_x\d{x} + E_y\d{y} + E_z\d{z}$, and $\rho$ as a $3$-form $\varrho = \hodgedual{\rho} = \rho\d{x} \wedge \d{y} \wedge \d{z}$. This consideration will turn out fruitful in the future. The above equations thus give

$$
\begin{aligned}
    \d{E} &= 0,&
    \d{(\hodgedual{E})} &= \varrho.
\end{aligned}
$$

The first equation states that $E$ is a closed $1$-form. Since $M = \R^3$ is contractible, we know that the first de Rham group $H_\text{dR}^1(M)$ is trivial. This means that $E$ is exact, and thus there exists $\phi \in \scC^\infty(M)$, such that $E = -\d{\phi}$. This minus sign is only a convention. $V$ is known as the electric potential. 

One of the most important electric fields is that of a point charge, with charge $q$. Its electric field is given by $E = \frac{q}{4\pi r^2}\d{r}$. This electric field is only defined on $\R^3\setminus \set{0}$, however. Luckily, $H_\text{dR}^1(\R^3\setminus \set{0}) = 0$ still holds, as $\R^3\setminus \set{0}$ is homotopy equivalent to $S^2$, which has only non-trivial homology for $k = 2$. So $E$ is still exact; $\phi = \frac{q}{4\pi r}$ is a possible potential function. 

## Magnetostatics
In magnetostatics, the charges and currents are steady, meaning that $\pdv{\rho}{t} = 0$ and $\pdv{\bvec{j}}{t} = 0$. In this regime, the equations are

$$
\begin{aligned}
    \div{\bvec{B}} &= 0,&
    \curl{\bvec{B}} &= \bvec{j}.
\end{aligned}
$$

As one might know, the magnetic field is not a vector, but really a _pseudo_-vector. So it would make sense to consider $\bvec{B}$ as a $2$-form: $B = \hodgedual{(B_x \d{x} + B_y\d{y} + B_z\d{z})} = B_x\d{y}\wedge \d{z} + B_y\d{z}\wedge \d{x} + B_z\d{x} \wedge \d{y}$. Likewise, $\bvec{j}$ is considered as a $2$-form $j = j_x\d{y}\wedge \d{z} + j_y\d{z}\wedge \d{x} + j_z\d{x} \wedge \d{y}$. Then  

$$
\begin{aligned}
    \d{B} &= 0,&
    \d{(\hodgedual{B})} &= j.
\end{aligned}
$$

These are exactly of the same of as in electrostatic, only this time $B$ is a $2$-form instead of a $1$-form. $B$ is also closed, and when $M = \R^3$, then $H_\text{dR}(M) = 0$, so there exists a vector potential $\alpha \in \Omega^1(M)$, such that $B = \d{\alpha}$. $\alpha$ is related to the 'ordinary' vector potential $\bvec{A}$ via $\alpha = \bvec{A}^\flat$; then $\bvec{B} = \curl{\bvec{A}}$.

This time, a monopole field, given by $B = \frac{q}{4\pi}\sin \theta \d{\theta} \wedge \d{\phi}$ (which corresponds to $\bvec{B} = \frac{q}{4\pi r^2}\hat{\bvec{r}}$), is closed but not exact. This can be seen by 

$$
\oint_{S^2}B = \frac{q}{4\pi}\oint_{S^2}\sin \theta \d{\theta} \wedge \d{\phi} = q \neq 0.
$$

Here, $H_\text{dR}^2(\R^3 \setminus \set{0}) \cong H_\text{dR}(S^2) \cong \R$, the class of $\sin \theta \d{\theta}\wedge \d{\phi}$ is a generator for the second de Rham group.

Probably the most important magnetic field in magnetostatics is that of a current carrying wire, which is given by $\bvec{B} = \frac{I}{2\pi s}\hat{\bvec{\phi}}$ in cylindrical coordinates, or $B = \frac{I}{2\pi s}\d{z} \wedge \d{s}$. This field is only defined on $\R^3 \setminus \scl$, for the line $\scl = \set{(0,0,z) : z \in \R}$. Since $\R^3\setminus \scl \simeq S^1$, we see that $H_\text{dR}^2(\R^3 \setminus \scl) = 0$. A corresponding vector potential is $\alpha = -\frac{I}{2\pi}\ln s \d{z}$.

## Electrodynamics
In electrodynamics, $\rho$ and $\bvec{j}$ are allowed to vary over time. So now we must model space and time as a four dimensional pseudo-Riemannian manifold $M$. The prototypical example is $M = \R^4$ with the Minkowski metric, given by $\eta = -\d{t}^2 + \d{x}^2 + \d{y}^2 + \d{z}^2$. We still use

$$
E = E_x\d{x} + E_y\d{y} + E_z\d{z},\quad
B = B_x\d{y}\wedge \d{z} + B_y\d{z}\wedge \d{x} + B_z\d{x} \wedge \d{y},\quad
\varrho = \rho\d{x} \wedge \d{y} \wedge \d{z},\quad
j = j_x\d{y}\wedge \d{z} + j_y\d{z}\wedge \d{x} + j_z\d{x} \wedge \d{y}.
$$

We calculate the exterior derivatives of $E$, $B$ and their hodge duals in the general case. We find

$$
\begin{aligned}
    \d{E} &= -\pdv{B}{t} + \d{t} \wedge \pdv{E}{t}, &
    \d{(\hodgedual{E})} &= \d{t} \wedge \varrho,\\
    \d{B} &= \d{t} \wedge \pdv{B}{t}, &
    \d{(\hodgedual{B})} &= -\d{t} \wedge j + \pdv{\hodgedual{E}}{t}
\end{aligned}
$$

This is not very illuminating. But $\bvec{E}$ and $\bvec{B}$ have each only $3$ components, so it would not make sense to consider them as vector fields on $M$. But a $2$-form on $M$ has $6$ components, so we want to combine $\bvec{E}$ and $\bvec{B}$ into a $2$-form $F \in \Omega^2(M)$. Likewise, we want to combine $\rho$ and $\bvec{j}$ in an object with $4$ components, so a $1$-form or a $3$-form. A way to accomplish this is as follows:

$$
F = E \wedge \d{t} + B,\quad J = \varrho + j \wedge \d{t}.
$$