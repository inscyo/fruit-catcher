import {
  _request_animation_frame_,
  _load_sprite_image_,
  _sprite_sheet_clipping_,
  _sprite_sheet_image_,
  _get_all_image_from_folder_,
  _get_image_from_folder,
  _if_instance_has_length,
  _probability_,
  _set_interval_toggle_,
  _set_timeout_,
  _define_visibility_call,
  _load_sound_,
} from "./_function/function.js";
import { _map_background_ } from "/fruit-catcher/js/_module/map.js";
import {
  _fruit_object_,
  _fruit_splash_object_,
} from "/fruit-catcher/js/_module/fruit.js";
import { _bug_object_ } from "/fruit-catcher/js/_module/obstacle.js";
import {
  _power_gem_object_,
  _power_energy_object_,
  _power_slowmo_object_,
  _power_money_object_,
} from "/fruit-catcher/js/_module/powerup.js";
import {
  _score_gem_while_playing_,
  _score_energy_while_playing_,
  _score_bug_while_playing_,
  _score_basket_while_playing_,
} from "/fruit-catcher/js/_play/score.js";
import { _player_basket_object_ } from "/fruit-catcher/js/_player/player.js";
import { _settings_button_while_playing_object_ } from "/fruit-catcher/js/_interaction/button.js";

const _primary_width_ = 900;
const _primary_height_ = 570;
const _canvas_tag_ = document.querySelector("canvas");
const _context_ = _canvas_tag_.getContext("2d");
_canvas_tag_.style.width = `${_primary_width_}px`;
_canvas_tag_.style.height = `${_primary_height_ / 1.05}px`;
_canvas_tag_.width = _primary_width_;
_canvas_tag_.height = _primary_height_;
const _canvas_width_ = _canvas_tag_.width;
const _canvas_height_ = _canvas_tag_.height;
_load_sound_(
  "/fruit-catcher/resources/sound/fruit-sound/game-fruit-splat-0.mp3",
  "_fruit_splat_audio_"
);
_load_sound_(
  "/fruit-catcher/resources/sound/power-up-sound/power-up-0.mp3",
  "_energy_gain_audio_"
);
_load_sound_(
  "/fruit-catcher/resources/sound/power-up-sound/power-up-1.mp3",
  "_gem_gain_audio_"
);
_load_sound_(
  "/fruit-catcher/resources/sound/power-up-sound/power-up-2.mp3",
  "_slowmo_gain_audio_"
);
_load_sound_(
  "/fruit-catcher/resources/sound/obstacle-sound/obstacle-0.mp3",
  "_buzz_gain_audio_"
);
window.addEventListener("DOMContentLoaded", async function (event) {
  let _fruit_splat_audio_ = await document.querySelector(
    "#_fruit_splat_audio_"
  );
  let _energy_gain_audio_ = await document.querySelector(
    "#_energy_gain_audio_"
  );
  let _gem_gain_audio_ = await document.querySelector("#_gem_gain_audio_");
  let _slowmo_gain_audio_ = await document.querySelector(
    "#_slowmo_gain_audio_"
  );
  let _buzz_gain_audio_ = await document.querySelector("#_buzz_gain_audio_");

  let _map_background_instance_;
  await _get_image_from_folder(
    `/fruit-catcher/resources/sprites/map/map-6.jpg`
  ).then((_spritesheet) => {
    _map_background_instance_ = new _map_background_(
      _context_,
      _spritesheet,
      0,
      0,
      _canvas_width_,
      _canvas_height_
    );
  });

  let _fruit_object_instance_images_ = [];
  let _fruit_object_instance_ = [];
  let _fruit_object_function_run_iterration_ = 0;
  let _fruit_object_timeout_;
  let _fruit_falling_interval_ = 70;
  await _get_all_image_from_folder_(
    `/fruit-catcher/resources/sprites/fruit/fruit`,
    9,
    "png"
  ).then((_spritesheet) => {
    (function _fruit_object_function() {
      _fruit_object_function_run_iterration_++;
      let _get_fruits_ = Math.floor(Math.random() * _spritesheet.length);
      let _fruit_width_ = _spritesheet[_get_fruits_]["width"] / 4.3;
      let _fruit_height_ = _spritesheet[_get_fruits_]["height"] / 4.1;
      let _fruit_x_location_ = Math.floor(Math.random() * _canvas_width_);
      let _fruit_speed_ = 0.5;
      _fruit_object_instance_.push({
        _fruit_id_: Date.now(),
        _fruit_: {
          _object_: new _fruit_object_(
            _context_,
            _spritesheet[_get_fruits_],
            _fruit_x_location_,
            -_fruit_height_,
            _fruit_width_,
            _fruit_height_,
            _fruit_speed_,
            _canvas_height_,
            _get_fruits_
          ),
        },
      });
      _fruit_object_timeout_ = _set_timeout_(
        _fruit_object_function,
        _fruit_falling_interval_
      );
    })();
  });

  let _fruit_splash_object_instance_;

  await _get_all_image_from_folder_(
    `/fruit-catcher/sprites/splash/splash`,
    1,
    "png"
  ).then((_spritesheet) => {
    let _get_splash_fruits_ = 0;
    let _fruit_splash_width_ = _spritesheet[_get_splash_fruits_]["width"];
    let _fruit_splash_height_ = _spritesheet[_get_splash_fruits_]["height"];
    _fruit_splash_object_instance_ = {
      _img_: _spritesheet[_get_splash_fruits_],
      _width: _fruit_splash_width_,
      _height: _fruit_splash_height_,
    };
  });

  let _bug_object_instance_images_ = [];
  let _bug_object_instance_ = [];
  let _bug_object_function_run_iterration_ = 0;
  let _bug_object_timeout_;
  window._bug_falling_interval_ = 4000;
  await _get_all_image_from_folder_(
    `/fruit-catcher/sprites/obstacle/obs`,
    2,
    "png"
  ).then((_spritesheet) => {
    (function _bug_object_function() {
      _bug_object_function_run_iterration_++;
      let _get_bugs_ = 1;
      let _bug_width_ = _spritesheet[_get_bugs_]["width"] / 1.5;
      let _bug_height_ = _spritesheet[_get_bugs_]["height"] / 1.5;
      let _bug_x_location_ = Math.floor(Math.random() * _canvas_width_);
      let _bug_speed_ = Math.floor(Math.random() * (10 - 5 + 5) + 5);
      _bug_object_instance_.push({
        _bug_id_: Date.now(),
        _bug_: {
          _object_: new _bug_object_(
            _context_,
            _spritesheet[_get_bugs_],
            _bug_x_location_,
            -_bug_height_,
            _bug_width_,
            _bug_height_,
            _bug_speed_,
            _canvas_height_,
            _get_bugs_
          ),
        },
      });

      _bug_object_timeout_ = _set_timeout_(
        _bug_object_function,
        _bug_falling_interval_
      );
    })();
  });

  let _score_gem_context_width_ = 0;
  let _score_enery_context_width_ = 0;
  let _energy_limit_ = 10000000;
  let _if_gameover_ = false;
  let _score_gem_total_ = 0;
  let _score_energy_total_ = 0;

  let _player_hit_slowmo_ = false;
  window._player_gain_multiple_basket_ = false;

  let _power_up_object = _get_all_image_from_folder_(
    `/fruit-catcher/resources/sprites/powerup/power`,
    4,
    "png"
  );

  let _gem_object_instance_images_ = [];
  let _gem_object_instance_ = [];
  let _gem_object_function_run_iterration_ = 0;
  let _gem_object_timeout_;
  let _gem_falling_interval_ = 1000;
  let _gem_probability_ = 0.9;
  let _gem_speed_ = Math.floor(Math.random() * (5 - 3 + 3) + 2);

  _power_up_object.then((_spritesheet) => {
    (function _gem_object_function() {
      _gem_object_function_run_iterration_++;
      let _get_gem_ = 0;
      let _gem_width_ = _spritesheet[_get_gem_]["width"] / 1.7;
      let _gem_height_ = _spritesheet[_get_gem_]["height"] / 1.7;
      let _gem_x_location_ = Math.floor(Math.random() * _canvas_width_);
      let _gem_probability_return_ = _probability_();
      if (_gem_probability_return_ > _gem_probability_) {
        _gem_object_instance_.push({
          _gem_id_: Date.now(),
          _gem_: {
            _object_: new _power_gem_object_(
              _context_,
              _spritesheet[_get_gem_],
              _gem_x_location_,
              -_gem_height_,
              _gem_width_,
              _gem_height_,
              _canvas_height_
            ),
          },
        });
      }
      _gem_object_timeout_ = _set_timeout_(
        _gem_object_function,
        _gem_falling_interval_
      );
    })();
  });

  let _energy_object_instance_images_ = [];
  let _energy_object_instance_ = [];
  let _energy_object_function_run_iterration_ = 0;
  let _energy_object_timeout_;
  let _energy_falling_interval_ = 1000;
  let _energy_probability_ = 0.7;
  let _energy_speed_ = Math.floor(Math.random() * (5 - 3 + 3) + 2);

  _power_up_object.then((_spritesheet) => {
    (function _energy_object_function() {
      _energy_object_function_run_iterration_++;
      let _get_energy_ = 1;
      let _energy_width_ = _spritesheet[_get_energy_]["width"];
      let _energy_height_ = _spritesheet[_get_energy_]["height"];
      let _energy_x_location_ = Math.floor(Math.random() * _canvas_width_);

      let _energy_probability_return_ = _probability_();
      if (_energy_probability_return_ > _energy_probability_) {
        _energy_object_instance_.push({
          _energy_id_: Date.now(),
          _energy_: {
            _object_: new _power_energy_object_(
              _context_,
              _spritesheet[1],
              _energy_x_location_,
              -_energy_height_,
              _energy_width_,
              _energy_height_,
              _canvas_height_
            ),
          },
        });
      }
      _energy_object_timeout_ = _set_timeout_(
        _energy_object_function,
        _energy_falling_interval_
      );
    })();
  });

  let _slowmo_object_instance_images_ = [];
  let _slowmo_object_instance_ = [];
  let _slowmo_object_function_run_iterration_ = 0;
  let _slowmo_object_timeout_;
  let _slowmo_falling_interval_ = 1000;
  let _slowmo_probability_ = 0.8;

  _power_up_object.then((_spritesheet) => {
    (function _slowmo_object_function() {
      _slowmo_object_function_run_iterration_++;
      let _get_slowmo_ = 2;
      let _slowmo_width_ = _spritesheet[_get_slowmo_]["width"] / 3;
      let _slowmo_height_ = _spritesheet[_get_slowmo_]["height"] / 2.8;
      let _slowmo_x_location_ = Math.floor(Math.random() * _canvas_width_);
      let _slowmo_speed_ = Math.floor(Math.random() * (5 - 3 + 3) + 2);
      let _slowmo_probability_return_ = _probability_();
      if (_slowmo_probability_return_ > _slowmo_probability_) {
        _slowmo_object_instance_.push({
          _slowmo_id_: Date.now(),
          _slowmo_: {
            _object_: new _power_slowmo_object_(
              _context_,
              _spritesheet[_get_slowmo_],
              _slowmo_x_location_,
              -_slowmo_height_,
              _slowmo_width_,
              _slowmo_height_,
              _slowmo_speed_,
              _canvas_height_
            ),
          },
        });
      }
      _slowmo_object_timeout_ = _set_timeout_(
        _slowmo_object_function,
        _slowmo_falling_interval_
      );
    })();
  });

  let _slowmo_running_function_timeout_;
  let _slowmo_running_function_iterration_ = 0;
  window._slowmo_running_function_time_ = 1000;

  let _slowmo_running_function_ = function () {
    _slowmo_running_function_iterration_++;
    if (_slowmo_running_function_iterration_ >= 5) {
      _player_hit_slowmo_ = false;
      _fruit_falling_interval_ = 70;
      _slowmo_running_function_iterration_ = 0;
      _slowmo_gain_audio_.pause();
      _slowmo_gain_audio_.currentTime = 0;
      return;
    }
    _slowmo_gain_audio_.currentTime = _slowmo_running_function_iterration_;
    _slowmo_gain_audio_.play();
    _slowmo_running_function_timeout_ = _set_timeout_(
      _slowmo_running_function_,
      _slowmo_running_function_time_
    );
  };

  let _player_gain_multiple_basket_running_function_timeout_;
  let _player_gain_multiple_basket_running_function_iterration_ = 0;
  window._player_gain_multiple_basket_running_function_time_ = 1000;

  let _player_gain_multiple_basket_running_function = function () {
    _player_gain_multiple_basket_running_function_iterration_++;
    if (_player_gain_multiple_basket_running_function_iterration_ >= 10) {
      _player_gain_multiple_basket_ = false;
      _player_gain_multiple_basket_running_function_iterration_ = 0;
      // _fruit_object_timeout_._resume_();
      _energy_object_timeout_._resume_();
      _bug_object_timeout_._resume_();
      _slowmo_object_timeout_._resume_();
      _money_object_timeout_._resume_();
      // _gem_speed_ = Math.floor(Math.random() * (5 - 3 + 3) + 2);
      _fruit_falling_interval_ = 70;
      _gem_falling_interval_ = 1000;
      return;
    }
    // _fruit_object_timeout_._pause_();
    _energy_object_timeout_._pause_();
    _bug_object_timeout_._pause_();
    _slowmo_object_timeout_._pause_();
    _money_object_timeout_._pause_();
    // _gem_speed_ = Math.floor(Math.random() * (12 - 12 + 5) + 12);
    _fruit_falling_interval_ = 10;
    _gem_falling_interval_ = 10;
    _gem_probability_ = 0.5;

    _player_gain_multiple_basket_running_function_timeout_ = _set_timeout_(
      _player_gain_multiple_basket_running_function,
      _player_gain_multiple_basket_running_function_time_
    );
  };

  let _money_object_instance_images_ = [];
  let _money_object_instance_ = [];
  let _money_object_function_run_iterration_ = 0;
  let _money_object_timeout_;
  let _money_falling_interval_ = 1000;
  let _money_probability_ = 0.95;
  _power_up_object.then((_spritesheet) => {
    (function _money_object_function() {
      _money_object_function_run_iterration_++;
      let _get_money_ = 1;
      let _money_width_ = _spritesheet[_get_money_]["width"] + 10;
      let _money_height_ = _spritesheet[_get_money_]["height"];
      let _money_x_location_ = Math.floor(Math.random() * _canvas_width_);
      let _money_speed_ = Math.floor(Math.random() * (5 - 3 + 3) + 2);
      let _money_probability_return_ = _probability_();
      if (_money_probability_return_ > _money_probability_) {
        _money_object_instance_.push({
          _money_id_: Date.now(),
          _money_: {
            _object_: new _power_money_object_(
              _context_,
              _spritesheet[3],
              _money_x_location_,
              -_money_height_,
              _money_width_,
              _money_height_,
              _money_speed_,
              _canvas_height_
            ),
          },
        });
      }
      _money_object_timeout_ = _set_timeout_(
        _money_object_function,
        _money_falling_interval_
      );
    })();
  });

  let _score_gem_while_playing_object = _get_image_from_folder(
    `/fruit-catcher/resources/gui/score/gem.png`
  );

  let _score_gem_object_instance_;

  await _score_gem_while_playing_object.then((_spritesheet) => {
    let _score_gem_width_ = _spritesheet["width"];
    let _score_gem_height_ = _spritesheet["height"];
    _score_gem_object_instance_ = new _score_gem_while_playing_(
      _context_,
      _spritesheet,
      15,
      10,
      _score_gem_width_,
      _score_gem_height_
    );
  });

  let _score_energy_while_playing_object = _get_image_from_folder(
    `/fruit-catcher/resources/gui/score/energy.png`
  );

  let _score_energy_object_instance_;

  await _score_energy_while_playing_object.then((_spritesheet) => {
    let _score_energy_width_ = _spritesheet["width"];
    let _score_energy_height_ = _spritesheet["height"];
    _score_energy_object_instance_ = new _score_energy_while_playing_(
      _context_,
      _spritesheet,
      12,
      _score_energy_width_,
      _score_energy_height_
    );
  });

  let _score_bug_while_playing_object = _get_image_from_folder(
    `/fruit-catcher/resources/sprites/obstacle/obs-1.png`
  );

  let _player_basket_object = _get_image_from_folder(
    `/fruit-catcher/resources/sprites/player/player-2.png`
  );
  let _score_basket_object_instance_;

  await _player_basket_object.then((_spritesheet) => {
    let _score_basket_width_ = _spritesheet["width"] / 2.15;
    let _score_basket_height_ = _spritesheet["height"] / 2.15;
    _score_basket_object_instance_ = new _score_basket_while_playing_(
      _context_,
      _spritesheet,
      77,
      _score_basket_width_,
      _score_basket_height_
    );
  });

  let _player_basket_object_instance_;
  let _player_basket_interval_;
  let _player_basket_x_ = _canvas_width_ / 2;
  let _player_basket_speed_ = 7;
  let _key_clicked_left_ = false;
  let _key_clicked_right_ = false;
  await _player_basket_object.then(function (_spritesheet) {
    let _player_basket_width_ = _spritesheet["width"] / 2;
    let _player_basket_height_ = _spritesheet["height"] / 2;
    _player_basket_object_instance_ = {
      _player_basket_id_: Date.now(),
      _player_basket_: {
        _object_: new _player_basket_object_(
          _context_,
          _spritesheet,
          _player_basket_x_,
          _canvas_height_ - _player_basket_height_ - 10,
          _player_basket_width_,
          _player_basket_height_,
          _player_basket_speed_,
          _canvas_width_,
          _canvas_height_
        ),
      },
    };
    document.onkeydown = function (_key) {
      if (_key.key == "ArrowLeft") _key_clicked_left_ = true;
      if (_key.key == "ArrowRight") _key_clicked_right_ = true;
    };
    document.onkeyup = function (_key) {
      if (_key.key == "ArrowLeft") _key_clicked_left_ = false;
      if (_key.key == "ArrowRight") _key_clicked_right_ = false;
    };
  });

  let _settings_button_while_playing_ = _get_image_from_folder(
    `/fruit-catcher/resources/gui/buttons/button-2.png`
  );

  let _settings_button_while_playing_instance_;

  await _settings_button_while_playing_.then((_spritesheet) => {
    let _settings_button_while_playing__width_ = 44;
    let _settings_button_while_playing__height_ = 47;
    _settings_button_while_playing_instance_ =
      new _settings_button_while_playing_object_(
        _context_,
        _spritesheet,
        _canvas_width_ - 57,
        10,
        _settings_button_while_playing__width_,
        _settings_button_while_playing__height_
      );
  });

  (async function _animation_() {
    _context_.clearRect(0, 0, _primary_width_, _primary_height_);
    _map_background_instance_._main_background_draw_();

    await _if_instance_has_length(
      _fruit_object_instance_,
      function (_instance, _iterration) {
        _instance[_iterration]._fruit_._object_._fruit_draw_();
        if (_instance[_iterration]._fruit_._object_._fruit_animate_()) {
          _instance.splice(_iterration, 1);
        }
        try {
          if (_player_hit_slowmo_) {
            _instance[_iterration]._fruit_._object_._fruit_slowmo_();
          }
          if (
            _player_basket_object_instance_._player_basket_._object_._player_basket_hits_fruit_(
              _instance[_iterration]._fruit_._object_
            )._hit_
          ) {
            _instance[_iterration]._fruit_._object_._fruit_splash(
              _fruit_splash_object_instance_._img_,
              _fruit_splash_object_instance_._width,
              _fruit_splash_object_instance_._height
            );
            _fruit_object_instance_.splice(_iterration, 1);
            _energy_limit_ -= 0.5;
            _fruit_splat_audio_.play();
            _fruit_splat_audio_.currentTime = 0;
          }
        } catch (e) {}
      }
    );

    await _if_instance_has_length(
      _bug_object_instance_,
      function (_instance, _iterration) {
        _instance[_iterration]._bug_._object_._bug_draw_();
        if (_instance[_iterration]._bug_._object_._bug_animate_()) {
          _instance.splice(_iterration, 1);
        }
        try {
          if (
            _player_basket_object_instance_._player_basket_._object_._player_basket_hits_bug_(
              _instance[_iterration]._bug_._object_
            )._hit_
          ) {
            _bug_object_instance_.splice(_iterration, 1);
            _energy_limit_ -= 10;
          }
        } catch (e) {}
      }
    );

    await _if_instance_has_length(
      _gem_object_instance_,
      function (_instance, _iterration) {
        _instance[_iterration]._gem_._object_._gem_draw_();
        if (
          _instance[_iterration]._gem_._object_._gem_animate_(_gem_speed_, 0.1)
        ) {
          _instance.splice(_iterration, 1);
        }
        try {
          if (
            _player_basket_object_instance_._player_basket_._object_._player_basket_hits_gem_(
              _instance[_iterration]._gem_._object_
            )._hit_
          ) {
            _gem_object_instance_.splice(_iterration, 1);
            _score_gem_total_ += 1;
            _energy_limit_ -= 5;
            _gem_gain_audio_.play();
            _gem_gain_audio_.currentTime = 0;
          }
        } catch (e) {}
      }
    );

    await _if_instance_has_length(
      _energy_object_instance_,
      function (_instance, _iterration) {
        _instance[_iterration]._energy_._object_._energy_draw_();
        if (
          _instance[_iterration]._energy_._object_._energy_animate_(
            _energy_speed_
          )
        ) {
          _instance.splice(_iterration, 1);
        }
        try {
          if (
            _player_basket_object_instance_._player_basket_._object_._player_basket_hits_energy_(
              _instance[_iterration]._energy_._object_
            )._hit_
          ) {
            _energy_object_instance_.splice(_iterration, 1);
            _energy_limit_ += 2;
            _energy_gain_audio_.play();
            _energy_gain_audio_.currentTime = 0;
          }
        } catch (e) {}
      }
    );
    await _if_instance_has_length(
      _slowmo_object_instance_,
      function (_instance, _iterration) {
        _instance[_iterration]._slowmo_._object_._slowmo_draw_();
        if (_instance[_iterration]._slowmo_._object_._slowmo_animate_()) {
          _instance.splice(_iterration, 1);
        }
        try {
          if (
            _player_basket_object_instance_._player_basket_._object_._player_basket_hits_slowmo_(
              _instance[_iterration]._slowmo_._object_
            )._hit_
          ) {
            _slowmo_object_instance_.splice(_iterration, 1);
            _player_hit_slowmo_ = true;
            _energy_limit_ -= 2;
            _fruit_falling_interval_ = 500;
            _slowmo_running_function_iterration_ = 0;
            clearTimeout(_slowmo_object_timeout_);
            _slowmo_running_function_();
          }
        } catch (e) {}
      }
    );
    await _if_instance_has_length(
      _money_object_instance_,
      function (_instance, _iterration) {
        _instance[_iterration]._money_._object_._money_draw_();
        if (_instance[_iterration]._money_._object_._money_animate_()) {
          _instance.splice(_iterration, 1);
        }
        try {
          if (
            _player_basket_object_instance_._player_basket_._object_._player_basket_hits_money_(
              _instance[_iterration]._money_._object_
            )._hit_
          ) {
            _money_object_instance_.splice(_iterration, 1);
            _player_gain_multiple_basket_ = true;
            _player_gain_multiple_basket_running_function_iterration_ == 0;
            _player_gain_multiple_basket_running_function();
          }
        } catch (e) {}
      }
    );

    _player_basket_object_instance_._player_basket_._object_._player_basket_draw_();
    _player_basket_object_instance_._player_basket_._object_._player_move_animate_(
      _key_clicked_left_,
      _key_clicked_right_,
      _player_basket_speed_
    );

    _score_gem_object_instance_._score_gem_draw_();
    _score_gem_context_width_ =
      _score_gem_object_instance_._score_gem_text_draw_(
        _score_gem_total_,
        "Skranji-Bold",
        "25.5px",
        "white",
        72,
        47
      );
    _score_energy_object_instance_._score_energy_draw_(
      _score_gem_total_ >= 100 ? _score_gem_context_width_ + 90 : 120
    );
    _score_enery_context_width_ =
      _score_energy_object_instance_._score_energy_text_draw_(
        Math.floor(_energy_limit_),
        "Skranji-Bold",
        "25.5px",
        "white",
        _score_gem_total_ >= 100 ? _score_gem_context_width_ + 126 : 156,
        48
      );

    _settings_button_while_playing_instance_._draw_to_canvas_();
    _if_gameover_ = _energy_limit_ <= 0 ? true : false;
    if (_if_gameover_) {
      _energy_limit_ = 0;
      _fruit_object_timeout_._cancel_();
      _bug_object_timeout_._cancel_();
      _gem_object_timeout_._cancel_();
      _energy_object_timeout_._cancel_();
      _slowmo_object_timeout_._cancel_();
      _money_object_timeout_._cancel_();
      _fruit_object_instance_ = [];
      _bug_object_instance_ = [];
      _gem_object_instance_ = [];
      _energy_object_instance_ = [];
      _slowmo_object_instance_ = [];
    }
    _request_animation_frame_(_animation_);
  })();

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState !== "visible") {
      _fruit_object_timeout_._pause_();
      _bug_object_timeout_._pause_();
      _gem_object_timeout_._pause_();
      _energy_object_timeout_._pause_();
      _slowmo_object_timeout_._pause_();
      _money_object_timeout_._pause_();
    } else {
      _fruit_object_timeout_._resume_();
      _bug_object_timeout_._resume_();
      _gem_object_timeout_._resume_();
      _energy_object_timeout_._resume_();
      _slowmo_object_timeout_._resume_();
      _money_object_timeout_._resume_();
    }
  });
});
