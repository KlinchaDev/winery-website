<template>
  <section class="rakija-page">
    <div class="rakija-card">

      <!-- LEFT: Bottle with shadow -->
      <div class="rakija-left fade-in">
        <div class="bottle-container">
          <div class="bottle-shadow"></div>
          <img src="/images/rakijaBottle.png" alt="Rakija Bottle" class="bottle" />
        </div>
      </div>

      <!-- RIGHT: Text box with background -->
      <div class="rakija-right fade-up">
        <div class="info-box">

          <h1 class="wine-title">
            Klincharovka<br />Stara Žolta
          </h1>

          <p class="subtitle">Traditional Rakija · 45% Alc.</p>
          <hr class="divider" />

          <!-- story paragraphs -->
          <p class="story">
            Obtained from grapes from our own vineyards
of the Cardinal and Italian Muscat varieties.
          </p>

          <p class="story">
            Distilled in traditional copper stills, this rakija delivers
            a warm, rich aroma and an authentically smooth character.
          </p>

          <div class="details">
            <p><strong>Volume:</strong> 0.5 L</p>
            <p><strong>Price:</strong> €15</p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* ===== PAGE BACKGROUND ===== */
.rakija-page {
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 60px 0;
}

/* ===== MAIN LAYOUT ===== */
.rakija-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

/* ===== BOTTLE SIDE ===== */
.bottle-container {
  position: relative;
  width: 380px;
  height: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bottle {
  width: 360px;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25));
  transition: transform 0.6s ease;
}
.bottle:hover {
  transform: scale(1.05) translateY(-5px);
}

/* ===== REALISTIC SHADOW UNDER BOTTLE ===== */
.bottle-shadow {
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 260px;
  height: 40px;
  background: radial-gradient(
    ellipse,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  filter: blur(6px);
  z-index: -1;
}

/* ===== TEXT BOX WITH BACKGROUND ===== */
.rakija-right {
  position: relative;
  width: 500px;
  height: 670px;
  background: url("/images/rakijaBackgr3.jpg") center/cover no-repeat;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

/* dark overlay */
.rakija-right::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  z-index: 0;
}

/* ===== INFO BOX ===== */
.info-box {
  position: relative;
  z-index: 1;
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 50px 30px 20px;
  color: #ffffff;
  text-align: left;
}

/* ===== TITLE ===== */
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

/* ===== SUBTITLE ===== */
.subtitle {
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  color: #f0e8c2;
  margin-top: 20px;
  margin-bottom: 10px;
}

/* ===== DIVIDER ===== */
.divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #c4a676, #f0dcb3);
  border: none;
  margin-bottom: 15px;
}

/* ===== STORY TEXT ===== */
.story {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #f8f8f8;
  margin-bottom: 14px;
}

/* ===== DETAILS ===== */
.details {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  color: #ffffff;
  margin-top: 10px;
}

/* ===== ANIMATIONS ===== */
.fade-in {
  animation: fadeIn 1.2s ease forwards;
}
.fade-up {
  animation: fadeUp 1.4s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
