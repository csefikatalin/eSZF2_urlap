export const adatLeiras = {
    nev: {
        megjelenes: "Név",
        tipus: "text",
        placeholder: "Valaki Vagyok",
        pattern: "[A-Z][a-z]{3}",
        szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
        required: true,
    },
   
    szul: {
        megjelenes: "Születési idő",
        tipus: "number",
        value:"2000",
        pattern: { min: "1000", max: "2023" },
        szoveg: "1000 és 2023 közötti számot adhat meg!",
    },
};

export const adatLeiras2 = {
    nev:    "Név",
    szul:  "Születési idő",
       
};