(function() {
  const gameContainer = document.querySelector(".game");
  const resetBtn = document.querySelector('.game__footer');
  const renderGame = function() {
    gameContainer.innerHTML = '';
    for (let i = 0; i < 9; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("game__blocks");
      blocks.dataset.id = i + 1;
      gameContainer.appendChild(blocks);
    }
  };

  const checkBlocks = function() {
    const winArr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];
    const crossStatusGame = [];
    const zeroStatusGame = [];
    let counter = 0;

    gameContainer.addEventListener("click", function(e) {
      if (e.target.dataset.id) {
        counter++;
        if (counter % 2 == 0) {
          zeroStatusGame.push(+e.target.dataset.id);
          zeroStatusGame.sort();
          e.target.classList.add('zero');
          e.target.removeAttribute("data-id");
        } else {
          crossStatusGame.push(+e.target.dataset.id);
          crossStatusGame.sort();
          e.target.classList.add('cross');
          e.target.removeAttribute("data-id");
        }
      }
      for(let i = 0; i < winArr.length; i++) {
        let checkedCrossArr = crossStatusGame.filter(e => ~winArr[i].indexOf(e));
        let checkedZeroArr = crossStatusGame.filter(e => ~winArr[i].indexOf(e));

        if(JSON.stringify(winArr[i]) === JSON.stringify(checkedCrossArr)){
         alert("WIN CROSS")
        } else if (JSON.stringify(winArr[i]) === JSON.stringify(checkedZeroArr)) {
          alert("WIN ZERO");
        }
      }
    });
  };
  resetBtn.addEventListener('click', renderGame);
  renderGame();
  checkBlocks();
})();
