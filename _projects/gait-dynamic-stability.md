---
title: "How can we better estimate the dynamic stability of human gait?"
excerpt: "Quantifying the dynamic stability of human gait with the Maximal Lyapunov Exponent (MLE).<br/><img src='/images/mle/chaos.png'>"
collection: projects
category: research
date: 2024-01-01
header:
  teaser: /images/mle/chaos.png
---

{% include base_path %}

<div class="project">

  <!-- ================= THUMBNAIL ================= -->
  <!-- Drop the representative image at /images/mle/chaos.png -->
  <div class="project__hero">
    <img class="project__hero-media" src="{{ base_path }}/images/mle/chaos.png" alt="The Lorenz attractor, the iconic butterfly-shaped portrait of a chaotic system" />
  </div>

  <h1 class="project__title">How can we better estimate the dynamic stability of human gait?</h1>

  <!-- ================= STABILITY OF WALKING ================= -->
  <section class="project__section">
    <h2 class="project__heading">The stability of human walking</h2>

    <p>Human walking is remarkably stable. Even when we are unexpectedly perturbed (a stumble, a shove, an uneven step), we usually recover and keep walking without falling.</p>

    <p>Yet the <em>degree</em> of that stability clearly differs from person to person. Take an intuitive, extreme example: older adults and patients tend to have far lower walking stability than healthy young adults. They react much more strongly to even a small perturbation, and in severe cases this can end in a fall.</p>

    <p>So how do we quantify this subtle difference in stability? One powerful tool is the <strong>Maximal Lyapunov Exponent (MLE)</strong>.</p>
  </section>

  <!-- ================= WHAT THE MLE MEASURES ================= -->
  <section class="project__section">
    <h2 class="project__heading">What the MLE measures</h2>

    <p>The MLE comes from nonlinear dynamics, where it quantifies a dynamical system's <strong>sensitive dependence on initial conditions (SDIC)</strong>. If tiny differences in the initial condition grow into large divergences over time, the system has strong SDIC and a high MLE, meaning it is <em>unstable</em>.</p>

    <p>This idea is popularly known as the <strong>butterfly effect</strong>: the poetic image that a butterfly flapping its wings could set off a chain of events that eventually changes a distant storm. Systems that behave this way are called <strong>chaotic</strong>, and the figure at the top of this page is the <em>Lorenz attractor</em>, the most iconic portrait of such a chaotic system.</p>

    <p>An intuitive gait analogy: when an older adult steps on a small pebble while walking (a tiny perturbation), the system can evolve into a large deviation, drifting away from the normal walking pattern and, in the worst case, leading to a fall. SDIC is high, and so is the MLE. A healthy young adult, by contrast, can step on the same pebble and keep walking in essentially the same pattern, barely distinguishable from before. SDIC is low, and the MLE is relatively low.</p>
  </section>

  <!-- ================= PROBLEMS AND CONTRIBUTIONS ================= -->
  <section class="project__section">
    <h2 class="project__heading">Two weaknesses of existing estimators, and how we addressed them</h2>

    <p>The classical algorithms for computing the MLE have a few vulnerabilities.</p>

    <p>First, they are <strong>highly sensitive to noise</strong>. Time-series data collected from experiments inevitably contain noise, which can badly distort the estimate.</p>

    <p>Second, the algorithms rely on several parameters, and the resulting value is <strong>very sensitive to how those parameters are chosen</strong>.</p>

    <p>To tackle the noise problem, we developed a new <strong>noise-robust, parameter-free</strong> algorithm for estimating the MLE. This work was published in <em>Chaos, Solitons &amp; Fractals</em>:</p>

    <p class="project__ref-inline">J. H. Lee, I. S. Park, J. Ahn. <a href="https://doi.org/10.1016/j.chaos.2023.113916" target="_blank" rel="noopener noreferrer">Noise-robust estimation of the maximal Lyapunov exponent based on state space reconstruction with principal components.</a> <em>Chaos, Solitons &amp; Fractals</em>, 174, 113916 (2023).</p>

    <p>Separately, when the standard and widely used algorithm (Rosenstein's) is applied to assess gait stability, there had been no well-established guideline for which parameter settings to use. We established such a guideline, published in <em>Royal Society Open Science</em>:</p>

    <p class="project__ref-inline">I. Park, J. H. Lee, J. Ahn. <a href="https://doi.org/10.1098/rsos.240333" target="_blank" rel="noopener noreferrer">Effects of the kinematic variable, time delay and data length on test&ndash;retest reliability of the maximal Lyapunov exponent of human walking.</a> <em>Royal Society Open Science</em>, 11(10), 240333 (2024).</p>
  </section>

</div>
