//
// A simple omgcanvas example, drawing a red circle on a gray background.
//

var plask = require('plask');
var omgcanvas = require('./omgcanvas');

plask.simpleWindow({
  init: function() {
    var canvas = this.canvas, paint = this.paint;

    this.ctx = new omgcanvas.CanvasContext(canvas);
  },

  draw: function() {
    var canvas = this.canvas, paint = this.paint, ctx = this.ctx;

    // Draw the light gray background.
    ctx.fillStyle = 'rgb(230, 230, 230)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the circle.
    ctx.fillStyle = 'rgb(80, 0, 0)';
    ctx.beginPath();
    ctx.arc(200, 150, 100, 0, Math.PI*2, false);
    ctx.fill();
  }
});
