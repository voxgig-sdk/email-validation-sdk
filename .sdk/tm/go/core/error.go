package core

type EmailValidationError struct {
	IsEmailValidationError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewEmailValidationError(code string, msg string, ctx *Context) *EmailValidationError {
	return &EmailValidationError{
		IsEmailValidationError: true,
		Sdk:              "EmailValidation",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *EmailValidationError) Error() string {
	return e.Msg
}
