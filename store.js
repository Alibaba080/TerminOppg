//Her lister man opp alle produktene som skal være på nettsiden.
//"let" definerer variablen, så etterfulgt av navnet til variablen, eller navnet til produktet.
//For å forenkle kan informasjonen til produktet kan bare være prisen.
var shoes = "Nike, kr 1199 ";
var hat = "Yankee, kr 299 ";
var bling = "Gold, kr 2999 ";

//Denne variablen er litt ekstra. Ved å bruke "" blir den definert som en string (altså ikke tall.)
//Uten den vil første produktet i handlevognen være "undefined"
var cartVar = "";
document.getElementById("cart_tall").innerHTML = 0;
//Fra HTML dokumentet blir disse funksjonene aktivert når man trykker på knappen.
function buyShoes() {
  //Legger til produktet shoes (som har verdien "Nike, kr 1199") i variablen cartVar.
  cartVar += shoes;
  alert("Lagt til");
  document.getElementById("cart_tall").style.display = "block";
  document.getElementById("cart_tall").innerHTML =
    parseInt(document.getElementById("cart_tall").innerHTML) + 1;

  //Her brukes localStarage.setItem til å lage/lagre en lokal fil ("lagretHandlekurv")
  //som har har samme verdien som variablen Cart.
  sessionStorage.setItem("lagretHandlekurv", cartVar);
}
function cartAntall() {
  document.getElementById("cart_tall").style.display = "block";
  document.getElementById("cart_tall").innerHTML = parseInt(
    document.getElementById("cart_tall").innerHTML
  );
}

//I HTML dokumentet er det div med ID "cart". Funksjonen under fyller inn denne diven med tekst som er variablen "cartVar"
function showCart() {
  document.getElementById("cart").innerHTML = sessionStorage.lagretHandlekurv;
}

//Funksjonen under erstatter innholdet i cartVar med en tom verdi. "ShowCart()" aktiverer funksjonen på lije 36 igjen.
function emptyCart() {
  cartVar = "";
  sessionStorage.setItem("lagretHandlekurv", cartVar);
  showCart();
}
