const shopFooter = document.querySelector('#shop-footer');
const footerText = document.querySelector('#footer-text');

shopFooter.addEventListener('mouseenter', function() {
    this.style.backgroundImage = 'linear-gradient(180deg, #e22301, #e28801)';
    footerText.style.color = 'orange';

});

shopFooter.addEventListener('mouseleave', function() {
    this.style.backgroundImage = '';
    footerText.style.color = 'white';
});
