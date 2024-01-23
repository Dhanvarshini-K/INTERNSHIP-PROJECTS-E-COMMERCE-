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
  white_pillow,
} from "../../assets/resources/images";
import { star } from "../../assets/resources/icons";

interface productList {
  id: number;
  image: String;
  discount_title: String;
  discount_percent: String;
  product_reviews: String;
  product_title: String;
  actual_price: String;
  discount_price: String;
  category: String;
  color:String
}
export const productList = [
  {
    id: 1,
    category: "Livingroom",
    image: `${sofaImages}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Loveseat Sofa",
    actual_price: "199.00",
    discount_price: "400.00",
    color:"White"
  },
  {
    id: 2,
    image: `${luxuaryImages}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Luxury Sofa",
    actual_price: "299.00",
    discount_price: "500.00",
    category: "Livingroom",
    color:"White"
  },
  {
    id: 3,
    image: `${tableLamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "19.00",
    discount_price: "",
    category: "Livingroom",
    color:"White"
  },
  {
    id: 4,
    image: `${cozySofa}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Cozy Sofa",
    actual_price: "299.00",
    category: "Livingroom",
    discount_price: "",
    color:"White"
  },
  {
    id: 5,
    image: `${drawer}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "White Drawer Unit",
    actual_price: "89.99",
    category: "Livingroom",
    discount_price: "",
    color:"White"

  },
  {
    id: 6,
    image: `${first_traytable}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Black Tray table",
    actual_price: "19.99",
    category: "Livingroom",
    discount_price: "",
    color:"White"
  },
  {
    id: 7,
    image: `${stand_lamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "19.00",
    category: "Livingroom",
    discount_price: "",
    color:"White"
  },
  {
    id: 8,
    image: `${brow_side_table}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Black Brow side table",
    actual_price: "16.99",
    category: "Livingroom",
    discount_price: "",
    color:"White"
  },
  {
    id: 9,
    image: `${pillow}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Light Beige Pillow",
    actual_price: "3.99",
    category: "Livingroom",
    discount_price: "",
    color:"White"
  },
  {
    id: 10,
    image: `${lamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "39.99",
    category: "Livingroom",
    discount_price: "",
    color:"White"
  },
  {
    id: 11,
    image: `${basket}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Bamboo basket",
    actual_price: "9.99",
    category: "Livingroom",
    discount_price: "",
    color:"White"
  },
  {
    id: 12,
    image: `${white_pillow}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Off-white Pillow",
    actual_price: "7.99",
    category: "Livingroom",
    discount_price: "",
    color:"White"
  },
  {
    id: 13,
    image: `${sofaImages}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Loveseat Sofa",
    actual_price: "199.00",
    discount_price: "400.00",
    category: "Bedroom",
       color:"White"
  },
  {
    id: 14,
    image: `${luxuaryImages}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Luxury Sofa",
    actual_price: "299.00",
    discount_price: "500.00",
    category: "Bedroom",
       color:"White",

  },
  {
    id: 15,
    image: `${tableLamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "19.00",
    category: "Bedroom",
       color:"White",
    discount_price: "",

  },
  {
    id: 16,
    image: `${cozySofa}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Cozy Sofa",
    actual_price: "299.00",
    category: "Bedroom",
       color:"White",
    discount_price: "",

  },
  {
    id: 17,
    image: `${drawer}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "White Drawer Unit",
    actual_price: "89.99",
    category: "Bedroom",
       color:"White",
    discount_price: "",

  },
  {
    id: 18,
    image: `${first_traytable}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Black Tray table",
    actual_price: "19.99",
    category: "Bedroom",
       color:"White",
    discount_price: "",

  },
  {
    id: 19,
    image: `${stand_lamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "19.00",
    category: "Bedroom",
       color:"White",
    discount_price: "",

  },
  {
    id: 20,
    image: `${brow_side_table}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Black Brow side table",
    actual_price: "16.99",
    category: "Bedroom",
       color:"White",
    discount_price: "",

  },
  {
    id: 21,
    image: `${pillow}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Light Beige Pillow",
    actual_price: "3.99",
    category: "Bedroom",
       color:"White",
    discount_price: "",

  },
  {
    id: 22,
    image: `${lamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "39.99",
    category: "Bedroom",
       color:"White",
    discount_price: "",

  },
  {
    id: 23,
    image: `${basket}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Bamboo basket",
    actual_price: "9.99",
    category: "Bedroom",
       color:"White",
    discount_price: "",

  },
  {
    id: 24,
    image: `${white_pillow}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Off-white Pillow",
    actual_price: "7.99",
    category: "Bedroom",
       color:"White",
    discount_price: "",

  },

  {
    id: 25,
    image: `${sofaImages}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Loveseat Sofa",
    actual_price: "199.00",
    discount_price: "400.00",
    category: "Kitchen",

  },
  {
    id: 26,
    image: `${luxuaryImages}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Luxury Sofa",
    actual_price: "299.00",
    discount_price: "500.00",
    category: "Kitchen",
  },
  {
    id: 27,
    image: `${tableLamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "19.00",
    category: "Kitchen",
    discount_price: "",

  },
  {
    id: 28,
    image: `${cozySofa}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Cozy Sofa",
    actual_price: "299.00",
    category: "Kitchen",
    discount_price: "",

  },
  {
    id: 29,
    image: `${drawer}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "White Drawer Unit",
    actual_price: "89.99",
    category: "Kitchen",
    discount_price: "",

  },
  {
    id: 30,
    image: `${first_traytable}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Black Tray table",
    actual_price: "19.99",
    category: "Kitchen",
    discount_price: "",

  },
  {
    id: 31,
    image: `${stand_lamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "19.00",
    category: "Kitchen",
    discount_price: "",

  },
  {
    id: 32,
    image: `${brow_side_table}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Black Brow side table",
    actual_price: "16.99",
    category: "Kitchen",
    discount_price: "",

  },
  {
    id: 33,
    image: `${pillow}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Light Beige Pillow",
    actual_price: "3.99",
    category: "Kitchen",
    discount_price: "",

  },
  {
    id: 34,
    image: `${lamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "39.99",
    category: "Kitchen",
    discount_price: "",

  },
  {
    id: 35,
    image: `${basket}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Bamboo basket",
    actual_price: "9.99",
    category: "Kitchen",
    discount_price: "",

  },
  {
    id: 36,
    image: `${white_pillow}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Off-white Pillow",
    actual_price: "7.99",
    category: "Kitchen",
    discount_price: "",

  },
  {
    id: 37,
    image: `${sofaImages}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Loveseat Sofa",
    actual_price: "199.00",
    discount_price: "400.00",
    category: "Bathroom",

  },
  {
    id: 38,
    image: `${luxuaryImages}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Luxury Sofa",
    actual_price: "299.00",
    discount_price: "500.00",
    category: "Bathroom",

  },
  {
    id: 39,
    image: `${tableLamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "19.00",
    category: "Bathroom",
    discount_price: "",

  },
  {
    id: 40,
    image: `${cozySofa}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Cozy Sofa",
    actual_price: "299.00",
    category: "Bathroom",
    discount_price: "",

  },
  {
    id: 41,
    image: `${drawer}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "White Drawer Unit",
    actual_price: "89.99",
    category: "Bathroom",
    discount_price: "",

  },
  {
    id: 42,
    image: `${first_traytable}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Black Tray table",
    actual_price: "19.99",
    category: "Bathroom",
    discount_price: "",

  },
  {
    id: 43,
    image: `${stand_lamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "19.00",
    category: "Bathroom",
    discount_price: "",

  },
  {
    id: 44,
    image: `${brow_side_table}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Black Brow side table",
    actual_price: "16.99",
    category: "Bathroom",
    discount_price: "",

  },
  {
    id: 45,
    image: `${pillow}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Light Beige Pillow",
    actual_price: "3.99",
    category: "Bathroom",
    discount_price: "",

  },
  {
    id: 46,
    image: `${lamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "39.99",
    category: "Bathroom",
    discount_price: "",

  },
  {
    id: 47,
    image: `${basket}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Bamboo basket",
    actual_price: "9.99",
    category: "Bathroom",
    discount_price: "",

  },
  {
    id: 48,
    image: `${white_pillow}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Off-white Pillow",
    actual_price: "7.99",
    category: "Bathroom",
    discount_price: "",

  },
  {
    id: 49,
    image: `${sofaImages}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Loveseat Sofa",
    actual_price: "199.00",
    discount_price: "400.00",
    category: "Dinning",

  },
  {
    id: 50,
    image: `${luxuaryImages}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Luxury Sofa",
    actual_price: "299.00",
    discount_price: "500.00",
    category: "Dinning",
  },
  {
    id: 51,
    image: `${tableLamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "19.00",
    category: "Dinning",
    discount_price: "",

  },
  {
    id: 52,
    image: `${cozySofa}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Cozy Sofa",
    actual_price: "299.00",
    category: "Dinning",
    discount_price: "",

  },
  {
    id: 53,
    image: `${drawer}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "White Drawer Unit",
    actual_price: "89.99",
    category: "Dinning",
    discount_price: "",

  },
  {
    id: 54,
    image: `${first_traytable}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Black Tray table",
    actual_price: "19.99",
    category: "Dinning",
    discount_price: "",

  },
  {
    id: 55,
    image: `${stand_lamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "19.00",
    category: "Dinning",
    discount_price: "",

  },
  {
    id: 56,
    image: `${brow_side_table}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Black Brow side table",
    actual_price: "16.99",
    category: "Dinning",
    discount_price: "",

  },
  {
    id: 57,
    image: `${pillow}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Light Beige Pillow",
    actual_price: "3.99",
    category: "Dinning",
    discount_price: "",

  },
  {
    id: 58,
    image: `${lamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "39.99",
    category: "Dinning",
    discount_price: "",

  },
  {
    id: 59,
    image: `${basket}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Bamboo basket",
    actual_price: "9.99",
    category: "Dinning",
    discount_price: "",

  },
  {
    id: 60,
    image: `${white_pillow}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Off-white Pillow",
    actual_price: "7.99",
    category: "Dinning",
    discount_price: "",

  },
  {
    id: 61,
    image: `${sofaImages}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Loveseat Sofa",
    actual_price: "199.00",
    discount_price: "400.00",
    category: "Outdoor",

  },
  {
    id: 62,
    image: `${luxuaryImages}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Luxury Sofa",
    actual_price: "299.00",
    discount_price: "500.00",
    category: "Outdoor",
  },
  {
    id: 63,
    image: `${tableLamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "19.00",
    category: "Outdoor",
    discount_price: "",

  },
  {
    id: 64,
    image: `${cozySofa}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Cozy Sofa",
    actual_price: "299.00",
    category: "Outdoor",
    discount_price: "",

  },
  {
    id: 65,
    image: `${drawer}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "White Drawer Unit",
    actual_price: "89.99",
    category: "Outdoor",
    discount_price: "",

  },
  {
    id: 66,
    image: `${first_traytable}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Black Tray table",
    actual_price: "19.99",
    category: "Outdoor",
    discount_price: "",

  },
  {
    id: 67,
    image: `${stand_lamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "19.00",
    category: "Outdoor",
    discount_price: "",

  },
  {
    id: 68,
    image: `${brow_side_table}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Black Brow side table",
    actual_price: "16.99",
    category: "Outdoor",
    discount_price: "",

  },
  {
    id: 69,
    image: `${pillow}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Light Beige Pillow",
    actual_price: "3.99",
    category: "Outdoor",
    discount_price: "",

  },
  {
    id: 70,
    image: `${lamp}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Table Lamp",
    actual_price: "39.99",
    category: "Outdoor",
    discount_price: "",

  },
  {
    id: 71,
    image: `${basket}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Bamboo basket",
    actual_price: "9.99",
    category: "Outdoor",
    discount_price: "",

  },
  {
    id: 72,
    image: `${white_pillow}`,
    discount_title: "NEW",
    discount_percent: "-50%",
    product_reviews: `${star}`,
    product_title: "Off-white Pillow",
    actual_price: "7.99",
    category: "Outdoor",
    discount_price: "",

  },
];
