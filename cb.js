function gameover() {
    context.clearRect(0, 0, largeurCanvas, hauteurCanvas);
    context.font = "50px Calibri, Geneva, Arial"
    context.fillStyle = "black";
    context.fillText("Game Over", 50, 250);
    context.font = "15px Arial";
    context.fillText("Appuyez sur le bouton pour rejouer", 50, 300);
    playerDefaite.play();
    boutonOptions.removeAttribute("disabled");
    debutJeu.removeAttribute("disabled");
}