function dice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage = 'dice' + randomNumber1 + '.png';

  var randomImageSource = 'images/' + randomDiceImage;

  var image1 = document.querySelector('.img0');

  image1.setAttribute('src', randomImageSource);

  // second box

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomdiceimage2 = 'images/dice' + randomNumber2 + '.png';

  document.querySelector('.img1').setAttribute('src', randomdiceimage2);

  // logic

  if (randomImageSource > randomdiceimage2) {
    document.querySelector('h1').innerHTML = 'player 1 win';
  } else if (randomdiceimage2 > randomImageSource) {
    document.querySelector('h1').innerHTML = 'player 2 win';
  } else {
    document.querySelector('h1').innerHTML = 'draw';
  }
}
