import Vue from 'vue';

class Review {
	constructor(user, text) {
		this.userName = user
		this.reviewText = text
	}
}

export default {
	state: {
		reviews: []
	},
	getters: {
		getReviews(state) {
			return state.reviews
		}
	},
	mutations: {
		updateReviews(state, data) {
			state.reviews = data;
		},
		addNewReview(state, data) {
			state.reviews.push(data);
		}
	},
	actions: {
		loadReviews({commit}) {
			Vue.http.get('https://test-88920.firebaseio.com/reviews.json')
				.then( res => {
					return res.json()
				})
				.then( data => {
					data = Object.keys(data).map(function(k) {
						return data[k];
					})
					commit('updateReviews', data)
				})
		},
		postReview({commit}, payload) {
			Vue.http.post('https://test-88920.firebaseio.com/reviews.json', payload)
				.then( () => {
					commit('addNewReview', payload)
				})
		}
	}
}