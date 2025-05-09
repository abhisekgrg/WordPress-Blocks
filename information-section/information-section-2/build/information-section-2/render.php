<?php
/**
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 */

// Ensure $attributes is an array
$attributes = isset($attributes) ? $attributes : [];

// Extract attributes with default values
$title = $attributes['title'] ?? 'Luxury and Nature in Harmony';
$titleFontSize = $attributes['titleFontSize'] ?? 32;
$titleColor = $attributes['titleColor'] ?? '#000000';

$subTitle = $attributes['subTitle'] ?? 'Welcome';
$subTitleFontSize = $attributes['subTitleFontSize'] ?? 24;
$subTitleColor = $attributes['subTitleColor'] ?? '#333333';

$description = $attributes['description'] ?? 'Located on northern coastline, Seasona offers elegant rooms and panoramic sea views.';
$descriptionFontSize = $attributes['descriptionFontSize'] ?? 16;
$descriptionColor = $attributes['descriptionColor'] ?? '#555555';

$authorMessage = $attributes['authorMessage'] ?? 'A place that offers everything you have ever dreamed of.';
$authorMessageFontSize = $attributes['authorMessageFontSize'] ?? 18;
$authorMessageColor = $attributes['authorMessageColor'] ?? '#666666';

$authorName = $attributes['authorName'] ?? 'Leonardo P.';
$authorNameFontSize = $attributes['authorNameFontSize'] ?? 20;
$authorNameColor = $attributes['authorNameColor'] ?? '#444444';

$authorPosition = $attributes['authorPosition'] ?? 'Resort manager';
$authorPositionFontSize = $attributes['authorPositionFontSize'] ?? 16;
$authorPositionColor = $attributes['authorPositionColor'] ?? '#777777';

$imageOneUrl = $attributes['imageOneUrl'] ?? '';
$imageTwoUrl = $attributes['imageTwoUrl'] ?? '';
$imageBorderRadius = $attributes['imageBorderRadius'] ?? 10;

$featureTitle1 = $attributes['featureTitle1'] ?? 'Feature 1 Title';
$featureTitle2 = $attributes['featureTitle2'] ?? 'Feature 2 Title';
$featureTitleFontSize = $attributes['featureTitleFontSize'] ?? 18;
$featureTitleColor = $attributes['featureTitleColor'] ?? '#222222';

$featureDescription1 = $attributes['featureDescription1'] ?? 'Description for feature 1';
$featureDescription2 = $attributes['featureDescription2'] ?? 'Description for feature 2';
$featureDescriptionFontSize = $attributes['featureDescriptionFontSize'] ?? 14;
$featureDescriptionColor = $attributes['featureDescriptionColor'] ?? '#666666';

$featureBackgroundColor = $attributes['featureBackgroundColor'] ?? '#DBA765';
$featureIcon1 = $attributes['featureIcon1'] ?? '';
$featureIcon2 = $attributes['featureIcon2'] ?? '';
$featureIconWidth = $attributes['featureIconWidth'] ?? 40;

$reviewTitle = $attributes['reviewTitle'] ?? 'Review Title';
$reviewTitleFontSize = $attributes['reviewTitleFontSize'] ?? 24;
$reviewTitleColor = $attributes['reviewTitleColor'] ?? '#000000';

$ratingTitle = $attributes['ratingTitle'] ?? 'Rating Title';
$ratingTitleFontSize = $attributes['ratingTitleFontSize'] ?? 16;
$ratingTitleColor = $attributes['ratingTitleColor'] ?? '#DBA765';
$ratingWidth = $attributes['ratingWidth'] ?? 100;

$reviewButton = $attributes['reviewButton'] ?? 'Write a review';
$reviewButtonFontSize = $attributes['reviewButtonFontSize'] ?? 16;
$reviewButtonColor = $attributes['reviewButtonColor'] ?? '#FFFFFF';
$reviewButtonBackgroundColor = $attributes['reviewButtonBackgroundColor'] ?? '#DBA765';
$reviewButtonBorderRadius = $attributes['reviewButtonBorderRadius'] ?? 5;

$ctaTitle = $attributes['ctaTitle'] ?? 'CTA Title';
$ctaTitleFontSize = $attributes['ctaTitleFontSize'] ?? 24;
$ctaTitleColor = $attributes['ctaTitleColor'] ?? '#000000';

$ctaButton = $attributes['ctaButton'] ?? 'CTA Button';
$ctaButtonFontSize = $attributes['ctaButtonFontSize'] ?? 16;
$ctaButtonColor = $attributes['ctaButtonColor'] ?? '#FFFFFF';
$ctaButtonBackgroundColor = $attributes['ctaButtonBackgroundColor'] ?? '#DBA765';
$ctaButtonBorderRadius = $attributes['ctaButtonBorderRadius'] ?? 5;

$borderBackgroundColor = $attributes['borderBackgroundColor'] ?? '#DBA765';

// Define default image paths
$plugin_url = plugin_dir_url(__FILE__);
$defaultFeatureIcon1 = $plugin_url . '../assets/icon1.png';
$defaultFeatureIcon2 = $plugin_url . '../assets/icon2.png';
$defaultImageOneUrl = $plugin_url . '../assets/image1.png';
$defaultImageTwoUrl = $plugin_url . '../assets/image2.png';

// Use default images if none are set
$imageOneUrl = !empty($imageOneUrl) ? $imageOneUrl : $defaultImageOneUrl;
$imageTwoUrl = !empty($imageTwoUrl) ? $imageTwoUrl : $defaultImageTwoUrl;
$featureIcon1 = !empty($featureIcon1) ? $featureIcon1 : $defaultFeatureIcon1;
$featureIcon2 = !empty($featureIcon2) ? $featureIcon2 : $defaultFeatureIcon2;

// Get block wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes();
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="information-section-2-content justify-center items-center gap-10">
        <div class="flex flex-col gap-[10px] items-center">
            <h3 class="information-section-2-sub-title font-medium" style="font-weight: 600; font-size: <?php echo esc_attr($subTitleFontSize); ?>px; color: <?php echo esc_attr($subTitleColor); ?>;">
                <?php echo esc_html($subTitle); ?>
            </h3>
            <h2 class="information-section-2-title font-semibold" style="font-size: <?php echo esc_attr($titleFontSize); ?>px; color: <?php echo esc_attr($titleColor); ?>; font-weight: 600;">
                <?php echo esc_html($title); ?>
            </h2>
        </div>
        
        <div class="information-section-2-upper-block mt-[50px] flex gap-[70px]">
            <div class="information-section-2-image-box w-[40%] bg-cover bg-center flex items-center justify-center h-[500px]" 
                 style="background-image: url(<?php echo esc_url($imageOneUrl); ?>); border-radius: <?php echo esc_attr($imageBorderRadius); ?>px;">
            </div>
            
            <div class="flex flex-col w-[60%]">
                <div class="gap-[20px] flex flex-col">
                    <p class="information-section-2-description" style="font-size: <?php echo esc_attr($descriptionFontSize); ?>px; color: <?php echo esc_attr($descriptionColor); ?>;">
                        <?php echo esc_html($description); ?>
                    </p>
                </div>
                
                <div class="mt-[40px] flex flex-col pl-[50px] gap-[25px]" style="border-left: 1px solid <?php echo esc_attr($borderBackgroundColor); ?>">
                    <p class="information-section-2-authorMessage" style="font-size: <?php echo esc_attr($authorMessageFontSize); ?>px; color: <?php echo esc_attr($authorMessageColor); ?>;">
                        <?php echo esc_html($authorMessage); ?>
                    </p>
                    
                    <div class="gap-[5px] flex flex-col">
                        <h3 class="information-section-2-authorName" style="font-size: <?php echo esc_attr($authorNameFontSize); ?>px; color: <?php echo esc_attr($authorNameColor); ?>; font-weight: 600;">
                            <?php echo esc_html($authorName); ?>
                        </h3>
                        <h4 class="information-section-2-authorPosition" style="font-size: <?php echo esc_attr($authorPositionFontSize); ?>px; color: <?php echo esc_attr($authorPositionColor); ?>;">
                            <?php echo esc_html($authorPosition); ?>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="information-section-2-bottom-block flex gap-[20px] justify-center relative">
            <div class="information-section-2-rating-block items-end mb-[75px] justify-end w-[34%] flex flex-col gap-[20px]">
                <div class="flex items-center gap-[10px] flex-col w-[300px]">
                    <h3 style="font-size: <?php echo esc_attr($ratingTitleFontSize); ?>px; color: <?php echo esc_attr($ratingTitleColor); ?>; font-weight: 600;">
                        <?php echo esc_html($ratingTitle); ?>
                    </h3>
                    
                    <svg width="<?php echo esc_attr($ratingWidth); ?>" height="50" viewBox="0 0 116 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.11852 21.34L8.25852 14.98L3.09852 11.52H9.41852L11.6785 4.7L13.9785 11.52H20.2585L15.0985 14.98L17.2785 21.34L11.6785 17.28L6.11852 21.34Z" fill="#F0AD4E"/>
                        <g clip-path="url(#clip0_482_1003)">
                            <path d="M28.5404 22.34L30.6804 15.98L25.5204 12.52H31.8404L34.1004 5.7L36.4004 12.52H42.6804L37.5204 15.98L39.7004 22.34L34.1004 18.28L28.5404 22.34Z" fill="#F0AD4E"/>
                        </g>
                        <path d="M52.1185 21.34L54.2585 14.98L49.0985 11.52H55.4185L57.6785 4.7L59.9785 11.52H66.2585L61.0985 14.98L63.2785 21.34L57.6785 17.28L52.1185 21.34Z" fill="#F0AD4E"/>
                        <path d="M75.1107 21.34L77.2507 14.98L72.0907 11.52H78.4107L80.6707 4.7L82.9707 11.52H89.2507L84.0907 14.98L86.2707 21.34L80.6707 17.28L75.1107 21.34Z" fill="#F0AD4E"/>
                        <path d="M98.1107 21.34L100.251 14.98L95.0907 11.52H101.411L103.671 4.7L105.971 11.52H112.251L107.091 14.98L109.271 21.34L103.671 17.28L98.1107 21.34Z" fill="#F0AD4E"/>
                        <defs>
                            <clipPath id="clip0_482_1003">
                                <rect width="23.2849" height="28" fill="white" transform="translate(23)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    
                    <h3 style="font-size: <?php echo esc_attr($reviewTitleFontSize); ?>px; color: <?php echo esc_attr($reviewTitleColor); ?>; font-weight: 500;">
                        <?php echo esc_html($reviewTitle); ?>
                    </h3>
                    
                    <button class="information-section-2-button" style="margin-top: 20px; font-size: <?php echo esc_attr($reviewButtonFontSize); ?>px; color: <?php echo esc_attr($reviewButtonColor); ?>; background-color: <?php echo esc_attr($reviewButtonBackgroundColor); ?>; border-radius: <?php echo esc_attr($reviewButtonBorderRadius); ?>px; padding: 10px 20px;">
                        <?php echo esc_html($reviewButton); ?>
                    </button>
                </div>
            </div>
            
            <div class="information-section-2-features-block gap-[50px] flex w-[60%]">
                <div class="information-section-2-image-box bg-cover bg-center flex items-center justify-center w-[310px] h-[450px]" 
                     style="background-image: url(<?php echo esc_url($imageTwoUrl); ?>); border-radius: <?php echo esc_attr($imageBorderRadius); ?>px;">
                </div>
                
                <div class="features-block w-[50%] flex-col gap-[70px]">
                    <div class="flex flex-col gap-[30px] pt-[50px] pb-[50px]" 
                         style="border-top: 1px solid <?php echo esc_attr($borderBackgroundColor); ?>; border-bottom: 1px solid <?php echo esc_attr($borderBackgroundColor); ?>;">
                        
                        <div class="feature-block flex gap-[20px] p-[20px]" style="border-radius: <?php echo esc_attr($imageBorderRadius); ?>px;">
                            <div>
                                <img class="information-section-2-feature-icon" src="<?php echo esc_url($featureIcon1); ?>" alt="feature image" 
                                     style="min-width: <?php echo esc_attr($featureIconWidth); ?>px;" />
                            </div>
                            <div class="flex flex-col gap-[10px]">
                                <h4 class="information-section-2-featureTitle" 
                                    style="font-size: <?php echo esc_attr($featureTitleFontSize); ?>px; color: <?php echo esc_attr($featureTitleColor); ?>;">
                                    <?php echo esc_html($featureTitle1); ?>
                                </h4>
                                <p class="information-section-2-featureDescription" 
                                   style="font-size: <?php echo esc_attr($featureDescriptionFontSize); ?>px; color: <?php echo esc_attr($featureDescriptionColor); ?>;">
                                    <?php echo esc_html($featureDescription1); ?>
                                </p>
                            </div>
                        </div>
                        
                        <div class="feature-block flex gap-[20px] p-[20px]" style="border-radius: <?php echo esc_attr($imageBorderRadius); ?>px;">
                            <div>
                                <img class="information-section-2-feature-icon" src="<?php echo esc_url($featureIcon2); ?>" alt="feature image" 
                                     style="min-width: <?php echo esc_attr($featureIconWidth); ?>px;" />
                            </div>
                            <div class="flex flex-col gap-[10px]">
                                <h4 class="information-section-2-featureTitle" 
                                    style="font-size: <?php echo esc_attr($featureTitleFontSize); ?>px; color: <?php echo esc_attr($featureTitleColor); ?>;">
                                    <?php echo esc_html($featureTitle2); ?>
                                </h4>
                                <p class="information-section-2-featureDescription" 
                                   style="font-size: <?php echo esc_attr($featureDescriptionFontSize); ?>px; color: <?php echo esc_attr($featureDescriptionColor); ?>;">
                                    <?php echo esc_html($featureDescription2); ?>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex justify-between items-center mt-[32px]">
                        <h3 style="font-size: <?php echo esc_attr($ctaTitleFontSize); ?>px; color: <?php echo esc_attr($ctaTitleColor); ?>;">
                            <?php echo esc_html($ctaTitle); ?>
                        </h3>
                        <button style="font-size: <?php echo esc_attr($ctaButtonFontSize); ?>px; color: <?php echo esc_attr($ctaButtonColor); ?>; margin-right: 20px; border-radius: <?php echo esc_attr($ctaButtonBorderRadius); ?>px; padding: 10px 20px;">
                            <?php echo esc_html($ctaButton); ?>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>