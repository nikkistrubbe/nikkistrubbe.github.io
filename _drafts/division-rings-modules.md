---
layout:         post
title:          "Modules over Division Rings"
category:       "Mathematics"
tags:           ["Abstract Algebra"]
assume:         "modules"
---

A generally well-known fact in mathematics is that every vector space has a basis (assuming the axiom of choice of course -- after all, why wouldn't one assume it, if only for this reason?). One may wonder, are there other rings $R$ -- apart from fields -- that have the property that every $R$-module is free? It appears there are, called division rings. These are rings $R$ such that each element apart from 0 has an inverse, but $R$ need not be commutative. Fields and the quaternions $\H$ are the prime examples. In this post, we explore modules over division rings, and characterise division rings by the freeness of their modules.
<!--more-->

## Every vector space has a basis
First, let's prove that every vector space has a basis, and try to generalise this to division rings. We want to prove the following statement:

> Let $V$ be a $K$-vector space. Then $V$ has a basis.

We shall first prove that any linearly independent subset $\scS \subseteq V$ that is not a basis for $V$ can be extended to a larger linearly independent subset of $V$. Then we use Zorn's lemma to construct a basis for $V$.

So let $\scS \subseteq V$ be a linearly independent subset of $V$, that is not a basis for $V$. $S$ generates a subspace $U \subseteq V$, which is per definition not $V$ entirely. Thus we can take an $x \in V \setminus U$. We want to show that $\scS \subseteq \set{x}$ is also linearly independent. Let $a_1,\ldots,a_k,b \in K$ and $s_1,\ldots,s_k \in \scS$, such that 

$$
a_1 s_1 + \ldots + a_k s_k + bx = 0.
$$

Note that $-bx = a_1 s_1 + \ldots + a_k s_k \in U$. This is only possible when $b = 0$, else $-b$ is invertibly in $K$ and thus $x = -\frac{1}{b}\cdot -bx \in U$, which is a contradiction. Since $\scS$ is linearly independent, $a_1 s_1 + \ldots + a_k s_k = 0$ implies $a_1 = \ldots = a_k = 0$. We thus have proven that $\scS \subseteq \set{x}$ is also linearly independent.

The above essentially states that we can start with a linear indepent set $\scS$, the simplest being $\varnothing$, and adding elements from $V$ which are not already in the span of the linearly indepdent set. The only thing that will stop us is when $\scS$ is already a basis, because then we cannot add any element not in the span of $\scS$. But our goal was to find a basis in the first place, so this is not problematic. What is a bit problematic, however, is that there are really big vector spaces, such as $\R$ as a $\Q$-vector space, or the $\R$-vector space of $\R$-valued sequences. The process of adding elements to a linearly independent subset will not terminate in finitely many, or even countably infinitely many steps. But luckily, there is Zorn's lemma, which solves this problem:

> Suppose that every chain in a partially ordered set $X$ has an upper bound in $X$. Then $X$ has a maximal element.

A natural partially ordered set $X$ is the set of linearly independent subsets of $V$, with the partial order $\subseteq$. Let $(\scS_i)_{i \in \scI}$ be a chain in $X$. We define

$$
\scS := \bigcup_{i \in \scI} \scS_i.
$$

Let $s_1,\ldots,s_k \in \scS$ and $a_1,\ldots,a_k \in K$ be arbitrarily given, such that $a_1 s_1 + \ldots + a_k s_k = 0$. Then for every $j \in \set{1,\ldots,k}$, there exists an index $i_j \in \scI$, such that $s_{j} \in \scS_{i_j}$. Since $(\scS_i)\_{i \in \scI}$ is a chain, there is a $j \in \set{1,\ldots,k}$ such that $s_1,\ldots,s_k \in \scS_{i_j}$. Since $\scS_{i_j}$ is linearly independent, we have that $a_1 = \ldots = a_k = 0$. So $\scS$ is also linearly independent. Clearly, $\scS_i \subseteq \scS$ for all $i \in \scI$, so $\scS$ is an upper bound of the chain in $X$.

By Zorn's lemma, $X$ has a maximal element $\scB$. Assume that $\scB$ were not a basis. Then we could extend it to a linearly independent set $\scB \cup \set{x}$. But $\scB \subsetneq \scB \cup \set{x}$, contradicting the maximallity of $\scB$. So $\scB$ is a basis for $V$.

## Every module over a division ring has a basis
Looking at the proof above, a single time we have used the fact that $K$ is a field instead of an 'ordinary' ring. Namely, that $-bx = a_1 s_1 + \ldots + a_k s_k \in U$ implies that $b= 0$. We proved this by multiplying by $-\frac{1}{b}$, which uses the fact that $b$ is invertible if $b \neq 0$. This can also be done in a divison ring though. The proof does not use the fact that the ring multiplication on $K$ is commutative, so one can readily copy the whole proof, and replace the field $K$ by a division ring $R$, and the $K$-vector space with a left $R$-module (since $R$ is not commutative, left and right modules are different, but one could also use right $R$-modules instead of left $R$-modules, if one wants to).

## Rings such that every left $R$-module is free
The follow-up question is, naturally, do any rings exist other than division rings such that every $R$-module is free? The answer is no:

> Let $R$ be a non-trivial ring. Every left $R$-module is free if and only if $R$ is a division ring.

This is quite an interesting characterisation of division rings. To prove the other direction, we consider a maximal left ideal $I \subseteq R$ (which exists by virtue of the axiom of choice, again). We let $M = R/I$, which is a left $R$-module, we let $\pi : R \to M$ be the projection map and consider a left-submodule $N \subseteq M$. Then $\pi^{-1}(N)$ is a left-ideal of $R$, such that $I \subseteq \pi^{-1}N$. But recall that $I$ is maximal, so either $\pi^{-1}N = I$ or $\pi^{-1}N = R$. This means either $N = (0)$ or $N = M$. Since $M \neq (0)$ since $I \neq R$, $M$ has exactly $2$ submodules (a module with exactly $2$ submodules is called a simple module). But per assumption, $M$ is also free, so there exists an index set $\scI$ such that $M \cong_R R^{(\scI)}$. Since $M$ is simple, $\text{\#} \scI = 1$ is only possible, so $M \cong_R R$.

In particular, we see that $R$ has only $2$ left $R$-submodules, i.e. $R$ has only two left ideals, namely $(0)$ and $R$. So let $r \in R$ be arbitrarily given, such that $r \neq 0$. Then $Rr$ is a non-zero left ideal of $R$, and thus $Rr = R$. Thus there exists an $a \in R$ such that $ar = 1$. In particular, $a \neq 0$, so there exists a $b \in R$, such that $ba = 1$. Then

$$
b = b \cdot 1 = bar = 1 \cdot r = r,
$$

so $r$ is invertible. We thus conclude that $R$ is a division ring.
