document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  const contas = JSON.parse(localStorage.getItem("contasEducaWeb") || "[]");

  const conta = contas.find(
    (c) => c.email === email && c.password === password
  );

  if (conta) {
    alert(`Bem-vindo(a), ${conta.primeiroNome}!`);
    localStorage.setItem("utilizadorAtual", JSON.stringify(conta));
    window.location.href = "disciplinas.html";
  } else {
    alert("Email ou palavra-passe incorretos.");
  }
});
