<template>
  <section class="wine-page">
    <div class="wine-card">
      <!-- LEFT: bottle -->
      <div class="wine-left fade-in">
        <div class="splash-container">
          <img src="/images/splash.png" alt="Wine Splash" class="splash" />
          <img src="/images/vranec.png" alt="Vranec Wine Bottle" class="bottle" />
        </div>
      </div>

      <!-- RIGHT: text -->
      <div class="wine-right fade-up">
        <div class="info-box">
<h1 class="wine-title">
  Vranec <span class="barrique"> · barrique</span>
</h1>

          <p class="subtitle">Red Dry Wine</p>
          <hr class="divider" />

          <!-- ✅ NO AWARDS / ✅ SAME STORY STYLE AS ROSE -->
          <p class="story">
            Enjoy and toast with <strong>Vranec</strong>, our bold red wine from the heart of the
            <span class="highlight">Tikveš wine region</span>. Full-bodied and deep, with dark fruit
            aromas and a smooth, long finish.
          </p>

          <div class="details">
            <p><strong>Volume:</strong> 0.75 L</p>
            <p><strong>Price:</strong> €12</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.wine-page {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  padding: 60px 0;
}

/* === layout === */
.wine-card {
  display: flex;
  gap: 6rem;
  align-items: flex-start;
  justify-content: center;
  max-width: 1300px;
  width: 100%;
}

/* === bottle side === */
.splash-container {
  position: relative;
  width: 400px;
  height: 700px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.splash {
  position: absolute;
  bottom: 46px;
  width: 115%;
  height: auto;
  opacity: 0.9;
  z-index: 1;
  filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1));
}

.bottle {
  position: relative;
  width: 360px;
  height: 100%;
  object-fit: contain;
  z-index: 2;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25));
  transition: transform 0.6s ease;
  margin-top: -10px;
}
.bottle:hover {
  transform: scale(1.05) translateY(-5px);
}

/* === text side === */
.wine-right {
  position: relative;
  width: 500px;
  height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/images/pozadina.jpg") center/cover no-repeat;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 50px 40px rgba(0, 0, 0, 0.15);
}


/* overlay */
.wine-right::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  z-index: 0;
}

/* ✅ SAME info-box spacing AS ROSE.VUE */
.info-box {
  position: relative;
  z-index: 1;
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 100px 50px 10px;
  color: #ffffff;
  text-align: left;
}
.wine-title .barrique {
  font-style: italic;
  font-size: 0.7em;      /* 👈 pomalo od naslovot */
  font-weight: 400;
  opacity: 0.9;          /* suptilno, elegantno */
}


/* ✅ SAME title font/style AS ROSE (NOT Great Vibes) */
.wine-title {
  font-family: "Cormorant Garamond", serif;
  font-size: 3rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  text-transform: capitalize;
  text-shadow: 0 4px 10px rgba(210, 170, 90, 0.45),
               0 1px 2px rgba(0, 0, 0, 0.25);
}

.wine-title::after {
  content: "";
  position: absolute;
  bottom: -14px;
  left: 0;
  width: 90px;
  height: 3px;
  background: linear-gradient(90deg, #d6b675, #b28a58);
  border-radius: 3px;
}

/* subtitle stays same type as rose-style */
.subtitle {
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  color: #f0e8c2;
  margin-top: 20px;
  margin-bottom: 10px;
}

/* divider */
.divider {
  width: 60px;
  height: 2px;
  border: none;
  background: linear-gradient(90deg, #c4a676, #f0dcb3);
  margin-bottom: 15px;
}

/* ✅ SAME story positioning AS ROSE */
.story {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.05rem;
  line-height: 1.85;
  color: #f8f8f8;
  margin-top: 18px;
  margin-bottom: 18px;
  max-width: 420px;
}

.story strong {
  color: #ffe5e5;
}
.story .highlight {
  color: #ffffff;
  font-style: italic;
  font-weight: 600;
}

/* details */
.details {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  color: #ffffff;
  margin-top: 10px;
}

/* button */
.buy-btn {
  font-family: "Montserrat", sans-serif;
  padding: 10px 28px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(90deg, #c5a16e, #e5cfa0);
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(197, 161, 110, 0.4);
  transition: all 0.3s ease;
  align-self: center;
}
.buy-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(197, 161, 110, 0.6);
}

/* animations */
.fade-in {
  animation: fadeIn 1.2s ease forwards;
}
.fade-up {
  animation: fadeUp 1.4s ease forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateX(-30px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
