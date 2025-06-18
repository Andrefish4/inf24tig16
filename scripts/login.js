document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log('Formulário submetido - a prevenir envio');

    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value;

    try {
      const response = await fetch('/data/utilizadores.xml');
      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

      const utilizadores = xmlDoc.getElementsByTagName('utilizador');
      let loginValido = false;

      for (let i = 0; i < utilizadores.length; i++) {
        const email = utilizadores[i].getElementsByTagName('email')[0].textContent;
        const password = utilizadores[i].getElementsByTagName('password')[0].textContent;

        if (email === emailInput && password === passwordInput) {
          const primeiroNome = utilizadores[i].getElementsByTagName('primeiroNome')[0].textContent;
          const ultimoNome = utilizadores[i].getElementsByTagName('ultimoNome')[0].textContent;
          const imagem = utilizadores[i].getElementsByTagName('imagem')[0].textContent;
      
          // Guardar dados no localStorage
          localStorage.setItem('userLoggedIn', 'true');
          localStorage.setItem('userEmail', email);
          localStorage.setItem('userName', primeiroNome + " " + ultimoNome);
          localStorage.setItem('userImage', imagem);
      
          window.location.href = 'disciplinas.html';
          break;
        } else {
          alert('Credenciais inválidas. Tente novamente.');
        }
      }

    } catch (error) {
      console.error('Erro ao carregar XML:', error);
      alert('Erro ao tentar iniciar sessão.');
    }
  });
});
