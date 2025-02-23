import { Button } from 'antd';

export const MixWords = ({ setPage, page }) => {
	const hadleMixBtn = () => {
		if (page < 3) {
			setPage(++page);
		} else {
			setPage(1);
		}
	};

	return (
		<div>
			<Button onClick={() => hadleMixBtn()}>Перемешать</Button>
		</div>
	);
};
