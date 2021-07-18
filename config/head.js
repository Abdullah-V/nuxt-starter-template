export default {
    title: '. /Abdullah',
    meta: [
      { charset: 'utf-8' },
      { name: 'language', content: 'en-EN'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Nuxt.JS starter template' },
      { name: 'author', content: 'Abdullah Veliyev, abdullahveliyev2005@gmail.com'},
      { name: 'owner', content: 'Abdullah Veliyev'},
      { name: 'designer', content: 'Abdullah Veliyev' },
      { name: 'publisher', content: 'Abdullah Veliyev' },
      { name: 'web_author', content: 'Abdullah Veliyev' },
      { name: 'reply-to', content: 'abdullahveliyev2005@gmail.com' },
      { name: 'rating', content: 'general'},
      { name: 'revisit-after', content: '1 days'},
      { name: 'keywords', content: 'Nuxt,Javascript,Starter,Template'},
      { name: 'distribution', content: 'global' },
      { name: 'copyright', content: 'Abdullah Veliyev' },
      { name: 'theme-color', content: '#106EE3' },

      // Open Graph protocol
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: process.env.BASE },
      { property: 'og:site_name', content: 'Nuxt' },
      { property: 'og:title', content: 'Nuxt Starter Template' },
      { property: 'og:description', content: 'Starter Template for Nuxt' },
      { property: 'og:image', content: '' },
      { property: 'og:email', content: 'abdullahveliyev2005@gmail.com' },
      { property: 'og:phone_number', content: '+994 55 316 93 84' },


      // Twitter card
      { property:'twitter:card', content: 'summary_large_image' },
      { property:'twitter:title', content: 'Nuxt Starter Template' },
      { property:'twitter:description', content: 'Starter Template for Nuxt' },
      { property:'twitter:creator', content: '@Abdullah_V_2005' },
      { property:'twitter:site', content: '@Abdullah_V_2005' },
      { property:'twitter:image', content: '' },
      { property:'twitter:image:alt', content: 'Image' },
      { property:'twitter:url', content: process.env.BASE }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {src: 'https://kit.fontawesome.com/4d8d9d6354.js'},
    ]
}
