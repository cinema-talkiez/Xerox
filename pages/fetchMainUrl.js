const fetchMainUrl = async () => {
    const apiUrl = "https://server-v1-vyf4.onrender.com/api/url/retrieve";
    
    console.log("Fetching main URL from:", apiUrl);
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        console.error("Failed to fetch. Status:", response.status);
        throw new Error(`Server responded with ${response.status}`);
      }
  
      const result = await response.json();
      console.log("API Response:", result);  // Log the entire response
  
      // Now that we know the response only has a `url` field
      if (result?.url) {
        return result.url;  // Return the URL from the `url` field
      } else {
        console.error("URL not found in the response:", result);
        throw new Error("URL not found in response.");
      }
    } catch (error) {
      console.error("Error fetching main URL:", error);
      throw error;
    }
  };
  