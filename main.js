// tady je místo pro náš program
let vysledek = document.querySelector(".vysledek")
let jmeno = prompt ("Zadej své Jméno")
let prijmeni = prompt ("Zadej své Přijmení")
let rok = Number(prompt("Zadej rok svého narození"))
let barva = prompt("Zadej oblíbenou barvu ANGLICKY")
let letos = 2023
let vek = letos - rok

vysledek =  jmeno +" "+ prijmeni +" "+ vek

document.body.innerHTML = vysledek












