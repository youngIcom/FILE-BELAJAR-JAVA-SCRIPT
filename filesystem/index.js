const fs = require('fs');
const path = require('path');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal memuat konten!!');
    }

    console.log(data);
};
const alamat =  path.resolve(__dirname, 'notes.txt');
fs.readFile(alamat,'utf-8', fileReadCallback);