fetch('/components/footer.html')
  .then(response => response.text())
  .then(data => {
    const container = document.getElementById('footer-container');
    container.innerHTML = data;
  });