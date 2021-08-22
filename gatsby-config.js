module.exports = {
    siteMetadata: {
        siteUrl: `https://zachmccleaf.gatsbyjs.io/`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/src/projects/`,
            },
        },
        `gatsby-transformer-remark`,
    ],
}