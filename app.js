const yargs  = require('yargs')
const jalan = require('./jalan')

yargs.command({
    command : 'add',
    describe : 'Ini untuk menambahkan data',
    builder : {
        nama : {
            describe : 'Ini nama',
            demandOption : true,
            type : 'string'
        },
        kelas : {
            describe : 'Ini kelas',
            demandOption : true,
            type : 'string'
        }
    },
    handler : (argv) => {
        jalan.inputdata(argv.nama, argv.kelas)
    }
})

yargs.command({
    command : 'hapus',
    describe : 'ini untuk hapus',
    builder : {
        nama : {
            describe : 'Isikan nama',
            demandOption : true,
            type : 'string'
        }
    },
    handler : (argv) => {
        jalan.hapusdata(argv.nama)
    }
})

yargs.command({
    command : 'list',
    describe : 'ini adalah list',
    handler : () => {
        jalan.listdata()
    } 
})

yargs.command({
    command : 'cari',
    describe : 'ini untuk mecari data',
    builder : {
        nama : {
            describe : 'isikan nama',
            demandOption : true,
            type : 'string'
        }
    },
    handler : (argv) => {
        jalan.caridata(argv.nama)
    }
})

yargs.parse()


