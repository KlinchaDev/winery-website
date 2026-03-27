<template>
  <section class="about-section">

    <!-- ================= HERO BLOCK ================= -->
    <div class="hero-block">
      <img class="hero-image" src="/images/primer1.jpg" />
      <img class="hero-frame" src="/images/frameG.png" />
    </div>

    <!-- ================= CONTENT ================= -->
    <div class="about-content">

      <!-- TITLE BELOW IMAGE -->
      <h1 class="about-title">From Vineyard to Cellar</h1>

      <!-- MAIN TEXT -->
      <p class="about-text">
       Surrounded by one of the oldest wine regions in the Balkans, our vineyards grow in the heart of Tikveš — a place shaped by warm summers, fertile soil, and generations of family knowledge.  
<br /><br />
We care for 15 decares of vines and cultivate Temjanika, Stanushina, Riesling, Cabernet Sauvignon, and Kardinal. Each variety carries its own aroma, its own character, and its own little story.  
<br /><br />
Our job is simple: to guide what nature begins and allow the fruit to become wine in its own rhythm. What starts under the sun, between rows scented with earth and ripe grapes, finds its true form in our family cellar.

      </p>

      <!-- ===================== HARVEST SECTION ===================== -->
      <div class="harvest-section">

        <h2 class="harvest-title">Harvest</h2>
        <div class="harvest-underline"></div>

        <div class="about-content-inner">
          <div class="about-text-harvest">
            <p>
             During harvest from August until October, we pick every variety separately because the sugar in the grapes decides everything later.
            </p>

            <p>
              Too little sugar makes the wine weak and sour while too much makes it heavy and unbalanced. That’s why the moment we harvest is crucial: the right sugar level gives us a wine that tastes clean, smooth, and exactly as it should.
            </p>

            <p>
               When the grapes are ready, we collect them in crates and bring them straight to the winery. There, we crush them and transfer everything into the press so we can get the clean grape juice "must".After that, the juice goes into barrels. We leave it to rest for a few days, and slowly the fermentation starts on its own. 
            </p>
          </div>

          <!-- Slider -->
          <div class="about-slider">
            <img :src="images[currentImage]" alt="Harvest photo" class="slider-image" />
            <button class="arrow left" @click="prevImage">&#10094;</button>
            <button class="arrow right" @click="nextImage">&#10095;</button>
          </div>
        </div>
      </div>

      <!-- ===================== CELLAR CHOICES ===================== -->
      <div class="cellar-choices">

        <!-- Left: Etno Podrum -->
        <div
          class="choice elegant-choice cellar"
          @click="selectCellar('etno')"
        >
          <div class="choice-square">
            <img src="/images/etno.jpg" alt="Etno Podrum" />
          </div>
          <h2>Etno Podrum</h2>
          <p class="description">Traditional, rustic and full of heritage.</p>
        </div>

        <!-- CENTER — LOGO (150px) -->
        <div class="logo-center simple-center">
          <img src="/images/cellarLogo.png" class="cellar-logo" alt="Cellar Logo" />
        </div>

        <!-- Right: Vinarija Klincharov -->
        <div
          class="choice elegant-choice cellar"
          @click="selectCellar('vinarija')"
        >
          <div class="choice-square">
            <img src="/images/winery.jpg" alt="Vinarija Klincharov" />
          </div>
          <h2>Vinarija Klincharov</h2>
          <p class="description">Modern space where our wine comes to life.</p>
        </div>

      </div>


      <!-- ===================== ETNO / VINARIJA INFO SECTION ===================== -->
      <transition name="fade">
        <div v-if="selectedCellar" class="cellar-info-section">

          <!-- ============ ETNO PODRUM ============ -->
          <div v-if="selectedCellar === 'etno'" class="about-content-inner cellar-layout">

            <div class="about-text-harvest">
              <h2 class="harvest-title cellar-title">Etno Podrum</h2>
              <div class="harvest-underline cellar-underline"></div>
<p>
  Our Etno Podrum is a small, rustic space filled with traditional tools and objects my grandfather collected over many years. Nothing inside is modern — everything carries the spirit of how things were done in the old days.
</p>

<p>
  Here we also keep our homemade rakija, stored in old wooden barrels that are more than 20 years old. The barrels, the smell of the wood, and the quiet atmosphere make this place feel untouched by time.
</p>

<p>
  Visitors are always curious to see this part of our home, especially foreigners. They love discovering the tradition and the story behind each object.
</p>

            </div>

            <div class="about-slider cellar-slider">
              <img :src="etnoImages[etnoIndex]" class="slider-image" />
              <button class="arrow left" @click="prevEtno">&#10094;</button>
              <button class="arrow right" @click="nextEtno">&#10095;</button>
            </div>

          </div>

          <!-- ============ VINARIJA ============ -->
          <div v-if="selectedCellar === 'vinarija'" class="about-content-inner cellar-layout">

            <div class="about-text-harvest">
              <h2 class="harvest-title cellar-title">Vinarija Klincharov</h2>
              <div class="harvest-underline cellar-underline"></div>

             <p>
  Our modern winery is the place where all our wines are stored and carefully monitored. Inside, we keep them in stainless-steel tanks and temperature-controlled refrigerators to preserve their freshness and natural aroma.
</p>

<p>
  Visitors can also see our many awards, as well as the equipment we use throughout the production process — from fermentation to cooling. People often enjoy getting a closer look at how everything functions behind the scenes.
</p>

<p>
  Every tour through the winery includes a guided explanation and a tasting. Guests hear the story behind each wine while enjoying the flavors in a relaxed and welcoming atmosphere.
</p>

            </div>

            <div class="about-slider cellar-slider">
              <img :src="vinImages[vinIndex]" class="slider-image" />
              <button class="arrow left" @click="prevVin">&#10094;</button>
              <button class="arrow right" @click="nextVin">&#10095;</button>
            </div>

          </div>

        </div>
      </transition>

    </div>

  </section>
</template>




<script setup>
import { ref } from "vue"

const selectedCellar = ref(null)
function selectCellar(option) {
  selectedCellar.value = option
}

/* HARVEST SLIDER */
const images = ref([
  '/images/AS1.jpg',
  '/images/tato.jpg',
  '/images/harvest3.webp',
  '/images/harvest2_1.jpg',
  '/images/harvest2.jpg',
  '/images/must.jpg',
])

const currentImage = ref(0)
const nextImage = () => currentImage.value = (currentImage.value + 1) % images.value.length
const prevImage = () => currentImage.value = (currentImage.value - 1 + images.value.length) % images.value.length

/* ETNO SLIDER */
const etnoImages = ref([
  '/images/etnoB3.jpg',
  '/images/etnoB2.jpg',
  '/images/galerija17.jpg',
  '/images/galerija18.jpg',
  '/images/galerija4.jpg'
])
const etnoIndex = ref(0)
const nextEtno = () => etnoIndex.value = (etnoIndex.value + 1) % etnoImages.value.length
const prevEtno = () => etnoIndex.value = (etnoIndex.value - 1 + etnoImages.value.length) % etnoImages.value.length

/* VINARIJA SLIDER */
const vinImages = ref([
  '/images/vinarijaN1.jpg',
  '/images/vinarijaN2.jpg',
  '/images/vinarijaB1.jpg',
  '/images/vinarijaB2.jpg',
  '/images/vinarijaB3.jpg',
  '/images/vinarijaB4.jpg',
])
const vinIndex = ref(0)
const nextVin = () => vinIndex.value = (vinIndex.value + 1) % vinImages.value.length
const prevVin = () => vinIndex.value = (vinIndex.value - 1 + vinImages.value.length) % vinImages.value.length
</script>





<style scoped>
/* ================= HERO ================= */
.hero-block {
  position: relative;
  width: 100%;
  height: 55vh;
  overflow: visible;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-frame {
  position: absolute;
  bottom: -300px;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  max-width: 900px;
  z-index: 10;
  filter: drop-shadow(0 12px 22px rgba(0,0,0,0.25));
}

.hero-block::after {
  content: "";
  position: absolute;
  bottom: -320px;
  left: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(to bottom, transparent, white);
  z-index: 1;
}

/* ================= CONTENT ================= */
.about-content {
  background: white;
  padding-top: 55px;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 80px;
  text-align: center;
}

/* TITLE */
.about-title {
  font-size: 44px;
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
  color: #3b2d1f;
  margin-bottom: 40px;
  margin-top: 10px;
}

/* MAIN TEXT */
.about-text {
  max-width: 650px;
  margin: 0 auto 60px;
  font-size: 18px;
  line-height: 1.7;
  color: #4a3f36;
}

/* ================= HARVEST (TOP SECTION) ================= */
.harvest-title {
  font-size: 32px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
  color: #3b2d1f;
  margin-top: 180px;
  margin-bottom: 8px;
}

.harvest-underline {
  width: 90px;
  height: 2px;
  margin: 0 auto 40px;
  background: linear-gradient(to right, #b08a57, #e0c9a6);
}

.about-content-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  align-items: center;
}

.about-text-harvest {
  flex: 1;
  max-width: 550px;
  text-align: left;
}

.about-text-harvest p {
  font-size: 16px;
  color: #4a3f36;
  line-height: 1.7;
  margin-bottom: 14px;
}

/* ================= SLIDER ================= */
.about-slider {
  flex: 1;
  max-width: 420px;
  position: relative;
  height: 420px;
  border-radius: 14px;
  overflow: hidden;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.85);
  border: none;
  font-size: 26px;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
}

.arrow.left { left: 10px; }
.arrow.right { right: 10px; }

/* ================= CELLAR CHOICES ================= */
.cellar-choices {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin-top: 250px !important;
  margin-bottom: 80px;
}

/* ---------- CARDS (350px dark + premium) ---------- */
.choice.elegant-choice {
  width: 350px;
  text-align: center;
  cursor: pointer;
  transition: all 0.35s ease;
}

.choice-square {
  width: 350px;
  aspect-ratio: 1/1;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

/* Dark overlay */
.choice-square::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
  transition: opacity 0.35s ease;
}

.choice-square img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%);
  transition: filter 0.35s ease, transform 0.35s ease;
}

/* Hover reveal real color */
.choice.elegant-choice:hover .choice-square::after {
  opacity: 0;
}
.choice.elegant-choice:hover img {
  filter: grayscale(0%) contrast(1.05) saturate(1.1);
  transform: scale(1.03);
}

/* ---------- CAPTION ---------- */
.choice h2 {
  margin-top: 18px;
  font-size: 26px;
  font-family: "Playfair Display", serif;
  color: #2a231c;
  font-weight: 600;
  letter-spacing: 1px;
}

.description {
  margin-top: 8px;
  font-size: 15px;
  color: #6d6256;
  font-style: normal;
  opacity: 0.75;
  transition: opacity 0.3s ease, color 0.3s ease;
}

.choice.elegant-choice:hover h2 {
  color: #1a1714;
}
.choice.elegant-choice:hover .description {
  opacity: 1;
  color: #4d4339;
}

/* ---------- CENTER LOGO BLOCK (150px) ---------- */
.simple-center {
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cellar-logo {
  width: 150px;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.cellar-logo:hover {
  opacity: 1;
}

/* ===================== TRANSITION FOR <transition name="fade"> ===================== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ===================== ETNO / VINARIJA INFO SECTION ===================== */
/* MAIN WRAPPER – glass + shadow */
.cellar-info-section {
  margin-top: 80px;
  padding: 55px 50px;
  background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.82),
      rgba(250, 246, 239, 0.92)
    );
  border-radius: 28px;
  box-shadow: 0 28px 55px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(14px);
  animation: fadeUp 0.7s ease-out;
}

/* FLEX layout for text + image */
.cellar-layout {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
}

/* LEFT TEXT BLOCK – gold frame */
.cellar-layout .about-text-harvest {
  width: 450px;
  box-sizing: border-box;
  padding: 32px 32px;
  background: rgba(255,255,255,0.65);
  border: 2px solid rgba(198, 155, 102, 0.55);
  border-radius: 20px;
  box-shadow: 0 18px 35px rgba(0,0,0,0.15);
  margin-top: 0;
  opacity: 0;
  animation: fadeLeft 0.8s ease forwards;
  animation-delay: 0.15s;
}

/* BEAUTIFUL LUXURY TITLE */
.cellar-title {
  font-family: "Playfair Display", serif;
  font-size: 38px !important;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #2a231c;
  text-align: center;
  margin: 0 auto 14px auto;
  display: block;
}

/* underline like in screenshot */
.cellar-underline {
  width: 160px;
  height: 2px;
  background: linear-gradient(90deg, #b69363, #e3caa8, #b69363);
  margin: 0 auto 30px auto !important;
  border-radius: 2px;
  opacity: 0.8;
}

/* PARAGRAPHS */
.cellar-layout .about-text-harvest p {
  font-size: 17px !important;
  color: #4d4037;
  line-height: 1.75;
  margin-bottom: 16px;
}

/* RIGHT SLIDER – same width as text */
.cellar-slider {
  width: 450px !important;
  height: 450px !important;
  flex-shrink: 0;
  border-radius: 22px;
  overflow: hidden;
  margin-top: 0;
  opacity: 0;
  box-shadow: 0 28px 55px rgba(0, 0, 0, 0.22);
  animation: fadeRight 0.8s ease forwards;
  animation-delay: 0.25s;
}

.cellar-slider .slider-image {
  border-radius: 22px;
  transition: transform 0.6s ease, filter 0.6s ease;
  filter: brightness(82%);
}

.cellar-slider .slider-image:hover {
  transform: scale(1.05);
  filter: brightness(100%);
}

/* Modern arrow buttons */
.cellar-slider .arrow {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  transition: 0.3s ease;
}

.cellar-slider .arrow:hover {
  background: rgba(255, 255, 255, 0.9);
}

/* ======================= ANIMATIONS ======================= */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(60px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeLeft {
  from { opacity: 0; transform: translateX(-25px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes fadeRight {
  from { opacity: 0; transform: translateX(25px); }
  to   { opacity: 1; transform: translateX(0); }
}
/* === FINAL PERFECT HEIGHT ALIGNMENT FIX === */

/* Force both columns to share equal height */
.cellar-layout {
  align-items: stretch !important;
}

/* Text block must match slider height */
.cellar-layout .about-text-harvest {
  min-height: 450px !important; /* SAME as slider */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;   /* keep title + text at top */
}

/* Slider stays fixed height */
.cellar-slider {
  height: 450px !important;
}

/* ===================== HARVEST LUXURY STYLE (MATCH CELLARS) ===================== */

/* Wrap harvest content into luxury gold frame */
.harvest-section .about-content-inner {
  padding: 40px 35px;
  background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.82),
      rgba(250, 246, 239, 0.92)
  );
  border-radius: 28px;
  border: 2px solid rgba(198, 155, 102, 0.45);
  box-shadow: 0 22px 45px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(12px);
  animation: fadeUp 0.7s ease-out;
  align-items: stretch !important; /* match heights */
}

/* Luxury HARVEST TITLE */
.harvest-section .harvest-title {
  font-family: "Playfair Display", serif;
  font-size: 38px !important;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #2a231c !important;
  margin-top: 140px; 
  margin-bottom: 14px;
}

/* Underline identical as cellar */
.harvest-section .harvest-underline {
  width: 160px;
  height: 2px;
  background: linear-gradient(90deg, #b69363, #e3caa8, #b69363);
  margin: 0 auto 40px auto !important;
  border-radius: 2px;
  opacity: 0.8;
}

/* LEFT TEXT BOX gold frame identical to cellar */
.harvest-section .about-text-harvest {
  width: 450px;
  min-height: 420px !important; /* SAME as slider */
  background: rgba(255, 255, 255, 0.65);
  border: 2px solid rgba(198, 155, 102, 0.45);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 18px 35px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: 0;
  animation: fadeLeft 0.8s ease forwards;
  animation-delay: 0.05s;
}

/* Paragraph style identical to cellar */
.harvest-section .about-text-harvest p {
  font-size: 17px !important;
  color: #4d4037;
  line-height: 1.75;
  margin-bottom: 16px;
}

/* RIGHT SLIDER matched to text block */
.harvest-section .about-slider {
  width: 450px !important;
  height: 420px !important;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 22px 45px rgba(0, 0, 0, 0.22);
  opacity: 0;
  animation: fadeRight 0.8s ease forwards;
  animation-delay: 0.15s;
}

/* Image hover effect same as cellar */
.harvest-section .about-slider .slider-image {
  border-radius: 20px;
  filter: brightness(82%);
  transition: transform 0.6s ease, filter 0.6s ease;
}
.harvest-section .about-slider .slider-image:hover {
  transform: scale(1.05);
  filter: brightness(100%);
}

/* Arrows same as cellar */
.harvest-section .about-slider .arrow {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(10px);
  border-radius: 12px;
}
.harvest-section .about-slider .arrow:hover {
  background: rgba(255, 255, 255, 0.9);
}

</style>
