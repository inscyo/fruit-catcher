import {
  _load_sprite_image_,
  _sprite_sheet_clipping_,
  _sprite_sheet_image_,
  _if_two_object_collides_,
} from "./function.js";

export const _player_basket_object_ = function (
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
  this._animationSpeed = 0;
  this._canvasWidth = _canvasWidth;
  this._canvasHeight = _canvasHeight;
  this._player_basket_draw_ = () => {
    _sprite_sheet_image_(
      this._context,
      this._file,
      this._xCoordinateToPlaceTheClipped,
      this._yCoordinateToPlaceTheClipped,
      this._applyWidthOfClipped,
      this._applyHeightfClipped
    );
  };

  this._player_move_animate_ = (
    _key_clicked_left,
    _key_clicked_right,
    _animation_speed
  ) => {
    if (_key_clicked_left) {
      this._xCoordinateToPlaceTheClipped -= _animation_speed;
      if (this._xCoordinateToPlaceTheClipped + this._applyWidthOfClipped <= 0) {
        this._xCoordinateToPlaceTheClipped = this._canvasWidth;
      }
    }
    if (_key_clicked_right) {
      this._xCoordinateToPlaceTheClipped += _animation_speed;
      if (
        this._xCoordinateToPlaceTheClipped + this._applyWidthOfClipped >=
        this._canvasWidth + this._applyWidthOfClipped
      ) {
        this._xCoordinateToPlaceTheClipped = -this._applyWidthOfClipped;
      }
    }
  };

  this._player_basket_hits_fruit_ = (_fruit_instance) => {
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

  this._player_basket_hits_energy_ = (_energy_instance) => {
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

  this._player_basket_hits_gem_ = (_gem_instance) => {
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

  this._player_basket_hits_bug_ = (_bug_instance) => {
    let _bug_instance_x_ = _bug_instance._xCoordinateToPlaceTheClipped;
    let _bug_instance_y_ = _bug_instance._yCoordinateToPlaceTheClipped;
    let _bug_instance_width_ = _bug_instance._file.width;
    let _bug_instance_height_ = _bug_instance._file.height;
    let _if_y_of_bug_hit_player_ =
      this._yCoordinateToPlaceTheClipped <
      _bug_instance_y_ + _bug_instance_height_ / 1.65;
    let _if_right_of_bug_ =
      _bug_instance_x_ <
      this._xCoordinateToPlaceTheClipped + this._applyWidthOfClipped;
    let _if_left_of_bug_ =
      _bug_instance_x_ + _bug_instance_width_ / 1.8 >
      this._xCoordinateToPlaceTheClipped;
    let _if_y_slip_canvas = _bug_instance_y_ <= this._canvasHeight - 10;
    return _if_right_of_bug_ &&
      _if_left_of_bug_ &&
      _if_y_of_bug_hit_player_ &&
      _if_y_slip_canvas
      ? { _hit_: true }
      : false;
  };

  this._player_basket_hits_slowmo_ = (_slowmo_instance) => {
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

  this._player_basket_hits_money_ = (_money_instance) => {
    let _money_instance_x_ = _money_instance._xCoordinateToPlaceTheClipped;
    let _money_instance_y_ = _money_instance._yCoordinateToPlaceTheClipped;
    let _money_instance_width_ = _money_instance._file.width;
    let _money_instance_height_ = _money_instance._file.height;
    let _if_y_of_money_hit_player_ =
      this._yCoordinateToPlaceTheClipped <
      _money_instance_y_ + _money_instance_height_ / 2.85;
    let _if_right_of_money_ =
      _money_instance_x_ <
      this._xCoordinateToPlaceTheClipped + this._applyWidthOfClipped;
    let _if_left_of_money_ =
      _money_instance_x_ + _money_instance_width_ / 3.2 >
      this._xCoordinateToPlaceTheClipped;
    let _if_y_slip_canvas = _money_instance_y_ <= this._canvasHeight - 10;
    return _if_right_of_money_ &&
      _if_left_of_money_ &&
      _if_y_of_money_hit_player_ &&
      _if_y_slip_canvas
      ? { _hit_: true }
      : false;
  };
};
