<?php
$wrapper_attributes = get_block_wrapper_attributes();

$width = isset( $attributes['width'] ) ? $attributes['width'] : 'auto';
$UseThemeStyle = array_key_exists( 'useThemeStyle', $attributes ) ? $attributes['useThemeStyle'] : true;
?>
<div <?php echo $wrapper_attributes; ?> style="width: <?php echo esc_attr($width); ?>;">

	<?php echo $content; ?>
</div>