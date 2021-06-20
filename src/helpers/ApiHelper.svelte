<script context="module">
	import { getToken } from './Auth.svelte';

	const base = 'https://theredhead.dev/api';

	export const getRequest = (url) => {
		return fetch(`${base}/${url}`)
			.then(handleError)
			.then((x) => x.json());
	};

	export const postRequest = (url, body) => {
		return fetch(`${base}/${url}`, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: { ...defaultHeader }
		})
			.then(handleError)
			.then((x) => x.json());
	};

	export const authGetRequest = (url) => {
		return fetch(`${base}/${url}`, {
			headers: {
				authorization: `Bearer ${getToken()}`
			}
		})
			.then(handleError)
			.then((x) => x.json());
	};

	const defaultHeader = {
		'Content-Type': 'application/json'
	};

	const handleError = (status) => {
		if (!status.ok) {
			throw status.statusText;
		}

		return status;
	};
</script>
