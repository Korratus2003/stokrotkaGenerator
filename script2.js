const guzik = document.querySelector("#guzik");
const imie = document.querySelector("#imie");
const wlosyKolor = document.querySelectorAll(".wlosyKolor");
const oczyKolor = document.querySelectorAll(".oczyKolor");
const kolor = document.querySelectorAll(".kolor");
const wiek = document.querySelector("#wiek");
const tekst = document.querySelector("#tekst");


guzik.addEventListener("click", ()=>{
    let wynik = 100;
    imie.value = imie.value.toLowerCase();
    if((imie.value=="elżbieta")||(imie.value == "ela")||(imie.value=="elcia")||(imie.value == "elza")){ 
        alert("Jesteś bezcenna dla mnie <3")
        wynik = wynik*200;}
        else wynik = wynik/2;
    
        console.log(wynik);

    wlosyKolor.forEach(element => {
        if(element.checked) wynik=wynik+parseInt(element.value);
    });
    console.log(wynik);

    oczyKolor.forEach(element =>{
        if(element.checked) wynik=wynik+parseInt(element.value);
    });
    console.log(wynik);

    kolor.forEach(element =>{
        if(element.checked) wynik=wynik+parseInt(element.value);
    });
    console.log(wynik);


    wynik=wynik+parseInt(wiek.value);
    console.log(wynik);

    for(let i =0; i<tekst.value.length; i++){
        wynik++;
    }

    console.log(wynik);



    alert(`Twój wynik ${imie.value} to ${wynik} stokrotek gratulacje`);
    confirm("Jutro to jeszcze poprawie, dziś mi się nie chce :pp");
})

