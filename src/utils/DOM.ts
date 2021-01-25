type callback = () => void

export class DOM {
  private constructor() {}

  static ready(fn: callback) {
    if (document.readyState !== 'loading') {
      fn()
    } else {
      document.addEventListener('DOMContentLoaded', fn)
    }
  }
}
