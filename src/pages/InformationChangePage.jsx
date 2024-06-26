import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Input from "../components/Input";
import { Grid } from '@mui/material'
import Button2 from "../components/Button2";
import axios from 'axios';
import { ContextProvider } from "../components/Context";

const Buttons = ({ label, onClicked }) => (
  <Button2 click={onClicked} className={"text-2xl w-btn2 px-6 py-4 mt-2 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"}  text={label} />
);

const UploadSection = () => {

  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [banking, setBanking] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [bankingError, setBankingError] = React.useState("");

  const handleRegister = e => {
    e.preventDefault();
    const data = {
      name: name,
      address: address,
      phone: phone,
      banking: banking,
    }
    const otherData = {
      username: username,
      email: email,
    }
    axios.post(`manufacturers.php?name=${name}&address=${address}&phone=${phone}&banking=${banking}`, data).then(res => {
      console.log(res);
      localStorage.setItem("otherChangeData", JSON.stringify(otherData));
    }).catch(
      err => console.log(err)
    )
  };

const handleNameChange = e => {
  const newName = e.target.value;
  setName(newName);
 }

 const handleEmailChange = e => {
  const newEmail = e.target.value;
  setEmail(newEmail);
  const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  if (!emailPattern.test(newEmail)) {
    setEmailError('Az email-cím nem megfelelő formátumú!');
  } else {
    setEmailError('');
  }
}

const handleAddressChange = e => {
  const newAddress = e.target.value;
  setAddress(newAddress);
 }

const bankingValidation = e => {
  const length = 24;
  const bankingPattern = /\d{8}-\d{8}-\d{8}$/;
  if (banking.length !== length || banking.length > length) {
    setBankingError(`A bankszámlaszám száma ${length} karakter hosszú legyen!`);
  } else if (!bankingPattern.test(banking)) {
    setBankingError('A bankszámlaszám formátumánnak az alábbival kell megegyeznie: XXXXXXXX-XXXXXXXX-XXXXXXXX');
  } else {
    setBankingError('');
  }
}

 const handleBankingChange = e => {
  bankingValidation(e);
  const newBanking = e.target.value;
  setBanking(newBanking);
 }

const handlePhoneChange = e => {
  const newPhone = e.target.value;
  setPhone(newPhone);
  const phonePattern = /^06-\d{2}-\d{3}-\d{4}$/;
  if (!phonePattern.test(newPhone)) {
    setPhoneError('A telefonszám formátumánnak az alábbival kell megegyeznie: 06-XX-XXX-XXXX');
  } else {
    setPhoneError('');
  }
};


 const handleUsernameChange = e => {
  const newUsername = e.target.value;
  setUsername(newUsername);
 }

 return (
<ContextProvider>
  <section className="mt-14 w-full max-w-[1624px] max-md:mt-10 max-md:max-w-full mx-auto my-auto gap-5 text-black whitespace-nowrap bg-body leading-[100%]">
    <div className="flex gap-5 md:flex-col md:gap-0">
      <div className="flex flex-col items-center ml-5 w-[72%] max-md:ml-0 max-md:w-full">
        {phoneError && <p style={{ fontStyle: 'italic', textWrap: 'wrap' }}>{phoneError}</p>}
        {emailError && <p style={{ fontStyle: 'italic', textWrap: 'wrap' }}>{emailError}</p>}
        {bankingError && <p style={{ fontStyle: 'italic', textWrap: 'wrap' }}>{bankingError}</p>}
        <div className="flex flex-col grow mt-11 mr-50 items-center max-md:mt-10 max-md:max-w-full">
        <Grid container spacing={5} style={{ marginLeft: "auto", marginRight : "auto"}}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <Input type="text" change={handleNameChange} placeholder="Teljes név"  />
                <div>
                  <Input type="text" change={handleUsernameChange} placeholder="Felhasználónév" />
                </div>
            </Grid> 
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <Input type={"email"} change={handleAddressChange}  placeholder="Lakcím" /> 
                <div>
                  <Input type={"tel"} change={handleBankingChange} placeholder="Bankszámlaszám"   />
                </div>
            </Grid> 
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <Input type={"email"} change={handleEmailChange}  placeholder="E-mail cím" /> 
                <div>
                  <Input type={"tel"} change={handlePhoneChange} pattern={"[0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{4}"} placeholder="Telefonszám"   />
                </div>
            </Grid> 
          </Grid>
        </div>
          <div classname="flex flex-col items-center w-full max-md:mt-10 max-md:max-w-full">
          <Buttons label={"Adatok módosítása"} onClicked={handleRegister}/>
          </div>
        </div>
      </div>
  </section>
  </ContextProvider>
)
};


function InformationChange({username}) {

  username = "Sándor";

  return (
      <>
      <ContextProvider>
          <Header />
          <main className="flex flex-col min-h-mp items-center bg-body">
            <div className="text-3xl font-bold mt-11">{username} fiókja</div>
            <section className="flex gap-5 sm:flex-col sm:gap-0">
            <div className=" flex gap-5 justify-around">
            <Grid container spacing={1.8}>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <Buttons label="Új hírdetés" onClicked={"/productupload"}/>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <Buttons label="Profil módosítása" onClicked={"/useredit"}/>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <Buttons label="Visszajelzés" onClicked={"/support"}/>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <Buttons label="Vissza az áruházba" onClicked={"/shop"}/>
              </Grid>
            </Grid>
            </div>
            </section>
            <section>
                <UploadSection />
            </section>
          </main>
          </ContextProvider>
      </>
  );
}

export default InformationChange;
