! function( s ) {
	var i = null;

	function e( a ) {
		s( [ document.documentElement, document.body ] )
			.animate( {
				scrollTop: s( a )
					.offset()
					.top - 110
			}, 1e3 )
	}
	s( "a[href*=\\#]" )
		.on( "click", function( a ) {
			var i = s( this )
				.attr( "href" );
			return "#" == i ? ( e( "main" ), !1 ) : this.pathname !== window.location.pathname || ( e( i.substr( i.indexOf( "#" ) ) ), !1 )
		} ), s( window )
		.scroll( function() {
			50 <= s( window )
				.scrollTop() ? s( "#header.home" )
				.removeClass( "top" ) : s( "#header" )
				.addClass( "top" )
		} ), s( ".menu-toggle" )
		.on( "click", function() {
			return s( "#header" )
				.toggleClass( "open" ), !1
		} ), s( "#header .main-menu a" )
		.on( "click", function() {
			s( "#header" )
				.removeClass( "open" )
		} ), s( ".wpcf7-form-control-wrap>*" )
		.on( "focus", function() {
			s( this )
				.parent()
				.addClass( "focused" )
		} ), s( ".wpcf7-form-control-wrap>*" )
		.on( "blur", function() {
			s( this )
				.val() || s( this )
				.parent()
				.removeClass( "focused" )
		} ), s( ".wpcf7-form-control-wrap>*" )
		.on( "change", function() {
			s( this )
				.val() && s( this )
				.parent()
				.addClass( "focused" )
		} ), s( document )
		.ready( function() {
			s( "[data-image-src]" )
				.each( function() {
					var a = "data-image-src"
						, i = s( window )
						.width();
					i <= 384 && s( this )
						.is( "[data-s-image-src]" ) ? a = "data-s-image-src" : i <= 512 && s( this )
						.is( "[data-m-image-src]" ) ? a = "data-m-image-src" : i <= 768 && s( this )
						.is( "[data-l-image-src]" ) ? a = "data-l-image-src" : i <= 1024 && s( this )
						.is( "[data-xl-image-src]" ) && ( a = "data-xl-image-src" );
					a = s( this )
						.attr( a );
					void 0 !== a && !1 !== a && s( this )
						.css( "background-image", "url('" + a + "')" )
				} ), s( "[data-mask-src]" )
				.each( function() {
					var a = s( this )
						.attr( "data-mask-src" );
					s( this )
						.css( "mask-image", "url('" + a + "')" ), s( this )
						.css( "-webkit-mask-image", "url('" + a + "')" )
				} ), s( "#vyhody .slider" )
				.slick( {
					slidesToShow: 1
					, slidesToScroll: 1
					, arrows: !1
					, dots: !0
					, infinite: !1
					, autoplay: s( "#vyhody .slider" )
						.is( "[data-autoplay]" )
					, autoplaySpeed: s( "#vyhody .slider" )
						.data( "autoplay" )
				} ), s( ".vis-video-wrapper a" )
				.on( "click", function() {
					return s( this )
						.hasClass( "playing" ) ? s( ".vis-video-wrapper video" )[ 0 ].pause() : s( ".vis-video-wrapper video" )[ 0 ].play(), s( this )
						.toggleClass( "playing" ), !1
				} ), s( "#uvod a.video" )
				.on( "click", function() {
					return e( "#vizualizacia" ), setTimeout( function() {
						s( "#vizualizacia .vis-video-wrapper a" )
							.hasClass( "playing" ) || s( "#vizualizacia .vis-video-wrapper a" )
							.click()
					}, 500 ), !1
				} ), s( "#gallery-slider" )
				.slick( {
					slidesToShow: 2
					, slidesToScroll: 1
					, arrows: !1
					, infinite: !1
					, autoplay: s( "#gallery-slider" )
						.is( "[data-autoplay]" )
					, autoplaySpeed: s( "#gallery-slider" )
						.data( "autoplay" )
					, pauseOnHover: !1
					, responsive: [ {
						breakpoint: 450
						, settings: {
							slidesToShow: 1
						}
					} ]
				} ), s( "#lokalita-projektu .slider" )
				.slick( {
					slidesToShow: 1
					, slidesToScroll: 1
					, arrows: !1
					, infinite: !0
					, autoplay: s( "#lokalita-projektu .slider" )
						.is( "[data-autoplay]" )
					, autoplaySpeed: s( "#lokalita-projektu .slider" )
						.data( "autoplay" )
					, pauseOnHover: !1
					, responsive: [ {
						breakpoint: 991
						, settings: {
							slidesToShow: 2
						}
					}, {
						breakpoint: 450
						, settings: {
							slidesToShow: 1
						}
					} ]
				} ), s( "#gallery-slider, #lokalita-projektu .slider" )
				.hover( function() {
					null === i && ( i = s( '<div id="slider-cursor"></div>' )
						.appendTo( s( "body" ) ) ), i.show()
				}, function() {
					i.hide()
				} )
				.mousemove( function( a ) {
					i.css( "left", a.pageX + "px" ), i.css( "top", a.pageY - s( document )
						.scrollTop() + "px" )
				} ), s( "#dispozicia-projektu .tabs a" )
				.on( "click", function() {
					var a = s( this )
						.parents( ".section-inner" );
					return s( "img.plan", a )
						.hide(), s( "#" + s( this )
							.attr( "href" ) )
						.show(), s( ".tabs a", a )
						.removeClass( "active" ), s( this )
						.addClass( "active" ), !1
				} )
		} )
}( jQuery );