(function(global, factory) {
  /* istanbul ignore next */
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    factory.Ocarina = factory;
    module.exports = factory;
  }
  else if (typeof define === 'function' && define.amd) {
    define('JZZ.gui.Ocarina', ['JZZ'], factory);
  }
  else {
    factory(JZZ);
  }
})(this, function(JZZ) {

  if (!JZZ.gui) JZZ.gui = {};
  if (JZZ.gui.Ocarina) return;

  function Dot(x, y, r, t) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  Dot.prototype.dump = function() {
    return '<circle cx="' + this.x + '" cy="' + this.y + '" r="' + this.r + '"/>';
  };
  const _dots = [[0, 0, 0.1], [0.5, 0.5, 0.1], [1, 1, 0.1]];

  function Ocarina(w) {
    var i, d;
    if (!w) w = {};
    if (!w.dots) w.dots = _dots;
    this.dots = [];
    for (i = 0; i < w.dots.length; i++) {
      d = w.dots[i];
      this.dots.push(new Dot(d[0], d[1], d[2]));
    }
  }
  Ocarina.prototype.dump = function(w, h) {
    var svg = [];
    for (i = 0; i < this.dots.length; i++) svg.push(this.dots[i].dump());
    return svg.join('\n');
  };

  JZZ.gui.Ocarina = Ocarina;
});
