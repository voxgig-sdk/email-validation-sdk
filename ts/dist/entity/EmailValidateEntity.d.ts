import { EmailValidationEntityBase } from '../EmailValidationEntityBase';
import type { EmailValidationSDK } from '../EmailValidationSDK';
import type { Control } from '../types';
import type { EmailValidate, EmailValidateLoadMatch } from '../EmailValidationTypes';
declare class EmailValidateEntity extends EmailValidationEntityBase<EmailValidate> {
    constructor(client: EmailValidationSDK, entopts: any);
    make(this: EmailValidateEntity): EmailValidateEntity;
    load(this: any, reqmatch?: EmailValidateLoadMatch, ctrl?: Control): Promise<EmailValidateEntity>;
}
export { EmailValidateEntity };
