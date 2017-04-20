(function () {

  'use strict';


  // constants
  var Chicago = {
    name: 'Chicago',
    spriteSheet: 'assets/chicago-extended.png',
    data: 'assets/chicago-extended.xml',
    size: 12
  };
  var LIPSUM = "The quick brown fox jumps over the lazy dog." + "\n" +
    "JUNK MTV QUIZ GRACED BY FOX WHELPS" + "\n" +
    "sex-charged fop blew my junk tv quiz" + "\n" +
    "The time is 16:48 o'clock." + "\n" +
    "http://www.phaser.io" + "\n" +
    ",.!?/:;'\"#_+=()%~*" + "\n" +
    "\n" +
    "Kerning:\n" +
    "F. P. T. F, P, T, L'" + "\n" +
    "Aj Bj Cj Dj Ej Fj Gj Hj Ij Jj Kj Lj Mj Nj Oj Pj Qj Rj Sj Tj Uj Vj Wj Xj Yj Zj" + "\n" +
    "aj bj cj dj ej fj gj hj ij jj kj lj mj nj oj pj qj rj sj tj uj vj wj xj yj zj" + "\n" +
    "\n" +
    "Problematic characters:\n" +
    "- Punctuation: ×÷±–…“”‘’" + "\n" +
    "- Accented A's: àáâäåãāæ ÀÁÂÄÅÃĀÆ" + "\n" +
    "- Accented E's: èéêëėęē ÈÉÊËĖĘĒ" + "\n" +
    "- Accented I's: ìíîï ÌÍÎÏ" + "\n" +
    "- Accented O's: òóôöøõōœ ÒÓÔÖØÕŌŒ" + "\n" +
    "- Accented U's: ùúûüū ÙÚÛÜŪ" + "\n" +
    "- Accented Y's and C's: ÿŸ çÇ";


  // vars
  var _game, _textField;


  // auto initialization
  init();


  // methods definitions
  function init() {
    // create game object
    window.game = _game = new Phaser.Game(
      480, 960,
      Phaser.CANVAS,
      'gameCanvas',
      {
        preload: preload,
        create: create,
        update: update
      },
      false,
      false
    );
  }

  function preload() {
    _game.load.bitmapFont(
      Chicago.name,
      Chicago.spriteSheet,
      Chicago.data
    );
  }

  function create() {
    // set background color
    _game.stage.backgroundColor = '#141414';

    // scale the game
    var scale = 2;
    _game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    _game.scale.setUserScale(scale, scale);

    // enable crisp rendering
    _game.renderer.renderSession.roundPixels = true;
    Phaser.Canvas.setImageRenderingCrisp(_game.canvas);

    // add textfield
    _textField = _game.add.bitmapText(
      16, 16, // x, y
      Chicago.name,
      LIPSUM,
      Chicago.size
    );
    
    var chicagoFont = _game.cache.getBitmapFont('Chicago');
    var chars = chicagoFont.font.chars;
    var output = [];
    var table = [];
    
    for (var charId in chars) {
      // console.log(charId, String.fromCharCode(charId));
      table[charId] = String.fromCharCode(charId);
      output.push(charId + '=' + String.fromCharCode(charId));
    }
    
    console.log('font.chars', chars);
    console.table(table); // truncated @ 99
    console.log('table', table);
    
    var bt = _game.add.bitmapText(16, 320, Chicago.name, output.join(' '), Chicago.size);
    bt.maxWidth = 400;
    
    var txt = _game.add.text(16, 520, output.join(' '), {
      fill: 'white',
      font: '12px monospace',
      wordWrap: true,
      wordWrapWidth: 400
    });
    txt.smoothed = false;
  }

  function update() {}

})();
