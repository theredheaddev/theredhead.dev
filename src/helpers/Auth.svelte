<script lang="ts" context="module">
	export const getToken = () => {
		return window.localStorage.getItem('rhd-token');
	};

	export const setToken = (token) => {
		return window.localStorage.setItem('rhd-token', token);
	};
</script>
