import parseTemplateToTokens from './parseTemplateToTokens'
import renderTemplate from './renderTemplate'

window.mustache = {
  render(template, data) {
    let tokens = parseTemplateToTokens(template)
    const str = renderTemplate(tokens, data)
    return str
  }
}
