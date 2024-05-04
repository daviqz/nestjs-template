export enum ToastType {
	SUCCESS = 'success',
	WARNING = 'warning',
	ERROR = 'error',
	INFO = 'info'
}

export class ToastDTO {
	message: string
	type: ToastType

	constructor(message: string, type: ToastType) {
		this.message = message
		this.type = type
	}
}
