import { EmailValidationEntityBase } from '../EmailValidationEntityBase';
import type { EmailValidationSDK } from '../EmailValidationSDK';
import type { Control } from '../types';
import type { DnsResult, DnsResultLoadMatch } from '../EmailValidationTypes';
declare class DnsResultEntity extends EmailValidationEntityBase<DnsResult> {
    constructor(client: EmailValidationSDK, entopts: any);
    make(this: DnsResultEntity): DnsResultEntity;
    load(this: any, reqmatch?: DnsResultLoadMatch, ctrl?: Control): Promise<DnsResultEntity>;
}
export { DnsResultEntity };
