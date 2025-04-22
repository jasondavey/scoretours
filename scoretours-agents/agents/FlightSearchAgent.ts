// agents/FlightSearchAgent.ts

export interface AgentInput {
  origin: string;
  destination: string;
  date: string;
}

export class FlightSearchAgent {
  async execute(input: AgentInput) {
    // TODO: integrate real API
    return {
      success: true,
      flights: [
        {
          airline: "Example Air",
          price: 420,
          depart: `${input.date}T08:00`,
          arrive: `${input.date}T12:00`,
        },
      ],
    };
  }
}
