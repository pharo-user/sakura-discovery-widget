
  function rand(min,max) {
    let randomNum = Math.random() * (max-min) + min;
    console.log(randomNum);
    return Math.round(randomNum);
  }
  
  function decode_i18n(d) {
    if (typeof d == "string")
      return d;
    if (d == [])
      return "";
    if (Array.isArray(d) && d.length > 0)
      return d[0];
    if (typeof d == "object")
      return d.en;
    return "";
  }


  export async function fetchById(base_url, mode, id) {
    //return [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], ""];

    var url = `${base_url}/api/articleData?mode=${mode}&id=${id}`;
    return await fetch(url)
    .then((r) => r.json())
      .then((d) => {
        console.log("items in json: ", d)
        var items = [];
        var e,art;
        for (e in d.data) {
          art = d.data[e];
          //console.log(art);
          items.push( 
            art
          )
        };
        console.log(items);
        return [items,decode_i18n(d.title)];
      })
  }

  let itemsExample=[
    {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: 'https://confettibird.no/product/confetti-mama-icy-blue/',
      item_title: 'Made for you, inspired by confettibirds.',
      price: '2200',
      name: 'Confetti Mama -  Icy Blue',
      brand: 'Confettibird',
      currency: 'NOK'
    },
    {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '/media/discovery-products/40ce0b28-ce7a-0d00-b0d7-fb940e6fa363.png',
      item_title: 'Confettibird is a Norwegian clothing brand inspired by the simple nordic expression and the chilled bohemian look. The first collection launched 12th of April 2018, and was a tribute to nine beautiful souls – these are, and will always be confettibirds. And so the journey continues…..',
      price: '',
      name: 'CAMILLA VOLDEN',
      brand: 'Confettibird',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample3',
      price: '999999',
      name: 'F111',
      brand: 'Ferrari',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample4',
      price: '0.9999',
      name: 'XYZW',
      brand: 'Acme',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample5',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample6',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample7',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample8',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample9',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample10',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample11',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample12',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample13',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample14',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample15',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample16',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample17',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample18',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample19',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample20',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample21',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample22',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample23',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url:`https://picsum.photos/seed/${rand(0,200)}/800/800`,
      item_url: '',
      item_title: 'sample24',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }
  ];

 // export default items;