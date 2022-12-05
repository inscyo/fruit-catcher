import {
  _load_sprite_image_,
  _sprite_sheet_clipping_,
  _sprite_sheet_image_,
} from "/fruit-catcher/js/_function/function.js";

export const _power_gem_object_ = function (
  _context,
  _file,
  _xCoordinateToPlaceTheClipped,
  _yCoordinateToPlaceTheClipped,
  _applyWidthOfClipped,
  _applyHeightfClipped,
  _canvasHeight
) {
  this._context = _context;
  this._file = _file;
  this._xCoordinateToPlaceTheClipped = _xCoordinateToPlaceTheClipped;
  this._yCoordinateToPlaceTheClipped = _yCoordinateToPlaceTheClipped;
  this._applyWidthOfClipped = _applyWidthOfClipped;
  this._applyHeightfClipped = _applyHeightfClipped;
  this._animationSpeed = 5;
  this._gravity = 0.1;
  this._gravitySpeed = 0;
  this._canvasHeight = _canvasHeight;
  this._gem_draw_ = () => {
    _sprite_sheet_image_(
      this._context,
      this._file,
      this._xCoordinateToPlaceTheClipped,
      this._yCoordinateToPlaceTheClipped,
      this._applyWidthOfClipped,
      this._applyHeightfClipped
    );
  };
  this._gem_animate_ = () => {
    this._yCoordinateToPlaceTheClipped += this._animationSpeed;
    // this._gravitySpeed += this._gravity;
    // this._yCoordinateToPlaceTheClipped +=
    //   this._yCoordinateToPlaceTheClippedSpeed + this._gravitySpeed;
    if (
      this._yCoordinateToPlaceTheClipped >=
      this._canvasHeight + this._applyHeightfClipped
    ) {
      return true;
    }
    return false;
  };
};

export const _power_energy_object_ = function (
  _context,
  _file,
  _xCoordinateToPlaceTheClipped,
  _yCoordinateToPlaceTheClipped,
  _applyWidthOfClipped,
  _applyHeightfClipped,
  _canvasHeight
) {
  this._context = _context;
  this._file = _file;
  this._xCoordinateToPlaceTheClipped = _xCoordinateToPlaceTheClipped;
  this._yCoordinateToPlaceTheClipped = _yCoordinateToPlaceTheClipped;
  this._applyWidthOfClipped = _applyWidthOfClipped;
  this._applyHeightfClipped = _applyHeightfClipped;
  this._canvasHeight = _canvasHeight;
  this._energy_draw_ = () => {
    _sprite_sheet_image_(
      this._context,
      this._file,
      this._xCoordinateToPlaceTheClipped,
      this._yCoordinateToPlaceTheClipped,
      this._applyWidthOfClipped,
      this._applyHeightfClipped
    );
  };
  this._energy_animate_ = (_animationSpeed) => {
    this._yCoordinateToPlaceTheClipped += _animationSpeed;
    if (
      this._yCoordinateToPlaceTheClipped >=
      this._canvasHeight + this._applyHeightfClipped
    ) {
      return true;
    }
    return false;
  };
};

export const _power_slowmo_object_ = function (
  _context,
  _file,
  _xCoordinateToPlaceTheClipped,
  _yCoordinateToPlaceTheClipped,
  _applyWidthOfClipped,
  _applyHeightfClipped,
  _animationSpeed,
  _canvasHeight
) {
  this._context = _context;
  this._file = _file;
  this._xCoordinateToPlaceTheClipped = _xCoordinateToPlaceTheClipped;
  this._yCoordinateToPlaceTheClipped = _yCoordinateToPlaceTheClipped;
  this._applyWidthOfClipped = _applyWidthOfClipped;
  this._applyHeightfClipped = _applyHeightfClipped;
  this._animationSpeed = _animationSpeed;
  this._canvasHeight = _canvasHeight;
  this._slowmo_draw_ = () => {
    _sprite_sheet_image_(
      this._context,
      this._file,
      this._xCoordinateToPlaceTheClipped,
      this._yCoordinateToPlaceTheClipped,
      this._applyWidthOfClipped,
      this._applyHeightfClipped
    );
  };
  this._slowmo_animate_ = () => {
    this._yCoordinateToPlaceTheClipped += this._animationSpeed;
    if (
      this._yCoordinateToPlaceTheClipped >=
      this._canvasHeight + this._applyHeightfClipped
    ) {
      return true;
    }
    return false;
  };
};

export const _power_money_object_ = function (
  _context,
  _file,
  _xCoordinateToPlaceTheClipped,
  _yCoordinateToPlaceTheClipped,
  _applyWidthOfClipped,
  _applyHeightfClipped,
  _animationSpeed,
  _canvasHeight
) {
  this._context = _context;
  this._file = _file;
  this._xCoordinateToPlaceTheClipped = _xCoordinateToPlaceTheClipped;
  this._yCoordinateToPlaceTheClipped = _yCoordinateToPlaceTheClipped;
  this._applyWidthOfClipped = _applyWidthOfClipped;
  this._applyHeightfClipped = _applyHeightfClipped;
  this._animationSpeed = _animationSpeed;
  this._canvasHeight = _canvasHeight;
  this._money_draw_ = () => {
    _sprite_sheet_image_(
      this._context,
      this._file,
      this._xCoordinateToPlaceTheClipped,
      this._yCoordinateToPlaceTheClipped,
      this._applyWidthOfClipped,
      this._applyHeightfClipped
    );
  };
  this._money_animate_ = () => {
    this._yCoordinateToPlaceTheClipped += this._animationSpeed;
    if (
      this._yCoordinateToPlaceTheClipped >=
      this._canvasHeight + this._applyHeightfClipped
    ) {
      return true;
    }
    return false;
  };
};
