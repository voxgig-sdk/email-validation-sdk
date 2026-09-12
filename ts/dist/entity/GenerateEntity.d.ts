import { EmailValidationEntityBase } from '../EmailValidationEntityBase';
import type { EmailValidationSDK } from '../EmailValidationSDK';
import type { Control } from '../types';
import type { Generate, GenerateLoadMatch } from '../EmailValidationTypes';
declare class GenerateEntity extends EmailValidationEntityBase<Generate> {
    constructor(client: EmailValidationSDK, entopts: any);
    make(this: GenerateEntity): GenerateEntity;
    load(this: any, reqmatch?: GenerateLoadMatch, ctrl?: Control): Promise<GenerateEntity>;
}
export { GenerateEntity };
