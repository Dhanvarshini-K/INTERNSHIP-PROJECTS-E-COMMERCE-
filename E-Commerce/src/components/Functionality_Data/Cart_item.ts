import black_traytable from "../../assets/images/cart_traytable.svg";
import red_traytable from "../../assets/images/cart_redtraytable.svg";
import tablelamp from "../../assets/images/cart_tablelamp.svg";

export const cartItems = [
  {
    image: `${black_traytable}`,
    title: "Tray Table",
    color: "Black",
    icon: `${remove}`,
    delete: "Remove",
    quantity: 2,
    price: "19.00",
    subtotal: " 38.00",
  },
  {
    image: `${red_traytable}`,
    title: "Tray Table",
    color: "Red",
    icon: `${remove}`,
    delete: "Remove",
    quantity: 2,
    price: "19.00",
    subtotal: "38.00",
  },
  {
    image: `${tablelamp}`,
    title: "Table Lamp",
    color: "Gold",
    icon: `${remove}`,
    delete: "Remove",
    quantity: 2,
    price: "39.00",
    subtotal: "38.00",
  },
];
