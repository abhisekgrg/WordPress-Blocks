import { __ } from '@wordpress/i18n';
import {
  PanelBody,
  SelectControl,
  RangeControl,
  BaseControl,
  Flex,
  FlexItem,
} from '@wordpress/components';


const Typography = ({
  attributes,
  setAttributes,
  attrNamePrefix = '',
  title = __('Typography', 'aideacsent'),
  fontFamilies = [
    { label: __('Default', 'aideacsent'), value: '' },
    { label: 'Arial', value: 'Arial, sans-serif' },
    { label: 'Helvetica', value: 'Helvetica, sans-serif' },
    { label: 'Times New Roman', value: 'Times New Roman, serif' },
    { label: 'Georgia', value: 'Georgia, serif' },
    { label: 'Verdana', value: 'Verdana, sans-serif' },
    { label: 'Roboto', value: 'Roboto, sans-serif' },
    { label: 'Open Sans', value: 'Open Sans, sans-serif' },
    { label: 'Lato', value: 'Lato, sans-serif' },
    { label: 'Montserrat', value: 'Montserrat, sans-serif' },
  ],
  disableFontFamily = false,
  disableFontSize = false,
  disableFontWeight = false,
  disableLineHeight = false,
  disableLetterSpacing = false,
}) => {
  // Generate attribute names based on prefix
  const fontFamilyAttr = `${attrNamePrefix}FontFamily`;
  const fontSizeAttr = `${attrNamePrefix}FontSize`;
  const fontWeightAttr = `${attrNamePrefix}FontWeight`;
  const lineHeightAttr = `${attrNamePrefix}LineHeight`;
  const letterSpacingAttr = `${attrNamePrefix}LetterSpacing`;

  // Get current values from attributes or use defaults
  const fontFamily = attributes[fontFamilyAttr] || '';
  const fontSize = attributes[fontSizeAttr] || 16;
  const fontWeight = attributes[fontWeightAttr] || 400;
  const lineHeight = attributes[lineHeightAttr] || 1.5;
  const letterSpacing = attributes[letterSpacingAttr] || 0;

  // Font weight options
  const fontWeightOptions = [
    { label: __('Light (300)', 'herosection-4'), value: '300' },
    { label: __('Regular (400)', 'herosection-4'), value: '400' },
    { label: __('Medium (500)', 'herosection-4'), value: '500' },
    { label: __('Semi-Bold (600)', 'herosection-4'), value: '600' },
    { label: __('Bold (700)', 'herosection-4'), value: '700' },
    { label: __('Extra Bold (800)', 'herosection-4'), value: '800' },
  ];

  // Update attribute helper function
  const updateAttribute = (attrName, value) => {
    setAttributes({ [attrName]: value });
  };

  return (
    <PanelBody title={title} initialOpen={false}>
      {!disableFontFamily && (
        <SelectControl
          label={__('Font Family', 'aideacsent')}
          value={fontFamily}
          options={fontFamilies}
          onChange={(value) => updateAttribute(fontFamilyAttr, value)}
        />
      )}

      {!disableFontSize && (
        <RangeControl
          label={__('Font Size', 'aideacsent')}
          value={fontSize}
          onChange={(value) => updateAttribute(fontSizeAttr, value)}
          min={8}
          max={100}
          allowReset
          resetFallbackValue={16}
          afterIcon="px"
        />
      )}

      {!disableFontWeight && (
        <SelectControl
          label={__('Font Weight', 'herosection-4')}
          value={fontWeight}
          options={fontWeightOptions}
          onChange={(value) => updateAttribute(fontWeightAttr, value)}
        />
      )}

      <div >
        {!disableLineHeight && (
          <FlexItem style={{ flexBasis: '48%' }}>
            <RangeControl
              label={__('Line Height', 'herosection-4')}
              value={lineHeight}
              onChange={(value) => updateAttribute(lineHeightAttr, value)}
              min={0.5}
              max={3}
              step={0.1}
              allowReset
              
            />
          </FlexItem>
        )}

        {!disableLetterSpacing && (
          <FlexItem style={{ flexBasis: '48%' }}>
            <RangeControl
              label={__('Letter Spacing', 'herosection-4')}
              value={letterSpacing}
              onChange={(value) => updateAttribute(letterSpacingAttr, value)}
              min={-2}
              max={10}
              step={0.1}
              allowReset
             
              afterIcon="px"
            />
          </FlexItem>
        )}
      </div>
    </PanelBody>
  );
};

export default Typography;