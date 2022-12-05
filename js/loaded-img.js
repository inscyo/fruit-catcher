import { _get_all_image_from_folder_ } from "./function.js";

export const _loaders_object_ = function () {
  this._fruit_object_instance_images_ = () => {
    _get_all_image_from_folder_(`/resources/sprites/powerup/`);
  };
};
