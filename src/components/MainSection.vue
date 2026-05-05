<template>
  <section id="home" class="main-section">
    <img src="/images/letterLogo.png" alt="K Logo" class="center-k" />

    <div class="circle-wrapper">
      <svg class="circle-svg" viewBox="0 0 300 300">
        <defs>
          <path
            id="circlePath"
            d="M150,150
               m -110,0
               a 110,110 0 1,1 220,0
               a 110,110 0 1,1 -220,0"
          />
        </defs>

        <text font-size="22" letter-spacing="6" font-weight="500">
          <textPath href="#circlePath">
            WELCOME TO KLINCHAROV FAMILY WINERY • WELCOME TO KLINCHAROV FAMILY WINERY •
          </textPath>
        </text>
      </svg>
    </div>
  </section>

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

  <section class="awards-section">
    <h2 class="awards-title">Awards</h2>

    <div class="awards-slider">
      <div class="awards-track">
        <div
          v-for="(award, index) in duplicatedAwards"
          :key="index"
          class="award-item"
        >
          <img :src="award" class="award-img" alt="Award" />
        </div>
      </div>
    </div>
  </section>

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

    <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
      <img :src="activeImage" class="lightbox-img" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

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

const awards = ref([
  '/images/nagrada1.jpg',
  '/images/silver2025.png',
  '/images/golden2025.png',
  '/images/bronze20255.png'
])

const duplicatedAwards = computed(() => [...awards.value, ...awards.value])

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
  min-height: 700px;
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
  background: rgba(0, 0, 0, 0.35);
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
  animation: fadeInScale 2s ease-out forwards, rotateOnly 22s linear infinite;
  z-index: 5;
}

.circle-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 10px rgba(255, 230, 150, 0.4));
}

text {
  fill: #f5e6c8;
  stroke: rgba(0, 0, 0, 0.3);
  stroke-width: 0.7px;
}

/* -------------------------------
   ANIMATIONS
-------------------------------- */
@keyframes rotateOnly {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes fadeInScale {
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
  animation: fadeInScale 2s ease-out forwards;
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
   AWARDS SLIDER
-------------------------------- */
.awards-section {
  background: white;
  padding: 30px 0 90px;
  overflow: hidden;
}

.awards-title {
  text-align: center;
  font-size: 34px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #3b2d1f;
  margin-bottom: 35px;
}

.awards-slider {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.awards-track {
  display: flex;
  align-items: center;
  width: max-content;
  animation: awardsScroll 22s linear infinite;
}

.award-item {
  flex: 0 0 auto;
  width: 240px;
  margin: 0 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.award-img {
  width: 100%;
  max-width: 200px;
  height: 200px;
  object-fit: contain;
  display: block;
}

.awards-slider:hover .awards-track {
  animation-play-state: paused;
}

@keyframes awardsScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
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
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.2);
}

.gallery-img:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
}

/* -------------------------------
   LIGHTBOX
-------------------------------- */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  backdrop-filter: blur(3px);
  padding: 20px;
  box-sizing: border-box;
}

.lightbox-img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  animation: zoomIn 0.3s ease-out;
}

@keyframes zoomIn {
  from {
    transform: scale(0.7);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* -------------------------------
   TABLET
-------------------------------- */
@media (max-width: 1024px) {
  .main-section {
    min-height: 620px;
  }

  .circle-wrapper {
    width: 270px;
    height: 270px;
  }

  .center-k {
    width: 100px;
  }

  .story-section {
    padding: 110px 24px;
  }

  .story-block {
    max-width: 760px;
  }

  .story-block h2 {
    font-size: 34px;
    margin-bottom: 20px;
  }

  .story-block p {
    font-size: 17px;
    line-height: 1.75;
  }

  .awards-section {
    padding: 20px 0 70px;
  }

  .awards-title {
    font-size: 30px;
    margin-bottom: 26px;
  }

  .award-item {
    width: 200px;
    margin: 0 14px;
  }

  .award-img {
    max-width: 170px;
    height: 170px;
  }

  .gallery-section {
    padding: 60px 24px;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 18px;
  }
}

/* -------------------------------
   MOBILE
-------------------------------- */
@media (max-width: 480px) {
  .main-section {
    height: 65vh;
    min-height: 380px;
  }


  .circle-wrapper {
    width: 220px;
    height: 220px;
  }

  .circle-svg text {
    font-size: 18px;
  }

  .center-k {
    width: 82px;
  }

  .story-section {
    padding: 80px 18px;
  }

  .story-block {
    max-width: 100%;
  }

  .story-block h2 {
    font-size: 28px;
    letter-spacing: 2px;
    margin-bottom: 18px;
  }

  .story-block p {
    font-size: 16px;
    line-height: 1.7;
  }

  .awards-section {
    padding: 15px 0 55px;
  }

  .awards-title {
    font-size: 26px;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }

  .awards-track {
    animation-duration: 18s;
  }

  .award-item {
    width: 160px;
    margin: 0 10px;
  }

  .award-img {
    max-width: 130px;
    height: 130px;
  }

  .gallery-section {
    padding: 50px 16px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .gallery-img {
    border-radius: 8px;
  }

  .lightbox {
    padding: 14px;
  }

  .lightbox-img {
    max-width: 100%;
    max-height: 85vh;
    border-radius: 10px;
  }
}

/* -------------------------------
   SMALL MOBILE
-------------------------------- */
@media (max-width: 480px) {
  .main-section {
    min-height: 500px;
  }

  .circle-wrapper {
    width: 185px;
    height: 185px;
  }

  .circle-svg text {
    font-size: 16px;
  }

  .center-k {
    width: 68px;
  }

  .story-section {
    padding: 65px 16px;
  }

  .story-block h2 {
    font-size: 23px;
    letter-spacing: 1.5px;
  }

  .story-block p {
    font-size: 15px;
    line-height: 1.65;
  }

  .awards-title {
    font-size: 22px;
    letter-spacing: 1.5px;
  }

  .award-item {
    width: 135px;
    margin: 0 8px;
  }

  .award-img {
    max-width: 110px;
    height: 110px;
  }

  .gallery-grid {
    gap: 10px;
  }
}
</style>