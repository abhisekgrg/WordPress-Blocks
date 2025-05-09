import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		heading,
		headingLevel = "h2",
		useThemeStyle,
		FontSize,
		FontFamily,
		FontWeight,
		LineHeight,
		LetterSpacing,
	} = attributes;

	const tagName = headingLevel === "p" ? "p" : headingLevel;

	const blockProps = useBlockProps.save({
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
		<RichText.Content
			{...blockProps}
			tagName={tagName}
			value={heading}
		/>
	);
}