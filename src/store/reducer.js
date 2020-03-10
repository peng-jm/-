const initialState = {
	"username":"",
	"password":""
}

export default (state = initialState, action) => {
	switch (action.type) {

	case "SIGN":
		var newState = JSON.parse(JSON.stringify(state))
		if(newState.username===action.username) return
		if(newState.username!=action.name){
			newState.username = action.username
			newState.password = action.password
			return  newState
		}
	default:
		return state
	}
}
