import { createI18n } from 'vue-i18n'

const messages = {
  mk: {
    nav: {
      home: 'Почетна',
      about: 'За нас',
      wines: 'Вина',
      visit: 'Посета',
      contact: 'Контакт',
    },

    home: {
      title: 'Добредојдовте во Klincharov Family Winery',
      subtitle: 'Вино создадено со традиција, љубов и карактер.',
    },

    contact: {
      label: 'Контакт',
      title: 'Посетете ја нашата винарија',
      text: 'Со задоволство ќе ве пречекаме. За прашања или посета, слободно контактирајте не.',
      address: 'Адреса',
      region: 'Регион',
      email: 'Е-пошта',
      instagram: 'Инстаграм',
      yourName: 'Вашето име',
      yourEmail: 'Вашата е-пошта',
      yourMessage: 'Вашата порака',
      send: 'Испрати порака',
    },

    wines: {
      belan: {
        title: 'Белан',
        subtitle: 'Бело суво вино · 2023',
        desc: 'Белан е суво бело вино направено од Grenache Blanc, одгледано во нашите лозја.'
      },

      temjanika: {
        title: 'Темјаника Ултима',
        subtitle: 'Ароматично бело вино',
        desc: 'Темјаника од нашите лозја во Чаковец и Лактите, со богати ароми и свежина.'
      },

      vranec: {
        title: 'Вранец барик',
        subtitle: 'Црвено вино',
        desc: 'Интензивно црвено вино со длабок вкус и долг финиш.'
      },

      riesling: {
        title: 'Ризлинг',
        subtitle: 'Ароматично бело вино',
        desc: 'Свежо и елегантно вино со ноти на цитрус и зелено јаболко.'
      },

      stanushina: {
        title: 'Станушина',
        subtitle: 'Црвено вино',
        desc: 'Автохтона сорта со лесно тело и овошен карактер.'
      },

      cabernet: {
        title: 'Каберне Совињон',
        subtitle: 'Црвено суво вино',
        desc: 'Богато вино со ноти на црни бобинки и благ финиш.'
      }
    }
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      wines: 'Wines',
      visit: 'Visit',
      contact: 'Contact',
    },

    home: {
      title: 'Welcome to Klincharov Family Winery',
      subtitle: 'Wine crafted with tradition, love and character.',
    },

    contact: {
      label: 'Contact Us',
      title: 'Visit Our Winery',
      text: 'We would be delighted to welcome you. For inquiries or visits, feel free to contact us.',
      address: 'Address',
      region: 'Region',
      email: 'Email',
      instagram: 'Instagram',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      yourMessage: 'Your Message',
      send: 'Send Message',
    },

    wines: {
      belan: {
        title: 'Belan',
        subtitle: 'White Dry Wine · 2023',
        desc: 'Belan is a dry white wine made from Grenache Blanc grown in our vineyards.'
      },

      temjanika: {
        title: 'Temjanika Ultima',
        subtitle: 'White Aromatic Wine',
        desc: 'Temjanika from our vineyards with rich aromas and freshness.'
      },

      vranec: {
        title: 'Vranec Barrique',
        subtitle: 'Red Wine',
        desc: 'A bold red wine with deep flavor and long finish.'
      },

      riesling: {
        title: 'Riesling',
        subtitle: 'White Aromatic Wine',
        desc: 'Fresh and elegant wine with citrus and green apple notes.'
      },

      stanushina: {
        title: 'Stanushina',
        subtitle: 'Red Wine',
        desc: 'A native variety with light body and fruity character.'
      },

      cabernet: {
        title: 'Cabernet Sauvignon',
        subtitle: 'Red Dry Wine',
        desc: 'Rich wine with dark berry notes and smooth finish.'
      }
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'mk',
  fallbackLocale: 'en',
  messages,
})

export default i18n