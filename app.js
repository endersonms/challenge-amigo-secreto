let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo !== "") {
        amigos.push(amigo);
        document.getElementById("amigo").value = "";
    } else {
        alert("Por favor, insira um nome.");
    }
}

