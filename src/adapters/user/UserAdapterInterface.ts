export namespace UserAdapterInterface {
    interface nameable {  name: string  }
    interface emailable {  email: string  }

    export interface GetInterface extends nameable, emailable{}
}