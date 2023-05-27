import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { columns } = attributes;
	const onChangeColumns = (newColumns) => {
		setAttributes({ columns: newColumns });
	}
	return (
		<div {...useBlockProps({
			className: `has-${columns}-columns`,
		})}>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={__("Columns", "team-members")}
						min={1}
						max={6}
						onChange={onChangeColumns}
						value={columns}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={["sotech-blocks/team-member"]} 
				orientation="horizontal"
				template={[
					['sotech-blocks/team-member'],
					['sotech-blocks/team-member'],
					['sotech-blocks/team-member'],
				]}
			/>
		</div>
	);
}
