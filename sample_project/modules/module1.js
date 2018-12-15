module.exports = {
	randomChar: (num) => {
		
		let string = "abcdefghijklmnopqrstuvwxyz0123456789"
		let str = '';

		for(let i = 0; i < num; i++){
			str += string.charAt(Math.floor(Math.random() * string.length))
		}

		return str;

	}
}