import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	TabPanel,
	SelectControl,
	RangeControl,
	ColorPalette,
	Button,
	Spinner,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalText as Text,
	TextControl ,	
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import apiFetch from "@wordpress/api-fetch";

export default function Edit({ attributes, setAttributes }) {
	const {
		menu,
		logoWidth,
		navColor,
		titleFontSize,
		navTextColor,
		buttonFontSize,
		buttonBgColor,
		buttonTextColor,
		logoUrl,
		buttonText,
		buttonUrl,  
	} = attributes;

	const [menus, setMenus] = useState([]);
	const [menuItems, setMenuItems] = useState([]);
	const [loadingMenus, setLoadingMenus] = useState(true);
	const [loadingLogo, setLoadingLogo] = useState(true);

	useEffect(() => {
		apiFetch({ path: "/wp-navbar-1/v1/menus" }).then((menusData) => {
			setMenus(menusData);
			setLoadingMenus(false);
		});

		
		if (!logoUrl) {
			apiFetch({ path: "/wp/v2/settings" }).then((settings) => {
				const siteLogoUrl = settings.site_logo_url || "";
				setAttributes({ logoUrl: siteLogoUrl });
				setLoadingLogo(false);
			});
		} else {
			setLoadingLogo(false);
		}
	}, []);

	useEffect(() => {
		if (!menu) return;

		apiFetch({ path: `/wp-navbar-1/v1/menus/${menu}` })
			.then((items) => {
				setMenuItems(items);
			})
			.catch((err) => {
				console.error("Error fetching menu items:", err);
				setMenuItems([]);
			});
	}, [menu]);

	const openMediaLibrary = () => {
		const mediaFrame = wp.media({
			title: "Select Logo",
			button: { text: "Use this image" },
			multiple: false,
		});

		mediaFrame.on("select", () => {
			const selected = mediaFrame.state().get("selection").first().toJSON();
			setAttributes({ logoUrl: selected.url });
		});

		mediaFrame.open();
	};

	const blockProps = useBlockProps();

	const menuOptions = menus.map((menuItem) => ({
		label: menuItem.name,
		value: menuItem.slug,
	}));

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
								<PanelBody title="Navbar Controls" initialOpen={true}>
									{loadingMenus ? (
										<Spinner />
									) : (
										<SelectControl
											label="Select Menu"
											value={menu}
											options={menuOptions}
											onChange={(value) => setAttributes({ menu: value })}
										/>
									)}

									<p>Upload Logo</p>
									{loadingLogo ? (
										<Spinner />
									) : (
										<div>
											<Button isSecondary onClick={openMediaLibrary}>
												{logoUrl ? "Change Logo" : "Upload Logo"}
											</Button>
											{logoUrl && (
												<img
													src={logoUrl}
													alt="Logo"
													style={{ width: logoWidth + "px", marginTop: "10px" }}
												/>
											)}
										</div>
									)}
									<InspectorControls>
									<PanelBody>

									<TextControl
								label={__("Button Text", "abhisek-navbar")}
								value={buttonText}
								onChange={(value) => setAttributes({ buttonText: value })}
								/>
								<TextControl
								label={__("Button URL", "abhisek-navbar")}
								value={buttonUrl}
								onChange={(value) => setAttributes({ buttonUrl: value })}
								/>
								</PanelBody>
								</InspectorControls>

								</PanelBody>
							);
						}

						if (tab.name === "styles") {
							return (
								<>
									<PanelBody
										title={__("Logo", "abhisek-navbar")}
										initialOpen={true}
									>
										<ToolsPanel label={__("Dimensions")}>
											<UnitControl
												__next40pxDefaultSize
												label={__("Width")}
												onChange={(width) =>
													setAttributes({ logoWidth: width })
												}
												value={logoWidth}
											/>
										</ToolsPanel>
									</PanelBody>
									<PanelBody
										title={__("Nav", "abhisek-navbar")}
										initialOpen={false}
									>
										
											
										<RangeControl
											label={__("Font Size", "abhisek-navbar")}
											value={titleFontSize}
											onChange={(value) =>
												setAttributes({ titleFontSize: value })
											}
											min={12}
											max={36}
											/>
										 
											
											
										<ColorPalette
											label={__("Nav Color", "abhisek-navbar")}
											colors={[
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
											]}
											value={navColor}
											onChange={(color) => setAttributes({ navColor: color })}
											/>
											
									</PanelBody>
									<PanelBody
										title={__("Button", "abhisek-navbar")}
										initialOpen={false}
									>
										<RangeControl
											label={__("Font Size", "abhisek-navbar")}
											value={buttonFontSize}
											onChange={(value) =>
												setAttributes({ buttonFontSize: value })
											}
											min={12}
											max={36}
										/>
										<InspectorControls>
											<PanelBody>

											
										<Text align="left" isBlock>
											Button Text Color
										</Text>
											
											
											
										<ColorPalette
											label={__("Button Text Color", "abhisek-navbar")}
											colors={[
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
											]}
											value={buttonTextColor}
											onChange={(color) =>
												setAttributes({ buttonTextColor: color })
											}
											/>
											</PanelBody>
											</InspectorControls>
											<InspectorControls>
												<PanelBody>

											
										<Text align="left" isBlock>
											Button Background Color
										</Text>
										<ColorPalette
											label={__("Button Background Color", "abhisek-navbar")}
											colors={[
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
											]}
											value={buttonBgColor}
											onChange={(color) =>
												setAttributes({ buttonBgColor: color })
											}
											/>
											</PanelBody>
											</InspectorControls>
									</PanelBody>
								</>
							);
						}
					}}
				</TabPanel>
			</InspectorControls>

			<div {...blockProps}>
				<div
					className="nav-1-header"
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						padding: "20px",
						height: "100px"
					}}
				>
					{logoUrl ? (
						<img src={logoUrl} alt="Logo" style={{ width: logoWidth }} />
					) : (
						<p>No logo uploaded</p>
					)}

					<nav>
						{menuItems.length > 0 ? (
							<ul
								style={{
									display: "flex",
									gap: "15px",
									listStyle: "none",
									margin: 0,
									padding: 0,
									fontSize: `${titleFontSize}px`,
									color: navColor,
								}}
							>
								{menuItems.map((item) => (
									<li key={item.id}>
										<a
											href={item.url}
											style={{
												color: navColor,
												textDecoration: "none",
											}}
										>
											{item.title}
										</a>
									</li>
								))}
							</ul>
						) : (
							<p style={{ color: navTextColor, fontSize: titleFontSize }}>
								No menu items
							</p>
						)}
					</nav>
                 <button className="nav-header-1-button" style={{
							backgroundColor: buttonBgColor,
							fontSize: buttonFontSize,
							color: buttonTextColor,
							
						}} >
					<a href={buttonUrl} >
						{buttonText}
						</a>
					</button>
				</div>
			</div>
		</>
	);
}
