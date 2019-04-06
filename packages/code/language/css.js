/*
 * @Author: ziyi2
 * @Date: 2017-09-28
 */

const regs = {
  // string
  template: /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/g,
  // atrule
  keyword: /@[\w-]+?.*?(;|(?=\s*\{))/g,
  // selector
  builtin: /\b[^{}\s][^{};]*?(?=\s*\{)\b/g,
  // comment
  comments: /\/\*[\s\S]*?\*\//g,
  // url
  reg: /url\((?:(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/g,
  // property
  literal: /(\b|\B)[\w-]+(?=\s*:)/g,
  // important
  number: /\B!important\b/gi,
  // function
  function: /[-a-z0-9]+(?=\()/g
}

/*
 * @Desc: 高亮css代码
 * @Parm: text -> css代码字符串
 */
export function css (text) {
  for (let reg in regs) {
    text = text.replace(regs[reg], (matches) => {
      return `<span class='h-code-${reg}'>${matches}</span>`
    })
  }
  return text
}
