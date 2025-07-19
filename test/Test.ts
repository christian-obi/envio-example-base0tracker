import assert from "assert";
import { 
  TestHelpers,
  FiatTokenProxy_Transfer
} from "generated";
const { MockDb, FiatTokenProxy } = TestHelpers;

describe("FiatTokenProxy contract Transfer event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for FiatTokenProxy contract Transfer event
  const event = FiatTokenProxy.Transfer.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("FiatTokenProxy_Transfer is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await FiatTokenProxy.Transfer.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualFiatTokenProxyTransfer = mockDbUpdated.entities.FiatTokenProxy_Transfer.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedFiatTokenProxyTransfer: FiatTokenProxy_Transfer = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      from: event.params.from,
      to: event.params.to,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualFiatTokenProxyTransfer, expectedFiatTokenProxyTransfer, "Actual FiatTokenProxyTransfer should be the same as the expectedFiatTokenProxyTransfer");
  });
});
