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

export const scrollToRef = (ref, center = false) => {
  let paddingHeight = 138; // menuHeight from _constants.scss
  if (center){
    paddingHeight = window.innerHeight/2 - ref.current.offsetHeight/2;
  }
  window.scrollTo(0, ref.current.offsetTop-paddingHeight, {top: 0, left: 0, behavior: 'smooth'})
}

export const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export const getCenterScrollPos = (ref) => {
  return( ref.current.getBoundingClientRect().top + window.scrollY - window.innerHeight/2 + ref.current.offsetHeight/2)
}
export const getBottomThirdScrollPos = (ref) => {
  return( ref.current.getBoundingClientRect().top + window.scrollY - window.innerHeight/2)
}