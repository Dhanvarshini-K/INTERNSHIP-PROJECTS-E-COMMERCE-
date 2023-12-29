import shipping_icon from "../../assets/icons/shipping_icon.svg";
import money_back from "../../assets/icons/money_icon.svg";
import secure_icon from "../../assets/icons/secure_icon.svg";
import support_icon from "../../assets/icons/support_icon.svg";

export const cardList = [
    {
        image : `${shipping_icon}`,
        title : "Free Shipping",
        description : "Order above $200"
    },
    {
        image : `${money_back}`,
        title : "Money-back",
        description : "30 dys guarantee"
    },
    {
        image : `${secure_icon}`,
        title : "Secure Payments",
        description : "Secured by stripe"
    },
    {
        image : `${support_icon}`,
        title : "24/7 Support",
        description : "Phone and Email support"
    }
];