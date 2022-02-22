  export async function fetchById(id) {
    console.log("fetchById: id", id);

    var url = `https://sakura.eco/api/memberCardData?id=${id}`;
   
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