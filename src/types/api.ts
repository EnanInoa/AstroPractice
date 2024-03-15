export type APIClashRoyale = {
    items: Item[];
    supportItems: SupportItem[];
}

export type Item = {
    name: string;
    id: number;
    maxLevel: number;
    maxEvolutionLevel?: number;
    elixirCost?: number;
    iconUrls: ItemIconUrls;
    rarity: Rarity;
}

export type ItemIconUrls = {
    medium: string;
    evolutionMedium?: string;
}

export enum Rarity {
    Champion = "champion",
    Common = "common",
    Epic = "epic",
    Legendary = "legendary",
    Rare = "rare",
}

export type SupportItem = {
    name: string;
    id: number;
    maxLevel: number;
    iconUrls: SupportItemIconUrls;
    rarity: Rarity;
}

export type SupportItemIconUrls = {
    medium: string;
}
