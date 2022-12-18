interface nameInterface {
  common: string;
  official: string;
}

interface flagsInterface {
  png: string;
  svg: string;
}

export interface countriesInterface {
  name: nameInterface;
  region: string;
  subregion: string;
  languages: { ara: string };
  timezones: string[];
  flags: flagsInterface;
}
