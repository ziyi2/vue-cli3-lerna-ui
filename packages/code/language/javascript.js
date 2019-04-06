/*
 * @Author: ziyi2
 * @Date: 2017-09-28
 */

const regs = {
  keyword: /\b(export default|extends|while|finally|function|return|void|else|break|catch|instanceof|with|throw|case|default|try|this|switch|continue|typeof|delete|let|yield|const|export|super|debugger|async|await|static|import from as|class|import|default|export|super|constructor|get|set|from|in|of|if|for|var|new|do|as)\b/g,
  literal: /\b(true|false|null|undefined|NaN|Infinity)\b/g,
  builtin: /\b(eval|isFinite|isNaN|parseFloat|parseInt|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|unescape|Object|Function|Boolean|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|Number|Math|Date|String|RegExp|Array|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|ArrayBuffer|DataView|JSON|Intl|arguments|require|module|console|window|document|Symbol|Set|Map|WeakSet|WeakMap|Proxy|Reflect|Promise)\b/g,
  reg: /(^|[^/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^/\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/g,
  number: /\b-?(0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,
  function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/g,
  template: /`(?:\\\\|\\?[^\\])*?`/g
}

const commentReg = new RegExp('(/\\*([^*]|[\\\r\\\n]|(\\*+([^*/]|[\\\r\\\n])))*\\*+/)|(//.*)', 'g')

/*
 * @Desc: 高亮js代码
 * @Parm: text -> js代码字符串
 */
export function javascript (text) {
  for (let reg in regs) {
    text = text.replace(regs[reg], (match) => {
      return `<span class='h-code-${reg}'>${match}</span>`
    })
  }

  text = text.replace(commentReg, (matches) => {
    if (matches.split('\n').length > 1) {                         // 多行注释
      let text = ''
      matches = matches.split('\n')
      for (let key of matches.keys()) {
        key !== matches.length - 1 ? text += `<span class='h-code-comments'>${matches[key]}</span> \n`
                                         : text += `<span class='h-code-comments'>${matches[key]}</span>`
      }
      return text
    }
    return `<span class='h-code-comment'>${matches}</span>`         // 单行注释
  })

  return text
}
