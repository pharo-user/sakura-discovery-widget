export async function fetchById(base_url, id) {
  var url = `${base_url}/api/articleData?mode=3&id=${id}`;
  //return {msg: "found", data: {price: 100, currency: "USD", title_i18n: "Product 1", photo: "discovery-products/8e12f0d8-b07f-0d00-8aa0-ac99055e92fe.png"}};

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