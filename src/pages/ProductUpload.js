import React, { useState } from 'react';

const CategorySection = ({ title, children }) => (
  <div className="flex flex-col px-2 py-3 mt-1 bg-white rounded border border-solid shadow-sm border-zinc-300">
    <div>{title}</div>
    <div className="shrink-0 mt-2 h-px bg-zinc-300" />
    {children}
  </div>
);

const Button = ({ label, onClick }) => (
  <button onClick={onClick} className="grow justify-center px-5 py-6 bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] cursor-pointer">
    {label}
  </button>
);

const AdvertisementSection = () => (
  <section className="mt-14 w-full max-w-[1624px] max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col px-5 mt-2.5 max-md:mt-10">
          <div className="text-base text-black uppercase tracking-[3.2px]">Kép a termékről:</div>
          {/* Placeholder for image upload */}
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow items-center px-5 max-md:mt-10 max-md:max-w-full">
          <CategorySection title="*Mennyiség:">
            {/* Placeholder for quantity input */}
          </CategorySection>
          <CategorySection title="*Minőség:">
            {/* Placeholder for quality dropdown */}
          </CategorySection>
          <CategorySection title="Leírás:">
            {/* Placeholder for description input */}
          </CategorySection>
        </div>
        <button className="justify-center px-5 py-6 mt-6 text-2xl font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] cursor-pointer">Hírdetés feladása</button>
        <div className="mt-6 text-base italic text-black whitespace-nowrap">A *-gal megjelölt mezők kitöltése kötelező</div>
      </div>
    </div>
  </section>
);

function MarketplaceComponent() {
  const [category, setCategory] = useState('');
  const handleCategoryChange = (newCategory) => setCategory(newCategory);
  
  return (
    <main className="flex flex-col items-center pb-2 bg-neutral-500">
      <header className="flex gap-5 justify-between items-start self-stretch pr-14 pl-5 w-full bg-lime-800 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        {/* Placeholder for header content */}
      </header>
      <Advertisement />
      <div className="flex flex-wrap justify-around">
        <Button label="Új hírdetés" onClick={() => handleCategoryChange('Új hírdetés')} />
        <Button label="Profil módosítása" onClick={() => handleCategoryChange('Profil módosítása')} />
        <Button label="Visszajelzés" onClick={() => handleCategoryChange('Visszajelzés')} />
      </div>
    </main>
  );
}

export default MarketplaceComponent;