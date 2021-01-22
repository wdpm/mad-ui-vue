/**
 * Created by evan on 2020/7/17
 */
function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

module.exports = {
    ready,
}
