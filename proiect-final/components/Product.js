
import { useState, Fragment } from "react"
import style from "../styles/Product.module.css"
import shopping_cart from "../pages/shopping_cart"
import data from "./data";
import Image from "next/image";


export default function Product(props) {
    const { product, onAdd, name, image, price, basket_image} = props;
    
    return <>
        <div className={style.product_container}>
            <div className={style.prod}>
                <div className={style.name_price}>
                    <div className={style.product_name}>{name}</div>
                    <div className={style.product_price}>{price}$</div>
                </div>
                <Image className={style.image_size} src={image} width={250} height={250} alt="image">
                </Image>
                <div className={style.button_counter}>
                    <button className={style.button}
                        onClick={() => onAdd(product)
                        }
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    </>
}

