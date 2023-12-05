const express = require("express");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');


const app = express();
const PORT = 8080;

app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

// Routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}/`);
});


// Tugas kita selanjutnya:
// jika string biasa langsung store string ke sql (done)
// sql tetep jadi nambah table upload -> id, user id, text, bucket link, result (done)
// upload file udah done, tinggal bikin api buat proses file ke cloud vision (done)
// nambahin response tiap error
// nambahin ketentuan (maksimal karakter, maksimal size) -> yang pdf klo size aja gapapa? kalo yang pdf ini kan udah ada maksimal size, kalo udah lolos maksimal size, itu kan masuk cek jumlah karakter, itu langsung ditolak apa scan sesuai jumlah maksimal karakter yang kita tentuin
// Buat API fitur premium dan history
// Urusan PDF (nama file gabisa di custom, masih belom  bisa akses json)