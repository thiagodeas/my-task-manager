import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode;
}

export const Container = ({ children } : ContainerProps) => {
    return (
        <div className="flex items-center justify-center bg-cover bg-[#290D34] w-screen h-screen">
            {children}
        </div>
    )
}