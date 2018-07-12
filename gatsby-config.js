module.exports = {
  siteMetadata: {
    title: 'Neyman Fencing Tournament 2018',
    description: `First international longsword and one-handed sword open tournament in Croatia held by Ars Gladiatoria Zagreb and Academia Artis Dimicatoriae — 25th and 26th of August 2018`,
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Lora:bolditalic',
            'Lora:bold',
            'Lora:italic',
            'Lora',
            'IBM Plex Serif:400,500,600,700',
          ],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
            },
          },
          {
            resolve: `gatsby-remark-smartypants`,
            options: { dashes: 'oldschool' },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      // options: {
      //   modulePath: `${__dirname}/src/cms/cms.js`,
      // },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
