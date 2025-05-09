import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ['aerpn/heading','aerpn/button'];

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<InnerBlocks template={[
					['aerpn/heading', {}],
				
					['aerpn/button', {}]
				]} allowedBlocks={ALLOWED_BLOCKS} />
		</div>
	);
}

