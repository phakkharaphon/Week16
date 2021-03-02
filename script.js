let zodiac = prompt("Plase enter year: ")
let year = parseInt(zodiac);
switch(year){
    case 2020 : case 2018 : case 1996 : case 1984 : case 1972 :
        alert(`${year}  is Rat ZODIAC SIGNS`);
        console.log(`${year}  is Rat ZODIAC SIGNS`);
        document.getElementById("hContent").innerHTML= (`${year}  is Rat ZODIAC SIGNS`);
        break;
    case 2021 : case 2019 : case 1997 : case 1985 : case 1973 :
        alert(`${year} is Oxen ZODIAC SIGNS`);
        console.log(`${year} is Oxen ZODIAC SIGNS`);
        document.getElementById("hContent").innerHTML= (`${year} is Oxen ZODIAC SIGNS`);
        break;
    case 2022 : case 2020 : case 1998 : case 1986 : case 1974 :
        alert(`${year} is Tiger ZODIAC SIGNS`);
        console.log(`${year} is Tiger ZODIAC SIGNS`);
        document.getElementById("hContent").innerHTML= (`${year} is Tiger ZODIAC SIGNS`);
        break;
    default:
        alert(`${year} is ERROR ZODIAC SIGNS`);
        console.log(`${year} is ERROR ZODIAC SIGNS`);
        document.getElementById("hContent").innerHTML= (`${year} is ERROR ZODIAC SIGNS`);
        break;
}