import parseTemplateToTokens from './parseTemplateToTokens'
import renderTemplate from './renderTemplate'
import lookup from './lookup'

window.mustache = {
  render(template, data) {
    let tokens = parseTemplateToTokens(template)
    renderTemplate(tokens, data)
    const obj = {
      a: {
        b: {
          c: 100
        }
      }
    }
    lookup(obj, 'a.b.c')
  }
}
