---
layout: post
title:  "The Basel problem"
---

In 1734 Euler showed that the infinite sum $\sum_{k=1}^\infty \frac{1}{k^2} = \frac{1}{1} + \frac{1}{4} + \frac{1}{9} + \ldots$ converges to $\frac{\pi^2}{6}$. The infinite sum

$$
\zeta(s) = \sum_{k=1}^\infty \frac{1}{k^s}
$$
is known as the 'Riemann zeta function', for $s \in \C$ such that $\Re s > 1$. The Riemann zeta function can be extended to an analytic function $\zeta : \C\setminus\set{1} \to \C$.

Thus Euler effectively calculated $\zeta(2)$. His method was 'factoring' the sine function in term of its roots, as

$$
\begin{aligned}
    \frac{\sin z}{z} &= \prn{1-\frac{z}{\pi}}\prn{1+\frac{z}{\pi}}\prn{1-\frac{z}{2\pi}}\prn{1+\frac{z}{2\pi}}\prn{1-\frac{z}{3\pi}}\prn{1+\frac{z}{3\pi}}\cdots\\
    &= \prod_{k=1}^\infty \prn{1-\frac{z^2}{k^2 \pi^2}}.
\end{aligned}
$$
Then by by considering the Taylor series of $\frac{\sin z}{z}$ and comparing terms, he concluded that $\zeta(2) = \frac{\pi^2}{6}$. His method can be extended to calculate $\zeta(2n)$, for $n \geq 1$ a natural number.

The problem is, however, is that he did not justify why $\sin z$ could be written as an infinite product of factors. The Weierstraß factorisation theorem (proved more than hundred years later by Karl Weierstraß) gave a justification. However, I would like to give a simpler proof, using the residue theorem.


