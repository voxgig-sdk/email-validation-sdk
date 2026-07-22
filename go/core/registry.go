package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDnsResultEntityFunc func(client *EmailValidationSDK, entopts map[string]any) EmailValidationEntity

var NewDomainEntityFunc func(client *EmailValidationSDK, entopts map[string]any) EmailValidationEntity

var NewEmailValidateEntityFunc func(client *EmailValidationSDK, entopts map[string]any) EmailValidationEntity

var NewGenerateEntityFunc func(client *EmailValidationSDK, entopts map[string]any) EmailValidationEntity

var NewGrammarEntityFunc func(client *EmailValidationSDK, entopts map[string]any) EmailValidationEntity

var NewIpnEntityFunc func(client *EmailValidationSDK, entopts map[string]any) EmailValidationEntity

var NewRedactEntityFunc func(client *EmailValidationSDK, entopts map[string]any) EmailValidationEntity

var NewSslEntityFunc func(client *EmailValidationSDK, entopts map[string]any) EmailValidationEntity

var NewUtilityEntityFunc func(client *EmailValidationSDK, entopts map[string]any) EmailValidationEntity

var NewWhoiEntityFunc func(client *EmailValidationSDK, entopts map[string]any) EmailValidationEntity

