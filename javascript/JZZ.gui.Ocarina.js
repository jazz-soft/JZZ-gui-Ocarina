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

  /* istanbul ignore next */
  function nop() {}
  var _noBtn = { on: nop, off: nop, disable: nop, title: nop, div: {} };

  function Ocarina() {
  }

  JZZ.gui.Ocarina = Ocarina;
});
