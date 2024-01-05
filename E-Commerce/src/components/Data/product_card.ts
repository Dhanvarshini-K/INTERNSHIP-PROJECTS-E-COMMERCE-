
import {
    sofaImages,
    luxuaryImages,
    tableLamp,
    cozySofa,
    drawer,
    first_traytable,
    stand_lamp,
    brow_side_table,
    pillow,
    lamp,
    basket,
    white_pillow
} from "../../assets/resources/images"
import { star } from "../../assets/resources/icons"

interface productList {
    id: number,
    image: String,
    discount_title: String,
    discount_percent: String,
    product_reviews: String,
    product_title: String,
    actual_price: String,
    discount_price: String
}
export const productList = [
    {
        id: 1,
        image: `${sofaImages}`,
        discount_title: "NEW",
        discount_percent: "50%",
        product_reviews: `${star}`,
        product_title: "Loveseat Sofa",
        actual_price: "$199.00",
        discount_price: "$400.00"
    },
    {

        id: 2,
        image: `${luxuaryImages}`,
        discount_title: "NEW",
        discount_percent: "50%",
        product_reviews: `${star}`,
        product_title: "Luxury Sofa",
        actual_price: "$299.00",
        discount_price: "$500.00"

    },
    {
        id: 3,
        image: `${tableLamp}`,
        discount_title: "NEW",
        discount_percent: "50%",
        product_reviews: `${star}`,
        product_title: "Table Lamp",
        actual_price: "$19.00"
    },
    {
        id: 4,
        image: `${cozySofa}`,
        discount_title: "NEW",
        discount_percent: "50%",
        product_reviews: `${star}`,
        product_title: "Cozy Sofa",
        actual_price: "$299.00"
    },
    {
        id: 5,
        image: `${drawer}`,
        discount_title: "NEW",
        discount_percent: "50%",
        product_reviews: `${star}`,
        product_title: "White Drawer Unit",
        actual_price: "$89.99"
    },
    {
        id: 6,
        image: `${first_traytable}`,
        discount_title: "NEW",
        discount_percent: "50%",
        product_reviews: `${star}`,
        product_title: "Black Tray table",
        actual_price: "$19.99"
    },
    {
        id: 7,
        image: `${stand_lamp}`,
        discount_title: "NEW",
        discount_percent: "50%",
        product_reviews: `${star}`,
        product_title: "Table Lamp",
        actual_price: "$19.00"
    },
    {
        id: 8,
        image: `${brow_side_table}`,
        discount_title: "NEW",
        discount_percent: "50%",
        product_reviews: `${star}`,
        product_title: "Black Brow side table",
        actual_price: "$16.99"
    },
    {
        id: 9,
        image: `${pillow}`,
        discount_title: "NEW",
        discount_percent: "50%",
        product_reviews: `${star}`,
        product_title: "Light Beige Pillow",
        actual_price: "$3.99"
    },
    {
        id: 10,
        image: `${lamp}`,
        discount_title: "NEW",
        discount_percent: "50%",
        product_reviews: `${star}`,
        product_title: "Table Lamp",
        actual_price: "$39.99"
    },
    {
        id: 11,
        image: `${basket}`,
        discount_title: "NEW",
        discount_percent: "50%",
        product_reviews: `${star}`,
        product_title: "Bamboo basket",
        actual_price: "$9.99"

    },
    {
        id: 12,
        image: `${white_pillow}`,
        discount_title: "NEW",
        discount_percent: "50%",
        product_reviews: `${star}`,
        product_title: "Off-white Pillow",
        actual_price: "$7.99"

    }

];
