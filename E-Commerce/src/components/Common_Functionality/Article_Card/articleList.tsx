import { articleItem } from "../../Functionality_Data/article_card";

interface Props {
    view : String
    addArticle : Boolean
}
const ArticleList = ({view,addArticle} : Props) => {
      const renderBlog = articleItem.map((article) => {
          return (
            <div className={`col article container d-flex flex-column gap-3`}>
              <img src={article.image} alt="home" className="img-fluid article_image  mx-auto d-block" />
              <div className="container d-flex flex-column align-items-center text-center ">
                <span className="h6 fw-bold">{article.title} </span>
                <p>{article.date}</p>
              </div>
            </div>
          );
        });


  return (
    <div className='container'>
            <div className={`row row-cols-1 ${view}`}>
                {renderBlog}
                {addArticle ? (renderBlog) : null}
            </div>
    </div>

  )
}

export default ArticleList;