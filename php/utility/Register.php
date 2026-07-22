<?php
declare(strict_types=1);

// EmailValidation SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

EmailValidationUtility::setRegistrar(function (EmailValidationUtility $u): void {
    $u->clean = [EmailValidationClean::class, 'call'];
    $u->done = [EmailValidationDone::class, 'call'];
    $u->make_error = [EmailValidationMakeError::class, 'call'];
    $u->feature_add = [EmailValidationFeatureAdd::class, 'call'];
    $u->feature_hook = [EmailValidationFeatureHook::class, 'call'];
    $u->feature_init = [EmailValidationFeatureInit::class, 'call'];
    $u->fetcher = [EmailValidationFetcher::class, 'call'];
    $u->make_fetch_def = [EmailValidationMakeFetchDef::class, 'call'];
    $u->make_context = [EmailValidationMakeContext::class, 'call'];
    $u->make_options = [EmailValidationMakeOptions::class, 'call'];
    $u->make_request = [EmailValidationMakeRequest::class, 'call'];
    $u->make_response = [EmailValidationMakeResponse::class, 'call'];
    $u->make_result = [EmailValidationMakeResult::class, 'call'];
    $u->make_point = [EmailValidationMakePoint::class, 'call'];
    $u->make_spec = [EmailValidationMakeSpec::class, 'call'];
    $u->make_url = [EmailValidationMakeUrl::class, 'call'];
    $u->param = [EmailValidationParam::class, 'call'];
    $u->prepare_auth = [EmailValidationPrepareAuth::class, 'call'];
    $u->prepare_body = [EmailValidationPrepareBody::class, 'call'];
    $u->prepare_headers = [EmailValidationPrepareHeaders::class, 'call'];
    $u->prepare_method = [EmailValidationPrepareMethod::class, 'call'];
    $u->prepare_params = [EmailValidationPrepareParams::class, 'call'];
    $u->prepare_path = [EmailValidationPreparePath::class, 'call'];
    $u->prepare_query = [EmailValidationPrepareQuery::class, 'call'];
    $u->result_basic = [EmailValidationResultBasic::class, 'call'];
    $u->result_body = [EmailValidationResultBody::class, 'call'];
    $u->result_headers = [EmailValidationResultHeaders::class, 'call'];
    $u->transform_request = [EmailValidationTransformRequest::class, 'call'];
    $u->transform_response = [EmailValidationTransformResponse::class, 'call'];
});
