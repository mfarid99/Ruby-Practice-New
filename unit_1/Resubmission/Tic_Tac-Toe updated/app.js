const players = {
    "1": "X",
    "-1": "O",
  };
  let turn;
  let $playerTurn= $(".playerTurn");
  
  const create = () => {
    $("body").append($("<div>").attr("class", "container"));
    $bigBox = $(".container");
    turn = 1; 
    for (let i = 0; i < 9; i++) {
      let $square = $("<div>");
      $square.addClass("square").attr("id", `square${i}`);
      $bigBox.append($square);
    }
    
    $bigBox = [null, null, null, null, null, null, null, null, null];
  };
  const screenClick = (evt) => {
    
    let $playerSelect = $(evt.currentTarget).index();
   
    if ($bigBox[$playerSelect]) return;
    $(evt.currentTarget).text(players[turn]);
    $bigBox[$playerSelect] = turn;
    turn *= -1;
    
  };
  
  create();
  $(".square").on("click", screenClick);