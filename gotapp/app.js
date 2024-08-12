const getGoTCharacter = async (characterId) => {
  const url = `https://anapioficeandfire.com/api/characters/${characterId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const characterData = await response.json();
    return characterData;
  } catch (error) {
    console.error("Failed to fetch character:", error);
  }
};
