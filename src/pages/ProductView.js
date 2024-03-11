import React, { useState } from 'react';

/**
* Renders a category block with a title and additional interactive elements.
*
* @param {{ categoryName: string, onCategoryClick: () => void, children: React.ReactNode }} props The component props.
* @param {string} props.categoryName The name of the category to display.
* @param {() => void} props.onCategoryClick Function to execute on category click.
* @param {React.ReactNode} props.children The children elements to render inside the category block.
* @returns {JSX.Element} The category block component.
*/
const CategoryBlock = ({ categoryName, onCategoryClick, children }) => {
  return (
    <div className="flex flex-col px-2 py-3 mt-1 bg-white rounded border border-solid shadow-sm border-zinc-300">
      <button onClick={onCategoryClick} className="text-left">{categoryName}</button>
      <div className="shrink-0 mt-2 h-px bg-zinc-300" />
      {children}
    </div>
  );
};

/**
* The main product page component, including product description, user information, related categories, and interactivity.
*
* @returns {JSX.Element} The complete product page with interactivity.
*/
const ProductPage = () => {
  const [quantity, setQuantity] = useState(20);
  const [price, setPrice] = useState(2000);

  const handleClick = () => {
    alert('Clicked!');
  };

  return (
    <main className="flex flex-col pb-3.5 bg-500">
      {/* Category and Product Sections */}
      <header className="flex gap-5 justify-between items-start px-6 pt-2.5 w-full bg-lime-800 sm:flex-wrap sm:pr-5 sm:max-w-full">
        <div className="flex-auto self-start sm:max-w-full">
          <div className="flex gap-5 sm:flex-col sm:gap-0">
            <section className="flex flex-col w-[17%] sm:ml-0 sm:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b536160250dc937b2505456739d2bf786387620b8e966d5d66add6f826da4d37?apiKey=4a662731fb2e4f33a47311be88e92e11&" alt="" className="shrink-0 max-w-full aspect-square w-[100px] sm:mt-9" />
            </section>
            <section className="flex flex-col ml-5 w-[83%] sm:ml-0 sm:w-full">
              <div className="flex flex-col grow mt-6 text-base text-neutral-700 sm:mt-10 sm:max-w-full">
                <h2 className="text-xs text-black uppercase tracking-[2.4px] sm:max-w-full">Kategóriák</h2>
                <CategoryBlock categoryName="Termények" onCategoryClick={handleClick}>
                  <div>Terményvédő szerek</div>
                </CategoryBlock>
              </div>
            </section>
          </div>
        </div>
      </header>
      <section className="self-center mt-8 w-full max-w-[1703px] sm:max-w-full">
        <div className="flex gap-5 sm:flex-col sm:gap-0">
          <div className="flex flex-col w-9/12 sm:ml-0 sm:w-full">
            <div className="flex flex-col self-stretch my-auto sm:mt-10 sm:max-w-full">
              <article className="sm:max-w-full">
                {/* Article Content */}
               <h1 className="self-center text-5xl font-bold text-center text-black whitespace-nowrap sm:text-4xl">Repce Eladó!!!!!!</h1>
                <div className="mt-9 sm:max-w-full">
                  {/* Quantity and Price */}
                  <div className="flex gap-5 sm:flex-col sm:gap-0">
                    <div className="flex flex-col w-6/12 sm:ml-0 sm:w-full">
                      <div className="flex flex-col text-5xl text-black whitespace-nowrap sm:mt-10 sm:text-4xl">
                        <h2 className="text-center underline sm:text-4xl">Mennyiség:</h2>
                        <div className="flex gap-2.5 self-start mt-2.5 ml-3 sm:ml-2.5 sm:text-4xl">
                          <div className="grow self-start text-right sm:text-4xl">{quantity} kg</div>
                        </div>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={() => setQuantity(quantity + 1)}>Increase Quantity</button>
                        {/* Price Section */}
                        <h2 className="mt-14 text-center underline sm:mt-10 sm:text-4xl">Ár:</h2>
                        <div className="flex gap-3.5 mt-3.5 sm:text-4xl">
                          <div className="grow text-right sm:text-4xl">{price} Ft</div>
                        </div>
                        <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded" onClick={() => setPrice(price + 100)}>Increase Price</button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <aside className="flex flex-col ml-5 w-3/12 sm:ml-0 sm:w-full">
        <div className="flex flex-col grow items-center px-5 text-3xl font-bold leading-8 text-white sm:mt-10">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0880e8ba51801455b4aaae45480dfa62fe4b586a3a5e15370400c9f545f7b92f?apiKey=4a662731fb2e4f33a47311be88e92e11&" alt="Profile picture of Feri1964" className="max-w-full rounded-full aspect-square w-[248px]" />
          <div className="mt-3 text-center">Feri1964</div>
          <div className="mt-3 text-center">Horváth Ferenc József</div>
          <div className="self-stretch mt-14 leading-8 sm:mt-10">
            Email: feri4691@freemail.hu <br />
            Telefonszám: <br />
            +36 20 734-8327 <br /><br />
            Lebonyolított üzletek: 30
          </div>
          <button onClick={handle} className="justify-center px-2 py-6 mt-16 max-w-full text-2xl text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] w-[221px] sm:mt-10">
            Profil megtekintése
          </button>
        </div>
      </aside>
    </main>
  );
};

export default ProductPage;