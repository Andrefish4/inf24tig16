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
  });
