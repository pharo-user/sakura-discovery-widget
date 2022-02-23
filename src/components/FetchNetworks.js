export async function fetchById(base_url, id) {
  var url = `${base_url}/api/networkCardData?id=${id}`;
  
  return await fetch(url)
  .then(r => r.json())
  .then(data => {
    console.log("network's response:", data);
    return data;
  })
  .catch((err) => {
    console.err("Error encountered: ", err);
  })
}
