import { __ } from '@wordpress/i18n';
import {
  PanelBody,
  SelectControl,
  RangeControl,
  FlexItem,
} from '@wordpress/components';

const Typography = ({
  attributes,
  setAttributes,
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
  const {
    FontFamily = '',
    FontSize = 16,
    FontWeight = '400',
    LineHeight = 1.5,
    LetterSpacing = 0,
  } = attributes;

  const updateAttribute = (attrName, value) => {
    setAttributes({ [attrName]: value });
  };

  const fontWeightOptions = [
    { label: __('Light (300)', 'herosection-4'), value: '300' },
    { label: __('Regular (400)', 'herosection-4'), value: '400' },
    { label: __('Medium (500)', 'herosection-4'), value: '500' },
    { label: __('Semi-Bold (600)', 'herosection-4'), value: '600' },
    { label: __('Bold (700)', 'herosection-4'), value: '700' },
    { label: __('Extra Bold (800)', 'herosection-4'), value: '800' },
  ];

  return (
    <PanelBody title={title} initialOpen={false}>
      {!disableFontFamily && (
        <SelectControl
          label={__('Font Family', 'aideacsent')}
          value={FontFamily}
          options={fontFamilies}
          onChange={(value) => updateAttribute('FontFamily', value)}
        />
      )}

      {!disableFontSize && (
        <RangeControl
          label={__('Font Size', 'aideacsent')}
          value={FontSize}
          onChange={(value) => updateAttribute('FontSize', value)}
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
          value={FontWeight}
          options={fontWeightOptions}
          onChange={(value) => updateAttribute('FontWeight', value)}
        />
      )}

      <div>
        {!disableLineHeight && (
          <FlexItem style={{ flexBasis: '48%' }}>
            <RangeControl
              label={__('Line Height', 'herosection-4')}
              value={LineHeight}
              onChange={(value) => updateAttribute('LineHeight', value)}
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
              value={LetterSpacing}
              onChange={(value) => updateAttribute('LetterSpacing', value)}
              min={-2}
              max={30}
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
