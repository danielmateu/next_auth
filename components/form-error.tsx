import { FaExclamationTriangle } from "react-icons/fa"

interface FormErrorProps {
    message: string | undefined;
}

export const FormError = ({
    message
}: FormErrorProps) => {

    if (!message) return null
    return (
        <div className="bg-destructive/35 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <FaExclamationTriangle />
            <span>{message}</span>
        </div>
    )
}
