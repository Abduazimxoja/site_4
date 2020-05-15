// $(function() {
//     $('.portfolio__menu button').click(function() {
//         var get_id = this.id;
//         var get_current = $('.posts .' + get_id);

//         $('.post').not(get_current).hide(500);
//         get_current.show(500);
//     });

//     $('#all').click(function() {
//         $('.post').show(500);
//     });
// })

const anchors = document.querySelectorAll('a[href*="#"] ')

for (let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			bock: "start"
		})
	});
};

function fullScreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.webkitrequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.mozRequestFullscreen) {
    element.mozRequestFullScreen();
  }
}

// Для конкретного элемента на странице
var canvas = document.getElementById('BG');
fullScreen(canvas);