import { EmailValidationEntityBase } from '../EmailValidationEntityBase';
import type { EmailValidationSDK } from '../EmailValidationSDK';
import type { Control } from '../types';
import type { Ipn, IpnLoadMatch } from '../EmailValidationTypes';
declare class IpnEntity extends EmailValidationEntityBase<Ipn> {
    constructor(client: EmailValidationSDK, entopts: any);
    make(this: IpnEntity): IpnEntity;
    load(this: any, reqmatch?: IpnLoadMatch, ctrl?: Control): Promise<IpnEntity>;
}
export { IpnEntity };
