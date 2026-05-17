"use client";

import { Dropdown, Label, Button } from "@heroui/react";
import { FaAngleDown } from "react-icons/fa";

export default function ProfileDropdown() {
    return (
        <Dropdown>
            <Button
                variant="secondary"
                className="flex items-center gap-2 px-2 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
            >

                <div className="h-8 w-8 rounded-full overflow-hidden">
                    <img
                        src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                        alt="John Doe"
                        className="h-full w-full object-cover"
                    />
                </div>


                <FaAngleDown className="text-xs text-slate-300" />
            </Button>


            <Dropdown.Popover>
                <Dropdown.Menu onAction={(key) => console.log(key)}>
                    <Dropdown.Item id="profile" textValue="Profile">
                        <Label>Profile</Label>
                    </Dropdown.Item>

                    <Dropdown.Item id="settings" textValue="Settings">
                        <Label>Settings</Label>
                    </Dropdown.Item>

                    <Dropdown.Item id="copy-link" textValue="Copy link">
                        <Label>Copy link</Label>
                    </Dropdown.Item>

                    <Dropdown.Item
                        id="logout"
                        textValue="Logout"
                        variant="danger"
                    >
                        <Label>Logout</Label>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}