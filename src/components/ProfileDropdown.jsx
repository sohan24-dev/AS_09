"use client";

import { Dropdown, Label, Button } from "@heroui/react";
import { FaAngleDown } from "react-icons/fa";


import Image from "next/image";
import { authClient } from "@/lib/auth-clients";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProfileDropdown = ({ session }) => {
    const router = useRouter();
    // console.log(session, "session profile");

    return (
        <Dropdown placement="right-bottom">
            <Button
                variant="secondary"
                className="flex items-center gap-2 px-2 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
            >
                <div className="h-8 w-8 rounded-full overflow-hidden">
                    <Image
                        width={40}
                        height={40}
                        src={session?.user?.image}
                        alt="User"
                        className="h-full w-full object-cover"
                    />
                </div>

                <FaAngleDown className="text-xs text-slate-300" />
            </Button>

            <Dropdown.Popover>
                <Dropdown.Menu onAction={(key) => console.log(key)}>
                    <Dropdown.Item id="profile" textValue="Profile">
                        <Link href="/profile">
                            <Label>Profile</Label>
                        </Link>
                    </Dropdown.Item>

                    <Dropdown.Item
                        id="logout"
                        textValue="Logout"
                        variant="danger"
                        onPress={async () => {
                            await authClient.signOut();
                            router.push("/login"); window.location.reload();
                        }}
                    >
                        <Label>Logout</Label>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
};

export default ProfileDropdown;