
export const useAIModulesStore = () => ({
  modules: [
    {
      id: "mod1",
      name: "Modulo A",
      category: "Betting",
      access: {
        Admin: true,
        Creator: true,
        Tester: false,
        Viewer: false
      },
      api: {
        schema: {
          type: "object",
          properties: {
            input: { type: "string" },
            output: { type: "string" }
          }
        },
        endpoint: "/api/mod1",
        exampleRequest: { input: "some input" },
        exampleResponse: { output: "some output" }
      },
      compatibility: {
        markets: ["Match Odds", "Over/Under"],
        sports: ["Football", "Tennis"],
        neuralLinks: ["DeepArbi-v1"]
      }
    }
  ],
  xp: 4200,
  reputation: 96,
  totalROI: 12.5,
  updateAccess: (id: string, access: Record<string, boolean>) => {
    console.log("Mock updateAccess", id, access);
  }
});