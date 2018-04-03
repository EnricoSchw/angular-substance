export default {

  type: 'paragraph',
  tagName: 'paragraph',

  import: function(el, node, converter) {
    node.content = converter.annotatedText(el, [node.id, 'content'])
  },

  export: function(node, el, converter) {
    el.append(converter.annotatedText([node.id, 'content']))
  }

}
