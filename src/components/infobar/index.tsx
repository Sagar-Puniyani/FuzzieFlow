import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { UserButton } from "@clerk/nextjs"

export function InfoBar() {
    return (
        <div className="flex flex-row gap-12" >
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger >
                        <Button variant="outline">btn1</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Add to library</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger >
                        <Button variant="outline">Hover</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Add to library</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <UserButton />
        </div>
    )
}
