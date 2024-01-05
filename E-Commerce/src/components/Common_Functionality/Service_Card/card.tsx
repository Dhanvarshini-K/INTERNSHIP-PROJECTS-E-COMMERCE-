import { cardList } from "../../Data/service_card";
import "../Service_Card/card.css";
const CardItem = () => {
    const RenderCard = cardList.map((cards) => {
        return (
            <section className=" card card-body bg-light d-flex flex-column align-items-center border-0 py-3 px-2">
               
                    <img src={cards.image} alt="shipping" />
                    <span className="h6 fw-bold">{cards.title}</span>
                    <p>{cards.description}</p>          
            </section>
        )
    })
    return (
        <section className="customer_service container d-flex justify-content-between gap-3 align-self-center align-items-center flex-wrap p-4">
            {RenderCard}
        </section>
    )
}
export default CardItem;