(function(window){
  var BASE_URL = 'http://lorempixel.com/400/200/food';

  function rando(limit){
    return Math.floor(Math.random() * limit);
  }

  function randoImage(){
    return BASE_URL + '?' + rando(1000);
  }

  $('img').attr('src', randoImage);
})(window);


$(document).ready(function(){
	$('.tabs ul').each(function(){
	    // For each set of tabs, we want to keep track of
	    // which tab is active and it's associated content
	    var $active, $content, $links = $(this).find('a');

	    // If the location.hash matches one of the links, use that as the active tab.
	    // If no match is found, use the first link as the initial active tab.
	    /*.hash is a property that can be found on elements that contain an href attribute/property.
	    the property consists of the #* portion of the url. For example, for the
	    url: http://www.thisurl.com/index.html#foo the hash is #foo*/

	    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
	    $content = $($active[0].hash);

	    // Hides the remaining content
	    $links.not($active).each(function () {
	      $(this.hash).hide();
	    });
			// Binds the tabs navigation event handler
			$('.tabs li').on('click', function (e) {
				e.preventDefault();
				$('li').removeClass('tab_active');
				$(this).addClass('tab_active');
			});
	    // Binds the click event handler
	    $(this).on('click', 'a', function(e){
	      // Make the old tab inactive.

	      $content.hide();

	      // Update the variables with the new link and content
	      $active = $(this);
	      $content = $(this.hash);

	      // Makes the tab active.
	      // $active.addClass('tab_active');
	      $content.show();

	      // Prevents the anchor's default click action. In other words: it will prevent the page to reload if there is nothing assign to the href.
	      e.preventDefault();
	    });
	  });
});
