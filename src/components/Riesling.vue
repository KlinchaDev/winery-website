<template>
  <section class="wine-page">
    <div class="wine-card">
      <!-- LEFT: bottle -->
      <div class="wine-left fade-in">
        <div class="splash-container">
          <img src="/images/belo.png" alt="White Wine Splash" class="splash" />
          <img src="/images/riesling.png" alt="Riesling Wine Bottle" class="bottle" />
        </div>
      </div>

      <!-- RIGHT: text -->
      <div class="wine-right fade-up">
        <div class="info-box">
          <h1 class="wine-title">Riesling</h1>
          <p class="subtitle">White Aromatic Wine · 2023 Vintage</p>
          <hr class="divider" />

          <div class="awards">
            <div class="award">🥇 Gold Medal — Balkan Wine Trophy 2023</div>
            <div class="award">🏅 Regional Selection — Tikveš Wine Fair 2024</div>
          </div>

          <p class="story">
            Crafted from premium <strong>Riesling grapes</strong> grown in the cool 
            slopes of the <strong>Tikveš wine region</strong>, this elegant white wine 
            embodies purity and finesse.  
            <br /><br />
            <span class="highlight">Riesling</span> reveals refreshing aromas of lime, 
            green apple, and white peach, balanced with vibrant acidity and a mineral finish.  
            A harmonious wine — crisp, aromatic, and timeless — perfect with seafood, 
            sushi, or soft cheeses.
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
  width: 520px;
  height: 700px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.splash {
  position: absolute;
  bottom: 60px;
  width: 115%;
  height: auto;
  opacity: 0.9;
  z-index: 1;
  filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1));
}

.bottle {
  position: relative;
  width: 370px;
  height: 100%;
  object-fit: contain;
  z-index: 2;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25));
  transition: transform 0.6s ease;
  margin-top: -60px;
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
  background: url("/images/whiteG.jpg") center/cover no-repeat;
  border-radius: 16px;
  overflow-y: auto;
  box-shadow: 0 50px 40px rgba(0, 0, 0, 0.12);
  padding: 40px 0;
}

/* soft gradient for readability */
.wine-right::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.6) 100%
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
  color: #3a2b1b;
  text-align: left;
}

/* === title === */
.wine-title {
  font-size: 3.6rem;
  font-weight: 600;
  color: #2e1c0b;
  letter-spacing: 1px;
  margin-bottom: 10px;
  text-shadow: 0 4px 10px rgba(240, 210, 150, 0.3);
}

.wine-title::after {
  content: "";
  display: block;
  width: 100px;
  height: 3px;
  margin-top: 8px;
  background: linear-gradient(90deg, #d8b878, #f4e3b2);
  border-radius: 3px;
}

/* === subtitle === */
.subtitle {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  color: #806a4b;
  margin-top: 10px;
  margin-bottom: 15px;
}

/* === divider === */
.divider {
  width: 60px;
  height: 2px;
  border: none;
  background: linear-gradient(90deg, #d6b675, #f0dcb3);
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
  color: #5c4a2a;
}

/* === paragraph === */
.story {
  background: rgba(255, 255, 255, 0.65);
  padding: 28px 32px;
  border-radius: 10px;
  color: #2a2117;
  font-family: "Playfair Display", serif;
  font-size: 1.1rem;
  line-height: 1.9;
  letter-spacing: 0.4px;
  text-align: justify;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
  border-left: 3px solid #d6b675;
  margin-bottom: 30px;
}

.story strong {
  color: #b38c5a;
}
.story .highlight {
  color: #1a1a1a;
  font-style: italic;
  font-weight: 600;
}

/* === details === */
.details {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  color: #403627;
}

/* === button === */
.buy-btn {
  font-family: "Playfair Display", serif;
  padding: 10px 28px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(90deg, #d6b675, #f0dcb3);
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
