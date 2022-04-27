export async function fetchParamsByWidgetKey(base_url, widgetKey) {
  var url = `${base_url}/api/networks?widgetkey=${widgetKey}`;
  return await fetch(url)
  .then(r => r.json())
  .then(data => {
    return data.params;
  })
  .catch((err) => {
  })
}