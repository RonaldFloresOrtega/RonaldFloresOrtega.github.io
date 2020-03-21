/*
Lazy loading with Intersetion Observer API
*/

function lazyload()
{
    observe();
    
}

function observe()
{
    if('IntersectionObserver' in window) {
        const imgOptions = {
            threshold: 0.5,
            root: null
        };


        let imagesToLoad = document.querySelectorAll('img[data-src]');
        const loadImages = (image) => {
            image.setAttribute('src', image.getAttribute('data-src'));
            image.onload = () => {
                image.removeAttribute('data-src');
            };
        };
        
        let callback = (items, observer) => {
            items.forEach((item) => {
                if(item.isIntersecting) {
                    loadImages(item.target);
                    observer.unobserve(item.target);
                }
            });
        }

        const observer = new IntersectionObserver(callback, imgOptions);

        imagesToLoad.forEach((img) => {
            observer.observe(img);
        });
    } else {
        imagesToLoad.forEach((img) => {
            loadImages(img);
        });
    }

}


