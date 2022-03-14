
export async function logEvent (event, baseUrl, mode, id, companyNetworkId) {
    let from = mode == 1? 'from_site': 'from_network';
    
    const res = await fetch(`${baseUrl}/api/widget/event`, {
        method: 'POST',
        body: JSON.stringify({
            "event": event,
            "to-article": id,
            from: companyNetworkId,
            "source": "svelte-widget"
        })
    })
    
    const json = await res.json()
    let result = JSON.stringify(json)
    
    console.log("result: ", result);
}