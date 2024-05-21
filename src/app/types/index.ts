import exp from "node:constants";

interface Response{
  items: Character[],
}

interface Character{
  id: number;
  name: string;
  ki: string;
  maxKi: string
  race: string
  gender: string
  description: string
  image: string
  affiliation: string
}

export type ResponseDto = Response;
export type CharacterDto = Character;










