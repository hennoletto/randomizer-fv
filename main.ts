let player = 0
let arrow = 0
input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.InBackground)
    for (let index = 0; index < 4; index++) {
        basic.showString("?")
    }
    basic.showLeds(`
        . . # . .
        . # # . .
        # . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(2000)
    player = 1
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.LoopingInBackground)
    arrow = randint(player, 1)
    if (arrow == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    basic.pause(5000)
    basic.clearScreen()
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.LoopingInBackground)
    for (let index = 0; index < 4; index++) {
        basic.showString("?")
    }
    basic.showLeds(`
        # # # # .
        # . . # .
        . . # . .
        . # . . .
        # # # # .
        `)
    basic.pause(2000)
    player = 2
    if (input.buttonIsPressed(Button.B)) {
    	
    }
    for (let index = 0; index < 4; index++) {
        arrow = randint(player, 1)
    }
    if (arrow == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (arrow == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    basic.pause(5000)
    basic.clearScreen()
    music.stopAllSounds()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.LoopingInBackground)
    basic.showLeds(`
        . # # # .
        . . . # .
        . . # . .
        . . . # .
        . # # # .
        `)
    basic.pause(2000)
    for (let index = 0; index < 4; index++) {
        basic.showString("?")
    }
    player = 3
    if (input.logoIsPressed()) {
    	
    }
    for (let index = 0; index < 4; index++) {
        arrow = randint(player, 1)
    }
    if (arrow == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (arrow == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (arrow == 3) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    basic.pause(5000)
    basic.clearScreen()
    music.stopAllSounds()
})
