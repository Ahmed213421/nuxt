export default defineNuxtPlugin(() => {
  const { open, close } = useLoader()

  return {
    hooks: {
      'app:created' () {
        // يفتح فورًا مع إنشاء التطبيق
        open('Fetching data...')
      },

      'app:mounted' () {
        // يقفل بعد أول render
        close()
      },
    }
  }
})
