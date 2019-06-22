
/**
 * 打印函数，仅在开发环境下有输出
 * @param mes
 * @param args
 */
export function print (mes, ...args) {
  if (process.env.NODE_ENV === 'development') console.log(`【${mes}】`, ...args)
}

/**
 * 将异步方法转为Promise， 返回Promise实例
 * @param funcName 方法名
 * @param options
 * @returns {Promise<any>}
 */
export function toPromise (funcName, options = {}, msg) {
  return new Promise((resolve, reject) => {
    if (!options.success) {
      options = {
        ...options,
        success (...res) {
          if (res.length > 1) {
            resolve(res)
          } else {
            resolve(...res)
          }
        }
      }
    }
    if (!options.fail) {
      options = {
        ...options,
        fail (err) {
          reject(err)
        }
      }
    }
    funcName && funcName(options)
  })
}

/**
 * 防抖函数
 * @param func 事件触发的操作
 * @param delay 间隔多少毫秒需要触发一次事件，默认200毫秒
 * @return {Function} 返回封装好函数
 */
export function debounce (func, delay = 200) {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/**
 * 节流函数
 * @param func 事件触发的操作
 * @param delay 间隔多少毫秒需要触发一次事件，默认200毫秒
 * @return {loop}
 */
export function throttle (func, delay = 300) {
  let timer = null
  let start
  return function loop (...args) {
    let _self = this
    let now = Date.now()
    if (!start) {
      start = now
    }
    if (timer) {
      clearTimeout(timer)
    }
    if (now - start >= delay) {
      func.apply(_self, args)
      start = now
    } else {
      timer = setTimeout(function () {
        loop.apply(_self, args)
      }, 50)
    }
  }
}

/**
 * 获取获取表单验证中的一条错误信息
 * @param collect Object 错误信息集合
 * @param queue Array<String>权重集合，越靠前的字段越先判断
 * @return {string}
 */
export function getOnceErrorMessage (collect, queue) {
  let message = ''
  let flag = true
  queue.forEach(item => {
    if (collect[item] && flag) {
      message = collect[item].shift()
      flag = false
    }
  })
  return message
}

/**
 * 获取获取表单验证中的一条错误信息
 * @param collect Object 错误信息集合
 * @param queue Array<String>权重集合，越靠前的字段越先判断
 * @return {string}
 */
export function getOnceErrorKey (collect, queue) {
  let key = ''
  let flag = true
  queue.forEach(item => {
    if (collect[item] && flag) {
      key = item
      flag = false
    }
  })
  return key
}


/**
 * 加锁包装函数(与防抖和节流函数类似)
 * 当有多次方法调用，但是只希望调用这个方法一次时，可以使用此包装函数
 * @param func Function 传入函数必须是async修饰过的函数
 * @param onLockFunc Function 当被锁函数没运行完成时触发的函数
 * @return {Function}
 */
export function lockWrap (func, onLockFunc) {
  let lock = false
  return async function (...args) {
    const _self = this
    if (!lock) {
      lock = true
      const result = await func.apply(_self, args)
      lock = false
      return result
    } else {
      onLockFunc && onLockFunc.call(this)
    }
  }
}


/**
 * 执行一次包装函数
 */
export function onceExec (func) {
  let flag = false
  return function (...args) {
    const _self = this
    if (flag) return
    flag = true
    return func.call(_self, ...args)
  }
}

