const API_URL = "http://localhost:5000/feedback";

// Fungsi untuk mengirim feedback
function kirimFeedback() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    if (!nama || !pesan) {
        alert("Nama dan pesan harus diisi!");
        return;
    }

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama, email, pesan }),
    })
    .then(response => response.json())
    .then(data => {
        alert("Feedback terkirim!");
        tampilkanFeedback(); 
    })
    .catch(error => console.error("Error:", error));
}

// Fungsi untuk menampilkan semua feedback
function tampilkanFeedback() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            let listHTML = "";
            data.forEach(fb => {
                listHTML += `<p><strong>${fb.nama}:</strong> ${fb.pesan}</p>`;
            });
            document.getElementById("feedback-list").innerHTML = listHTML;
        })
        .catch(error => console.error("Error:", error));
}

// Panggil fungsi untuk menampilkan feedback saat halaman dimuat
document.addEventListener("DOMContentLoaded", tampilkanFeedback);
