import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({name, sharp}) => {
  const data = useStaticQuery(graphql`
   query Images {
     myPhoto: file(relativePath: {eq: "photo.png"}){
       id
       childImageSharp{
         fixed(width:200){
           ...GatsbyImageSharpFixed
         }
         fluid{
          ...GatsbyImageSharpFluid
        }
       }
     },
     live: file(relativePath: {eq: "live.png"}){
      id
      childImageSharp{
        fixed(width:200){
          ...GatsbyImageSharpFixed
        }
        fluid{
         ...GatsbyImageSharpFluid
       }
      }
    },
     superProject: file(relativePath: {eq: "project/test.jpg"}){
      id
      childImageSharp{
        fixed(width:200){
          ...GatsbyImageSharpFixed
        }
        fluid{
         ...GatsbyImageSharpFluid
       }
      }
    },
    workTimeRecords: file(relativePath: {eq: "project/workTimeRecords.jpg"}){
      id
      childImageSharp{
        fixed(width:200){
          ...GatsbyImageSharpFixed
        }
        fluid{
         ...GatsbyImageSharpFluid
       }
      }
    },
    lepszyProjekt: file(relativePath: {eq: "project/shoppingApp.jpg"}){
      id
      childImageSharp{
        fixed(width:200){
          ...GatsbyImageSharpFixed
        }
        fluid{
         ...GatsbyImageSharpFluid
       }
      }
    }
   }
  `)


  return (<Img fluid={data[name].childImageSharp[sharp]}  />)
}

export default Image
