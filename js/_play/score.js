import {
  _load_sprite_image_,
  _sprite_sheet_clipping_,
  _sprite_sheet_image_,
} from "/fruit-catcher/js/_function/function.js";

export const _score_gem_while_playing_ = function (
  _context,
  _file,
  _xCoordinateToPlaceTheClipped,
  _yCoordinateToPlaceTheClipped,
  _applyWidthOfClipped,
  _applyHeightfClipped
) {
  this._context = _context;
  this._file = _file;
  this._xCoordinateToPlaceTheClipped = _xCoordinateToPlaceTheClipped;
  this._yCoordinateToPlaceTheClipped = _yCoordinateToPlaceTheClipped;
  this._applyWidthOfClipped = _applyWidthOfClipped;
  this._applyHeightfClipped = _applyHeightfClipped;
  this._score_gem_draw_ = () => {
    _sprite_sheet_image_(
      this._context,
      this._file,
      this._xCoordinateToPlaceTheClipped,
      this._yCoordinateToPlaceTheClipped,
      this._applyWidthOfClipped,
      this._applyHeightfClipped
    );
  };
  this._score_gem_text_draw_ = (
    _text,
    _font,
    _size,
    _textColor,
    _xCoordinateToPlaceTheText,
    _yCoordinateToPlaceTheText
  ) => {
    this._context.font = `${_size} ${_font}`;
    this._context.fillStyle = _textColor;

    this._context.fillText(
      _text,
      _xCoordinateToPlaceTheText,
      _yCoordinateToPlaceTheText
    );
    return this._context.measureText(_text).width;
  };
};

export const _score_energy_while_playing_ = function (
  _context,
  _file,
  _yCoordinateToPlaceTheClipped,
  _applyWidthOfClipped,
  _applyHeightfClipped
) {
  this._context = _context;
  this._file = _file;
  this._yCoordinateToPlaceTheClipped = _yCoordinateToPlaceTheClipped;
  this._applyWidthOfClipped = _applyWidthOfClipped;
  this._applyHeightfClipped = _applyHeightfClipped;
  this._score_energy_draw_ = (_xCoordinateToPlaceTheClipped) => {
    _sprite_sheet_image_(
      this._context,
      this._file,
      _xCoordinateToPlaceTheClipped,
      this._yCoordinateToPlaceTheClipped,
      this._applyWidthOfClipped,
      this._applyHeightfClipped
    );
  };
  this._score_energy_text_draw_ = (
    _text,
    _font,
    _size,
    _textColor,
    _xCoordinateToPlaceTheText,
    _yCoordinateToPlaceTheText
  ) => {
    this._context.font = `${_size} ${_font}`;
    this._context.fillStyle = _textColor;
    this._context.fillText(
      _text,
      _xCoordinateToPlaceTheText,
      _yCoordinateToPlaceTheText
    );
  };
};

export const _score_bug_while_playing_ = function (
  _context,
  _file,
  _yCoordinateToPlaceTheClipped,
  _applyWidthOfClipped,
  _applyHeightfClipped
) {
  this._context = _context;
  this._file = _file;
  this._yCoordinateToPlaceTheClipped = _yCoordinateToPlaceTheClipped;
  this._applyWidthOfClipped = _applyWidthOfClipped;
  this._applyHeightfClipped = _applyHeightfClipped;
  this._score_bug_draw_ = (_xCoordinateToPlaceTheClipped) => {
    _sprite_sheet_image_(
      this._context,
      this._file,
      _xCoordinateToPlaceTheClipped,
      this._yCoordinateToPlaceTheClipped,
      this._applyWidthOfClipped,
      this._applyHeightfClipped
    );
  };
  this._score_bug_text_draw_ = (
    _text,
    _font,
    _size,
    _textColor,
    _xCoordinateToPlaceTheText,
    _yCoordinateToPlaceTheText
  ) => {
    this._context.font = `${_size} ${_font}`;
    this._context.fillStyle = _textColor;
    this._context.fillText(
      _text,
      _xCoordinateToPlaceTheText,
      _yCoordinateToPlaceTheText
    );
  };
};

export const _score_basket_while_playing_ = function (
  _context,
  _file,
  _yCoordinateToPlaceTheClipped,
  _applyWidthOfClipped,
  _applyHeightfClipped
) {
  this._context = _context;
  this._file = _file;
  this._yCoordinateToPlaceTheClipped = _yCoordinateToPlaceTheClipped;
  this._applyWidthOfClipped = _applyWidthOfClipped;
  this._applyHeightfClipped = _applyHeightfClipped;
  this._score_basket_draw_ = (_xCoordinateToPlaceTheClipped) => {
    _sprite_sheet_image_(
      this._context,
      this._file,
      _xCoordinateToPlaceTheClipped,
      this._yCoordinateToPlaceTheClipped,
      this._applyWidthOfClipped,
      this._applyHeightfClipped
    );
  };
  this._score_basket_text_draw_ = (
    _text,
    _font,
    _size,
    _textColor,
    _xCoordinateToPlaceTheText,
    _yCoordinateToPlaceTheText
  ) => {
    this._context.font = `${_size} ${_font}`;
    this._context.fillStyle = _textColor;
    this._context.fillText(
      _text,
      _xCoordinateToPlaceTheText,
      _yCoordinateToPlaceTheText
    );
  };
};
