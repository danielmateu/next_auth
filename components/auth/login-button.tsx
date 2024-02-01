"use client"

import { useRouter } from "next/navigation";

interface LoginButtonRPops {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ({
    children, mode = "redirect", asChild
}: LoginButtonRPops) => {

    const router = useRouter();

    const onClick = () => {
        if (mode === "redirect") {
            router.push("/auth/login");
        }
    }

    if (mode === "modal") {
        return (
            <span>
                TODO: Implement modal
            </span>
        )
    }

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}
