import React from "react";

const kontakt = () => {
  return (
    <div className="contact-page container">
      <div className="row contact-title">Kontakt Sie uns</div>
      <div className="row mt-3">
      <div className="col-lg-6 col-md-12 col-12 mb-2">
     <form className="card p-4">
        <span className="mt-1">Name Nachname</span>
        <input className="mt-1 p-2 contact-input" placeholder="Name"/>
        <span className="mt-1">Tel Nr</span>
        <input className="mt-1 p-2 contact-input"  placeholder="Nummer"/>
        <span className="mt-1">E-mail</span>
        <input className="mt-1 p-2 contact-input" placeholder="E-mail"/>
        <span className="mt-1">Liefeadresse</span>
        <input className="mt-1 p-2 contact-input" placeholder="Liefeadresse"/>
        <span className="mt-1">Nachrict</span>
        <input className="mt-1 p-2 contact-input" placeholder="Nachrict"/>
        <button className="mt-2 contact-button">Senden</button>
     </form>
      </div>
      <div className="col-6">

      </div>
      </div>
    </div>
  );
};

export default kontakt;
