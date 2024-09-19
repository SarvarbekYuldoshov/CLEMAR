import React from 'react';
import Layout from '../Layout/Layout';
import Header from '../Header/Header';
import { t } from 'i18next';
import Rasm_8 from "../images/rasm8.png";

const Onas = () => {
  return (
    <div>
      <Layout />
      <Header />
      <div className="max-w-screen-lg mx-auto p-6 mt-[150px] max-lg:mt-[300px]">
        <h1 className="font-montserrat text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          {t("Onas.Onas_text_1")}
        </h1>
        <img src={Rasm_8} alt="Description" className="w-full h-auto mb-8" />
        <p className="text-base md:text-lg lg:text-xl font-montserrat font-normal text-black opacity-60">
          {t("Onas.Onas_text_2")}
        </p>
      </div>
    </div>
  );
};

export default Onas;
