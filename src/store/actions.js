import axiosClient from '../axiosClient'

export function searchMeals({ commit }, keyword)  {
  axiosClient.get(`/search.php?s=${keyword}`)
    .then(response => {
      commit('setSearchMeals', response.data.meals)
    })
}
export function searchMealsByLetter({ commit }, letter)  {
  axiosClient.get(`/search.php?f=${letter}`)
    .then(response => {
      commit('setMealsByLetter', response.data.meals)
    })
}
export function searchMealsByIngredient({ commit }, ingredient)  {
  axiosClient.get(`/filter.php?i=${ingredient}`)
    .then(response => {
      commit('setMealsByIngredients', response.data.meals)
    })
}