<?php
/**
 * Plugin Name:       Navigation Bar 1
 * Description:       This is a navigation bar block plugin.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Abhisekh Gurung
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       abhisek-navbar
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function create_block_abhisek_navbar_block_init() {
    if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
        wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
        return;
    }

    if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
        wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
    }

    $manifest_data = require __DIR__ . '/build/blocks-manifest.php';
    foreach ( array_keys( $manifest_data ) as $block_type ) {
        register_block_type( __DIR__ . "/build/{$block_type}" );
    }
}
add_action( 'init', 'create_block_abhisek_navbar_block_init' );

function abhisek_register_menus() {
    register_nav_menus([
        'primary' => 'Primary Menu',
        'footer'  => 'Footer Menu',
    ]);
}
add_action('after_setup_theme', 'abhisek_register_menus');

class Abhisek_Menu_API {
    public function __construct() {
        add_action( 'rest_api_init', array( $this, 'register_routes' ) );
    }

    public function register_routes() {
        register_rest_route( 'wp-navbar-1/v1', '/menus', array(
            'methods'             => 'GET',
            'callback'            => array( $this, 'get_menus' ),
            'permission_callback' => '__return_true',
        ) );

        register_rest_route( 'wp-navbar-1/v1', '/menus/(?P<slug>[a-zA-Z0-9-_]+)', array(
            'methods'             => 'GET',
            'callback'            => array( $this, 'get_menu_items' ),
            'permission_callback' => '__return_true',
        ) );
    }

    public function get_menus() {
        $menus = wp_get_nav_menus();
        $response = [];

        foreach ( $menus as $menu ) {
            $response[] = [
                'id'   => $menu->term_id,
                'name' => $menu->name,
                'slug' => $menu->slug,
            ];
        }

        return $response;
    }

    public function get_menu_items( $data ) {
        $menu_slug = $data['slug'];
        $menu = wp_get_nav_menu_object( $menu_slug );

        if ( ! $menu ) {
            return new WP_Error( 'no_menu', 'Menu not found', array( 'status' => 404 ) );
        }

        $items = wp_get_nav_menu_items( $menu->term_id );
        $response = [];

        foreach ( $items as $item ) {
            $response[] = [
                'id'    => $item->ID,
                'title' => $item->title,
                'url'   => $item->url,
            ];
        }

        return $response;
    }
}
new Abhisek_Menu_API();

// Register the block with a render callback
register_block_type( __DIR__ . '/build/navigation-bar-1', [
    'render_callback' => 'abhisek_navbar_render_callback'
]);
