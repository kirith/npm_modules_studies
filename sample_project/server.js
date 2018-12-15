const express = require('express')
const app = express()
const random = require('./modules/module1.js')
const crypto = require('crypto')

app.get('/', (req, res) => {
	crypto.randomBytes(20, (err, buff) => {
		let crypt = buff.toString('hex')
		res.send(`Random Characters: ${random.randomChar(10)} <br /> Crypto Chars: ${crypt}`)
	})
})

app.listen(3000, () => {
	console.log('Running on port 3000')
})