window.renderStatistics = function (ctx, names, times) {
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = "rgba(255, 255, 255, 1)";

  ctx.fillRect(90, 0, 420, 270);
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";

  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", 140, 40);
  ctx.fillText("Список результатов:", 140, 60);
  names = ['Вы'];
  times = [];

  var max = -1;
  var maxIndent = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  for (var i = 0; i < times.length; i++) {
    ctx.fillRect(120 + 50 * i, 250, 40, -times[i] * step);
    ctx.fillText(names[i], 120 + 5 + 50 * i, 270);
    ctx.fillText(times[i], 120 + 50 * i, 90);
  }
};
