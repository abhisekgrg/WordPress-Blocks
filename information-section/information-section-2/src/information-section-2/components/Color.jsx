import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	BaseControl,
	ColorPicker,
	Popover,
	Button,
	Flex,
	FlexItem,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

const ColorSettings = ({
	attributes,
	setAttributes,
	attrNamePrefix = '',
	title = __('Color Settings', 'herosection-4'),
	disableTextColor = false,
	disableBackgroundColor = false,
}) => {
	const textColorAttr = `${attrNamePrefix}Color`;
	const bgColorAttr = `${attrNamePrefix}BackgroundColor`;

	const textColor = attributes[textColorAttr] || '#ffffff';
	const backgroundColor = attributes[bgColorAttr] || '#000000';

	const [isTextColorOpen, setIsTextColorOpen] = useState(false);
	const [isBgColorOpen, setIsBgColorOpen] = useState(false);

	const updateColor = (attrName, value) => {
		const hex = value?.hex || value;
		setAttributes({ [attrName]: hex });
	};

	const renderColorPicker = (label, color, onClick, isOpen, setIsOpen, attrName) => (
		<FlexItem >
			
			<BaseControl>
			<div className="flex gap-[10px]">

				<Button
					isSecondary
					onClick={onClick}
					style={{
						backgroundColor: color,
						height: 30,
						width: 30,
						padding: 0,
						border: '1px solid #ccc',
						cursor: 'pointer',
					}}
					aria-label={label}
				/>
				<div>
					{label}
				</div>
					</div>
				{isOpen && (
					<Popover position="bottom center" onClose={() => setIsOpen(false)}>
						<ColorPicker
							color={color}
							onChangeComplete={(value) => updateColor(attrName, value)}
							
						/>
					</Popover>
				)}
			</BaseControl>
						
		</FlexItem>
	);

	return (
		
			<div>
				{!disableTextColor &&
					renderColorPicker(
						__('Text Color', 'herosection-4'),
						textColor,
						() => setIsTextColorOpen(!isTextColorOpen),
						isTextColorOpen,
						setIsTextColorOpen,
						textColorAttr
					)}
				{!disableBackgroundColor &&
					renderColorPicker(
						__('Background Color', 'herosection-4'),
						backgroundColor,
						() => setIsBgColorOpen(!isBgColorOpen),
						isBgColorOpen,
						setIsBgColorOpen,
						bgColorAttr
					)}
			</div>
		
	);
};

export default ColorSettings;