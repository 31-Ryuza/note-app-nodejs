const fs = require('fs')
const { json } = require('stream/consumers')
const inputdata = (nama, kelas) => {
    const masuk = loaddata()
    const filter = masuk.find((masuk) => {
        return masuk.nama === nama 
    })

    if (!filter){
        masuk.push({
            nama : nama,
            kelas : kelas
        })
        jadijson(masuk)

        console.log('data berhasil di tambahkan')
    }else{
        console.log('data gagal di tambahkan')
    }


}

const jadijson = (masuk) => {
    const dataJSON = JSON.stringify(masuk)
    fs.writeFileSync('jalan1.json', dataJSON)
}

const loaddata = () => {
    try{
        const dataBuffer = fs.readFileSync('jalan1.json')
        const dataJSON = dataBuffer.toString()
        const jadiobject = JSON.parse(dataJSON)
        return jadiobject
    }catch(e){
        return []
    }
}

const hapusdata = (nama) => {
    const hasil = loaddata()
    const hapus = hasil.filter( (hasil) => {
        return hasil.nama !== nama
    })

    if(hasil.length > hapus.length){
        console.log('data berhasil diahpus')
    }else{
        console.log('data gagal di hapus')
    }

    jadijson(hapus)
}

const listdata = () => {
    const hasil = loaddata()

    console.log('ini isi list data nya')

    hasil.forEach((hasil) => {
        console.log('Nama =',hasil.nama, '|| Kelas =',hasil.kelas)
    })
}

const caridata = (nama) => {
    const masuk = loaddata()
    const cari1 = masuk.find((masuk) => {
        return masuk.nama === nama
    })

    if(cari1){
        console.log('Nama =',cari1.nama ,'|| Kelas =', cari1.kelas)
    }else{
        console.log('data yang anda masukkan tidak di temukan')
    }

}

module.exports = {
    inputdata : inputdata,
    loaddata : loaddata,
    hapusdata : hapusdata,
    listdata : listdata,
    caridata : caridata
}