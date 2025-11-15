
// THIS COMMENT IS THE CORRECt CODE FOR IMPLEMENTATION

//const btnScrollToTop = document.querySelector('#btnScrollToTop');

//btnScrollToTop.addEventListener("click", function () {
//    window.scrollTo({ top: 0, behavior: "smooth" });
//});


// THIS CODE IS RELATIVE TO THE ENVIRONMENT OF THIS SITE
const container = document.querySelector('.scroll-container');
const btnScrollToTop = document.querySelector('#btnScrollToTop');

btnScrollToTop.addEventListener('click', () => {
    container.scrollTo({ top: 0, behavior: 'smooth' });
});
