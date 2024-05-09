<script>
	import '../app.css';
	//import Navbar from '$lib/components/Navbar.svelte';
</script>

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
