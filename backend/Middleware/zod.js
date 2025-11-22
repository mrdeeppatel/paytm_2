const zod = require("zod")

const signupValidation = zod.object({
    firstName: zod.string("First Name Is Not a string "),
    email: zod.email("Email is not proper "),
    password: zod.string("Password Is not a string ").min(6, "Password too short ")

})

const signInValidation = zod.object({
    email: zod.email("Email is not proper "),
    password: zod.string("Password Is not a string ").min(6, "Password too short ")

})

const updateValidation = zod.object({
    firstName: zod.string("First Name Is Not a string ").nonempty("fristname is empty").optional(),
    email: zod.email("Email is not proper ").nonempty("fristname is empty").optional(),
    password: zod.string("Password Is not a string ").min(6, "Password too short ").optional()
})

module.exports = {
    signupValidation,
    signInValidation,
    updateValidation
}