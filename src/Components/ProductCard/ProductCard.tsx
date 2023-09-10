import { DataType } from "../../store/StoreData";
import Styles from "./ProductCard.module.css";
import { AiFillStar } from "react-icons/ai";
import StoreData from "../../store/StoreData";
import ModalWindows from "../../store/ModalWindows";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";

interface Idata {
    data: DataType;
}

const ProductCard: React.FC<Idata> = observer(({ data }) => {
    const rating = new Array(Math.round(data.rating.rate)).fill("");

    const addToCart = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault();
        StoreData.addToCart(id);
    };
    const openCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        ModalWindows.openCartWindow();
    };

    return (
        <div className={Styles.card}>
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
            {data.inCart ? (
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    transition={{duration: 0.05}}
                    className={Styles.inCart}
                    onClick={openCart}
                >
                    In cart
                </motion.button>
            ) : (
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    transition={{duration: 0.05}}
                    onClick={(e) => addToCart(e, data.id)}
                >
                    Add to cart
                </motion.button>
            )}
        </div>
    );
});

export default ProductCard;