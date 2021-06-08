const jogador1 = 'X';
const jogador2 = 'O';
let jogadorDaVez = jogador1;
let fimDeJogo = false;
let button = document.querySelector('.jogar-novamente');
iniciaJogo();

function iniciaJogo() {
  const espacos = document.querySelectorAll('.squares');

  for (let espaco of espacos) {
    espaco.addEventListener('click', function () {
      if (fimDeJogo) {
        return;
      }

      if (this.getElementsByTagName('div').length == 0) {
        if (jogadorDaVez == jogador1) {
          this.innerHTML = '<div class="x"></div>';
          this.setAttribute('jogada', jogador1);
          jogadorDaVez = jogador2;
        } else {
          this.innerHTML = '<div class="o"></div>';
          this.setAttribute('jogada', jogador2);
          jogadorDaVez = jogador1;
        }
        verificaVencedor();
      }
    });
  }
}

function verificaVencedor() {
  const topleft = document.querySelector('.topleft').getAttribute('jogada');
  const top = document.querySelector('.top').getAttribute('jogada');
  const topright = document.querySelector('.topright').getAttribute('jogada');

  const left = document.querySelector('.left').getAttribute('jogada');
  const mid = document.querySelector('.mid').getAttribute('jogada');
  const right = document.querySelector('.right').getAttribute('jogada');

  const bottomleft = document.querySelector('.bottomleft').getAttribute('jogada');
  const bottom = document.querySelector('.bottom').getAttribute('jogada');
  const bottomright = document.querySelector('.bottomright').getAttribute('jogada');
  let vencedor = '';

  if (
    ((topleft == left && topleft == bottomleft) ||
      (topleft == top && topleft == topright) ||
      (topleft == mid && topleft == bottomright)) &&
    topleft != ''
  ) {
    vencedor = 'O vencedor foi o ' + topleft;
  } else if (
    ((mid == left && mid == right) ||
      (mid == top && mid == bottom) ||
      (mid == topright && mid == bottomleft)) &&
    mid != ''
  ) {
    vencedor = 'O vencedor foi o ' + mid;
  } else if (
    ((bottomright == topright && bottomright == right) ||
      (bottomright == bottomleft && bottomright == bottom)) &&
    bottomright != ''
  ) {
    vencedor = 'O vencedor foi ' + bottomright;
  } else if (vencedor != topleft && vencedor != mid && vencedor != bottomright) {
    vencedor = 'Não houve vencedores';
  }

  if (vencedor != '') {
    let container = document.querySelector('.info-result');
    fimDeJogo = true;
    container.innerHTML = vencedor;
  }
}
