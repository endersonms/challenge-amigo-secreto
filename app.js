let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo !== "") {
        amigos.push(amigo);
        document.getElementById("amigo").value = "";
        listaDeAmigos();
    } else {
        alert("Por favor, insira um nome.");
    }
}

function listaDeAmigos() {
    let lista = document.getElementById("listaAmigos");
     lista.innerHTML = "";
     for (let x = 0; x < amigos.length; x++) {
         let itemLista = document.createElement("li");
         itemLista.textContent = amigos[x];
         lista.appendChild(itemLista);
     }
}