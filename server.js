require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");

const app = express();
const port = 3000;
const prisma = new PrismaClient();

// Middleware
app.use(
    cors({
        origin: "http://localhost:5500", // Ubah sesuai domain frontend lo
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"]
    })
);
app.use(express.json());

// Rate limiter (biar nggak ada spam)
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 menit
    max: 5, // Maksimal 5 request dalam 5 menit
    message: { message: "Terlalu banyak request, coba lagi nanti!" }
});
app.use("/send-feedback", limiter);

// Konfigurasi Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Route utama
app.get("/", (req, res) => {
    res.send("Server berjalan dengan sukses! 🚀");
});

// API buat nerima feedback
app.post(
    "/send-feedback",
    [
        body("name").trim().notEmpty().withMessage("Nama wajib diisi"),
        body("email").isEmail().withMessage("Email tidak valid"),
        body("message").trim().notEmpty().withMessage("Pesan tidak boleh kosong")
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { name, email, message } = req.body;

            // Simpan feedback ke database
            await prisma.feedback.create({
                data: { name, email, message }
            });

            // Kirim email
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: `Feedback dari ${name}`,
                text: `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Feedback berhasil dikirim dan disimpan di database!" });

        } catch (error) {
            console.error("Error saat mengirim feedback:", error);
            res.status(500).json({ message: "Gagal mengirim feedback!", error: error.toString() });
        }
    }
);

// API buat lihat semua feedback dari database
app.get("/feedbacks", async (req, res) => {
    try {
        const feedbacks = await prisma.feedback.findMany();
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: "Gagal mengambil feedback!", error: error.toString() });
    }
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
