import { useEffect, useState } from 'react';

export const UseFetch = (url: string) => {
	const [serverData, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchFunc = async (url: string) => {
		try {
			const res = await fetch(url);

			if (!res.ok) {
				throw new Error('Ошибка HTTP');
			}

			const data = await res.json();

			setData(data);
		} catch (e) {
			if (e instanceof Error) {
				console.error(e.message);
			} else {
				console.error('An unknown error occurred');
			}
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (url) {
			fetchFunc(url);
		} else {
			console.error('не передан');
		}
	}, [url]);

	return { serverData, isLoading };
};
