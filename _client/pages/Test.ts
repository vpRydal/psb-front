export default class Test {

  timer: NodeJS.Timeout | null = null

  async do() {
    console.log(1)

    if (this.timer) {
      clearTimeout(this.timer);
    }

    console.log(2)

    await (new Promise(resolve => {
      console.log(3)
      this.timer = setTimeout(() => {
        console.log(4)
        resolve(1)
      }, 4000);
    }))

    console.log(5)
  }
}
