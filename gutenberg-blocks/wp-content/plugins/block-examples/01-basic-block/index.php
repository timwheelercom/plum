<?php

defined( 'ABSPATH' ) || exit;

//add_action enqueue_block_editor_assets
add_action( 'enqueue_block_editor_assets', 'block_examples_01_basic_block_enqueue_block_editor_assets' );

//plugin_name_block_name_function_name
function block_examples_01_basic_block_enqueue_block_editor_assets() {
	wp_enqueue_script(
		//name of script
		'block-examples-01-basic-block',

		//full url of script
		plugins_url('block.build.js', __FILE__),

		//dependencies script needs
		array('wp-blocks', 'wp-i18n', 'wp-element'),

		//script version numbers
		filemtime(plugin_dir_path(__FILE__), 'block.build.js')
	);
};