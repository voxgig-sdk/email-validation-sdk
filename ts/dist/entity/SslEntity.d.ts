import { EmailValidationEntityBase } from '../EmailValidationEntityBase';
import type { EmailValidationSDK } from '../EmailValidationSDK';
import type { Control } from '../types';
import type { Ssl, SslListMatch } from '../EmailValidationTypes';
declare class SslEntity extends EmailValidationEntityBase<Ssl> {
    constructor(client: EmailValidationSDK, entopts: any);
    make(this: SslEntity): SslEntity;
    list(this: any, reqmatch?: SslListMatch, ctrl?: Control): Promise<SslEntity[]>;
}
export { SslEntity };
