import Scanner from './scanner'

window.mustache = {
  render(template) {
    var scanner = new Scanner(template)
    var world
    while (scanner.tail != '') {
      world = scanner.scanUtil('{{')
      console.log(world, scanner.cur)
      scanner.scan('{{')
      world = scanner.scanUtil('}}')
      scanner.scan('}}')
      console.log(world, scanner.cur)
    }
  }
}
