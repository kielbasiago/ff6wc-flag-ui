import yup from "yup";
export const WCTabs = {
    GAME: "GAME",
    OJBECTIVES: "OJBECTIVES",
    PARTY: "PARTY",
    BATTLE: "BATTLE",
    MAGIC: "MAGIC",
    ITEMS: "ITEMS",
    GRAPHICS: "GRAPHICS",
    OTHER: "OTHER",
} as const;

const fields: Record<keyof typeof WCTabs, Record<string, any>> = {
    BATTLE: {},
    GAME: {},
    GRAPHICS: {},
    ITEMS: {},
    MAGIC: {},
    OJBECTIVES: {},
    OTHER: {},
    PARTY: {},
};
