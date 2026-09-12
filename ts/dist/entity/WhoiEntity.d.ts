import { EmailValidationEntityBase } from '../EmailValidationEntityBase';
import type { EmailValidationSDK } from '../EmailValidationSDK';
import type { Control } from '../types';
import type { Whoi, WhoiListMatch } from '../EmailValidationTypes';
declare class WhoiEntity extends EmailValidationEntityBase<Whoi> {
    constructor(client: EmailValidationSDK, entopts: any);
    make(this: WhoiEntity): WhoiEntity;
    list(this: any, reqmatch?: WhoiListMatch, ctrl?: Control): Promise<WhoiEntity[]>;
}
export { WhoiEntity };
