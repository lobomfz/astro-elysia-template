import { treaty } from "@elysiajs/eden";
import type { App } from "@api/app";

export const api = treaty<App>("http://localhost:3000");

export async function getRes<
	T extends Promise<{
		data: unknown;
		error: unknown;
		response: Response;
		status: number;
		headers: FetchRequestInit["headers"];
	}>,
	Q,
>(apiCall: T): Promise<Awaited<T>["data"]> {
	const response = await apiCall;

	if (response.error) throw response.error;

	return response.data;
}
