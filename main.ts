let pausa = 0
basic.forever(function () {
    pausa = 200
    for (let index = 0; index < 3; index++) {
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                led.plot(x, y)
                basic.pause(pausa)
                led.toggle(x, y)
                basic.pause(pausa)
            }
        }
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        pausa += -80
    }
})
