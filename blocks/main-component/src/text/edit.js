import { __ } from "@wordpress/i18n";
import {
	RichText,
	useBlockProps,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	ToggleControl,
} from "@wordpress/components";
import Typography from "../main-component/components/Typography";

export default function Edit({ attributes, setAttributes }) {
	const {
		heading,
		headingLevel = "h2",
		useThemeStyle,
		test,
		FontSize,
		FontFamily,
		FontWeight,
		LineHeight,
		LetterSpacing,
	} = attributes;

	const tagName = headingLevel === "p" ? "p" : headingLevel;

	const blockProps = useBlockProps({
		className: useThemeStyle ? "disable-support-styles" : "",
		style: !useThemeStyle
			? {
					fontSize: FontSize || undefined,
					fontFamily: FontFamily || undefined,
					fontWeight: FontWeight || undefined,
					lineHeight: LineHeight || undefined,
					letterSpacing: LetterSpacing || undefined,
			  }
			: undefined,
	});

	return (
		<>
			<InspectorControls>
			<PanelBody title={ __( 'Theme Style', 'aerpn' ) } initialOpen={ true }>
          <ToggleControl
            label={ __( 'Use Theme Style', 'aerpn' ) }
            checked={ useThemeStyle }
            onChange={ ( value ) => setAttributes( { useThemeStyle: value } ) }
          />
          { useThemeStyle && (
            <p className="components-base-control__help" style={ { marginTop: '0.5em' } }>
              { __(
                "Theme styling is active — all style controls are disabled to ensure consistency with your site's design.",
                'aerpn'
              ) }
            </p>
          ) }
        </PanelBody>
				<PanelBody title="Text Settings">
					<SelectControl
						label="Text Tag"
						value={headingLevel}
						options={[
							{ label: "Paragraph", value: "p" },
							{ label: "H1", value: "h1" },
							{ label: "H2", value: "h2" },
							{ label: "H3", value: "h3" },
							{ label: "H4", value: "h4" },
							{ label: "H5", value: "h5" },
							{ label: "H6", value: "h6" },
						]}
						onChange={(newLevel) =>
							setAttributes({ headingLevel: newLevel })
						}
					/>
				</PanelBody>
			</InspectorControls>

			<InspectorControls group="styles">
				<Typography
					attributes={attributes}
					setAttributes={setAttributes}
					attrNamePrefix=""
					title={__("Title Typography", "aerpn")}
				/>
			</InspectorControls>

			<RichText
				{...blockProps}
				tagName={tagName}
				value={heading}
				onChange={(newContent) => setAttributes({ heading: newContent })}
				placeholder="Enter your text..."
				
			/>
		</>
	);
}
