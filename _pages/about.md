---
permalink: /
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<div class="home">

  <!-- ================= ABOUT / RESEARCH GOAL ================= -->
  <section class="home__section">
    <h2 class="home__section-title">About</h2>
    <div class="home__prose">
      <p>I am a master's student in the Sports Engineering Lab at Seoul National University, advised by Professor Jooeun Ahn.</p>
      <p>My research goal is to build a <em>digital clone of the human motor controller</em> &mdash; a computational model that reproduces how humans plan and control their movements.</p>
      <p>Once this becomes possible, it would let us understand the principles of human motor control on a scientific level, and put that understanding to practical use &mdash; in surgical support, rehabilitation, performance augmentation, and the design of controllers for exoskeletons and other systems that physically interact with the human body.</p>
    </div>
  </section>

  <!-- ================= EXPERIENCES (two columns) ================= -->
  <div class="home__experiences">

    <!-- Research Experiences -->
    <section class="home__section">
      <h2 class="home__section-title">Research Experiences</h2>
      <div class="home__cards">

        <article class="home__card">
          <img class="home__card-thumb" src="{{ base_path }}/images/500x300.png" alt="" />
          <div class="home__card-body">
            <h3 class="home__card-title">How can we solve the inefficient exploration problem in predictive musculoskeletal simulation?</h3>
            <p class="home__card-meta">Poster &middot; WCB 2026</p>
            <p class="home__card-note">Toward more sample-efficient forward simulation of human motor control.</p>
            <a class="home__card-link" href="{{ base_path }}/projects/predictive-musculoskeletal-exploration/">detail</a>
          </div>
        </article>

        <article class="home__card">
          <img class="home__card-thumb" src="{{ base_path }}/images/500x300.png" alt="" />
          <div class="home__card-body">
            <h3 class="home__card-title">How does human gait differ between age groups and sexes?</h3>
            <p class="home__card-meta">Under review &middot; npj Aging</p>
            <p class="home__card-note">Characterizing how walking patterns vary across age and between sexes.</p>
            <a class="home__card-link" href="{{ base_path }}/projects/gait-age-sex-differences/">detail</a>
          </div>
        </article>

        <article class="home__card">
          <img class="home__card-thumb" src="{{ base_path }}/images/500x300.png" alt="" />
          <div class="home__card-body">
            <h3 class="home__card-title">How can we better estimate the dynamic stability of human gait?</h3>
            <p class="home__card-meta">Quantifying Human Movement</p>
            <p class="home__card-note">Better metrics to quantify human movement, using the Maximum Lyapunov Exponent (MLE).</p>
            <a class="home__card-link" href="{{ base_path }}/projects/gait-dynamic-stability/">detail</a>
          </div>
        </article>

      </div>
    </section>

    <!-- Industrial Experiences -->
    <section class="home__section">
      <h2 class="home__section-title">Industrial Experiences</h2>
      <div class="home__cards">

        <article class="home__card">
          <img class="home__card-thumb" src="{{ base_path }}/images/500x300.png" alt="" />
          <div class="home__card-body">
            <h3 class="home__card-title">How can we better leverage AI for national security?</h3>
            <p class="home__card-meta">AI Development Officer &middot; R.O.K. Navy</p>
            <p class="home__card-note">The Navy's first AI development specialist. Projects are classified, but broadly involved customized LLMs and object detection in computer vision.</p>
            <a class="home__card-link" href="{{ base_path }}/projects/navy-ai-officer/">detail</a>
          </div>
        </article>

        <article class="home__card">
          <img class="home__card-thumb" src="{{ base_path }}/images/500x300.png" alt="" />
          <div class="home__card-body">
            <h3 class="home__card-title">How can we solve the data imbalance problem in training datasets?</h3>
            <p class="home__card-meta">Intern &middot; Vision AI Lab, NCSOFT</p>
            <p class="home__card-note">Recognition Team &mdash; generating rare human facial expressions to balance datasets.</p>
            <a class="home__card-link" href="{{ base_path }}/projects/facial-image-generation-ncsoft/">detail</a>
          </div>
        </article>

        <article class="home__card">
          <img class="home__card-thumb" src="{{ base_path }}/images/500x300.png" alt="" />
          <div class="home__card-body">
            <h3 class="home__card-title">Can we digitalize the whole process of dental service with AI?</h3>
            <p class="home__card-meta">AI Engineer &middot; Quve Seventeen</p>
            <p class="home__card-note">AI Team &mdash; digitalizing the end-to-end dental service pipeline.</p>
            <a class="home__card-link" href="{{ base_path }}/projects/dental-ai-quve/">detail</a>
          </div>
        </article>

      </div>
    </section>

  </div>

  <!-- ================= PROFESSIONAL SKILLS ================= -->
  <section class="home__section">
    <h2 class="home__section-title">Professional Skills</h2>

    <div class="home__skills">

      <div class="home__skill">
        <h3 class="home__skill-title">Sports Science (Biomechanics)</h3>
        <ul class="home__skill-body">
          <li>B.S. in Sports Science, Seoul National University</li>
          <li>Biomechanical instruments: motion capture, force plates, force treadmill, EMG</li>
        </ul>
      </div>

      <div class="home__skill">
        <h3 class="home__skill-title">Artificial Intelligence</h3>
        <ul class="home__skill-body">
          <li>B.S. in Artificial Intelligence, Seoul National University</li>
          <li>Model development and deployment</li>
        </ul>
      </div>

      <div class="home__skill">
        <h3 class="home__skill-title">Development</h3>
        <ul class="home__skill-body">
          <li>Languages: Python, C, C++, Java, JavaScript, MATLAB</li>
          <li>Comfortable in nerdy environments: nvim, Linux, git</li>
        </ul>
      </div>

      <div class="home__skill">
        <h3 class="home__skill-title">Leadership</h3>
        <ul class="home__skill-body">
          <li>Founder and inaugural captain of Seoul National University's ice hockey team, the Capitals</li>
        </ul>
      </div>

    </div>

    <p class="home__note">Open to learning new tools, skills, and people.</p>
  </section>

</div>
