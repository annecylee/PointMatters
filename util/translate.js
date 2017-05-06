var setLan = (isEn, lanCode) => {
  isEn = !isEn
  if (isEn) {
    lanCode = 0
  } else {
    lanCode = 1
  }
  return lanCode
}
