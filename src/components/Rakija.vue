<template>
  <section class="rakija-page">
    <div class="rakija-card">

      <!-- LEFT: Bottle -->
      <div class="rakija-left fade-in">
        <div class="bottle-container">
          <div class="bottle-shadow"></div>
          <img src="/images/rakijaBottle.png" alt="Rakija Bottle" class="bottle" />
        </div>
      </div>

      <!-- RIGHT: Text -->
      <div class="rakija-right fade-up">
        <div class="info-box">
          <h1 class="wine-title">
            Klincharovka<br />Stara Žolta
          </h1>

          <p class="subtitle">Traditional Rakija · 45% Alc.</p>
          <hr class="divider" />

          <p class="story">
            Obtained from grapes from our own vineyards of the Cardinal
            and Italian Muscat varieties.
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
.rakija-page {
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 60px 20px;
  box-sizing: border-box;
  overflow: hidden;
}

/* ===== MAIN LAYOUT ===== */
.rakija-card {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 6rem;
  max-width: 1300px;
  width: 100%;
}

/* ===== BOTTLE SIDE ===== */
.rakija-left {
  flex: 0 0 auto;
}

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
  position: relative;
  z-index: 2;
}

.bottle:hover {
  transform: scale(1.05) translateY(-5px);
}

/* ===== SHADOW ===== */
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
  z-index: 1;
}

/* ===== TEXT BOX ===== */
.rakija-right {
  position: relative;
  width: 500px;
  min-height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/images/rakijaBackgr3.jpg") center/cover no-repeat;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 50px 40px rgba(0, 0, 0, 0.15);
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
  padding: 80px 50px 40px;
  color: #ffffff;
  text-align: left;
  box-sizing: border-box;
}

/* ===== TITLE ===== */
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

/* ===== STORY ===== */
.story {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #f8f8f8;
  margin-top: 14px;
  margin-bottom: 0;
  max-width: 420px;
}

.story + .story {
  margin-top: 14px;
}

/* ===== DETAILS ===== */
.details {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  color: #ffffff;
  margin-top: 22px;
  flex-wrap: wrap;
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

/* ===== LAPTOP / SMALL DESKTOP ===== */
@media (max-width: 1100px) {
  .rakija-card {
    gap: 3rem;
    align-items: center;
  }

  .bottle-container {
    width: 320px;
    height: 620px;
  }

  .bottle {
    width: 300px;
  }

  .rakija-right {
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
  .rakija-page {
    padding: 50px 18px;
  }

  .rakija-card {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 560px;
  }

  .rakija-left,
  .rakija-right {
    width: 100%;
  }

  .bottle-container {
    width: 290px;
    height: 520px;
    margin: 0 auto;
  }

  .bottle {
    width: 250px;
    height: auto;
  }

  .bottle-shadow {
    width: 180px;
    height: 28px;
    bottom: 10px;
  }

  .rakija-right {
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
  .rakija-page {
    min-height: auto;
    padding: 34px 16px 46px;
    overflow: visible;
  }

  .rakija-card {
    flex-direction: column;
    align-items: center;
    gap: 4px;
    max-width: 430px;
  }

  .rakija-left {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .bottle-container {
    width: 235px;
    height: 400px;
    margin: 0 auto -12px;
  }

  .bottle {
    width: 200px;
    height: auto;
  }

  .bottle-shadow {
    width: 150px;
    height: 24px;
    bottom: 12px;
  }

  .rakija-right {
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
  }

  .details {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    margin-top: 18px;
    font-size: 0.88rem;
  }
}

/* ===== SMALL MOBILE ===== */
@media (max-width: 480px) {
  .rakija-page {
    padding: 28px 14px 40px;
  }

  .rakija-card {
    max-width: 380px;
  }

  .bottle-container {
    width: 210px;
    height: 370px;
  }

  .bottle {
    width: 180px;
  }

  .bottle-shadow {
    width: 135px;
    height: 20px;
    bottom: 12px;
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