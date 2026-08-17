---
title: "Lambda-Hold Control"
excerpt: "To be updated.<br/><img src='/images/to-be-updated.png'>"
collection: projects
category: research
date: 2026-08-17
layout: project-nerfies
header:
  teaser: /images/to-be-updated.png
---

<!-- ================= HERO / TITLE / AUTHORS ================= -->
<section class="hero">
  <div class="hero-body">
    <div class="container is-max-desktop">
      <div class="columns is-centered">
        <div class="column has-text-centered">
          <h1 class="title publication-title">
            Lambda-Hold Control:
            <span class="publication-subtitle">Human-Like Movement Emerges from a Minimal Task Reward in Predictive Musculoskeletal Simulation</span>
          </h1>

          <div class="publication-authors author-list">
            <span class="author-block">Jun Hyuk Lee <a class="author-home" href="{{ '/' | relative_url }}" aria-label="Homepage"><i class="fas fa-house"></i></a> <a href="https://orcid.org/0000-0003-3345-5303" target="_blank" rel="noopener noreferrer"><i class="ai ai-orcid"></i></a><sup>1</sup></span>
            <span class="author-block">Chihyeong Lee <a class="author-home" href="https://27bro.github.io/" target="_blank" rel="noopener noreferrer" aria-label="Homepage"><i class="fas fa-house"></i></a> <a href="https://orcid.org/0009-0002-4335-9825" target="_blank" rel="noopener noreferrer"><i class="ai ai-orcid"></i></a><sup>1</sup></span>
            <span class="author-block">Jooeun Ahn <a class="author-home" href="https://sports-engineering-lab.snu.ac.kr/member/?name=Jooeun%20Ahn" target="_blank" rel="noopener noreferrer" aria-label="Homepage"><i class="fas fa-house"></i></a> <a href="https://orcid.org/0000-0002-7964-5148" target="_blank" rel="noopener noreferrer"><i class="ai ai-orcid"></i></a><sup>1,2,3,*</sup></span>
          </div>

          <div class="publication-authors publication-affiliations">
            <span class="author-block"><sup>1</sup>Department of Physical Education, Seoul National University, Seoul, Republic of Korea</span>
            <span class="author-block"><sup>2</sup>Institute of Sport Science, Seoul National University, Seoul, Republic of Korea</span>
            <span class="author-block"><sup>3</sup>SNU Robotics Institute, Seoul National University, Seoul, Republic of Korea</span>
          </div>

          <div class="publication-authors publication-corresponding">
            <span class="author-block">*Corresponding author: <a href="mailto:ahnjooeun@snu.ac.kr">ahnjooeun@snu.ac.kr</a></span>
          </div>

          <div class="publication-link-row has-text-centered">
            <div class="publication-links">
              <!-- arXiv (active; replace # with the arXiv URL once available) -->
              <span class="link-block">
                <a href="#" class="external-link button is-normal is-rounded is-dark" target="_blank" rel="noopener noreferrer">
                  <span class="icon"><i class="ai ai-arxiv"></i></span>
                  <span>arXiv</span>
                </a>
              </span>
              <!-- Paper: journal DOI, not released yet -->
              <span class="link-block">
                <span class="button is-normal is-rounded is-tba">
                  <span class="icon"><i class="ai ai-doi"></i></span>
                  <span>Paper (TBA)</span>
                </span>
              </span>
              <!-- Code: not released yet -->
              <span class="link-block">
                <span class="button is-normal is-rounded is-tba">
                  <span class="icon"><i class="fab fa-github"></i></span>
                  <span>Code (TBA)</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ================= TEASER VIDEO ================= -->
<section class="hero is-light is-small">
  <div class="hero-body">
    <div align="center">
      <div class="placeholder-media" style="max-width: 60%;">Teaser video placeholder</div>
    </div>
  </div>
</section>

<!-- ================= ABSTRACT ================= -->
<section class="section">
  <div class="container is-max-desktop">
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Abstract</h2>
        <div class="content has-text-justified">
          <p>
            The massive overactuation in the human musculoskeletal system makes it challenging to train musculoskeletal models to generate human-like motion via reinforcement learning, primarily because exploration in the resulting high-dimensional and redundant action space is extremely inefficient.
            To address this problem, we propose the $\lambda$-hold controller, inspired by the equilibrium-point (EP) hypothesis, which has been widely supported by extensive evidence from human motor control studies.
            The policy's control variable is the per-muscle EP threshold length $\lambda$, from which a stretch-reflex recruitment law computes the muscle excitations automatically.
            Holding each $\lambda$ over an interval of the gait phase also sharply reduces the frequency at which the policy must be queried.
            Consequently, the controller, to our knowledge for the first time, enables a muscle-actuated skeletal model to learn human-like sprinting using only a minimal reward within an hour of training.
            The efficient exploration through the proposed $\lambda$-hold controller is not merely an engineering trick but an approach grounded in physiology, bringing together the EP hypothesis, intermittent control, and optimal feedback control.
            Beyond encapsulating human-like behavior in predictive simulation, this achievement contributes to developing a learnable model of the human motor controller.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ================= OVERVIEW ================= -->
<section class="section">
  <div class="container is-max-desktop">
    <div class="columns is-centered has-text-centered">
      <div class="column is-full-width">
        <h2 class="title is-3">Overview</h2>
        <div style="padding: 6px;"></div>
        <div class="columns is-centered">
          <img src="{{ '/images/lambda-hold/lambda_hold_overview.png' | relative_url }}" alt="Overview of the lambda-hold controller" style="width: 100%; max-width: 960px; height: auto;" />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ================= RESULTS & COMPARISONS ================= -->
<section class="section">
  <div class="container is-max-desktop">
    <div class="columns is-centered has-text-centered">
      <div class="column is-full-width">
        <h2 class="title is-3">Results &amp; Comparisons</h2>
      </div>
    </div>

    <div class="hr"></div>
    <div class="columns is-centered has-text-centered">
      <div class="column is-full-width">
        <h3 class="title is-4">Lambda-Hold (ours)</h3>
        <div style="padding: 8px;"></div>
        <div class="columns is-centered">
          <div class="media-frame" style="width: 100%;">
            <div class="placeholder-media">Result video placeholder</div>
            <span class="media-label is-good">Ours</span>
            <div class="media-caption-overlay">Caption overlay example &mdash; this text sits on top of the video and stays fully editable.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="hr"></div>
    <div class="columns is-centered has-text-centered">
      <div class="column is-full-width">
        <h3 class="title is-4">Baseline comparison</h3>
        <div style="padding: 8px;"></div>
        <div class="columns is-centered">
          <div class="media-frame" style="width: 100%;">
            <div class="placeholder-media">Baseline video placeholder</div>
            <span class="media-label is-bad">Baseline</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ================= BIBTEX ================= -->
<section class="section" id="BibTeX">
  <div class="container is-max-desktop content">
    <h2 class="title is-3">BibTeX</h2>
    {% raw %}<pre><code>@article{placeholder2026,
  title   = {Your Project Title Here},
  author  = {Author One and Author Two and Author Three},
  journal = {Venue / Conference},
  year    = {2026}
}
</code></pre>{% endraw %}
  </div>
</section>
