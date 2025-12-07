export default defineEventHandler(async () => {
  // we could also use authenticated APIs here, secrets won't be shown to the client
  return $fetch('https://catfact.ninja/fact')
})