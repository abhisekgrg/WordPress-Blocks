<?php
// This file is generated. Do not modify it manually.
return array(
	'button' => array(
		'apiVersion' => 2,
		'name' => 'aerpn/button',
		'title' => 'aerpn/button',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'A custom block with inner blocks.',
		'parent' => array(
			'aerpn/main-component'
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true,
				'background' => true,
				'gradients' => true,
				'link' => true
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true
			),
			'border' => array(
				'color' => true,
				'style' => true,
				'width' => true,
				'radius' => true
			)
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string'
			),
			'useThemeStyle' => array(
				'type' => 'boolean',
				'default' => true
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'FontSize' => array(
				'type' => 'number'
			),
			'LetterSpacing' => array(
				'type' => 'number',
				'default' => 1
			),
			'LineHeight' => array(
				'type' => 'number'
			),
			'FontFamily' => array(
				'type' => 'string'
			),
			'FontWeight' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'aerpn',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'container' => array(
		'apiVersion' => 2,
		'name' => 'aerpn/container',
		'title' => 'Container',
		'category' => 'widgets',
		'icon' => 'edit',
		'description' => 'A simple text block.',
		'supports' => array(
			'html' => false,
			'innerBlocks' => true,
			'color' => array(
				'background' => true,
				'text' => false
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true
			)
		),
		'attributes' => array(
			'useThemeStyle' => array(
				'type' => 'boolean',
				'default' => true
			),
			'width' => array(
				'type' => 'string',
				'default' => '1200px'
			)
		),
		'textdomain' => 'aerpn',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'main-component' => array(
		'apiVersion' => 2,
		'name' => 'aerpn/main-component',
		'title' => 'Main component',
		'category' => 'widgets',
		'icon' => 'edit',
		'description' => 'A simple text block.',
		'supports' => array(
			'html' => false,
			'innerBlocks' => true
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p'
			),
			'heading' => array(
				'type' => 'string',
				'default' => '50px'
			)
		),
		'textdomain' => 'aerpn',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'text' => array(
		'apiVersion' => 2,
		'name' => 'aerpn/heading',
		'title' => 'aerpn/heading',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'A custom block with inner blocks.',
		'parent' => array(
			'aerpn/main-component'
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true,
				'background' => false
			),
			'spacing' => array(
				'padding' => true,
				'margin' => true
			)
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string'
			),
			'headingLevel' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'useThemeStyle' => array(
				'type' => 'boolean',
				'default' => true
			),
			'FontSize' => array(
				'type' => 'number'
			),
			'LetterSpacing' => array(
				'type' => 'number',
				'default' => 1
			),
			'LineHeight' => array(
				'type' => 'number'
			),
			'FontFamily' => array(
				'type' => 'string'
			),
			'FontWeight' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'aerpn',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
