---
title: 一个有趣的小问题
tags: 
  - 统计学
  - 随机过程
---

<style>
p{
text-indent: 2em; /*首行缩进*/
}
</style>

最近在知乎看到一个有趣的问题：一个数从1开始，每次各有50%的概率乘0.9或者乘1.1，重复足够多的次数以后，情况会如何？

这个问题是作者从股市涨跌停开始想到的。一个涨停后跌停，或者跌停后涨停（涨跌停板均按10%算），所得价格只有原价格的99%。可是通过计算2次操作的数学期望，作者发现25%两个涨停（1.21），50%一涨停一跌停（0.99），25%两个跌停（0.81），最终的数学期望居然还是1。然后作者又计算了一下三次操作，E（X）仍为1。可是作者认为如果按照“涨停和跌停的概率相等”，每次涨停对应一次跌停，那么平均每两次操作数值会变为原来的99%，如此重复的话，最终的结果会趋近于0才对。

这是怎么回事呢？

先说结论：根据鞅的性质很容易看出期望就是1，但是该值趋向于0的概率也为1。

下面转载[作者jsxie的一个不错的回答](https://www.zhihu.com/question/422873282/answer/1965092723)：

这个问题很简单，我们设初始股本为 $S0=1$ 单位货币.假定 $X_n$ 为第 $n$ 日收盘时的涨幅，其中

$$
X_n \stackrel{\text { i.i.d. }}{\sim}\left(\begin{array}{rr}
-0.1 & 0.1 \\
1 / 2 & 1 / 2
\end{array}\right) .
$$

那么 第 $n$ 日收盘时账面股本为 

$$S_n=S_0 \cdot (1+X_1)   \cdots (1+X_n). $$

以 $\mathcal{F}_n:=\sigma\left(S_k: k \leq n\right)$ 表示自然流，那么在假设条件下，

$$\mathbb{E} [S_{n+1} \big| \mathcal{F}_n]=S_n \cdot \mathbb{E} [(1+X_{n+1}) \big| \mathcal{F}_n]=S_n,$$

也就是说，在设定的市场情况以及投资人持股不动的策略下，平均角度投资人并不赚钱，也不亏钱，账面股本形成的过程是一个鞅（Martingale）。

虽然平均角度不赚不亏，但是我们容易知道长期下来投资者最终是要亏光本金的：

$$S_n \stackrel{n \to \infty}{\longrightarrow} 0, 几乎处处。$$ 

原因如下：根据Kolmogorov强大数定律, 

$$\frac{1}{n}\sum_{k=1}^n \log (1+X_k) \stackrel{n \to \infty}{\longrightarrow} \mathbb{E} [\log (1+X_1)]<0,$$ 

进而

$$S_n=\exp\{\sum_{k=1}^n \log (1+X_k)\} \stackrel{n \to \infty}{\longrightarrow} 0 \quad 几乎处处成立.$$ 

我们甚至可以修改上面分布律，确保平均角度投资者是赚钱的，但他长期下来却会破产，例如，假设上面模型中

$$X_n \stackrel{\rm i.i.d.}{\sim} \left(\begin{array}{rc}  -0.1 & 0.1\\  19/39 & 20/39 \end{array}\right).$$ 

此时 

$$\mathbb{E} [S_{n+1} \big| \mathcal{F}_n]=q S_n, q=1+\frac{0.1}{39}>1,$$ 

从而 $\{S_n\}_{n=0}^\infty$ 是一个下鞅，

$$\mathbb{E} [S_n]=q^n \to \infty,$$ 

平均角度而言看似投资人长期下来要发财；但是根据Kolmogorov强大数定律,

$$
\begin{aligned}
\frac{1}{n} \sum_{k=1}^n \log \left(1+X_k\right) & \stackrel{n \rightarrow \infty}{\longrightarrow} \mathbb{E}\left[\log \left(1+X_1\right)\right] \\
& =\frac{19}{39} \log 0.9+\frac{20}{39} \log 1.1 \\
& \approx-0.00245<0,
\end{aligned}
$$

进而投资人长期下来会亏光老婆本

$$S_n=\exp\{\sum_{k=1}^n \log (1+X_k)\} \stackrel{n \to \infty}{\longrightarrow} 0 \quad 几乎处处成立.$$ 

上述投资策略的表现其实是有点差的：虽然平均角度似乎是赚钱的，但一旦行情不好就会回撤过大，从而盈利实际上并不稳定。其原因之一就在于这是一种All-In的赌博，且风暴比并不理想。在实际投资中建议投资人做好仓位管理，从而有效地控制回撤。