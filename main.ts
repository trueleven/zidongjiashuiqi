let item = TM1637.create(
DigitalPin.P13,
DigitalPin.P14,
7,
4
)
let timer = 0
basic.forever(function () {
    for (let index = 0; index < 10; index++) {
        item.showbit(timer, 0)
        timer = timer + 1
        basic.pause(1000)
        if (timer == 10) {
            timer = 0
        }
    }
})
