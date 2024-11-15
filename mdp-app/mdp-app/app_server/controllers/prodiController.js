const axios = require("axios");

const index = async (req, res) => {
    try {
        // mendapatkan data fakultas dari API eksternal
        const response = await axios.get(
            "http://localhost:3000/api/prodi"
        );

        const prodi = response.data;

        res.render("prodi", {
            title: "Halaman Prodi",
            prodi,
            layout: "main",
        });
    }catch (error)  {
        console.error(error.mesage);
        res.status(500),send("Gagal mendapatkan data fakultas dari api");
    }
};

module.exports = {index};