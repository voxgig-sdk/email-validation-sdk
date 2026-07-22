package voxgigemailvalidationsdk

import (
	"github.com/voxgig-sdk/email-validation-sdk/go/core"
	"github.com/voxgig-sdk/email-validation-sdk/go/entity"
	"github.com/voxgig-sdk/email-validation-sdk/go/feature"
	_ "github.com/voxgig-sdk/email-validation-sdk/go/utility"
)

// Type aliases preserve external API.
type EmailValidationSDK = core.EmailValidationSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type EmailValidationEntity = core.EmailValidationEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type EmailValidationError = core.EmailValidationError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDnsResultEntityFunc = func(client *core.EmailValidationSDK, entopts map[string]any) core.EmailValidationEntity {
		return entity.NewDnsResultEntity(client, entopts)
	}
	core.NewDomainEntityFunc = func(client *core.EmailValidationSDK, entopts map[string]any) core.EmailValidationEntity {
		return entity.NewDomainEntity(client, entopts)
	}
	core.NewEmailValidateEntityFunc = func(client *core.EmailValidationSDK, entopts map[string]any) core.EmailValidationEntity {
		return entity.NewEmailValidateEntity(client, entopts)
	}
	core.NewGenerateEntityFunc = func(client *core.EmailValidationSDK, entopts map[string]any) core.EmailValidationEntity {
		return entity.NewGenerateEntity(client, entopts)
	}
	core.NewGrammarEntityFunc = func(client *core.EmailValidationSDK, entopts map[string]any) core.EmailValidationEntity {
		return entity.NewGrammarEntity(client, entopts)
	}
	core.NewIpnEntityFunc = func(client *core.EmailValidationSDK, entopts map[string]any) core.EmailValidationEntity {
		return entity.NewIpnEntity(client, entopts)
	}
	core.NewRedactEntityFunc = func(client *core.EmailValidationSDK, entopts map[string]any) core.EmailValidationEntity {
		return entity.NewRedactEntity(client, entopts)
	}
	core.NewSslEntityFunc = func(client *core.EmailValidationSDK, entopts map[string]any) core.EmailValidationEntity {
		return entity.NewSslEntity(client, entopts)
	}
	core.NewUtilityEntityFunc = func(client *core.EmailValidationSDK, entopts map[string]any) core.EmailValidationEntity {
		return entity.NewUtilityEntity(client, entopts)
	}
	core.NewWhoiEntityFunc = func(client *core.EmailValidationSDK, entopts map[string]any) core.EmailValidationEntity {
		return entity.NewWhoiEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewEmailValidationSDK = core.NewEmailValidationSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewEmailValidationSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *EmailValidationSDK  { return NewEmailValidationSDK(nil) }
func Test() *EmailValidationSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
