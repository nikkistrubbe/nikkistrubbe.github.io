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

The problem is, however, is that he did not justify why $\sin z$ could be written as an infinite product of factors. The Weierstraß factorisation theorem (proved more than hundred years later by Karl Weierstraß) gave a justification. However, I would like to give a simpler way to calculate $\zeta(2n)$, using the residue theorem.

## Constructing a suitable function
We would like to construct an analytic function, with residues in $\Z$, which are proportional to $1/k^{2n}$ in $k \in \Z \setminus \set{0}$. Then we want to integrate over an appopriate contour and use the residue theorem. If we are lucky, we can make the contour bigger and bigger, and in the limit the integral over the contour goes to zero. Then we can relate the sum of all residues in $\Z\setminus \set{0}$ with the residue at $0$, and get a value of $\zeta(2n)$.

We consider the function $\cot (\pi z) = \frac{\cos (\pi z)}{\sin (\pi z)}$. It is analytic and $1$-periodic, and it has simple poles at $\Z$. These are given by

$$
\Res\prn{\cot(\pi z); k} = \lim_{z \to k} (z-k)\cot(\pi z) = 
\lim_{z \to 0} z\cot(\pi z) = \lim_{z \to 0} \prn{\frac{\pi z}{\sin (\pi z)}\cdot \frac{1}{\pi}\cos(z)} = \frac{1}{\pi}.
$$

Thus the function we want to look at is

$$
f(z) = \frac{\pi \cot(\pi z)}{z^{2n}},
$$

since it is analytic and for $k \in \Z\setminus \set{0}$, we have $\Res(f; k) = \frac{1}{k^{2n}}$. We only need the residue at $0$. For this, we use the Laurent series of $\cot$:

$$
\cot(z) = \sum_{k=0}^\infty \frac{(-1)^k 2^{2k}B_{2k}}{(2k)!}z^{2k-1} = 
\frac{1}{z} - \frac{1}{3}z - \frac{1}{45}z^3 - \frac{2}{945}z^5 + \scO(z^7).

$$

Here $B_{2k}$ are the Bernoulli numbers, the first few are given by

| $n$   | $0$ | $1$            | $2$           | $3$ | $4$             | $5$ | $6$            | &7& | &8&             | &9& | $10$           | $11$ | $12$                |
|-------|-----|----------------|---------------|-----|-----------------|-----|----------------|-----|-----------------|-----|----------------|------|---------------------|
| $B_n$ | $1$ | $-\frac{1}{2}$ | $\frac{1}{6}$ | $0$ | $-\frac{1}{30}$ | $0$ | $\frac{1}{42}$ | $0$ | $-\frac{1}{30}$ | $0$ | $\frac{5}{66}$ | $0$  | $-\frac{691}{2730}$ |

