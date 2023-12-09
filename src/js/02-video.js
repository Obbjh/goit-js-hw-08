
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);

player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });