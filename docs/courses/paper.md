**Boosting Ergotropy of a Pure Dephasing Quantum Battery via a Measurement and Feedback Protocol**

Lu Hou^1,2,^[^1], Chaoquan Wang^3^, Yongshun Song^1^

1 Department of Information Engineering, Changzhou Vocational Institute of Industry, Technology, Changzhou 213164, Jiangsu, China

2 School of Physical Science and Technology, Yangzhou University, Yangzhou 225009, Jiangsu, China

3 Department of Physics, East China University of Technology, Nanchang 330000, Jiangxi, China

## Abstract

Quantum batteries are energy storage devices that exploit quantum resources to enhance the extractable work. In realistic situations, the interaction with the environment can reduce coherence and inhibit battery performance, nevertheless, the information backflow from non-Markovian environments can recover the lost energy. Therefore, in this paper, we investigate how projective measurements and feedback can boost the maximum extracted work, i.e., the ergotropy, of a qubit battery under a non-Markovian pure dephasing environment. We derive the optimal measurement basis for a single-shot measurement method and show that the average work always surpasses the ergotropy without measurement. Extending the method to a sequence of measurements, the results demonstrate that the extractable work grows monotonically with the number of measurements, exhibiting a diminishing-return saturation governed by the finite environmental memory. To quantify the consumed resource, we introduce the non-Markovianity and obtain the equality between it and the direct extractable work of the quantum battery. Our numerical results reveal a staircase decay of the effective non-Markovianity under the control of a non-selective measurement sequence, corresponding to the growth of the extractable work, and confirm that non-Markovianity acts as a consumable thermodynamic resource. Our protocol bridges the theory of open quantum systems and quantum thermodynamics and shows how structured environments and quantum measurements can be combined to realize controllable quantum batteries.

**Keywords:** quantum battery, extractable work, measurement protocol, non-Markovianity, pure dephasing environment

## 1. Introduction

How to efficiently store and extract energy from quantum devices is a critical challenge in the emerging field of quantum thermodynamics. A quantum battery (QB), as a finite-dimensional quantum system, has attracted considerable attention to understand the fundamental properties and practical implementations of quantum batteries \[1-10\]. Many studies have been devoted to realize quantum batteries experimentally on various platforms, such as superconducting quantum circuits \[11, 12\], photonic systems \[13, 14\], and trapped ions \[15\]. QB outperforms conventional batteries in the charging power and the extracted work due to the genuine quantum features, for example, quantum coherence and entanglement \[1, 16-19\]. More broadly, the performance of a QB during its charging, storage, and discharging cycle can be improved by a variety of external measurement-based techniques. Some studies have proven that projective measurements can enhance the performance of quantum batteries \[20, 21\]. Additionally, quantum feedback control strategies are demonstrated as effective methods for the energy storage of QBs \[22, 23\]. It has been evaluated that quantum optimal control is also a crucial protocol to improve QBs. When applying the convergent iterative optimal method, both the power and efficiency of the charging process can be substantially increased \[24\].

On the other hand, the external environments could influence the property of a QB, and the dynamics of energy storage and work extraction are governed by the interaction between coherence and dissipation from environmental effects. For the condition of Markovian dynamics, regardless of information backflow from the external environment, several studies have explored how open batteries can be satisfactorily charged and exhibit a higher maximum extractable work \[25-27\]. For non-Markovian dynamics, in which the environment has memory, there also have been many investigations to probe its influence on QBs. For example, the study by Salimi *et al.* showed that environmental non-Markovianity can suppress intrinsic discharge processes in quantum batteries \[28\]. For a bosonic environment, a QB can be fully charged and its energy can be preserved for long times in non-Markovian dynamics compared with Markovian dynamics \[29\]. Moreover, by manipulating some parameters of the open systems, energy extraction in QBs can be effectively controlled \[30-32\]. However, the above results of QBs in both Markovian and non-Markovian environments have so far focused on dynamical analyses, and an exploration of external measurement and feedback control remains absent. Although it has been shown that projective measurements can enhance the extractable work of many QB models, the question of how to actively harvest environmental information backflow to boost battery performance under continuous dissipative evolution, especially in a non-Markovian pure dephasing scenario, has not been addressed. Furthermore, the quantitative relation between the extractable work of a QB and the non-Markovian property of the system remains completely unexplored.

In this paper, we propose a measurement and feedback protocol on a qubit battery subject to a pure dephasing bosonic environment with a Lorentzian spectral density, which allows for an exact analytical treatment of the decoherence dynamics in the non-Markovian regime. We derive the optimal measurement basis that maximizes the average extracted work, and reveal that the external measurement intervention yields a substantial gain over the extractable work without measurement, even when the coherence has almost vanished. Moreover, by inserting several adaptive projective measurements during the evolution, we demonstrate that the work can be further increased, with each additional measurement harvesting a fraction of the coherence revived by the non-Markovian information backflow. The average work is shown to grow monotonically with the number of measurements, however, with a diminishing marginal return that reflects the finite capacity of the environmental memory. Additionally, we obtain an equality between the non-Markovianity and the direct extractable work from the QB, and by employing a sequence of non-selective measurements, our numerical results reveal a clear staircase decay of the non-Markovianity as measurements are added, which perfectly complements the work increase, thereby confirming that non-Markovianity is indeed a resource that is gradually consumed and converted into the extractable energy of the QB.

The manuscript is organized as follows. In Sec. 2, we introduce the model of a qubit battery under a pure dephasing environment, and obtain the exact solution of the dynamics. In Sec. 3, the optimal extracted work, i.e., the ergotropy of the QB, is derived, and we investigate its variation with the parameters of the bosonic bath. We study the single-shot optimal measurement-and-feedback protocol and the analytical optimization of the measurement basis in Sec. 4. Furthermore, we extend the protocol to multiple measurements, and discuss the numerical results and the saturation behavior of the average extractable work in this section. Section 5 is devoted to the character of non-Markovianity, which is evaluated by the BLP measure. We study the effective non-Markovianity under the non-selective measurement sequence and the relation between non-Markovianity and ergotropy. Finally, we give the conclusion in Sec. 6.

## 2. Model of a quantum battery system

The QB in our research is composed of a single two-level system, i.e., a qubit, of which the free Hamiltonian is given by

$H_{s} = \frac{\omega_{0}}{2}\sigma_{z}$ (1)

where $\omega_{0} > 0$ denotes the stored energy. The charged and uncharged states of the QB can be described as the eigenstates of the Pauli operator $\sigma_{z}$ \[4, 33\]. The battery system is coupled with a bosonic reservoir, and it can induce a pure dephasing process. Therefore, the total Hamiltonian reads

$H = H_{s} + H_{B} + H_{I}$ (2)

with the Hamiltonian of the reservoir $H_{B}$ and the Hamiltonian of the interaction between the QB and the bosonic bath are expressed as

$H_{B} = \sum_{k}^{}{\omega_{k}b_{k}^{\dagger}b_{k}}$,

$H_{I} = \sigma_{z} \otimes \sum_{k}^{}{g_{k}\left( b_{k} + b_{k}^{\dagger} \right)}$ (3)

Here, $b_{k}\left( b_{k}^{\dagger} \right)$ are the annihilation (creation) operators of the *k*-th bath mode with frequency $\omega_{k}$, and $g_{k}$ is the coupling strength between the qubit and the bosonic bath. It is easy to get the commutation relation of the pure dephasing model, i.e., $\left\lbrack H_{s},H_{I} \right\rbrack = 0$, which guarantees that the energy populations of the quantum battery are strictly conserved. As a consequence, the bosonic environment can only influence the quantum coherence of the qubit system.

The battery is initially prepared in the following superposition state

$\rho_{s}(0) = \begin{pmatrix}
\cos^{2}\frac{\theta}{2} & \frac{1}{2}\sin\theta \\
\frac{1}{2}\sin\theta & \sin^{2}\frac{\theta}{2}
\end{pmatrix}$ (4)

The diagonal elements give the populations of the excited state and ground state $p_{e}(0) = \cos^{2}\frac{\theta}{2}$ and $p_{g}(0) = 1 - p_{e}(0) = \sin^{2}\frac{\theta}{2}$, respectively, while the off-diagonal elements denote the initial quantum coherence $\rho_{eg}(0) = \frac{1}{2}\sin\theta$. Both populations and coherence determine the amount of work that can be extracted from the battery.

Governed by the Hamiltonian in Eq. (2), the time evolution of the qubit takes the exact form \[34-36\]

$\rho_{s}(t) = \begin{pmatrix}
\rho_{ee}(0) & \rho_{eg}(0)e^{- \gamma(t)} \\
\rho_{ge}(0)e^{- \gamma(t)} & \rho_{gg}(0)
\end{pmatrix}$ (5)

where the dephasing function $\gamma(t)$ is decided by a general spectral density $J(\omega)$ and the environmental temperature *T*, which is denoted by

$\gamma(t) = \int_{0}^{\infty}{d\omega J(\omega)}{\cot h}\left( \frac{\hslash\omega}{2k_{B}T} \right)\frac{1 - \cos(\omega t)}{\omega^{2}}$ (6)

Here, we set the Boltzmann constant $k_{B} = 1$, and the mode frequencies $\omega_{k}$ of different environmental baths in Eq. (3) are set to an identical value $\omega$ \[34, 37\]. Throughout this work we focus on a structured environment described by a Lorentzian spectral density \[38, 39\]

$J(\omega) = \frac{\alpha}{2\pi}\frac{\lambda^{2}}{\left( \omega - \omega_{c} \right)^{2} + \lambda^{2}}$ (7)

where $\alpha$ quantifies the coupling strength, $\lambda$ is the spectral width, and $\omega_{c}$ is the central frequency. Considering the zero-temperature limit $T \rightarrow 0$, leading to ${\cot h}\left( \hslash\omega/2k_{B}T \right) \rightarrow 1$, the integral in Eq. (6) can be analytically evaluated as

$\gamma(t) = \frac{\alpha\lambda}{2}\left\lbrack 1 - e^{- \lambda t}\left( \cos\left( \omega_{c}t \right) + \frac{\lambda}{\omega_{c}}\sin\left( \omega_{c}t \right) \right) \right\rbrack$ (8)

If the above dephasing function satisfies the condition $\lambda \ll \omega_{c}$, $\gamma(t)$ could show an obvious oscillatory behavior, which corresponds to a strongly non-Markovian memory effect. Depending on the above analytical result of the dissipative dynamics of the quantum battery, in what follows, we calculate the ergotropy obtained from this energy storage system.

## 3. Extractable work of quantum battery

The energy storage in QB during the discharging process is defined as

$\Delta E(t) \equiv Tr\left\lbrack \rho_{s}(t)H_{s} \right\rbrack - Tr\left\lbrack \rho_{s}(0)H_{s} \right\rbrack$ (9)

where the first term on the LHS of the equation denotes the mean energy of the battery state. However, as the second law of thermodynamics, not all energy can be extracted from the battery. The maximum work that can be extracted from a given battery state $\rho_{s}(t)$ is quantified by the *ergotropy* \[40, 41\]

$\mathcal{W}\left( \rho_{s} \right) = Tr\left( \rho_{s}H_{s} \right) - \min_{U}Tr\left( U\rho_{s}U^{\dagger}H_{s} \right)$ (10)

where the minimal energy is performed over all cyclic unitary operators *U* acting on the system, and the first term represents the average energy of the state. By diagonalizing $H_{s}$ and $\rho_{s}(t)$, one can get the spectral decompositions as $\rho_{s}(t) = \sum_{j}^{}{\lambda_{j}\left| \lambda_{j} \right\rangle\left\langle \lambda_{j} \right|}$ and $H_{s} = \sum_{j}^{}{E_{j}\left| e_{j} \right\rangle\left\langle e_{j} \right|}$. The eigenvalues of $\rho_{s}$are arranged in descending order as $\lambda_{1} \geq \lambda_{2} \geq ... \geq \lambda_{j} \geq \lambda_{j + 1} \geq ...$, and the eigenvalues of $H_{s}$ are arranged in ascending order as $E_{1} \leq E_{2} \leq ... \leq E_{j} \leq E_{j + 1} \leq ...$. The passive states which are incapable of giving out energy by any cyclic Hamiltonian process is ${\widetilde{\rho}}_{s} = \sum_{n}^{}{\lambda_{n}\left| e_{n} \right\rangle}\left\langle e_{n} \right|$. Therefore, the ergotropy can be expressed as

$\mathcal{W}\left( \rho_{s} \right) = \sum_{m,n}^{}{\lambda_{m}E_{n}\left( \left| \left\langle \lambda_{m} \middle| e_{n} \right\rangle \right|^{2} - \delta_{mn} \right)}$ (11)

For the pure dephasing model governed by the Hamiltonian in Eq. (3), we set the time-independent populations as $p_{e}(t) = p_{e}(0) = \rho_{ee}(0)$, and coherent term as $\rho_{eg}(0)e^{- \gamma(t)}$. Resorting to the above equation of ergotropy, it is easy to obtain the expression of extractable work as

$\mathcal{W}_{direct}(t) = \frac{\omega_{0}}{2}\left( \sqrt{\left( 2p_{e}(0) - 1 \right)^{2} + 4\left| \rho_{eg}(0) \right|^{2}e^{- 2\gamma(t)}} - \left( 1 - 2p_{e}(0) \right) \right)$ (12)

For the maximally coherent initial state, the value of $p_{e}(0)$ is 1/2, and $\rho_{eg}(0)$ equals 1/2, which simplifies the ergotropy expression as

$\mathcal{W}_{direct}(t) = \frac{\omega_{0}}{2}e^{- \gamma(t)}$ (13)

Eqs. (12) and (13) establish a direct connection between the extractable work $\mathcal{W}(t)$ and the dephasing function $\gamma(t)$. The following figures show distinct trends of the ergotropy with the evolution time when different parameters are changed.

We first examine the evolution of ergotropy under different conditions of qubit-bath coupling strength $\alpha$ in Fig. 1(a). It is clear that the ergotropy undergoes an obvious damped oscillation with the change of evolution time, during which the extractable work partially recovers. This behavior is a signature of information backflow from the environment to the system. Furthermore, as the coupling strength increases, the ergotropy decays towards a smaller asymptotic value, since the overall amplitude of the dephasing function $\gamma(t)$ grows proportionally with the factor $\alpha\lambda/2$ in Eq. (8). Physically, a stronger coupling enhances the effective dephasing rate, which leads to more coherence leaking out of the battery.

In addition, the influence of spectral width $\lambda$ on ergotropy is demonstrated in Fig. 1(b). The spectral width characterizes the correlation time of the bath, with $\lambda^{- 1}$ being the memory timescale. When the value of $\lambda$ is small, the environment is highly non-Markovian, and $\gamma(t)$ exhibits pronounced oscillations before eventually tending to a stable value. Correspondingly, the ergotropy displays obvious revivals as a function of time. As $\lambda$ increases, the environmental memory time shortens, and the oscillations of $\gamma(t)$ vanish. Therefore, the ergotropy decays almost monotonically and rapidly reaches a low steady value. This trend reflects that a broader spectral width may suppress the possibility of information backflow.

In Fig. 1(c), we study the effect from central frequency $\omega_{c}$. For small $\omega_{c}$, the ergotropy decays nearly monotonically without visible revivals. As $\omega_{c}$ increases, distinct oscillations appear in the ergotropy. Also, it is evident that the long-time stationary value of the ergotropy is independent of $\omega_{c}$, since according to Eq. (8), we can find $\gamma(t \rightarrow \infty) = \alpha\lambda/2$, so that $W_{direct}(\infty) = \frac{\omega_{0}}{2}e^{- \alpha\lambda/2}$, which is irrespective of $\omega_{c}$. Thus, the frequency of the environmental modes cannot change the ultimate extractable work, although it can strongly affect the transient dynamics and information backflow.

![](media/media/image1.png)

(a) $\lambda = 0.1,\omega_{c} = 1$

![](media/media/image2.png)

(b) $\alpha = \omega_{c} = 1$

![](media/media/image3.png)

(c) $\alpha = 1,\lambda = 0.1$

Figure 1. The dynamics of ergotropy under different parameters. (a) Different values of coupling strength $\alpha$: $\alpha = 1$ (green solid line), $\alpha = 0.5$ (blue solid line), and $\alpha = 0.1$ (purple solid line). Other parameters are set as $\omega_{0} = 1$, $\lambda = 0.1$, and $\omega_{c} = 1$. (b) Different values of spectral width $\lambda$: $\lambda = 0.1$ (red solid line), $\lambda = 0.5$ (green solid line), and $\lambda = 1$ (blue line). Other parameters are set as $\alpha = \omega_{c} = 1$. (c) Different values of the central frequency $\omega_{c}$: $\omega_{c} = 0.1$ (purple dotted line), $\omega_{c} = 0.5$ (green dashed line) and $\omega_{c} = 1$ (blue solid line). Other parameters are set as $\alpha = 1$ and $\lambda = 0.1$.

## 4. Ergotropy of the QB under measurement protocol

### 4.1 Single-shot optimal selective measurement and feedback

Many studies have indicated that measurement protocols can improve the performance of quantum batteries \[20, 21, 42\]. Here, we investigate how a selective measurement and feedback can assist the extractable work of the QB by performing a projective measurement on the central qubit at a chosen evolution time *t*, and the outcome after measurement is used to determine the final unitary operation.

The selected orthogonal projective bases are chosen as $\left\{ \prod_{+},\prod_{-} \right\}$ at the evolution instant $t$. We measure the qubit along a unit vector $n = \left( n_{x},n_{y},n_{z} \right)$ on the Bloch sphere, therefore, the corresponding projectors are

$\prod_{\pm} = \frac{1}{2}(I \pm n \cdot \sigma)$. (14)

The probability of the outcome $m = \pm 1$ after projective measurement is

$p_{m} = Tr\left\lbrack \rho(t)\prod_{m} \right\rbrack = \frac{1}{2}\left( 1 + mn \cdot r(t) \right)$. (15)

where $r(t)$ is the Bloch vector of the qubit in Eq. (5) before measurement. If we use the energy eigenvectors as measurement basis, the excited population of the qubit is $p_{e} = \left\langle e \right|\rho_{m}\left| e \right\rangle$, and the density matrix of the battery after measurement is $\rho_{m} = \frac{1}{2}(I + mn \cdot \sigma)$. By substituting the expression of $\rho_{m}$, it is natural to obtain the expression of the qubit's excited population as

$p_{e}^{m} = \frac{1}{2}\left( 1 + mn_{z} \right)$ (16)

Here, with the measurement result *m*, the post-measurement state of the qubit collapses to the pure state $\left| \psi_{m} \right\rangle$. For the purpose of extracting maximal work from the battery, the optimal feedback operation is a unitary rotation that changes the state $\left| \psi_{m} \right\rangle$ into $\left| g \right\rangle$, and under the condition of the outcome *m*, the maximal extractable work, i.e., ergotropy can be written as

$\mathcal{W}_{m} = \omega_{0}p_{e}^{m} = \frac{\omega_{0}}{2}\left( 1 + mn_{z} \right)$ (17)

Resorting to Eqs. (15) and (17), the average maximal extractable work obtained after the measurement protocol is

$\left\langle \mathcal{W}_{m} \right\rangle = p_{+}\mathcal{W}_{+} + p_{-}\mathcal{W}_{-} = \frac{\omega_{0}}{2}\left\lbrack 1 + (n \cdot r)n_{z} \right\rbrack$ (18)

The expression shows that the state vector $r$ before measurement and the choice of measurement direction $n$ can both influence the ergotropy.

The maximal value of $\left\langle \mathcal{W}_{m} \right\rangle$ depends on the term $f(n) = (n \cdot r)n_{z}$, therefore, we must find the unit vector ***n*** that can maximize the expression. Resorting to Eq. (5), the Bloch vector of the qubit is written as

$r_{x}(t) = 2{Re}\left\lbrack \rho_{eg}(0) \right\rbrack e^{- \gamma(t)}$,

> $r_{y}(t) = - 2{Im}\left\lbrack \rho_{eg}(0) \right\rbrack e^{- \gamma(t)}$, $r_{z} = 2p_{e}(0) - 1$. (19)

It is evident that under pure dephasing, the *z* component $r_{z}$ is a constant, and the *y* component $r_{y} = 0$, which indicates that the evolution vector of the qubit lies in the *xz*-plane. The measurement unit vector can be represented by the polar $\alpha$ and the azimuthal angle $\phi$, i.e., $n = \left( \sin\alpha\cos\phi,\sin\alpha\sin\phi,\cos\alpha \right)$. Since ***r*** has no *y*-component, the dot product $n \cdot r$ could be maximized by choosing $\phi = 0$, that is to say, ***n*** also lies in the *xz*-plane. The function $f(n)$ is expressed as

$$
\begin{aligned}
f(\alpha) = \left( r_{x}\sin\alpha + r_{z}\cos\alpha \right)\cos\alpha = \frac{r_{z}}{2} + \frac{1}{2}\left( r_{x}\sin 2\alpha + r_{z}\cos 2\alpha \right) (20)
\end{aligned}
$$

By using the identity of trigonometric function $r_{x}\sin 2\alpha + r_{z}\cos 2\alpha = \sqrt{r_{x}^{2} + r_{z}^{2}}\cos(2\alpha - \delta)$, with $\tan\delta = r_{x}/r_{z}$, it is clear to obtain the maximal value of $f(\alpha)$ when $\cos(2\alpha - \delta) = 1$, corresponding to the optimal angle $\tan 2\alpha_{opt} = r_{x}/r_{z}$. We can get the maximal value of $f(\alpha)$ by substituting the optimal angle

$f\left( \alpha_{\mathrm{opt}} \right)_{\max} = \frac{r_{z} + |r|}{2}$ (21)

where $|r| = \sqrt{r_{x}^{2} + r_{z}^{2}}$ represents the purity of the state. Hence, the optimal average work of the single-shot measurement and feedback protocol is given as

$\left\langle \mathcal{W} \right\rangle_{opt} = \frac{\omega_{0}}{4}\left( 2 + r_{z} + |r| \right)$. (22)

Considering the initial state of the qubit and Eq. (19), the detailed expression of $\left\langle \mathcal{W} \right\rangle_{opt}$ is shown as

$\left\langle \mathcal{W} \right\rangle_{opt} = \frac{\omega_{0}}{4}\left( 2 + \cos\theta + \sqrt{\left( e^{- \gamma(t)}\sin\theta \right)^{2} + \cos^{2}\theta} \right)$ (23)

It is evident that the initial state has a marked impact on the optimal extractable work. If the state is fully excited, then $\left\langle \mathcal{W} \right\rangle_{opt} = \omega_{0}$, which indicates that the total stored energy can be extracted from the battery. If the state is in a maximally coherent state with $p_{e}(0) = 1/2$ and $\rho_{eg}(0) = 1/2$, we have the corresponding optimal average extractable work

$\left\langle \mathcal{W} \right\rangle_{opt} = \frac{\omega_{0}}{2} + \frac{\omega_{0}}{4}e^{- \gamma(t)}$ (24)

To investigate whether the measurement protocol could enhance the ergotropy of the battery, we compare the direct extractable work and the optimal average extractable work influenced by measurement in Fig. 2. As the figure depicts, our measurement and feedback protocol is useful for increasing the extractable work of the battery, since there is an obvious gap between the results of direct ergotropy and the optimal counterpart. The enhancement comes from the information-assisted work extraction stemming from the measurement protocol, since the projective measurement converts part of the quantum coherence into extractable work, and even if the coherent factor $e^{- \gamma(t)}$ vanishes, the ergotropy could also be extracted.

![](media/media/image4.png)

Figure 2. The variations of direct ergotropy (blue line) and the optimal ergotropy after measurement protocol (red line) with time. The initial state of the qubit is set as maximal coherence. Here, the other parameters are $\alpha = 0.5$, $\omega_{0} = 1$, $\lambda = 0.1$, and $\omega_{c} = 1$.

Resorting to Eq. (12) and (22), the difference between the ergotropy with and without selective measurement control is expressed as

$\left\langle \mathcal{W} \right\rangle_{opt} - \mathcal{W}_{direct} = \frac{\omega_{0}}{4}\left( 2 - |r| - r_{z} \right)\quad\left( p_{e} \geq 1/2 \right)$ (25)

To keep the result under selective measurement protocol outperforming the direct ergotropy, i.e., $\left\langle \mathcal{W} \right\rangle_{opt} - \mathcal{W}_{direct} \geq 0$, the inequality satisfies $|r| + r_{z} \leq 2$, with equality only for the pure excited state, and it is easy to evaluate that the maximal coherent state just makes the inequality hold.

### 4.2 Protocol of multiple selective measurements and feedback

The above result shows that the single-shot protocol can enhance ergotropy by transforming coherence into additional extractable work. However, a single measurement only exploits the instantaneous coherence present at time *t*. In a non-Markovian environment, coherence can partially flow back to the system at later times, which suggests that a sequence of measurements could harvest the information backflow multiple times, thereby further increasing the total average extractable work. In this section, we design and analyze such a multiple measurement protocol.

Consider a fixed total evolution time *T* and perform *k* measurements ($k = 1,2,...,K$) interspersed with the evolution process $0 < t_{1} < t_{2} < \cdots < t_{K} = T$. The initial state of the battery is prepared in the same form as Eq. (4), and for the maximally coherent state used in the numerical evaluation the Bloch vector $r_{0} = (1,0,0)$. The battery evolves freely from the previous instant $t_{k - 1}$ (with $t_{0} = 0$) to $t_{k}$. During this evolution interval $\tau_{k} = t_{k} - t_{k - 1}$, the Bloch vector evolving under pure dephasing environment is expressed as

$r\left( t_{k}^{-} \right) = \left( r_{x}\left( t_{k - 1}^{+} \right)e^{- \gamma\left( \tau_{k} \right)},r_{y}\left( t_{k - 1}^{+} \right)e^{- \gamma\left( \tau_{k} \right)},r_{z}\left( t_{k - 1}^{+} \right) \right)$ (26)

where the superscripts +/- of $t_{k}$ and $t_{k - 1}$ denote the instant before and after a measurement. We suppose that at an arbitrary instant $t_{k}$ a projective measurement is performed. The measurement basis is chosen adaptively according to the Bloch vector in Eq. (26). Based on the analysis in the above section, the optimal unit vector $n_{k}$ which could maximize $f(n)$ is obtained as

$n_{k} = n_{\mathrm{opt}}\left( r\left( t_{k}^{-} \right) \right) = \left\{ \begin{aligned}
 & \frac{r\left( t_{k}^{-} \right)}{\left| r\left( t_{k}^{-} \right) \right|},\quad(|r| \neq 0) \\
 & \left( \frac{1}{\sqrt{2}},0,\frac{1}{\sqrt{2}} \right)
\end{aligned} \right. $ (27)

The measurement yields a binary outcome $m_{k} = \pm 1$ with probability $p_{m_{k}} = \frac{1}{2}\left\lbrack 1 + m_{k}n_{k} \cdot r\left( t_{k}^{-} \right) \right\rbrack$. After the measurement, the system is projected onto the pure state with Bloch vector $r\left( t_{k}^{+} \right) = m_{k}n_{k}$. This post-measurement state serves as the initial condition for the next evolution process. After the last measurement (*K*th), the maximal work that can be extracted by operating an optimal feedback unitary rotation as

$\mathcal{W}_{final}\left( m_{K} \right) = \omega_{0}p_{e}^{\left( m_{K} \right)} = \frac{\omega_{0}}{2}\left( 1 + m_{K}n_{K,z} \right)$ (28)

where $n_{K,z}$ is the *z*-component of the last measurement basis $n_{K}$. There is no work extracted before the final discharge, and the probability of the entire outcome is the product of the *K* probabilities,

$P_{m} = \prod_{k = 1}^{K}p_{m_{k}}$ (29)

with $m = (m_{1},...,m_{K})$. Therefore, the average work during the total measurements process is

$\left\langle \mathcal{W} \right\rangle_{multi} = \sum_{m \in \left\{ \pm 1 \right\}^{K}}^{}{P_{m}W_{final}\left( m_{K} \right)}$ (30)

Because the state after each measurement depends on the sequence of previous outcomes, for moderate numbers of *K* ($K \leq 10$) we can directly evaluate the average work by enumerating all $2^{K}$ branches and provide exact results. Here, we set the number of measurements *K*=6 as an example to analyze how the multiple selective measurement influences ergotropy. The total duration is set as *T*=10, and we insert *K*-1 intermediate measurements at equal time intervals with the last *K*th measurement at *T*. From the result in Fig. 3, it demonstrates that the average extractable work has an obvious rise as the number of measurements increases. This enhancement behavior confirms that each additional measurement is able to harvest coherence from the non-Markovian environment. Moreover, the result also reveals that the incremental ergotropy with *K* saturates gradually. The largest enhancement occurs between *K*=1 and *K*=2, where the absolute gain is about 0.13$\omega_{0}$, however, the gain from *K*=5 to *K*=6 drops to 0.01$\omega_{0}$. This saturation reflects the finite total time *T* and the finite amount of coherence that can be regenerated by the environment between measurements, that is to say, in the limit $K \rightarrow \infty$ with fixed *T*, the protocol would approach a finite asymptotic value without exceeding the fundamental bound $\omega_{0}$.

These numerical findings show that the multiple measurements suffice to capture the majority of the non-Markovian gain, making the protocol practical from an experimental perspective. The results also establish a clear link between the ergotropy enhancement and the amount of non-Markovianity, which will be quantitatively explored in the next section through the operational non-Markovianity measure.

![](media/media/image5.png)

Figure 3. The variations of average extractable work with different total numbers of measurements from 1 to 6 (blue line) comparing with the average work present in red dashed line. The evolution time is set as *T*=10, and other parameters are the same as the above research.

## 5. Non-Markovianity of quantum battery

### 5.1 Standard non-Markovianity without measurements

To investigate the influence of information backflow on the discharge process of the quantum battery, we analyze the role of non-Markovian effects. Non-Markovianity can quantitatively characterize memory effects in open systems, and the most widely used method to measure non-Markovianity is the Breuer-Laine-Piilo (BLP) measure based on the temporal evolution of the trace distance between two states \[43\], which is defined as

$D\left( \rho_{1},\rho_{2} \right) = \frac{1}{2}Tr\left| \rho_{1} - \rho_{2} \right|$ (31)

where the norm $|X| = \sqrt{X^{\dagger}X}$. The distance satisfies $0 \leq D \leq 1$ and is a metric on the space of density operators. If its time derivative satisfies $\frac{d}{dt}D\left( \rho_{1},\rho_{2} \right) > 0$, it indicates a backflow of information from the environment to the system. The BLP measure quantifies the total amount of information backflow during the evolution time as follows

$\mathcal{N}_{BLP} = \max_{\rho_{1}(0),\rho_{2}(0)}\int_{\frac{dD}{dt} > 0}{\frac{dD(t)}{dt}dt}$ (32)

where the maximization runs over all possible pairs of initial states. For a pure dephasing channel in Eq. (5), the optimal pair can be taken as two equally weighted superposition states \[32, 44\] $\left| \pm \right\rangle = \frac{\left( \left| e \right\rangle \pm \left| g \right\rangle \right)}{\sqrt{2}}$. Depending on this condition, the non-Markovianity for the model is simplified as

$\mathcal{N}_{BLP} = \int_{\gamma'(t) < 0}^{}\left\lbrack - \gamma'(t)e^{- \gamma(t)} \right\rbrack dt$ (33)

with $\gamma'(t) = \frac{\alpha\lambda\left( {\omega_{c}}^{2} + \lambda^{2} \right)}{2\omega_{c}}e^{- \lambda t}\sin\left( \omega_{c}t \right)$, since the sign of $\gamma'(t)$ is entirely determined by $\sin\left( \omega_{c}t \right)$, that is, information backflow occurs during every second half-period of the reservoir correlation function, whenever $\sin\left( \omega_{c}t \right) < 0$ holds.

The analysis results of non-Markovianity under the influence of two key parameters $\lambda$ and $\alpha$ are shown in Fig. 4. We can see that the non-Markovianity decreases monotonically as the spectral width increases. This finding derives from the correlation time of the environment, i.e., $\tau_{c}\sim\lambda^{- 1}$. A narrow spectral density (small $\lambda$) corresponds to a long-lived environmental memory. Furthermore, the non-Markovianity increases with the coupling strength $\alpha$. A stronger qubit-bath coupling amplifies the amplitude of the oscillations in $\gamma(t)$, especially since the derivative $\gamma'(t)$ is directly proportional to $\alpha$ in Eq. (33). The behavior of $\mathcal{N}_{BLP}$ confirms that the pure-dephasing model with Lorentzian spectral density exhibits clear non-Markovian features in the regime of strong coupling and narrow spectral width.

![](media/media/image6.png)

Figure 4. The variations of non-Markovianity $\mathcal{N}_{BLP}$ as a function of spectral width $\lambda$ (from $\lambda = 0.05$ to $\lambda = 1$ with step 0.02 in our numerical computation) with different coupling strengths between the qubit and the bosonic reservoir: $\alpha = 0.1$ (purple solid line), $\alpha = 0.5$ (blue dashed line), $\alpha = 1$ (green dotted line). Other parameters are the same as in the above research.

From the view of mathematics, we can derive the quantitative relation between $\mathcal{N}_{BLP}$ and the direct ergotropy. Resorting to Eq. (13) and the trace distance $D(t) = e^{- \gamma(t)}$, the quantitative link can be expressed as

$\mathcal{W}_{direct}(t) = \frac{\omega_{0}}{2}D(t)$ (34)

Hence, the information backflow condition $\frac{dD}{dt} > 0$ can be substituted by $\frac{d\mathcal{W}_{direct}}{dt} > 0$, and the BLP measure can be rewritten as an integral over the ergotropy revivals

$\mathcal{N}_{BLP} = \int_{\frac{dD}{dt} > 0}{\frac{dD}{dt}dt} = \frac{2}{\omega_{0}}\int_{\frac{d\mathcal{W}_{direct}}{dt} > 0}{\frac{d\mathcal{W}_{direct}}{dt}dt}$ (35)

Let us denote by $\left\lbrack t_{k}^{start},t_{k}^{end} \right\rbrack$ the *k*-th interval during which the ergotropy increases. The integral over the total intervals is

$\mathcal{N}_{BLP} = \frac{2}{\omega_{0}}\sum_{k}^{}\left\lbrack \mathcal{W}_{direct}\left( t_{k}^{end} \right) - \mathcal{W}_{direct}\left( t_{k}^{start} \right) \right\rbrack$ (36)

The above equation provides another physical illustration of non-Markovianity: apart from the factor $2/\omega_{0}$, it equals the total amount of transient ergotropy recovered during all information backflow episodes. In the non-Markovian regime, every temporary revival of the extractable work contributes additively to the BLP measure.

### 5.2 Non-Markovianity under non-selective measurements protocol

In this section, we evaluate the non-Markovianity under a multiple-measurement protocol. The work-extraction protocol we used is based on selective measurement; however, the standard BLP measure requires the dynamical map to follow linear completely positive and trace-preserving (CPTP) evolution, and the nonlinear branch structure induced by selective measurements is in contradiction with this framework. Therefore, we replace the projective measurement in the protocol with a non-selective counterpart, in which all branches are averaged without distinguishing measurement outcomes. The dynamical sequence is then linear, which allows us to rigorously compute the trace distance between a pair of probe states and define the effective non-Markovianity.

Consider the same sequence of measurement instants $t_{1} < t_{2} < ... < t_{K} = T$ and the optimal measurement bases $\left\{ n_{k} \right\}$ in Sec. 4 for the battery. Resorting to the non-selective projective measurement, we can obtain the state of QB at each instant $t_{k}$

$\mathcal{M}_{k}\lbrack\rho\rbrack = \prod_{+}^{k}\rho\prod_{+}^{k} + \prod_{-}^{k}\rho\prod_{-}^{k}$ (37)

with projectors $\prod_{\pm}^{k} = \frac{1}{2}\left( I \pm n_{k} \cdot \sigma \right)$. After calculating the equation, the corresponding map on the Bloch vector is

$r\overset{\quad\mathcal{M}_{k}\quad}{\rightarrow}r' = \left( r \cdot n_{k} \right)n_{k}$ (38)

To calculate the non-Markovianity, we employ the same optimal pair of probe states as in Sec. 4.1, and the trace distance is expressed in terms of a single Bloch vector as

$D_{multi}(t) = \frac{1}{2}\left\| \rho_{+}(t) - \rho_{-}(t) \right\| = \left| r_{+}(t) \right|$ (39)

where $\rho_{\pm}(t)$ are the evolution states corresponding to the initial states $\left| \pm \right\rangle$, and $r_{+}(t)$ is the Bloch vector of $\rho_{+}(t)$. Thus, the effective non-Markovianity is defined as the sum of all increases of $D_{multi}(t)$ occurring during the free evolution intervals

$\mathcal{N}_{multi} = \sum_{k = 1}^{K}{\int_{t_{k - 1}}^{t_{k}}{dt}}\max\left( 0,\frac{d}{dt}\left| r_{+}(t) \right| \right)$ (40)

where $t_{0} = 0$ and $r_{+}(t)$ is the solution of the non-selective CPTP evolution described above. In practice, the non-Markovianity is evaluated numerically by discretizing the dephasing evolution process and accumulating all positive increments of the modulus.

The evolution of non-Markovianity with time is depicted in Fig. 5: the free evolution without measurements (a) and a sequence of four equally spaced non-selective measurements (b). In the situation of Fig. 5(a), the non-Markovianity starts at unity and experiences oscillatory decay. When four non-selective measurements are inserted, the non-Markovianity is abruptly reduced at each measurement instant $t_{k}$. This produces a distinctive staircase profile, i.e., every sudden reduction corresponds to the erasure of a fraction of the correlation between the system and the environment, and the non-Markovianity diminishes as the number of measurements increases because the modulus peaks become progressively lower after each projection.

![](media/media/image7.png)

(a) *Without measurement*

![](media/media/image8.png)

(b) *K*=4

Figure 5. The variations of non-Markovianity with the evolution time *t*. The results without and with measurements are shown in (a) and (b). Here, we set the total number of measurements to *K*=4, and the red dots denote the instants at which measurements are applied.

The research in Sec. 4.2 has demonstrated that each selective measurement converts part of the coherence into population difference, and the average work grows monotonically with *K*, saturating after a few measurements. The result in this section is related to the previous one. The work gain is larger (Fig. 3), which corresponds to the pronounced drop of non-Markovianity between the first and second measurement; however, the later measurements yield progressively smaller additional work and correspondingly smaller reductions of non-Markovianity. Therefore, the numerical results clearly demonstrate that non-Markovianity acts as a consumable resource for work extraction. 

## 6. Summary

In this research, we have studied how to extract the optimal work from a qubit quantum battery interacting with a pure dephasing bosonic environment. We first find that an increasing coupling strength $\alpha$ and bath spectral width $\lambda$ can inhibit the extraction of work from the battery; meanwhile, as the evolution time $t \rightarrow \infty$, the ergotropy tends to a stable value having no connection with the central frequency $\omega_{c}$ of the reservoir. Moreover, by resorting to the selective measurement and feedback protocol we analytically derived the optimal measurement basis that maximizes the average extractable work and proved that this protocol always outperforms the direct ergotropy, even when all coherence vanishes. This finding demonstrates that quantum measurements can effectively harvest coherence from a dephasing environment and convert it into useful energy. Furthermore, extending the idea to multiple measurement cycles, we showed that a sequence of adaptive projective measurements can lead to a monotonic increase of the average extracted work with the number of measurements.

In order to explore the information backflow of the battery, we introduced an operational characterization of non-Markovianity under the multiple-measurement protocol. By analyzing the non-selective counterpart of the measurement sequence, the marginal gain diminishes as the number of measurements grows, indicating a saturation that reflects the finite capacity of the environmental memory, which proves that the effective non-Markovianity precisely reflects the growth of the extractable work, confirming that non-Markovianity acts as a consumable thermodynamic resource. Meanwhile, the strict equality relation between non-Markovianity and the total ergotropy is also derived.

Our work not only shows that a sequence of measurements and feedback protocol can play an effective role in the extractable work of a QB by using an appropriate measurement basis, but also demonstrates that a non-Markovian environment benefits quantum energy storage when combined with appropriate quantum control. The research offers a solid foundation for the optimization of quantum battery work storage and builds a direct connection between the abstract concept of memory in open quantum systems and the practical task of energy harvesting.

## Acknowledgment

We sincerely acknowledge support from the National Nature Science Foundation of China under grants No. 12005182 and No. 12164003. The corresponding author also acknowledges the sponsorship by the Qinglan Project Q022001.

## References

\[1\] R. Alicki and M. Fannes, Entanglement boost for extractable work from ensembles of quantum batteries, Phys. Rev. E 87, 042123 (2013).

\[2\] M. Frey, K. Funo, and M. Hotta, Strong local passivity in finite quantum systems, Phys. Rev. E 90, 012127 (2014).

\[3\] C. Sparaciari, D. Jennings, and J. Oppenheim, Energetic instability of passive states in thermodynamics, Nat. Commun. 8, 1895 (2017).

\[4\] T. P. Le, J. Levinsen, K. Modi, M. M. Parish, and F. A. Pollock, Spin-chain model of a many-body quantum battery, Phys. Rev. A 97, 022106 (2018).

\[5\] G. M. Andolina, M. Keck, A. Mari, V. Giovannetti, and M. Polini, Quantum versus classical many-body batteries, Phys. Rev. B 99, 205437 (2019).

\[6\] R. Alicki, A quantum open system model of molecular battery charged by excitons, J. Chem. Phys. 150, 214110 (2019).

\[7\] A. Crescente, M. Carrega, M. Sassetti, and D. Ferraro, Ultrafast charging in a two-photon Dicke quantum battery, Phys. Rev. B 102, 245407 (2020).

\[8\] F. Q. Dou, H. Zhou, and J. A. Sun, Cavity Heisenberg spin chain quantum battery, Phys. Rev. A 106, 032212 (2022).

\[9\] T. K. Konar, L. G. C. Lakkaraju, S. Ghosh, and A. Sen(De), Quantum battery with ultracold atoms: Bosons versus fermions, Phys. Rev. A 106, 022618 (2022).

\[10\] P. Bakhshinezhad, B. R. Jablonski, F. C. Binder, and N. Friis, Trade-offs between precision and fluctuations in charging finitedimensional quantum batteries, Phys. Rev. E 109, 014131 (2024).

\[11\] C. K. Hu, J. Qiu, P. J. P. Souza, J. Yuan, Y. Zhou, L. Zhang, J. Chu, X. Pan, L. Hu, J. Li, Y. Xu, Y. Zhong, S. Liu, F. Yan, D. Tan, R. Bachelard, C. J. Villas-Boas, A. C. Santos, and D. Yu, Optimal charging of a superconducting quantum battery, Quantum Sci. Technol. 7, 045018 (2022).

\[12\] W. J. Han, P. Y. Sun, G. F. Zhang, Quantum advantage of nonlinear quantum battery and superconducting circuit implementation, Front. Phys. 6, 063203 (2026).

\[13\] G. Zhu, Y. Chen, Y. Hasegawa, and P. Xue, Charging quantum batteries via indefinite causal order: Theory and experiment, Phys. Rev. Lett. 131, 240401 (2023).

\[14\] Z. G. Lu, G. Q. Tian, X. Y. Lue, C. Shang, Topological Quantum Batteries, Phys. Rev. Lett. 134, 180401 (2025).

\[15\] J. L. Zhang, P. F. Wang, *et al.* Single-Ion Information Engine for Charging Quantum Battery, Phys. Rev. Lett. 135, 140403 (2025).

\[16\] Ivan Henao and Roberto M Serra. Role of quantum coherence in the thermodynamics of energy transfer. Phys. Rev. E 97, 062105, 2018.

\[17\] J. X. Liu, H. L. Shi, Y. H. Shi, X. H. Wang, W. L. Yang, Entanglement and work extraction in the central-spin quantum battery, Phys. Rev. B 104, 245418 (2021).

\[18\] F. Mayo and A. J. Roncaglia, Collective effects and quantum coherence in dissipative charging of quantum batteries, Phys. Rev. A 105, 062203 (2022).

\[19\] H. L. Shi, S. Ding, Q. K. Wan, X. H. Wang, and W. L. Yang, Entanglement, coherence, and extractable work in quantum batteries, Phys. Rev. Lett. 129, 130602 (2022).

\[20\] T. G. Zhang, H. Yang, S. M. Fei, Local-projective-measurement-enhanced quantum battery capacity, Phys. Rev. A 109, 042424 (2024).

\[21\] J. Y. Du, Y. J. Guo, B. W. Li, Nonequilibrium quantum battery based on quantum measurements, Phys. Rev. Res. 7, 013151 (2025).

\[22\] M. T. Mitchison, J. Goold, and J. Prior, Prior charging a quantum battery with linear feedback control, Quantum 5, 500 (2021).

\[23\] Y. Yao and X. Q. Shao, Optimal charging of open spin-chain quantum batteries via homodyne-based feedback control, Phys. Rev. E 106, 014138 (2022).

\[24\] R. Rodriguez, B. Ahmadi, G. Suarez, P. Mazurek, S. Barzanjeh, P. Horodecki, Optimal quantum control of charging quantum batteries, New J. Phys. 26, 043004 (2024).

\[25\] S. Ghosh, T. Chanda, S. Mal, and A. Sen De, Fast charging of a quantum battery assisted by noise, Phys. Rev. A 104, 032207 (2021).

\[26\] K. Xu, H.-G. Li, Z.-G. Li, H.-J. Zhu, G.-F. Zhang, and W.-M. Liu, Charging performance of quantum batteries in a doublelayer environment, Phys. Rev. A 106, 012425 (2022).

\[27\] W.-L. Song, J.-L. Wang, B. Zhou, W.-L. Yang, and J.-H. An, Self-discharging mitigated quantum battery, Phys. Rev. Lett. 135, 020405 (2025).

\[28\] F. T. Tabesh, F. H. Kamin, and S. Salimi, Environment-mediated charging process of quantum batteries, Phys. Rev. A 102, 052223 (2020).

\[29\] F. H. Kamin, F. T. Tabesh, S. Salimi, F. Kheirandish, A. C. Santos, Non-Markovian effects on charging and self-discharging process of quantum batteries, New J. Phys. 22, 083007 (2020).

\[30\] S.-C. Zhao, Z.-R. Zhao, and N.-Y. Zhuang, Non-Markovian nspin chain quantum battery in thermal charging process, Phys. Rev. E 112, 024129 (2025).

\[31\] Y. Li, R. F. Liu, J. B. You, W. L. Yang, and H. Guan, Optimal performances of a quantum battery via non-Markovian bath modulation, Phys. Rev. E 112, 064106 (2025).

\[32\] J. K. Xu, J. B. You, W. L. Yang, Non-Markovian-assisted advantage for central-spin quantum battery, Phys. Rev. A 113, 032202 (2026).

\[33\] Y. Y. Zhang, T. R. Yang, L. Fu, X. Wang, Powerful harmonic charging in quantum batteries, Phys. Rev. E 99, 052106 (2019).

\[34\] G. M. Palma, K. Suominen, A. Ekert, Quantum computers and dissipation, Proc. R. Soc. Lond. A 452, 1946 (1996).

\[35\] Y. Makhlin, G. Schön, A. Shnirman, Quantum-state engineering with Josephson-junction devices, Rev. Mod. Phys. 73, 357 (2001).

\[36\] H. P. Breuer, F. Petruccione, *The Theory of Open Quantum Systems* (Oxford University Press, 2002).

\[37\] A. J. Leggett, S. Chakravarty, A. T. Dorsey, M. P. A. Fisher, A. Garg, W. Zwerger, Dynamics of the dissipative two-state system, Rev. Mod. Phys. 59, 1 (1987).

\[38\] D. Tamascelli, A. Smirne, S. F. Huelga, M. B. Plenio, Nonperturbative treatment of non-Markovian dynamics of open quantum systems, Phys. Rev. Lett. 120, 030402 (2018).

\[39\] A. G. Kofman, G. Kurizki, Unified theory of dynamically suppressed qubit decoherence in thermal baths, Phys. Rev. Lett. 93, 130406 (2004).

\[40\] A. E. Allahverdyan, R. Balian, and Th. M. Nieuwenhuizen, Max[imal work extraction from finite quantum systems](https://doi.org/10.1209/epl/i2004-10101-2), Europhys. Lett. 67, 565 (2004).

\[41\] K. V. Hovhannisyan, M. Perarnau-Llobet, M. Huber, and A. Acín, Entanglement generation is not necessary for optimal work extraction, [Phys. Rev. Lett. 111, 240401 (2013)](https://doi.org/10.1103/PhysRevLett.111.240401).

\[42\] J. Yan and J. Jing, Charging by quantum measurement, Phys. Rev. Appl. 19, 064069 (2023).

\[43\] H.-P. Breuer, E.-M. Laine, and J. Piilo, Measure for the degree of non-Markovian behavior of quantum processes in open systems, Phys. Rev. Lett. 103, 210401 (2009).

\[44\] Z. Y. Xu, W. L. Yang, and M. Feng, Proposed method for direct measurement of the non-Markovian character of the qubits coupled to bosonic reservoirs, Phys. Rev. A 81, 044105 (2010).

[^1]: e-mail: hlukaoyan@163.com (corresponding author)
