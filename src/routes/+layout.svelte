<script>
	import '../app.css';
	//import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Platypi:ital,wght@0,300..800;1,300..800&family=Sedan+SC&display=swap" rel="stylesheet">
</svelte:head>

<div class="flex h-dvh flex-col justify-between">
	<!-- <div><Navbar /></div> -->
	<div class="container h-5/6 grow overflow-hidden px-0 py-2">
		<slot> </slot>
	</div>
	<div>
		<div class="flex justify-center p-4 bg-stone-300">
			yu
		</div>
	</div>
</div>
