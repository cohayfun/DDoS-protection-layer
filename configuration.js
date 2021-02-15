/*
 * Configuration global common
 * Copyright (c) 2021 Muhammad Nurcahyo Pratomo
 *
 * Licensed under the MIT
 * 	http://www.opensource.org/licenses/mit-license.php
 *
 *	@activeMode
 *	activeMode is for active DDoS protected
 *	value parsing : (TRUE|FALSE)
 *	Default : TRUE
 *	
 *	@ipShow
 *	ipShow is for show IP client
 *	value parsing : (TRUE|FALSE)
 *	Default : TRUE
 *	
 *	@dnsShow
 *	dnsShow is for show IP client
 *	value parsing : (TRUE|FALSE)
 *	Default : TRUE
 *	
 *	@directLoopUP
 *	directLoopUP is redirect to your base domain name host
 *	value parsing : (INTEGER)
 *	Default : 5
 *	
 *	@backgroundColor
 *	backgroundColor is background color layer
 *	value parsing : (HEX COLOR|COLOR NAME)
 *	Default : #fff
 *	
 *	@textColor
 *	textColor is redirect to your base domain name
 *	value parsing : (HEX COLOR|COLOR NAME)
 *	Default : #00008b
 *	
 *	@copyright
 *	copyright is redirect to your base domain name
 *	value parsing : (TEXT)
 *	Default : Your name company
 */

/* Configuration variable */
var activeMode = true;
var ipShow = true;
var dnsShow = true;
var directLoopUP = parseInt(5);
const backgroundColor = '#fff';
const textColor = '#00008b';
const copyright = 'Your name company';
