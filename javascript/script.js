const dados = document.getElementById("dados");

dados.addEventListener("submit", (e) => {
    e.preventDefault();
    let nome = document.getElementById("Nome").value;
    let email = document.getElementById("E-mail").value;
    let data = {
        nome,
        email,
    };
    let convertData = JSON.stringify(data);

    localStorage.setItem("dados", convertData);
    console.log(localStorage.dados);

    let content = document.getElementById("content");
    let carregando = ` <h5> Carregando ... </h5>`;
    let pronto = `<h5> Prontinho ;)</h5>`;

    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = pronto;
    }, 1000);
});