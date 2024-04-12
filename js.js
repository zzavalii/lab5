document.addEventListener("DOMContentLoaded", function() {
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        var topPos = section.offsetTop - 100; 
        window.scrollTo({ top: topPos, behavior: 'smooth' });
    }

    document.querySelector('a[href="#section1"]').addEventListener("click", function(event) {
        event.preventDefault();
        scrollToSection("section1");
    });

    document.querySelector('a[href="#section2"]').addEventListener("click", function(event) {
        event.preventDefault();
        scrollToSection("section2");
    });

    document.querySelector('a[href="#section3"]').addEventListener("click", function(event) {
        event.preventDefault();
        scrollToSection("section3");
    });
});