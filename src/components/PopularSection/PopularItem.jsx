import React from 'react';

const PopularItem = ({ isNew, isPremium, discount, price, producer, name, availableSizes, picture }) => {
    let availableSizesLinks = availableSizes.map(size => {
        return (
            <a href="/" className="popular__item_size">{size}</a>
        )
    })

    return (
        <div className="popular__slide">
            <a href="/" className="popular__item_card">
                <div className="popular__item_look">
                    <div className="popular__item_image_wrapper">
                        <img src={picture} alt="одежда" className="popular__item_image" />
                        <div className="popular__toFavourites"></div>
                    </div>
                    <div className="popular__marks">
                        <div className="popular__marks_container">
                            {isNew && <a className="popular__marks_item">
                                <span className="popular__marks_new">new</span>
                            </a>}
                            {isPremium && <a className="popular__marks_item">
                                <span className="popular__marks_premium">premium</span>
                            </a>}
                            {discount && <a className="popular__marks_item">
                                <span className="popular__marks_discount">{'-' + parseInt(discount*100) + '%'}</span>
                            </a>}
                        </div>
                    </div>
                </div>
                <div className="popular__item_description">
                    <div className="popular__item_price">
                        {
                            discount ? 
                            <>
                                <span className="popular__item_last_price">{price}</span>
                                <span className="popular__item_current_price red-price">{price - parseInt(price*discount)} ₸</span> 
                            </>
                            : <span className="popular__item_current_price">{price} ₸</span>
                        }
                    </div>
                    <div className="popular__item_about">
                        <span className="popular__item_producer">{producer}</span>
                        <span className="popular__item_name"> / {name}</span>
                    </div>
                </div>

            </a>
            <div className="popular__item_availableSizes">
                {availableSizesLinks}
            </div>
        </div>
    )
}

export default PopularItem;