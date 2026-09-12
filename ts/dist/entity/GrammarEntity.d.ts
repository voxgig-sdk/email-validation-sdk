import { EmailValidationEntityBase } from '../EmailValidationEntityBase';
import type { EmailValidationSDK } from '../EmailValidationSDK';
import type { Control } from '../types';
import type { Grammar, GrammarCreateData } from '../EmailValidationTypes';
declare class GrammarEntity extends EmailValidationEntityBase<Grammar> {
    constructor(client: EmailValidationSDK, entopts: any);
    make(this: GrammarEntity): GrammarEntity;
    create(this: any, reqdata?: GrammarCreateData, ctrl?: Control): Promise<GrammarEntity>;
}
export { GrammarEntity };
