//Importing React Dependencies
import React, {useState, useEffect} from "react";

//Importing components
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
import SEO from "./../components/seo";
import ArticleShowcase from "./../components/articleShowcase";
import ArticlePreview from "./../components/articles/articlePreview";
import { ArticlesMapper } from "./../components/articles/articleHelperFunctions";

//Importing constants
import _ from "./../constants/constants";

import { graphql } from "gatsby";

import "./../styles/index.scss";

const IndexPage = ({data}) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const articleList = [];
    const authors = {};

    data.allMarkdownRemark.edges.forEach(info => {
      info = info.node.frontmatter;

      if (info.type === "Article") {
        articleList.push(info);
      } else {
        authors[info.userID] = info;
      }
    })

    articleList.forEach(article => {
      article.author = authors[article.userID]
    })

    setArticles(articleList);
  }, [data])
    
  const createIssues = () => {
    const issues = {};

    const articleList = ArticlesMapper(articles);

    if (articleList === 0) return <p>No articles</p>;

    articleList.forEach((article, index) => {
      if (!issues.hasOwnProperty(article.Issue)) {
        issues[article.Issue] = [];
      } 

      issues[article.Issue].push(<ArticlePreview 
        key={index} Image={article.Image} Title={article.Title} Author={article.Author} LinkTo={article.LinkTo} Subject={article.Subject}
      />)
    })

    const content = [];
    const keys = Object.keys(issues).map(issue => Number(issue));
    for (let i = Math.max(...keys); i >= Math.min(...keys); i--) {
      if (issues.hasOwnProperty(i)) {
        content.push(<><h3>Issue {i}</h3><div className="issue-articles">{issues[i].map(article => article)}</div></>)
      }
    }

    return content;
  }

  return (
    <>
      <Navbar />
      <main className="home">
        <SEO seo={_.Home.SEO} />

        <ArticleShowcase />

        <h2>Archive</h2>
        <div className="issues">{createIssues()}</div>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
export const pageQuery = graphql`
query articleQuery3{
  allMarkdownRemark{
    edges{
      node{
        frontmatter {
          type
          title
          description
          subject
          issue
          preview_image
          slug
          first_name
          surname
          userID
        }
      }
    }
  }
}
`