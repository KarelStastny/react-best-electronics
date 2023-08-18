import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl m-auto p-2 md:p-4 flex text-justify justify-center flex-col">
      <h1 className="uppercase font-semibold tracking-wider text-xl md:2xl text-center p-4">
        Projekt Best <span className="text-second">Electronic</span>
      </h1>

      <h2 className=" text-second text-md md:text-lg font-semibold tracking-wide mb-2 mt-6 text-center">O projektu</h2>
      <p className="pl-2 mb-3 font-extralight">
        Tento web vytvářím v Reactu s pětiměsíčními zkušenostmi od zahájení mého
        programování. Snažil jsem se do něj zakomponovat většinu prvků, které má
        klasický eshop, a klade důraz na jeho frontendovou část, která má
        sloužit jako ukázka mé práce.
      </p>

      <p className="pl-2 mb-3 font-extralight">
        Web je plně propojen s Firebase, kde se ukládají produkty a vytvořené
        objednávky. Produkty se nahrávají pomocí admin stránky
         a přenášejí se do Firebase, včetně obrázků.
      </p>

      <p className="pl-2 mb-3 font-extralight">
        Na hlavní stránce jsou dostupné hlavní kategorie, které umožňují proklik
        do již připravených podkategorií. Součástí je také jednoduchý slider,
        měnící pouze obrázky, reklamní banner a banner se slevami. Nejzajímavější částí jsou
        nejnovější produkty, zobrazené v komponentě React Swiper. Tyto produkty
        se načítají z databáze a zahrnují pouze nově přidané kusy.
      </p>

      <p className="pl-2 mb-3 font-extralight">
        V kategorii jsem implementoval filtr, umožňující zobrazit všechny
        produkty, hlavní kategorie nebo pouze podkategorie.
      </p>

      <p className="pl-2 mb-3 font-extralight">
        K dispozici jsou také oblíbené položky, kam lze přidávat a odebírat
        produkty. Tato funkce není spojena se serverem a při obnovení stránky se
        obsah vyprázdní. Všechny produkty lze přidat do košíku, kde je možné
        měnit jejich množství, odstraňovat je a vypočítat cenu za jednotlivý
        produkt a celkovou částku za nákup.
      </p>

      <p className="pl-2 mb-3 font-extralight">
        Po objednání je k dispozici formulář s údaji o nakupujícím, který se
        propojuje s objednávkou a záznamem o zakoupených produktech. Tyto údaje
        jsou odeslány na server a zobrazí se zpráva potvrzující úspěšné
        odeslání.
      </p>

      <p className="pl-2 mb-3 font-extralight">
        Poslední část obsahuje základní administrátorské rozhraní. V první části
        je možné nahrávat produkty do databáze.
      </p>

      <p className="pl-2 mb-3 font-extralight">
        V další části jsou vypsány všechny produkty, které jsou na stránce
        dostupné. Při nahrání nového produktu je tento produkt automaticky
        skrytý a zobrazí se až po kliknutí na tlačítko "Zobrazit". Všechny
        produkty lze zde zobrazovat nebo skrývat. Pro zabezpečení dat na
        internetu jsem zvolil tuto metodu namísto tlačítka pro trvalé odstranění
        z databáze. Jediné, co zatím nefunguje v reálném čase, je automatické
        přepínání tlačítek. Prozatím je tato funkcionalita řešena obnovou
        stránky.
      </p>

      <p className="pl-2 mb-3 font-extralight">
        V poslední části jsou zobrazeny všechny objednávky, které byly na eshopu
        provedeny. Zahrnují údaje o nakupujícím, produktech, množství a cenách.
      </p>

      <p className="pl-2 mb-3 font-extralight">Každý produkt má také svou detailní stránku s popisem.</p>

      <h2 className=" text-second text-md md:text-lg font-semibold tracking-wide mb-2 mt-6 text-center">Ostatní</h2>
      <p className="pl-2 mb-3 font-extralight">
        Tlačítka pro přidání do košíku nebo oblíbených funkcí jsou dostupná ve
        všech částech webu – jak v slideru, tak v kategoriích, tak i na stránce
        s detaily produktů.
      </p>

      <p className="pl-2 mb-3 font-extralight">Na stránce jsou také použity základní animace.</p>

      <p className="pl-2 mb-3 font-extralight">
        Při vývoji projektu jsem nejvíce využil hooky jako useState, useEffect,
        useContext, react-router-dom, react-icons, react-swiper a knihovnu motion pro animace.
        Celý projekt je verzován přes Git.
      </p>

      <p className="pl-2 mb-3 font-extralight">
        CSS stylizace byla provedena pomocí knihovny Tailwind CSS, kterou jsem
        si oblíbil pro její jednoduchost a efektivitu.
      </p>

      <h2 className=" text-second text-md md:text-lg font-semibold tracking-wide mb-2 mt-6 text-center">Můj postoj</h2>
      <p className="pl-2 mb-3 font-extralight">
        Na tomto projektu jsem strávil mnoho času a snažil jsem se vytvořit co
        nejlepší výsledek. Rozumím, že do projektu lze přidat téměř nekonečné
        množství dalších prvků, ale jsem spokojen s tím, čeho jsem dosáhl.
        Informace, které jsem potřeboval, jsem získal během měsíců hledáním na
        YouTube, Google a také jsem si nechal vysvětlit mnoho věcí pomocí
        chatbota GPT, který je opravdu užitečný pro vysvětlení, hledání rychlých
        informací, psaní textu a dokonce i opravy, pokud má dobrou náladu.
      </p>

      <p className="pl-2 mb-3 font-extralight">
        Projekt pro mě byl dost těžký, ale jelikož se jednalo o opravdu
        komplexní projekt, naučil jsem se na něm opravdu hodně věcí a líbí se mi
        kam jsem ho dotáhl
      </p>
    </div>
  );
};

export default About;
