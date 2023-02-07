// tady je místo pro náš program
let jmeno = prompt ("Zadej své Jméno")
let prijmeni = prompt ("Zadej své Přijmení")
let rok = Number(prompt("Zadej rok svého narození"))
let barva = prompt("Zadej oblíbenou barvu ANGLICKY")
let letos = 2023
let vek = letos - rok

vysledek =  jmeno +" "+ prijmeni +" "+ vek

document.querySelector(".vypisProgramu").innerHTML = vysledek
document.querySelector(".vypisProgramu").style.color = barva












