import{s as y,n as u}from"../chunks/scheduler.BvLojk_z.js";import{S as b,i as g,e as f,s as C,c as v,g as d,a as j,b as o,l as D,d as i}from"../chunks/index.BKJOSYP2.js";function T(r){let e,m="Welcome to SvelteKit",a,n,_='Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation',c,s,h="Get Data",p,x;return{c(){e=f("h1"),e.textContent=m,a=C(),n=f("p"),n.innerHTML=_,c=C(),s=f("button"),s.textContent=h},l(t){e=v(t,"H1",{"data-svelte-h":!0}),d(e)!=="svelte-yyjjjs"&&(e.textContent=m),a=j(t),n=v(t,"P",{"data-svelte-h":!0}),d(n)!=="svelte-jl9sbz"&&(n.innerHTML=_),c=j(t),s=v(t,"BUTTON",{"data-svelte-h":!0}),d(s)!=="svelte-1xltpc6"&&(s.textContent=h)},m(t,l){o(t,e,l),o(t,a,l),o(t,n,l),o(t,c,l),o(t,s,l),p||(x=D(s,"click",r[0]),p=!0)},p:u,i:u,o:u,d(t){t&&(i(e),i(a),i(n),i(c),i(s)),p=!1,x()}}}function k(r){return[async()=>{const a=await(await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&timezone=Europe%2FBerlin")).json();console.log(a)}]}class w extends b{constructor(e){super(),g(this,e,k,T,y,{})}}export{w as component};
