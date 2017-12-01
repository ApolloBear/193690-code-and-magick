window.renderStatistics = function (ctx, names, times) {
  var max = -1;
  var histogramHeight = 150;
  var barWidth = 40;
  var indent = 50;
  var initialX = 120;
  var initialY = 250;
  var initialTimes = 80;
  var lineHeight = 15;
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(90, 0, 420, 270);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 140, 40);
  ctx.fillText('Список результатов:', 140, 60);
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var step = histogramHeight / (max - 0);

  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var randomNumber = getRandomNumber(0, 1);
      ctx.fillStyle = 'rgba(17, 30, 209, ' + randomNumber + ')';
    }
    ctx.fillRect(initialX + indent * i, initialY, barWidth, -times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + indent * i, initialY + lineHeight);
    ctx.fillText(Math.round(times[i]), initialX + indent * i, initialTimes);
  }

  function getRandomNumber() {
    return Math.random();
  }
};
