import { API_SERVER } from "$lib/scripts/constants";

export const load = async () => {
  const fetchProjects = async () => {
    try {
      const response = await fetch(API_SERVER + "/projects/records");
      if (!response.ok) throw new Error("Network response was not ok");
      return await response.json();
    } catch (error) {
      throw new Error(`Error fetching projects: ${error.message}`);
    }
  };
  return {
    projects: await fetchProjects(),
  };
};
