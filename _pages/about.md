---
permalink: /
title: "Jun Hyuk Lee"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<div class="home">

  <!-- ================= HERO ================= -->
  <!-- Drop a GIF into /images/ and set its filename here to replace the placeholder -->
  {% assign hero_gif = "" %}
  <div class="home__hero">
    {% if hero_gif != "" %}
      <img class="home__hero-media" src="{{ base_path }}/images/{{ hero_gif }}" alt="Biomechanical experiments and musculoskeletal simulation" />
    {% else %}
      <div class="home__hero-placeholder">Background reel &mdash; experiments &amp; simulation (coming soon)</div>
    {% endif %}
    <div class="home__hero-overlay">
      <h1 class="home__hero-title">Building a Digital Clone of the Human Motor Controller</h1>
      <p class="home__hero-subtitle">Biomechanical experiments &amp; inverse simulation &middot; Predictive (forward) simulation of the human motor controller</p>
    </div>
  </div>

  <!-- ================= RESEARCH VISION ================= -->
  <section class="home__section">
    <h2 class="home__section-title">Research Vision</h2>
    <p class="home__section-lead">I build computational models of how humans control movement &mdash; a <em>digital clone of the human motor controller</em> &mdash; to understand it scientifically and put it to work in the real world.</p>

    <div class="home__pillars">
      <div class="home__pillar">
        <span class="home__pillar-tag">Goal</span>
        <h3 class="home__pillar-title">Digital Clone</h3>
        <p class="home__pillar-text">Recreate the human motor controller as a computational model that reproduces how people actually move.</p>
      </div>
      <div class="home__pillar">
        <span class="home__pillar-tag">Scientific</span>
        <h3 class="home__pillar-title">Understanding</h3>
        <p class="home__pillar-text">Use that model to better understand the principles behind human motor control.</p>
      </div>
      <div class="home__pillar">
        <span class="home__pillar-tag">Engineering</span>
        <h3 class="home__pillar-title">Application</h3>
        <p class="home__pillar-text">Apply it to surgical support, rehabilitation, performance augmentation, and exoskeleton &amp; human-interaction controller design.</p>
      </div>
    </div>
  </section>

  <!-- ================= RESEARCH EXPERIENCES ================= -->
  <section class="home__section">
    <h2 class="home__section-title">Research Experiences</h2>
    <p class="home__section-lead">Questions I have worked on across biomechanics and simulation.</p>

    <div class="home__cards">

      <article class="home__card">
        <img class="home__card-thumb" src="{{ base_path }}/images/500x300.png" alt="" />
        <div class="home__card-body">
          <p class="home__card-meta">Quantifying Human Movement</p>
          <h3 class="home__card-title">How can we better estimate the dynamic stability of human gait?</h3>
          <p class="home__card-note">Better metrics to quantify human movement, using the Maximum Lyapunov Exponent (MLE).</p>
          <a class="home__card-link" href="{{ base_path }}/projects/gait-dynamic-stability/">detail</a>
        </div>
      </article>

      <article class="home__card">
        <img class="home__card-thumb" src="{{ base_path }}/images/500x300.png" alt="" />
        <div class="home__card-body">
          <p class="home__card-meta">Under review &middot; npj Aging</p>
          <h3 class="home__card-title">How does human gait differ between age groups and sexes?</h3>
          <p class="home__card-note">Characterizing how walking patterns vary across age and between sexes.</p>
          <a class="home__card-link" href="{{ base_path }}/projects/gait-age-sex-differences/">detail</a>
        </div>
      </article>

      <article class="home__card">
        <img class="home__card-thumb" src="{{ base_path }}/images/500x300.png" alt="" />
        <div class="home__card-body">
          <p class="home__card-meta">Poster &middot; WCB 2026</p>
          <h3 class="home__card-title">How can we solve the inefficient exploration problem in predictive musculoskeletal simulation?</h3>
          <p class="home__card-note">Toward more sample-efficient forward simulation of human motor control.</p>
          <a class="home__card-link" href="{{ base_path }}/projects/predictive-musculoskeletal-exploration/">detail</a>
        </div>
      </article>

    </div>
  </section>

  <!-- ================= INDUSTRIAL EXPERIENCES ================= -->
  <section class="home__section">
    <h2 class="home__section-title">Industrial Experiences</h2>
    <p class="home__section-lead">Applying AI across dentistry, vision, and national defense.</p>

    <div class="home__cards">

      <article class="home__card">
        <img class="home__card-thumb" src="{{ base_path }}/images/500x300.png" alt="" />
        <div class="home__card-body">
          <p class="home__card-meta">AI Engineer &middot; Quve Seventeen</p>
          <h3 class="home__card-title">Can we digitalize the whole process of dental service with AI?</h3>
          <p class="home__card-note">AI Team &mdash; digitalizing the end-to-end dental service pipeline.</p>
          <a class="home__card-link" href="{{ base_path }}/projects/dental-ai-quve/">detail</a>
        </div>
      </article>

      <article class="home__card">
        <img class="home__card-thumb" src="{{ base_path }}/images/500x300.png" alt="" />
        <div class="home__card-body">
          <p class="home__card-meta">Intern &middot; Vision AI Lab, NCSOFT</p>
          <h3 class="home__card-title">How can we solve the data imbalance problem in training datasets?</h3>
          <p class="home__card-note">Recognition Team &mdash; generating rare human facial expressions to balance datasets.</p>
          <a class="home__card-link" href="{{ base_path }}/projects/facial-image-generation-ncsoft/">detail</a>
        </div>
      </article>

      <article class="home__card">
        <img class="home__card-thumb" src="{{ base_path }}/images/500x300.png" alt="" />
        <div class="home__card-body">
          <p class="home__card-meta">AI Development Officer &middot; R.O.K. Navy</p>
          <h3 class="home__card-title">How can we better leverage AI for national security?</h3>
          <p class="home__card-note">The Navy's first AI development specialist. Projects are classified, but broadly involved customized LLMs and object detection in computer vision.</p>
          <a class="home__card-link" href="{{ base_path }}/projects/navy-ai-officer/">detail</a>
        </div>
      </article>

    </div>
  </section>

  <!-- ================= PROFESSIONAL SKILLS ================= -->
  <section class="home__section">
    <h2 class="home__section-title">Professional Skills</h2>
    <p class="home__section-lead">A bridge between sports science and artificial intelligence.</p>

    <div class="home__skills">

      <div class="home__skill">
        <div class="home__skill-head">
          <img class="home__skill-logo" src="{{ base_path }}/images/500x300.png" alt="" />
          <h3 class="home__skill-title">Sports Science (Biomechanics)</h3>
        </div>
        <ul class="home__skill-body">
          <li>B.S. in Sports Science, Seoul National University</li>
          <li>Biomechanical instruments: motion capture, force plates, force treadmill, EMG</li>
        </ul>
      </div>

      <div class="home__skill">
        <div class="home__skill-head">
          <img class="home__skill-logo" src="{{ base_path }}/images/500x300.png" alt="" />
          <h3 class="home__skill-title">Artificial Intelligence</h3>
        </div>
        <ul class="home__skill-body">
          <li>B.S. in Artificial Intelligence, Seoul National University</li>
          <li>Model development and deployment</li>
        </ul>
      </div>

      <div class="home__skill">
        <div class="home__skill-head">
          <img class="home__skill-logo" src="{{ base_path }}/images/500x300.png" alt="" />
          <h3 class="home__skill-title">Development</h3>
        </div>
        <ul class="home__skill-body">
          <li>Languages: Python, C, C++, Java, JavaScript, MATLAB</li>
          <li>Comfortable in nerdy environments: nvim, Linux, git</li>
        </ul>
        <div class="home__logo-row">
          <span class="home__logo-chip"><img src="{{ base_path }}/images/500x300.png" alt="" />Python</span>
          <span class="home__logo-chip"><img src="{{ base_path }}/images/500x300.png" alt="" />C / C++</span>
          <span class="home__logo-chip"><img src="{{ base_path }}/images/500x300.png" alt="" />Java</span>
          <span class="home__logo-chip"><img src="{{ base_path }}/images/500x300.png" alt="" />JavaScript</span>
          <span class="home__logo-chip"><img src="{{ base_path }}/images/500x300.png" alt="" />MATLAB</span>
        </div>
      </div>

      <div class="home__skill">
        <div class="home__skill-head">
          <img class="home__skill-logo" src="{{ base_path }}/images/500x300.png" alt="" />
          <h3 class="home__skill-title">Leadership</h3>
        </div>
        <ul class="home__skill-body">
          <li>Founder and inaugural captain of Seoul National University's ice hockey team, the Capitals</li>
        </ul>
      </div>

    </div>

    <p class="home__note">Open to learning new tools, skills, and people.</p>
  </section>

</div>
