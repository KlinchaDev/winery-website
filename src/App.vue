<template> 
  <div id="app">
    <HeaderSection />
    <h1>{{ $t('nav.home') }}</h1>
    <main>
      <!-- Homepage -->
      <template v-if="$route.path === '/'">
        <MainSection />
      </template>

      <!-- About page -->
      <template v-else-if="$route.path === '/about'">
        <AboutSection />
      </template>

      <!-- Wines main page -->
      <template v-else-if="$route.path === '/wines'">
        <WineGallery />
      </template>

      <!-- All other pages -->
      <template v-else>
        <router-view />
      </template>

      <FooterSection />
    </main>
  </div>
</template>

<script setup>
import HeaderSection from "./components/HeaderSection.vue";
import MainSection from "./components/MainSection.vue";
import WineGallery from "./components/WineGallery.vue";
import FooterSection from "./components/FooterSection.vue";
import AboutSection from "./components/AboutSection.vue";
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Playfair Display', serif;
  scroll-behavior: smooth;
}

/* Move borders here */
#app {
  width: 100%;
  margin: 0;
  padding: 0;
  background: #fff;
}

main {
  margin-top: 0px;
}

/* Consistent padding for all sections */
section {
  padding: 80px 0;
  box-sizing: border-box;
}

/* smooth transition between sections */
section:not(:first-child) {
  background-color: #fff;
}

/* hero image full width within border */
.main-section {
  height: 100vh;
  background: url("/images/mainsl.jpg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0;
  padding: 0;
}

.main-section::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
}

.main-section h1,
.main-section p {
  position: relative;
  color: white;
  z-index: 1;
  text-align: center;
}

.main-section h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.main-section p {
  font-size: 1.2rem;
}
</style>