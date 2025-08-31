let menu = document.getElementsByClassName( 'nav' );
// Values are set.
if ( menu ) {
  
  // HOVER
  let menu_slider_hover = document.getElementById( 'nav_slide_hover' );
  if ( menu_slider_hover ) {
    nav_slider( menu[0], function( el, width, tempMarginLeft ) {                          
      el.onmouseover = () => {
        menu_slider_hover.style.width =  width + '%';                    
        menu_slider_hover.style.marginLeft = tempMarginLeft + '%';    
      }
    });
  }
}