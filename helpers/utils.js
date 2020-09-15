const getParam = (router) => {
  let section = null
  let paramFound = router.asPath.includes("=")
  if (router.asPath.includes("=")){
    let idx = router.asPath.indexOf("=")
    section = router.asPath.substr(idx+1)
    // console.log(section)
  }
  return section;
}