import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalText as Text,
	__experimentalUnitControl as UnitControl,
	ToggleControl,
                                                        
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const ALLOWED_BLOCKS = ["aerpn/heading", "aerpn/button"];

export default function Edit({ attributes, setAttributes }) {
	const {
		width,
		  useThemeStyle
	} = attributes;
	const blockProps = useBlockProps(
		{
			className: useThemeStyle ? "disable-support-styles" : "",
			style: !useThemeStyle
				? {
						width: width || undefined,
				  }
				: undefined,
		}
	);

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
			</InspectorControls>
			{ ! useThemeStyle && (

			<InspectorControls group="styles">
				<PanelBody title={__("Width", "aerpn")} initialOpen={true}>
					<ToolsPanel label={__("Dimensions")}>
						<UnitControl
							__next40pxDefaultSize
							label={__("Width")}
							onChange={(value) => setAttributes({ width: value })}
							value={width}
						/>
					</ToolsPanel>
				</PanelBody>
			</InspectorControls>

			)}
			<div {...blockProps} >
				<InnerBlocks
					template={[
						["aerpn/heading", {}],

						["aerpn/button", {}],
					]}
					allowedBlocks={ALLOWED_BLOCKS}
				/>
			</div>
		</>
	);
}
