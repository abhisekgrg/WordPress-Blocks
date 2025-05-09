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
import defaultFeatureIcon1 from "./assets/feature-Icon-1.png";
import defaultFeatureIcon2 from "./assets/feature-Icon-2.png";
import defaultImageOneUrl from "./assets/1.png";
import defaultImageTwoUrl from "./assets/2.png";
import defaultImageThreeUrl from "./assets/3.png";


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
		imageThreeUrl,
	
		

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
		featureIconWidth
	} = attributes;


const colors=	[
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
		},]

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
			setAttributes({ imageOneUrl: defaultImageOneUrl  });
		}
		if (!imageTwoUrl) {
			setAttributes({ imageTwoUrl: defaultImageTwoUrl   });
		}
		if (!imageThreeUrl) {
			setAttributes({ imageThreeUrl: defaultImageThreeUrl   });
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
										title={__("Images", "information-section-1")}
										initialOpen={false}
									>
										<div className="flex gap-[10px] mb-[10px] ">
											<Button
												isSecondary
												onClick={() => openMediaLibrary("imageOneUrl")}
											>
												{imageOneUrl
													? "Change Image"
													: "Upload First Image"}
											</Button>
											{imageOneUrl && (
												<img
													src={imageOneUrl}
													alt=""
													className=" information-section-1-sidebar-img w-[100px] object-cover"
												/>
											)}
										</div>
										<div className="flex gap-[10px] mb-[10px] ">
											<Button
												isSecondary
												onClick={() => openMediaLibrary("imageTwoUrl")}
											>
												{imageTwoUrl
													? "Change Image"
													: "Upload Second Image"}
											</Button>
											{imageTwoUrl && (
												<img
													src={imageTwoUrl}
													alt=""
													className=" information-section-1-sidebar-img w-[100px] object-cover"
												/>
											)}
										</div>
										<div className="flex gap-[10px] mb-[10px] ">
											<Button
												isSecondary
												onClick={() => openMediaLibrary("imageThreeUrl")}
											>
												{imageThreeUrl
													? "Change Image"
													: "Upload Third Image"}
											</Button>
											{imageThreeUrl && (
												<img
													src={imageThreeUrl}
													alt=""
													className=" information-section-1-sidebar-img w-[100px] object-cover"
												/>
											)}
										</div>
									</PanelBody>
									<PanelBody
										title={__("Features Icon", "information-section-1")}
										initialOpen={false}
									>
										<div className="flex gap-[10px] mb-[10px] ">
											<Button
												isSecondary
												onClick={() => openMediaLibrary("featureIcon1")}
											>
												{featureIcon1
													? "Change Image"
													: "Upload First Icon"}
											</Button>
											{featureIcon1 && (
												<img
													src={featureIcon1}
													alt=""
													className=" information-section-1-sidebar-img w-[100px] object-cover"
												/>
											)}
										</div>
										<div className="flex gap-[10px] mb-[10px] ">
											<Button
												isSecondary
												onClick={() => openMediaLibrary("featureIcon2")}
											>
												{featureIcon2
													? "Change Image"
													: "Upload Second Icon"}
											</Button>
											{featureIcon2 && (
												<img
													src={featureIcon2}
													alt=""
													className=" information-section-1-sidebar-img w-[100px] object-cover"
												/>
											)}
										</div>
									</PanelBody>
								</>
							);
						}

						if (tab.name === "styles") {
							return (
								<>
									<PanelBody
										title={__("Title", "information-section-1")}
										initialOpen={false}
									>
                                           
     
										<RangeControl
											label={__("Font Size", "information-section-1")}
											value={titleFontSize}
											onChange={(value) =>
												setAttributes({ titleFontSize: value })
											}/>
										<ColorPalette
											label={__("Title Color", "information-section-1")}
											colors={colors}
											value={titleColor}
											onChange={(color) => setAttributes({ titleColor: color })}
										/>
									</PanelBody>
									<PanelBody
										title={__("Sub Title", "information-section-1")}
										initialOpen={false}
									>
                                           
     
										<RangeControl
											label={__("Font Size", "information-section-1")}
											value={subTitleFontSize}
											onChange={(value) =>
												setAttributes({ subTitleFontSize: value })
											}/>
										<ColorPalette
											label={__("Sub Title Color", "information-section-1")}
											colors={colors}
											value={subTitleColor}
											onChange={(color) => setAttributes({ subTitleColor: color })}
										/>
									</PanelBody>
									<PanelBody
										title={__("Description", "information-section-1")}
										initialOpen={false}
									>
										<RangeControl
											label={__("Font Size", "information-section-1")}
											value={descriptionFontSize}
											onChange={(value) =>
												setAttributes({ descriptionFontSize: value })
											}
											min={12}
											max={36}
										/>

										<ColorPalette
											label={__("Decription Color", "information-section-1")}
											colors={colors}
											value={descriptionColor}
											onChange={(color) =>
												setAttributes({ descriptionColor: color })
											}
										/>
									</PanelBody>
									<PanelBody
										title={__("Author Name", "information-section-1")}
										initialOpen={false}
									>
										<RangeControl
											label={__("Font Size", "information-section-1")}
											value={authorNameFontSize}
											onChange={(value) =>
												setAttributes({ authorNameFontSize: value })
											}
											min={12}
											max={36}
										/>

										<ColorPalette
											label={__("Author Color", "information-section-1")}
											colors={colors}
											value={authorNameColor}
											onChange={(color) =>
												setAttributes({authorNameColor : color })
											}
										/>
									</PanelBody>
									<PanelBody
										title={__("Author Position", "information-section-1")}
										initialOpen={false}
									>
										<RangeControl
											label={__("Font Size", "information-section-1")}
											value={authorPositionFontSize}
											onChange={(value) =>
												setAttributes({ authorPositionFontSize: value })
											}
											min={12}
											max={36}
										/>

										<ColorPalette
											label={__("Author Color", "information-section-1")}
											colors={colors}
											value={authorPositionColor}
											onChange={(color) =>
												setAttributes({ authorPositionColor: color })
											}
										/>
									</PanelBody>
									<PanelBody
										title={__("Author Message", "information-section-1")}
										initialOpen={false}
									>
										<RangeControl
											label={__("Font Size", "information-section-1")}
											value={authorMessageFontSize}
											onChange={(value) =>
												setAttributes({ authorMessageFontSize: value })
											}
											min={12}
											max={36}
										/>

										<ColorPalette
											label={__("Author Message Color", "information-section-1")}
											colors={colors}
											value={authorMessageColor}
											onChange={(color) =>
												setAttributes({ authorMessageColor: color })
											}
										/>
									</PanelBody>
									<PanelBody
										title={__("Feature Title", "information-section-1")}
										initialOpen={false}
									>
										<RangeControl
											label={__("Font Size", "information-section-1")}
											value={featureTitleFontSize}
											onChange={(value) =>
												setAttributes({ featureTitleFontSize: value })
											}
											min={12}
											max={36}
										/>

										<ColorPalette
											label={__("Feature Title Color", "information-section-1")}
											colors={colors}
											value={featureTitleColor}
											onChange={(color) =>
												setAttributes({ featureTitleColor: color })
											}
										/>
									</PanelBody>
									<PanelBody
										title={__("Feature Description", "information-section-1")}
										initialOpen={false}
									>
										<RangeControl
											label={__("Font Size", "information-section-1")}
											value={featureDescriptionFontSize}
											onChange={(value) =>
												setAttributes({ featureDescriptionFontSize: value })
											}
											min={12}
											max={36}
										/>

										<ColorPalette
											label={__("Feature Description Color", "information-section-1")}
											
											value={featureDescriptionColor}
											onChange={(color) =>
												setAttributes({ featureDescriptionColor: color })
											}
										/>
									</PanelBody>
									<PanelBody
										title={__("Feature Icon", "information-section-1")}
										initialOpen={false}
									>
										<RangeControl
											label={__("Width", "information-section-1")}
											value={featureIconWidth}
											onChange={(value) =>
												setAttributes({ featureIconWidth: value })
											}
											min={10}
											max={100}
										/>
									</PanelBody>
									<PanelBody
										title={__("Background Color", "information-section-1")}
										initialOpen={false}
									>
										<ColorPalette
											label={__("Feature Background Color", "information-section-1")}
											colors={colors}
											value={featureBackgroundColor}
											onChange={(color) =>
												setAttributes({ featureBackgroundColor: color })
											}
										/>
									</PanelBody>
									<PanelBody
										title={__("Border Radius", "information-section-1")}
										initialOpen={false}
									>
										<RangeControl
											label={__("Border Radius", "information-section-1")}
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

			<div {...blockProps} >
				<div className="information-section-1-content  items-center flex gap-10">
					<div className="information-section-1-text-content  flex flex-col gap-4 w-1/2">
						<div className="gap-[20px] flex flex-col">
							<RichText
								tagName="h2"
								value={title}
								onChange={(value) => setAttributes({ title: value })}
								placeholder={__("Enter title...", "information-section-1")}
								className="information-section-1-title font-semibold"
								style={{
									fontSize: `${titleFontSize}px`,
									color: titleColor,
									fontWeight: "600",
								}}
							/>
							<RichText
								tagName="h3"
								value={subTitle}
								onChange={(value) => setAttributes({ subTitle: value })}
								placeholder={__("Enter sub title...", "information-section-1")}
								className="information-section-1-sub-title font-medium"
								style={{
									fontSize: `${subTitleFontSize}px`,
									color: subTitleColor,
								}}
							/>
							<RichText
								tagName="p"
								value={description}
								onChange={(value) => setAttributes({ description: value })}
								placeholder={__(
									"Enter description...",
									"information-section-1",
								)}
								className="information-section-1-description"
								style={{
									fontSize: `${descriptionFontSize}px`,
									color: descriptionColor,
								}}
							/>
						</div>
						<div
							className=" mt-[40px] flex flex-col pl-[50px] gap-[25px] "
							style={{ borderLeft: '1px solid ' + featureBackgroundColor }}

						>
							<RichText
								tagName="p"
								value={authorMessage}
								onChange={(value) => setAttributes({ authorMessage: value })}
								placeholder={__(
									"Enter authorMessage...",
									"information-section-1",
								)}
								className="information-section-1-authorMessage"
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
										"information-section-1",
									)}
									className="information-section-1-authorName"
									style={{
										fontSize: `${authorNameFontSize}px`,
										color: authorNameColor,
										fontWeight: "600",
									}}
								/>
								<RichText
									tagName="h4"
									value={authorPosition}
									onChange={(value) => setAttributes({ authorPosition: value })}
									placeholder={__(
										"Enter authorPosition...",
										"information-section-1",
									)}
									className="information-section-1-authorPosition"
									style={{
										fontSize: `${authorPositionFontSize}px`,
										color: authorPositionColor,
									}}
								/>
							</div>
						</div>
					</div>
					<div className="information-section-1-right-section flex flex-col gap-[20px] justify-center relative w-1/2">
						<div className="information-section-1-image-div w-[100%] flex flex-col gap-[20px]">
							<div className="flex gap-[20px]">
								<div
									className="information-section-1-image-box w-[35%] bg-cover bg-center flex items-center justify-center"
									style={{
										backgroundImage: imageOneUrl
											? `url(${imageOneUrl || defaultImageOneUrl})`
											: "none",
										
										borderRadius: `${imageBorderRadius}px`,
									}}
								>
									
								</div>

								<div
									className="information-section-1-image-box w-[65%] bg-cover bg-center flex items-center justify-center"
									style={{
										backgroundImage: 
											 `url(${imageThreeUrl || defaultImageThreeUrl })`,
									
										borderRadius: `${imageBorderRadius}px`,
									}}
								>
								</div>
							</div>

							<div
								className="information-section-1-image-box w-[100%] bg-cover bg-center flex items-center justify-center"
								style={{
									backgroundImage: imageThreeUrl
										? `url(${imageTwoUrl || defaultImageTwoUrl})`
										: "none",
									
									borderRadius: `${imageBorderRadius}px`,
								}}
							>
								
							</div>
						</div>
						<div className="features-block flex gap-[20px]">
							<div
								className="feature-block flex gap-[20px] p-[20px]"
								style={{
									backgroundColor: featureBackgroundColor,
									borderRadius: `${imageBorderRadius}px`,
								}}
							>
								<div>
									<img
										className="information-section-1-feature-icon"
										src={featureIcon1 || defaultFeatureIcon1}
										alt="feature image"
										style={{minWidth:featureIconWidth}}
									/>
								</div>
								<div className="flex flex-col gap-[10px]">
									<RichText
										tagName="h4"
										value={featureTitle1}
										onChange={(value) => setAttributes({ featureTitle1: value })}
										placeholder={__(
											"Enter featureTitle...",
											"information-section-1",
										)}
										className="information-section-1-featureTitle"
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
											"information-section-1",
										)}
										className="information-section-1-featureDescription"
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
									backgroundColor: featureBackgroundColor,
									borderRadius: `${imageBorderRadius}px`,
								}}
							>
								<div>
									<img
										className="information-section-1-feature-icon"
										src={featureIcon2 || defaultFeatureIcon2}
										alt="feature image"
										style={{minWidth:featureIconWidth}}
									/>
								</div>

								<div className="flex flex-col gap-[10px]">
									<RichText
										tagName="h4"
										value={featureTitle2}
										onChange={(value) => setAttributes({ featureTitle2: value })}
										placeholder={__(
											"Enter featureTitle...",
											"information-section-1",
										)}
										className="information-section-1-featureTitle"
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
											"information-section-1",
										)}
										className="information-section-1-featureDescription"
										style={{
											fontSize: `${featureDescriptionFontSize}px`,
											color: featureDescriptionColor,
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
