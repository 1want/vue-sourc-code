import Scanner from './scanner'
import formatToken from './formatToken'

window.mustache = {
  render(template) {
    var scanner = new Scanner(template)
    let world
    const tokens = []
    while (scanner.eos()) {
      world = scanner.scanUtil('{{')
      if (world != '') {
        tokens.push(['text', world])
      }
      scanner.scan('{{')

      world = scanner.scanUtil('}}')
      if (world != '') {
        if (world[0] === '#') {
          tokens.push(['#', world.substring(1)])
        } else if (world[0] === '/') {
          tokens.push(['/', world.substring(1)])
        } else {
          tokens.push(['text', world])
        }
      }
      scanner.scan('}}')
    }
    return formatToken(tokens)
  }
}
