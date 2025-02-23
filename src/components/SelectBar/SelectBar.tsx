import React from 'react';
import { Select, Space } from 'antd';
import { addWords } from '../../Redux/slices/wordsSlice.ts';
import { useDispatch } from 'react-redux';
// import { selectWordAction } from '../../services/actions/selectWordsAction';

export const SelectBar = (): React.JSX.Element => {
	const dispatch = useDispatch();
	const handleChange = (value: string) => {
		const newvalue = value;
		console.error(newvalue);
		dispatch(addWords(newvalue));
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
