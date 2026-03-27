<template>
  <section id="home" class="main-section">

    <!-- FIXED CENTER LOGO "K" -->
    <img src="/images/letterLogo.png" alt="K Logo" class="center-k" />

    <!-- ROTATING CIRCLE TEXT -->
    <div class="circle-wrapper">
      <svg class="circle-svg" viewBox="0 0 300 300">
        <defs>
          <path id="circlePath"
                d="M150,150
                   m -110,0
                   a 110,110 0 1,1 220,0
                   a 110,110 0 1,1 -220,0" />
        </defs>

        <text font-size="22" letter-spacing="6" font-weight="500">
          <textPath href="#circlePath">
            WELCOME TO KLINCHAROV FAMILY WINERY • WELCOME TO KLINCHAROV FAMILY WINERY •
          </textPath>
        </text>
      </svg>
    </div>

  </section>

  <!-- OUR STORY UNDER HERO -->
  <section class="story-section">
    <div class="story-block">
      <h2>Our Story</h2>
<p class="story">
Our story began long before this became a winery — around our family table, where wine was always shared and every bottle had a story behind it.  

My father and grandfather spent years in the vineyards, working with patience, care, and quiet dedication. I grew up watching that — learning that wine isn’t just made, it’s earned.  

What started as something we made for ourselves slowly became something we wanted to share. And today, every bottle carries a part of that story — of family, time, and the love we put into every harvest.
</p>


    </div>
  </section>

  <!-- GALLERY UNDER OUR STORY -->
  <section class="gallery-section">
    <div class="gallery-grid">
      <img 
        v-for="(img, index) in galleryImages" 
        :key="index" 
        :src="img" 
        @click="openImage(img)"
        class="gallery-img"
        alt="Winery photo"
      />
    </div>

    <!-- LIGHTBOX -->
    <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
      <img :src="activeImage" class="lightbox-img" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const galleryImages = ref([
  '/images/galerija16.jpg',
  '/images/galerija26.jpg',
  '/images/galerija27.jpg',
  '/images/galerija22.jpg',
  '/images/galerija12.jpg',
  '/images/galerija15.jpg',
  '/images/galerija1.jpg',
  '/images/galerija17.jpg',
  '/images/galerija7.jpg',
  '/images/galerija24.jpg',
  '/images/galerija21.jpg',
  '/images/galerija14.jpg',
  '/images/galerija5.jpg',
  '/images/galerija9.jpg',
  '/images/galerija6.jpg',
  '/images/galerija11.jpg'
])

const lightboxOpen = ref(false)
const activeImage = ref(null)

const openImage = (img) => {
  activeImage.value = img
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}
</script>


<style scoped>
/* -------------------------------
   HERO SECTION
-------------------------------- */
.main-section {
  background: url("/images/main3.png") center/cover no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.main-section::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.35);
  backdrop-filter: blur(2px);
  z-index: 1;
}

/* -------------------------------
   CIRCLE TEXT
-------------------------------- */
.circle-wrapper {
  position: absolute;
  width: 320px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transform: scale(0.9) translateY(20px);
  animation: fadeIn 2s ease-out forwards, rotate 22s linear infinite;

  z-index: 5;
}

.circle-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 10px rgba(255, 230, 150, 0.4));
}

text {
  fill: #f5e6c8;
  stroke: rgba(0,0,0,0.3);
  stroke-width: 0.7px;
}

/* -------------------------------
   ANIMATIONS
-------------------------------- */
@keyframes rotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
    filter: blur(3px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
    filter: blur(0);
  }
}

/* FIXED CENTER "K" LOGO */
.center-k {
  position: absolute;
  width: 120px;
  z-index: 6;
  animation: fadeIn 2s ease-out forwards;
}


/* -------------------------------
   OUR STORY SECTION
-------------------------------- */
.story-section {
  background: white;
  padding: 140px 20px;
  text-align: center;
}

.story-block {
  max-width: 900px;
  margin: 0 auto;
}

.story-block h2 {
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #3b2d1f;
  margin-bottom: 25px;
}

.story-block p {
  font-size: 19px;
  line-height: 1.8;
  color: #4a4a4a;
}


/* -------------------------------
   GALLERY
-------------------------------- */
.gallery-section {
  padding: 80px 20px;
  background: white;
}

.gallery-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 22px;
}

.gallery-img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 18px rgba(0,0,0,0.2);
}

.gallery-img:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 24px rgba(0,0,0,0.25);
}

/* -------------------------------
   LIGHTBOX
-------------------------------- */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  backdrop-filter: blur(3px);
}

.lightbox-img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(255,255,255,0.3);
  animation: zoomIn 0.3s ease-out;
}

@keyframes zoomIn {
  from { transform: scale(0.7); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}
</style>
