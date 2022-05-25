import React, { useState, useEffect } from 'react';
import serviceCallApi from '../../services/serviceApi'
import { useParams } from "react-router-dom"

const DetailProduct = () => {
    const [product, setProduct] = useState([])
    const { product_id } = useParams();

    useEffect(() => {
        getProductList();
    }, []);

    const getProductList = async () => {
        const reponse = await serviceCallApi(`product${product_id}`, "GET")
        setProduct(reponse.data)
    }

    return (
        <div className="col-4 my-2 rounded">
            <img src={product.avatar} alt="" />
            <div className="product-info d-flex justify-content-between bg-white p-2">
                <p>{product.name}</p>
                <p>${product.price}</p>
            </div>
        </div>

    );
};

export default DetailProduct;