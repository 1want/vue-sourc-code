/**
 * this.cur代表当前指针
 * this.tail代表剩余模板字符
 */
export default class Scanner {
  constructor(template) {
    this.template = template
    this.cur = 0
    this.tail = template
  }

  scan(tag) {
    // 跳过所有{{
    while (this.tail.indexOf(tag) === 0 && this.tail != '') {
      this.cur += tag.length
      this.tail = this.template.substring(this.cur)
    }
  }
  scanUtil(stop) {
    const first = this.cur
    // 因为substring不会改变原字符，所以不能直接截取this.tail

    // 当this.tail.indexOf(stop) === 0时，代表{{在第一位
    while (this.tail.indexOf(stop) != 0 && this.tail != '') {
      this.cur++
      this.tail = this.template.substring(this.cur)
    }
    return this.template.substring(first, this.cur)
  }
}
