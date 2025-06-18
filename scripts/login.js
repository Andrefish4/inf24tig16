document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log('Formulário submetido - a prevenir envio');

    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value;

    try {
      const response = await fetch('../data/utilizadores.xml');
      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

      const utilizadores = xmlDoc.getElementsByTagName('utilizador');
      let loginValido = false;

      for (let i = 0; i < utilizadores.length; i++) {
        const email = utilizadores[i].getElementsByTagName('email')[0].textContent;
        const password = utilizadores[i].getElementsByTagName('password')[0].textContent;

        if (email === emailInput && password === passwordInput) {
          loginValido = true;
          break;
        }
      }

      if (loginValido) {
        window.location.href = 'disciplinas.html';
      } else {
        alert('Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao carregar XML:', error);
      alert('Erro ao tentar iniciar sessão.');
    }
  });
});
