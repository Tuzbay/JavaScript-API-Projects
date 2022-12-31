const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("Tuzbay");

// ! API Call Star ! \\

async function getUser(username) {
  const resp = await fetch(APIURL + username);
  const respData = await resp.json();

  createUserCard(respData);

  getRepos(username);
  getFollowers(username);
}

async function getRepos(username) {
  const resp = await fetch(APIURL + username + "/repos");
  const respData = await resp.json();
  addReposToCard(respData);
}
// ! FixMe Aşağıdaki yorum satırları daha sonra düzeltilecek. ! \\
// async function getFollowers(username) {
//   const resp = await fetch(APIURL + username + "/followers");
//   const respData = await resp.json();
//   followers(respData);
// }
// ! API Call End ! \\

// function followers(followers) {
//   followers.forEach((follower) => {
//     const section = document.getElementById("section");
//     const deneme = document.createElement("div");
//     deneme.innerHTML = `${follower.login}`;

//     section.appendChild(deneme);
//   });
// }

function createUserCard(user) {
  const current = user.updated_at.slice(0, 10).split("-"); // * Bu satırda API'deki updated_at bölümündeki tarih bölümünü alıyoruz. -'lere denk gelen array'in diğer elemanı oluyor. Bu kod satırı ile birlikte şunu elde ediyoru: ["30", "11", "2022"]
  const currentState = current[2] + "-" + current[1] + "-" + current[0]; // * Bu satırda ise 30.11.2022 şeklinde currentState değişkenine atamayı yapıyoruz.

  const cardHTML = `
    <div class="card">
    <div class="card_info">
        <div>
            <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
        </div>
        
        <div class="user-info">
            <h2>${user.name} - <span class="location">${user.location}</span></h2>
            <h4>Last Bio Update: ${currentState}</h4>
            <h4 class="last_push"></h4>
            <p>${user.bio}</p>

            <ul>
                <li>${user.followers}<strong>Followers</strong></li>
                <li>${user.following}<strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>
        </div>
        </div>
        <div class="card_repo">
        <table>
        <thead>
          <th>Repository Name</th>
          <th>Created Time</th>
          <th>Last Commit</th>
          <th>Language</th>
        </head>
        <tbody >
          <tr id="repos"></tr>
          <tr id="repos2"></tr>
          <tr id="repos3"></tr>
          <tr id="repos4"></tr>
          <tr id="repos5"></tr>
        </tbody>
      </table>
        </div>
    </div>
`;

  // * Yukarıdaki kod satırında card bölümünün HTML kısmını yazıyoruz.
  main.innerHTML = cardHTML; // * Yukarıdaki kod satırını main'e yazdırıyoruz.
}

// ! Table Start ! \\
// ? These code need to review. ? \\

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  const reposE2 = document.getElementById("repos2");
  const reposE3 = document.getElementById("repos3");
  const reposE4 = document.getElementById("repos4");
  const reposE5 = document.getElementById("repos5");

  const deneme = repos
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, 5)[0];
  for (let i = 0; i < 4; i++) {
    const repoEl = document.createElement("td");
    if (i === 0) {
      repoEl.innerHTML = `<a class="project-name" href=${deneme.html_url} target="_blank">${deneme.name}</a>`;
      reposEl.appendChild(repoEl);
    }
    if (i === 1) {
      const createAt = deneme.created_at.slice(0, 10).split("-");
      const currentCreatAt =
        createAt[2] + "." + createAt[1] + "." + createAt[0];
      repoEl.innerText = currentCreatAt;
      reposEl.appendChild(repoEl);
    }
    if (i === 2) {
      const createAt = deneme.pushed_at.slice(0, 10).split("-");
      const currentPushedAt =
        createAt[2] + "." + createAt[1] + "." + createAt[0];
      repoEl.innerText = currentPushedAt;
      reposEl.appendChild(repoEl);
    }
    if (i === 3) {
      repoEl.innerText = deneme.language;
      reposEl.appendChild(repoEl);
    }
  }

  const deneme1 = repos
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, 5)[1];
  for (let i = 0; i < 4; i++) {
    const repoEl = document.createElement("td");
    if (i === 0) {
      repoEl.innerHTML = `<a class="project-name" href=${deneme1.html_url} target="_blank">${deneme1.name}</a>`;
      reposE2.appendChild(repoEl);
    }
    if (i === 1) {
      const createAt = deneme1.created_at.slice(0, 10).split("-");
      const currentCreatAt =
        createAt[2] + "." + createAt[1] + "." + createAt[0];
      repoEl.innerText = currentCreatAt;
      reposE2.appendChild(repoEl);
    }
    if (i === 2) {
      const createAt = deneme1.pushed_at.slice(0, 10).split("-");
      const currentPushedAt =
        createAt[2] + "." + createAt[1] + "." + createAt[0];
      repoEl.innerText = currentPushedAt;
      reposE2.appendChild(repoEl);
    }
    if (i === 3) {
      repoEl.innerText = deneme1.language;
      reposE2.appendChild(repoEl);
    }
  }

  const deneme2 = repos
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, 5)[2];
  for (let i = 0; i < 4; i++) {
    const repoEl = document.createElement("td");
    if (i === 0) {
      repoEl.innerHTML = `<a class="project-name" href=${deneme2.html_url} target="_blank">${deneme2.name}</a>`;
      reposE3.appendChild(repoEl);
    }
    if (i === 1) {
      const createAt = deneme2.created_at.slice(0, 10).split("-");
      const currentCreatAt =
        createAt[2] + "." + createAt[1] + "." + createAt[0];
      repoEl.innerText = currentCreatAt;
      reposE3.appendChild(repoEl);
    }
    if (i === 2) {
      const createAt = deneme2.pushed_at.slice(0, 10).split("-");
      const currentPushedAt =
        createAt[2] + "." + createAt[1] + "." + createAt[0];
      repoEl.innerText = currentPushedAt;
      reposE3.appendChild(repoEl);
    }
    if (i === 3) {
      repoEl.innerText = deneme2.language;
      reposE3.appendChild(repoEl);
    }
  }

  const deneme3 = repos
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, 5)[3];
  for (let i = 0; i < 4; i++) {
    const repoEl = document.createElement("td");
    if (i === 0) {
      repoEl.innerHTML = `<a class="project-name" href=${deneme3.html_url} target="_blank">${deneme3.name}</a>`;
      reposE4.appendChild(repoEl);
    }
    if (i === 1) {
      const createAt = deneme3.created_at.slice(0, 10).split("-");
      const currentCreatAt =
        createAt[2] + "." + createAt[1] + "." + createAt[0];
      repoEl.innerText = currentCreatAt;
      reposE4.appendChild(repoEl);
    }
    if (i === 2) {
      const createAt = deneme3.pushed_at.slice(0, 10).split("-");
      const currentPushedAt =
        createAt[2] + "." + createAt[1] + "." + createAt[0];
      repoEl.innerText = currentPushedAt;
      reposE4.appendChild(repoEl);
    }
    if (i === 3) {
      repoEl.innerText = deneme3.language;
      reposE4.appendChild(repoEl);
    }
  }

  const deneme4 = repos
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, 5)[4];
  for (let i = 0; i < 4; i++) {
    const repoEl = document.createElement("td");
    if (i === 0) {
      repoEl.innerHTML = `<a class="project-name" href=${deneme4.html_url} target="_blank">${deneme4.name}</a>`;
      reposE5.appendChild(repoEl);
    }
    if (i === 1) {
      const createAt = deneme4.created_at.slice(0, 10).split("-");
      const currentCreatAt =
        createAt[2] + "." + createAt[1] + "." + createAt[0];
      repoEl.innerText = currentCreatAt;
      reposE5.appendChild(repoEl);
    }
    if (i === 2) {
      const createAt = deneme4.pushed_at.slice(0, 10).split("-");
      const currentPushedAt =
        createAt[2] + "." + createAt[1] + "." + createAt[0];
      repoEl.innerText = currentPushedAt;
      reposE5.appendChild(repoEl);
    }
    if (i === 3) {
      repoEl.innerText = deneme4.language;
      reposE5.appendChild(repoEl);
    }
  }
}

// ! Table End ! \\

// * Search butonuna bir kullanıcı adı yazıldıktan sonra enter tuşuna basıldığında getUser çalışır. Daha sonrasında da Search Value değeri silinir.

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
