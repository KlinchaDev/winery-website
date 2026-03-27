<template>
  <section class="wine-page">
    <div class="wine-card">
      <!-- LEFT: bottle -->
      <div class="wine-left fade-in">
        <div class="splash-container">
          <img src="/images/crveno.png" alt="Red Wine Splash" class="splash" />
          <img src="/images/stanushina.png" alt="Stanushina Wine Bottle" class="bottle" />
        </div>
      </div>

      <!-- RIGHT: text -->
      <div class="wine-right fade-up">
        <div class="info-box">
          <h1 class="wine-title">Stanushina</h1>
          <p class="subtitle">Red Dry Wine · 2023 Vintage</p>
          <hr class="divider" />

          <div class="awards">
            <div class="award">🥇 Gold Medal — Balkan Wine Trophy 2023</div>
            <div class="award">🏅 Regional Selection — Tikveš Wine Fair 2024</div>
          </div>

          <p class="story">
            Made from the native <strong>Stanushina grape</strong>, an ancient
            Macedonian variety known for its rarity and authenticity.
            <br /><br />
            <span class="highlight">Stanushina</span> reveals aromas of red
            currant, cherry, and pomegranate, followed by a refreshing acidity
            and a soft, velvety texture. This elegant red wine captures the soul
            of the <strong>Tikveš wine region</strong> — vibrant, delicate, and
            timeless, perfectly paired with roasted meats, pasta, or aged cheese.
          </p>

          <div class="details">
            <p><strong>Volume:</strong> 0.75 L</p>
            <p><strong>Price:</strong> €11</p>
          </div>

          <button class="buy-btn">Discover More</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap");

.wine-page {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: auto;
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
  width: 350px;
  height: 700px;
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
  width: 360px;
  height: 100%;
  object-fit: contain;
  z-index: 2;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25));
  transition: transform 0.6s ease;
  margin-top: -30px;
}
.bottle:hover {
  transform: scale(1.05) translateY(-5px);
}

/* === text side === */
.wine-right {
  position: relative;
  width: 520px;
  min-height: 720px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: url("/images/stanushina1.jpg") center/cover no-repeat;
  border-radius: 16px;
  overflow-y: auto; /* makes all text visible */
  box-shadow: 0 50px 40px rgba(0, 0, 0, 0.15);
  padding: 40px 0;
}

/* darken image slightly for contrast */
.wine-right::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.55) 100%
  );
  z-index: 0;
}

/* === info box === */
.info-box {
  position: relative;
  z-index: 1;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Playfair Display", serif;
  color: #ffffff;
  text-align: left;
}

/* === title === */
.wine-title {
  font-family: "Playfair Display", serif;
  font-size: 3.6rem;
  font-weight: 600;
  color: #fff3e5;
  letter-spacing: 1px;
  margin-bottom: 10px;
  text-shadow: 0 4px 10px rgba(210, 170, 90, 0.45),
    0 1px 2px rgba(0, 0, 0, 0.25);
}

.wine-title::after {
  content: "";
  display: block;
  width: 100px;
  height: 3px;
  margin-top: 8px;
  background: linear-gradient(90deg, #b35e5e, #e08c8c);
  border-radius: 3px;
}

/* === subtitle === */
.subtitle {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  color: #fce0e0;
  margin-top: 10px;
  margin-bottom: 15px;
}

/* === divider === */
.divider {
  width: 60px;
  height: 2px;
  border: none;
  background: linear-gradient(90deg, #b35e5e, #e08c8c);
  margin-bottom: 15px;
}

/* === awards === */
.awards {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
  font-size: 1rem;
}
.award {
  color: #f8f8f8;
}

/* === paragraph === */
.story {
  background: rgba(0, 0, 0, 0.3);
  padding: 28px 32px;
  border-radius: 10px;
  color: #ffffff;
  font-family: "Playfair Display", serif;
  font-size: 1.1rem;
  line-height: 1.9;
  letter-spacing: 0.4px;
  text-align: justify;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.25);
  border-left: 3px solid #c47a7a;
  margin-bottom: 30px;
}

.story strong {
  color: #f5e9b9;
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
  font-size: 0.95rem;
  color: #ffffff;
}

/* === button === */
.buy-btn {
  font-family: "Playfair Display", serif;
  padding: 10px 28px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(90deg, #b35e5e, #e08c8c);
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(200, 90, 90, 0.4);
  transition: all 0.3s ease;
  align-self: center;
}
.buy-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(200, 90, 90, 0.6);
}

/* === animations === */
.fade-in {
  animation: fadeIn 1.2s ease forwards;
}
.fade-up {
  animation: fadeUp 1.4s ease forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
