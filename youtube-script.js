
(() => {
    if(typeof window.Video_Shot === "undefined"){

        const canvas = document.createElement('canvas');
        const body   = document.querySelector('body');
        const ctx    = canvas.getContext('2d');
        const video = document.querySelector('video');
        body.appendChild(canvas);
        canvas.style.position = "fixed";
        canvas.style.top = '0px';
        canvas.style.left = '0px';
        canvas.style.zIndex = "1000000";
        canvas.style.maxWidth = "200px";
        canvas.style.maxHeight = "100px;";

        window.Video_Shot = {
            canvas: canvas,
            ctx: ctx,
            body: body,
            video: video
        }

    
    
    window.Video_Shot.canvas.height = video.videoHeight;
    window.Video_Shot.canvas.width = video.videoWidth;
    
    video.addEventListener('play', function () {
        window.Video_Shot.canvas.height = this.videoHeight;
        window.Video_Shot.canvas.width = this.videoWidth;
        var $this = this; //cache
        (function loop() {
            if (!$this.paused && !$this.ended) {
                window.Video_Shot.ctx.drawImage($this, 0, 0);
                setTimeout(loop, 1000 / 60); // drawing at 30fps
            }
        })();
    }, 0);
    }
})();
console.log('I am in');
