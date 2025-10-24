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
  const _dots = [[0, 0, 0.1]];

  function Ocarina(w) {
    var i;
    if (!w) w = {};
    if (!w.dots) w.dots = _dots;
    this.dots = [];
    for (i = 0; i < w.dots.length; i++) this.dots.push();
  }

  JZZ.gui.Ocarina = Ocarina;
});
