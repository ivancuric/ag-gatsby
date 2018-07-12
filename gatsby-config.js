module.exports = {
  siteMetadata: {
    title: 'Neyman Fencing Tournament 2018',
    description: `First international longsword and one-handed sword open tournament in Croatia held by Ars Gladiatoria Zagreb and Academia Artis Dimicatoriae — 25th and 26th of August 2018`,
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     google: {
    //       families: [
    //         'Lora:bold,bolditalic',
    //         'Lora:italic',
    //         'Lora',
    //         'IBM Plex Serif:400,500,600,700',
    //       ],
    //     },
    //   },
    // },
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
