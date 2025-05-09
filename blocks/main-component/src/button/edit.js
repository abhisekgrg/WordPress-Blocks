import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import Typography from "../main-component/components/Typography";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
  const {
    heading,
    borderRadius,
    useThemeStyle,
    FontSize,
    FontFamily,
    FontWeight,
    LineHeight,
    LetterSpacing,
  } = attributes;

  // Normalize double-spaces into NBSP so they’ll stick
  const onChangeHeading = ( newContent ) => {
    setAttributes({
      heading: newContent.replace(/ {2}/g, '\u00A0\u00A0'),
    });
  };

  // Build our <button> props—in particular we force white-space:pre-wrap
  const buttonProps = useBlockProps({
    className: useThemeStyle ? 'disable-support-styles' : undefined,
    style: {
      whiteSpace: 'pre-wrap',
      ...( ! useThemeStyle && {
        fontSize:      FontSize,
        fontFamily:    FontFamily,
        fontWeight:    FontWeight,
        lineHeight:    LineHeight,
        letterSpacing: LetterSpacing,
        borderRadius:  borderRadius ? `${ borderRadius }px` : undefined,
      } ),
    },
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
      </InspectorControls>

      { ! useThemeStyle && (
        <InspectorControls group="styles">
          <PanelBody title={ __( 'Border Radius', 'aerpn' ) } initialOpen={ true }>
            <RangeControl
              label={ __( 'Border Radius', 'aerpn' ) }
              value={ borderRadius }
              onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
              min={ 0 }
              max={ 100 }
            />
          </PanelBody>
          <Typography
            attributes={ attributes }
            setAttributes={ setAttributes }
            attrNamePrefix=""
            title={ __( 'Title Typography', 'aerpn' ) }
          />
        </InspectorControls>
      ) }

      {/* ← Here’s the tweak:
          - buttonProps on the <button>
          - RichText as a <span> inside */}
      <button {...buttonProps}>
        <RichText
          tagName="span"
          value={ heading }
          onChange={ onChangeHeading }
          placeholder={ __( 'Type here…', 'aerpn' ) }
          allowedFormats={ [] }
        />
      </button>
    </>
  );
}
