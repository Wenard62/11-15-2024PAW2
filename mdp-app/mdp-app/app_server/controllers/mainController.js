const index = (req, res) => {
    const berita = [
        {
            judul:"Berita 1",
            isi: "Isi berita 1"
        },
        {
            judul: "Berita 2",
            isi: "Isi berita 2"
        },

    ];
    
    
  res.render('index', { title: 'Halaman Home', berita,layout:'main' });
};

const contact = (req, res) =>{
    res.render('contact', { title: 'Halaman Contact',layout:'main' });
}

module.exports = {index, contact}