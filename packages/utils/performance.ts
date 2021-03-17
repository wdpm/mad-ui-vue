export const debounce = (fn, delayInMS) => {
  // global signal
  let timeoutId = null

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    // @ts-ignore
    const context = this
    // const args = arguments
    timeoutId = setTimeout(() => {
      fn.apply(context, args)
    }, delayInMS)
  }
}

export const sleep = (timeInMS) => {
  return new Promise((resolve) => setTimeout(resolve, timeInMS))
}
