import React from 'react';

const Store = () => {
    const mockDb = [
        {
            "id": 1,
            "url": "https://lh3.google.com/u/0/d/15WIoVx98vHJGjUcDz9tbGIhtP0poLf_Q=w1920-h928-iv1",
            "name": "Sweet item",
            "price": "5"
        },
        {
            "id": 2,
            "url": "https://lh3.google.com/u/0/d/1Bkx5W5MasvTMA5wODv2VouX1HIifj9U9=w1262-h928-iv1",
            "name": "Sweet item",
            "price": "5"
        },
        {
            "id": 3,
            "url": "https://lh3.google.com/u/0/d/1QR4xxegiLXjWZ_AEOOF1CtzJe5dAVyNC=w1262-h928-iv1",
            "name": "Sweet item",
            "price": "5"
        },
        {
            "id": 4,
            "url": "https://cdn.tgdd.vn/2021/03/content/mocktail-la-gi-cac-loai-mocktail-phan-biet-mojito-cocktail-2-800x512.jpg",
            "name": "Mocktail",
            "price": "5"
        },
        {
            "id": 5,
            "url": "https://lh3.google.com/u/0/d/10BOTv2OjREJUWQ63SpeKfVqx1C61HoLv=w1262-h872-iv1",
            "name": "Mocktail",
            "price": "5"
        },
        {
            "id": 6,
            "url": "https://lh3.google.com/u/0/d/1LSo58oZZyBXnWTylmxArJKDdRSut8kXp=w1920-h872-iv1",
            "name": "Mocktail",
            "price": "5"
        },
        {
            "id": 7,
            "url": "https://cdn.dayphache.edu.vn/wp-content/uploads/2016/08/blue-lagoon-cocktail-1.jpg",
            "name": "Cocktail",
            "price": "5"
        },
        {
            "id": 8,
            "url": "https://lh3.google.com/u/0/d/1_Ec9YUTJU8Npzu9jq57mkoZyZVECQ6vi=w1920-h872-iv1",
            "name": "Cocktail",
            "price": "5"
        },
        {
            "id": 9,
            "url": "https://www.bartender.edu.vn/wp-content/uploads/2016/10/cocktail-martini-huyen-thoai.jpg",
            "name": "Cocktail",
            "price": "5"
        },
    ]
    return (
        <section id="store" class="store py-4">
            <div className="container-fluid">
                {/* title */}
                <div className="row store-title my-3">
                    <h1 className="text-center">our <strong className="banner-title">Store</strong></h1>
                </div>

                {/* button */}
                <div className="row store-button my-3">
                    <div className="col-8 mx-auto d-flex justify-content-center">
                        <button>Cocktail</button>
                        <button>Mocktail</button>
                        <button>Cookies</button>
                    </div>
                </div>

                {/* search box */}
                <div className="row store-searchbox my-3">
                    <form className="col-10 mx-auto d-flex justify-content-center align-items-center">
                        <i className="fas fa-search mx-2 rounded"></i>
                        <input className="" type="text" placeholder="Search..." />
                    </form>
                </div>


                <div className="row store-items">
                    {mockDb.map((item, index) => {
                        return (
                            <div className="col-4 my-2 rounded">
                                <img src={item.url} alt="" />
                                <div className="product-info d-flex justify-content-between bg-white p-2">
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
};

export default Store;