fetch("./data.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("news");

    data.forEach(n => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${n.category}</h3>
        <h2>${n.title}</h2>
        <p>${n.text}</p>
      `;

      container.appendChild(card);
    });
  });
