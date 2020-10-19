let showPass = false;

function toggleViewPass() {
  showPass = !showPass;
  const input = document.getElementById('pass');
  input.type = showPass ? 'text' : 'password';
  toggleIcon(showPass);
}

function toggleIcon(showPass) {
  document.querySelectorAll('.btn-icon').forEach(node => {
    node.classList.remove('hidden')
  });
  document.getElementById(showPass ? 'open-eye' : 'close-eye')
    .classList.add('hidden');
}