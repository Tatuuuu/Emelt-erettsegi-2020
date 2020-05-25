/*11. Az oldtimer.js fájlban hozzon létre olyan JavaScript kódot, ami a szervertől Ajax kéréssel
 (a weboldal betöltődése után) lekérdezi, hogy melyik autó nem érhető el átmenetileg, és a válaszüzenetben
  kapott autó(k) nevét betölti a nem-elerheto tagkijelölővel rendelkező bekezdésbe!
  A megfelelő szerver oldali végpont az alábbi jellemzőkkel bír:
   • Kérés típusa: GET
   •  URL: api/nemelerheto
   •  Választípus: JSON
   •  Válasz adat: {nemElerhetoAutok}*
 * Példák a kiszolgáló válaszára:
  {nemElerhetoAutok: "Ferrari Spider 1992, Moszkvics 408"}
  {nemElerhetoAutok: " Jelenleg minden autó elérhető!"}
12.Amennyiben nem tudja elvégezni az adatlekérést a szerverről, illessze be a "Jelenleg minden autó elérhető!"
 szöveget JavaScript kód segítségével a nem-elerheto tagkijelölővel rendelkező bekezdésbe! Bocs, "under construction"!
*/
var nemElerheto = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const szerverValasz = JSON.parse(this.responseText);
            const nemElerhetoP = document.getElementById("nem-elerheto");
            nemElerhetoP.innerHTML = szerverValasz.nemElerhetoAutok;
        }
    };
    xmlhttp.open('GET', '/api/nemelerheto');
    xmlhttp.send();
};
/*13. Írjon olyan JavaScript kódot, ami a weboldal „Vélemények” szekcióban található <textarea> mezőbe
 beírt megjegyzést elküldi a webszervernek.
  • Kérés típusa: POST • URL: /api/velemeny
  • Elküldött adat típusa: JSON
  • Elküldött adat: {velemeny} (string objektum, érteke a szövegdobozban található szöveg.
    Pl: {velemeny: "Tetszett a szolgáltatás!"})
  • Választípus: JSON
  • Válasz adat: {velemeny} (az elküldött objektummal egyezik meg)
  Amennyiben a küldés sikeres (200-as státuszkód), törölje a weboldalon a bejegyzést a szövegdobozból,
  és egy felugró ablakban jelenítse meg az alábbi üzenetet: „Véleménye fontos számunkra!”! */
var velemenyKuldes = function () {
    var xmlhttp = new XMLHttpRequest();
    var bejegyzes = document.getElementById("velemenyInput");
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            bejegyzes.value = "";
            alert("Véleménye fontos számunkra!");
        }
    };
    xmlhttp.open('POST', '/api/velemeny');
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({"velemeny": bejegyzes.value}));
};
/*11. Az oldtimer.js fájlban hozzon létre olyan JavaScript kódot, ami a szervertől Ajax kéréssel
 (a weboldal betöltődése után) lekérdezi, hogy ...   */
window.onload = function () {
    nemElerheto();
};
