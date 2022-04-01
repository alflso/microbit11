let 가속도센서변화크기 = 0
let 가위바위보결정값 = 0
function 보출력 () {
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # . #
        # # # # #
        . # # # .
        `)
    basic.pause(3000)
    basic.clearScreen()
}
function 가위출력 () {
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    basic.pause(3000)
    basic.clearScreen()
}
function 가위바위보랜덤결정 () {
    가속도센서변화크기 = Math.abs(input.acceleration(Dimension.X))
    if (가속도센서변화크기 >= 200) {
        가위바위보결정값 = randint(1, 3)
    } else {
        가위바위보결정값 = 0
    }
    basic.showNumber(가속도센서변화크기)
}
function 가위바위보불발표시 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.clearScreen()
}
function 바위출력 () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(3000)
    basic.clearScreen()
}
function 가위바위보이미지출력 () {
    if (가위바위보결정값 == 0) {
        가위바위보불발표시()
    }
    if (가위바위보결정값 == 1) {
        바위출력()
    }
    if (가위바위보결정값 == 2) {
        가위출력()
    }
    if (가위바위보결정값 == 3) {
        보출력()
    }
}
basic.forever(function () {
    가위바위보랜덤결정()
    가위바위보이미지출력()
})
