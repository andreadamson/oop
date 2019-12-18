document.getElementById('btn1').addEventListener('click', getTextData);
document.getElementById('btn2').addEventListener('click', getJSONData);

//lokaalne JSON fail
function getJSONData() {
  fetch('data.JSON')
  .then(function (res){
    return res.json()
  })

  .then(function(data) {
    console.log(data)
    let out = '';
    let tund = '';

    data.forEach(function(timetable){
      out = out + timetable.aine + `<li>${timetable.opetaja}</li>`; 
      console.log(out)
    });
    document.getElementById('out').innerHTML = out;
  })
  .catch(function(error) {
    console.log(error)
  })
}



//lokaalne tekstifail
function getTextData() {
  fetch('text.txt')
  .then(function(res) {
    return res.text();
  })
  .then(function(data) {
    console.log(data)
    document.getElementById('out').innerHTML = data;
  })

  .catch(function(error){
    console.log(error)
  })
}
