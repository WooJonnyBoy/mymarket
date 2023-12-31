import { DataType } from "../../store/StoreData";
import Styles from "./ProductCard.module.css";
import { AiFillStar } from "react-icons/ai";
import StoreData from "../../store/StoreData";
import ModalWindows from "../../store/ModalWindows";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";
import { BsCart3 } from "react-icons/bs";

interface Idata {
    data: DataType;
}

const ProductCard: React.FC<Idata> = observer(({ data }) => {
    const rating = new Array(Math.round(data.rating.rate)).fill("");

    const addToCart = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.stopPropagation();
        e.preventDefault();
        StoreData.addToCart(id);
    };
    const openCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        ModalWindows.openCartWindow();
    };

    return (
        <div className={Styles.card} key={data.title}>
            <div className={Styles.img}>
                <img src={data.image} />
            </div>
            <div className={Styles.title}>{data.title}</div>
            <div className={Styles.stars}>
                {rating.map((_, index) => {
                    return (
                        <span key={index}>
                            <AiFillStar />
                        </span>
                    );
                })}
            </div>
            <p className={Styles.price}>{data.price + "$"}</p>
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.05 }}
                    className={data.inCart ? Styles.inCart : Styles.button}
                    onClick={data.inCart ? openCart : (e) => addToCart(e, data.id)}
                >
                    <span>
                        <BsCart3 />
                    </span>
                    {data.inCart ? "In cart" : "Add to cart"}
                </motion.button>
        </div>
    );
});

export default ProductCard;
