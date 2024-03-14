 export async function getData(url) {
    try {
      const respond = await fetch(url);
      const json = await respond.json();
      
      return json;
  
    } catch (error) {
      console.log("OOOPSIE:/sjekk internettforbindelse!", error);
    }
  }