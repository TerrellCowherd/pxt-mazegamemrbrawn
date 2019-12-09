namespace SpriteKind {
    export const win = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    // move yo body freery
    controller.moveSprite(mySprite, 175, 175)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite2.destroy()
    music.baDing.play()
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    // move yo body freery
    controller.moveSprite(mySprite, 100, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.win, function (sprite, otherSprite) {
    game.over(true)
})
let flag: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
info.startCountdown(15)
scene.setTileMap(img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 5 5 5 5 5 5 5 5 5 5 
5 7 7 5 7 7 5 7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 7 7 5 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 5 5 5 5 5 5 5 5 5 5 
5 7 7 5 7 7 5 7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 5 7 5 7 5 7 5 7 5 
5 7 7 5 7 7 5 7 5 7 7 7 7 7 7 7 7 7 7 7 5 5 7 5 7 5 7 5 7 5 7 5 
5 7 7 5 7 7 5 7 5 5 5 5 5 5 5 5 5 5 5 7 5 5 7 5 7 5 7 5 7 5 7 5 
5 7 7 5 7 7 5 7 7 7 7 7 7 7 7 7 7 7 5 7 5 5 7 5 7 5 7 5 7 5 7 5 
5 7 7 5 5 5 5 7 5 5 5 5 5 5 5 5 5 5 5 7 5 5 7 5 7 5 7 5 7 5 7 5 
5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 7 5 7 5 7 5 7 5 7 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 5 5 7 5 7 5 7 5 7 5 7 5 
5 5 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 7 5 7 5 7 5 7 5 7 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 5 5 7 5 7 5 7 5 7 5 7 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 5 5 7 5 7 5 7 5 7 5 7 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 5 5 7 5 7 5 7 5 7 5 7 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 5 5 7 7 7 7 7 7 7 7 7 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 5 5 7 7 7 7 7 7 7 7 7 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 7 7 5 5 5 5 5 5 5 7 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 5 7 5 5 5 5 5 5 5 7 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 5 7 5 5 5 5 5 5 5 7 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 5 7 5 5 5 5 5 5 5 7 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 5 7 5 5 5 5 5 5 5 7 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 5 7 5 5 5 5 5 5 5 7 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 5 7 5 5 5 5 5 5 5 7 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`)
// hippity hoppity this makes you stoppity
scene.setTile(5, img`
7 7 f f f f f f f f f f f 7 7 7 
7 f 4 4 5 5 5 5 5 5 5 4 4 f 7 7 
f 4 4 5 5 5 5 1 1 1 1 5 5 4 f 7 
f 4 5 5 5 5 5 5 5 5 1 1 5 5 4 f 
f 4 5 5 5 5 5 5 5 5 5 5 1 5 5 f 
f 4 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 4 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 4 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 4 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 4 4 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 4 4 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 4 4 4 5 5 5 5 5 5 5 5 5 5 5 f 
f e 4 4 4 4 5 5 5 5 5 5 5 5 4 f 
f e 4 4 4 4 4 4 4 5 5 5 5 4 4 f 
7 f e 4 4 4 4 4 4 4 4 4 4 4 f 7 
7 7 f f f f f f f f f f f f 7 7 
`, true)
mySprite = sprites.create(img`
. c f c b c f f c f c b c f c . 
. b f f c 4 4 4 c 4 4 c f f b . 
. f f c 4 5 5 5 5 5 5 4 c f f . 
. b f b 5 5 1 5 1 1 1 1 b f b . 
. f f 4 5 b 5 b 5 5 b 5 4 f f . 
. . f 4 b 4 c 4 f c 4 b 4 f . . 
. . f 4 b d f 1 1 f d b 4 f . . 
. . b c 4 d c 1 1 c d 4 c b . . 
. . . f 5 4 d d d d 4 5 f . . . 
. . . . c f f f f f f c . . . . 
. . . f f c 5 e e 5 c f f . . . 
. . c f f e 4 e e 4 e f f c . . 
. . f d f 5 5 5 b 4 4 f d f . . 
. . f 4 f 4 4 b 5 5 5 f 4 f . . 
. . . f c f f f f f f c f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
// move yo body freery
controller.moveSprite(mySprite)
// im following you now
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 1; index++) {
    mySprite2 = sprites.create(img`
. b f f f f f f f f f f f f b . 
b f c 2 2 2 2 2 2 2 2 2 2 c f b 
f c 3 d 1 1 1 1 1 1 1 1 d 3 c f 
f 2 d 3 2 2 2 2 2 2 2 2 3 d 2 f 
f 2 d 2 2 b d 1 1 d b 2 2 d 2 f 
f 2 1 2 2 d 2 2 2 b 1 2 2 d 2 f 
f 2 1 2 2 1 2 2 2 2 1 2 2 1 2 f 
f c 1 2 2 1 2 2 2 b d 2 2 1 c f 
f c d 2 2 d 1 1 1 d b 2 2 1 c f 
f c d 2 2 d 2 2 2 2 2 2 2 d c f 
f c d 2 2 d 2 2 2 2 2 2 2 d c f 
f c d 2 2 b 2 2 2 2 2 2 2 d c f 
f c d 3 2 2 2 2 2 2 2 2 3 d c f 
f c 3 d d d d d d d d d d 3 c f 
b f c c c c c c c c c c c c f b 
. b f f f f f f f f f f f f b . 
`, SpriteKind.Food)
    mySprite2.setPosition(152, 24)
}
for (let index = 0; index < 1; index++) {
    flag = sprites.create(img`
. . . . . . . f 2 . . . . . . . 
. . . . . . . f 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 2 . . . 
. . . . . . . f 2 2 2 2 2 2 . . 
. . . . . . . f 2 2 2 2 2 2 2 . 
. . . . . . . f 2 2 2 2 2 2 . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
`, SpriteKind.win)
    flag.setPosition(455, 76)
}
