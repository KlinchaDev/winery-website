<template>
  <section class="wine-page">
    <div class="wine-card">
      <!-- LEFT: bottle -->
      <div class="wine-left fade-in">
        <div class="splash-container">
          <img src="/images/belo.png" alt="White Wine Splash" class="splash" />
          <img src="/images/belan.png" alt="Belan Wine Bottle" class="bottle" />
        </div>
      </div>

      <!-- RIGHT: text -->
      <div class="wine-right fade-up">
        <div class="info-box">
          <h1 class="wine-title">
            Belan <span class="grenache">grenache blanc</span>
          </h1>

          <p class="subtitle">White Dry Wine · 2023 Vintage</p>
          <hr class="divider" />

          <p class="story">
            <span class="highlight">Belan</span> is a white dry wine made from
            Grenache Blanc, cultivated in our own vineyards in the
            <span class="highlight">Crveno Brdo</span> near the village of Begnishte.
          </p>

          <div class="details">
            <p><strong>Volume:</strong> 0.75 L</p>
            <p><strong>Price:</strong> €10</p>
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
  padding: 60px 20px;
  box-sizing: border-box;
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
.wine-left {
  flex: 0 0 auto;
}

.splash-container {
  position: relative;
  width: 450px;
  height: 760px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.splash {
  position: absolute;
  bottom: 100px;
  width: 140%;
  height: auto;
  opacity: 0.9;
  z-index: 1;
  filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1));
}

.bottle {
  position: relative;
  width: 330px;
  height: auto;
  z-index: 2;
  margin-top: 88px;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25));
  transition: transform 0.6s ease;
}

.bottle:hover {
  transform: scale(1.05) translateY(-5px);
}

/* === text side === */
.wine-right {
  position: relative;
  width: 500px;
  min-height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/images/whiteG.jpg") center/cover no-repeat;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 50px 40px rgba(0, 0, 0, 0.15);
}

/* dark overlay */
.wine-right::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75));
  z-index: 0;
}

/* === info box === */
.info-box {
  position: relative;
  z-index: 1;
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 70px 50px 40px;
  color: #ffffff;
  text-align: left;
  box-sizing: border-box;
}

/* === title === */
.wine-title {
  position: relative;
  font-family: "Cormorant Garamond", serif;
  font-size: 3rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  text-transform: capitalize;
  text-shadow:
    0 4px 10px rgba(210, 170, 90, 0.45),
    0 1px 2px rgba(0, 0, 0, 0.25);
}

.wine-title .grenache {
  color: #e6c77a;
  font-style: italic;
  font-weight: 500;
  text-shadow:
    0 0 6px rgba(230, 199, 122, 0.6),
    0 0 14px rgba(210, 170, 90, 0.45);
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

/* === subtitle === */
.subtitle {
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  color: #f0e8c2;
  margin-top: 20px;
  margin-bottom: 10px;
}

/* === divider === */
.divider {
  width: 60px;
  height: 2px;
  border: none;
  background: linear-gradient(90deg, #c4a676, #f0dcb3);
  margin-bottom: 15px;
}

/* === story === */
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
  color: #f5e9b9;
}

.story .highlight {
  font-style: italic;
  font-weight: 600;
  color: #ffffff;
}

/* === details === */
.details {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  color: #ffffff;
  margin-top: 10px;
  flex-wrap: wrap;
}

/* === animations === */
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

/* ===== LAPTOP / SMALL DESKTOP ===== */
@media (max-width: 1100px) {
  .wine-card {
    gap: 3rem;
    align-items: center;
  }

  .splash-container {
    width: 340px;
    height: 640px;
  }

  .splash {
    bottom: 72px;
    width: 132%;
  }

  .bottle {
    width: 285px;
    margin-top: 72px;
  }

  .wine-right {
    width: 460px;
    min-height: 580px;
  }

  .info-box {
    padding: 70px 38px 32px;
  }

  .wine-title {
    font-size: 2.6rem;
  }
}

/* ===== TABLET ===== */
@media (max-width: 900px) {
  .wine-page {
    padding: 50px 18px;
  }

  .wine-card {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 560px;
  }

  .wine-left,
  .wine-right {
    width: 100%;
  }

  .splash-container {
    width: 290px;
    height: 520px;
    margin: 0 auto;
  }

  .splash {
    width: 132%;
    bottom: 38px;
  }

  .bottle {
    width: 238px;
    margin-top: 42px;
  }

  .wine-right {
    width: 100%;
    min-height: 520px;
    border-radius: 18px;
  }

  .info-box {
    width: 100%;
    padding: 60px 32px 34px;
  }

  .wine-title {
    font-size: 2.4rem;
  }

  .story {
    max-width: 100%;
    font-size: 1.02rem;
    line-height: 1.75;
  }
}

/* ===== MOBILE ===== */
@media (max-width: 768px) {
  .wine-page {
    min-height: auto;
    padding: 34px 16px 46px;
    overflow: visible;
  }

  .wine-card {
    flex-direction: column;
    align-items: center;
    gap: 4px;
    max-width: 430px;
  }

  .wine-left {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .splash-container {
    width: 235px;
    height: 410px;
    margin: 0 auto -14px;
  }

  .splash {
    width: 145%;
    bottom: 22px;
  }

  .bottle {
    width: 188px;
    height: auto;
    margin-top: 24px;
  }

  .wine-right {
    width: 100%;
    min-height: auto;
    border-radius: 18px;
    box-shadow: 0 24px 28px rgba(0, 0, 0, 0.12);
  }

  .info-box {
    width: 100%;
    height: auto;
    padding: 34px 24px 30px;
  }

  .wine-title {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .wine-title::after {
    width: 72px;
    bottom: -10px;
  }

  .subtitle {
    font-size: 0.78rem;
    letter-spacing: 1.4px;
    margin-top: 18px;
    margin-bottom: 10px;
  }

  .divider {
    width: 52px;
    margin-bottom: 12px;
  }

  .story {
    font-size: 1rem;
    line-height: 1.7;
    margin-top: 14px;
    margin-bottom: 18px;
  }

  .details {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    margin-top: 4px;
    font-size: 0.88rem;
  }
}

/* ===== SMALL MOBILE ===== */
@media (max-width: 480px) {
  .wine-page {
    padding: 28px 14px 40px;
  }

  .wine-card {
    max-width: 380px;
  }

  .splash-container {
    width: 210px;
    height: 380px;
  }

  .splash {
    width: 150%;
    bottom: 18px;
  }

  .bottle {
    width: 174px;
    margin-top: 20px;
  }

  .info-box {
    padding: 30px 20px 26px;
  }

  .wine-title {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 0.74rem;
    letter-spacing: 1.2px;
  }

  .story {
    font-size: 0.96rem;
    line-height: 1.65;
  }

  .details {
    font-size: 0.84rem;
  }
}
</style>