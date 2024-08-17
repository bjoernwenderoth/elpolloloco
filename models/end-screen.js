

function checkEndScreen() {

    setInterval(() => {
      
        if (world.gameEnd && world.gameLost) {
            document.getElementById('gameOver').classList.remove('d-none');
        }
        if (world.gameEnd && !world.gameLost) {
            document.getElementById('youWin').classList.remove('d-none');
            console.log('win');

        }
    }, 100);
}