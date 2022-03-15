// Mengolah Data awal
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// Proses mengubah data
// name : "Rifang Pri Asmara"
// email: "rifang.asmara12@gmail.com"
// hobbies : ["Gaming", "Programming", "Volley Ball", "Watching Movie"]
let hobby = { hobbies: ["Gaming", "Programming", "Volley Ball", "Watching Movie"] };
dataNew = { ...data, name: "Rifang Pri Asmara", email: "rifang.asmara12@gmail.com", ...hobby };

//Cetak Data lama dan Data baru
console.log("Data Lama");
console.log(data);
console.log("Data Baru");
console.log(dataNew);

//Proses mengambil data
const { street, city } = data.address;

//Cetak Data street dan city
console.log(`Data street yang di tangkap adalah ${street}`);
console.log(`Data city yang ditangkap adalah ${city}`);
