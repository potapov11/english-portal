// import { useState, useEffect } from "react"

import { useEffect } from 'react';
import { useState } from 'react';

export const UseFetch = (url) => {
	const [serverData, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchFunc = async (url) => {
		try {
			const res = await fetch(url);

			if (!res.ok) {
				throw new Error('Ошибка HTTP');
			}

			const data = await res.json();

			setData(data);
		} catch (e) {
			console.error(e.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (url) {
			fetchFunc();
		} else {
			console.log('url не передан');
		}
	}, [url]);

	return { serverData, isLoading };
};
