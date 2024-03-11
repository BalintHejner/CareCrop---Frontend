import React from "react";

/**
 * Component for rendering interactive category block.
 * @component
 * @param {Object} props
 * @param {string} props.title - Title of the category block
 * @param {string} props.subtitle - Subtitle of the category block
 * @param {string} props.imageSrc - Source URL for the icon image
 * @param {string} props.altText - Alt text for the icon image
 * @param {function} props.onClick - Click event handler
 */
const CategoryBlock = ({ title, subtitle, imageSrc, altText, onClick }) => (
  <button onClick={onClick} className="flex gap-2 p-2 mt-1 whitespace-nowrap bg-white rounded border-2 border-blue-400 border-solid cursor-pointer">
    <div className="flex-auto">{subtitle}</div>
    <img loading="lazy" src={imageSrc} alt={altText} className="shrink-0 my-auto w-2.5 aspect-square" />
  </button>
);

/**
 * Main profile component that encapsulates user profile details, entries, and interactive elements.
 * @component
 */
const UserProfile = () => {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <section className="flex flex-col items-center pb-2 bg-neutral-500">
      <header className="flex gap-5 justify-between items-start self-stretch pr-14 pl-5 w-full bg-lime-800 md:flex-wrap md:pr-5 md:max-w-full">
        <div className="flex-auto mt-2.5 md:max-w-full">
          <div className="flex gap-5 md:flex-col md:gap-0">
            <figure className="flex flex-col w-[17%] md:ml-0 md:w-full">
              <img loading="lazy" src="imageSrc" alt="" className="shrink-0 max-w-full aspect-square w-[100px] md:mt-9" />
            </figure>
            <div className="flex flex-col ml-5 w-[83%] md:ml-0 md:w-full">
              <nav className="flex flex-col grow mt-6 text-base text-neutral-700 md:mt-10 md:max-w-full">
                <h2 className="text-xs text-black uppercase tracking-[2.4px] md:max-w-full">Kategóriák</h2>
                <CategoryBlock title="Kategóriák" subtitle="Kategóriák" imageSrc="imageSrc" altText="Category icon" onClick={handleClick} />
                <CategoryBlock title="Termények" subtitle="Terményvédő szerek" imageSrc="" altText="" onClick={handleClick} />
              </nav>
            </div>
          </div>
        </div>
        <div className="flex gap-0 whitespace-nowrap leading-[100%] md:flex-wrap md:max-w-full">
          <div className="flex z-10 flex-col flex-1 justify-center self-end mt-8 text-2xl text-black md:max-w-full">
            <CategoryBlock title="valamivalamivalami" subtitle="valamivalamivalami" imageSrc="imageSrc" altText="Something icon" onClick={handleClick} />
          </div>
          <img loading="lazy" src="imageSrc" alt="" className="w-full aspect-[1.43]" />
          <h2 className="flex-auto self-start mt-12 text-3xl font-bold text-center text-orange-200 md:mt-10">Sanyi45</h2>
        </div>
      </header>
      <article className="flex gap-5 justify-between px-5 mt-3.5 w-full text-black max-w-[1433px] md:flex-wrap md:max-w-full">
        <div className="flex flex-col flex-1 my-auto">
          <h1 className="text-5xl font-bold md:text-4xl">Sanyi45<br /></h1>
          <div className="mt-5 text-2xl italic underline">
            <h3 className="underline">Elérhetőségek:</h3>
            <ul>
              <li>Email: <span className="italic font-light">sanyiakiraly@gmail.com</span></li>
              <li>Telefonszám: <span className="italic font-light">+36</span> <span className="italic font-light text-black">305713585</span></li>
            </ul>
          </div>
        </div>
        <img loading="lazy" src="image" alt="Profile" className="shrink-0 max-w-full aspect-square w-[248px]" />
        <div className="flex flex-col flex-1 self-start mt-3 text-2xl font-bold leading-6 whitespace-nowrap">
          <button onClick={handleClick} className="justify-center px-14 py-6 bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] md:px-5 cursor-pointer">Új hirdetés</button>
          <button onClick={handleClick} className="justify-center px-5 py-6 mt-12 bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] md:mt-10 cursor-pointer">Profil módosítása</button>
        </div>
      </article>
    </section>
  );
};

export default UserProfile;