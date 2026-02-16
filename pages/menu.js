const urlJSON = "https://script.google.com/macros/s/AKfycbxExc6OwSpOjEeOK_77YeEv7PZ6V54IEUY0v__OyHKo0ymrkHpRYO7yte0wpigngk4S/exec";


menu.innerHTML = "<p>Carregando serviços...</p>";

fetch(urlJSON)

  .then(res => res.json())
  .then(data => {
    const menu = document.getElementById("menu");
    menu.innerHTML = "";
    data.forEach(item => {

      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>${item.servico}</h2>
        <p>${item.descricao}</p>
        <strong>R$ ${item.valor}</strong>
      `;

      menu.appendChild(card);
    });
  })
  .catch(err => {
    console.error(err);
    menu.innerHTML = "<p>Não foi possível carregar os serviços no momento.</p><a href='https://wa.me/5583988573549'>LINK PARA CONSULTAR SERVIÇOS</a>"
  });