import { API_SERVER } from "$lib/scripts/constants";

export const actions = {
  create: async ({ request }) => {
    try {
      const formData = await request.formData();
      const response = await fetch(API_SERVER + "/projects/records", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        return {
          status: response.status,
          body: { message: "Record saved successfully" },
        } as const;
      } else {
        const responseData = await response.json();
        return {
          status: response.status,
          body: { error: responseData.error },
        } as const;
      }
    } catch (error) {
      console.error("Error:", error);
      throw new Error(`Error saving record: ${error.message}`);
    }
  },
  update: async ({ request }) => {
    
  }
};
