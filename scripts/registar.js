document.getElementById("registoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const primeiroNome = document.getElementById("primeiroNome").value.trim();
  const ultimoNome = document.getElementById("ultimoNome").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("As palavras-passe não coincidem.");
    return;
  }

  const contas = JSON.parse(localStorage.getItem("contasEducaWeb") || "[]");

  const existe = contas.find((conta) => conta.email === email);
  if (existe) {
    alert("Esta conta já existe.");
    return;
  }

  contas.push({
    primeiroNome,
    ultimoNome,
    email,
    password,
  });

  localStorage.setItem("contasEducaWeb", JSON.stringify(contas));

  alert("Conta criada com sucesso!");
  window.location.href = "index.html";
});
