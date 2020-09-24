
const scrolling = (upSelector) => {

    // Add and remove upPage button

    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
            upElem.classList.add("is-active", 'faded');
            upElem.classList.remove('fadeOut');
        }
        else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('faded', "is-active");
        }
    }
    );

    // Scrolling with requestAnimationFrame

    const links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

                console.log(widthTop);
                console.log(toBlock);

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });

};