<script context="module">
	export const Request = (url) => {
		return fetch(`http://localhost:5000/api/${url}`).then((x) => x.json());
	};
</script>
