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
      <p>I am a master's student in the <a href="https://sports-engineering-lab.snu.ac.kr/" target="_blank" rel="noopener noreferrer">Sports Engineering Lab</a> at Seoul National University, advised by Professor <a href="https://sports-engineering-lab.snu.ac.kr/member/?name=Jooeun%20Ahn" target="_blank" rel="noopener noreferrer">Jooeun Ahn</a>.</p>
      <p>My research goal is to build a <strong>digital clone of the human motor controller</strong>.</p>
      <p>Once this becomes possible, it would let us understand the principles of human motor control on a scientific level, and put that understanding to practical use in areas such as surgical support, rehabilitation, performance augmentation, and controller design for exoskeletons or any other system that physically interacts with the human body.</p>
      <p>To get there, I believe a deep understanding of the human body has to come first. Beyond biomechanics, I actively study neuroscience and physiology, drawing on that knowledge and building it on top of state-of-the-art methods. My work ranges from classical mathematical modeling to reinforcement-learning-based musculoskeletal simulation, alongside hands-on biomechanics experiments, and I am also deeply interested in exoskeletons.</p>
    </div>

    <div class="home__keywords">
      <span class="home__keyword">Neuromuscular Control</span>
      <span class="home__keyword">Musculoskeletal Simulation</span>
      <span class="home__keyword">Biomechanics</span>
      <span class="home__keyword">Artificial Intelligence</span>
      <span class="home__keyword">Reinforcement Learning</span>
      <span class="home__keyword">Nonlinear Dynamics</span>
      <span class="home__keyword">Human Pose Estimation</span>
    </div>
  </section>

  <!-- ================= SELECTED PROJECTS ================= -->
  <section class="home__section">
    <div class="home__section-head">
      <h2 class="home__section-title">Selected Projects</h2>
      <a class="home__more-link" href="{{ base_path }}/projects/">View all projects</a>
    </div>

    <div class="home__cards">

      <article class="home__card">
        <div class="home__card-thumb home__card-thumb--videos">
          <video autoplay loop muted playsinline><source src="{{ base_path }}/images/wcb2026/sprint_60fps.mp4" type="video/mp4"></video>
          <video autoplay loop muted playsinline><source src="{{ base_path }}/images/wcb2026/sprint_60fps_slow.mp4" type="video/mp4"></video>
          <video autoplay loop muted playsinline><source src="{{ base_path }}/images/wcb2026/sprint_60fps_frontal.mp4" type="video/mp4"></video>
          <video autoplay loop muted playsinline><source src="{{ base_path }}/images/wcb2026/sprint_60fps_frontal_slow.mp4" type="video/mp4"></video>
        </div>
        <div class="home__card-body">
          <h3 class="home__card-title">How can we solve the inefficient exploration problem in predictive musculoskeletal simulation?</h3>
          <p class="home__card-meta">Poster &middot; WCB 2026</p>
          <p class="home__card-note">Tackled the most fundamental problem in an elegant, physiologically plausible way.</p>
          <a class="home__card-link" href="{{ base_path }}/projects/wcb2026/">detail</a>
        </div>
      </article>

      <article class="home__card">
        <img class="home__card-thumb" src="{{ base_path }}/images/mle/chaos.png" alt="" />
        <div class="home__card-body">
          <h3 class="home__card-title">How can we better estimate the dynamic stability of human gait?</h3>
          <p class="home__card-meta">Published in &ldquo;Chaos, Solitons &amp; Fractals&rdquo; and &ldquo;Royal Society Open Science&rdquo;</p>
          <p class="home__card-note">Developed a new algorithm that resolves practical issues in the Maximal Lyapunov Exponent, and identified the optimal settings for the existing algorithm.</p>
          <a class="home__card-link" href="{{ base_path }}/projects/gait-dynamic-stability/">detail</a>
        </div>
      </article>

    </div>
  </section>

  <!-- ================= EDUCATION ================= -->
  <section class="home__section">
    <h2 class="home__section-title">Education</h2>
    <ul class="home__list">
      <li class="home__list-item">
        <div class="home__list-head">
          <span class="home__list-title">Seoul National University</span>
          <span class="home__list-date">Aug. 2023</span>
        </div>
        <p class="home__list-sub">Graduated Cum Laude</p>
        <ul class="home__list-sub">
          <li>Bachelor of Sports Science</li>
          <li>Bachelor of Science in Artificial Intelligence</li>
        </ul>
      </li>
    </ul>
  </section>

  <!-- ================= PROFESSIONAL CAREERS ================= -->
  <section class="home__section">
    <h2 class="home__section-title">Professional Careers</h2>
    <ul class="home__list">

      <li class="home__list-item">
        <div class="home__list-head">
          <span class="home__list-title"><a href="https://sports-engineering-lab.snu.ac.kr/" target="_blank" rel="noopener noreferrer">Sports Engineering Lab</a>, Seoul National University</span>
          <span class="home__list-date">Sep. 2025 &ndash; Present</span>
        </div>
        <p class="home__list-sub">Master's Student &middot; Advisor: <a href="https://sports-engineering-lab.snu.ac.kr/member/?name=Jooeun%20Ahn" target="_blank" rel="noopener noreferrer">Jooeun Ahn</a></p>
      </li>

      <li class="home__list-item">
        <div class="home__list-head">
          <span class="home__list-title"><a href="https://neumove.org/" target="_blank" rel="noopener noreferrer">NeuMove Lab</a>, Northeastern University</span>
          <span class="home__list-date">Jul. 2025 &ndash; Aug. 2025</span>
        </div>
        <p class="home__list-sub">Visiting Master's Student &middot; Advisor: <a href="http://seungmoon.com/" target="_blank" rel="noopener noreferrer">Seungmoon Song</a></p>
      </li>

      <li class="home__list-item">
        <div class="home__list-head">
          <span class="home__list-title">Republic of Korea Navy</span>
          <span class="home__list-date">Sep. 2023 &ndash; May 2025</span>
        </div>
        <p class="home__list-sub">AI Development Specialist &middot; Naval Intelligence Information System Group &amp; Head Quarter Battalion</p>
        <p class="home__list-desc">As the Navy's first AI development specialist, I worked to better leverage AI for national defense.</p>
        <a class="home__detail-link" href="{{ base_path }}/projects/navy-ai-dev-specialist/">details</a>
      </li>

      <li class="home__list-item">
        <div class="home__list-head">
          <span class="home__list-title">NCSOFT</span>
          <span class="home__list-date">Jan. 2023 &ndash; Feb. 2023</span>
        </div>
        <p class="home__list-sub">Intern &middot; Recognition Team, Vision AI Lab</p>
        <p class="home__list-desc">One of Korea's top 3 gaming companies.</p>
        <a class="home__detail-link" href="{{ base_path }}/projects/facial-image-generation-ncsoft/">details</a>
      </li>

      <li class="home__list-item">
        <div class="home__list-head">
          <span class="home__list-title">Quve Seventeen</span>
          <span class="home__list-date">Oct. 2021 &ndash; Feb. 2022</span>
        </div>
        <p class="home__list-sub">AI Engineer &middot; AI Team</p>
        <p class="home__list-desc">A company aiming to digitalize dental services.</p>
        <a class="home__detail-link" href="{{ base_path }}/projects/dental-ai-quve/">details</a>
      </li>

      <li class="home__list-item">
        <div class="home__list-head">
          <span class="home__list-title"><a href="https://sports-engineering-lab.snu.ac.kr/" target="_blank" rel="noopener noreferrer">Sports Engineering Lab</a>, Seoul National University</span>
          <span class="home__list-date">Jul. 2020 &ndash; Aug. 2023</span>
        </div>
        <p class="home__list-sub">Research Intern &middot; Advisor: <a href="https://sports-engineering-lab.snu.ac.kr/member/?name=Jooeun%20Ahn" target="_blank" rel="noopener noreferrer">Jooeun Ahn</a></p>
        <p class="home__list-desc">Published two research papers as an undergraduate.</p>
        <a class="home__detail-link" href="{{ base_path }}/media/#undergraduate-research">details</a>
      </li>

    </ul>
  </section>

  <!-- ================= PROFESSIONAL SKILLS ================= -->
  <section class="home__section">
    <h2 class="home__section-title">Professional Skills</h2>

    <div class="home__skills">

      <div class="home__skill">
        <h3 class="home__skill-title">Sports Science</h3>
        <ul class="home__skill-body">
          <li>B.S. in Sports Science, Seoul National University</li>
          <li>Biomechanical instruments: motion capture (Qualisys, Optitrack, Xsens), force plates (Bertec, AMTI), force treadmill (Bertec), EMG (Delsys)</li>
        </ul>
      </div>

      <div class="home__skill">
        <h3 class="home__skill-title">Data Science</h3>
        <ul class="home__skill-body">
          <li>B.S. in Artificial Intelligence, Seoul National University</li>
          <li>Enjoy and excel at extracting meaningful insights from any given data (time series, images, audio, text, 3D data, and more)</li>
        </ul>
      </div>

      <div class="home__skill">
        <h3 class="home__skill-title">Software Engineering</h3>
        <ul class="home__skill-body">
          <li>Languages: Python, C, C++, Java, JavaScript, MATLAB</li>
          <li>Enjoy working in nerdy environments such as nvim, Linux, and git</li>
        </ul>
      </div>

      <div class="home__skill">
        <h3 class="home__skill-title">Leadership</h3>
        <ul class="home__skill-body">
          <li>Founder and inaugural captain of Seoul National University's ice hockey team, the Capitals <a class="home__detail-link home__detail-link--inline" href="{{ base_path }}/media/#ice-hockey">details</a></li>
        </ul>
      </div>

    </div>

    <p class="home__note">Always open to learning new tools, skills, and people.</p>
  </section>

</div>
