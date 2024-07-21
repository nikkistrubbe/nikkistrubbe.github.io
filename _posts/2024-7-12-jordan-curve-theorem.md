---
layout: post
title:  "The Jordan curve theorem"
---

The Jordan curve theorem is one of the easiest theorems in mathematics, but really hard to prove. It is informally stated as follows:

> "A closed curve in the plane that does not intersect itself, divides the plane in three parts: the interior of the curve, the exterior of the curve, and the curve itself."

This may be intuitive, but do not be fooled, its proof is far from trivial! One of the problems is that curves 'can be really wild'. Before we turn to the proof, we first must make the theorem rigorous. What is a 'curve'? What is a 'plane'? What does it mean to not intersect? 

We define a Jordan arc on a Hausdorff topological space $X$ to be the image of an injective continuous map $\gamma : [0,1] \injto X$. The condition that $\gamma$ must be injective can be understood as not intersection itself. Since $[0,1]$ is compact, $\im \gamma$ is also compact in $X$. But $X$ is Hausdorff, so $\im \gamma$ is closed in $X$. So $\gamma$ is a topological embedding. Likewise, a Jordan curve on a Hausdorff topological space $X$ to be the image of an injective continuous map $\gamma : S^1 \injto X$, which is also a topological embedding.

Now we are ready to state the Jordan Curve theorem:

> Let $\scC$ be a Jordan curve in $\R^2$. Then the complement $\R^2 \setminus \scC$ consists of two path-connected components, of which one is bounded and simply connected (the interior), and the other one is unbounded (the exterior). The boundary of both components equals $\scC$.

We shall be using singular homology and the Mayer-Vietoris sequence quite a lot, which we assume the reader is familiar with.
Proving the Jordan Curve theorem goes is several steps:

1. We prove that the homology groups of $S^2 \setminus \scI$ are all trivial, for $\scI \subseteq S^2$ a Jordan arc;
2. We prove that $S^2 \setminus \scC$ consists of two path-components, for $\scC \subseteq S^2$ a Jordan curve;
3. We prove that $\R^2 \setminus \scC$ consists of two path-components, for $\scC \subseteq \R^2$ a Jordan curve;

## Jordan arcs in $S^2$ 
First, let $\scI \subseteq S^2$ be a Jordan arc, given as the image of an injective continuous map $\gamma : [0,1] \injto S^2$. We want to show that

$$
H_p(S^2\setminus \scI) \cong \begin{cases}
    \Z, &p = 0,\\
    0, &p \geq 1.
\end{cases}
$$

We show this by contradiction. Let $p \geq 1$, and define the sets $U = S^2 \setminus \gamma([0,1/2])$ and $V = S^2 \setminus \gamma([1/2,1])$. These are open, because $\gamma([0,1/2])$ and $\gamma([1/2,1])$ because $[0,1/2]$ and $[1/2,1]$ are compact, and restricting $\gamma$ to these subsets, $\gamma$ is still a topological embedding. $U \cup V = S^2 \setminus \set{\gamma(1/2)} \cong \R^2$, so all its homology groupd are trivial. Lastly, $U \cap V = S^2 \setminus \gamma([0,1]) = S^2 \setminus \scI$. We consider the following part of the Mayer-Vietoris sequence:

$$
\begin{CD}
H_{p+1}(U\cup V) @>>> H_p(U \cap V) @>>> H_p(U) \oplus H_p(V) @>>> H_p(U \cup V)
\end{CD}
$$

which reduces by the above data to the isomorphism $H_p(U \cap V) \stackrel{\lito}{i_* \oplus j_*} H_p(U) \oplus H_p(V)$, where $i : U \cap V \to U$ and $j : U \cap V \to V$ are the inclusion maps. Assume there exists a $p$-cycle $\alpha \in Z_k(S^2 \setminus \scI)$, which is not a boundary of a $p+1$-cycle, i.e. $[\alpha]$ represents a non-zero element in $H_p(S^2 \setminus \scI)$. Then by the isomorphism, $[\alpha]$ represents a non-zero element in $H_p(U)$ or $H_p(V)$ as well. We then repeat the above argument over and over again on the corresponding homology group. We end up with a nested sequence of closed intervals

$$
[0,1] = I_0 \supseteq I_1 \supseteq I_2 \supseteq I_3 \supseteq \ldots 
$$

such that $\alpha$ represents a non-trivial class in $H_p(S^2 \setminus \gamma(I_n))$ for all $n \geq 0$.

Note that $\bigcap_{n=0}^\infty I_n$ consists of precisely one element. Since $\scl(I_n) = 2^{-n}$, the intersection contains at most one element. This element can be found by writing $I_n = [a_n, b_n]$. The sequence $(a_n)_{n \geq 0}$ is bounded from above (by $1$), so $p = \sup_{n=0}^\infty a_n$ exists. Per definition, $a_n \leq p$ for all $n \geq 0$. All the $b_n$'s are upper bounds for $p$, so $p \leq b_n$. This means that $p \in I_n$ for all $n \geq 0$, and thus $\bigcap_{n=0}^\infty I_n = \set{p}$.

We consider $\alpha$ on $S^2 \setminus \set{\gamma(p)}$. Since $S^2 \setminus \set{\gamma(p)}$ is homeomorphic to $\R^2$, which is contractible, so there exists a $p+1$ chain $\beta \in C_{p+1}(S^2 \setminus \set{\gamma(p)})$ such that $\alpha = \boundary{\beta}$. We can write $\beta = n_1 \sigma_1 + \ldots + n_m \sigma_m$, for integers $n_i \in \Z$ and singular $p+1$-simplices $\sigma_i : \Delta_{p+1} \to S^2 \setminus \set{\gamma(p)}$. We are interested in the image of $\beta$, which is defined as $\bigcup_{i=1}^m \im \sigma_i$. Since $\Delta_{p+1}$ is compact, so is $\sigma_i$, and thus $\im \beta$. Note however, that

$$
\im \beta \subseteq S^2 \setminus \set{\gamma(p)} = \bigcup_{n=0}^\infty S^2 \setminus \gamma(I_n),
$$

so $\set{S^2 \setminus \gamma(I_n) \cap \im \beta}_{n=0}^\infty$ is an open cover for $\im \beta$. So there exists an $n \geq 0$ such that $\im \beta \subseteq S^2 \setminus \gamma(I_n)$. However, this would imply that $\beta \in C_{p+1}(S^2 \setminus \gamma(I_n))$, so $[\alpha] = 0$ in $H_p(S^2 \setminus \gamma(I_n))$, which is a contradiction. So $\alpha$ did not exist in the first place, proving that $H_p(S^2 \setminus \scI) = 0$ for $p \geq 1$.

For $p = 0$, the argument is analogous; we keep the same $U$ and $V$, and assume that $U \cap V = S^2 \setminus \gamma([0,1])$ has at least two path-components. Let $x,y \in U \cap V$, from different path-components. Then $\alpha := x-y$ represents a non-zero element in $H_0(S^2 \setminus \gamma([0,1]))$. Then the same argument as above applies exactly; since $S^2 \setminus \set{p}$ is path-connected, $\alpha$ is a boundary of a $1$-chain in $S^2 \setminus \set{p}$. By compactness, this $1$-chain lives in $S^2 \setminus \gamma(I_n)$, for some $n \geq 0$, giving a contradiction. So $S^2 \setminus \gamma([0,1])$ is path-connected, and $H_0(S^2 \setminus \gamma([0,1])) = \Z$.

## Jordan arcs in $\R^2$ 
We know consider a Jordan arc $\scI \subseteq \R^2$, given by the image of an injective continuous map $\gamma : [0,1] \injto \R^2$. We consider $S^2 = \R^2 \cup \set{\infty}$ as the one-point compactification of $\R^2$. Explicitly, the inverse stereographic projection gives the inclusion map $i : \R^2 \injto S^2$. $\gamma \circ i$ then defines a Jordan arc on $S^2$, so we can use our previous result. We define the open sets $U = S^2 \setminus \scI$ and $V = \R^2$ in $S^2$. Then $U \cap V = \R^2 \setminus \scI$ and $U \cup V = S^2$. With the Mayer-Vietoris sequence, we find

$$
H_p(\R^2 \setminus \scI) \cong \begin{cases}
    \Z, &p = 0, 1,\\
    0, &p \geq 2.
\end{cases}
$$

So intuitively, $\R^2 \setminus \scI$ has a 'hole'.

## Jordan curves in $S^2$
We can generalise our results to Jordan curves. Let $\gamma : S^1 \injto S^2$ define a Jordan curve. Let $A = \set{e^{it} : 0 \leq t \leq \pi}$ and $B = \set{e^{it} : \pi \leq t \leq 2\pi}$ be the upper half and lower half of $S^1$ especially. $\gamma$ restricted to $A$ and $B$ give Jordan arcs, on which we can apply our previous result. So wel let $U = S^2 \setminus \gamma(A)$ and $V = S^2 \setminus \gamma(B)$, which are both open and have trivial homology groups. Furthermore, $U \cap V = S^2 \setminus \scC$ and $U \cup V = S^2 \setminus \set{\gamma(1), \gamma(-1)} \cong \R^2 \setminus \set{0} \simeq S^1$. Then by the Mayer-Vietoris sequence,

$$
H_p(S^2 \setminus \scC) \cong \begin{cases}
    \Z^2, &p = 0,\\
    0, &p \geq 1.
\end{cases}
$$

So $S^2 \setminus \scC$ consists of two path-components, each having only trivial homology groups.

## Jordan curves in $\R^2$
Now we are finally ready to prove part of the Jordan curve theorem. Again, we consider $\R^2$ as an open subset of $S^2$. Let $\gamma : S^1 \injto \R^2$ define a Jordan curve $\scC$, and set $U = S^2 \setminus \scC$ and $V = \R^2$. Then again, $U \cap V = \R^2 \setminus \scC$ and 








## Surfaces with trivial homology
We have seen a couple of times open subsets $\Sigma$ of $\R^2$ and $S^2$, with trivial homology, i.e. $H_0(\Sigma) \cong \Z$, $H_p(\Sigma) \cong 0$, $p \geq 1$. Since $\Sigma$ is an open subset of a surface, $\Sigma$ is a surface itself. But what surfaces (up to homeomorphism) can $\Sigma$ be? $\Sigma = \R^2$ surely suffices, but are there other possibilities? It turns out this is not the case. We shall prove this, using some algebraic topology facts about surfaces and manifolds.

> For a closed connected $n$-manifold, $H_n(M; \Z_2) \cong \Z_2$.

So assume that $\Sigma$ is compact. Then $H_2(\Sigma; \Z_2) \cong \Z_2$. We want to compare this fact with the homology groups (with coefficients in $\Z$) of $\Sigma$. By the universal coefficient theorem for homology, 
$H_2(\Sigma; \Z_2) \cong 0$, however, since $H_1(\Sigma) \cong H_2(\Sigma) \cong 0$. Thus we know that $\Sigma$ is non-compact.

> Every non-compact connected smooth manifold of dimension $n$ is homotopy equivalent to an $n-1$-dimensional CW complex.

This implies that $\Sigma$ is homotopy equivalent to a connected $1$-dimensional CW complex, which is a connected topological graph. This implies that $\pi_1(\Sigma)$ is a free group, say on the set $S$. We want to use the Hurewicz theorem, so we have to calculate $\ab{\pi_1(\Sigma)}$. This is an exercise in universal properties. For every group $G$ and map $f : S \to G$, there exists a unique homomorphism $g : \pi_1(\Sigma) \to G$, such that $f = g \circ i$, for $i : S \to \pi_1(\Sigma)$ the inclusion map. In particular, we consider the abelian group $\Z^{(S)} = \bigoplus_{s \in S} \Z$. Furthermore, we consider the map $j : S \to \Z^{(S)}$, sending $s$ to $(\delta_{st})_{t \in S}$; the only non-zero coordinate is the $s$-coordinate. Then by the universal property of the free group, there exists a unique homomorphism $\pi : \pi_1(\Sigma) \to \Z^{(S)}$, such that $j = \pi \circ i$. Let $j_s : \Z \to \Z^{(S)}$ for $s \in S$ denote the natural embeddings, which are defined by $j_s(1) = j(s)$.

Let $A$ be an abelian group, and $f : \pi_1(\Sigma) \to A$ a group homomorphism. For every $s \in S$, we define a group homomorphism $g_s : \Z \to A$, via $1 \mapsto f(s)$. By the universal property of the direct sum, this in turn defines a unique group homomorphism $g : \Z^{(S)} \to A$, such that $g_s = g \circ j_s$. We then see that for all $s \in S$,

$$
g \circ \pi(s) = g \circ \pi \circ i(s) = g \circ j(s) = g \circ j_s(1) =
g_s(1) = f(s).
$$

Since $g$ is a group homomorphism, we conclude that $f = g \circ \pi$. We want to show that this $g$ is unique with this property. So, let $g : \Z^{(S)} \to A$ be a group homomorphism, such that $f = g \circ \pi$. It suffices to show that $g \circ j_s = g_s$. We see that

$$
g \circ j_s(1) = g \circ j(s) = g \circ \pi \circ i(s) =
f(s) = g_s(1),
$$

proving the claim. So $\Z^{(S)}$ satisfies the universal property for the abelianisation of $\pi_1(\Sigma)$, so $\ab{\pi_1(\Sigma)}\cong \Z^{(S)}$. By the Hurewicz theorem then,

$$
0 \cong H_1(\Sigma) \cong \ab{\pi_1(\Sigma)} \cong \Z^{(S)},
$$

so $S = \varnothing$. This means that $\pi_1(\Sigma) \cong 0$, so $\Sigma$ is simply-connected.

> Every orientable Riemannian $2$-manifold can be given a Riemann surface structure.

Since $\Sigma$ is simply-connected, it is also orientable. We endow it with a Riemannian metric (which is always possible via a partition of unity argument). Then by the above theorem, we can regard $\Sigma$ as a simply-connected Riemann surface. The uniformisation theorem then states the following:

> Every simply-connected Riemann surface is biholomorphic to either $\C\P^1$, $\C$ or the open unit ball.

Thus $\Sigma$ is either diffeomorphic to $\R^2$ or $S^2$. But $S^2$ is compact, so $\Sigma \cong \R^2$.