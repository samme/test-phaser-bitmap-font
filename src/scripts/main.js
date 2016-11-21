(function () {

  'use strict';

  // fonts
  var LIPSUM = "Lorem Ipsum is simply dummy text of the printing and\n" +
    "typesetting industry. Lorem Ipsum has been the \n" +
    "industry's standard dummy text ever since the 1500s,\n" +
    "when an unknown printer took a galley of type and\n" +
    "scrambled it to make a type specimen book.";

  var Desyrel = {
    name: 'desyrel',
    spriteSheet: 'assets/desyrel.png',
    data: 'assets/desyrel.xml',
    size: 64
  };
  var Desdemona = {
    name: 'Desdemona Pixels',
    spriteSheet: 'assets/desdemona.png',
    data: 'assets/desdemona.xml',
    size: 8
  };

  // vars
  var _game, _textField, _currentFont;

  // auto initialization
  init();

  // methods definitions
  function init() {
    // create game object
    _game = new Phaser.Game(
      240, 160,
      Phaser.CANVAS,
      'gameCanvas',
      {
        preload: preload,
        create: create,
        update: update
      }
    );

    // set font
    _currentFont = Desdemona;
  }

  function preload() {
    _game.load.bitmapFont(
      _currentFont.name,
      _currentFont.spriteSheet,
      _currentFont.data
    );
  }

  function create() {
    // set background color
    _game.stage.backgroundColor = '#0072bc';

    // scale the game
    var scale = 3;
    _game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    _game.scale.setUserScale(scale, scale);

    // enable crisp rendering
    _game.renderer.renderSession.roundPixels = true;
    Phaser.Canvas.setImageRenderingCrisp(_game.canvas);

    // add textfield
    _textField = _game.add.bitmapText(4, 48, _currentFont.name, LIPSUM, _currentFont.size);
  }

  function update() {}

})();
