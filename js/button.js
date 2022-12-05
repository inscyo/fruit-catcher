import {
  _load_sprite_image_,
  _sprite_sheet_clipping_,
  _sprite_sheet_image_,
} from "./function.js";

export const _settings_button_while_playing_object_ = function (
  _context,
  _file,
  _xCoordinateToPlaceTheClipped,
  _yCoordinateToPlaceTheClipped,
  _applyWidthOfClipped,
  _applyHeightfClipped
) {
  this._context = _context;
  this._file = _file;
  this._yCoordinateToPlaceTheClipped = _yCoordinateToPlaceTheClipped;
  this._xCoordinateToPlaceTheClipped = _xCoordinateToPlaceTheClipped;
  this._applyWidthOfClipped = _applyWidthOfClipped;
  this._applyHeightfClipped = _applyHeightfClipped;
  this._draw_to_canvas_ = () => {
    _sprite_sheet_image_(
      this._context,
      this._file,
      this._xCoordinateToPlaceTheClipped,
      this._yCoordinateToPlaceTheClipped,
      this._applyWidthOfClipped,
      this._applyHeightfClipped
    );
  };
};
