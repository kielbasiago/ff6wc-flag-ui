import React from "react";
import { object, string } from "yup";
import { Battle } from "./tabs/Battle";
import { Game } from "./tabs/Game";
import { Graphics } from "./tabs/Graphics";
import { Items } from "./tabs/Items";
import { Magic } from "./tabs/Magic";
import { Objective } from "./tabs/Objective";
import { Misc } from "./tabs/Misc";
import { Party } from "./tabs/Party";

export const WCGameMode = {
    OPEN_WORLD: "open_world",
    CHARACTER_GATED: "character_gating",
} as const;

object({
    mode: string().oneOf([WCGameMode.CHARACTER_GATED, WCGameMode.OPEN_WORLD]),
});

export const WCTabs = {
    GAME: "GAME",
    OBJECTIVES: "OBJECTIVES",
    PARTY: "PARTY",
    BATTLE: "BATTLE",
    MAGIC: "MAGIC",
    ITEMS: "ITEMS",
    GRAPHICS: "GRAPHICS",
    OTHER: "OTHER",
} as const;

export const tabs: Record<keyof typeof WCTabs, React.ReactNode> = {
    BATTLE: <Battle key={"BATTLE"} />,
    GAME: <Game key={"GAME"} />,
    GRAPHICS: <Graphics key={"GRAPHICS"} />,
    ITEMS: <Items key={"ITEMS"} />,
    MAGIC: <Magic key={"MAGIC"} />,
    OBJECTIVES: <Objective key={"OBJECTIVES"} />,
    OTHER: <Misc key={"OTHER"} />,
    PARTY: <Party key={"PARTY"} />,
};

export const inputType = ["select", "string"];
