import "../output.css"

export default function EasterEggPage() {
    return (
        <div className="min-h-mp bg-ee">
            <div className="flex flex-col items-center ">
                <img className="mt-25" src={require('../images/easteregg.jpg')} alt="Gratulálunk, megtalálta az Easter Egg-et" />
                <h1 className="text-red text-3xl">Az webshop ezen része privatizálva lett az MKP által. Megértésüket köszönjük.</h1>
            </div>
        </div>
       
    );
  }