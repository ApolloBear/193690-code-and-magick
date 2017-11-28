window.renderStatistics = function(ctx, names, times) {
  var max = -1;
  var maxIndex = -1;
  var histogramHeight = 150; // px;
  var step = histogramHeight / (max - 0); // px;
  var barWidth = 40; // px;
  var indent = 50; // px;
  var initialX = 120; // px;
  var initialY = 250; // px;
  var initialTimes = 80; //px;
  var lineHeight = 15; // px;
  //Box
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = "rgba(255, 255, 255, 1)";
  //Shadow
  ctx.fillRect(90, 0, 420, 270);
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  //Text
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", 140, 40);
  ctx.fillText("Список результатов:", 140, 60);
  //
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  for (var i = 0; i < times.length; i++) {
    Math.round(times[i]);
    ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step); //fillRect(x, y, width, height)
    if (names === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0,' + Math.random(0, 1);
    }
    ctx.fillText(names[i], initialX + indent * i, initialY + lineHeight); //illText(text, x, y)
    ctx.fillText(times[i], initialX + indent * i, initialTimes); //illText(text, x, y)
  }
};

// ctx.fillText('Худшее время: ' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], 120, 60);

// function getRandoomNumber(0, 1) {
//   return MathRandom.....; // Разобраться
// };
