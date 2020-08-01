const express = require("express") //memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

// endpoint "/celcius/nilai" dengan method GET
app.get("/:celcius/:nilai", (req,res) => {
    // :celcius, :nilai diberikan titik dua didepan menunjukkan "celcius", "nilai"
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request

    // menampung data yang dikirimkan
    let celcius = Number(req.params.celcius) // mengambil nilai pada parameter suhu
    let nilai = Number(req.params.nilai) // mengambil nilai pada parameter nilai

    let reamur = (4/5) * nilai
    let fahrenheit = (9/5) * nilai + 32
    let kelvin = nilai + 273

    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data suhu dan nilai sesuai dengan nilai parameter
    let response = {
        celcius: nilai,
        reamur: reamur,
        fahrenheit: fahrenheit,
        kelvin: kelvin
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// endpoint "/reamur/nilai" dengan method GET
app.get("/:reamur/:nilai", (req,res) => {
    // :reamur, :nilai diberikan titik dua didepan menunjukkan "reamur", "nilai"
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request

    // menampung data yang dikirimkan
    let reamur = Number(req.params.reamur) // mengambil nilai pada parameter suhu
    let nilai = Number(req.params.nilai) // mengambil nilai pada parameter nilai

    let celcius = (5/4) * nilai
    let fahrenheit = (9/4) * nilai + 32
    let kelvin = (5/4) * nilai + 273

    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data suhu dan nilai sesuai dengan nilai parameter
    let response = {
        reamur: nilai,
        celcius: celcius,
        fahrenheit: fahrenheit,
        kelvin: kelvin
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// endpoint "/fahrenheit/nilai" dengan method GET
app.get("/:fahrenheit/:nilai", (req,res) => {
    // :fahrenheit, :nilai diberikan titik dua didepan menunjukkan "fahrenheit", "nilai"
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request

    // menampung data yang dikirimkan
    let fahrenheit = Number(req.params.fahrenheit) // mengambil nilai pada parameter suhu
    let nilai = Number(req.params.nilai) // mengambil nilai pada parameter nilai

    let celcius = (5/9) * (nilai - 32)
    let reamur = (4/9) * (nilai - 32)
    let kelvin = (5/9) * (nilai - 32) + 273

    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data suhu dan nilai sesuai dengan nilai parameter
    let response = {
        fahrenheit: nilai,
        celcius: celcius,
        reamur: reamur,
        kelvin: kelvin
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// endpoint "/kelvin/nilai" dengan method GET
app.get("/:kelvin/:nilai", (req,res) => {
    // :kelvin, :nilai diberikan titik dua didepan menunjukkan "kelvin", "nilai"
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request

    // menampung data yang dikirimkan
    let kelvin = Number(req.params.kelvin) // mengambil nilai pada parameter suhu
    let nilai = Number(req.params.nilai) // mengambil nilai pada parameter nilai
    
    let celcius = nilai - 273
    let reamur = (4/5) * (nilai - 273)
    let fahrenheit = (9/5) * (nilai - 273) + 32
    
    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data suhu dan nilai sesuai dengan nilai parameter
    let response = {
        kelvin: nilai,
        celcius: celcius,
        reamur: reamur,
        fahrenheit: fahrenheit,
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
