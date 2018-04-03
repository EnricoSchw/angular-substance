import { TextBlockComponent } from 'substance'

class ParagraphComponent extends TextBlockComponent {
  render($$) {
    let el = super.render($$)
    return el.addClass('sc-paragraph')
  }

  getTagName() {
    return 'p'
  }
}

export default ParagraphComponent
