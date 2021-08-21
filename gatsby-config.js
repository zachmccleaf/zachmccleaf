module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/data`,
              name: "pages"
            }
        }, 
        {
            resolve: "gatsby-transformer-remark",
            options: {
              plugins: [] // just in case those previously mentioned remark plugins sound cool :)
            }
        }
    ],
}