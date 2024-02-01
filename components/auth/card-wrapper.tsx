"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Header } from "./header";
import { Social } from "./social";
import { BackButton } from "./back-button";


interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
}: CardWrapperProps) => {
    return (
        <div>
            <Card className="w-[400px]">
                <CardHeader>
                    {/* <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription> */}
                    <Header label={headerLabel} />
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
                {
                    showSocial && (
                        <CardFooter>
                            <Social />
                        </CardFooter>
                    )
                }
                <CardFooter>
                    <BackButton
                        label={backButtonLabel}
                        href={backButtonHref}
                    />
                </CardFooter>
            </Card>

        </div>
    )
}
