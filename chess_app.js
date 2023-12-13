const chessBoard = document.querySelector("#chessboard")

const playerDisplay = document.querySelector("#player")

const infoDisplay = document.querySelector("#info-display")

import chessPieces from './chess_pieces.js';

function renderPieces() {
    chessPieces.forEach(piece => {
        const square = document.getElementById(piece.position);
        const img = document.createElement('img');
        img.src = `./assets/${piece.image}_${piece.type.toLowerCase()}.svg`
        img.classList.add('chess-piece')
        square.appendChild(img)
    })

}



document.addEventListener('DOMcontentloaded', renderPieces)