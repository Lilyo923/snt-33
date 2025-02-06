basic.forever(function () {
    music.play(music.createSoundExpression(
    WaveShape.Sine,
    200,
    600,
    255,
    0,
    150,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
