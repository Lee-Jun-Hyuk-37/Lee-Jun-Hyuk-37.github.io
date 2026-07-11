---
title: "How can we solve the data imbalance problem in training datasets?"
excerpt: "Generating large amounts of rare human facial expressions to balance training datasets.<br/><img src='/images/ncsoft/figure.png'>"
collection: projects
category: industry
date: 2023-02-28
header:
  teaser: /images/ncsoft/figure.png
---

{% include base_path %}

<div class="project">

  <!-- ================= TITLE ================= -->
  <h1 class="project__title">How can we solve the data imbalance problem in training datasets?</h1>
  <p class="project__affil">Intern &middot; Recognition Team, Vision AI Lab &middot; NCSOFT</p>
  <div class="project__logo">
    <img src="{{ base_path }}/images/ncsoft/logo.jpg" alt="NCSOFT logo" />
  </div>

  <!-- ================= OVERVIEW ================= -->
  <section class="project__section">
    <p>NCSOFT is one of South Korea's top three game companies. Within its Vision AI Lab, I worked on the Recognition Team, where I was responsible for developing expression-controllable data generation technology for training facial-expression (emotion) recognition models.</p>

    <p>Training an AI to recognize human facial emotions requires a large amount of images of human facial expressions. In practice, however, most of the face images available in the wild are either smiling or neutral, which leads to a data imbalance problem. To address this, I developed a tool that generates large amounts of realistic human face images with any desired expression.</p>
  </section>

  <!-- ================= PIPELINE ================= -->
  <section class="project__section">
    <h2 class="project__heading">Generating faces with a desired expression</h2>

    <p>The tool takes two inputs: one image that supplies the target expression and another that supplies the identity (style). Each image is reconstructed into a 3D FLAME face by EMOCA, the desired expression is composed onto the target identity in FLAME's control space, and DaGAN then renders the combined 3D face back into a realistic output image.</p>

    <figure class="project__figure project__figure--wide">
      <img src="{{ base_path }}/images/ncsoft/figure.png" alt="Pipeline: an expression image and a style image are each reconstructed into a 3D FLAME face by EMOCA, combined in FLAME control, and rendered by DaGAN into a realistic output face" />
      <figcaption>The generation pipeline: EMOCA reconstructs the expression and identity images into 3D FLAME faces, the expression is transferred in FLAME's control space, and DaGAN renders the result into a realistic face image.</figcaption>
    </figure>
  </section>

</div>
