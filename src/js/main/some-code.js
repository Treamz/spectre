$(window).on('load', function () { // makes sure the whole site is loaded 
	$('#status').fadeOut(); // will first fade out the loading animation 
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
	$('body').delay(350).css({
		'overflow': 'visible'
	});
	$('#slider').focus();
	//checkScroll(); // Arrows for scroll
})

const modalWrapper = document.getElementById('presentModal');
const $slider = $("#slider");
var mainSlider = () => {
	$slider
		.on('init', () => {
			//mouseWheel($slider)
		})
		.slick({
			speed: 900,
			arrows: false,
			dots: false,
			vertical: false,
			infinite: true,
			// responsive: [
			//         {
			//             breakpoint: 500,
			//             settings: "unslick"
			//         }
			//     ]
		})

	function mouseWheel($slider) {
		$('#slider').on('wheel', {
			$slider: $slider
		}, mouseWheelHandler)
	}

	function mouseWheelHandler(event) {
		event.preventDefault()
		const $slider = event.data.$slider
		const delta = event.originalEvent.deltaY

		if (delta > 0) {
			$slider.slick('slickPrev')
		} else {
			$slider.slick('slickNext')
		}



	};
}





$(".single-item").slick({});

//const verticalArrow = document.getElementById('arrowsblock');
const verticalArrow = document.querySelectorAll('#arrowsblock');
const isScroll = document.querySelectorAll('.centered');
// verticalArrow.addEventListener('click',function(event){
// 	if (event.target.className == 'arrUp') {
// 		console.log(event.target.className);
// 		verticalArrow.parentElement.childNodes[3].scrollTop += -20;
// 	}
// 	else {
// 		verticalArrow.parentElement.childNodes[3].scrollTop += 20;
// 	}

// })

function checkScroll() {
	for (var i = 0; i < isScroll.length; i++) {
		console.log('All', isScroll[i]);
		if (isScroll[i].clientHeight < isScroll[i].scrollHeight) {
			let scrollableBlock = isScroll[i];
			console.log('This can be scrollable', scrollableBlock);
			let scrollArrows = scrollableBlock.previousElementSibling;
			scrollArrows.classList.add('visible');
			scrollArrows.addEventListener('click', (event) => {
				if (event.target.className == 'arrUp') {
					console.log(event.target.className);
					scrollableBlock.scrollTop += -20;
				} else {
					scrollableBlock.scrollTop += 20;
				}
			});

		}
	}
}
// for(var i = 0; i < verticalArrow.length; i++) {
// 	let arrows = verticalArrow[i];
// 	if(arrows.parentElement.childNodes[3].clientHeight < arrows.parentElement.childNodes[3].scrollHeight) {
// 		console.log(arrows.parentElement.childNodes[3].style.display = 'flex');
// 		arrows.addEventListener('click',function(event){
// 			if (event.target.className == 'arrUp') {
// 				console.log(event.target.className);
// 				arrows.parentElement.childNodes[3].scrollTop += -20;
// 			}
// 			else {
// 				arrows.parentElement.childNodes[3].scrollTop += 20;
// 			}

// 		});
// 	}

// }


const presentLoader = document.createElement('div');
presentLoader.id = "presentLoader";
presentLoader.innerHTML = '<img src="svg/loaderPresent.svg" alt="Loading..." id="pLoader">';

const presentFirst = document.getElementById('web_1');
const presentSecond = document.getElementById('web_2');
const presentThird = document.getElementById('web_3');
presentFirst.addEventListener('click', () => {
	createModal('img/web_presentationfull_1.png');
	presentLoader.classList.add('open');
	presentFirst.parentElement.appendChild(presentLoader);

});

presentSecond.addEventListener('click', () => {
	createModal('img/web_presentationfull_2.png');
	presentLoader.classList.add('open');
	presentSecond.parentElement.appendChild(presentLoader);

});

presentThird.addEventListener('click', () => {
	createModal('img/web_presentationfull_3.png');
	presentLoader.classList.add('open');
	presentThird.parentElement.appendChild(presentLoader);

});


function createModal(fullimg) {

	let fullPresent = new Image();
	fullPresent.src = fullimg;
	modalWrapper.lastElementChild.appendChild(fullPresent);
	fullPresent.addEventListener("load", function () {
		console.log('loaded');
		$('body').css("overflow", "hidden");
		modalWrapper.classList.toggle('open');
		presentLoader.classList.remove('open');
	}, false);



}

closeModal.addEventListener('click', () => {
	console.log('close');
	$('body').css("overflow", "inherit");
	modalWrapper.classList.toggle('open');
	modalWrapper.lastElementChild.lastChild.remove();
});


// //Firefox
// $('#presentModal > .modal').bind('DOMMouseScroll', function(e){
// 	if(e.originalEvent.detail > 0) {
// 		//scroll down
// 		console.log('Down');
// 	}else {
// 		//scroll up
// 		console.log('Up');
// 	}

// 	//prevent page fom scrolling
// 	return false;
// });

// //IE, Opera, Safari
// $('#presentModal > .modal').bind('mousewheel', function(e){
// 	if(e.originalEvent.wheelDelta < 0) {
// 		//scroll down
// 		console.log(this.scrollTop)
// 		let scrll = modalWrapper.firstElementChild.scrollTop;

// 		$('#presentModal > .modal').animate({ scrollTop: scrll + 100 }, 300);


// 	}else {
// 		//scroll up
// 		console.log('Up');
// 	}

// 	//prevent page fom scrolling
// 	return false;
// });

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var isIpad = /iPad/i.test(navigator.userAgent);

$(document).ready(function () {
	console.log("ready!");
	mainFunc();

	$(window).resize(function () {
		//$slider.slick('unslick');
		//mainFunc();
		var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		var isIpad = /iPad/i.test(navigator.userAgent);
		if (isMobile) {
			console.log('Resize Mobile');
			if ($slider.hasClass('slick-initialized')) {
				$slider.slick('unslick');
				console.log('has class');
				$('a').click(function () {
					$('html, body').animate({
						scrollTop: ($($.attr(this, 'href')).offset().top - 50)
					}, 500);
					return false;
				});
		
				$('.nav__logo a, .nav__side a, .pane__nav a').click((event) => {
					//event.preventDefault(); 
					console.log('clicked logo', $(this));
					// console.log($(this).attr("href"));
					// // document.querySelector(this.getAttribute('href')).scrollIntoView({
					// // 	behavior: 'smooth'
					// // });
					if ($('#navbar').hasClass('nav-open')) {
						$('body').css("overflow", "inherit");
						$('nav').toggleClass('nav-open');
					}
		
				});
			}
		}
		if (isIpad) {
			console.log('Resize IPAD');
			if (!$slider.hasClass('slick-initialized')) {
				mainSlider();
				$('li[data-slide], a[data-slide]').click(function (e) {
					e.preventDefault();
					var slideno = $(this).data('slide');
					$('#slider').slick('slickGoTo', slideno - 1);
					$('nav').toggleClass('nav-open');
				});
			}


		}
		if (!isMobile) {
			console.log('Resize Desktop');
			if (!$slider.hasClass('slick-initialized')) {
				mainSlider();
				var prevActive;
				$('li[data-slide], a[data-slide]').click(function (e) {
					e.preventDefault();

					var slideno = $(this).data('slide');
					console.log(slideno);
					$('#slider').slick('slickGoTo', slideno - 1);
					if (slideno > 2 && slideno < 10) {
						$('#pane_nav a').eq(prevActive).removeClass("linkactive");
						$('#pane_nav a').eq(slideno - 3).addClass("linkactive");

						prevActive = slideno - 3;
					}

				});
			}
		}


	});

});

//var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


var mainFunc = () => {
	$('.nav-burger').click(function () {
		if (isMobile) {
			console.log('mobile')
			if ($('#navbar').hasClass('nav-open')) {
				console.log('close nav');
				$('body').css("overflow", "inherit");
			} else {
				$('body').css("overflow", "hidden");
			}
		}

		$('nav').toggleClass('nav-open');

	});

	if (!isMobile) {
		mainSlider();
		var prevActive;
		$('li[data-slide], a[data-slide]').click(function (e) {
			e.preventDefault();

			var slideno = $(this).data('slide');
			console.log(slideno);
			$('#slider').slick('slickGoTo', slideno - 1);
			if (slideno > 2 && slideno < 10) {
				$('#pane_nav a').eq(prevActive).removeClass("linkactive");
				$('#pane_nav a').eq(slideno - 3).addClass("linkactive");

				prevActive = slideno - 3;
			}

		});

		console.log('ne mobile');



	} else if (isIpad) {
		mainSlider();
		$('li[data-slide], a[data-slide]').click(function (e) {
			e.preventDefault();
			var slideno = $(this).data('slide');
			$('#slider').slick('slickGoTo', slideno - 1);
			$('nav').toggleClass('nav-open');
		});

	} else if (isMobile) {
		$('a').click(function () {
			$('html, body').animate({
				scrollTop: ($($.attr(this, 'href')).offset().top - 50)
			}, 500);
			return false;
		});

		$('.nav__logo a, .nav__side a, .pane__nav a').click((event) => {
			//event.preventDefault(); 
			console.log('clicked logo', $(this));
			// console.log($(this).attr("href"));
			// // document.querySelector(this.getAttribute('href')).scrollIntoView({
			// // 	behavior: 'smooth'
			// // });
			if ($('#navbar').hasClass('nav-open')) {
				$('body').css("overflow", "inherit");
				$('nav').toggleClass('nav-open');
			}

		});

	}
}


$(document).ready(function () {
	$('#form').submit(function () { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)

		if (false) {
			valid = false;
			console.log(valid)
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail/mail.php",
			data: $(this).serialize()
		}).done(function () {
			//alert(1);
			$('#form-message-succesfull').css("display", "flex")
				.hide()
				.fadeIn();
			//alert('ok');
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});


	$('#form-message-succesfull').click(function () { // по клику на крестик
		$('#form-message-succesfull').fadeOut();
	});

});