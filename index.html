<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Special for You ❤️</title>
    <link rel="stylesheet" href="style.css">
    <style>
        /* Import Google Font */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

        /* Global Styles */
        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(to right, #ff9a9e, #fad0c4);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        /* Wrapper untuk mengatur tata letak */
        .wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 40px;
            width: 100%;
            max-width: 600px;
        }

        /* Container untuk tiap section */
        .feedback-container {
            width: 85%;
            background: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(15px);
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            margin: 20rem 0 3rem 0;
        }

        .surprise-container {
            width: 86%;
            background: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(15px);
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            margin-top: 50rem;
        }

        /* Judul */
        h1 {
            color: #ff4b5c;
            font-size: 24px;
            margin-bottom: 10px;
        }

        /* Paragraf */
        p {
            color: #ff4b5c;
            font-size: 18px;
        }

        /* Surprise Button */
        .love-btn {
            background: #ff758c;
            border: none;
            padding: 12px 20px;
            border-radius: 10px;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: 0.3s;
            margin-top: 10px;
        }

        .love-btn:hover {
            background: #ff3e6b;
        }

        /* Hidden Message */
        .hidden-message {
            display: none;
            font-size: 20px;
            color: #ff4b5c;
            margin-top: 15px;
        }

        /* Input Fields */
        input,
        textarea {
            width: 96%;
            padding: 12px;
            margin: 8px 0;
            border: none;
            border-radius: 8px;
            outline: none;
            font-size: 14px;
            background: rgba(255, 255, 255, 0.8);
        }

        /* Textarea */
        textarea {
            height: 120px;
            resize: none;
        }

        /* Submit Button */
        button {
            width: 100%;
            background: #ff758c;
            border: none;
            padding: 12px;
            border-radius: 8px;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: 0.3s;
        }

        button:hover {
            background: #ff3e6b;
        }

        /* Floating Heart Animation */
        .heart {
            position: absolute;
            font-size: 24px;
            color: red;
            animation: floatHeart 4s ease-in-out;
        }

        @keyframes floatHeart {
            0% {
                transform: translateY(0);
                opacity: 1;
            }

            100% {
                transform: translateY(-100vh);
                opacity: 0;
            }
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <!-- Surprise Section -->
        <div class="surprise-container">
            <h1>Project nya sinenek nih 😝</h1>
            <p>Tap tombol untuk Surprise!</p>
            <button class="love-btn" onclick="showSurprise()">Click Me!</button>
            <p class="hidden-message" id="message">
                gelo-gelo si nenek balik ini?, masih sehat aja si nenek!! wkwkwkwk
            </p>
        </div>
        <p style="display: flex; text-align: center; margin-top: 85px;">
            kirim unek unek mu disini, siapa tau sinenek ternyata punya keluh dan kesah😁 <br> vvvvvvvv
        </p>
        <!-- Feedback Section -->
        <div class="feedback-container">
            <h1>Kirim Feedback</h1>
            <div class="input-group">
                <input type="text" id="nama" placeholder="Nama" required>
                <input type="email" id="email" placeholder="Email">
                <textarea id="pesan" placeholder="Pesan" required></textarea>
            </div>
            <button onclick="kirimFeedback()">Kirim</button>

            <h2>List Feedback</h2>
            <div id="feedback-list"></div>
        </div>
    </div>

    <script>
        // Surprise
        function showSurprise() {
            document.getElementById("message").style.display = "block";
            for (let i = 0; i < 30; i++) {
                let heart = document.createElement("div");
                heart.innerHTML = "😝";
                heart.classList.add("heart");
                heart.style.left = Math.random() * window.innerWidth + "px";
                heart.style.top = window.innerHeight + "px";
                heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
                document.body.appendChild(heart);
                setTimeout(() => { heart.remove(); }, 4000);
            }
        }

        // Feedback 
        const API_URL = "http://localhost:5000/feedback";

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
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nama, email, pesan }),
            })
                .then(response => response.json())
                .then(data => {
                    alert("Feedback terkirim!");
                    tampilkanFeedback();
                })
                .catch(error => console.error("Error:", error));
        }

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

        document.addEventListener("DOMContentLoaded", tampilkanFeedback);
    </script>
</body>

</html>