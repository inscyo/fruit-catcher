// let _score_bug_object_instance_;

// await _score_bug_while_playing_object.then((_spritesheet) => {
//   let _score_bug_width_ = _spritesheet["width"] / 1.5;
//   let _score_bug_height_ = _spritesheet["height"] / 1.5;
//   _score_bug_object_instance_ = new _score_bug_while_playing_(
//     _context_,
//     _spritesheet,
//     2,
//     _score_bug_width_,
//     _score_bug_height_
//   );
// });
let _player_multiple_basket_object_instance_ = [];
await _player_basket_object.then(function (_spritesheet) {
  let _player_multiple_basket_no_itteration = 0;
  let _player_multiple_basket_width_ = _spritesheet["width"] / 2;
  let _player_multiple_basket_height_ = _spritesheet["height"] / 2;
  for (
    let _player_multiple_basket_no_ = 5;
    _player_multiple_basket_no_itteration < _player_multiple_basket_no_;
    _player_multiple_basket_no_itteration++
  ) {
    _player_multiple_basket_object_instance_.push({
      _player_multiple_basket_id_: Date.now(),
      _player_multiple_basket_: {
        _object_: new _player_multiple_basket_object_(
          _context_,
          _spritesheet,
          Math.floor(Math.random() * _canvas_width_),
          _canvas_height_ - _player_multiple_basket_height_ - 10,
          _player_multiple_basket_width_,
          _player_multiple_basket_height_,
          [-15, 15][(Math.random() * 2) | 0],
          _canvas_width_,
          _canvas_height_
        ),
      },
    });
  }
});
try {
  if (_player_gain_multiple_basket_) {
    for (let j = 0; j < _player_multiple_basket_object_instance_.length; j++) {
      if (
        _player_multiple_basket_object_instance_[
          j
        ]._player_multiple_basket_._object_._player_multiple_basket_hits_gem_(
          _instance[_iterration]._gem_._object_
        )
      ) {
        _gem_object_instance_.splice(_iterration, 1);
        _score_gem_total_ += 1;
        _energy_limit_ -= 1;
        _gem_gain_audio_.play();
        _gem_gain_audio_.currentTime = 0;
      }
    }
  }
} catch (e) {}

await _if_instance_has_length(
  _player_multiple_basket_object_instance_,
  function (_instance, _iterration) {
    _instance[
      _iterration
    ]._player_multiple_basket_._object_._player_multiple_basket_draw_();
    _instance[
      _iterration
    ]._player_multiple_basket_._object_._player_multiple_move_animate_();
  }
);

export const _player_multiple_basket_object_ = function (
  _context,
  _file,
  _xCoordinateToPlaceTheClipped,
  _yCoordinateToPlaceTheClipped,
  _applyWidthOfClipped,
  _applyHeightfClipped,
  _animationSpeed,
  _canvasWidth,
  _canvasHeight
) {
  this._context = _context;
  this._file = _file;
  this._xCoordinateToPlaceTheClipped = _xCoordinateToPlaceTheClipped;
  this._yCoordinateToPlaceTheClipped = _yCoordinateToPlaceTheClipped;
  this._applyWidthOfClipped = _applyWidthOfClipped;
  this._applyHeightfClipped = _applyHeightfClipped;
  this._animationSpeed = _animationSpeed;
  this._canvasWidth = _canvasWidth;
  this._canvasHeight = _canvasHeight;
  this._player_multiple_basket_draw_ = () => {
    _sprite_sheet_image_(
      this._context,
      this._file,
      this._xCoordinateToPlaceTheClipped,
      this._yCoordinateToPlaceTheClipped,
      this._applyWidthOfClipped,
      this._applyHeightfClipped
    );
  };

  this._player_multiple_move_animate_ = (
    _key_clicked_left,
    _key_clicked_right
  ) => {
    this._xCoordinateToPlaceTheClipped += this._animationSpeed;
    if (this._xCoordinateToPlaceTheClipped <= 0) {
      this._animationSpeed = Math.floor(Math.random() * (15 - 3 + 3) + 2);
    }
    if (
      this._xCoordinateToPlaceTheClipped + this._applyWidthOfClipped >=
      this._canvasWidth
    ) {
      this._animationSpeed = -Math.floor(Math.random() * (15 - 3 + 3) + 2);
    }

    // if (_key_clicked_left) {
    //   this._xCoordinateToPlaceTheClipped -= this._animationSpeed;
    //   if (this._xCoordinateToPlaceTheClipped + this._applyWidthOfClipped <= 0) {
    //     this._xCoordinateToPlaceTheClipped = this._canvasWidth;
    //   }
    // }
    // if (_key_clicked_right) {
    //   this._xCoordinateToPlaceTheClipped += this._animationSpeed;
    //   if (
    //     this._xCoordinateToPlaceTheClipped + this._applyWidthOfClipped >=
    //     this._canvasWidth + this._applyWidthOfClipped
    //   ) {
    //     this._xCoordinateToPlaceTheClipped = -this._applyWidthOfClipped;
    //   }
    // }
  };

  this._player_multiple_basket_hits_fruit_ = (_fruit_instance) => {
    let _fruit_instance_x_ = _fruit_instance._xCoordinateToPlaceTheClipped;
    let _fruit_instance_y_ = _fruit_instance._yCoordinateToPlaceTheClipped;
    let _fruit_instance_width_ = _fruit_instance._file.width;
    let _fruit_instance_height_ = _fruit_instance._file.height;

    let _if_y_of_fruit_hit_player_ =
      this._yCoordinateToPlaceTheClipped <
      _fruit_instance_y_ + _fruit_instance_height_ / 4.5;
    let _if_right_of_fruit_ =
      _fruit_instance_x_ <
      this._xCoordinateToPlaceTheClipped + this._applyWidthOfClipped;
    let _if_left_of_fruit_ =
      _fruit_instance_x_ + _fruit_instance_width_ / 4.5 >
      this._xCoordinateToPlaceTheClipped;
    let _if_y_slip_canvas = _fruit_instance_y_ <= this._canvasHeight - 10;
    return _if_right_of_fruit_ &&
      _if_left_of_fruit_ &&
      _if_y_of_fruit_hit_player_ &&
      _if_y_slip_canvas
      ? { _hit_: true }
      : false;
  };

  this._player_multiple_basket_hits_energy_ = (_energy_instance) => {
    let _energy_instance_x_ = _energy_instance._xCoordinateToPlaceTheClipped;
    let _energy_instance_y_ = _energy_instance._yCoordinateToPlaceTheClipped;
    let _energy_instance_width_ = _energy_instance._file.width;
    let _energy_instance_height_ = _energy_instance._file.height;
    let _if_y_of_energy_hit_player_ =
      this._yCoordinateToPlaceTheClipped <
      _energy_instance_y_ + _energy_instance_height_ / 1.2;
    let _if_right_of_energy_ =
      _energy_instance_x_ <
      this._xCoordinateToPlaceTheClipped + this._applyWidthOfClipped;
    let _if_left_of_energy_ =
      _energy_instance_x_ + _energy_instance_width_ / 1.2 >
      this._xCoordinateToPlaceTheClipped;
    let _if_y_slip_canvas = _energy_instance_y_ <= this._canvasHeight - 10;
    return _if_right_of_energy_ &&
      _if_left_of_energy_ &&
      _if_y_of_energy_hit_player_ &&
      _if_y_slip_canvas
      ? { _hit_: true }
      : false;
  };

  this._player_multiple_basket_hits_gem_ = (_gem_instance) => {
    let _gem_instance_x_ = _gem_instance._xCoordinateToPlaceTheClipped;
    let _gem_instance_y_ = _gem_instance._yCoordinateToPlaceTheClipped;
    let _gem_instance_width_ = _gem_instance._file.width;
    let _gem_instance_height_ = _gem_instance._file.height;
    let _if_y_of_gem_hit_player_ =
      this._yCoordinateToPlaceTheClipped <
      _gem_instance_y_ + _gem_instance_height_ / 2.2;
    let _if_right_of_gem_ =
      _gem_instance_x_ <
      this._xCoordinateToPlaceTheClipped + this._applyWidthOfClipped;
    let _if_left_of_gem_ =
      _gem_instance_x_ + _gem_instance_width_ / 1.8 >
      this._xCoordinateToPlaceTheClipped;
    let _if_y_slip_canvas = _gem_instance_y_ <= this._canvasHeight - 10;
    return _if_right_of_gem_ &&
      _if_left_of_gem_ &&
      _if_y_of_gem_hit_player_ &&
      _if_y_slip_canvas
      ? { _hit_: true }
      : false;
  };

  this._player_multiple_basket_hits_slowmo_ = (_slowmo_instance) => {
    let _slowmo_instance_x_ = _slowmo_instance._xCoordinateToPlaceTheClipped;
    let _slowmo_instance_y_ = _slowmo_instance._yCoordinateToPlaceTheClipped;
    let _slowmo_instance_width_ = _slowmo_instance._file.width;
    let _slowmo_instance_height_ = _slowmo_instance._file.height;
    let _if_y_of_slowmo_hit_player_ =
      this._yCoordinateToPlaceTheClipped <
      _slowmo_instance_y_ + _slowmo_instance_height_ / 2.85;
    let _if_right_of_slowmo_ =
      _slowmo_instance_x_ <
      this._xCoordinateToPlaceTheClipped + this._applyWidthOfClipped;
    let _if_left_of_slowmo_ =
      _slowmo_instance_x_ + _slowmo_instance_width_ / 3.2 >
      this._xCoordinateToPlaceTheClipped;
    let _if_y_slip_canvas = _slowmo_instance_y_ <= this._canvasHeight - 10;
    return _if_right_of_slowmo_ &&
      _if_left_of_slowmo_ &&
      _if_y_of_slowmo_hit_player_ &&
      _if_y_slip_canvas
      ? { _hit_: true }
      : false;
  };
};

// _score_bug_object_instance_._score_bug_draw_(_canvas_width_ - 190);
// _score_bug_object_instance_._score_bug_text_draw_(
//   _score_bug_total_,
//   "Skranji-Bold",
//   "25.5px",
//   "white",
//   _canvas_width_ - 135,
//   45
// );
_score_basket_object_instance_._score_basket_draw_(17);
_score_basket_object_instance_._score_basket_text_draw_(
  _score_fruit_total,
  "Skranji-Bold",
  "25.5px",
  "white",
  72,
  108
);
