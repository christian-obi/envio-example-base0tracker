/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  FiatTokenProxy,
  FiatTokenProxy_Transfer,
} from "generated";

FiatTokenProxy.Transfer.handler(async ({ event, context }) => {
  const entity: FiatTokenProxy_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.FiatTokenProxy_Transfer.set(entity);
});
