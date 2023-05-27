<?php
/**
 * Plugin Name:       Team Members
 * Description:        A team members grid block for WordPress.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            soTech
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       team-members
 *
 * @package           sotech-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function sotech_blocks_team_members_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'sotech_blocks_team_members_block_init' );
