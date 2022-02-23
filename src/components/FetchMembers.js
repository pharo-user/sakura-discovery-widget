  export async function fetchById(base_url, id) {
    var url = `${base_url}/api/memberCardData?id=${id}`;
   
    return await fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("member's response:", data);
      return data;
    })
    .catch((err) => {
      console.err("Error encountered: ", err);
    })
  }