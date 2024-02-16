import React, { useEffect, useState } from "react";
import "./newproducts.css";

import Header from "../../../components/Header/header";
import Dropcard from "../../../components/Card/dropcard";
import Footer from "../../../components/Footer/footer";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader/loader";
const Dealscorner = () => {
    const navigate = useNavigate();
    const [productlist, setproductlist] = useState([]);
    const [loading, setLoading] = useState();

    async function getAllproducts() {
        setLoading(true);
        try {
            const response = await fetch(
                'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=50&filter={"brand":"Apple"}',
                {
                    headers: {
                        projectID: "b0egrjqjnto2",
                    },
                }
            );
            const promise = await response.json();
            const data = promise.data;
            setproductlist(data);
        }
        catch (error) {
            console.log("error", error);
        }
        finally {
            setLoading(false);
        }
    }
    const cardclick = (_id) => {
        navigate(`/details/${_id}`)
    }

    useEffect(() => {
        getAllproducts();
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <div className="dealscorner">
                        <h1  className="dealscornerheading">Deals That Make You Smile</h1>
                        <div className="dealscornercontainer" >
                            {productlist.length > 0 &&
                                Array.isArray(productlist) &&
                                productlist.map((product) => {
                                    return <Dropcard key={product._id} product={product} click={cardclick} />;
                                })
                            }
                        </div>
                    </div>
                    <Footer />
                </div>
            )
            }
        </div>
    )
}
export default Dealscorner;