/**
 * Created by evan on 2020/7/12
 */


/**
 * mad-ui plugin bg reveal
 */
class BgRevealUtils {
    constructor(bgRevealImgElement) {
        // ".bg-reveal-img"
        this.bgRevealImg = bgRevealImgElement;
        this.bgRevealImgs = document.querySelectorAll(this.bgRevealImg);
    }

    init() {
        this.bgRevealImgs.forEach(function (bgRevealImg, index, bgRevealImgs) {

            bgRevealImg.addEventListener("mouseenter", function (evt) {
                let parentElement = bgRevealImg.parentElement;
                parentElement.classList.add("bg-reveal-activating");
            })

            bgRevealImg.addEventListener("mouseleave", function (evt) {
                let parentElement = bgRevealImg.parentElement;
                parentElement.classList.remove("bg-reveal-activating");

                parentElement.classList.add("bg-reveal-rolling-back");
                let removeRollbackCSSClass = setTimeout(function () {
                    parentElement.classList.remove("bg-reveal-rolling-back");
                }, 1000);
            })
        })
    }
}
