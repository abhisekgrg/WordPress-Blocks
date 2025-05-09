/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import {
	PanelBody,
	TabPanel,
	Button,
	TextControl,
	RangeControl,
	ColorPalette,
	__experimentalDivider as Divider,
} from "@wordpress/components";

import "./editor.scss";
import defaultFeatureIcon1 from "./assets/icon1.png";
import defaultFeatureIcon2 from "./assets/icon2.png";
import defaultImageOneUrl from "./assets/image1.png";
import defaultImageTwoUrl from "./assets/image2.png";

import Typography from "./components/Typography";
import ColorSettings from "./components/Color";
import StarSvg from "./components/star";

export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		titleFontSize,
		titleColor,
		subTitle,
		subTitleFontSize,
		subTitleColor,
		authorMessage,
		authorMessageFontSize,
		authorMessageColor,
		authorName,
		authorNameFontSize,
		authorNameColor,
		authorPosition,
		authorPositionFontSize,
		authorPositionColor,

		descriptionFontSize,
		descriptionColor,
		description,

		imageOneUrl,
		imageTwoUrl,

		imageBorderRadius,

		featureTitle1,
		featureTitle2,
		featureTitleFontSize,
		featureTitleColor,
		featureDescription1,
		featureDescription2,
		featureDescriptionFontSize,
		featureDescriptionColor,
		featureBackgroundColor,
		featureIcon1,
		featureIcon2,
		featureIconWidth,

		ratingTitleFontSize,
		reviewButtonBackgroundColor,
		reviewButtonFontSize,
		reviewButtonBorderRadius,
		ratingWidth,
		ratingTitleColor,
		reviewTitle,
		ratingTitle,
		reviewTitleFontSize,
		reviewTitleColor,
		reviewButtonColor,
		reviewButton,

		ctaTitleFontSize,
		ctaTitle,
		ctaButton,
		ctaTitleColor,
		ctaButtonBackgroundColor,
		ctaButtonFontSize,
		ctaButtonBorderRadius,
		ctaButtonColor,

		borderBackgroundColor,
	} = attributes;

	const colors = [
		{
			name: "accent-1",
			color: "var(--wp--preset--color--accent-1)",
		},
		{
			name: "accent-2",
			color: "var(--wp--preset--color--accent-2)",
		},
		{
			name: "accent-3",
			color: "var(--wp--preset--color--accent-3)",
		},
		{
			name: "accent-4",
			color: "var(--wp--preset--color--accent-4)",
		},
		{
			name: "accent-5",
			color: "var(--wp--preset--color--accent-5)",
		},
	];

	const openMediaLibrary = (key) => {
		const mediaFrame = wp.media({
			title: "Select Image",
			button: { text: "Use this image" },
			multiple: false,
		});

		mediaFrame.on("select", () => {
			const selected = mediaFrame.state().get("selection").first().toJSON();
			setAttributes({ [key]: selected.url });
		});

		mediaFrame.open();
	};

	const blockProps = useBlockProps();
	useEffect(() => {
		if (!featureIcon1) {
			setAttributes({ featureIcon1: defaultFeatureIcon1 });
		}
		if (!featureIcon2) {
			setAttributes({ featureIcon2: defaultFeatureIcon2 });
		}
	}, []);

	useEffect(() => {
		if (!imageOneUrl) {
			setAttributes({ imageOneUrl: defaultImageOneUrl });
		}
		if (!imageTwoUrl) {
			setAttributes({ imageTwoUrl: defaultImageTwoUrl });
		}
	}, []);

	return (
		<>
			<InspectorControls>
				<TabPanel
					className="my-tab-panel"
					activeClass="active-tab"
					tabs={[
						{ name: "settings", title: "Settings", className: "tab-settings" },
						{ name: "styles", title: "Styles", className: "tab-styles" },
					]}
				>
					{(tab) => {
						if (tab.name === "settings") {
							return (
								<>
									<PanelBody
										title={__("Images", "information-section-2")}
										initialOpen={false}
									>
										<div className="flex gap-[10px] mb-[10px] ">
											<Button
												isSecondary
												onClick={() => openMediaLibrary("imageOneUrl")}
											>
												{imageOneUrl ? "Change Image" : "Upload First Image"}
											</Button>
											{imageOneUrl && (
												<img
													src={imageOneUrl}
													alt=""
													className=" information-section-2-sidebar-img w-[100px] object-cover"
												/>
											)}
										</div>
										<div className="flex gap-[10px] mb-[10px] ">
											<Button
												isSecondary
												onClick={() => openMediaLibrary("imageTwoUrl")}
											>
												{imageTwoUrl ? "Change Image" : "Upload Second Image"}
											</Button>
											{imageTwoUrl && (
												<img
													src={imageTwoUrl}
													alt=""
													className=" information-section-2-sidebar-img w-[100px] object-cover"
												/>
											)}
										</div>
										<Button
											isDestructive
											onClick={() => {
												setAttributes({
													imageOneUrl: defaultImageOneUrl,
													imageTwoUrl: defaultImageTwoUrl,
												});
											}}
										>
											Reset Images
										</Button>
									</PanelBody>
									<PanelBody
										title={__("Feature Icons", "information-section-2")}
										initialOpen={false}
									>
										<div className="flex gap-[10px] mb-[10px] ">
											<Button
												isSecondary
												onClick={() => openMediaLibrary("featureIcon1")}
											>
												{featureIcon1 ? "Change Icon" : "Upload First Icon"}
											</Button>
											{featureIcon1 && (
												<img
													src={featureIcon1}
													alt=""
													className=" information-section-2-sidebar-img w-[100px] object-cover"
												/>
											)}
										</div>
										<div className="flex gap-[10px] mb-[10px] ">
											<Button
												isSecondary
												onClick={() => openMediaLibrary("featureIcon2")}
											>
												{featureIcon2 ? "Change Icon" : "Upload Second Icon"}
											</Button>
											{featureIcon2 && (
												<img
													src={featureIcon2}
													alt=""
													className=" information-section-2-sidebar-img w-[100px] object-cover"
												/>
											)}
										</div>
										<Button
											isDestructive
											onClick={() => {
												setAttributes({
													featureIcon1: defaultFeatureIcon1,
													featureIcon2: defaultFeatureIcon2,
												});
											}}
										>
											Reset Feature Icons
										</Button>
									</PanelBody>
								</>
							);
						}

						if (tab.name === "styles") {
							return (
								<>
									<PanelBody
										title={__("Title", "information-section-2")}
										initialOpen={false}
									>
										<Typography
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="title"
											title={__("Title Typography", "information-section-2")}
											disableFontFamily={true}
											disableFontWeight={true}
											disableLineHeight={true}
											disableLetterSpacing={true}
										/>
										<hr />

										<ColorSettings
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="title"
											disableBackgroundColor={true}
										/>
									</PanelBody>
									<PanelBody
										title={__("Sub Title", "information-section-2")}
										initialOpen={false}
									>
										<Typography
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="subTitle"
											title={__("Sub Title Typography", "herosection-2")}
											disableFontFamily={true}
											disableFontWeight={true}
											disableLineHeight={true}
											disableLetterSpacing={true}
										/>
										<hr />

										<ColorSettings
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="subTitle"
											disableBackgroundColor={true}
										/>
									</PanelBody>
									<PanelBody
										title={__("Description", "information-section-2")}
										initialOpen={false}
									>
										<Typography
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="description"
											title={__("Description Typography", "herosection-2")}
											disableFontFamily={true}
											disableFontWeight={true}
											disableLineHeight={true}
											disableLetterSpacing={true}
										/>
										<hr />

										<ColorSettings
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="description"
											disableBackgroundColor={true}
										/>
									</PanelBody>
									<PanelBody
										title={__("Author Name", "information-section-2")}
										initialOpen={false}
									>
										<Typography
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="authorName"
											title={__("Author name Typography", "herosection-2")}
											disableFontFamily={true}
											disableFontWeight={true}
											disableLineHeight={true}
											disableLetterSpacing={true}
										/>
										<hr />

										<ColorSettings
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="authorName"
											disableBackgroundColor={true}
										/>
									</PanelBody>
									<PanelBody
										title={__("Author Position", "information-section-2")}
										initialOpen={false}
									>
										<Typography
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="authorPosition"
											title={__("Author Position Typography", "herosection-2")}
											disableFontFamily={true}
											disableFontWeight={true}
											disableLineHeight={true}
											disableLetterSpacing={true}
										/>
										<hr />

										<ColorSettings
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="authorPosition"
											disableBackgroundColor={true}
										/>
									</PanelBody>
									<PanelBody
										title={__("Author Message", "information-section-2")}
										initialOpen={false}
									>
										<Typography
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="authorMessage"
											title={__("Author Message Typography", "herosection-2")}
											disableFontFamily={true}
											disableFontWeight={true}
											disableLineHeight={true}
											disableLetterSpacing={true}
										/>
										<hr />

										<ColorSettings
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="authorMessage"
											disableBackgroundColor={true}
										/>
									</PanelBody>
									<PanelBody
										title={__("Rating", "information-section-2")}
										initialOpen={false}
									>
										<Typography
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="ratingTitle"
											title={__("Rating Typography", "herosection-2")}
											disableFontFamily={true}
											disableFontWeight={true}
											disableLineHeight={true}
											disableLetterSpacing={true}
										/>
										<hr />

										<ColorSettings
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="ratingTitle"
											disableBackgroundColor={true}
										/>
										<hr />
										<RangeControl
											label={__("Width", "information-section-2")}
											value={ratingWidth}
											onChange={(value) =>
												setAttributes({ ratingWidth: value })
											}
											min={10}
											max={200}
										/>
									</PanelBody>
									<PanelBody
										title={__("Review", "information-section-2")}
										initialOpen={false}
									>
										<Typography
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="reviewTitle"
											title={__("Review Typography", "herosection-2")}
											disableFontFamily={true}
											disableFontWeight={true}
											disableLineHeight={true}
											disableLetterSpacing={true}
										/>
										<hr />

										<ColorSettings
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="reviewTitle"
											disableBackgroundColor={true}
										/>
									</PanelBody>
									<PanelBody
										title={__("Review Button", "information-section-2")}
										initialOpen={false}
									>
										<Typography
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="reviewButton"
											title={__("Review Button Typography", "herosection-2")}
											disableFontFamily={true}
											disableFontWeight={true}
											disableLineHeight={true}
											disableLetterSpacing={true}
										/>
										<hr />

										<ColorSettings
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="reviewButton"
											disableBackgroundColor={false}
										/>
										<hr />
										<RangeControl
											label={__("Border Radius", "information-section-2")}
											value={reviewButtonBorderRadius}
											onChange={(value) =>
												setAttributes({ reviewButtonBorderRadius: value })
											}
											min={10}
											max={200}
										/>
									</PanelBody>
									<PanelBody
										title={__("Feature Title", "information-section-2")}
										initialOpen={false}
									>
										<Typography
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="featureTitle"
											title={__("Feature Title Typography", "herosection-2")}
											disableFontFamily={true}
											disableFontWeight={true}
											disableLineHeight={true}
											disableLetterSpacing={true}
										/>
										<hr />

										<ColorSettings
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="featureTitle"
											disableBackgroundColor={true}
										/>
									</PanelBody>
									<PanelBody
										title={__("Feature Description", "information-section-2")}
										initialOpen={false}
									>
										<Typography
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="featureDescription"
											title={__("Feature Description Typography", "herosection-2")}
											disableFontFamily={true}
											disableFontWeight={true}
											disableLineHeight={true}
											disableLetterSpacing={true}
										/>
										<hr />

										<ColorSettings
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="featureDescription"
											disableBackgroundColor={true}
										/>
									</PanelBody>
									
									<PanelBody
										title={__("Feature Icon", "information-section-2")}
										initialOpen={false}
									>
										<RangeControl
											label={__("Width", "information-section-2")}
											value={featureIconWidth}
											onChange={(value) =>
												setAttributes({ featureIconWidth: value })
											}
											min={10}
											max={100}
										/>
									</PanelBody>
									<PanelBody
										title={__("CTA Title", "information-section-2")}
										initialOpen={false}
									>
										<Typography
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="ctaTitle"
											title={__("CTA Title Typography", "herosection-2")}
											disableFontFamily={true}
											disableFontWeight={true}
											disableLineHeight={true}
											disableLetterSpacing={true}
										/>
										<hr />

										<ColorSettings
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="ctaTitle"
											disableBackgroundColor={true}
										/>
									</PanelBody>
									<PanelBody
										title={__("CTA Button", "information-section-2")}
										initialOpen={false}
									>
										<Typography
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="ctaButton"
											title={__("CTA Button Typography", "herosection-2")}
											disableFontFamily={true}
											disableFontWeight={true}
											disableLineHeight={true}
											disableLetterSpacing={true}
										/>
										<hr />

										<ColorSettings
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="ctaButton"
											disableBackgroundColor={true}
										/>
									</PanelBody>
									<PanelBody
										title={__("Border Color", "information-section-2")}
										initialOpen={false}
									>
										

										<ColorSettings
											attributes={attributes}
											setAttributes={setAttributes}
											attrNamePrefix="border"
											disableBackgroundColor={false}
											disableTextColor={true}
										/>
									</PanelBody>
									<PanelBody
										title={__(" Image Border Radius", "information-section-2")}
										initialOpen={false}
									>
										<RangeControl
											label={__("Image Border Radius", "information-section-2")}
											value={imageBorderRadius}
											onChange={(value) =>
												setAttributes({ imageBorderRadius: value })
											}
											min={0}
											max={100}
										/>
									</PanelBody>
								</>
							);
						}
					}}
				</TabPanel>
			</InspectorControls>

			<div {...blockProps}>
				<div className="information-section-2-content justify-center items-center gap-10">
					<div className="flex flex-col gap-[10px] items-center">
						<RichText
							tagName="h3"
							value={subTitle}
							onChange={(value) => setAttributes({ subTitle: value })}
							placeholder={__("Enter sub title...", "information-section-2")}
							className="information-section-2-sub-title font-medium"
							style={{
								fontWeight: "600",
								fontSize: `${subTitleFontSize}px`,
								color: subTitleColor,
							}}
						/>
						<RichText
							tagName="h2"
							value={title}
							onChange={(value) => setAttributes({ title: value })}
							placeholder={__("Enter title...", "information-section-2")}
							className="information-section-2-title font-semibold"
							style={{
								fontSize: `${titleFontSize}px`,
								color: titleColor,
								fontWeight: "600",
							}}
						/>
					</div>
					<div className="information-section-2-upper-block mt-[50px] flex gap-[70px]">
						<div
							className="information-section-2-image-box w-[40%] bg-cover bg-center flex items-center justify-center h-[500px]"
							style={{
								backgroundImage: imageOneUrl
									? `url(${imageOneUrl || defaultImageOneUrl})`
									: "none",

								borderRadius: `${imageBorderRadius}px`,
							}}
						></div>
						<div className="flex flex-col w-[60%]">
							<div className="gap-[20px] flex flex-col">
								<RichText
									tagName="p"
									value={description}
									onChange={(value) => setAttributes({ description: value })}
									placeholder={__(
										"Enter description...",
										"information-section-2",
									)}
									className="information-section-2-description"
									style={{
										fontSize: `${descriptionFontSize}px`,
										color: descriptionColor,
									}}
								/>
							</div>
							<div
								className=" mt-[40px] flex flex-col pl-[50px] gap-[25px] "
								style={{ borderLeft: "1px solid " + borderBackgroundColor }}
							>
								<RichText
									tagName="p"
									value={authorMessage}
									onChange={(value) => setAttributes({ authorMessage: value })}
									placeholder={__(
										"Enter authorMessage...",
										"information-section-2",
									)}
									className="information-section-2-authorMessage"
									style={{
										fontSize: `${authorMessageFontSize}px`,
										color: authorMessageColor,
									}}
								/>
								<div className="gap-[5px] flex flex-col">
									<RichText
										tagName="h3"
										value={authorName}
										onChange={(value) => setAttributes({ authorName: value })}
										placeholder={__(
											"Enter authorName...",
											"information-section-2",
										)}
										className="information-section-2-authorName"
										style={{
											fontSize: `${authorNameFontSize}px`,
											color: authorNameColor,
											fontWeight: "600",
										}}
									/>
									<RichText
										tagName="h4"
										value={authorPosition}
										onChange={(value) =>
											setAttributes({ authorPosition: value })
										}
										placeholder={__(
											"Enter authorPosition...",
											"information-section-2",
										)}
										className="information-section-2-authorPosition"
										style={{
											fontSize: `${authorPositionFontSize}px`,
											color: authorPositionColor,
										}}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="information-section-2-bottom-block flex gap-[20px] justify-center relative">
						<div className="information-section-2-rating-block items-end mb-[75px] justify-end w-[34%] flex flex-col gap-[20px]">
							<div className="flex items-center gap-[10px] flex-col w-[300px]">
								<RichText
									tagName="h3"
									value={ratingTitle}
									onChange={(value) => setAttributes({ ratingTitle: value })}
									placeholder={__(
										"Enter authorPosition...",
										"information-section-2",
									)}
									style={{
										fontSize: ratingTitleFontSize,
										color: ratingTitleColor,
										fontWeight: 600,
									}}
								/>
								<StarSvg style={{ width: ratingWidth,height:"50px" }} />
								<RichText
									tagName="h3"
									value={reviewTitle}
									onChange={(value) => setAttributes({ reviewTitle: value })}
									placeholder={__(
										"Enter featureDescription...",
										"information-section-2",
									)}
									style={{
										fontSize: reviewTitleFontSize,
										color: reviewTitleColor,
										fontWeight: 500,
									}}
								/>
								<RichText
									tagName="button"
									value={reviewButton}
									onChange={(value) => setAttributes({ reviewButton: value })}
									placeholder={__(
										"Enter featureDescription...",
										"information-section-2",
									)}
									className="information-section-2-button"
									style={{
										marginTop: "20px",

										fontSize: `${reviewButtonFontSize}px`,
										color: reviewButtonColor,
										backgroundColor: reviewButtonBackgroundColor,
										borderRadius: reviewButtonBorderRadius,
									}}
								/>
							</div>
						</div>
						<div className="information-section-2-features-block gap-[50px] flex w-[60%]">
							<div
								className="information-section-2-image-box bg-cover bg-center flex items-center justify-center w-[310px] h-[450px]"
								style={{
									backgroundImage: imageTwoUrl
										? `url(${imageTwoUrl || defaultImageTwoUrl})`
										: "none",

									borderRadius: `${imageBorderRadius}px`,
								}}
							></div>
							<div className="features-block w-[50%] flex-col gap-[70px]">
								<div
									className="flex flex-col gap-[30px] pt-[50px] pb-[50px]"
									style={{
										borderTop: `1px solid ${borderBackgroundColor}`,
										borderBottom: `1px solid ${borderBackgroundColor}`,
									}}
								>
									<div
										className="feature-block flex gap-[20px] p-[20px]"
										style={{
											borderRadius: `${imageBorderRadius}px`,
										}}
									>
										<div>
											<img
												className="information-section-2-feature-icon"
												src={featureIcon1 || defaultFeatureIcon1}
												alt="feature image"
												style={{ minWidth: featureIconWidth }}
											/>
										</div>
										<div className="flex flex-col gap-[10px]">
											<RichText
												tagName="h4"
												value={featureTitle1}
												onChange={(value) =>
													setAttributes({ featureTitle1: value })
												}
												placeholder={__(
													"Enter featureTitle...",
													"information-section-2",
												)}
												className="information-section-2-featureTitle"
												style={{
													fontSize: `${featureTitleFontSize}px`,
													color: featureTitleColor,
												}}
											/>
											<RichText
												tagName="p"
												value={featureDescription1}
												onChange={(value) =>
													setAttributes({ featureDescription1: value })
												}
												placeholder={__(
													"Enter featureDescription...",
													"information-section-2",
												)}
												className="information-section-2-featureDescription"
												style={{
													fontSize: `${featureDescriptionFontSize}px`,
													color: featureDescriptionColor,
												}}
											/>
										</div>
									</div>
									<div
										className="feature-block flex gap-[20px] p-[20px]"
										style={{
											borderRadius: `${imageBorderRadius}px`,
										}}
									>
										<div>
											<img
												className="information-section-2-feature-icon"
												src={featureIcon2 || defaultFeatureIcon2}
												alt="feature image"
												style={{ minWidth: featureIconWidth }}
											/>
										</div>

										<div className="flex flex-col gap-[10px]">
											<RichText
												tagName="h4"
												value={featureTitle2}
												onChange={(value) =>
													setAttributes({ featureTitle2: value })
												}
												placeholder={__(
													"Enter featureTitle...",
													"information-section-2",
												)}
												className="information-section-2-featureTitle"
												style={{
													fontSize: `${featureTitleFontSize}px`,
													color: featureTitleColor,
												}}
											/>
											<RichText
												tagName="p"
												value={featureDescription2}
												onChange={(value) =>
													setAttributes({ featureDescription2: value })
												}
												placeholder={__(
													"Enter featureDescription...",
													"information-section-2",
												)}
												className="information-section-2-featureDescription"
												style={{
													fontSize: `${featureDescriptionFontSize}px`,
													color: featureDescriptionColor,
												}}
											/>
										</div>
									</div>
								</div>
								<div className="flex justify-between items-center mt-[32px]">
									<RichText
										tagName="h3"
										value={ctaTitle}
										onChange={(value) => setAttributes({ ctaTitle: value })}
										placeholder={__(
											"Enter featureDescription...",
											"information-section-2",
										)}
										style={{
											fontSize: `${ctaTitleFontSize}px`,
											color: ctaTitleColor,
										}}
									/>
									<RichText
										tagName="button"
										value={ctaButton}
										onChange={(value) => setAttributes({ ctaButton: value })}
										placeholder={__(
											"Enter featureDescription...",
											"information-section-2",
										)}
										style={{
											fontSize: `${ctaButtonFontSize}px`,
											color: ctaButtonColor,
											marginRight: "20px",
											borderRadius: ctaButtonBorderRadius,
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
