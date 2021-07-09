const passwordsValidation = (password, repeatPassword) => {
  if(password !== repeatPassword) {
    throw new Error(`Passwords don't match!`)
  } else if (password.length > 8) {
    throw new Error(`Password length must be at least 8 characters`)
  }

  return true
}

module.exports = {
  passwordsValidation
}