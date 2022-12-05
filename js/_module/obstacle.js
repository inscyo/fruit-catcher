import {
  _load_sprite_image_,
  _sprite_sheet_clipping_,
  _sprite_sheet_image_,
} from "/fruit-catcher/js/_function/function.js";

export const _bomb_object_ = function (
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
  this._bomb_draw_ = () => {
    _sprite_sheet_image_(
      this._context,
      this._file,
      this._xCoordinateToPlaceTheClipped,
      this._yCoordinateToPlaceTheClipped,
      this._applyWidthOfClipped,
      this._applyHeightfClipped
    );
  };
  this._bomb_animate_ = () => {
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

export const _bug_object_ = function (
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
  this._bug_draw_ = () => {
    _sprite_sheet_image_(
      this._context,
      this._file,
      this._xCoordinateToPlaceTheClipped,
      this._yCoordinateToPlaceTheClipped,
      this._applyWidthOfClipped,
      this._applyHeightfClipped
    );
  };
  this._bug_animate_ = () => {
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
