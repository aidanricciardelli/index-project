$(document).ready(function () {
    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to append the content to the end with a random color
    function appendContent() {
        const originalContent = $('#content').html();
        const randomColor = getRandomColor();
        const appendedContent = '<div class="appendedContent" style="color: ' + randomColor + ';">' + originalContent + '</div>';
        $('body').append(appendedContent);
    }

    // Call appendContent every second
    setInterval(appendContent, 1000);
});