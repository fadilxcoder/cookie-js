var ready = function(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState != 'loading') {
                fn();
            }
        });
    }
    return;
};

/**
 * If loaded DOM elements
 **/
ready(function() {
    var cookiebar = new Cookiebar({
        debug: 0,
        id: "cookiebar",
        cls: "cookiebar",
        cookie: "cookiebar",
        content: {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget diam cursus, interdum elit in, finibus augue. Morbi lacinia lacinia suscipit. Donec tempor non lacus iaculis pulvinar. Maecenas vitae sapien non neque posuere dictum. Morbi lorem enim, sodales id posuere quis, porttitor quis est. Sed laoreet, nibh sed condimentum aliquet, quam justo fringilla sem, in congue mi nisl aliquam sem. ",
            link: "Read more",
            href: "https://lipsum.com/feed/html",
            button: "Accept",
            more: "..."
        },
        fade: {
            type: "in",
            ms: "500",
            display: "inline"
        },
    });
});
