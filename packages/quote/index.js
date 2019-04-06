import Quote from './quote'

Quote.install = function (Vue) {
  Vue.component(Quote.name, Quote)
}

export default Quote
