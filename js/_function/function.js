export const _request_animation_frame_ =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

export const cancel_animation_frame_ =
  window.cancelAnimationFrame || window.mozCancelAnimationFrame;

export const _load_sprite_image_ = (url) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", (err) => reject(err));
    img.src = url;
  });

export const _sprite_sheet_clipping_ = (
  _context,
  _file,
  _startClipingXcoordinate,
  _startClipingYcoordinate,
  _clippedWidth,
  _clippedHeight,
  _xCoordinateToPlaceTheClipped,
  _yCoordinateToPlaceTheClipped,
  _applyWidthOfClipped,
  _applyHeightfClipped
) => {
  _context.drawImage(
    _file,
    _startClipingXcoordinate,
    _startClipingYcoordinate,
    _clippedWidth,
    _clippedHeight,
    _xCoordinateToPlaceTheClipped,
    _yCoordinateToPlaceTheClipped,
    _applyWidthOfClipped,
    _applyHeightfClipped
  );
};

export const _sprite_sheet_image_ = (
  _context,
  _file,
  _xCoordinateToPlaceTheClipped,
  _yCoordinateToPlaceTheClipped,
  _applyWidthOfClipped,
  _applyHeightfClipped
) => {
  _context.drawImage(
    _file,
    _xCoordinateToPlaceTheClipped,
    _yCoordinateToPlaceTheClipped,
    _applyWidthOfClipped,
    _applyHeightfClipped
  );
  _context.rect(
    _xCoordinateToPlaceTheClipped,
    _yCoordinateToPlaceTheClipped,
    _applyWidthOfClipped,
    _applyHeightfClipped
  );
};

export const _get_all_image_from_folder_ = async (
  _file_link,
  _spritesheet_no,
  _file_extension
) => {
  let _spritesheet_ = [];
  let _iterration_start_ = 0;

  while (_iterration_start_ < _spritesheet_no) {
    let _files_link_ = `${_file_link}-${_iterration_start_}.${_file_extension}`;
    await _load_sprite_image_(_files_link_)
      .then((img) => {
        _spritesheet_[_iterration_start_] = new Image();
        _spritesheet_[_iterration_start_].src = _files_link_;
      })
      .catch((err) => console.error(err));
    _iterration_start_++;
  }
  return _spritesheet_;
};

export const _get_image_from_folder = async (_file_link) => {
  let _spritesheet_;
  let _files_link_ = _file_link;
  await _load_sprite_image_(_files_link_)
    .then((img) => {
      _spritesheet_ = new Image();
      _spritesheet_.src = _files_link_;
    })
    .catch((err) => console.error(err));
  return _spritesheet_;
};

export const _if_instance_has_length = (_instance, callback) => {
  if (_instance.length > 0) {
    for (let _iterration = 0; _iterration < _instance.length; _iterration++) {
      callback(_instance, _iterration);
    }
  }
};

export const _probability_ = (min = 0.01, max = 0.99) => {
  return Math.random() * (max - min) + min;
};

export const _define_visibility_call = (_mode, _instance) => {
  if (_mode == "resume") {
    _instance._resume_interval_();
  } else {
    _instance._pause_interval_();
  }
};

export const _set_interval_toggle_ = function (_fn_callback_, _timer_freq_) {
  let RESUME_CORRECTION_RATE = 2;

  let _timer_statusCode_;
  let _timer_clockRef_;

  let _time_ellapsed_;
  let _time_pause_;
  let _time_lastCycle_;

  let _isCorrectionCycle_;

  const nextCycle = function () {
    let _time_delta_ = new Date() - _time_lastCycle_;
    _time_lastCycle_ = new Date();
    _time_ellapsed_ += _time_delta_;

    if (_isCorrectionCycle_) {
      clearTimeout(_timer_clockRef_);
      clearInterval(_timer_clockRef_);
      _timer_clockRef_ = setInterval(nextCycle, _timer_freq_);
      _isCorrectionCycle_ = false;
    }
    _fn_callback_.apply(timer, [timer]);
  };

  _time_ellapsed_ = 0;
  _time_lastCycle_ = new Date();
  _timer_statusCode_ = 1;
  _timer_clockRef_ = setInterval(nextCycle, _timer_freq_);

  const timer = {
    get statusCode() {
      return _timer_statusCode_;
    },
    get timestamp() {
      let abstime;
      if (_timer_statusCode_ === 1)
        abstime = _time_ellapsed_ + (new Date() - _time_lastCycle_);
      else if (_timer_statusCode_ === 2)
        abstime = _time_ellapsed_ + (_time_pause_ - _time_lastCycle_);
      return abstime || 0;
    },

    _pause_interval_: function () {
      if (_timer_statusCode_ !== 1) return this;
      clearTimeout(_timer_clockRef_);
      clearInterval(_timer_clockRef_);

      _timer_statusCode_ = 2;
      _time_pause_ = new Date();
      return this;
    },

    _resume_interval_: function () {
      if (_timer_statusCode_ !== 2) return this;
      _timer_statusCode_ = 1;
      _isCorrectionCycle_ = true;
      const delayEllapsedTime = _time_pause_ - _time_lastCycle_;
      _time_lastCycle_ = new Date(
        new Date() - (_time_pause_ - _time_lastCycle_)
      );

      _timer_clockRef_ = setTimeout(
        nextCycle,
        _timer_freq_ - delayEllapsedTime - RESUME_CORRECTION_RATE
      );

      return this;
    },
  };
  return timer;
};

export const _if_two_object_collides_ = (
  _first_object_x,
  _first_object_y,
  _first_object_width,
  _first_object_height,
  _second_object_x,
  _second_object_y,
  _second_object_width,
  _second_object_height,
  _canvas_height
) => {
  let _if_y_of_fruit_hit_player_ =
    _first_object_y < _second_object_y + _second_object_height / 4.5;
  let _if_right_of_fruit_ =
    _second_object_x < _first_object_x + _first_object_width;
  let _if_left_of_fruit_ =
    _second_object_x + _second_object_width / 4.5 > _first_object_x;
  let _if_y_slip_canvas = _second_object_y <= _canvas_height;
  return _if_right_of_fruit_ &&
    _if_left_of_fruit_ &&
    _if_y_of_fruit_hit_player_ &&
    _if_y_slip_canvas
    ? { _hit_: true }
    : false;
};

export const _load_sound_ = function (url, id) {
  new Promise((resolve, reject) => {
    const _audio_ = new Audio();
    _audio_.addEventListener("load", () => resolve(_audio_));
    _audio_.addEventListener("error", (err) => reject(err));
    _audio_.src = url;
    _audio_.id = id;
    _audio_.volume = 0.2;
    document.body.appendChild(_audio_);
  });
};

export const _set_timeout_ = function (fn, countdown) {
  var ident,
    complete = false;
  var total_time_run;

  const _time_diff = function (date1, date2) {
    return date2 ? date2 - date1 : new Date().getTime() - date1;
  };

  const cancel = function () {
    clearTimeout(ident);
  };

  const pause = function () {
    clearTimeout(ident);
    total_time_run = _time_diff();
    complete = total_time_run >= countdown;
  };

  function resume() {
    ident = complete ? -1 : setTimeout(fn, total_time_run);
  }

  var start_time = new Date().getTime();
  ident = setTimeout(fn, countdown);

  return { _cancel_: cancel, _pause_: pause, _resume_: resume };
};
