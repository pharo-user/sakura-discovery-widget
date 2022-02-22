export async function fetchById(id) {
  var url = `https://sakura.eco/api/networkCardData?id=${id}`;
  
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
