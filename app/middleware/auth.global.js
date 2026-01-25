export default defineNuxtRouteMiddleware((to) => {
  if (process.client) {
    const auth = localStorage.getItem('auth')

    if (auth && to.path.includes('/login')) {
      return navigateTo('/dashboard')
    }
  }
})
