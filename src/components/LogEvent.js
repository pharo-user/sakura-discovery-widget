
async function getNetworkByWidgetkey(base_url, widgetKey) {
    var url = `${base_url}/api/networks?widgetkey=${widgetKey}`;
    return await fetch(url)
    .then((r) => r.json())
        .then((d) => {
        return d.data;
        })
}

export async function logEvent (event, baseUrl, mode, id, companyNetworkId) {
    let from = mode == 1? 'from-site': 'from-network';
    if (companyNetworkId.length >= 32)
        companyNetworkId = await getNetworkByWidgetkey(baseUrl, companyNetworkId) ;

    const res = await fetch(`${baseUrl}/api/widget/event`, {
        method: 'POST',
        body: JSON.stringify({
            "event": event,
            "to-article": id,
            [from]: companyNetworkId,
            "source": "svelte-widget"
        })
    })
    
    const json = await res.json()
    let result = JSON.stringify(json)
    
    console.log("result: ", result);
}