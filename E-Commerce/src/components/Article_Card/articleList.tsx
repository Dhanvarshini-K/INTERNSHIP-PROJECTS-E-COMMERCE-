import { ArticleItem } from './article_card'
interface Props {
    view : String
    addArticle : Boolean
}
const ArticleList = ({view,addArticle} : Props) => {
      const RenderBlog = ArticleItem.map((article) => {
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
                {RenderBlog}
                {addArticle && RenderBlog}
            </div>
    </div>

  )
}

export default ArticleList;