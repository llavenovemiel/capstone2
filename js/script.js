// window.onscroll = () => {
	
// 	const nav = document.querySelector(".super-nav");
// 	const banner = document.querySelector(".banner");

// 	if (isScrolledUp()) {
// 		if (this.scrollY > 70) {
// 			nav.style.position = "fixed";
// 			nav.style.top = "0";
// 			banner.style.marginTop = "66px";	
			
// 		}


// 	} else {
// 		nav.style.position = "relative";
// 		banner.style.marginTop = "0";
// 	}

// }

// function isScrolledUp (e) {
// 	isTrue = this.oldScroll > this.scrollY;
//   	this.oldScroll = this.scrollY;
//   	return isTrue;
// }


(function(){
	const hamburger = $('.hamburger');
	hamburger.click(()=>{
		// console.log(hamburger.text());
		if (hamburger.text()=="☰") hamburger.text("×");
		else hamburger.text("☰");
	})

})();

