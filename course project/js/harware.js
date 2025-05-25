document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.hardware-content').forEach(content => content.classList.remove('active'));
  
      button.classList.add('active');
      document.getElementById(button.dataset.target).classList.add('active');
    });
  });