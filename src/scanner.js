export default class Scanner {
  constructor(template) {
    this.template = template
    this.cur = 0
    this.tail = template
  }

  scan(tag) {
    while (this.tail.indexOf(tag) === 0 && this.tail != '') {
      this.cur += tag.length
      this.tail = this.template.substring(this.cur)
    }
  }
  scanUtil(stop) {
    const first = this.cur
    while (this.tail.indexOf(stop) != 0 && this.tail != '') {
      this.cur++
      this.tail = this.template.substring(this.cur)
    }
    return this.template.substring(first, this.cur)
  }
}
