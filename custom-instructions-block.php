<?php
/**
 * Plugin Name: Custom Instructions Block
 * Description: A custom block for entering and displaying instructions in the WordPress admin, hidden on the frontend.
 * Version: 1.0
 * Author: Your Name
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Enqueue block editor assets.
function custom_instructions_block_enqueue_assets() {
    wp_enqueue_script(
        'custom-instructions-block-editor',
        plugins_url( 'block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
    );
}
add_action( 'enqueue_block_editor_assets', 'custom_instructions_block_enqueue_assets' ); 