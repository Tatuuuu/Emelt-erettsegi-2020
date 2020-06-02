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
window.onload = function () {
    nemElerheto();
};
