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

since it is analytic and for $k \in \Z\setminus \set{0}$, we have $\Res(f; k) = 1/k^{2n}$. We only need the residue at $0$. For this, we use the Laurent series of $\cot z$:

$$
\cot(z) = \sum_{k=0}^\infty \frac{(-1)^k 2^{2k}B_{2k}}{(2k)!}z^{2k-1} = 
\frac{1}{z} - \frac{1}{3}z - \frac{1}{45}z^3 - \frac{2}{945}z^5 + \scO(z^7).
$$

Here $B_{2k}$ are the Bernoulli numbers, the first few are given by

<!--- <center> --->

|  $k$  | $0$ |       $1$      |      $2$      | $3$ |       $4$       | $5$ |       $6$      | $7$ |       $8$       | $9$ |      $10$      | $11$ |         $12$        |
|:-----:|:---:|:--------------:|:-------------:|:---:|:---------------:|:---:|:--------------:|:---:|:---------------:|:---:|:--------------:|:----:|:-------------------:|
| $B_k$ | $1$ | $-\frac{1}{2}$ | $\frac{1}{6}$ | $0$ | $-\frac{1}{30}$ | $0$ | $\frac{1}{42}$ | $0$ | $-\frac{1}{30}$ | $0$ | $\frac{5}{66}$ |  $0$ | $-\frac{691}{2730}$ |

<!--- </center> --->

(There is also another convention, where $B_1 = \frac{1}{2}$). These can be calculated recursively, via

$$
\sum_{k=0}^m \binom{m+1}{k} = \delta_{0,m},
$$

or via a generating function:

$$
\frac{z}{e^z - 1 } = \sum_{k=0}^\infty B_k z^k.
$$

For simplicity, we write

$$
\cot(z) = \frac{1}{z}\sum_{k=0}^\infty a_{2k}z^{2k},\quad
a_{2k} = \frac{(-1)^k 2^{2k}B_{2k}}{(2k)!}.
$$

Then

$$
f(z) = \frac{\pi \cot(\pi z)}{z^{2n}} = \frac{1}{z^{2n+1}} + \frac{1}{z^{2n+1}}\sum_{k=0}^\infty \pi^{2k} a_{2k}z^{2k},
$$

so $\Res(f;0) = \pi^{2n} a_{2n}$.

## Estimating $\pi \cot(\pi z)$ on contours
For $k \in \Z_{\geq 1}$, we want to integrate around the residues in $-k, -k + 1,\ldots, k-1,k$. We define four paths, which together form such a contour:

- $\gamma_k^{(1)}$, which is the line segment from $k+\frac{1}{2}-ki$ to $k+\frac{1}{2}+ki$;
- $\gamma_k^{(2)}$, which is the line segment from $k+\frac{1}{2}+ki$ to $-k-\frac{1}{2}+ki$;
- $\gamma_k^{(3)}$, which is the line segment from $-k-\frac{1}{2}+ki$ to $-k-\frac{1}{2}-ki$.
- $\gamma_k^{(4)}$, which is the line segment from $-k-\frac{1}{2}-ki$ to $k+\frac{1}{2}-ki$;

Then the closed path $\gamma_k := \gamma_k^{(1)} \cup \gamma_k^{(2)} \cup \gamma_k^{(3)} \cup \gamma_k^{(4)}$ encompasses exactly the residues in $-k, -k + 1,\ldots, k-1,k$.

We want $\lim_{k \to \infty} \oint_{\gamma_k} f(z)\d{z}$ to go to zero. To show this, we have to estimate $\pi \cot(\pi z)$ on each path. On $\gamma_k^{(1)}$, we have for $-k \leq t \leq k$ that

$$
\abs{\pi \cot\prn{\pi \prn{k + \frac{1}{2} + t i}}} =
\pi \abs{\tan(\pi t i)} = \pi \abs{\tanh(\pi t)} \leq \pi,
$$

since $\tanh x$ is an increasing function on $\R$, and $\lim_{x \to \pm\infty} \tanh(x) = \pm 1$.

On $\gamma_k^{(2)}$, we find for $-k-\frac{1}{2} \leq t \leq k + \frac{1}{2}$ using the triangle inequality that

$$
\begin{aligned}
    \abs{\pi \cot\prn{\pi\prn{t + ki}}} &= 
    \pi\abs{\frac{e^{i\pi\prn{t+ki}}+e^{-i\pi\prn{t+ki}}}{e^{i\pi\prn{t+ki}}-e^{-i\pi\prn{t+ki}}}}\\
    &\leq \pi\frac{\abs{e^{i\pi\prn{t+ki}}}+\abs{e^{-i\pi\prn{t+ki}}}}{\abs{\abs{e^{i\pi\prn{t+ki}}}-\abs{e^{-i\pi\prn{t+ki}}}}}=
    \pi\frac{e^{-\pi k}+e^{\pi k}}{\abs{e^{-\pi k}-e^{\pi k}}} = \pi\coth(\pi k)\\
    &\leq \pi \coth \pi \leq \pi \coth(\ln 2) = \frac{5}{3}\pi \leq 2\pi.
\end{aligned}
$$

At the end, we have used that $\coth x$ is a decreasing function on $\R_{> 0}$, and that $k \geq 1$.

Since $\pi \coth(\pi z)$ is an odd function, analogous estimates hold for $\gamma_k^{(3)}$ and $\gamma_k^{(4)}$. Thus we conclude that for all $z \in \im \gamma_k$, we have $\abs{\pi \cot(\pi z)} \leq 2\pi$. For $f$, we find 

$$
\abs{f(z)} = \abs{\frac{\pi \cot(\pi z)}{z^{2n}}} \leq
\frac{2\pi}{\abs{z}^{2n}} \leq \frac{2\pi}{k^{2n}},\quad z \in \im \gamma_k.
$$

## The residue theorem
By the residue theorem, for $k \in \Z_{\geq 1}$ we have

$$
\oint_{\gamma_k} f(z)\d{z} = 2\pi i \sum_{m=-k}^k \Res(f; m) =
2\pi i \prn{\pi^{2n}a_{2n} + 2\sum_{m=1}^k \frac{1}{m^{2n}}}.
$$

On the other hand, using our estimate on $\gamma_k$ for $k$, we find

$$
\abs{\oint_{\gamma_k} f(z)\d{z}} \leq \frac{2\pi}{k^{2n}}\ell(\gamma_k) = \frac{2\pi}{k^{2n}}\cdot 2(2k + 2k+1) \leq \frac{20\pi}{k^{2n-1}}.
$$

By letting $k \to \infty$, we conclude that

$$
0 = \lim_{k \to \infty} \oint_{\gamma_k} f(z)\d{z} = \lim_{k \to \infty} 2\pi i \prn{\pi^{2n}a_{2n} + 2\sum_{m=1}^k \frac{1}{m^{2n}}} = 2\pi i\prn{\pi^{2n}a_{2n} + 2\zeta(2n)}.
$$

So finally, we have found the value of $\zeta(2n)$, namely

$$
\zeta(2n) = -\frac{\pi^{2n}}{2}a_{2n} = \frac{(-1)^{n+1} (2\pi)^{2n}B_{2n}}{2(2n)!} = \frac{(2\pi)^{2n}\abs{B_{2n}}}{2(2n)!}.
$$

In particular $\zeta(2) = \pi^2 B_{2} = \frac{\pi^2}{6}$ and $\zeta(4) = -\frac{\pi^4}{3}B_{4} = \frac{\pi^4}{90}$.

## More series
The above method can be generalised to account for more series than just $\zeta(2n)$. Let $g : \C \to \closure{\C}$ be a meromorphic function, i.e. an analytic function except for isolated singularities, which are poles. We want to calculate $\sum_{k=-\infty}^\infty g(n)$, c.f. $g(z) = \frac{1}{z^{2n}}$ in our previous calculation. So naturally, we consider the meromorphic function

$$
f(z) = \pi \cot(\pi z) g(z).
$$

We furthermore assume that on the paths $\gamma_k$, the inequality $\abs{g(z)} \leq \frac{A}{\abs{z}^{1+\varepsilon}}$ holds, for a fixed constant $A \in \C$ and for $k \geq 1$ big enough. This ensures that

$$
0 = \lim_{k \to \infty} \oint_{\gamma_k} f(z)\d{z} = 2\pi i\lim_{k \to \infty} S_k,
$$

where $S_k$ is the sum of residues of $f$ in the interior om $\gamma_k$. Since its closure is bounded, there are only finitely many residues inside $\gamma_k$. Thus we can order them in a (finite or infinite) sequence $ (r_i)_{i \in I} $, for $I \subseteq \N$. We furthermore assume that $\sum_{i \in I} r_i$ converges absolutely, so that we can rearrange the series as we like. This is automatically the case when $g$ has only finitely many poles, by virtue of $\abs{g(z)} \leq \frac{A}{\abs{z}^{1+\varepsilon}}$ on $\gamma_k$.

For $k \in \Z$ such that $g$ has no pole in $k$, we see that $\Res(f;k) = g(k)$. Let $N \subseteq \C$ be the pole set of $g$. Then we conclude that

$$
\sum_{k \in \Z \setminus N} g(k) = -\sum_{k \in N} \Res(\pi \cot(\pi z) g(z); k).
$$

From now on, we consider functions $g(z) = \frac{1}{p(z)}$, for $p \in \C[X]$ a polynomial of degree at least $2$. Then all conditions for $g$ are automatically satisfied.

Consider for instance $g(z) = \frac{1}{(\alpha-z)^2}$, for $\alpha \in \C\setminus \Z$. Then for all $z \in \C\setminus \Z$

$$
\sum_{k=-\infty}^\infty \frac{1}{(z-k)^2} = -\prn{\pi \cot(\pi z)}' = \frac{\pi^2}{\sin^2 (\pi z)}.
$$

From this we derive amongst others

$$
\sum_{k=-\infty}^\infty \frac{1}{(2k+1)^2} = \frac{\pi^2}{4},\quad
\sum_{k=-\infty}^\infty \frac{1}{(3k+1)^2} = \frac{4}{27}\pi^2,\quad
\sum_{k=-\infty}^\infty \frac{1}{(4k+1)^2} = \frac{\pi^2}{8},\quad
\sum_{k=-\infty}^\infty \frac{1}{(6k+1)^2} = \frac{\pi^2}{9}.
$$

Likewise, for $g(z) = \frac{\alpha}{\alpha^2 - z^2}$, $\alpha \in \C\setminus \Z$, we find a series representation for the cotangent:

$$
\sum_{k=-\infty}^\infty \frac{z}{z^2 - k^2} = -\prn{-\frac{z\pi \cot(\pi z)}{2z}+\frac{z\pi \cot(-\pi z)}{2z}} = \pi \cot(\pi z).
$$

Instead of $f$, we can also consider 

$$
\tilde{f}(z) = \frac{\pi}{\sin (\pi z)}g(z).
$$

$\pi\csc(\pi z) = \frac{\pi}{\sin (\pi z)}$ has the property that $\Res(\pi \csc(\pi z); k) = (-1)^k$ for $k \in \Z$.
Analogously, $\pi\csc(\pi z)$ still holds $\abs{\pi \csc(\pi z)} \leq 2\pi$ on $\gamma_k$,
so we get (under the same conditions on $g$)

$$
\sum_{k \in \Z \setminus N} (-1)^k g(k) = -\sum_{k \in N} \Res(\pi \csc(\pi z) g(z); k).
$$

Note that the Laurent series for $\csc(z)$ is given by

$$
\csc(z) = \frac{1}{z}\sum_{k=0}^\infty b_{2k}z^{2k} = \frac{1}{z} + \frac{1}{6}z + \frac{7}{360}z^3 + \frac{31}{15120}z^5 + \scO(z^7),\quad
b_{2k} = \frac{(-1)^{k+1} (2^{2k}-2)B_{2k}}{(2k)!}.
$$

As a last example, we will be calculating $\sum_{k=1}^\infty \frac{(-1)^{k+1}}{k^2}$. For this, we again choose $g(z) = -\frac{1}{z^2}$. Then

$$
\sum_{k=1}^\infty \frac{(-1)^{k+1}}{k^2} = \frac{1}{2}\Res\prn{\frac{\pi \csc(\pi z)}{z^2}} = \frac{\pi^2}{12}.
$$

{% comment %} 

## What about $\zeta(3)$?
A natural follow-up question is: what is $\zeta(2n+1)$? Unfortunately, the same trick as above does not work. The function $f(z) = \frac{\pi\coth(\pi z)}{z^{2n+1}}$ is now an odd function, so $\Res(f;-k) = -\Res(f;k)$, so the residues cancel. Taking only the residues in $k \geq 1$ does not solve the problem either, as the integral of $f$ over the line segment between $\frac{1}{2}+ki$ and $\frac{1}{2}-ki$ for $k \to \infty$ does not go to zero. Repeating the above procedure with this new path, we instead find

$$
-i\int_{-\infty}^\infty f\prn{\frac{1}{2}+ti}\d{t} =
\lim_{k \to \infty} \oint_{\gamma_k}f(z)\d{z} = 2\pi i \zeta(n).
$$

This can be rewritten as

$$
\zeta(n) = \frac{i}{2}\int_{-\infty}^\infty \frac{\tanh(\pi t)}{\prn{\frac{1}{2}+ti}^{n}}\d{t}.
$$

{% endcomment %} 

## An application: probability of coprimality
The Riemann zeta function $\zeta$ has deep connections with prime numbers. This is why the Riemann hypothesis is so important; the non-trivial zeros of $\zeta$ are related to the distribution of primes. I would like to show a much easier, but still really fun application of the Riemann zeta function. We shall be using our calculated value $\zeta(2) = \frac{\pi^2}{6}$.

Let $n \in \N$ be a (big) natural number, and consider two natural numbers $a,b \in \set{1,2,\ldots,n}$. What is the probability that $a$ and $b$ are coprime, i.e. $\gcd(a,b) = 1$? Let $p \leq n$ be a prime number. Then $\P(p \divides a) \approx \frac{1}{p}$. Then

$$
\P(\text{$a$ and $b$ do not share a factor $p$}) = 1-\P(p \divides a)\P(p \divides b) \approx 1-\frac{1}{p^2}.
$$

To be more precise, in $\set{1,2,\ldots,n}$, there are exactly $\floor{n/p}$ numbers that are divisible by $p$, so $\frac{1}{p}-\frac{1}{n} \leq \P(p \divides a) \leq \frac{1}{p}$, so 

$$
1-\frac{1}{p^2} \leq \P(\text{$a$ and $b$ do not share a factor $p$}) \leq 1 - \frac{1}{p^2} + \frac{2}{np} - \frac{1}{n^2}.
$$

From this, we have to multiply over all primes less than or equal to $n$:

$$
\prod_{\text{$p$ prime} : p \leq n} \prn{1-\frac{1}{p^2}} \leq \P(\gcd(a,b) = 1) \leq 
\prod_{\text{$p$ prime} : p \leq n} \prn{1-\frac{1}{p^2} + \frac{2}{np} - \frac{1}{n^2}}.
$$

What happens when $n$ becomes really big? We let $n \to \infty$. First, we take logarithms to turn the infinite products into series:

$$
\sum_{\text{$p$ prime} : p \leq n} \ln\prn{1-\frac{1}{p^2}} \leq \ln\P(\gcd(a,b) = 1) \leq 
\sum_{\text{$p$ prime} : p \leq n} \ln\prn{1-\frac{1}{p^2} + \frac{2}{np} - \frac{1}{n^2}}.
$$
