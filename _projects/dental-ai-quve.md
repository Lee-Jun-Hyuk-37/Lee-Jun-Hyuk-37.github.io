---
title: "Can we reconstruct a patient's 3D oral structure from CT scans alone?"
excerpt: "Reconstructing a patient's 3D oral structure directly from CT scan data.<br/><img src='/images/quve_seventeen/3d_reconstruction2.png'>"
collection: projects
category: industry
date: 2022-02-28
header:
  teaser: /images/quve_seventeen/3d_reconstruction2.png
---

{% include base_path %}

<div class="project">

  <!-- ================= TITLE ================= -->
  <h1 class="project__title">Can we reconstruct a patient's 3D oral structure from CT scans alone?</h1>
  <p class="project__affil">AI Engineer &middot; AI Team &middot; Quve Seventeen</p>

  <!-- ================= OVERVIEW ================= -->
  <section class="project__section">
    <p>At Quve Seventeen, I worked on developing an algorithm that reconstructs a patient's 3D oral structure using CT scan data alone. This project was carried out in collaboration with Seoul National University Bundang Hospital.</p>

    <p>Quve Seventeen is a company working to digitalize dental services. Today, reconstructing a patient's 3D oral structure is most commonly done by taking a physical impression, but this approach is time-consuming and labor-intensive. Intraoral 3D scanning is increasingly used as well, yet it still takes a long time and offers considerably lower precision. CT scanning, by comparison, requires far less time and effort than either method while still delivering reasonably high precision. So if we could build precise 3D model data directly from CT scans, it could become a new approach that replaces both of the existing methods.</p>
  </section>

  <!-- ================= PIPELINE ================= -->
  <section class="project__section">
    <h2 class="project__heading">From CT slices to a 3D model</h2>

    <p>The algorithm turns a stack of CT slices into a finished 3D model in three stages: the oral structure is first segmented out of each CT slice, the segmented slices are stacked and reconstructed into a raw 3D volume, and that volume is then cleaned up into the final model.</p>

    <div class="project__pipeline">
      <figure class="project__pipeline-step">
        <img src="{{ base_path }}/images/quve_seventeen/ct_segmentation.png" alt="Oral structure segmented from an axial CT slice, outlined in red" />
        <figcaption>The oral structure is segmented from each axial CT slice.</figcaption>
      </figure>
      <figure class="project__pipeline-step">
        <img src="{{ base_path }}/images/quve_seventeen/3d_reconstruction.png" alt="Raw 3D volume reconstructed from the segmented CT slices" />
        <figcaption>The segmented slices are reconstructed into a raw 3D volume.</figcaption>
      </figure>
      <figure class="project__pipeline-step">
        <img src="{{ base_path }}/images/quve_seventeen/3d_reconstruction2.png" alt="Final cleaned-up 3D model of the patient's oral structure" />
        <figcaption>The volume is refined into the final 3D model.</figcaption>
      </figure>
    </div>
  </section>

</div>
