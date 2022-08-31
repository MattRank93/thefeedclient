import GLC from "../GLCommander";

export default (id) => {
    const canvas = document.querySelector(id);

    if(!canvas) {
        return;
    }

    const gl = canvas.getContext('webgl');

    if(!gl) {
        return;
    }

    GLC.init(gl);
    GLC.clear(1.0, 0.0, 0.0, 1.0);
}