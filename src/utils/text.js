
/**
 * 处理富文本函数
 */
export function rictTextHandle (text) {
  return text
    // 替换不支持的标签
    .replace(/section|header|nav|footer|article|details|hgroup|aside/ig, 'div')
    .replace(/(<img[^>]+?style="[^"]*?)("[^>]+?\/?>)/gi, (matchText, $1, $2) => `${$1}; width: 100% !important; height: auto !important;${$2}`)
    .replace(/<img/gi, '<img style="width: 100% !important; height: auto !important;" ')
}

