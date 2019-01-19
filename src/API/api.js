const url = "http://localhost:9000/goals";
const FetchReq = {
	get: function() {
		return fetch(url);
	},
	post: function(data) {
	  return fetch(url, {
	    method: 'POST', // or 'PUT'
	    body: JSON.stringify(data), // data can be `string` or {object}!
	    mode: "no-cors",
	    headers:{
	      'Content-Type': 'application/json'
	    }
	  })
	},
	delete: function(data) {
	  return fetch(url, {
	    method: 'DELETE', // or 'PUT'
	    body: JSON.stringify(data), // data can be `string` or {object}!
	    headers:{
	      'Content-Type': 'application/json'
	    }
	  })
	}
}

export default FetchReq;