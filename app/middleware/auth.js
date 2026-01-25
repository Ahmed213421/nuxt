export default defineNuxtRouteMiddleware(() => {
  if (process.client) {
    const auth = localStorage.getItem('auth')

    if (!auth) {
      return navigateTo('/login')
    }
  }
})
