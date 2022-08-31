

export default (id) => {
    const canvas = document.querySelector('#${id}}');

    if(!canvas) {
        return;
    }

    const gl = canvas.getContext('webgl');

    if(!gl) {
        return;
    }
}