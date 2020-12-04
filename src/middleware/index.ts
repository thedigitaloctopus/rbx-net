import { NetManagedEvent } from "../internal";
import createRateLimiter from "./RateLimitMiddleware";
import createTypeChecker from "./TypeCheckMiddleware";

export type NextCaller<R = void> = (player: defined, ...args: Array<unknown>) => R;

export type Middleware<
	CallArguments extends Array<unknown> = Array<unknown>,
	PreviousCallArguments extends Array<unknown> = Array<unknown>,
	Sender = Player,
	PreviousSender = Player
> = (
	next: (player: Sender, ...args: CallArguments) => void,
	event: NetManagedEvent,
) => (sender: PreviousSender, ...args: PreviousCallArguments) => void;

export { createRateLimiter, createTypeChecker };
