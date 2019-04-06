import Tag from './tag'
import TagGroup from './tag-group'

Tag.install = function (Vue) {
  Vue.component(Tag.name, Tag)
}

TagGroup.install = function (Vue) {
  Vue.component(TagGroup.name, TagGroup)
}

export {
  Tag,
  TagGroup
}
