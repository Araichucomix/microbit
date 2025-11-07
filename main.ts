let bull_y = 0
let bull_x = 0
let velocity_x = 0
let velocity_y = 0
radio.setGroup(16)
let xpos_char = 2
let ypos_char = 2
led.plot(2, 2)
let bool_prev = 0
basic.forever(function () {
	
})
basic.forever(function () {
    velocity_y = input.rotation(Rotation.Pitch) / 200
    velocity_x = input.rotation(Rotation.Roll) / 200
    led.unplot(xpos_char, ypos_char)
    xpos_char = xpos_char + velocity_x
    ypos_char = ypos_char + velocity_y
    xpos_char = Math.floor(xpos_char)
    ypos_char = Math.floor(ypos_char)
    if (xpos_char < 0) {
        xpos_char = 0
    }
    if (ypos_char < 0) {
        ypos_char = 0
    }
    if (xpos_char > 4) {
        xpos_char = 4
    }
    if (ypos_char > 4) {
        ypos_char = 4
    }
    led.plot(xpos_char, ypos_char)
    if (bull_x == xpos_char && bull_y == ypos_char) {
        while (true) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    }
})
basic.forever(function () {
    if (bool_prev == 0) {
        bull_x = randint(0, 4)
        bull_y = 0
    } else {
        bull_y = randint(0, 4)
        bull_x = 0
    }
    led.plot(bull_x, bull_y)
    basic.pause(1000)
    for (let index = 0; index < 5; index++) {
        led.unplot(bull_x, bull_y)
        if (bool_prev == 0) {
            bull_y = bull_y + 1
        } else {
            bull_x = bull_x + 1
        }
        led.plot(bull_x, bull_y)
        basic.pause(1000)
    }
    led.unplot(bull_x, bull_y)
    if (bool_prev == 0) {
        bool_prev = 1
    } else {
        bool_prev = 0
    }
})
