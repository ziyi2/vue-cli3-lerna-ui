/*
 * @Author: ziyi2
 * @Date: 2017-09-28
 */

const regs = {
  comments: /&lt;!--[\s\S]*?--&gt;/g,
  function: /&lt;\?[\s\S]+?\?&gt;/g,
  literal: /&lt;!DOCTYPE[\s\S]+?&gt;/gi,
  template: /&lt;!\[CDATA\[[\s\S]*?]]&gt;/gi
}

const tag = {
  all: /(&lt;\/?)([\w-]+)([\s\S]*?)(\s*)(\/?&gt;)/gi,
  attr_no_value: /(\s+)([^\s=]+)(\s+|$)/gi,
  attr_value_no_string: /(\s+)([a-zA-z-]+)(=)((?!(?:&quot;|&#39;|\s|'|")))([^\s=]+)(\s+|$)/gi,
  attr_value_string: /(\s+)([a-zA-z-]+)(=)((?:&quot;)|(?:&#39;))([\s\S]*?)(\4)/gi
}

 /*
 * @Desc: html字符转义
 * @Parm: text -> html代码字符串
 */
function htmlEncode (html) {
  return html.replace(/[<>"'&]/g, function (match) {
    switch (match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '&':
        return '&amp;'
      case "'":
        return '&#39;'
      case '"':
        return '&quot;'
    }
  })
}

const tokens = [
  // 0
  'function',
  // 1
  'builtin',
  // 2
  'template',
  // 3
  'comment'
]

 /*
 * @Desc: 插入高亮span标签
 * @Parm: text -> 被匹配的字符串
 */
function token (content, tokenIndex) {
  let str = ''
  if (content) {
    str = content.split(/\r\n|\n/).map(function (s) {
      return s.replace(/^(\s*)(.*?)(\s*)$/, `$1<span class="h-code-${tokens[tokenIndex]}">$2</span>$3`)
    }).join('\n')
  }
  return str
}

 /*
 * @Desc: 高亮html代码
 * @Parm: text -> html代码字符串
 */
export function html (text) {
  text = htmlEncode(text)
  for (let reg in regs) {
    text = text.replace(regs[reg], (match) => {
      return `<span class='h-code-${reg}'>${match}</span>`
    })
  }

  text = text.replace(tag.all, (...args) => {
    // 标签左侧和右侧
    args[1] = token(args[1], 3)
    args[5] = token(args[5], 3)
    // 标签名
    args[2] = token(args[2], 0)
    // 属性
    args[3] = args[3]
      // 属性无值
      .replace(tag.attr_no_value, `$1<span class='h-code-${tokens[1]}'>$2</span>$3`)
      // 属性有值但是没有''
      .replace(tag.attr_value_no_string, (...args) => {
        return args[1] + token(args[2], 1) + args[3] + token(args[4], 2) + token(args[5], 2) + token(args[6], 2)
      })
      // 属性有'' ""
      .replace(tag.attr_value_string, (...args) => {
        return args[1] + token(args[2], 1) + args[3] + token(args[4], 2) + token(args[5], 2) + token(args[6], 2)
      })
    return args[1] + args[2] + args[3] + args[4] + args[5]
  })

  return text
}

