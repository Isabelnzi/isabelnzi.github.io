var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('"Jeune développeuse web curieuse et organisée. Ayant un bon sens du relationnel."')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('altered!')
    .start();
