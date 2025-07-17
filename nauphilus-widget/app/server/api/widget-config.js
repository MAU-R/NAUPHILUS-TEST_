// eslint-disable-next-line no-undef
export default defineEventHandler((event) => {
  // eslint-disable-next-line no-undef
  const config = useRuntimeConfig()


  return {
    membershipKey: config.membershipKey,
    productKey: config.productKey,
  }
  
})
