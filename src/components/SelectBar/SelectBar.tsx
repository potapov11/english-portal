import { Select, Space } from 'antd';

export const SelectBar = () => {
	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};
	return (
		<Space wrap>
			<Select
				defaultValue="Выбери нужные слова"
				style={{ width: 220 }}
				onChange={handleChange}
				options={[
					{ value: 'programmWords', label: 'Слова программиста' },
					{ value: 'zoodoctorWords', label: 'Слова ветврача' },
					{ value: 'ingineerWords', label: 'Слова инженера' },
				]}
			/>
		</Space>
	);
};
