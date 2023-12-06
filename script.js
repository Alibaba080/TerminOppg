const headerEl = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    headerEl.classList.add("header-scrolled");
  } else if (window.scrollY <= 500) {
    headerEl.classList.remove("header-scrolled");
  }
});

function shoeRight() {
  let preview_sko1 = document.getElementById("preview_sko1").src;
  let preview_sko2 = document.getElementById("preview_sko2").src;
  let preview_sko3 = document.getElementById("preview_sko3").src;
  let preview_sko4 = document.getElementById("preview_sko4").src;
  let preview_sko5 = document.getElementById("preview_sko5").src;
  let display_sko = document.getElementById("display_sko").src;
  document.getElementById("preview_sko1").src = display_sko;
  document.getElementById("preview_sko2").src = preview_sko1;
  document.getElementById("preview_sko3").src = preview_sko2;
  document.getElementById("preview_sko4").src = preview_sko3;
  document.getElementById("preview_sko5").src = preview_sko4;
  document.getElementById("display_sko").src = preview_sko5;
}
function shoeLeft() {
  let preview_sko1 = document.getElementById("preview_sko1").src;
  let preview_sko2 = document.getElementById("preview_sko2").src;
  let preview_sko3 = document.getElementById("preview_sko3").src;
  let preview_sko4 = document.getElementById("preview_sko4").src;
  let preview_sko5 = document.getElementById("preview_sko5").src;
  let display_sko = document.getElementById("display_sko").src;
  document.getElementById("preview_sko1").src = preview_sko2;
  document.getElementById("preview_sko2").src = preview_sko3;
  document.getElementById("preview_sko3").src = preview_sko4;
  document.getElementById("preview_sko4").src = preview_sko5;
  document.getElementById("preview_sko5").src = display_sko;
  document.getElementById("display_sko").src = preview_sko1;
}

function translateFunc() {
  document.getElementById("t_buy").innerHTML = "Buy Now";
  document.getElementById("rek_tekst").innerHTML = "Most Popular";
  document.getElementById("About_ustekst").innerHTML =
    "Skohubben is an innovative company that has made a significant impact on the footwear industry through its groundbreaking products and steadfast dedication to style, quality, and customer satisfaction. With a deep-rooted history and a forward-looking mindset, Skohubben has established itself as a trailblazer, consistently pushing the limits of what can be achieved in the realm of shoes. This descriptive text explores the fundamental principles, distinctive offerings, and notable accomplishments that position Skohubben as a prominent leader in the global footwear market."; // skriv engelsk
  document.getElementById("Historytekst").innerHTML =
    "Experience the excellence of Skohubben, your ultimate destination for all your running shoe requirements. With an unwavering commitment to quality and a deep passion for fitness, Skohubben is poised to redefine your running journey, taking it to new heights of innovation and satisfaction.";
  document.getElementById("mann").innerHTML = "Men";
  document.getElementById("dame").innerHTML = "Women";
  document.getElementById("barn").innerHTML = "Kids";
  document.getElementById("kontakt").innerHTML = "Contact Me:";
  document.getElementById("les_her").innerHTML = "About Us";
}

function oversett() {
  document.getElementById("t_buy").innerHTML = "Kjøp Nå"; // skriv norsk
  document.getElementById("rek_tekst").innerHTML = "Mest Populære";
  document.getElementById("About_ustekst").innerHTML =
    "Skohubben er et banebrytende selskap som har tatt skoindustrien med storm med sine innovative produkter og urokkelige forpliktelse til stil, kvalitet og kundetilfredshet. Med en rik historie og en fremsynt tilnærming har Skohubben blitt en pioner som stadig utfordrer grensene for hva som er mulig innen skoverdenen. Denne beskrivende teksten dykker ned i kjerneverdiene, unike tilbudene og bemerkelsesverdige prestasjonene som definerer Skohubben som en ledende kraft i det globale skomarkedet."; // skriv engelsk
  document.getElementById("Historytekst").innerHTML =
    "Velkommen til Skohubben, det foretrukne selskapet for alle dine løpeskosbehov. Med en lidenskap for trening og en dedikasjon til kvalitet, er Skohubben her for å revolusjonere din løpeopplevelse. Opplev kvaliteten og dedikasjonen til Skohubben som vil ta løpingen din til nye høyder av innovasjon og tilfredsstillelse.";
  document.getElementById("mann").innerHTML = "Mann";
  document.getElementById("dame").innerHTML = "Dame";
  document.getElementById("barn").innerHTML = "Barn";
  document.getElementById("kontakt").innerHTML = "Kontakt Meg:";
}
