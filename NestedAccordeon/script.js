// TO OPEN THE ACCORDION:
// what event should I listen for?'CLICK'
// What element should wlisten for that event? 'cbp-nttrigger'
// _.forEach(document.querySelectorAlL(".cbp-nttrigger"), function(element){
//   // what should i do when that event fires?
//   element.addEventListener('click', function()){
//     //  1.Toggle 'cbp-ntopen' from parent '<li>' element
//     element.parentElement.classList.toggle('cbp-ntopen');
//   });
//
// });

//jQuery:
$('.cbp-nttrigger').on('click', function(event){
    $(event.target).parent().toggleClass('cbp-ntopen');
});






// // Just a tracer...
// // alert("It's alive!");
// // debugger;
//
// document.head.parentElement.className = "js"; // It's alive!
// // the only style applied there is the mickey mouse hand, is a trigger that
// //we always want to click in to give us the accordion
// var elements = document.querySelectorAll('.cbp-nttrigger');
// //
// // elements[0].addEventListener('click', function(){
// //     elements[0].parentElement.classList.toggle('cbp-ntopen');
// // });
// //
// // elements[1].addEventListener('click', function(){
// //     elements[1].parentElement.classList.toggle('cbp-ntopen');
// // });
//
// // WHY JAVASCRIPT WHY!?!?
// // for ( var index = 0; index < elements.length; index++ ){
// //     var element = elements[index]
// //     element.addEventListener('click', function(){
// //         console.log(elements, index, element);
// //         element.parentElement.classList.toggle('cbp-ntopen');
// //     });
// // }
// // console.log(index);
//
// _.forEach(elements, function(element, index, elements){
//     element.addEventListener('click', function(){
//       //  console.log(elements, index, element);
//         element.parentElement.classList.toggle('cbp-ntopen');
// 				// this above is the callback
//     });
// });
//
// /**
//  * jquery.cbpNTAccordion.js v1.0.0
//  * http://www.codrops.com
//  *
//  * Licensed under the MIT license.
//  * http://www.opensource.org/licenses/mit-license.php
//  *
//  * Copyright 2013, Codrops
//  * http://www.codrops.com
//  */
// ;( function( $, window, undefined ) {
//
// 	'use strict';
//
// 	// global
// 	var $body = $( 'html, body' );
//
// 	$.CBPNTAccordion = function( options, element ) {
// 		this.$el = $( element );
// 		this._init( options );
// 	};
//
// 	// the options
// 	$.CBPNTAccordion.defaults = {};
//
// 	$.CBPNTAccordion.prototype = {
// 		_init : function( options ) {
// 			// options
// 			this.options = $.extend( true, {}, $.CBPNTAccordion.defaults, options );
// 			// cache some elements and initialize some variables
// 			this._config();
// 			// initialize/bind the events
// 			this._initEvents();
// 		},
// 		_config : function() {
//
// 			// the clickable items
// 			this.$items = this.$el.find( '.cbp-nttrigger' );
//
// 		},
// 		_initEvents : function() {
//
// 			this.$items.on( 'click.cbpNTAccordion', function() {
// 				var $listItem = $( this ).parent();
// 				if( $listItem.hasClass( 'cbp-ntopen' ) ) {
// 					$listItem.removeClass( 'cbp-ntopen' );
// 				}
// 				else {
// 					$listItem.addClass( 'cbp-ntopen' );
// 					$body.scrollTop( $listItem.offset().top );
// 				}
// 			} );
//
// 		},
// 		destroy : function() {
// 			this.$items.off( '.cbpNTAccordion' ).parent().removeClass( 'cbp-ntopen' );
// 		}
// 	};
//
// 	var logError = function( message ) {
// 		if ( window.console ) {
// 			window.console.error( message );
// 		}
// 	};
//
// 	$.fn.cbpNTAccordion = function( options ) {
// 		if ( typeof options === 'string' ) {
// 			var args = Array.prototype.slice.call( arguments, 1 );
// 			this.each(function() {
// 				var instance = $.data( this, 'cbpNTAccordion' );
// 				if ( !instance ) {
// 					logError( "cannot call methods on cbpNTAccordion prior to initialization; " +
// 					"attempted to call method '" + options + "'" );
// 					return;
// 				}
// 				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
// 					logError( "no such method '" + options + "' for cbpNTAccordion instance" );
// 					return;
// 				}
// 				instance[ options ].apply( instance, args );
// 			});
// 		}
// 		else {
// 			this.each(function() {
// 				var instance = $.data( this, 'cbpNTAccordion' );
// 				if ( instance ) {
// 					instance._init();
// 				}
// 				else {
// 					instance = $.data( this, 'cbpNTAccordion', new $.CBPNTAccordion( options, this ) );
// 				}
// 			});
// 		}
// 		return this;
// 	};
//
// )}( jQuery, window );
