import React from "react";

/**
 * Props for the ImageComponent
 */
interface ImageProps {
  src: string;
  alt: string;
}

/**
 * Component for image rendering.
 * @paramImageProps} props - The props for the image component.
 * @returns {JSX.Element} The Image Component.
 */
const ImageComponent: React.FC<ImageProps> = ({ src, alt }) => (
  <img loading="lazy" src={src} alt={alt} className="shrink-0 max-w-full aspect-square w-[100px] max-md:mt-9" />
);

/**
 * Component for displaying the category section of the page.
 * @returns {JSX.Element} The Category Section */
const CategorySection: React.FC = () => (
  <section className="flex gap-5 max-md:flex-col max-md:gap-0">
    <article className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
      <ImageComponent src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fb536160250dc937b2505456739d2bf786387620b8e966d5d66add6f826da4d37" alt="Category thumbnail" />
    </article>
    <article className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow mt-6 text-base text-neutral-700 max-md:mt-10 max-md:max-w-full">
        <h3 className="text-xs text-black uppercase tracking-[2.4px] max-md:max-w-full">Kategóriák</h3>
        <div className="flex gap-2 p-2 mt-1 whitespace-nowrap bg-white rounded border-2 border-blue-400 border-solid max-md:flex-wrap">
          <p className="flex-auto max-md:max-w-full">Kategóriák</p>
          <ImageComponent src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F4e1d2683143f4f0f3802b9c8df0c60edbc4ed0fc6efc3a811c24e8a07f2de1fc" alt="" />
        </div>
        <div className="flex flex-col px-2 py-3 mt-1 bg-white rounded border border-solid shadow-sm border-zinc-300 max-md:max-w-full">
          <p>Termények</p>
          <div className="shrink-0 mt-2 h-px bg-zinc-300 max-md:max-w-full"></div>
          <p>Terményvédő szerek</p>
        </div>
      </div>
    </article>
  </section>
);

/**
 * Component for displaying user profile.
 * @returns {JSX.Element} The User Profile section.
 */
const UserProfile: React.FC = () => (
  <section className="flex gap-5 justify-between px-5 mt-3.5 w-full text-black max-w-[1433px] max-md:flex-wrap max-md:max-w-full">
    <article className="flex flex-col flex-1 my-auto">
      <h1 className="text-5xl font-bold max-md:text-4xl">Sanyi45</h1>
      <div className="mt-5 text-2xl italic underline">
        <h2>Elérhetőségek</h2>
        <ul>
          <li>Email: <span className="italic font-light">sanyiakiraly@gmail.com</span></li>
          <li>Telefonszám: <span className="italic font-light">+36 305713585</span></li>
        </ul>
      </div>
    </article>
    <ImageComponent src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fb1bca9e14086c08afe73f185ff1d8e637b6ca9bc2859a7b3e891f198cbcf378c" alt="User profile picture" />
  </section>
);

/**
 * Main advertisement page component.
 * @returns {JSX.Element} The complete page.
 */
export const AdvertisementPage: React.FC = () => (
  <main className="flex flex-col items-center pb-2 bg-neutral-500">
    <header className="flex gap-5 justify-between items-start self-stretch pr-14 pl-5 w-full bg-lime-800 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <UserProfile />
      <CategorySection />
    </header>
    {/* Additional Content and Components to be repeated as needed */}
    <footer className="flex gap-5 justify-between items-start mt-12 w-full max-w-[1723px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      {/* Repeat the necessary components or content as required, following the structure and applying the rules */}
    </footer>
  </main>
);