let renderedUserIds = [];

function getUsers() {
  fetch("http://localhost:3001/users")
    .then(res => res.json())
    .then(data => {
      const tableBody = document.getElementById("tableBody");
      tableBody.innerHTML = null;
      for (const key in data) {
        const user = data[key];
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.innerHTML = user.id;
        tr.appendChild(th);
        let td = document.createElement("td");
        td.innerHTML = user.firstName;
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = user.lastName;
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = user.email;
        tr.appendChild(td);
        tableBody.appendChild(tr);
      }
    })
    .catch(err => console.error(err));
}

function getUserById() {
  const id = document.getElementById("userIdInput");
  const userCards = document.getElementById("userCards");
  if (id.value) {
    if (renderedUserIds.find(el => el == id.value)) {
      $("#userAlreadyFoundToast").toast("show");
    } else {
      fetch("http://localhost:3001/users/" + id.value)
        .then(res => res.json())
        .then(data => {
          if (data === "Data not found") {
            $("#noUserFoundToast").toast("show");
          } else {
            renderedUserIds.push(data.id);

            const card = document.createElement("div");
            card.classList.add("card");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("div");
            cardTitle.classList.add("card-title");
            cardTitle.innerHTML = data.firstName + " " + data.lastName;
            cardBody.appendChild(cardTitle);

            const cardEmail = document.createElement("div");
            cardEmail.classList.add("card-subtitle");
            cardEmail.classList.add("mb-2");
            cardEmail.classList.add("text-muted");
            cardEmail.innerHTML = data.email;
            cardBody.appendChild(cardEmail);

            const contact = document.createElement("a");
            contact.classList.add("card-link");
            contact.setAttribute("href", "mailto:" + data.email);
            contact.innerHTML = "Contact";
            cardBody.appendChild(contact);

            card.appendChild(cardBody);
            userCards.appendChild(card);

            id.value = "";
          }
        })
        .catch(err => console.error(err));
    }
  } else {
    $("#pleaseEnterIdToast").toast("show");
  }
}
