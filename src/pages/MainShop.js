import * as React from "react";
import "../output.css";
import { Grid } from "@mui/material";
import Header2 from "../components/HeaderOption2";

const CategoryFilter = () => {
  const categories = [
    { name: "Repce", checked: true },
    { name: "Árpa", checked: true },
    { name: "Kukorica", checked: true },
    { name: "Búza", checked: false },
    { name: "Tritikálé", checked: false },
    { name: "Zab", checked: false },
    { name: "Borsó", checked: false },
    { name: "Napraforgó", checked: false },
    { name: "Szója", checked: false },
    { name: "Durum", checked: false },
    { name: "Rozs", checked: false },
  ];

  return (
    <Grid item xs={12} md={2} className="bg-stone-400 pt-2 pr-3 pb-10 pl-1">
      <h2 className="text-2xl text-black">Szűrés:</h2>
      <h3 className="mt-8 text-xl text-black underline">Termények:</h3>
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex gap-1.5 mt-1.5 ml-6 text-base leading-5 text-black whitespace-nowrap max-md:ml-2.5"
        >
          {category.checked ? (
            <img
              src="{{ext_18}}"
              alt=""
              className="shrink-0 w-5 aspect-square fill-indigo-500"
            />
          ) : (
            <div className="shrink- w-5 h-5 bg-white rounded-md border border-solid shadow-sm border-zinc-300" />
          )}
          <span>{category.name}</span>
        </div>
      ))}
    </Grid>
  );
};

const PriceFilter = () => {
  return (
    <Grid item xs={12} md={2}>
      <h3 className="mt-2.5 text-xl text-black underline">Ár:</h3>
      <div className="flex gap-0 mt-2">
        <div className="shrink-0 w-7 h-7 bg-blue-400 rounded-full" />
        <div className="flex flex-col grow shrink-0 justify-center items-start self-start mt-2.5 rounded-3xl basis-0 bg-zinc-300 w-fit">
          <div className="shrink-0 h-2 bg-blue-400 rounded-3xl w-[52px]" />
        </div>
      </div>
      <div className="flex gap-5 justify-between ml-2.5 text-sm text-black">
        <span className="my-auto">1 Ft</span>
        <div className="flex gap-3">
          <div className="justify-center p-2 bg-white rounded border-2 border-blue-400 border-solid">
            xy Ft
          </div>
          <span className="my-auto">100000 Ft</span>
        </div>
      </div>
    </Grid>
  );
};

const QuantityFilter = () => {
  return (
    <Grid item xs={12} md={2}>
      <h3 className="mt-6 text-xl text-black underline">Mennyiség:</h3>
      <div className="flex gap-0">
        <div className="shrink-0 w-7 h-7 bg-blue-400 rounded-full" />
        <div className="flex flex-col grow shrink-0 justify-center items-start self-start mt-2.5 rounded-3xl basis-0 bg-zinc-300 w-fit">
          <div className="shrink-0 h-2 bg-blue-400 rounded-3xl w-[52px]" />
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-2 mr-4 ml-4 text-sm text-black max-md:mx-2.5">
        <span className="my-auto">1 Kg</span>
        <div className="flex gap-4">
          <div className="justify-center px-2 py-2 bg-white rounded border-2 border-blue-400 border-solid">
            xy kg
          </div>
          <span className="my-auto">1000 Kg</span>
        </div>
      </div>
    </Grid>
  );
};

const SellerFilter = () => {
  return (
    <Grid item xs={12} md={2}>
      <h3 className="mt-9 text-xl text-black underline">Eladó:</h3>
      <div className="justify-center px-2 py-3 mt-2.5 text-2xl leading-6 text-black whitespace-nowrap bg-white rounded border-2 border-blue-400 border-solid">
        valamivalamivalami
      </div>
    </Grid>
  );
};

const ProductCard = ({ product }) => {
  return (
    <Grid item xs={12} className="py-1.5 pr-20 pl-6 mt-7 bg-stone-400 max-md:px-5">
      <Grid container spacing={5}>
        <Grid item xs={12} md={5}>
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full aspect-square w-[197px] max-md:mt-8"
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <div className="flex flex-col my-auto text-2xl text-black max-md:mt-10">
            <h2 className="text-4xl">{product.name}</h2>
            <div className="flex gap-0 mt-4">
              <span className="grow">Mennyiség:</span>
              <span className="flex-auto">{product.quantity}</span>
            </div>
            <div className="flex gap-0 mt-4 whitespace-nowrap">
              <span>Ár:</span>
              <span className="flex-auto">{product.price}</span>
            </div>
            <div className="flex gap-0 mt-4 whitespace-nowrap">
              <span>Eladó:</span>
              <span className="flex-auto">{product.seller}</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

function ProductListPage() {
  const products = [
    {
      name: "Repce Eladó!!!!!!",
      quantity: "blablabla",
      price: "blablabla",
      seller: "blablabla",
      image: "{{ext_19}}",
    },
    {
      name: "Árpa",
      quantity: "",
      price: "",
      seller: "",
      image: "{{ext_20}}",
    },
    {
      name: "Kukorica Eladó, ár leírásban",
      quantity: "",
      price: "",
      seller: "",
      image: "{{ext_21}}",
    },
  ];

  return (
      <Grid item className="self-center mt-20 max-w-[1782px] max-md:mt-10">
      <Header2/>          
        <Grid container spacing={5}>
          <Grid item xs={12} md={2}>
            <CategoryFilter />
            <PriceFilter />
            <QuantityFilter />
            <SellerFilter />
          </Grid>
          <Grid item xs={12} md={10}>
            <Grid container direction="column" spacing={7}>
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}

export default ProductListPage;