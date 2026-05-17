"use client";

import { useTheme } from "next-themes";


import { Sun, Moon } from "lucide-react";
import { Switch } from "@heroui/react";
export function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    return (
        <Switch
            onChange={() =>
                setTheme(theme === "dark" ? "light" : "dark")
            }
        >
            {({ isSelected }) => (
                <>
                    <Switch.Control
                        className={`h-[31px] w-[51px] bg-blue-500 transition
                    ${isSelected
                                ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]"
                                : ""
                            }`}
                    >
                        <Switch.Thumb
                            className={`size-[27px] bg-white shadow-sm transition
                        ${isSelected ? "ms-[22px] shadow-lg" : ""}`}
                        >
                            <Switch.Icon>
                                {isSelected ? (
                                    <Sun className="size-4 text-cyan-600" />
                                ) : (
                                    <Moon className="size-4 text-blue-600" />
                                )}
                            </Switch.Icon>
                        </Switch.Thumb>
                    </Switch.Control>
                </>
            )}
        </Switch>
    );
}