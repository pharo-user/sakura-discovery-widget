export async function fetchById(base_url, id) {
  var url = `${base_url}/api/articleData?mode=3&id=${id}`;

  console.log("rrr", id)
  return await fetch(url)
  .then(r => r.json())
  .then(data => {
    console.log("network's response:", data);
    return data;
  })
  .catch((err) => {
    console.error("Error encountered: ", err);
  })
}