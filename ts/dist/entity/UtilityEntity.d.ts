import { EmailValidationEntityBase } from '../EmailValidationEntityBase';
import type { EmailValidationSDK } from '../EmailValidationSDK';
import type { Control } from '../types';
import type { Utility, UtilityLoadMatch } from '../EmailValidationTypes';
declare class UtilityEntity extends EmailValidationEntityBase<Utility> {
    constructor(client: EmailValidationSDK, entopts: any);
    make(this: UtilityEntity): UtilityEntity;
    load(this: any, reqmatch?: UtilityLoadMatch, ctrl?: Control): Promise<UtilityEntity>;
}
export { UtilityEntity };
