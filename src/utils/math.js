

/**
 * 将字符串尝试转换为数字如果转换不成功则返回0
 * @param numStr
 * @return {number}
 */
export function toNumber (numStr) {
  const num = parseFloat(numStr)
  if (isNaN(num)) return 0
  return num
}

