<template>
  <section class="wine-gallery">
    <!-- 3-column layout -->
    <div class="selection">

      <!-- Left: Rakija -->
      <div
        class="choice elegant-choice rakija"
        :class="{ active: selected === 'rakija' }"
        @click="select('rakija')"
      >
        <div class="choice-square">
          <img src="/images/rakija4.jpg" alt="Rakija" />
        </div>
        <h2>Rakija</h2>
        <p class="description">Bold, handcrafted spirit distilled with heritage.</p>
      </div>

      <!-- Center: Logo + Curved Question -->
      <div class="logo-center">
        <svg viewBox="0 0 500 250" class="curved-text" xmlns="http://www.w3.org/2000/svg">
          <defs>
          <path id="text-arc" d="M 50 215 A 200 200 0 0 1 450 220" />



          </defs>
          <text
            font-size="33"
            font-weight="700"
            fill="#3b2d1f"
            font-family="Playfair Display"
            letter-spacing="1.5"
          >
            <textPath xlink:href="#text-arc" startOffset="50%" text-anchor="middle">
              What are you in the mood for today?
            </textPath>
          </text>
        </svg>

        <div class="logo-wrapper">
          <img src="/images/landBl.png" alt="Winery Logo" class="center-logo" />
          <div class="ornament"></div>
        </div>
      </div>

      <!-- Right: Wine -->
      <div
        class="choice elegant-choice vino"
        :class="{ active: selected === 'vino' }"
        @click="select('vino')"
      >
        <div class="choice-square">
          <img src="/images/wine1.jpg" alt="Wine" />
        </div>
        <h2>Wine</h2>
        <p class="description">Delicate, aged masterpiece full of depth.</p>
      </div>
    </div>

    <!-- INFO SECTION -->
    <transition name="fade">
      <div v-if="selected" class="info-container">
        <!-- Rakija Info -->
        <div v-if="selected === 'rakija'" class="wines-grid single-card">
          <router-link to="/wines/rakija" class="wine-card glass-card">
            <img src="/images/rakijaBottle.png" alt="Rakija Bottle" />
            <div class="wine-info">
              <h3>Klincharovka Stara Žolta</h3>
              <p><span class="label">Strength</span> 45%</p>
              <p><span class="label">Price</span> €15 / 0.5L bottle</p>
            </div>
          </router-link>
        </div>

        <!-- Wines Grid -->
        <div v-else-if="selected === 'vino'" class="wines-grid">
          <router-link
            v-for="(wine, index) in wines"
            :key="index"
            class="wine-card glass-card"
            :to="wine.route"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <img :src="wine.image" :alt="wine.name" />
            <div class="wine-info">
              <h3>{{ wine.name }}</h3>
              <p><span class="label">Alcohol</span> {{ wine.alcohol }}</p>
              <p><span class="label">Price</span> {{ wine.price }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref(null)

const select = (option) => {
  selected.value = selected.value === option ? null : option
}

const wines = [
  { name: "Moma Resavka Rosé", image: "/images/rose.png", alcohol: "13%",  price: "€12 / 0.75L bottle", route: "/wines/rose" },
  { name: "Vranec",            image: "/images/vranec.png", alcohol: "14%",  price: "€13 / 0.75L bottle", route: "/wines/vranec" },
  { name: "Temjanika",         image: "/images/temjanika.png", alcohol: "12%",  price: "€11 / 0.75L bottle", route: "/wines/temjanika" },
  { name: "Belan",             image: "/images/belan.png", alcohol: "12%",  price: "€10 / 0.75L bottle", route: "/wines/belan" },
  { name: "Stanushina",        image: "/images/stanushina.png", alcohol: "13%",  price: "€12 / 0.75L bottle", route: "/wines/stanushina" },
  { name: "Riesling",          image: "/images/riesling.png", alcohol: "12.5%",price: "€11 / 0.75L bottle", route: "/wines/riesling" },
  { name: "Cabernet ",         image: "/images/caberne.png", alcohol: "13.5%",price: "€14 / 0.75L bottle", route: "/wines/cuvee" },
]
</script>

<style scoped>
.wine-gallery {
  padding-top: 180px; 
  background: 
    linear-gradient(to bottom right, rgba(250,246,239,0.75), rgba(255,255,255,0.75)),
    url("/images/barel.jpg") center/cover no-repeat;
  background-attachment: fixed;
}




/* ---- SQUARE LOGIC ---- */
.choice-square {
  width: 100%;
  aspect-ratio: 1 / 1; /* perfect square */
  border-radius: 18px;
  overflow: hidden;
  background-color: #fdf8f1;
}

.choice-square img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* fills square */
  border-radius: 18px;
  filter: grayscale(100%) brightness(85%);
  transition: 0.4s;
}

.elegant-choice:hover .choice-square img {
  filter: grayscale(0%) brightness(100%) saturate(110%);
  transform: scale(1.04);
}

/* ===== TOP SELECTION (RAKIJA / LOGO / WINE) ===== */
.selection {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 60px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 80px;
  padding: 0 20px;
  box-sizing: border-box;
}

.logo-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.curved-text {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto -180px auto;
}

.center-logo {
  width: 210px;
}


.ornament {
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, #a67c52, #f1d6a6, #a67c52);
  margin: 20px auto 0;
  border-radius: 2px;
}

/* Naslov + opis pod slikama Rakija/Wine */
.elegant-choice h2 {
  margin-top: 18px;
  font-size: 26px;
  font-family: "Playfair Display", serif;
  color: #3b2d1f;
  letter-spacing: 1px;
}

.description {
  color: #6a5c4d;
  font-style: italic;
  opacity: 0.85;
}

/* ===== INFO SECTION WRAPPER ===== */
.info-container {
  position: relative;
  z-index: 3;
}

/* ===== LUX STEKLENI CARDI ===== */
.glass-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.85), rgba(248, 241, 229, 0.95));
  border-radius: 18px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(175, 140, 93, 0.35);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
}

.glass-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 55px rgba(0, 0, 0, 0.18);
  border-color: rgba(190, 150, 100, 0.7);
}

/* ===== RAKIJA SINGLE CARD ===== */
.single-card {
  display: flex;
  justify-content: center;
}
.single-card .wine-card {
  max-width: 360px;
}

/* ===== WINE GRID – 4 v VRSTI, SIMETRIČNO ===== */
.wines-grid {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;          /* center */
  padding: 0 20px;            /* enak left + right */
  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));  /* 4 v vrstici */
  gap: 35px;
}

.wine-card {
  padding: 22px 18px 24px;
  text-align: center;
  animation: fadeUp 0.8s ease both;
}

/* Slike steklenic */
.wine-card img {
  width: 100%;
  height: 260px;
  object-fit: contain;
  border-radius: 14px;
  margin-bottom: 16px;
  background: radial-gradient(circle at top, #fdf8f1 0%, #f6eee2 60%, #f1e6d8 100%);
}

/* ===== MODERN & ELEGANT BESedILO POD VINOM ===== */
/* ===== MODERN & ELEGANT BESedILO POD VINOM — GOLD EDITION ===== */
.wine-info h3 {
  color: #2f2418;
  font-family: "Playfair Display", serif;
  margin-bottom: 14px;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
}

.wine-info h3::after {
  content: "";
  display: block;
  width: 50%;
  height: 2px;
  background: #c8a46a; /* gold */
  margin: 6px auto 0;
  border-radius: 2px;
}
.wine-info p {
  color: #5b4a38; /* elegantna rjavkasto-zlata */
  font-size: 15px;
  margin-bottom: 6px;
  line-height: 1.5;
}

.wine-info .label {
  display: inline-block;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 600;

  /* PURE GOLD  */
  color: #c8a46a; 
  margin-right: 6px;
}

/* Odstrani vijolično → vse linke narediva zlate */
.wine-info a {
  color: #c8a46a;           /* gold */
  text-decoration: none;
  font-weight: 600;
}

.wine-info a:hover {
  color: #a88652;           /* darker gold hover */
}


/* ===== ANIMACIJA ===== */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
