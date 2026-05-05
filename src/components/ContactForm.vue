<template>
  <section id="contact" class="contact-section">
    <div class="contact-wrapper">
      <!-- LEFT SIDE -->
      <div class="contact-info fade-left">
        <p class="contact-label">Contact Us</p>
        <h2 class="contact-title">Visit Our Winery</h2>
        <div class="title-line"></div>

        <p class="contact-text">
          We would be delighted to welcome you to our winery. For inquiries,
          visits, or collaborations, feel free to send us a message.
        </p>

        <div class="contact-details">
          <div class="detail-item">
            <span class="detail-title">Address</span>
            <p>Kavadarci, Pionerska 1</p>
          </div>

          <div class="detail-item">
            <span class="detail-title">Region</span>
            <p>Tikvesh Wine Region, North Macedonia</p>
          </div>

          <div class="detail-item">
            <span class="detail-title">Email</span>
            <p>aceklincarov@gmail.com</p>
          </div>

          <div class="detail-item">
            <span class="detail-title">Instagram</span>
            <p>
              <a
                href="https://www.instagram.com/klincharov_family_winery/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @klincharov_family_winery
              </a>
            </p>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="contact-card fade-up">
        <form class="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" class="send-btn">Send Message</button>
        </form>

        <div class="map-box">
          <iframe
            title="Winery Location"
            src="https://www.google.com/maps?q=Kavadarci%20Pionerska%201&output=embed"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.contact-section {
  min-height: 100vh;
  background:
    linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)),
    url("/images/pozadinaB.jpg") center/cover no-repeat;
  padding: 140px 8% 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-wrapper {
  width: 100%;
  max-width: 1350px;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 4rem;
  align-items: center;
}

/* LEFT SIDE */
.contact-info {
  color: #2e2e2e;
}

.contact-label {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.85rem;
  color: #9f7b4f;
  margin-bottom: 10px;
}

.contact-title {
  font-family: "Cormorant Garamond", serif;
  font-size: 4rem;
  font-weight: 600;
  line-height: 1.05;
  margin: 0;
  color: #1f1f1f;
}

.title-line {
  width: 90px;
  height: 3px;
  margin: 20px 0 28px;
  border-radius: 999px;
  background: linear-gradient(90deg, #c9a46b, #8f6a40);
}

.contact-text {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.3rem;
  line-height: 1.8;
  color: #555;
  max-width: 540px;
  margin-bottom: 34px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.detail-item {
  padding-left: 18px;
  border-left: 2px solid rgba(166, 124, 82, 0.35);
}

.detail-title {
  display: block;
  font-family: "Montserrat", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #9f7b4f;
  margin-bottom: 6px;
}

.detail-item p {
  margin: 0;
  font-family: "Cormorant Garamond", serif;
  font-size: 1.15rem;
  color: #2e2e2e;
}

.detail-item a {
  color: #2e2e2e;
  text-decoration: none;
  transition: color 0.3s ease;
}

.detail-item a:hover {
  color: #9f7b4f;
}

/* RIGHT SIDE */
.contact-card {
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(166, 124, 82, 0.16);
  border-radius: 28px;
  padding: 30px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 26px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid rgba(80, 60, 40, 0.14);
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 16px 18px;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  color: #2e2e2e;
  outline: none;
  transition: all 0.35s ease;
  box-sizing: border-box;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #8d8d8d;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #b08a57;
  box-shadow: 0 0 0 4px rgba(176, 138, 87, 0.12);
  transform: translateY(-1px);
}

.contact-form textarea {
  resize: vertical;
  min-height: 140px;
}

/* BUTTON */
.send-btn {
  align-self: flex-start;
  border: none;
  border-radius: 999px;
  padding: 14px 30px;
  font-family: "Montserrat", sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  color: white;
  background: linear-gradient(90deg, #9f7b4f, #c7a16a);
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(176, 138, 87, 0.28);
  transition: transform 0.35s ease, box-shadow 0.35s ease, filter 0.35s ease;
}

.send-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 16px 30px rgba(176, 138, 87, 0.35);
  filter: brightness(1.04);
}

.send-btn:active {
  transform: translateY(0) scale(0.99);
}

/* MAP */
.map-box {
  width: 100%;
  overflow: hidden;
  border-radius: 22px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(166, 124, 82, 0.12);
}

.map-box iframe {
  width: 100%;
  height: 320px;
  border: 0;
  display: block;
}

/* ANIMATIONS */
.fade-left {
  animation: fadeLeft 1s ease forwards;
}

.fade-up {
  animation: fadeUp 1.1s ease forwards;
}

@keyframes fadeLeft {
  from {
    opacity: 0;
    transform: translateX(-35px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(35px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* RESPONSIVE */
@media (max-width: 1100px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .contact-title {
    font-size: 3.2rem;
  }

  .contact-info {
    max-width: 760px;
  }
}

@media (max-width: 768px) {
  .contact-section {
    min-height: auto;
    padding: 110px 16px 60px;
  }

  .contact-wrapper {
    gap: 1.8rem;
  }

  .contact-info {
    text-align: left;
  }

  .contact-title {
    font-size: 2.5rem;
    line-height: 1.05;
  }

  .title-line {
    width: 72px;
    margin: 16px 0 22px;
  }

  .contact-label {
    font-size: 0.72rem;
    letter-spacing: 2.2px;
    margin-bottom: 8px;
  }

  .contact-text {
    font-size: 1.08rem;
    line-height: 1.65;
    margin-bottom: 24px;
    max-width: 100%;
  }

  .contact-details {
    gap: 16px;
  }

  .detail-item {
    padding-left: 14px;
  }

  .detail-title {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
    margin-bottom: 4px;
  }

  .detail-item p {
    font-size: 1rem;
    line-height: 1.45;
    word-break: break-word;
  }

  .contact-card {
    padding: 18px;
    border-radius: 22px;
  }

  .contact-form {
    gap: 14px;
    margin-bottom: 20px;
  }

  .contact-form input,
  .contact-form textarea {
    padding: 14px 15px;
    font-size: 0.95rem;
    border-radius: 14px;
  }

  .contact-form textarea {
    min-height: 120px;
  }

  .send-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 14px 18px;
    font-size: 0.88rem;
  }

  .map-box {
    border-radius: 18px;
  }

  .map-box iframe {
    height: 240px;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 100px 14px 48px;
  }

  .contact-title {
    font-size: 2.15rem;
  }

  .contact-text {
    font-size: 1rem;
  }

  .detail-item p {
    font-size: 0.96rem;
  }

  .contact-card {
    padding: 16px;
    border-radius: 20px;
  }

  .contact-form input,
  .contact-form textarea {
    font-size: 0.92rem;
  }

  .map-box iframe {
    height: 220px;
  }
}
</style>