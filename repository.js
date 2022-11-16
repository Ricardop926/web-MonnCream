const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  keyFile: './your-secret-key.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: "v4", auth: auth });

async function read() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: "10lXe57R8YPlaOvlKg58KPnl_D7T7cdqX5WDMJaXCKL0",
    range: "productos!A2:E",
  });

  const rows = response.data.values || [];
  const productos = rows.map((row) => ({
    FoodName: row[0],
    foodimg : row[1],
    price: +row[2],
    des: row[4],
    type: row[3],
  }));

  return productos;
}

async function write(productos) {
  let values = productos.map((p) => [p.FoodName, p.foodimg, p.price, p.type, p.des]);

  const resource = {
    values,
  };
  const result = await sheets.spreadsheets.values.update({
    spreadsheetId: "10lXe57R8YPlaOvlKg58KPnl_D7T7cdqX5WDMJaXCKL0",
    range: "productos!A2:E",
    valueInputOption: "RAW",
    resource,
  });

  console.log(result.updatedCells);
}

// async function readAndWrite() {
//   const products = await read();
//   products[0].stock = 20;
//   await write(products);
// }

// readAndWrite();

module.exports = {
  read,
  write,
};

