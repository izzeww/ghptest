<script>


    const getData = async () => {
        const res = await fetch('https://query1.finance.yahoo.com/v7/finance/quote?&symbols=GME,^DJI,^GSPC,^IXIC,^RUT&fields=currency,fromCurrency,toCurrency,exchangeTimezoneName,exchangeTimezoneShortName,gmtOffSetMilliseconds,regularMarketChange,regularMarketChangePercent,regularMarketPrice,regularMarketTime,preMarketTime,postMarketTime,extendedMarketTime&crumb=6Vjd51pot.2&formatted=false&region=US&lang=en-US');
        const jsonData = res.json(); 
    
        console.log(jsonData);
    }
    
    
</script>

<h1>Welcome to SvelteKit yahooolmao</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={getData}>Get Data</button>

