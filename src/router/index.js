import { createRouter, createWebHistory } from 'vue-router'
import WineGallery from '../components/WineGallery.vue'
import Temjanika from '../components/Temjanika.vue'
import Belan from '../components/Belan.vue'
import Rose from '../components/Rose.vue'
import Vranec from '../components/Vranec.vue'
import Riesling from '../components/Riesling.vue'
import Stanushina from '../components/Stanushina.vue'
import Cuvee from '../components/Cuvee.vue'
import Rakija from '../components/Rakija.vue'
import ContactForm from '@/components/ContactForm.vue'
const routes = [
  { path: '/', name: 'Home' },

  // main wine gallery page
  { path: '/wines', name: 'Wines', component: WineGallery },

  // individual wines
  { path: '/wines/temjanika', component: Temjanika },
  { path: '/wines/belan', component: Belan },
  { path: '/wines/rose', component: Rose },
  { path: '/wines/vranec', component: Vranec },
  { path: '/wines/riesling', component: Riesling },
  { path: '/wines/stanushina', component: Stanushina },
  { path: '/wines/cuvee', component: Cuvee },
  { path: '/wines/rakija', component: Rakija },   // ✅ Rakija route (correct)
   {path: '/contact',
    component: ContactForm
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router



