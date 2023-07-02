import {v4 as uuidv4} from 'uuid';

export default class UUID {

    NewUUID(): string {
        return uuidv4()
    }
}