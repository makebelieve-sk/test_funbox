import React, { useState } from 'react';

export const CardComponent = ({ product, selected, buyMode, i, text, mouseEnter, mouseLeave, checked, change, disabled }) => {
    const [title, setTitle] = useState(null);

    return (
        <div 
            className="product-wrapper" 
            key={product.id} 
            onMouseEnter={mouseEnter ? mouseEnter.bind(this, i, setTitle) : null}
            onMouseLeave={mouseLeave ? mouseLeave.bind(this, i, setTitle) : null}
        >
            <label 
                className="choose_check" 
                htmlFor={`choose-${product.id}`} 
            >
                <input 
                    checked={ checked ? selected[i] : null}
                    className={`choose_input ${buyMode} ${disabled}`} 
                    type="checkbox" 
                    name="choose" 
                    id={`choose-${product.id}`}
                    onChange={change ? change.bind(this, i) : null}
                />
                <span />

                <div className="block_in_card">
                    <p className={`product_title ${disabled}`}>{ title ? title : product.title }</p>
                    <p className={`product_name ${disabled}`}>{ product.name }</p>
                    <p className={`product_with ${disabled}`}>{ product.with }</p>
                    <p className={`product_description ${disabled}`}>{ product.description_line1 }</p>
                    <p className={`product_description ${disabled}`}>{ product.description_line2 }</p>
                    <p className={`product_description ${disabled}`}>{ product.description_line3 }</p>
                </div>

                <div className="product_weight">
                    <p className="product_weight_number">{ product.weight }</p>
                    <p className="product_weight_text">кг</p>
                </div>

                { <p className={`product_text ${disabled}_text`}>{ text }</p> }
            </label>
        </div>
    )
};