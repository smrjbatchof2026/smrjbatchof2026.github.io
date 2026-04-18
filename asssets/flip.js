/**
 * BATCH OF 2026 - CINEMATIC FLIPBOOK ENGINE
 * Powered by Turn.js logic
 */

$(document).ready(function() {
    // 1. Initialize the Flipbook
    const flipbook = $('#my-flipbook');

    flipbook.turn({
        width: 1000,
        height: 600,
        autoCenter: true,
        duration: 1500, // Slow, cinematic page turns
        gradients: true,
        acceleration: true,
        elevation: 50,
        when: {
            turning: function(e, page, view) {
                // Play a subtle page-turn sound effect if available
                playFlipSound();
            }
        }
    });

    // 2. Keyboard Navigation for Accessibility
    $(window).bind('keydown', function(e) {
        if (e.keyCode === 37) flipbook.turn('previous');
        else if (e.keyCode === 39) flipbook.turn('next');
    });

    // 3. Page Generation Logic
    // In a real scenario, you would loop through your assets/pages/ folder
    function loadPages() {
        for (let i = 1; i <= 50; i++) {
            const pageElement = $('<div />', {
                class: 'page-content',
                html: `<div class="loader"></div>`
            });
            
            // Adding a class for left/right styling
            if (i % 2 === 0) pageElement.addClass('even');
            else pageElement.addClass('odd');

            flipbook.turn('addPage', pageElement);
        }
    }

    function playFlipSound() {
        const audio = new Audio('assets/sounds/page-flip.mp3');
        audio.volume = 0.2;
        audio.play().catch(() => { /* Silence errors if browser blocks autoplay */ });
    }
});