/**
 *     window.addEventListener('resize', function (evt) {
        console.group();
        console.log(`BrowserUtil.getHeight(): ${BrowserUtil.getHeight()}`);
        console.log(`BrowserUtil.getWidth() : ${BrowserUtil.getWidth()}`);
        console.groupEnd();
    })
 */
class BrowserUtil {
  static w = window
  static d = document
  static e = this.d.documentElement
  static body = this.d.getElementsByTagName('body')[0]

  constructor() {}

  static getWidth() {
    return this.w.innerWidth || this.e.clientWidth || this.body.clientWidth
  }

  static getHeight() {
    return this.w.innerHeight || this.e.clientHeight || this.body.clientHeight
  }
}
