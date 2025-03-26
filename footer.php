



<script src="assets/gsap-business/minified/gsap.min.js"></script> 
<script src="assets/gsap-business/minified/ScrollTrigger.min.js"></script> 
<script src="assets/gsap-business/minified/SplitText.min.js"></script> 
<script src="assets/gsap-business/minified/MotionPathPlugin.min.js"></script> 
<script src="assets/gsap-business/minified/TextPlugin.min.js"></script> 
<script src="assets/gsap-business/minified/ScrollSmoother.min.js"></script> 
<script src="assets/gsap-business/minified/GSDevTools.min.js"></script> 
<script src="assets/gsap-business/minified/ScrollToPlugin.min.js"></script> 


<script src="assets/js/lib/jquery.min.js"></script>
<script src="assets/js/common.js"></script>

<script>
    $('.play_btn').click(function(e) {

        $(this).siblings(".keepIt").hide()
        e.preventDefault();
        e.stopPropagation();
    
        $('.editionSection video').each(function() {
            this.pause();
            this.currentTime = 0;
        });
    
        $(this).hide();
        $(this).closest('.editionSection').find('.edition_poster').hide();
    
        var videoToPlay = $(this).closest('.editionSection').find('video')[0];
        if (videoToPlay) {
            videoToPlay.play();
        }
    
        var iframeToPlay = $(this).closest('.editionSection').find('iframe');
        if (iframeToPlay.length) {
            var iframe = iframeToPlay[0];
            var src = $(iframe).attr('src');
            if (!src.includes('autoplay=1')) {
                $(iframe).attr('src', src + '&autoplay=1');
            }
        }
    });
    $('.editionSection video').click(function() {
        this.pause();
        $(this).siblings(".keepIt").show()
        $('.play_btn').show();
        $('.edition_poster').show();
    });


</script>