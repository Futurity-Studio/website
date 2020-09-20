export const getParam = (router) => {
  let section = null
  let paramFound = router.asPath.includes("=")
  if (router.asPath.includes("=")){
    let idx = router.asPath.indexOf("=")
    section = router.asPath.substr(idx+1)
    // console.log(section)
  }
  return section;
}
export const getAnchor = (router) => {
  let section = null
  let anchorFound = router.asPath.includes("#")
  if (router.asPath.includes("#")){
    let idx = router.asPath.indexOf("#")
    section = router.asPath.substr(idx+1)
    // console.log(section)
  }
  return section;
}

export const scrollToRef = (ref) => {
  window.scrollTo(0, ref.current.offsetTop, {top: 0, left: 100, behavior: 'smooth'})
}
