const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

const showMonth = (theError, theMonth) => {
  if (theError) {
    console.log("Data Kosong");
    console.log(theError);
  } else {
    theMonth.map((eachMonth) => {
      console.log(eachMonth);
    });
  }
};
getMonth(showMonth);
