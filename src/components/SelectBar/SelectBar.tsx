import { Select, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { selectWordAction } from '../../services/actions/selectWordsAction';

export const SelectBar = () => {
	const dispatch = useDispatch();
	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
		dispatch(selectWordAction());
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
