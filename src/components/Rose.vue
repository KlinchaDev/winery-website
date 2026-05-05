<template>
  <section class="wine-page">
    <div class="wine-card">
      <!-- LEFT: bottle -->
      <div class="wine-left fade-in">
        <div class="splash-container">
          <img src="/images/roseL.png" alt="Rosé Wine Splash" class="splash" />
          <img src="/images/rose.png" alt="Moma Resavka Wine Bottle" class="bottle" />
        </div>
      </div>

      <!-- RIGHT: text -->
      <div class="wine-right fade-up">
        <div class="info-box">
          <h1 class="wine-title">Moma Resavka</h1>

          <p class="subtitle">Rosé Wine · 2023 Vintage</p>
          <hr class="divider" />

          <p class="story">
            Enjoy and toast with Moma Resavka, our rosé wine
            from our indigenous Stanushina variety, which will captivate you with the fruity scent of red fruit and delicate floral aromas.
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
  width: 350px;
  height: 680px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.splash {
  position: absolute;
  bottom: -35px;
  width: 115%;
  height: auto;
  opacity: 0.9;
  z-index: 1;
  filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1));
}

.bottle {
  position: relative;
  width: 320px;
  height: 100%;
  object-fit: contain;
  z-index: 2;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25));
  transition: transform 0.6s ease;
  margin-top: -9px;
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
  background: url("/images/roseB.jpg") center/cover no-repeat;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 50px 40px rgba(0, 0, 0, 0.15);
}

.wine-right::before {
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

/* === info box === */
.info-box {
  position: relative;
  z-index: 1;
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 100px 50px 40px;
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
  background: linear-gradient(90deg, #e8a6a6, #f6c3c3);
  border-radius: 3px;
}

/* === subtitle === */
.subtitle {
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  color: #fbe8e8;
  margin-top: 20px;
  margin-bottom: 10px;
}

/* === divider === */
.divider {
  width: 60px;
  height: 2px;
  border: none;
  background: linear-gradient(90deg, #f3b4b4, #f9d4d4);
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
  color: #ffe5e5;
}

.story .highlight {
  color: #ffffff;
  font-style: italic;
  font-weight: 600;
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
    width: 300px;
    height: 600px;
  }

  .bottle {
    width: 270px;
  }

  .wine-right {
    width: 460px;
    min-height: 580px;
  }

  .info-box {
    padding: 80px 38px 32px;
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
    width: 280px;
    height: 520px;
    margin: 0 auto;
  }

  .splash {
    width: 120%;
    bottom: -22px;
  }

  .bottle {
    width: 240px;
    margin-top: 0;
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
    height: 420px;
    margin: 0 auto -14px;
  }

  .splash {
    width: 126%;
    bottom: -8px;
  }

  .bottle {
    width: 198px;
    height: auto;
    margin-top: 0;
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
    height: 390px;
  }

  .splash {
    width: 132%;
    bottom: -6px;
  }

  .bottle {
    width: 182px;
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