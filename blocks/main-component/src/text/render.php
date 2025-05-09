<?php

// Build dynamic block wrapper with merged styles
$HeadingTag    = isset( $attributes['headingLevel'] ) ? $attributes['headingLevel'] : 'h2';
$allowed_tags  = [ 'h1','h2','h3','h4','h5','h6','p' ];
$tag           = in_array( $HeadingTag, $allowed_tags, true ) ? $HeadingTag : 'h2';


// Attributes with defaults
$Title         = isset( $attributes['heading'] ) ? $attributes['heading'] : 'A Tranquil Escape in Nature\'s Lap';
$FontSize      = isset( $attributes['FontSize'] ) ? $attributes['FontSize'] : 49;
$FontFamily    = isset( $attributes['FontFamily'] ) ? $attributes['FontFamily'] : '';
$FontWeight    = isset( $attributes['FontWeight'] ) ? $attributes['FontWeight'] : 500;
$LineHeight    = isset( $attributes['LineHeight'] ) ? $attributes['LineHeight'] : 'normal';
$LetterSpacing = isset( $attributes['LetterSpacing'] ) ? $attributes['LetterSpacing'] : 'normal';
$UseThemeStyle = array_key_exists( 'useThemeStyle', $attributes ) ? $attributes['useThemeStyle'] : true;

$class_name = $UseThemeStyle ? 'disable-support-styles' : '';
// Prepare inline CSS only if theme styles disabled
$style_attr = '';
if ( ! $UseThemeStyle ) {
	$style_attr = sprintf(
		'font-size:%spx; font-family:%s; font-weight:%s; line-height:%s; letter-spacing:%spx;',
		esc_attr( $FontSize ),
		esc_attr( $FontFamily ),
		esc_attr( $FontWeight ),
		esc_attr( $LineHeight ),
		esc_attr( $LetterSpacing )
	);
}

// Merge inline styles into block wrapper
$wrapper_attributes = get_block_wrapper_attributes(
	[
		'style' => $style_attr,
    'class' => $class_name,

	]
);

// Output block
printf(
	'<%1$s %2$s>%3$s</%1$s>',
	esc_html( $tag ),
	$wrapper_attributes,
	esc_html( $Title )
);