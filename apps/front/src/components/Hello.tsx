import {
	QueryClient,
	QueryClientProvider,
	createQuery,
} from "@tanstack/solid-query";
import { ErrorBoundary, Suspense } from "solid-js";
import { api, getRes } from "../utils/treaty";

const Hello = () => {
	const query = createQuery(() => ({
		queryKey: ["hello"],
		queryFn: () => getRes(api.index.get()),
	}));

	return (
		<div>
			<div>Static Content</div>
			<ErrorBoundary fallback={<div>Error</div>}>
				<Suspense fallback={<div>Loading...</div>}>
					<div>{query.data}</div>
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

export function SolidEntry() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Hello />
		</QueryClientProvider>
	);
}
