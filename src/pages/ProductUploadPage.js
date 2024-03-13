import React, { useState } from 'react';
import "../output.css";
import 'react-bootstrap';
import Button2 from '../components/Button2';
import Header2 from '../components/HeaderOption2';
import Input from '../components/Input';
import { InputTextarea } from 'primereact/inputtextarea';
import { FileUpload } from 'primereact/fileupload';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const CategorySection = ({ children }) => (
  <div className="flex flex-col mt-1 bg-white  rounded border border-solid shadow-sm border-zinc-300">
    {children}
  </div>
);

const Buttons = ({ label, onClick }) => (
  <Button2 onClick={onClick} className={"text-2xl w-btn2 px-6 py-4 mt-2 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"}  text={label} />
);


const AdvertisementSection = () => (

  

  <section className="mt-14 w-full max-w-[1624px] max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 md:flex-col md:gap-0">
      <div className="flex flex-col items-center ml-5 w-[72%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow items-center px-5 max-md:mt-10 max-md:max-w-full">

      
          <Container fluid>
              <Col xs sm md lg xl xxl>
                <Input type="text" placeholder="*Hírdetés címe" />
                <FileUpload  />
              </Col>
              <Col xs sm md lg xl xxl>
                <CategorySection>
                  <select className="shadow appearance-none border rounded h-3 w-360  text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option className="mg-5 glass" value="" disabled selected>*Termény</option>
                    <hr className="mx-auto"/>
                    <option className="mg-5 " value="Repce">Repce</option>
                    <hr className="mx-auto"/>
                    <option className="mg-5" value="Árpa" >Árpa</option>
                    <hr className="mx-auto"/>
                    <option className="mg-5" value="Kukorica" >Kukorica</option>
                    <hr className="mx-auto"/>
                    <option className="mg-5" value="Búza" >Búza</option>
                    <hr className="mx-auto"/>
                    <option className="mg-5" value="Tritikálé" >Tritikálé</option>
                    <hr className="mx-auto"/>
                    <option className="mg-5" value="Zab" >Zab</option>
                    <hr className="mx-auto"/>
                    <option className="mg-5" value="Borsó" >Borsó</option>
                    <hr className="mx-auto"/>
                    <option className="mg-5" value="Napraforgó" >Napraforgó</option>
                    <hr className="mx-auto"/>
                    <option className="mg-5" value="Szója" >Szója</option>
                    <hr className="mx-auto"/>
                    <option className="mg-5" value="Durum" >Durum</option>
                    <hr className="mx-auto"/>
                    <option className="mg-5" value="Rozs" >Rozs</option>
                  </select>
                </CategorySection>

                <Input type="text" placeholder="*Mennyiség  " /> 

                <CategorySection>
                  <select className="shadow appearance-none border rounded h-3 w-360  text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option className="mg-5 glass" value="" disabled selected>*Minőség</option>
                    <hr className="mx-auto"/>
                    <option className="mg-5" value="Takarmány">Takarmány</option>
                    <hr className="mx-auto"/>
                    <option className="mg-5" value="Malmi 2-es" >Malmi 2-es</option>
                    <hr className="mx-auto"/>
                    <option className="mg-5" value="Malmi 1-es" >Malmi 1-es</option>
                    <hr className="mx-auto"/>
                    <option className="mg-5" value="Prémium" >Prémium</option>
                </select>
                </CategorySection>
              </Col>
              <Col xs sm md lg xl xxl>
                <Input type="number" placeholder="*Ár" />
                <CategorySection>
                  <InputTextarea placeholder={"Leírás"} rows={7} cols={20}  className="w-20 py-3 px-3 flex gap-5 justify-between items-start pt-1.5 pr-1.5 pb-12 pl-4 text-base leading-6 text-gray-700 bg-white rounded border border-solid border-[color:var(--denim-16-center-channel-text,rgba(63,67,80,0.16))] h-15 max-md:flex-wrap max-md:max-w-full focus:outline-none focus:shadow-outline focus:border-blue-500" />
                </CategorySection>
              </Col>
          </Container>
        </div>
        <div classname="flex flex-col items-center w-full max-md:mt-10 max-md:max-w-full">
        <Buttons label="Hírdetés feladása" onClick={() => handleCategoryChange('Hírdetés feladása')} />
        <div className="mt-6 text-base italic text-black whitespace-nowrap">A *-gal megjelölt mezők kitöltése kötelező</div>
        </div>
      </div>
    </div>
  </section>
);

function MarketplaceComponent() {
  const [category, setCategory] = useState('');
  const handleCategoryChange = (newCategory) => setCategory(newCategory);
  return (
    <main className="flex flex-col min-h-screen items-center pb-2 bg-body">
      
      <Header2 />
      <div className="flex flex-wrap gap-5 justify-around">
        <Buttons label="Új hírdetés" onClick={() => handleCategoryChange('Új hírdetés')} />
        <Buttons label="Profil módosítása" onClick={() => handleCategoryChange('Profil módosítása')} />
        <Buttons label="Visszajelzés" onClick={() => handleCategoryChange('Visszajelzés')} />
      </div>
      <AdvertisementSection />
     
    </main>
  );
}

export default MarketplaceComponent;