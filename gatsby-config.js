module.exports = {
    siteMetadata: {
        siteUrl: `https://zachmccleaf.gatsbyjs.io/`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/src/projects/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/src/images/`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ],
}