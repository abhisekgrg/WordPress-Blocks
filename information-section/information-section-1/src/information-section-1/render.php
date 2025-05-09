<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Get block attributes
$wrapper_attributes = get_block_wrapper_attributes();
$title = $attributes['title'] ?? 'Welcome';
$description = $attributes['description'] ?? '';
$sub_title = $attributes['subTitle'] ?? 'Luxury and Nature in Harmony';
$author_message = $attributes['authorMessage'] ?? '';
$author_name = $attributes['authorName'] ?? 'Leonardo P.';
$author_position = $attributes['authorPosition'] ?? 'Resort manager';

// Get image URLs
$image_one_url = $attributes['imageOneUrl'] ?? '';
$image_two_url = $attributes['imageTwoUrl'] ?? '';
$image_three_url = $attributes['imageThreeUrl'] ?? '';

// Get feature content
$feature_title_1 = $attributes['featureTitle1'] ?? 'No booking fee';
$feature_description_1 = $attributes['featureDescription1'] ?? 'Amet minim mollit deseruntullamco est sit aliqua dolor.';
$feature_icon_1 = $attributes['featureIcon1'] ;

$feature_icon_width = $attributes['featureIconWidth'] ?? '40';



$feature_title_2 = $attributes['featureTitle2'] ?? 'Best rate guarantee';
$feature_description_2 = $attributes['featureDescription2'] ?? 'Amet minim mollit deseruntullamco est sit aliqua dolor.';
$feature_icon_2 = $attributes['featureIcon2'] ;




$title_font_size = $attributes['titleFontSize'] ;
$title_color = $attributes['titleColor'] ;
$sub_title_font_size = $attributes['subTitleFontSize'] ;
$sub_title_color = $attributes['subTitleColor'] ;
$description_font_size = $attributes['descriptionFontSize'] ;
$description_color = $attributes['descriptionColor'] ;
$author_message_font_size = $attributes['authorMessageFontSize'] ;
$author_message_color = $attributes['authorMessageColor'] ;
$author_name_font_size = $attributes['authorNameFontSize'] ;
$author_name_color = $attributes['authorNameColor'] ;
$author_position_font_size = $attributes['authorPositionFontSize'] ;
$author_position_color = $attributes['authorPositionColor'];
$feature_title_font_size = $attributes['featureTitleFontSize'] ;
$feature_title_color = $attributes['featureTitleColor'] ;
$feature_description_font_size = $attributes['featureDescriptionFontSize'] ;
$feature_description_color = $attributes['featureDescriptionColor'] ;
$feature_background_color = $attributes['featureBackgroundColor'] ;
$image_border_radius = $attributes['imageBorderRadius'] ;
?>

<div <?php echo $wrapper_attributes; ?> class="information-section-1">
    
    <div class="information-section-1-content items-center flex gap-10">
    
        <div class="information-section-1-text-content flex flex-col gap-4 w-1/2">
            <div class="gap-[20px] flex flex-col">
                <h2 class="information-section-1-title font-semibold" style="font-size: <?php echo esc_attr($title_font_size); ?>px; color: <?php echo esc_attr($title_color); ?>; font-weight: 600;">
                    <?php echo esc_html($title); ?>
                </h2>
                <h3 class="information-section-1-sub-title font-medium" style="font-size: <?php echo esc_attr($sub_title_font_size); ?>px; color: <?php echo esc_attr($sub_title_color); ?>">
                    <?php echo esc_html($sub_title); ?>
                </h3>
                <p class="information-section-1-description" style="font-size: <?php echo esc_attr($description_font_size); ?>px; color: <?php echo esc_attr($description_color); ?>">
                    <?php echo esc_html($description); ?>
                </p>
            </div>
            
            <div class="mt-[40px] flex flex-col pl-[50px] gap-[25px]" style="border-left: 1px solid #DBA765">
                <p class="information-section-1-authorMessage" style="font-size: <?php echo esc_attr($author_message_font_size); ?>px; color: <?php echo esc_attr($author_message_color); ?>">
                    <?php echo esc_html($author_message); ?>
                </p>
                <div class="gap-[5px] flex flex-col">
                    <h3 class="information-section-1-authorName" style="font-size: <?php echo esc_attr($author_name_font_size); ?>px; color: <?php echo esc_attr($author_name_color); ?>; font-weight: 600;">
                        <?php echo esc_html($author_name); ?>
                    </h3>
                    <h4 class="information-section-1-authorPosition" style="font-size: <?php echo esc_attr($author_position_font_size); ?>px; color: <?php echo esc_attr($author_position_color); ?>">
                        <?php echo esc_html($author_position); ?>
                    </h4>
                </div>
            </div>
        </div>
        
        <div class="information-section-1-right-section flex flex-col gap-[20px] justify-center relative w-1/2">
            <div class="information-section-1-image-div w-[100%] flex flex-col gap-[20px]">
                <div class="flex gap-[20px]">
                    <?php if (!empty($image_one_url)) : ?>
                    <div class="information-section-1-image-box w-[35%] bg-cover bg-center" style="background-image: url(<?php echo esc_url($image_one_url); ?>); border-radius: <?php echo esc_attr($image_border_radius); ?>px;"></div>
                    <?php else : ?>
                    <div class="information-section-1-image-box w-[35%] bg-cover bg-center flex items-center justify-center" style="background-color: #f0f0f0; border-radius: <?php echo esc_attr($image_border_radius); ?>px;">
                        <div class="flex flex-col items-center">
                            <span class="dashicons dashicons-format-image text-4xl mb-2"></span>
                            <span>Upload Image</span>
                        </div>
                    </div>
                    <?php endif; ?>
                    
                    <?php if (!empty($image_two_url)) : ?>
                    <div class="information-section-1-image-box w-[65%] bg-cover bg-center" style="background-image: url(<?php echo esc_url($image_two_url); ?>); border-radius: <?php echo esc_attr($image_border_radius); ?>px;"></div>
                    <?php else : ?>
                    <div class="information-section-1-image-box w-[65%] bg-cover bg-center flex items-center justify-center" style="background-color: #f0f0f0; border-radius: <?php echo esc_attr($image_border_radius); ?>px;">
                        <div class="flex flex-col items-center">
                            <span class="dashicons dashicons-format-image text-4xl mb-2"></span>
                            <span>Upload Image</span>
                        </div>
                    </div>
                    <?php endif; ?>
                </div>
                
                <?php if (!empty($image_three_url)) : ?>
                <div class="information-section-1-image-box w-[100%] bg-cover bg-center" style="background-image: url(<?php echo esc_url($image_three_url); ?>); border-radius: <?php echo esc_attr($image_border_radius); ?>px;"></div>
                <?php else : ?>
                <div class="information-section-1-image-box w-[100%] bg-cover bg-center flex items-center justify-center" style="background-color: #f0f0f0; border-radius: <?php echo esc_attr($image_border_radius); ?>px;">
                    <div class="flex flex-col items-center">
                        <span class="dashicons dashicons-format-image text-4xl mb-2"></span>
                        <span>Upload Image</span>
                    </div>
                </div>
                <?php endif; ?>
            </div>
            
            <div class="features-block flex gap-[20px]">
                <div class="feature-block flex gap-[20px] p-[20px]" style="background-color: <?php echo esc_attr($feature_background_color); ?>; border-radius: <?php echo esc_attr($image_border_radius); ?>px;">
                    <div>
                        <img class="information-section-1-feature-icon" src="<?php echo esc_url($feature_icon_1); ?>" alt="feature image" style="min-width: <?php echo esc_attr($feature_icon_width); ?>px;" />
                    </div>
                    <div class="flex flex-col gap-[10px]">
                        <h4 class="information-section-1-featureTitle" style="font-size: <?php echo esc_attr($feature_title_font_size); ?>px; color: <?php echo esc_attr($feature_title_color); ?>">
                            <?php echo esc_html($feature_title_1); ?>
                        </h4>
                        <p class="information-section-1-featureDescription" style="font-size: <?php echo esc_attr($feature_description_font_size); ?>px; color: <?php echo esc_attr($feature_description_color); ?>">
                            <?php echo esc_html($feature_description_1); ?>
                        </p>
                    </div>
                </div>
                
                <div class="feature-block flex gap-[20px] p-[20px]" style="background-color: <?php echo esc_attr($feature_background_color); ?>; border-radius: <?php echo esc_attr($image_border_radius); ?>px;">
                    <div>
                        <img class="information-section-1-feature-icon" src="<?php echo esc_url($feature_icon_2); ?>" alt="feature image" style="min-width: <?php echo esc_attr($feature_icon_width); ?>px;" />
                    </div>
                    <div class="flex flex-col gap-[10px]">
                        <h4 class="information-section-1-featureTitle" style="font-size: <?php echo esc_attr($feature_title_font_size); ?>px; color: <?php echo esc_attr($feature_title_color); ?>">
                            <?php echo esc_html($feature_title_2); ?>
                        </h4>
                        <p class="information-section-1-featureDescription" style="font-size: <?php echo esc_attr($feature_description_font_size); ?>px; color: <?php echo esc_attr($feature_description_color); ?>">
                            <?php echo esc_html($feature_description_2); ?>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
