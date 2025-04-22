import { FlightSearchAgent } from "../agents/flightSearchAgent";

export const handler = async (event: any) => {
  const body = JSON.parse(event.body);
  const agent = new FlightSearchAgent();
  const result = await agent.execute(body);

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
