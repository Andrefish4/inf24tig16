// Carregar a navbar dinamicamente
fetch('/components/navbar.html')
  .then(response => response.text())
  .then(data => {
    const container = document.getElementById('navbar-container');
    container.innerHTML = data;

    // Depois da navbar estar no DOM, destacar o link ativo
    const pathname = window.location.pathname;

    document.querySelectorAll('.nav-link').forEach(link => {
      const linkHref = link.getAttribute('href');
      if (pathname.endsWith(linkHref)) {
        link.classList.add('active-link');
      }
    });

    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    const userName = localStorage.getItem('userName');
    const userImage = localStorage.getItem('userImage');

    if (userLoggedIn && userName) {
      const actionArea = document.querySelector('.navbar-action');

      if (actionArea) {
        actionArea.innerHTML = `
          <div class="user-info">
            <img src="/assets/${userImage}" alt="${userName}" class="user-avatar">
            <span class="user-name">${userName}</span>
            <button type="button" class="logout-button">Sair</button>
          </div>
        `;

        document.querySelector('.logout-button').addEventListener('click', () => {
          localStorage.clear();
          window.location.href="/pages";
        });
      }
    }

  });
