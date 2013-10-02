//Set up the color pickers to work with our text input field
jQuery(document).ready(function() {
    //This if statement checks if the color picker widget exists within jQuery UI
    //If it does exist then we initialize the WordPress color picker on our text input field
    if ( typeof jQuery.wp === 'object' && typeof jQuery.wp.wpColorPicker === 'function' ) {
        jQuery('#player_color, #background_color, #text_color').wpColorPicker();
    } else { //We use farbtastic if the WordPress color picker widget doesn't exist
        jQuery('#player_color_picker').farbtastic('#player_color');
        jQuery('#background_color_picker').farbtastic('#background_color');
        jQuery('#text_color_picker').farbtastic('#text_color');
    }
});
