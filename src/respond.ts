interface IStatus {
	success: boolean;
	data?: object;
}

export default function respond(status: IStatus) {
	return ContentService.createTextOutput(JSON.stringify(status));
}
