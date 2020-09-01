import React, { useState } from 'react';

import { mockData } from '../../mock-data/mock-data';
import { CardComponent } from '../card-component/card-component';

export const App: React.FC = () => {
  const [selected, setSelected] = useState<boolean[]>(new Array(mockData.length).fill(false));
  const [buyMode, setBuyMode] = useState<null | string>(null);
  let text;

  const mouseLeave = (i: number, setTitle: React.Dispatch<React.SetStateAction<string | null>>) => {
    if (selected.find((status: boolean, j: number) => j === i)) {
        setTitle(mockData[i].hoverTitle);
    }
  };

  const mouseEnter = (i: number, setTitle: React.Dispatch<React.SetStateAction<string | null>>) => {
      if (selected.find((status: boolean, j: number) => j === i)) {
          setTitle(mockData[i].title);
      }
  };

  const change = (i: number) => {
    const selectedarr = [...selected];
    selectedarr[i] = !selected[i];
    setSelected(selectedarr);
  };

  return (
    <div className="main_wrapper">
      <div className="shadow">
        <h1 className="header">Ты сегодня покормил кота?</h1>
        <div className="block_products">
          {mockData.map((product, i) => {
            if (product.buy) {
              text = (
                <>
                  { product.text }
                  <a href="/#" className="buy_link" onClick={(e) => {
                    e.preventDefault();
                    const selectedarr = [...selected];
                    selectedarr[i] = !selected[i];
                    setSelected(selectedarr);
                    setBuyMode('choosen');
                  }}>купи.</a>
                </>
              );
            } else {
              text = product.text;
            }

            if (product.quantity > 0) {
              return (
                <CardComponent
                  key={`${product.id}`}
                  product={product}
                  selected={selected}
                  checked={true}
                  buyMode={buyMode} 
                  i={i} 
                  text={text}
                  mouseLeave={mouseLeave}
                  mouseEnter={mouseEnter}
                  change={change}
                  disabled={null}
                />
              );
            } else {
              text = `Печалька, ${product.with} закончился.`;

              return (
                <CardComponent
                  key={`${product.id}`}
                  product={product}
                  selected={selected}
                  checked={null}
                  buyMode={buyMode} 
                  i={i} 
                  text={text}
                  mouseLeave={null}
                  mouseEnter={null}
                  change={null}
                  disabled={'disabled'}
                />
              );
            }          
          })}        
        </div>
      </div>
    </div>
  );
};