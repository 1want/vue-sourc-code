import Scanner from './scanner'

window.mustache = {
  render(template) {
    var scanner = new Scanner(template)
  }
}
