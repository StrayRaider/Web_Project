const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const sharp = require('sharp');
const Tesseract = require('tesseract.js');
const path = require('path');
const fs = require('fs');

const upload = multer({ dest: 'uploads/' });

router.post('/scan_card', upload.single('file'), async (req, res) => {
    try {
        console.log('File received:', req.file); // Log file information

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const filePath = req.file.path;
        console.log('File path:', filePath); // Log file path

        // Resize and process image with Sharp
        const processedImageBuffer = await sharp(filePath)
            .resize(800, 600, {
                fit: sharp.fit.inside,
                withoutEnlargement: true
            })
            .toBuffer();

        // Perform OCR with Tesseract.js
        const { data: { text } } = await Tesseract.recognize(processedImageBuffer, 'eng');
        console.log('OCR text:', text); // Log OCR text

        // Extract relevant information (basic example)
        const cardNumber = text.match(/\d{4}\s?\d{4}\s?\d{4}\s?\d{4}/)?.[0] || 'Not found';
        const name = text.match(/[A-Z]+ [A-Z]+/)?.[0] || 'Not found';
        const expiryDate = text.match(/\d{2}\/\d{2}/)?.[0] || 'Not found';
        // Extract IBAN from the text
        const textWithoutSpaces = text.replace(/\s/g, '');
        const ibanMatch = text.match(/TR\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}/);
        const iban = ibanMatch ? ibanMatch[0] : 'Not found';

        // Delete the file after processing
        fs.unlinkSync(filePath);
        console.log('num :', cardNumber);
        console.log('name :', name);
        console.log('date :', expiryDate);
        console.log('iban :', iban);
        console.log('ibanf :', ibanMatch);

        res.json({ cardNumber, name, expiryDate });
    } catch (error) {
        console.error('Error processing file:', error); // Log errors
        res.status(500).json({ error: error.message });
    }
});

router.post('/buy', async (req, res) => {
    try {
        const formData = req.body; // Access the form data sent from the frontend
        console.log("veriler : ", req.body);
        res.status(200).json({ data: "data" });
        
    } catch (error) {
        console.error('Error processing file:', error); // Log errors
        res.status(500).json({ error: error.message });
    }


});
module.exports = router;