<script>



    const getData = async () => {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&timezone=Europe%2FBerlin');
        const jsonData = await res.json(); 
    
        console.log(jsonData);
    }
    
    
</script>

<h1>Welcome to SvelteKit yahooolmao</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={getData}>Get Data</button>