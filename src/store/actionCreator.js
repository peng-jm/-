export default {
	sign(username,password){
		return{ type:"SIGN",
		username,
		password
	}
	}
}