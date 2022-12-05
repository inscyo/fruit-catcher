import {
  _load_sprite_image_,
  _sprite_sheet_clipping_,
  _sprite_sheet_image_,
} from "./function.js";

/* Instances */
export const _fruit_object_ = function (
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
  this._yCoordinateToPlaceTheClippedSpeed = 0;
  this._gravity = 0.1;
  this._gravitySpeed = 0;
  this._fruit_draw_ = () => {
    _sprite_sheet_image_(
      this._context,
      this._file,
      this._xCoordinateToPlaceTheClipped,
      this._yCoordinateToPlaceTheClipped,
      this._applyWidthOfClipped,
      this._applyHeightfClipped
    );
  };
  this._fruit_animate_ = () => {
    this._yCoordinateToPlaceTheClipped += this._animationSpeed;
    this._gravitySpeed += this._gravity;
    this._yCoordinateToPlaceTheClipped +=
      this._yCoordinateToPlaceTheClippedSpeed + this._gravitySpeed;
    if (
      this._yCoordinateToPlaceTheClipped >=
      this._canvasHeight + this._applyHeightfClipped
    ) {
      return true;
    }
    return false;
  };
  this._fruit_splash = (_img, _width, _height) => {
    _sprite_sheet_image_(
      this._context,
      _img,
      this._xCoordinateToPlaceTheClipped - 10,
      this._yCoordinateToPlaceTheClipped,
      _width,
      _height
    );
  };
  this._fruit_slowmo_ = () => {
    this._gravity = 0.009;
  };
};

export const _fruit_splash_object_ = function (
  _context,
  _file,
  _applyWidthOfClipped,
  _applyHeightfClipped
) {
  this._context = _context;
  this._file = _file;
  this._applyWidthOfClipped = _applyWidthOfClipped;
  this._applyHeightfClipped = _applyHeightfClipped;
  this._fruit_splash_draw_ = (
    _xCoordinateToPlaceTheClipped,
    _yCoordinateToPlaceTheClipped
  ) => {
    _sprite_sheet_image_(
      this._context,
      this._file,
      _xCoordinateToPlaceTheClipped - this._applyWidthOfClipped,
      _yCoordinateToPlaceTheClipped + this._applyHeightfClipped,
      this._applyWidthOfClipped,
      this._applyHeightfClipped
    );
  };
};
