import { EmailValidationEntityBase } from '../EmailValidationEntityBase';
import type { EmailValidationSDK } from '../EmailValidationSDK';
import type { Control } from '../types';
import type { Redact, RedactCreateData } from '../EmailValidationTypes';
declare class RedactEntity extends EmailValidationEntityBase<Redact> {
    constructor(client: EmailValidationSDK, entopts: any);
    make(this: RedactEntity): RedactEntity;
    create(this: any, reqdata?: RedactCreateData, ctrl?: Control): Promise<RedactEntity>;
}
export { RedactEntity };
