<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Prepare block attributes with defaults
$attributes    = isset( $attributes ) ? $attributes : [];
$heading       = isset( $attributes['heading'] ) ? $attributes['heading'] : '';
$borderRadius  = isset( $attributes['borderRadius'] ) ? intval( $attributes['borderRadius'] ) : 0;
$useThemeStyle = isset( $attributes['useThemeStyle'] ) ? (bool) $attributes['useThemeStyle'] : true;
$FontSize      = isset( $attributes['FontSize'] ) ? $attributes['FontSize'] : null;
$FontFamily    = isset( $attributes['FontFamily'] ) ? $attributes['FontFamily'] : '';
$FontWeight    = isset( $attributes['FontWeight'] ) ? $attributes['FontWeight'] : '';
$LineHeight    = isset( $attributes['LineHeight'] ) ? $attributes['LineHeight'] : null;
$LetterSpacing = isset( $attributes['LetterSpacing'] ) ? $attributes['LetterSpacing'] : null;

// Determine wrapper class
$class_name = $useThemeStyle ? 'disable-support-styles' : '';

// Build inline styles when theme styles are disabled
$style_pieces = [];
if ( ! $useThemeStyle ) {
    if ( $FontSize !== null ) {
        $style_pieces[] = sprintf( 'font-size:%spx;', esc_attr( $FontSize ) );
    }
    if ( $FontFamily !== '' ) {
        $style_pieces[] = sprintf( 'font-family:%s;', esc_attr( $FontFamily ) );
    }
    if ( $FontWeight !== '' ) {
        $style_pieces[] = sprintf( 'font-weight:%s;', esc_attr( $FontWeight ) );
    }
    if ( $LineHeight !== null ) {
        $style_pieces[] = sprintf( 'line-height:%s;', esc_attr( $LineHeight ) );
    }
    if ( $LetterSpacing !== null ) {
        $style_pieces[] = sprintf( 'letter-spacing:%spx;', esc_attr( $LetterSpacing ) );
    }
    if ( $borderRadius > 0 ) {
        $style_pieces[] = sprintf( 'border-radius:%spx;', esc_attr( $borderRadius ) );
    }
}
$style = implode( ' ', $style_pieces );

// Merge inline styles and class into block wrapper
$wrapper_attributes = get_block_wrapper_attributes([
    'class' => $class_name,
    'style'     => $style,
]);

// Render the button
printf(
    '<button %1$s>%2$s</button>',
    $wrapper_attributes,
    esc_html( $heading )
);
