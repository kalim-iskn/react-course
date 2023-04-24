import {makeAutoObservable} from "mobx";
import {Product} from "../models/Product";

class ProductStore {

    products: Product[] = [
        new Product(
            "1",
            "SONNEN SI-237A",
            "Утюг 1",
            "https://c.dns-shop.ru/thumb/st4/fit/500/500/4031c2e1d601a041f73891b98612dcb2/03f72d6f5cfdb8b69bbc6ef0a31acfa86faf304ec47082cb2899396b035f26be.jpg.webp",
            699,
            false
        ),
        new Product(
            "2",
            "IRIT IR-2222",
            "Утюг 2",
            "https://c.dns-shop.ru/thumb/st4/fit/500/500/838dee8c6d89fa4577aed6c7de4b1ba2/d797ce00bf5c2f8084989d34bf432339c962f2a4ba01030feb1dc7caf2c0950c.jpg.webp",
            750,
            false
        ),
        new Product(
            "3",
            "DEXP NS1600C",
            "Утюг 3",
            "https://static.nike.com/a/images/t_default/bc4e006a-ae3d-478b-a2f6-8740f63a6e52/air-max-plus-womens-shoes-gCc9PN.png",
            799,
            false
        )
    ]

    constructor() {
        makeAutoObservable(this)
    }

    handleFavourite(oldProduct: Product) {
        this.products = this.products.map((product: Product) => {
            return oldProduct.id == product.id ? new Product(
                product.id,
                product.title,
                product.description,
                product.imageUrl,
                product.price,
                !product.isLiked,
            ) : product
        })
    }

}

export default new ProductStore()