[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## My Analysis

$$
T(n) = \begin{cases}
1+n & n<3 \\
1+3T(\frac{n}{3}) & \text{else}
\end{cases} \qquad
\begin{align*}
T(n) &= 1 + 3T(\frac{n}{3}) \\
&= 1+3(1+3T(\frac{n}{9})) = 1+3+9T(\frac{n}{9}) \\
&= 1+3+9(1+3T(\frac{n}{27}))=1+3+0+27T(\frac{n}{27}) \\
&\qquad\vdots \\
&=\sum_{j=1}^{i}3^{j-1}+3^iT(\frac{n}{3^i}) \\
&\qquad \frac{n}{3^i}<3 \to i=\log_3 \frac{n}{2} \\
&=\sum_{j=1}^{\log_3 \frac{n}{2}}3^{j-1}+3^{\log_3 \frac{n}{2}}T(\frac{n}{3^{\log_3 \frac{n}{2}}}) =\frac{n-2}{4}+\frac{1}{2}nT(2) \\
&=\frac{n-2}{4}+\frac{1}{2}n(1+n) \in\Theta(n^2)
\end{align*}
$$

My function as implemented is a element of $\Theta(n^2)$, but because the base case includes a $n<3$ which can reasonably approximated as constant, I feel my function could belong to $\Theta(n)$.