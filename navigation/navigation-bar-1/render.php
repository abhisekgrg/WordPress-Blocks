<?php
function abhisek_navbar_render_callback($attributes) {
	$menu_slug         = $attributes['menu'] ?? '';
	$logo_url          = $attributes['logoUrl'] ?? '';
	$logo_width        = $attributes['logoWidth'] ?? '100px';
	$title_font_size   = $attributes['titleFontSize'] ?? 16;
	$nav_color         = $attributes['navColor'] ?? '#000';
	$nav_text_color    = $attributes['navTextColor'] ?? '#000';
	$button_font_size  = $attributes['buttonFontSize'] ?? 14;
	$button_bg_color   = $attributes['buttonBgColor'] ?? '#333';
	$button_text_color = $attributes['buttonTextColor'] ?? '#fff';
	$button_text       = $attributes['buttonText']?? 'Contact';
	$button_url        = $attributes['buttonUrl'] ?? '#';

	$menu_items_html = '<p style="color:' . esc_attr($nav_text_color) . '; font-size:' . esc_attr($title_font_size) . 'px;">No menu items</p>';

	if ($menu_slug) {
		$menu = wp_get_nav_menu_object($menu_slug);
		if ($menu) {
			$items = wp_get_nav_menu_items($menu->term_id);
			if (!empty($items)) {
				$menu_items_html = '<ul style="display:flex;gap:15px;list-style:none;margin:0;padding:0;font-size:' . esc_attr($title_font_size) . 'px;color:' . esc_attr($nav_color) . ';">';
				foreach ($items as $item) {
					$menu_items_html .= '<li><a href="' . esc_url($item->url) . '" style="color:' . esc_attr($nav_color) . ';text-decoration:none;">' . esc_html($item->title) . '</a></li>';
				}
				$menu_items_html .= '</ul>';
			}
		}
	}

	ob_start();
	?>
	<div class="nav-1-header" style="display:flex;justify-content:space-between;align-items:center;padding:20px;height:100px;">
		<?php if ($logo_url): ?>
			<img src="<?php echo esc_url($logo_url); ?>" alt="Logo" style="width:<?php echo esc_attr($logo_width); ?>;" />
		<?php else: ?>
			<p>No logo uploaded</p>
		<?php endif; ?>

		<nav>
			<?php echo $menu_items_html; ?>
		</nav>

		<button class="nav-header-1-button" style="
			background-color: <?php echo esc_attr($button_bg_color); ?>;
			font-size: <?php echo esc_attr($button_font_size); ?>px;
			color: <?php echo esc_attr($button_text_color); ?>;
			">
			<a href="<?php echo esc_url($button_url);?>">

				<?php echo esc_attr($button_text); ?>
				
			</a> 	
		</button>
	</div>
	<?php
	return ob_get_clean();
}
