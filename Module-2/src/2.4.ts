{
  // Generic Interface

  // eta obosso type diyeo kora jay
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  interface PoorWatch {
    brand: string;
    model: string;
    display: string;
  }

  const poorDeveloper: Developer<PoorWatch> = {
    name: "Sazid",
    computer: {
      brand: "MSI",
      model: "Kodu Model",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "apple",
      model: "v-1",
      display: "OLED",
    },
  };

  type RichWatch = {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  };

  interface YmmahBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<RichWatch, YmmahBike> = {
    name: "Sazid",
    computer: {
      brand: "MSI",
      model: "Kodu Model",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "apple",
      model: "v-1",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Ymah",
      engineCapacity: "1500cc",
    },
  };
}
