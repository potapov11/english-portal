import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface IWordItem {
	id: string;
	english: string;
	russian: string;
}

export const useFetchWords = (BASE_DB_URL: string, page: number, limit: number = 18) => {
	const [wordsState, setWordsState] = useState<IWordItem[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [totalPages, setTotalPages] = useState<number>(0); // Для хранения общего количества страниц
	const typeWordStore = useSelector((store: any) => store.selectWordsReducer.selectedWordValue);

	useEffect(() => {
		let url = '';
		if (typeWordStore === 'programmWords') {
			url = `${BASE_DB_URL}/programmWords?_page=${page}&_limit=${limit}`;
		} else if (typeWordStore === 'zoodoctorWords') {
			url = `${BASE_DB_URL}/veterinaryWords?_page=${page}&_limit=${limit}`;
		} else if (typeWordStore === 'ingineerWords') {
			url = `${BASE_DB_URL}/engineerWords?_page=${page}&_limit=${limit}`;
		} else {
			url = `${BASE_DB_URL}/words?_page=${page}&_limit=${limit}`;
		}

		const getFetch = async (url: string) => {
			try {
				const res = await fetch(url);

				if (!res.ok) {
					throw new Error('Ошибка при получении данных');
				}

				const data = await res.json();
				setWordsState(data);

				// Получение общего количества страниц
				const totalItems = parseInt(res.headers.get('X-Total-Count') || '0', 10); // JSON Server отправляет это в заголовках
				const totalPagesCount = Math.ceil(totalItems / limit);
				setTotalPages(totalPagesCount);
			} catch (e) {
				console.error(e);
			} finally {
				setIsLoading(false);
			}
		};

		getFetch(url);
	}, [typeWordStore, page, limit]);

	return { wordsState, isLoading, totalPages }; // Возвращаем также общее количество страниц
};
