export default defineNuxtRouteMiddleware((to) => {
  if (process.client) {
    const auth = localStorage.getItem('auth')

    if (auth && (to.path.includes('/login') || to.path.includes('/register'))) {
      return navigateTo('/dashboard')
    }
  }
})
