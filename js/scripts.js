$(document).ready(function() {
    function close_faq_section() {
        $('.faq .faq-section-title').removeClass('active');
        $('.faq .faq-content').slideUp(300).removeClass('open');
    }
    $('.faq .faq-section-title').click(function(e){
    //Grab current anchor value
    var currVal = $(this).attr('href');
    
    if($(e.target).is('.active')){
        close_faq_section();
    }else {
        close_faq_section();
        
        //add active class
        $(this).addClass('active');
        
        //open up the panel
        $(currVal).slideDown(300).addClass('open');
    }
    
    e.preventDefault();

    });
    
    
});